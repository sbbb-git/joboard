import type { MetadataRoute } from 'next';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { SITE_URL, canonicalPath } from '@/lib/seo';
import { GUIDES } from '@/lib/guides';
import { hasGuideTranslation } from '@/lib/guides-body-i18n';

export const dynamic = 'force-static';

type SitemapEntry = MetadataRoute.Sitemap[number];

// One <url> per locale per page, with the full hreflang set, and URLs built
// with canonicalPath so they match each page's canonical exactly
// (trailingSlash is false, so none may end in a slash).
//
// The site publishes guides only since the job board was retired in 2026-09.
// Everything here is editorial, so no lastModified: stamping every URL with
// the build time would claim every page changed on every deploy.
function localeUrls(path: string, priority: number, locales: readonly Locale[] = LOCALES): SitemapEntry[] {
  const languages: Record<string, string> = {
    'x-default': `${SITE_URL}${canonicalPath(DEFAULT_LOCALE, path)}`,
  };
  for (const l of locales) languages[l] = `${SITE_URL}${canonicalPath(l, path)}`;
  return locales.map((l) => ({
    url: `${SITE_URL}${canonicalPath(l, path)}`,
    // Non-default locales rank slightly below the English original.
    priority: l === DEFAULT_LOCALE ? priority : Math.max(0.1, Math.round((priority - 0.1) * 100) / 100),
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  const add = (path: string, priority: number) => out.push(...localeUrls(path, priority));

  add('', 1);
  add('/guides', 0.9);
  add('/glossary', 0.6);
  add('/network', 0.4);
  add('/disclosure', 0.3);

  // Only the locales a guide is actually translated into; the rest render
  // noindex because they would be English text under a French/German URL.
  for (const g of GUIDES) {
    const langs = LOCALES.filter((l) => hasGuideTranslation(g.slug, l));
    out.push(...localeUrls(`/guides/${g.slug}`, 0.8, langs));
  }

  return out;
}
