import type { MetadataRoute } from 'next';
import { allJobs, topCompanies, topCountries } from '@/lib/jobs';
import { ROLES } from '@/lib/types';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { SITE_URL, canonicalPath } from '@/lib/seo';
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

// Emit one <url> per locale per logical page. Listing only the English URL
// and relying on hreflang alternates to surface the other six locales left
// ~87% of the site absent from <loc>, which also meant IndexNow (which reads
// <loc>) never submitted a single non-English page.
//
// URLs are built with canonicalPath so they match the page-level canonical
// exactly. trailingSlash is false, so no URL here may end in a slash.
function localeUrls(path: string, lastModified: Date, priority: number): SitemapEntry[] {
  const languages: Record<string, string> = {
    'x-default': `${SITE_URL}${canonicalPath(DEFAULT_LOCALE, path)}`,
  };
  for (const l of LOCALES) languages[l] = `${SITE_URL}${canonicalPath(l, path)}`;
  return LOCALES.map((l) => ({
    url: `${SITE_URL}${canonicalPath(l, path)}`,
    lastModified,
    // Non-default locales rank slightly below the English original.
    priority: l === DEFAULT_LOCALE ? priority : Math.max(0.1, Math.round((priority - 0.1) * 100) / 100),
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const out: MetadataRoute.Sitemap = [];
  const add = (path: string, lastModified: Date, priority: number) =>
    out.push(...localeUrls(path, lastModified, priority));

  add('', now, 1);
  add('/jobs', now, 0.9);
  add('/skills', now, 0.85);
  add('/cities', now, 0.85);
  add('/guides', now, 0.85);
  add('/salaries', now, 0.85);
  add('/locations', now, 0.8);
  add('/compare', now, 0.8);
  add('/companies', now, 0.7);
  add('/glossary', now, 0.7);
  add('/submit', now, 0.6);
  add('/employers', now, 0.6);
  add('/earn-online', now, 0.75);
  add('/world-cup-2026', now, 0.8);
  for (const city of WC2026_CITIES) add(`/world-cup-2026/${city.slug}`, now, 0.75);
  add('/about', now, 0.5);
  add('/contact', now, 0.4);
  add('/disclosure', now, 0.3);

  for (const role of ROLES) {
    add(`/jobs/${role}`, now, 0.8);
    add(`/salaries/${role}`, now, 0.75);
    for (const country of TOP_COUNTRY_SLUGS) {
      add(`/salaries/${role}/${country}`, now, 0.6);
    }
  }
  for (const s of SKILLS) add(`/skills/${s.slug}`, now, 0.7);
  for (const c of CITIES) add(`/cities/${c.slug}`, now, 0.7);
  for (const g of GUIDES) add(`/guides/${g.slug}`, now, 0.7);
  for (const cmp of COMPARISONS) add(`/compare/${cmp.slug}`, now, 0.65);
  for (const c of topCountries(1000)) add(`/locations/${c.slug}`, now, 0.6);
  for (const c of topCompanies(10000)) add(`/companies/${c.slug}`, now, 0.5);

  // Active job postings only. Expired ones render noindex, so listing them
  // would send Google to pages we explicitly ask it not to index.
  const activeJobs = allJobs().filter((j) => !isExpired(j));
  for (const job of activeJobs) {
    add(`/job/${job.id}`, new Date(job.postedAt), 0.4);
  }

  // Hard cap below Google's 50,000-URL-per-sitemap limit.
  return out.slice(0, 49_500);
}
