import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LOCALES, localePath } from '@/lib/i18n';
import { buildMetadata, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { WC2026_CITIES, WC2026_CITY_MAP } from '@/lib/world-cup-2026';
import { WC_COPY } from '@/lib/world-cup-2026-i18n';
import { Breadcrumb } from '@/components/Breadcrumb';
import { WiseCTA } from '@/components/WiseCTA';
import { SafetyWingCTA } from '@/components/SafetyWingCTA';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    WC2026_CITIES.map((city) => ({ lang, city: city.slug })),
  );
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; city: string };
}): Metadata {
  const city = WC2026_CITY_MAP[params.city];
  if (!city) return { title: 'Not found' };
  const c = WC_COPY[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: `world-cup-2026/${city.slug}`,
    title: c.cityMetaTitle(city.name),
    description: c.cityMetaDescription(city.name),
  });
}

export default function WorldCup2026CityPage({
  params,
}: {
  params: { lang: Locale; city: string };
}) {
  const city = WC2026_CITY_MAP[params.city];
  if (!city) notFound();
  const c = WC_COPY[params.lang];

  const crumb = breadcrumbJsonLd([
    { name: 'Home', url: absoluteUrl(`/${params.lang}`) },
    { name: c.hubEyebrow, url: absoluteUrl(`/${params.lang}/world-cup-2026`) },
    { name: city.name, url: absoluteUrl(`/${params.lang}/world-cup-2026/${city.slug}`) },
  ]);

  return (
    <article className="space-y-8 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumb) }}
      />
      <Breadcrumb
        items={[
          { label: 'Home', href: localePath(params.lang) },
          { label: c.hubEyebrow, href: localePath(params.lang, 'world-cup-2026') },
          { label: city.name },
        ]}
      />

      <header className="border-b border-line pb-5">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.cityEyebrow}</p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tighter text-ink mt-2 leading-tight">
          {c.cityH1(city.name)}
        </h1>
        <p className="text-graphite text-base mt-4 max-w-prose">
          {c.cityIntro(city.name, city.countryName, city.stadium, city.matchesHosted)}
        </p>
      </header>

      <section className="rounded-2xl border border-line bg-paper p-5 sm:p-6">
        <h2 className="font-semibold text-ink mb-4">{c.factsHeading}</h2>
        <dl className="grid sm:grid-cols-2 gap-y-3 text-sm">
          <Fact label={c.factStadium} value={city.stadium} />
          <Fact label={c.factCapacity} value={city.stadiumCapacity.toLocaleString()} />
          <Fact label={c.factMatches} value={`${city.matchesHosted}`} />
          <Fact
            label={c.factTimezone}
            value={`${city.timezone} (UTC${city.utcOffset >= 0 ? '+' : ''}${city.utcOffset})`}
          />
          <Fact label={c.factCurrency} value={city.currency} />
          <Fact label={c.factInternet} value={`${city.internetMbps} Mbps`} />
          <Fact
            label={c.factCostIndex}
            value={`${c.costLabels[city.costIndex - 1]} (${city.costIndex}/5)`}
          />
        </dl>
      </section>

      <section className="prose-body text-[0.95rem] leading-relaxed space-y-3">
        <h2 className="font-display text-xl tracking-tighter text-ink !mb-2">{c.remoteWorkHeading}</h2>
        <p>
          {c.remoteWorkBody(
            city.name,
            city.internetMbps,
            city.baseNeighbourhoods.join(', '),
          )}
        </p>
      </section>

      <section className="rounded-2xl border border-line bg-paper p-5">
        <h2 className="font-semibold text-ink mb-3">{c.neighbourhoodsHeading}</h2>
        <ul className="flex flex-wrap gap-2">
          {city.baseNeighbourhoods.map((n) => (
            <li
              key={n}
              className="text-sm px-3 py-1 rounded-full bg-sand border border-line text-graphite"
            >
              {n}
            </li>
          ))}
        </ul>
      </section>

      <section className="prose-body text-[0.95rem] leading-relaxed space-y-3">
        <h2 className="font-display text-xl tracking-tighter text-ink !mb-2">{c.moneyHeading}</h2>
        <p>{c.moneyBody(city.currency)}</p>
      </section>

      <WiseCTA locale={params.lang} />

      <section className="prose-body text-[0.95rem] leading-relaxed space-y-3">
        <h2 className="font-display text-xl tracking-tighter text-ink !mb-2">{c.insuranceHeading}</h2>
        <p>{c.insuranceBody(city.countryName)}</p>
      </section>

      <SafetyWingCTA locale={params.lang} />

      <section className="prose-body text-[0.95rem] leading-relaxed space-y-3">
        <h2 className="font-display text-xl tracking-tighter text-ink !mb-2">{c.ptoHeading}</h2>
        <p>{c.ptoBody}</p>
      </section>

      <section className="border-t border-line pt-6">
        <h2 className="text-lg font-semibold mb-3">{c.relatedHeading}</h2>
        <ul className="space-y-2 text-sm">
          {c.related.map((r) => (
            <li key={r.slug}>
              <Link
                href={localePath(params.lang, `guides/${r.slug}`)}
                className="text-forest hover:underline"
              >
                {r.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={localePath(params.lang, 'world-cup-2026')}
          className="inline-block mt-5 text-sm text-forest font-semibold hover:underline"
        >
          {c.backToHub}
        </Link>
      </section>
    </article>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-wider text-subtle font-semibold">{label}</dt>
      <dd className="text-ink font-medium mt-0.5">{value}</dd>
    </div>
  );
}
