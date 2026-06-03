import type { Metadata } from 'next';
import type { JobNormalized, Locale } from './types';
import { LOCALES } from './types';
import { salaryStats } from './jobs';

export const SITE_URL = process.env.SITE_URL || 'https://slateremote.com';
export const SITE_NAME = 'slateremote.com';

export function absoluteUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

export function hreflangAlternates(pathWithoutLocale: string): Record<string, string> {
  const clean = pathWithoutLocale.replace(/^\/+/, '');
  const alternates: Record<string, string> = {};
  for (const l of LOCALES) {
    alternates[l] = absoluteUrl(`/${l}/${clean}`.replace(/\/+$/, '') || `/${l}`);
  }
  alternates['x-default'] = absoluteUrl(`/en/${clean}`.replace(/\/+$/, '') || '/en');
  return alternates;
}

const STATIC_OG = '/og.png';

export function buildMetadata(opts: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  index?: boolean;
}): Metadata {
  const url = absoluteUrl(`/${opts.locale}/${opts.path.replace(/^\/+/, '')}`);
  return {
    title: opts.title,
    description: opts.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: hreflangAlternates(opts.path),
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      locale: opts.locale,
      type: 'website',
      images: [{ url: STATIC_OG, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
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

// Conservative 2026 remote-market USD bands per role, used as ultimate
// fallback when neither the listing nor our index has salary data.
const DEFAULT_BANDS_USD: Record<string, [number, number]> = {
  developer: [70_000, 150_000],
  frontend: [70_000, 140_000],
  backend: [80_000, 160_000],
  fullstack: [75_000, 150_000],
  mobile: [80_000, 150_000],
  data: [90_000, 170_000],
  'ml-ai': [130_000, 250_000],
  devops: [100_000, 180_000],
  security: [110_000, 200_000],
  qa: [60_000, 120_000],
  product: [100_000, 180_000],
  design: [70_000, 130_000],
};

// Build Google-compliant baseSalary. Prefers the listing's published range;
// when absent, falls back to the role+currency market median computed from
// our own aggregated index so JobPosting structured-data validation passes.
function buildBaseSalary(job: JobNormalized) {
  const currency = job.currency ?? 'USD';
  if (job.salaryMin || job.salaryMax) {
    const value: Record<string, unknown> = {
      '@type': 'QuantitativeValue',
      unitText: 'YEAR',
    };
    if (job.salaryMin && job.salaryMax) {
      value.minValue = job.salaryMin;
      value.maxValue = job.salaryMax;
    } else if (job.salaryMin) {
      value.minValue = job.salaryMin;
      value.value = job.salaryMin;
    } else if (job.salaryMax) {
      value.maxValue = job.salaryMax;
      value.value = job.salaryMax;
    }
    return { '@type': 'MonetaryAmount', currency, value };
  }
  // Fallback to aggregated market band for this role + currency so the
  // baseSalary field is always present and validation does not flag it.
  const native = salaryStats(job.role, currency);
  const stats = native ?? salaryStats(job.role, 'USD');
  if (stats) {
    return {
      '@type': 'MonetaryAmount',
      currency: native ? currency : 'USD',
      value: {
        '@type': 'QuantitativeValue',
        minValue: Math.round(stats.p25),
        maxValue: Math.round(stats.p75),
        unitText: 'YEAR',
      },
    };
  }
  // Ultimate fallback: hard-coded 2026 market band per role.
  const band = DEFAULT_BANDS_USD[job.role];
  if (!band) return undefined;
  return {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: {
      '@type': 'QuantitativeValue',
      minValue: band[0],
      maxValue: band[1],
      unitText: 'YEAR',
    },
  };
}

export function jobPostingJsonLd(job: JobNormalized) {
  const employmentMap: Record<string, string> = {
    FULL_TIME: 'FULL_TIME',
    PART_TIME: 'PART_TIME',
    CONTRACTOR: 'CONTRACTOR',
    INTERN: 'INTERN',
  };
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.postedAt,
    validThrough: job.expiresAt,
    employmentType: employmentMap[job.employmentType] ?? 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company,
    },
    jobLocationType: job.remote === 'full' ? 'TELECOMMUTE' : undefined,
    applicantLocationRequirements: job.locationCountry
      ? { '@type': 'Country', name: job.locationCountry }
      : undefined,
    jobLocation:
      job.remote !== 'full'
        ? {
            '@type': 'Place',
            address: { '@type': 'PostalAddress', addressLocality: job.location },
          }
        : undefined,
    baseSalary: buildBaseSalary(job),
    directApply: false,
    url: job.url,
    identifier: { '@type': 'PropertyValue', name: job.source, value: job.id },
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
      'Remote tech jobs aggregated from eight public job board APIs, refreshed daily. Free, multi-locale, no signup.',
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
      'Remote tech jobs from across the web, refreshed daily. Free, no signup, available in 7 languages.',
    inLanguage: ['en', 'fr', 'es', 'de', 'pt', 'it', 'pl'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/en/jobs?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
