import type { Role, Seniority, RemoteType, EmploymentType } from './types';

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

const ROLE_PATTERNS: Array<[Role, RegExp]> = [
  ['frontend', /\b(front[- ]?end|react|vue|angular|svelte|nextjs|next\.js)\b/i],
  ['backend', /\b(back[- ]?end|node|django|rails|spring|laravel|api engineer)\b/i],
  ['fullstack', /\b(full[- ]?stack)\b/i],
  ['mobile', /\b(ios|android|react native|flutter|mobile)\b/i],
  ['ml-ai', /\b(machine learning|ml engineer|ai engineer|llm|deep learning|nlp)\b/i],
  ['data', /\b(data engineer|data scientist|analytics engineer|data analyst|bi engineer)\b/i],
  ['devops', /\b(devops|sre|site reliability|platform engineer|infrastructure|kubernetes)\b/i],
  ['security', /\b(security engineer|appsec|infosec|cyber)\b/i],
  ['qa', /\b(qa engineer|test engineer|sdet|quality assurance)\b/i],
  ['product', /\b(product manager|product owner|pm,?)\b/i],
  ['design', /\b(ux|ui|product designer|graphic designer)\b/i],
];

export function detectRole(title: string, tags: string[] = []): Role {
  const haystack = `${title} ${tags.join(' ')}`;
  for (const [role, re] of ROLE_PATTERNS) {
    if (re.test(haystack)) return role;
  }
  return 'developer';
}

const SENIORITY_PATTERNS: Array<[Seniority, RegExp]> = [
  ['lead', /\b(lead|principal|staff|director|head of|architect)\b/i],
  ['senior', /\b(senior|sr\.?|sr|expert|specialist iv)\b/i],
  ['junior', /\b(junior|jr\.?|entry|intern|graduate|apprentice)\b/i],
];

export function detectSeniority(title: string): Seniority {
  for (const [s, re] of SENIORITY_PATTERNS) {
    if (re.test(title)) return s;
  }
  return 'mid';
}

export function detectRemote(input: string): RemoteType {
  if (/\bhybrid\b/i.test(input)) return 'hybrid';
  if (/\bremote\b|\bworldwide\b|\banywhere\b|\btelecommute\b/i.test(input)) return 'full';
  return 'onsite';
}

export function detectEmployment(input: string): EmploymentType {
  if (/\b(contract|contractor|freelance|consulting)\b/i.test(input)) return 'CONTRACTOR';
  if (/\b(part[- ]?time)\b/i.test(input)) return 'PART_TIME';
  if (/\b(intern|internship)\b/i.test(input)) return 'INTERN';
  return 'FULL_TIME';
}

const COUNTRY_MAP: Array<[string, string]> = [
  ['United States', 'United States'],
  ['USA', 'United States'],
  ['US ', 'United States'],
  ['UK', 'United Kingdom'],
  ['United Kingdom', 'United Kingdom'],
  ['Germany', 'Germany'],
  ['France', 'France'],
  ['Spain', 'Spain'],
  ['Portugal', 'Portugal'],
  ['Canada', 'Canada'],
  ['Mexico', 'Mexico'],
  ['Brazil', 'Brazil'],
  ['Netherlands', 'Netherlands'],
  ['Poland', 'Poland'],
  ['India', 'India'],
  ['Australia', 'Australia'],
  ['Europe', 'Europe'],
  ['EU', 'Europe'],
  ['Worldwide', 'Worldwide'],
  ['Anywhere', 'Worldwide'],
  ['Global', 'Worldwide'],
];

export function normalizeLocation(raw: string | undefined | null): {
  location: string;
  country?: string;
} {
  if (!raw) return { location: 'Worldwide', country: 'Worldwide' };
  const cleaned = raw.trim();
  for (const [needle, mapped] of COUNTRY_MAP) {
    if (cleaned.toLowerCase().includes(needle.toLowerCase())) {
      return { location: cleaned, country: mapped };
    }
  }
  return { location: cleaned };
}

export function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<li>/gi, '- ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export function parseSalary(input: string | undefined | null): {
  min?: number;
  max?: number;
  currency?: string;
} {
  if (!input) return {};
  const text = String(input).replace(/,/g, '');
  const currency = /\$|USD/i.test(text)
    ? 'USD'
    : /€|EUR/i.test(text)
      ? 'EUR'
      : /£|GBP/i.test(text)
        ? 'GBP'
        : undefined;
  const nums = Array.from(text.matchAll(/(\d{2,7})(k)?/gi)).map((m) => {
    const n = parseInt(m[1], 10);
    return m[2] ? n * 1000 : n;
  });
  const filtered = nums.filter((n) => n >= 10000 && n <= 1_000_000);
  if (filtered.length === 0) return { currency };
  if (filtered.length === 1) return { min: filtered[0], currency };
  return { min: Math.min(...filtered), max: Math.max(...filtered), currency };
}
