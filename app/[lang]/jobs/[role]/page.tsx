import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { jobsByRole } from '@/lib/jobs';
import { ROLES, type Locale, type Role } from '@/lib/types';
import { LOCALES, t } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = true;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => ROLES.map((role) => ({ lang, role })));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; role: string };
}): Metadata {
  const role = params.role.replace('-', ' ');
  return buildMetadata({
    locale: params.lang,
    path: `jobs/${params.role}`,
    title: `Remote ${role} jobs`,
    description: `Open remote ${role} positions aggregated from public job boards. Updated daily.`,
  });
}

export default function RolePage({ params }: { params: { lang: Locale; role: string } }) {
  if (!ROLES.includes(params.role as Role)) notFound();
  const role = params.role as Role;
  const jobs = jobsByRole(role);
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold capitalize">Remote {role.replace('-', ' ')} jobs</h1>
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
