import type { MetadataRoute } from 'next';
import { allJobs, topCompanies, topCountries } from '@/lib/jobs';
import { ROLES } from '@/lib/types';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { SITE_URL } from '@/lib/seo';
import { isExpired } from '@/lib/filters';
import { SKILLS } from '@/lib/skills';
import { CITIES } from '@/lib/cities';
import { GUIDES } from '@/lib/guides';
import { COMPARISONS } from '@/lib/comparisons';
import { WC2026_CITIES } from '@/lib/world-cup-2026';

export const dynamic = 'force-static';

const TOP_COUNTRY_SLUGS = [
  'united-states',
  'united-kingdom',
  'germany',
  'france',
  'spain',
  'portugal',
  'netherlands',
  'canada',
  'mexico',
  'brazil',
  'india',
  'australia',
];

type SitemapEntry = MetadataRoute.Sitemap[number];

// Build one entry per logical page, with hreflang alternates listing every
// locale variant. Google reads alternates.languages and emits proper
// <xhtml:link rel="alternate" hreflang="..."> in the XML output.
function entry(path: string, lastModified: Date, priority: number): SitemapEntry {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const languages: Record<string, string> = { 'x-default': `${SITE_URL}/${DEFAULT_LOCALE}${clean}` };
  for (const l of LOCALES) languages[l] = `${SITE_URL}/${l}${clean}`;
  return {
    url: `${SITE_URL}/${DEFAULT_LOCALE}${clean}`,
    lastModified,
    priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Locale-agnostic homepage variants
  entries.push(entry('', now, 1));
  entries.push(entry('/jobs', now, 0.9));
  entries.push(entry('/skills', now, 0.85));
  entries.push(entry('/cities', now, 0.85));
  entries.push(entry('/guides', now, 0.85));
  entries.push(entry('/compare', now, 0.8));
  entries.push(entry('/companies', now, 0.7));
  entries.push(entry('/glossary', now, 0.7));
  entries.push(entry('/submit', now, 0.6));
  entries.push(entry('/employers', now, 0.6));
  entries.push(entry('/earn-online', now, 0.75));
  entries.push(entry('/world-cup-2026', now, 0.8));
  for (const city of WC2026_CITIES) entries.push(entry(`/world-cup-2026/${city.slug}`, now, 0.75));
  entries.push(entry('/about', now, 0.5));
  entries.push(entry('/contact', now, 0.4));
  entries.push(entry('/disclosure', now, 0.3));

  for (const role of ROLES) {
    entries.push(entry(`/jobs/${role}`, now, 0.8));
    entries.push(entry(`/salaries/${role}`, now, 0.75));
    for (const country of TOP_COUNTRY_SLUGS) {
      entries.push(entry(`/salaries/${role}/${country}`, now, 0.6));
    }
  }
  for (const s of SKILLS) entries.push(entry(`/skills/${s.slug}`, now, 0.7));
  for (const c of CITIES) entries.push(entry(`/cities/${c.slug}`, now, 0.7));
  for (const g of GUIDES) entries.push(entry(`/guides/${g.slug}`, now, 0.7));
  for (const cmp of COMPARISONS) entries.push(entry(`/compare/${cmp.slug}`, now, 0.65));
  for (const c of topCountries(1000)) entries.push(entry(`/locations/${c.slug}`, now, 0.6));
  for (const c of topCompanies(10000)) entries.push(entry(`/companies/${c.slug}`, now, 0.5));

  // Active job postings: one entry per job with all locale alternates
  const activeJobs = allJobs().filter((j) => !isExpired(j));
  for (const job of activeJobs) {
    entries.push(entry(`/job/${job.id}`, new Date(job.postedAt), 0.4));
  }

  return entries.slice(0, 49_500);
}
