import type { MetadataRoute } from 'next';
import {
  allJobs,
  topCompanies,
  topCountries,
  hasCountrySalaryData,
  COMPANY_INDEX_MIN_JOBS,
} from '@/lib/jobs';
import { ROLES } from '@/lib/types';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { SITE_URL, canonicalPath } from '@/lib/seo';
import { isExpired } from '@/lib/filters';
import { SKILLS } from '@/lib/skills';
import { GUIDES } from '@/lib/guides';
import { hasGuideTranslation } from '@/lib/guides-body-i18n';

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
//
// lastModified is omitted for editorial pages. Stamping every URL with the
// build time told Google all 8,700 pages changed on every deploy, which is
// false for guides, city profiles and comparisons and teaches it to discount
// the signal. Only pages whose content actually moves with the job index
// carry a date.
function localeUrls(
  path: string,
  lastModified: Date | undefined,
  priority: number,
  locales: readonly Locale[] = LOCALES,
): SitemapEntry[] {
  const languages: Record<string, string> = {
    'x-default': `${SITE_URL}${canonicalPath(DEFAULT_LOCALE, path)}`,
  };
  for (const l of locales) languages[l] = `${SITE_URL}${canonicalPath(l, path)}`;
  return locales.map((l) => ({
    url: `${SITE_URL}${canonicalPath(l, path)}`,
    ...(lastModified ? { lastModified } : {}),
    // Non-default locales rank slightly below the English original.
    priority: l === DEFAULT_LOCALE ? priority : Math.max(0.1, Math.round((priority - 0.1) * 100) / 100),
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const out: MetadataRoute.Sitemap = [];
  const add = (path: string, lastModified: Date | undefined, priority: number) =>
    out.push(...localeUrls(path, lastModified, priority));
  // Editorial pages: no lastmod, they do not change when the index refreshes.
  const addStatic = (path: string, priority: number) => add(path, undefined, priority);

  add('', now, 1);
  add('/jobs', now, 0.9);
  add('/skills', now, 0.85);
  add('/guides', now, 0.85);
  add('/salaries', now, 0.85);
  add('/locations', now, 0.8);
  add('/companies', now, 0.7);
  addStatic('/glossary', 0.7);
  addStatic('/submit', 0.6);
  addStatic('/employers', 0.6);
  addStatic('/earn-online', 0.75);
  addStatic('/network', 0.5);
  addStatic('/about', 0.5);
  addStatic('/contact', 0.4);
  addStatic('/disclosure', 0.3);

  for (const role of ROLES) {
    add(`/jobs/${role}`, now, 0.8);
    add(`/salaries/${role}`, now, 0.75);
    for (const country of TOP_COUNTRY_SLUGS) {
      // Same rule the page applies via buildMetadata's index flag: a
      // combination with no published salary band anywhere renders a stub,
      // so listing it would point Google at a page we ask it not to index.
      if (!hasCountrySalaryData(role, country)) continue;
      add(`/salaries/${role}/${country}`, now, 0.6);
    }
  }
  for (const s of SKILLS) add(`/skills/${s.slug}`, now, 0.7);
  // Only the locales a guide is actually translated into; the rest render
  // noindex because they would be English text under a French/German URL.
  for (const g of GUIDES) {
    const langs = LOCALES.filter((l) => hasGuideTranslation(g.slug, l));
    out.push(...localeUrls(`/guides/${g.slug}`, undefined, 0.7, langs));
  }
  for (const c of topCountries(1000)) add(`/locations/${c.slug}`, now, 0.6);
  // Same threshold the company page applies: single-opening companies render
  // noindex, so listing them would point Google at pages we ask it to skip.
  for (const c of topCompanies(10000)) {
    if (c.count < COMPANY_INDEX_MIN_JOBS) continue;
    add(`/companies/${c.slug}`, now, 0.5);
  }

  // Active job postings only. Expired ones render noindex, so listing them
  // would send Google to pages we explicitly ask it not to index.
  const activeJobs = allJobs().filter((j) => !isExpired(j));
  for (const job of activeJobs) {
    add(`/job/${job.id}`, new Date(job.postedAt), 0.4);
  }

  // Hard cap below Google's 50,000-URL-per-sitemap limit.
  return out.slice(0, 49_500);
}
