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

// Salary stats for one role in one country, grouped by currency. Shared by
// the salaries/[role]/[country] page and the sitemap so both agree on
// whether a given combination has anything to show: 129 of the 144
// combinations currently have no published salary at all, and an indexable
// "not enough data yet" page repeated across 7 locales is 903 near-duplicate
// thin pages competing for a crawl budget the job pages need.
export function salaryStatsByCountry(role: Role, countrySlug: string) {
  const target = countrySlug.replace(/-/g, ' ').toLowerCase();
  const byCurrency = new Map<string, number[]>();
  for (const j of DATA.jobs) {
    if (j.role !== role) continue;
    if (j.locationCountry?.toLowerCase() !== target) continue;
    if (!j.currency) continue;
    const v =
      j.salaryMin && j.salaryMax
        ? (j.salaryMin + j.salaryMax) / 2
        : j.salaryMin || j.salaryMax || null;
    if (!v) continue;
    if (!byCurrency.has(j.currency)) byCurrency.set(j.currency, []);
    byCurrency.get(j.currency)!.push(v);
  }
  const results: Array<{
    currency: string;
    count: number;
    median: number;
    avg: number;
    p25: number;
    p75: number;
  }> = [];
  for (const [currency, vals] of byCurrency) {
    if (vals.length === 0) continue;
    vals.sort((a, b) => a - b);
    results.push({
      currency,
      count: vals.length,
      median: vals[Math.floor(vals.length / 2)],
      avg: Math.round(vals.reduce((a, b) => a + b, 0) / vals.length),
      p25: vals[Math.floor(vals.length * 0.25)],
      p75: vals[Math.floor(vals.length * 0.75)],
    });
  }
  return results;
}

export function hasCountrySalaryData(role: Role, countrySlug: string): boolean {
  return salaryStatsByCountry(role, countrySlug).length > 0;
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
