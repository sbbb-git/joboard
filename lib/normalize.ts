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

// tags is nullable, not just optional: several upstream APIs send an explicit
// null for their category field, and a default parameter only fills in for
// undefined. That threw on tags.join() and took out the whole source.
export function detectRole(title: string, tags?: string[] | null): Role {
  const haystack = `${title} ${(tags ?? []).join(' ')}`;
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

// Ordered: the first needle found in the location string wins, so more
// specific entries must come before the ones they would otherwise collide
// with ("Indiana" before "India", "Austria" before nothing that contains it).
// Only unambiguous mappings belong here. Regions (EMEA, LATAM, "North
// America") and non-places ("Homeoffice", "CET +/- 3 hours") are left
// unresolved on purpose rather than guessed at, because locationCountry
// feeds applicantLocationRequirements in the JobPosting structured data and
// a wrong country there is worse than an absent one.
const COUNTRY_MAP: Array<[string, string]> = [
  // US states and cities seen in the feeds, before the broader needles.
  ['Indiana', 'United States'],
  ['Texas', 'United States'],
  ['Illinois', 'United States'],
  ['California', 'United States'],
  ['Missouri', 'United States'],
  ['Carlsbad', 'United States'],
  // Unambiguous country names the original map was missing.
  ['Argentina', 'Argentina'],
  ['Philippines', 'Philippines'],
  ['Bangladesh', 'Bangladesh'],
  ['Belgium', 'Belgium'],
  ['Switzerland', 'Switzerland'],
  ['South Korea', 'South Korea'],
  ['Egypt', 'Egypt'],
  ['Austria', 'Austria'],
  ['Vietnam', 'Vietnam'],
  ['Japan', 'Japan'],
  ['Israel', 'Israel'],
  ['Estonia', 'Estonia'],
  ['Indonesia', 'Indonesia'],
  ['Ethiopia', 'Ethiopia'],
  ['Hong Kong', 'Hong Kong'],
  ['Colombia', 'Colombia'],
  ['Albania', 'Albania'],
  ['Cambodia', 'Cambodia'],
  // Major cities that map to exactly one country.
  ['Hamburg', 'Germany'],
  ['Berlin', 'Germany'],
  ['Munich', 'Germany'],
  ['Leipzig', 'Germany'],
  ['Frankfurt', 'Germany'],
  ['Barcelona', 'Spain'],
  ['Albufeira', 'Portugal'],
  ['Buenos Aires', 'Argentina'],
  ['Medellin', 'Colombia'],
  ['Bogota', 'Colombia'],
  ['Phnom Penh', 'Cambodia'],
  ['Tirana', 'Albania'],
  ['Edinburgh', 'United Kingdom'],
  ['Dunfermline', 'United Kingdom'],
  ['Southampton', 'United Kingdom'],
  ['Warrington', 'United Kingdom'],
  ['Oxford', 'United Kingdom'],
  ['Corby', 'United Kingdom'],
  ['Chennai', 'India'],
  ['Telangana', 'India'],
  ['Nagpur', 'India'],
  ['Ludhiana', 'India'],
  ['Adelaide', 'Australia'],
  ['Hobart', 'Australia'],
  ['Shepparton', 'Australia'],
  ['United States', 'United States'],
  ['USA', 'United States'],
  ['US ', 'United States'],
  ['UK', 'United Kingdom'],
  ['United Kingdom', 'United Kingdom'],
  ['Germany', 'Germany'],
  ['Deutschland', 'Germany'],
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

// Second pass for anything COUNTRY_MAP misses: every country by its common
// English name (ASCII, since the name becomes a /locations/ URL slug), plus a
// few aliases. Hand-maintained lists kept falling behind the feeds, leaving
// postings with no country and therefore no applicantLocationRequirements in
// their JobPosting data, which Google Jobs requires for remote roles.
//
// Matched on word boundaries so "Oman" does not fire inside "Romania",
// "Iran" inside "Tirana" or "Niger" inside "Nigeria", and longest names first
// so "South Sudan" wins over "Sudan". Georgia is left out on purpose: it is
// also a US state and shows up in US postings.
const COUNTRY_NAMES = (
  'Afghanistan,Albania,Algeria,Andorra,Angola,Antigua and Barbuda,Argentina,Armenia,Australia,Austria,' +
  'Azerbaijan,Bahamas,Bahrain,Bangladesh,Barbados,Belarus,Belgium,Belize,Benin,Bhutan,Bolivia,' +
  'Bosnia and Herzegovina,Botswana,Brazil,Brunei,Bulgaria,Burkina Faso,Burundi,Cambodia,Cameroon,Canada,' +
  'Cape Verde,Central African Republic,Chad,Chile,China,Colombia,Comoros,Costa Rica,Croatia,Cuba,Cyprus,' +
  'Czechia,Denmark,Djibouti,Dominica,Dominican Republic,Ecuador,Egypt,El Salvador,Equatorial Guinea,Eritrea,' +
  'Estonia,Eswatini,Ethiopia,Fiji,Finland,France,Gabon,Gambia,Germany,Ghana,Greece,Grenada,Guatemala,Guinea,' +
  'Guinea-Bissau,Guyana,Haiti,Honduras,Hong Kong,Hungary,Iceland,India,Indonesia,Iran,Iraq,Ireland,Israel,Italy,' +
  'Ivory Coast,Jamaica,Japan,Jordan,Kazakhstan,Kenya,Kosovo,Kuwait,Kyrgyzstan,Laos,Latvia,Lebanon,Lesotho,' +
  'Liberia,Libya,Liechtenstein,Lithuania,Luxembourg,Madagascar,Malawi,Malaysia,Maldives,Mali,Malta,Mauritania,' +
  'Mauritius,Mexico,Moldova,Monaco,Mongolia,Montenegro,Morocco,Mozambique,Myanmar,Namibia,Nepal,Netherlands,' +
  'New Zealand,Nicaragua,Niger,Nigeria,North Macedonia,Norway,Oman,Pakistan,Palestine,Panama,Papua New Guinea,' +
  'Paraguay,Peru,Philippines,Poland,Portugal,Puerto Rico,Qatar,Romania,Russia,Rwanda,Saint Lucia,Samoa,' +
  'San Marino,Saudi Arabia,Senegal,Serbia,Seychelles,Sierra Leone,Singapore,Slovakia,Slovenia,Somalia,' +
  'South Africa,South Korea,South Sudan,Spain,Sri Lanka,Sudan,Suriname,Sweden,Switzerland,Syria,Taiwan,' +
  'Tajikistan,Tanzania,Thailand,Togo,Trinidad and Tobago,Tunisia,Turkey,Turkmenistan,Uganda,Ukraine,' +
  'United Arab Emirates,United Kingdom,United States,Uruguay,Uzbekistan,Venezuela,Vietnam,Yemen,Zambia,Zimbabwe'
).split(',');

const COUNTRY_ALIASES: Array<[string, string]> = [
  ['Türkiye', 'Turkey'],
  ['Turkiye', 'Turkey'],
  ['Czech Republic', 'Czechia'],
  ["Côte d'Ivoire", 'Ivory Coast'],
  ['Viet Nam', 'Vietnam'],
  ['UAE', 'United Arab Emirates'],
];

// Major cities that name exactly one country, for postings that give only a
// city. Deliberately short and unambiguous: Melbourne (AU or Florida),
// Cambridge, Portland, Vancouver (BC or WA) and similar are left out.
const MAJOR_CITIES: Array<[string, string]> = [
  ['New York City', 'United States'], ['San Francisco', 'United States'], ['Los Angeles', 'United States'],
  ['Redwood City', 'United States'], ['Boston', 'United States'], ['Seattle', 'United States'],
  ['Chicago', 'United States'], ['Cincinnati', 'United States'], ['Wichita', 'United States'],
  ['Denver', 'United States'], ['Philadelphia', 'United States'], ['San Diego', 'United States'],
  ['San Jose', 'United States'], ['Palo Alto', 'United States'], ['Mountain View', 'United States'],
  ['Toronto', 'Canada'], ['Montreal', 'Canada'], ['Ottawa', 'Canada'], ['Calgary', 'Canada'],
  ['Greater London', 'United Kingdom'], ['London', 'United Kingdom'], ['Manchester', 'United Kingdom'],
  ['Dublin', 'Ireland'], ['Paris', 'France'], ['Lyon', 'France'], ['Amsterdam', 'Netherlands'],
  ['Madrid', 'Spain'], ['Lisbon', 'Portugal'], ['Warsaw', 'Poland'], ['Krakow', 'Poland'],
  ['Prague', 'Czechia'], ['Budapest', 'Hungary'], ['Vienna', 'Austria'], ['Zurich', 'Switzerland'],
  ['Stockholm', 'Sweden'], ['Copenhagen', 'Denmark'], ['Oslo', 'Norway'], ['Helsinki', 'Finland'],
  ['Bucharest', 'Romania'], ['Athens', 'Greece'], ['Kyiv', 'Ukraine'], ['Istanbul', 'Turkey'],
  ['Tel Aviv', 'Israel'], ['Dubai', 'United Arab Emirates'], ['Abu Dhabi', 'United Arab Emirates'],
  ['Riyadh', 'Saudi Arabia'], ['Cairo', 'Egypt'], ['Lagos', 'Nigeria'], ['Nairobi', 'Kenya'],
  ['Cape Town', 'South Africa'], ['Johannesburg', 'South Africa'],
  ['Bangalore', 'India'], ['Bengaluru', 'India'], ['Mumbai', 'India'], ['New Delhi', 'India'],
  ['Hyderabad', 'India'], ['Pune', 'India'], ['Agra', 'India'], ['Dehradun', 'India'], ['Kolkata', 'India'],
  ['Seoul', 'South Korea'], ['Tokyo', 'Japan'], ['Bangkok', 'Thailand'], ['Manila', 'Philippines'],
  ['Jakarta', 'Indonesia'], ['Kuala Lumpur', 'Malaysia'], ['Ho Chi Minh City', 'Vietnam'], ['Hanoi', 'Vietnam'],
  ['Taipei', 'Taiwan'], ['Shanghai', 'China'], ['Beijing', 'China'], ['Sydney', 'Australia'],
  ['Auckland', 'New Zealand'], ['Sao Paulo', 'Brazil'], ['São Paulo', 'Brazil'], ['Mexico City', 'Mexico'],
  ['Lima', 'Peru'], ['Santiago', 'Chile'],
  // Arabic-script names seen in the feeds.
  ['مسقط', 'Oman'], ['عمان', 'Oman'], ['دبي', 'United Arab Emirates'], ['الرياض', 'Saudi Arabia'],
];

const escapeRe = (x: string) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const COUNTRY_MATCHERS: Array<[RegExp, string]> = [
  ...COUNTRY_ALIASES,
  ...COUNTRY_NAMES.map((n): [string, string] => [n, n]),
  ...MAJOR_CITIES,
]
  .sort((a, b) => b[0].length - a[0].length)
  .map(([needle, mapped]) => [new RegExp(`(^|[^\\p{L}])${escapeRe(needle)}($|[^\\p{L}])`, 'iu'), mapped]);

// Short upper-case codes (US, USA, UK, EU) must match as whole words and in
// capitals. As case-insensitive substrings they fired inside other words:
// "Kyiv, Ukraine" became United Kingdom, "Deutschland" became Europe and
// "Belarus / Russia" became United States, and those countries went straight
// into the JobPosting structured data. Names keep the original substring rule.
function matchesNeedle(text: string, needle: string): boolean {
  const code = needle.trim();
  if (/^[A-Z]{2,3}$/.test(code)) {
    return new RegExp(`(^|[^A-Za-z])${code}($|[^A-Za-z])`).test(text);
  }
  return text.toLowerCase().includes(needle.toLowerCase());
}

export function normalizeLocation(raw: string | undefined | null): {
  location: string;
  country?: string;
} {
  if (!raw) return { location: 'Worldwide', country: 'Worldwide' };
  const cleaned = raw.trim();
  for (const [needle, mapped] of COUNTRY_MAP) {
    if (matchesNeedle(cleaned, needle)) return { location: cleaned, country: mapped };
  }
  for (const [re, mapped] of COUNTRY_MATCHERS) {
    if (re.test(cleaned)) return { location: cleaned, country: mapped };
  }
  // "Remote - US", "US only". Case-sensitive on purpose so the pronoun "us"
  // never matches.
  if (/(^|[^A-Za-z])(US|USA)($|[^A-Za-z])/.test(cleaned)) return { location: cleaned, country: 'United States' };
  return { location: cleaned };
}

// Upstream feeds send HTML-encoded plain text in fields that are not HTML:
// a company called "Hook &amp; Ladder" was rendering literally as "&amp;" on
// the page, in the JobPosting hiringOrganization, and as "hook-amp-ladder" in
// the URL. Decoding belongs in its own function so it can be applied to plain
// text fields (company, title) and not only to descriptions.
// RemoteOK's API returns text that is already mojibake: UTF-8 bytes that were
// decoded as Latin-1 somewhere upstream, so "You’ll" arrives as "You\u00e2\u0080\u0099ll"
// and Arabic place names as runs of "\u00d9\u0085\u00d8...". Repair each run by
// turning its code points back into bytes and reading them as UTF-8. A run is
// only replaced when it decodes cleanly, so genuine accented text ("Zürich",
// "Côte") is left alone.
const utf8 = new TextDecoder('utf-8', { fatal: true });
export function fixMojibake(text: string): string {
  return text.replace(/[\u00C2-\u00F4][\u0080-\u00BF]{1,3}/g, (run) => {
    try {
      return utf8.decode(Uint8Array.from(run, (ch) => ch.charCodeAt(0)));
    } catch {
      return run;
    }
  });
}

export function decodeEntities(text: string): string {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0*39;|&apos;|&#x0*27;/gi, "'")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    // Ampersand last: decoding it first would let "&amp;lt;" become "<".
    .replace(/&amp;/g, '&');
}

export function stripHtml(html: string): string {
  // Decode BEFORE stripping, then again after. Several feeds (We Work
  // Remotely's RSS among them) deliver entity-encoded markup, so stripping
  // first found no tags to remove and the later decode turned "&lt;p&gt;"
  // into a literal "<p>" in the visible text and in the JobPosting
  // description. Decoding first turns that markup back into real tags the
  // stripper can remove; the second pass handles entities that were only
  // encoded once. Output is rendered as escaped JSX text, so surfacing tags
  // here can only remove markup, never introduce live HTML.
  const tags = decodeEntities(html)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<li>/gi, '- ')
    .replace(/<[^>]+>/g, '');
  return decodeEntities(tags)
    .replace(/[ \t]+\n/g, '\n')
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
