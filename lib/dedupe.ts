import { createHash } from 'node:crypto';
import type { JobNormalized } from './types';
import { slugify } from './normalize';

export function jobHash(job: Pick<JobNormalized, 'title' | 'company' | 'location'>): string {
  const key = `${slugify(job.title)}|${slugify(job.company)}|${slugify(job.location)}`;
  return createHash('sha256').update(key).digest('hex').slice(0, 16);
}

export function dedupe(jobs: JobNormalized[]): JobNormalized[] {
  const byHash = new Map<string, JobNormalized>();
  for (const job of jobs) {
    const existing = byHash.get(job.id);
    if (!existing) {
      byHash.set(job.id, job);
      continue;
    }
    if (new Date(job.postedAt) > new Date(existing.postedAt)) {
      byHash.set(job.id, job);
    }
  }
  return Array.from(byHash.values()).sort(
    (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
  );
}
