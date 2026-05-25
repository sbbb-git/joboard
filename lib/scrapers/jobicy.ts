import type { JobNormalized } from '../types';
import { detectRole, detectSeniority, normalizeLocation, slugify, stripHtml } from '../normalize';
import { jobHash } from '../dedupe';

interface JobicyJob {
  id: number;
  url: string;
  jobTitle: string;
  companyName: string;
  jobIndustry: string[];
  jobType: string[];
  jobGeo: string;
  jobLevel: string;
  jobExcerpt: string;
  jobDescription: string;
  pubDate: string;
  annualSalaryMin?: number;
  annualSalaryMax?: number;
  salaryCurrency?: string;
}

export async function scrapeJobicy(): Promise<JobNormalized[]> {
  const res = await fetch(
    'https://jobicy.com/api/v2/remote-jobs?count=100',
    {
      headers: { 'User-Agent': 'slateremote.com-bot/1.0' },
      next: { revalidate: 0 },
      signal: AbortSignal.timeout(10_000),
    },
  );
  if (!res.ok) throw new Error(`Jobicy HTTP ${res.status}`);
  const data = (await res.json()) as { jobs: JobicyJob[] };
  return (data.jobs || []).map(mapJob);
}

function mapJob(j: JobicyJob): JobNormalized {
  const loc = normalizeLocation(j.jobGeo || 'Worldwide');
  return {
    id: jobHash({ title: j.jobTitle, company: j.companyName, location: loc.location }),
    title: j.jobTitle,
    company: j.companyName,
    companySlug: slugify(j.companyName),
    location: loc.location,
    locationCountry: loc.country,
    role: detectRole(j.jobTitle, j.jobIndustry),
    seniority: detectSeniority(`${j.jobLevel} ${j.jobTitle}`),
    remote: 'full',
    employmentType: j.jobType?.some((t) => /contract|freelance/i.test(t))
      ? 'CONTRACTOR'
      : 'FULL_TIME',
    salaryMin: j.annualSalaryMin,
    salaryMax: j.annualSalaryMax,
    currency: j.salaryCurrency,
    url: j.url,
    source: 'jobicy',
    postedAt: new Date(j.pubDate).toISOString(),
    expiresAt: new Date(Date.now() + 60 * 86_400_000).toISOString(),
    description: stripHtml(j.jobDescription || j.jobExcerpt || ''),
    tags: j.jobIndustry,
  };
}
