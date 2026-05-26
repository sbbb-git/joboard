import type { Metadata } from 'next';
import type { JobNormalized, Locale } from './types';
import { LOCALES } from './types';

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
    baseSalary:
      job.salaryMin || job.salaryMax
        ? {
            '@type': 'MonetaryAmount',
            currency: job.currency ?? 'USD',
            value: {
              '@type': 'QuantitativeValue',
              minValue: job.salaryMin,
              maxValue: job.salaryMax,
              unitText: 'YEAR',
            },
          }
        : undefined,
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
  };
}
