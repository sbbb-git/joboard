import type { Metadata } from 'next';
import type { Locale } from './types';
import { LOCALES } from './types';

export const SITE_URL = process.env.SITE_URL || 'https://slateremote.com';
export const SITE_NAME = 'slateremote.com';

export function absoluteUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

// next.config sets trailingSlash:false, so every served URL has no trailing
// slash. Canonical, hreflang and sitemap URLs must all agree with that or
// Google drops the hreflang cluster and treats the canonical as non
// self-referential. Collapses duplicate slashes too.
export function canonicalPath(locale: Locale, path: string): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return `/${locale}${clean ? `/${clean}` : ''}`.replace(/\/{2,}/g, '/');
}

// OG spec wants language_TERRITORY, not a bare language subtag.
const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  de: 'de_DE',
};

export function hreflangAlternates(pathWithoutLocale: string): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const l of LOCALES) {
    alternates[l] = absoluteUrl(canonicalPath(l, pathWithoutLocale));
  }
  alternates['x-default'] = absoluteUrl(canonicalPath('en', pathWithoutLocale));
  return alternates;
}

const STATIC_OG = '/og.png';

// Google truncates around 160 characters. Templates interpolate values of
// unpredictable length (a company called "BBHT Beratungsgesellschaft mbH &
// Co. KG", a role like "machine learning engineer"), so clamping per template
// is whack-a-mole. Clamp once, here, on the way out. Cuts on a word boundary
// so the description ends as a readable phrase rather than mid-word.
const DESCRIPTION_MAX = 160;

export function clampDescription(text: string, max = DESCRIPTION_MAX): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  const body = (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:.·-]+$/, '');
  return `${body}…`;
}

export function buildMetadata(opts: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  index?: boolean;
}): Metadata {
  const url = absoluteUrl(canonicalPath(opts.locale, opts.path));
  const description = clampDescription(opts.description);
  return {
    title: opts.title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: hreflangAlternates(opts.path),
    },
    openGraph: {
      title: opts.title,
      description,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE[opts.locale],
      type: 'website',
      images: [{ url: STATIC_OG, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description,
      images: [STATIC_OG],
    },
    robots: opts.index === false ? { index: false, follow: true } : { index: true, follow: true },
  };
}

export function itemListJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/icon.svg'),
    description:
      'Practical guides for remote tech workers: earning on talent platforms, getting paid across borders, insurance and tools.',
    foundingDate: '2025',
    sameAs: [
      'https://slowmadly.com',
      'https://ai-by-job.com',
      'https://github.com/sachabitoun17-ctrl/joboard',
    ],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Practical guides for remote tech workers, in English, French and German.',
    inLanguage: [...LOCALES],
  };
}
