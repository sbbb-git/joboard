import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { allJobs, topCountries } from '@/lib/jobs';
import { LOCALES, t } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { NomadCTA } from '@/components/NomadCTA';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  const all = topCountries(1000).map((c) => c.slug);
  return LOCALES.flatMap((lang) => all.map((country) => ({ lang, country })));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; country: string };
}): Metadata {
  const country = params.country.replace(/-/g, ' ');
  return buildMetadata({
    locale: params.lang,
    path: `locations/${params.country}`,
    title: `Remote tech jobs · ${country}`,
    description: `Open remote tech positions available for candidates based in ${country}.`,
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
  return (
    <div className="space-y-8">
      <header className="border-b border-line pb-5">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">Location</p>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-ink mt-1">
          Remote tech jobs · {labelTitle}
        </h1>
        <p className="text-graphite text-sm mt-2">{jobs.length} open positions</p>
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
      <NomadCTA context={{ type: 'location', label: labelTitle, country: labelTitle }} />
    </div>
  );
}
