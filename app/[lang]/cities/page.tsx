import type { Metadata } from 'next';
import { CityCard } from '@/components/CityCard';
import { CITIES } from '@/lib/cities';
import { buildMetadata, itemListJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { CITIES_I18N } from '@/lib/page-i18n';

export const dynamicParams = false;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = CITIES_I18N[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'cities',
    title: c.metaTitle,
    description: c.metaDescription(CITIES.length),
  });
}

export default function CitiesIndex({ params }: { params: { lang: Locale } }) {
  const c = CITIES_I18N[params.lang];
  const itemList = itemListJsonLd(
    CITIES.map((city) => ({
      name: `${city.name}, ${city.country}`,
      url: absoluteUrl(`/${params.lang}/cities/${city.slug}`),
    })),
  );
  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <header className="border-b border-line pb-6">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1">
          {c.h1}
        </h1>
        <p className="text-graphite text-base mt-3 max-w-prose">{c.intro(CITIES.length)}</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CITIES.map((city) => (
          <CityCard key={city.slug} city={city} locale={params.lang} />
        ))}
      </div>
    </div>
  );
}
