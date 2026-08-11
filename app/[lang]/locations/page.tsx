import Link from 'next/link';
import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { LOCALES, localePath } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { topCountries } from '@/lib/jobs';
import { LOCATIONS_INDEX_I18N } from '@/lib/locations-i18n';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = LOCATIONS_INDEX_I18N[params.lang];
  const n = topCountries(1000).length;
  return buildMetadata({
    locale: params.lang,
    path: 'locations',
    title: c.metaTitle,
    description: c.metaDescription(n),
  });
}

export default function LocationsIndex({ params }: { params: { lang: Locale } }) {
  const c = LOCATIONS_INDEX_I18N[params.lang];
  // Every country the index has jobs for. This page is the only hub linking
  // them, so it must not truncate.
  const countries = topCountries(1000);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="text-2xl md:text-3xl font-semibold mt-1">{c.h1}</h1>
        <p className="text-muted text-sm mt-2 max-w-prose">{c.intro(countries.length)}</p>
      </header>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {countries.map((country) => (
          <li key={country.slug}>
            <Link
              href={localePath(params.lang, `locations/${country.slug}`)}
              className="block border border-line rounded-lg p-4 hover:border-ink"
            >
              <h2 className="font-medium text-ink">{country.name}</h2>
              <p className="text-sm text-muted mt-1">{c.jobCount(country.count)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
