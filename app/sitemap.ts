import type { MetadataRoute } from 'next';
import { allJobs, topCompanies, topCountries } from '@/lib/jobs';
import { ROLES } from '@/lib/types';
import { LOCALES } from '@/lib/i18n';
import { SITE_URL } from '@/lib/seo';
import { isExpired } from '@/lib/filters';
import { SKILLS } from '@/lib/skills';
import { CITIES } from '@/lib/cities';
import { GUIDES } from '@/lib/guides';
import { COMPARISONS } from '@/lib/comparisons';

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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of LOCALES) {
    const root = `${SITE_URL}/${lang}`;
    entries.push({ url: root, lastModified: now, priority: 1 });
    entries.push({ url: `${root}/jobs`, lastModified: now, priority: 0.9 });
    entries.push({ url: `${root}/skills`, lastModified: now, priority: 0.85 });
    entries.push({ url: `${root}/cities`, lastModified: now, priority: 0.85 });
    entries.push({ url: `${root}/guides`, lastModified: now, priority: 0.85 });
    entries.push({ url: `${root}/compare`, lastModified: now, priority: 0.8 });
    entries.push({ url: `${root}/companies`, lastModified: now, priority: 0.7 });

    for (const role of ROLES) {
      entries.push({ url: `${root}/jobs/${role}`, lastModified: now, priority: 0.8 });
      entries.push({ url: `${root}/salaries/${role}`, lastModified: now, priority: 0.75 });
      for (const country of TOP_COUNTRY_SLUGS) {
        entries.push({
          url: `${root}/salaries/${role}/${country}`,
          lastModified: now,
          priority: 0.6,
        });
      }
    }

    for (const s of SKILLS) {
      entries.push({ url: `${root}/skills/${s.slug}`, lastModified: now, priority: 0.7 });
    }
    for (const c of CITIES) {
      entries.push({ url: `${root}/cities/${c.slug}`, lastModified: now, priority: 0.7 });
    }
    for (const g of GUIDES) {
      entries.push({ url: `${root}/guides/${g.slug}`, lastModified: now, priority: 0.7 });
    }
    for (const cmp of COMPARISONS) {
      entries.push({ url: `${root}/compare/${cmp.slug}`, lastModified: now, priority: 0.65 });
    }
    for (const c of topCountries(20)) {
      entries.push({ url: `${root}/locations/${c.slug}`, lastModified: now, priority: 0.6 });
    }
    for (const c of topCompanies(100)) {
      entries.push({ url: `${root}/companies/${c.slug}`, lastModified: now, priority: 0.5 });
    }
  }

  for (const job of allJobs()) {
    if (isExpired(job)) continue;
    entries.push({
      url: `${SITE_URL}/en/job/${job.id}`,
      lastModified: new Date(job.postedAt),
      priority: 0.4,
    });
  }

  return entries.slice(0, 49_500);
}
