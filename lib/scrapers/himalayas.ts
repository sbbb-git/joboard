import type { JobNormalized } from '../types';
import { detectRole, detectSeniority, normalizeLocation, slugify, stripHtml } from '../normalize';
import { jobHash } from '../dedupe';

interface HimalayasJob {
  guid?: string;
  title: string;
  companyName?: string;
  company?: string;
  excerpt?: string;
  description?: string;
  applicationLink?: string;
  url?: string;
  pubDate?: string;
  locationRestrictions?: string[];
  categories?: string[];
  jobType?: string;
  minSalary?: number;
  maxSalary?: number;
  currency?: string;
}

export async function scrapeHimalayas(): Promise<JobNormalized[]> {
  const res = await fetch('https://himalayas.app/jobs/api', {
    headers: { 'User-Agent': 'remotedev.work-bot/1.0' },
    next: { revalidate: 0 },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`Himalayas HTTP ${res.status}`);
  const data = (await res.json()) as { jobs: HimalayasJob[] };
  return data.jobs.map(mapJob);
}

function mapJob(j: HimalayasJob): JobNormalized {
  const company = j.companyName || j.company || 'Unknown';
  const locText = j.locationRestrictions?.join(', ') || 'Worldwide';
  const loc = normalizeLocation(locText);
  const description = stripHtml(j.description || j.excerpt || '');
  return {
    id: jobHash({ title: j.title, company, location: loc.location }),
    title: j.title,
    company,
    companySlug: slugify(company),
    location: loc.location,
    locationCountry: loc.country,
    role: detectRole(j.title, j.categories),
    seniority: detectSeniority(j.title),
    remote: 'full',
    employmentType:
      j.jobType && /contract|freelance/i.test(j.jobType) ? 'CONTRACTOR' : 'FULL_TIME',
    salaryMin: j.minSalary,
    salaryMax: j.maxSalary,
    currency: j.currency,
    url: j.applicationLink || j.url || '',
    source: 'himalayas',
    postedAt: j.pubDate ? new Date(j.pubDate).toISOString() : new Date().toISOString(),
    expiresAt: new Date(Date.now() + 60 * 86_400_000).toISOString(),
    description,
    tags: j.categories,
  };
}
