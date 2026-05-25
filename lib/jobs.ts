import type { JobNormalized, JobsFile, Role } from './types';
import { ROLES } from './types';
import jobsData from '../data/jobs.json';

const DATA = jobsData as JobsFile;

export function readJobs(): JobsFile {
  return DATA;
}

export function allJobs(): JobNormalized[] {
  return DATA.jobs;
}

export function jobById(id: string): JobNormalized | undefined {
  return DATA.jobs.find((j) => j.id === id);
}

export function jobsByRole(role: Role): JobNormalized[] {
  return DATA.jobs.filter((j) => j.role === role);
}

export function jobsByCompany(companySlug: string): JobNormalized[] {
  return DATA.jobs.filter((j) => j.companySlug === companySlug);
}

export function jobsByCountry(country: string): JobNormalized[] {
  const target = country.toLowerCase();
  return DATA.jobs.filter((j) => j.locationCountry?.toLowerCase() === target);
}

export function topCompanies(limit = 100): Array<{ slug: string; name: string; count: number }> {
  const map = new Map<string, { name: string; count: number }>();
  for (const j of DATA.jobs) {
    const existing = map.get(j.companySlug);
    if (existing) existing.count += 1;
    else map.set(j.companySlug, { name: j.company, count: 1 });
  }
  return Array.from(map.entries())
    .map(([slug, v]) => ({ slug, ...v }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

export function topCountries(
  limit = 50,
): Array<{ slug: string; name: string; count: number }> {
  const map = new Map<string, number>();
  for (const j of DATA.jobs) {
    if (!j.locationCountry) continue;
    map.set(j.locationCountry, (map.get(j.locationCountry) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .map(([name, count]) => ({ slug: name.toLowerCase().replace(/\s+/g, '-'), name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

export function rolesWithCounts(): Array<{ role: Role; count: number }> {
  const map = new Map<Role, number>();
  for (const r of ROLES) map.set(r, 0);
  for (const j of DATA.jobs) map.set(j.role, (map.get(j.role) ?? 0) + 1);
  return Array.from(map.entries()).map(([role, count]) => ({ role, count }));
}

export function salaryStats(role: Role, currency = 'USD') {
  const vals: number[] = [];
  for (const j of DATA.jobs) {
    if (j.role !== role) continue;
    if (j.currency && j.currency !== currency) continue;
    if (j.salaryMin && j.salaryMax) vals.push((j.salaryMin + j.salaryMax) / 2);
    else if (j.salaryMin) vals.push(j.salaryMin);
    else if (j.salaryMax) vals.push(j.salaryMax);
  }
  if (vals.length === 0) return null;
  vals.sort((a, b) => a - b);
  const median = vals[Math.floor(vals.length / 2)];
  const p25 = vals[Math.floor(vals.length * 0.25)];
  const p75 = vals[Math.floor(vals.length * 0.75)];
  const avg = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
  return { count: vals.length, median, avg, p25, p75, currency };
}

export function paginate<T>(items: T[], page: number, perPage = 30) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    page: safePage,
    totalPages,
    total,
    perPage,
  };
}
