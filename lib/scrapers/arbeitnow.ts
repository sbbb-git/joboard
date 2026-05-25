import type { JobNormalized } from '../types';
import { detectRole, detectSeniority, normalizeLocation, slugify, stripHtml } from '../normalize';
import { jobHash } from '../dedupe';

interface ArbeitnowJob {
  slug: string;
  company_name: string;
  title: string;
  description: string;
  remote: boolean;
  url: string;
  tags: string[];
  job_types: string[];
  location: string;
  created_at: number;
}

export async function scrapeArbeitnow(): Promise<JobNormalized[]> {
  const res = await fetch('https://www.arbeitnow.com/api/job-board-api', {
    headers: { 'User-Agent': 'slateremote.com-bot/1.0' },
    next: { revalidate: 0 },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`Arbeitnow HTTP ${res.status}`);
  const json = (await res.json()) as { data: ArbeitnowJob[] };
  return json.data
    .filter((j) => j.remote)
    .map((j): JobNormalized => {
      const loc = normalizeLocation(j.location);
      return {
        id: jobHash({ title: j.title, company: j.company_name, location: loc.location }),
        title: j.title,
        company: j.company_name,
        companySlug: slugify(j.company_name),
        location: loc.location,
        locationCountry: loc.country,
        role: detectRole(j.title, j.tags),
        seniority: detectSeniority(j.title),
        remote: 'full',
        employmentType:
          j.job_types?.some((t) => /contract|freelance/i.test(t)) ? 'CONTRACTOR' : 'FULL_TIME',
        url: j.url,
        source: 'arbeitnow',
        postedAt: new Date(j.created_at * 1000).toISOString(),
        expiresAt: new Date(Date.now() + 60 * 86_400_000).toISOString(),
        description: stripHtml(j.description),
        tags: j.tags,
      };
    });
}
