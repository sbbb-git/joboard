import type { MetadataRoute } from 'next';
import { allJobs, topCompanies, topCountries } from '@/lib/jobs';
import { ROLES } from '@/lib/types';
import { LOCALES } from '@/lib/i18n';
import { SITE_URL } from '@/lib/seo';
import { isExpired } from '@/lib/filters';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of LOCALES) {
    entries.push({ url: `${SITE_URL}/${lang}`, lastModified: now, priority: 1 });
    entries.push({ url: `${SITE_URL}/${lang}/jobs`, lastModified: now, priority: 0.9 });
    entries.push({
      url: `${SITE_URL}/${lang}/companies`,
      lastModified: now,
      priority: 0.7,
    });
    for (const role of ROLES) {
      entries.push({
        url: `${SITE_URL}/${lang}/jobs/${role}`,
        lastModified: now,
        priority: 0.8,
      });
      entries.push({
        url: `${SITE_URL}/${lang}/salaries/${role}`,
        lastModified: now,
        priority: 0.7,
      });
    }
    for (const c of topCountries(20)) {
      entries.push({
        url: `${SITE_URL}/${lang}/locations/${c.slug}`,
        lastModified: now,
        priority: 0.6,
      });
    }
    for (const c of topCompanies(100)) {
      entries.push({
        url: `${SITE_URL}/${lang}/companies/${c.slug}`,
        lastModified: now,
        priority: 0.5,
      });
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

  return entries.slice(0, 49_500); // sub-50K mono-sitemap
}
