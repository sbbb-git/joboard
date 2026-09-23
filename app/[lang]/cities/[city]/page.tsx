import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { allJobs } from '@/lib/jobs';
import { CITIES, CITY_MAP } from '@/lib/cities';
import { tCityBlurb } from '@/lib/cities-i18n';
import { LOCALES, t } from '@/lib/i18n';
import { buildMetadata, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { NomadBanking } from '@/components/NomadBanking';
import { NomadEssentials } from '@/components/NomadEssentials';
import { NomadCTA } from '@/components/NomadCTA';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CityHero } from '@/components/CityHero';
import { localePath } from '@/lib/i18n';

export const dynamicParams = false;
export const revalidate = false;

type CityMetaCopy = {
  // Only the template wording lives here. The city blurb that opens the
  // description comes from tCityBlurb() and is already translated.
  metaTitle: (city: string) => string;
  metaSuffix: (city: string) => string;
};

const CITY_META_I18N: Record<Locale, CityMetaCopy> = {
  en: {
    metaTitle: (c) => `Remote tech jobs in ${c}`,
    metaSuffix: (c) =>
      `Cost of living, visa options, internet quality and the remote tech roles currently open to candidates in ${c}.`,
  },
  fr: {
    metaTitle: (c) => `Emplois tech en remote : ${c}`,
    metaSuffix: (c) =>
      `Coût de la vie, options de visa, qualité de la connexion et les postes tech remote actuellement ouverts pour ${c}.`,
  },
  es: {
    metaTitle: (c) => `Empleos tech remotos: ${c}`,
    metaSuffix: (c) =>
      `Coste de vida, opciones de visado, calidad de internet y los puestos tech remotos abiertos ahora para ${c}.`,
  },
  de: {
    metaTitle: (c) => `Remote-Tech-Jobs: ${c}`,
    metaSuffix: (c) =>
      `Lebenshaltungskosten, Visa-Optionen, Internetqualität und die aktuell offenen Remote-Tech-Stellen für ${c}.`,
  },
  pt: {
    metaTitle: (c) => `Vagas tech remotas: ${c}`,
    metaSuffix: (c) =>
      `Custo de vida, opções de visto, qualidade da internet e as vagas tech remotas abertas agora para ${c}.`,
  },
  it: {
    metaTitle: (c) => `Lavori tech remote: ${c}`,
    metaSuffix: (c) =>
      `Costo della vita, opzioni di visto, qualità della rete e le posizioni tech remote aperte ora per ${c}.`,
  },
  pl: {
    metaTitle: (c) => `Zdalne oferty tech: ${c}`,
    metaSuffix: (c) =>
      `Koszt życia, opcje wizowe, jakość internetu i aktualnie otwarte zdalne oferty tech dla miasta: ${c}.`,
  },
};

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => CITIES.map((c) => ({ lang, city: c.slug })));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; city: string };
}): Metadata {
  const c = CITY_MAP[params.city];
  if (!c) return { title: 'City not found' };
  const copy = CITY_META_I18N[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: `cities/${params.city}`,
    title: copy.metaTitle(c.name),
    description: `${tCityBlurb(c.slug, params.lang, c.blurb)} ${copy.metaSuffix(c.name)}`,
  });
}

export default function CityPage({ params }: { params: { lang: Locale; city: string } }) {
  const c = CITY_MAP[params.city];
  if (!c) notFound();

  const jobs = allJobs()
    .filter((j) => j.locationCountry?.toLowerCase() === c.country.toLowerCase())
    .slice(0, 30);

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', url: absoluteUrl(`/${params.lang}`) },
    { name: 'Cities', url: absoluteUrl(`/${params.lang}/cities`) },
    { name: c.name, url: absoluteUrl(`/${params.lang}/cities/${c.slug}`) },
  ]);

  const related = CITIES.filter((x) => x.country === c.country && x.slug !== c.slug).slice(0, 4);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Breadcrumb
        items={[
          { label: 'Home', href: localePath(params.lang) },
          { label: 'Cities', href: localePath(params.lang, 'cities') },
          { label: c.name },
        ]}
      />
      <CityHero slug={c.slug} name={c.name} country={c.country} blurb={tCityBlurb(c.slug, params.lang, c.blurb)} />

      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Cost of living" value={`$${c.costOfLivingUsd.toLocaleString()}/mo`} />
        <Stat label="Internet" value={`${c.internetMbps} Mbps`} />
        <Stat label="Timezone" value={c.timezone} />
        {c.visa && <Stat label="Visa" value={c.visa} />}
      </section>

      <section className="prose-body text-[0.95rem] leading-relaxed">
        <p>{c.bodyEn}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">
          {jobs.length > 0
            ? `Open remote positions for ${c.country}-based candidates`
            : 'No matching positions right now'}
        </h2>
        {jobs.length === 0 ? (
          <p className="text-sm text-muted">{t(params.lang, 'list.empty')}</p>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {jobs.map((j) => (
              <JobCard key={j.id} job={j} locale={params.lang} />
            ))}
          </div>
        )}
      </section>

      <NomadCTA context={{ type: 'city', label: c.name, country: c.country }}  locale={params.lang} />

      <NomadEssentials city={c.name} locale={params.lang} />

      <NomadBanking context={c.name} country={c.country} locale={params.lang} />

      {related.length > 0 && (
        <section className="border-t border-line pt-6">
          <h2 className="text-lg font-semibold mb-3">Other cities in {c.country}</h2>
          <div className="flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${params.lang}/cities/${r.slug}`}
                className="text-sm px-3 py-1.5 rounded-full border border-line hover:border-ink"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-line rounded p-3">
      <div className="text-xs text-muted">{label}</div>
      <div className="text-sm font-medium mt-1">{value}</div>
    </div>
  );
}
