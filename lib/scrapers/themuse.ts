import type { JobNormalized } from '../types';
import { detectRole, detectSeniority, normalizeLocation, slugify, stripHtml } from '../normalize';
import { jobHash } from '../dedupe';

interface MuseJob {
  id: number;
  name: string;
  company: { name: string };
  locations: Array<{ name: string }>;
  categories: Array<{ name: string }>;
  levels: Array<{ name: string }>;
  type: string;
  contents: string;
  publication_date: string;
  refs: { landing_page: string };
}

const PAGES = [0, 1, 2];

export async function scrapeTheMuse(): Promise<JobNormalized[]> {
  const all: JobNormalized[] = [];
  for (const page of PAGES) {
    try {
      const url = `https://www.themuse.com/api/public/jobs?category=Engineering&category=Data%20Science&category=Design%20%26%20UX&category=Product&page=${page}`;
      const res = await fetch(url, {
        headers: { 'User-Agent': 'slateremote.com-bot/1.0' },
        next: { revalidate: 0 },
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) break;
      const data = (await res.json()) as { results: MuseJob[] };
      for (const j of data.results) {
        const isRemote = j.locations.some((l) => /flexible|remote/i.test(l.name));
        if (!isRemote) continue;
        all.push(mapJob(j));
      }
    } catch {
      break;
    }
  }
  return all;
}

function mapJob(j: MuseJob): JobNormalized {
  const locName = j.locations.find((l) => /remote|flexible/i.test(l.name))?.name || 'Worldwide';
  const loc = normalizeLocation(locName);
  const title = j.name;
  const tags = [
    ...j.categories.map((c) => c.name),
    ...j.levels.map((l) => l.name),
  ];
  return {
    id: jobHash({ title, company: j.company.name, location: loc.location }),
    title,
    company: j.company.name,
    companySlug: slugify(j.company.name),
    location: loc.location,
    locationCountry: loc.country,
    role: detectRole(title, tags),
    seniority: detectSeniority(`${j.levels[0]?.name || ''} ${title}`),
    remote: 'full',
    employmentType: /contract|freelance/i.test(j.type) ? 'CONTRACTOR' : 'FULL_TIME',
    url: j.refs.landing_page,
    source: 'themuse',
    postedAt: new Date(j.publication_date).toISOString(),
    expiresAt: new Date(Date.now() + 60 * 86_400_000).toISOString(),
    description: stripHtml(j.contents || ''),
    tags,
  };
}
