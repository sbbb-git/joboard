import type { JobNormalized } from './types';
import { slugify } from './normalize';

// FNV-1a 64-bit hash, returns 16-hex string. Sync, runtime-agnostic
// (works on Node, Bun, Cloudflare Workers, browser).
function fnv1a(str: string): string {
  let hLow = 0x84222325;
  let hHigh = 0xcbf29ce4;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    hLow ^= c;
    // multiply by FNV prime 0x100000001b3 in two 32-bit halves
    const lowMul = Math.imul(hLow, 0x1b3) >>> 0;
    const highMul = (Math.imul(hHigh, 0x1b3) + Math.imul(hLow, 0x100) + (lowMul / 0x100000000)) >>> 0;
    hLow = lowMul >>> 0;
    hHigh = highMul >>> 0;
  }
  return (hHigh.toString(16).padStart(8, '0') + hLow.toString(16).padStart(8, '0')).slice(0, 16);
}

export function jobHash(job: Pick<JobNormalized, 'title' | 'company' | 'location'>): string {
  const key = `${slugify(job.title)}|${slugify(job.company)}|${slugify(job.location)}`;
  return fnv1a(key);
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
