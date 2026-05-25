import Link from 'next/link';
import type { Metadata } from 'next';
import { CITIES } from '@/lib/cities';
import { buildMetadata, itemListJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'cities',
    title: 'Best cities for remote tech workers',
    description: `Detailed profiles of ${CITIES.length} top cities for remote tech workers: cost of living, visas, internet, and tech ecosystem.`,
  });
}

export default function CitiesIndex({ params }: { params: { lang: Locale } }) {
  const itemList = itemListJsonLd(
    CITIES.map((c) => ({
      name: `${c.name}, ${c.country}`,
      url: absoluteUrl(`/${params.lang}/cities/${c.slug}`),
    })),
  );
  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold">Best cities for remote tech workers</h1>
        <p className="text-muted text-sm mt-2 max-w-prose">
          Profiles of {CITIES.length} top cities for remote engineers, with cost of living, visa
          options, internet speed and tech ecosystem notes.
        </p>
      </header>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {CITIES.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/${params.lang}/cities/${c.slug}`}
              className="block border border-line rounded-lg p-4 hover:border-ink bg-white"
            >
              <h2 className="font-medium text-ink">{c.name}</h2>
              <p className="text-xs text-muted">{c.country}</p>
              <p className="text-sm text-muted mt-2 line-clamp-2">{c.blurb}</p>
              <p className="text-xs text-muted mt-2">
                ~${c.costOfLivingUsd.toLocaleString()}/mo · {c.internetMbps} Mbps
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
