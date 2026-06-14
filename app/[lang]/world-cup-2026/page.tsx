import Link from 'next/link';
import type { Metadata } from 'next';
import { LOCALES, localePath } from '@/lib/i18n';
import { buildMetadata, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { WC2026_CITIES } from '@/lib/world-cup-2026';
import { WC_COPY } from '@/lib/world-cup-2026-i18n';
import { Breadcrumb } from '@/components/Breadcrumb';
import { WiseCTA } from '@/components/WiseCTA';
import { SafetyWingCTA } from '@/components/SafetyWingCTA';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = WC_COPY[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'world-cup-2026',
    title: c.hubMetaTitle,
    description: c.hubMetaDescription,
  });
}

export default function WorldCup2026Hub({ params }: { params: { lang: Locale } }) {
  const c = WC_COPY[params.lang];
  const us = WC2026_CITIES.filter((x) => x.country === 'US');
  const ca = WC2026_CITIES.filter((x) => x.country === 'CA');
  const mx = WC2026_CITIES.filter((x) => x.country === 'MX');

  const crumb = breadcrumbJsonLd([
    { name: 'Home', url: absoluteUrl(`/${params.lang}`) },
    { name: c.hubEyebrow, url: absoluteUrl(`/${params.lang}/world-cup-2026`) },
  ]);

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumb) }}
      />
      <Breadcrumb
        items={[
          { label: 'Home', href: localePath(params.lang) },
          { label: c.hubEyebrow },
        ]}
      />

      <header className="border-b border-line pb-6">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.hubEyebrow}</p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tighter text-ink mt-2 leading-tight">
          {c.hubH1}
        </h1>
        <p className="text-graphite text-base mt-4 max-w-prose">{c.hubIntro}</p>
      </header>

      <section className="space-y-6">
        <h2 className="font-display text-2xl tracking-tighter text-ink">{c.hubUsHeading}</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {us.map((city) => (
            <CityCard key={city.slug} locale={params.lang} city={city} />
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-2xl tracking-tighter text-ink">{c.hubCaHeading}</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ca.map((city) => (
            <CityCard key={city.slug} locale={params.lang} city={city} />
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-2xl tracking-tighter text-ink">{c.hubMxHeading}</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {mx.map((city) => (
            <CityCard key={city.slug} locale={params.lang} city={city} />
          ))}
        </ul>
      </section>

      <WiseCTA locale={params.lang} />
      <SafetyWingCTA locale={params.lang} />
    </div>
  );
}

function CityCard({
  locale,
  city,
}: {
  locale: Locale;
  city: (typeof WC2026_CITIES)[number];
}) {
  return (
    <li>
      <Link
        href={localePath(locale, `world-cup-2026/${city.slug}`)}
        className="block rounded-2xl border border-line bg-paper p-4 hover-lift hover:border-ink"
      >
        <p className="font-semibold text-ink">{city.name}</p>
        <p className="text-xs text-muted mt-1">
          {city.stadium} · {city.matchesHosted} matches
        </p>
      </Link>
    </li>
  );
}
