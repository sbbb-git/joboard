import type { JobNormalized } from '../types';
import { detectRole, detectSeniority, normalizeLocation, parseSalary, slugify, stripHtml } from '../normalize';
import { jobHash } from '../dedupe';

interface WnJob {
  url: string;
  title: string;
  company_name: string;
  category_name: string;
  location: string;
  pub_date: string;
  description: string;
  tags?: string;
  salary_currency?: string;
  salary_min?: number;
  salary_max?: number;
}

export async function scrapeWorkingNomads(): Promise<JobNormalized[]> {
  const res = await fetch('https://www.workingnomads.com/api/exposed_jobs/', {
    headers: { 'User-Agent': 'slateremote.com-bot/1.0' },
    next: { revalidate: 0 },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`WorkingNomads HTTP ${res.status}`);
  const data = (await res.json()) as WnJob[];
  return data
    .filter((j) => j.title && j.company_name)
    .filter((j) => /develop|engineer|design|product|data|devops|security|qa|mobile|ai|ml/i.test(`${j.category_name} ${j.title}`))
    .map(mapJob);
}

function mapJob(j: WnJob): JobNormalized {
  const loc = normalizeLocation(j.location || 'Worldwide');
  const tags = j.tags ? j.tags.split(',').map((t) => t.trim()).slice(0, 8) : [];
  const sal = parseSalary(j.salary_currency ? `${j.salary_currency} ${j.salary_min ?? ''} ${j.salary_max ?? ''}` : null);
  return {
    id: jobHash({ title: j.title, company: j.company_name, location: loc.location }),
    title: j.title,
    company: j.company_name,
    companySlug: slugify(j.company_name),
    location: loc.location,
    locationCountry: loc.country,
    role: detectRole(j.title, tags),
    seniority: detectSeniority(j.title),
    remote: 'full',
    employmentType: 'FULL_TIME',
    salaryMin: j.salary_min || sal.min,
    salaryMax: j.salary_max || sal.max,
    currency: j.salary_currency || sal.currency,
    url: j.url,
    source: 'workingnomads',
    postedAt: new Date(j.pub_date).toISOString(),
    expiresAt: new Date(Date.now() + 60 * 86_400_000).toISOString(),
    description: stripHtml(j.description || ''),
    tags,
  };
}
