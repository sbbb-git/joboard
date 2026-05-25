import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { jobsByRole } from '@/lib/jobs';
import { ROLES, type Locale, type Role } from '@/lib/types';
import { t } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = true;
export const revalidate = false;

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; role: string; location: string };
}): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: `jobs/${params.role}/${params.location}`,
    title: `Remote ${params.role.replace('-', ' ')} jobs · ${params.location.replace('-', ' ')}`,
    description: `Open remote ${params.role.replace('-', ' ')} positions for ${params.location.replace(
      '-',
      ' ',
    )}.`,
  });
}

export default function RoleLocationPage({
  params,
}: {
  params: { lang: Locale; role: string; location: string };
}) {
  if (!ROLES.includes(params.role as Role)) notFound();
  const role = params.role as Role;
  const loc = decodeURIComponent(params.location).toLowerCase();
  const jobs = jobsByRole(role).filter((j) => {
    const country = j.locationCountry?.toLowerCase() ?? '';
    return (
      country.replace(/\s+/g, '-') === loc ||
      country === loc ||
      j.location.toLowerCase().includes(loc.replace(/-/g, ' '))
    );
  });
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold capitalize">
          Remote {role.replace('-', ' ')} jobs · {loc.replace('-', ' ')}
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
