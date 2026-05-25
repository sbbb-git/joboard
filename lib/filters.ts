import type { JobNormalized } from './types';

const SPAM_TITLE = /\b(urgent|asap|must read|read carefully|earn \$|click here|crypto rich)\b/i;

export function isSpam(job: JobNormalized): boolean {
  if (!job.title || job.title.length < 4) return true;
  if (SPAM_TITLE.test(job.title)) return true;
  if (!job.company || job.company.length < 2) return true;
  if (!job.description || job.description.length < 200) return true;
  if (job.salaryMax && job.salaryMax > 1_000_000) return true;
  if (new Date(job.postedAt).getTime() > Date.now() + 86_400_000) return true;
  if (!job.url || !/^https?:\/\//.test(job.url)) return true;
  return false;
}

export function isExpired(job: JobNormalized, now = Date.now()): boolean {
  return new Date(job.expiresAt).getTime() < now;
}

export function filterActive(jobs: JobNormalized[]): JobNormalized[] {
  const now = Date.now();
  return jobs.filter((j) => !isSpam(j) && !isExpired(j, now));
}
