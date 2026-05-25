import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { allJobs, topCountries } from '@/lib/jobs';
import { LOCALES, t } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = true;
export const revalidate = false;

export function generateStaticParams() {
  const top = topCountries(20).map((c) => c.slug);
  return LOCALES.flatMap((lang) => top.map((country) => ({ lang, country })));
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
  const jobs = allJobs().filter((j) => j.locationCountry?.toLowerCase() === target);
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold capitalize">
          Remote tech jobs · {target}
        </h1>
        <p className="text-muted text-sm mt-1">{jobs.length} open positions</p>
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
    </div>
  );
}
