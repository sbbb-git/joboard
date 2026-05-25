import type { JobNormalized } from '../types';
import { detectRole, detectSeniority, normalizeLocation, parseSalary, slugify, stripHtml } from '../normalize';
import { jobHash } from '../dedupe';

interface RemoteOkJob {
  id?: string;
  slug?: string;
  position?: string;
  company?: string;
  location?: string;
  tags?: string[];
  description?: string;
  url?: string;
  apply_url?: string;
  date?: string;
  salary_min?: number;
  salary_max?: number;
  epoch?: number;
}

export async function scrapeRemoteOk(): Promise<JobNormalized[]> {
  const res = await fetch('https://remoteok.com/api', {
    headers: { 'User-Agent': 'slateremote.com-bot/1.0 (+https://slateremote.com)' },
    next: { revalidate: 0 },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`RemoteOK HTTP ${res.status}`);
  const data = (await res.json()) as RemoteOkJob[];
  const techTags = new Set([
    'dev', 'engineer', 'backend', 'frontend', 'fullstack', 'mobile',
    'devops', 'ml', 'ai', 'data', 'security', 'qa', 'product', 'design',
  ]);
  return data
    .filter((j) => j.position && j.company)
    .filter((j) => j.tags?.some((t) => techTags.has(t.toLowerCase())) ?? true)
    .map(mapJob);
}

function mapJob(j: RemoteOkJob): JobNormalized {
  const loc = normalizeLocation(j.location || 'Worldwide');
  const description = stripHtml(j.description || '');
  const postedAt = j.epoch
    ? new Date(j.epoch * 1000).toISOString()
    : j.date
      ? new Date(j.date).toISOString()
      : new Date().toISOString();
  return {
    id: jobHash({ title: j.position!, company: j.company!, location: loc.location }),
    title: j.position!,
    company: j.company!,
    companySlug: slugify(j.company!),
    location: loc.location,
    locationCountry: loc.country,
    role: detectRole(j.position!, j.tags),
    seniority: detectSeniority(j.position!),
    remote: 'full',
    employmentType: 'FULL_TIME',
    salaryMin: j.salary_min || undefined,
    salaryMax: j.salary_max || undefined,
    currency: j.salary_min || j.salary_max ? 'USD' : undefined,
    url: j.apply_url || j.url || `https://remoteok.com/remote-jobs/${j.slug || j.id}`,
    source: 'remoteok',
    postedAt,
    expiresAt: new Date(Date.now() + 60 * 86_400_000).toISOString(),
    description,
    tags: j.tags,
  };
}

// reuse parseSalary indirectly through fields above
void parseSalary;
