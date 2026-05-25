import type { JobNormalized } from '../types';
import { detectRole, detectSeniority, normalizeLocation, parseSalary, slugify, stripHtml } from '../normalize';
import { jobHash } from '../dedupe';

interface RemotiveJob {
  id: number;
  url: string;
  title: string;
  company_name: string;
  category: string;
  tags: string[];
  job_type: string;
  publication_date: string;
  candidate_required_location: string;
  salary: string;
  description: string;
}

export async function scrapeRemotive(): Promise<JobNormalized[]> {
  const res = await fetch('https://remotive.com/api/remote-jobs?category=software-dev', {
    headers: { 'User-Agent': 'remotedev.work-bot/1.0 (+https://remotedev.work)' },
    next: { revalidate: 0 },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`Remotive HTTP ${res.status}`);
  const data = (await res.json()) as { jobs: RemotiveJob[] };
  return data.jobs.map((j) => mapJob(j));
}

function mapJob(j: RemotiveJob): JobNormalized {
  const loc = normalizeLocation(j.candidate_required_location);
  const sal = parseSalary(j.salary);
  const description = stripHtml(j.description);
  const postedAt = new Date(j.publication_date).toISOString();
  const expiresAt = new Date(Date.now() + 60 * 86_400_000).toISOString();
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
    employmentType: /contract|freelance/i.test(j.job_type) ? 'CONTRACTOR' : 'FULL_TIME',
    salaryMin: sal.min,
    salaryMax: sal.max,
    currency: sal.currency,
    url: j.url,
    source: 'remotive',
    postedAt,
    expiresAt,
    description,
    tags: j.tags,
  };
}
