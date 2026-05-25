import type { JobNormalized } from '../types';
import { detectRole, detectSeniority, normalizeLocation, slugify, stripHtml } from '../normalize';
import { jobHash } from '../dedupe';

interface AlgoliaHit {
  objectID: string;
  author: string;
  comment_text?: string;
  story_id: number;
  created_at: string;
}

const REMOTE_RE = /\bremote\b/i;
const COMPANY_RE = /^([A-Z][\w&. -]{1,40})(?:\s*[|—-]|\n)/m;
const TITLE_HINTS = /\b(engineer|developer|designer|manager|scientist|architect|lead|sre|devops)\b/i;

export async function scrapeHackerNews(): Promise<JobNormalized[]> {
  const storyId = await findCurrentWhoIsHiringStory();
  if (!storyId) return [];
  const res = await fetch(
    `https://hn.algolia.com/api/v1/search?tags=comment,story_${storyId}&hitsPerPage=1000`,
    {
      headers: { 'User-Agent': 'slateremote.com-bot/1.0' },
      next: { revalidate: 0 },
      signal: AbortSignal.timeout(10_000),
    },
  );
  if (!res.ok) return [];
  const data = (await res.json()) as { hits: AlgoliaHit[] };
  const jobs: JobNormalized[] = [];
  for (const hit of data.hits) {
    const text = stripHtml(hit.comment_text || '');
    if (!REMOTE_RE.test(text)) continue;
    if (!TITLE_HINTS.test(text)) continue;
    const job = parseComment(hit, text);
    if (job) jobs.push(job);
  }
  return jobs;
}

async function findCurrentWhoIsHiringStory(): Promise<number | null> {
  const res = await fetch(
    'https://hn.algolia.com/api/v1/search?query=Ask+HN+Who+is+hiring&tags=story,author_whoishiring&hitsPerPage=3',
    {
      headers: { 'User-Agent': 'slateremote.com-bot/1.0' },
      signal: AbortSignal.timeout(10_000),
    },
  );
  if (!res.ok) return null;
  const data = (await res.json()) as { hits: Array<{ objectID: string; title: string }> };
  const match = data.hits.find((h) => /who is hiring/i.test(h.title));
  return match ? Number(match.objectID) : null;
}

function parseComment(hit: AlgoliaHit, text: string): JobNormalized | null {
  const firstLine = text.split('\n').find((l) => l.trim().length > 0) || '';
  const compMatch = firstLine.match(COMPANY_RE) ?? text.match(COMPANY_RE);
  const company = compMatch ? compMatch[1].trim().slice(0, 60) : null;
  if (!company) return null;
  const titleGuess = (firstLine.split(/[|—-]/)[1] || firstLine).slice(0, 100).trim();
  if (!titleGuess || !TITLE_HINTS.test(titleGuess)) return null;
  const loc = normalizeLocation('Worldwide');
  return {
    id: jobHash({ title: titleGuess, company, location: loc.location }),
    title: titleGuess,
    company,
    companySlug: slugify(company),
    location: loc.location,
    locationCountry: loc.country,
    role: detectRole(titleGuess),
    seniority: detectSeniority(titleGuess),
    remote: 'full',
    employmentType: /contract|freelance/i.test(text) ? 'CONTRACTOR' : 'FULL_TIME',
    url: `https://news.ycombinator.com/item?id=${hit.objectID}`,
    source: 'hackernews',
    postedAt: new Date(hit.created_at).toISOString(),
    expiresAt: new Date(Date.now() + 35 * 86_400_000).toISOString(),
    description: text.slice(0, 4000),
  };
}
