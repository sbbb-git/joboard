import type { Metadata } from 'next';
import { CityCard } from '@/components/CityCard';
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
    description: `In-depth profiles of ${CITIES.length} cities curated for remote tech workers: cost of living, visa, internet speed, tech ecosystem.`,
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
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <header className="border-b border-line pb-6">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">Cities</p>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-ink mt-1">
          Best cities for remote tech workers
        </h1>
        <p className="text-graphite text-base mt-3 max-w-prose">
          Profiles of {CITIES.length} top cities for remote engineers: cost of living, visa
          pathways, internet speed and local tech ecosystem.
        </p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CITIES.map((c) => (
          <CityCard key={c.slug} city={c} locale={params.lang} />
        ))}
      </div>
    </div>
  );
}
