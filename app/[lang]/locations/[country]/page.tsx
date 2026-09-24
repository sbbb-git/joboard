import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { allJobs, topCountries } from '@/lib/jobs';
import { LOCALES, t } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { countryLabel } from '@/lib/labels';
import type { Locale } from '@/lib/types';
import { NomadCTA } from '@/components/NomadCTA';
import { NomadEssentials } from '@/components/NomadEssentials';
import { NomadBanking } from '@/components/NomadBanking';

export const dynamicParams = false;
export const revalidate = false;

type LocationCopy = {
  // Country names themselves stay in their English form (countryLabel only
  // title-cases the slug), so every template puts the country behind a
  // separator instead of a preposition that would need to agree with it.
  metaTitle: (country: string) => string;
  metaDescription: (country: string) => string;
  eyebrow: string;
  h1: (country: string) => string;
  openPositions: (n: number) => string;
};

const LOCATION_I18N: Record<Locale, LocationCopy> = {
  en: {
    metaTitle: (c) => `Remote tech jobs in ${c}`,
    metaDescription: (c) =>
      `Open remote engineering, data, design and product roles hiring candidates based in ${c}. Aggregated from public job board APIs and updated daily.`,
    eyebrow: 'Location',
    h1: (c) => `Remote tech jobs · ${c}`,
    openPositions: (n) => `${n} open position${n === 1 ? '' : 's'}`,
  },
  fr: {
    metaTitle: (c) => `Emplois tech en remote : ${c}`,
    metaDescription: (c) =>
      `${c} : offres remote en ingénierie, data, design et produit pour les candidats locaux. Agrégées depuis des APIs publiques, actualisées chaque jour.`,
    eyebrow: 'Lieu',
    h1: (c) => `Emplois tech en remote · ${c}`,
    openPositions: (n) => `${n} poste${n === 1 ? '' : 's'} ouvert${n === 1 ? '' : 's'}`,
  },
  de: {
    metaTitle: (c) => `Remote-Tech-Jobs: ${c}`,
    metaDescription: (c) =>
      `${c}: offene Remote-Stellen in Engineering, Data, Design und Produkt für Kandidaten vor Ort. Aus öffentlichen Job-Board-APIs, täglich aktualisiert.`,
    eyebrow: 'Standort',
    h1: (c) => `Remote-Tech-Jobs · ${c}`,
    openPositions: (n) => `${n} offene Stelle${n === 1 ? '' : 'n'}`,
  },
};

export function generateStaticParams() {
  const all = topCountries(1000).map((c) => c.slug);
  return LOCALES.flatMap((lang) => all.map((country) => ({ lang, country })));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; country: string };
}): Metadata {
  const country = countryLabel(params.country);
  const c = LOCATION_I18N[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: `locations/${params.country}`,
    title: c.metaTitle(country),
    description: c.metaDescription(country),
  });
}

export default function LocationPage({
  params,
}: {
  params: { lang: Locale; country: string };
}) {
  const target = decodeURIComponent(params.country).replace(/-/g, ' ').toLowerCase();
  const labelTitle = target.replace(/\b\w/g, (c) => c.toUpperCase());
  const jobs = allJobs().filter((j) => j.locationCountry?.toLowerCase() === target);
  const c = LOCATION_I18N[params.lang];
  return (
    <div className="space-y-8">
      <header className="border-b border-line pb-5">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1">
          {c.h1(labelTitle)}
        </h1>
        <p className="text-graphite text-sm mt-2">{c.openPositions(jobs.length)}</p>
      </header>
      {jobs.length === 0 ? (
        <p className="text-muted text-sm">{t(params.lang, 'list.empty')}</p>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {jobs.slice(0, 60).map((j) => (
            <JobCard key={j.id} job={j} locale={params.lang} />
          ))}
        </div>
      )}
      <NomadCTA context={{ type: 'location', label: labelTitle, country: labelTitle }}  locale={params.lang} />
      <NomadEssentials city={labelTitle} locale={params.lang} />
      <NomadBanking context={labelTitle} country={labelTitle} locale={params.lang} />
    </div>
  );
}
