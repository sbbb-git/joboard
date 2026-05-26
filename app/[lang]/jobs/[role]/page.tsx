import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { jobsByRole } from '@/lib/jobs';
import { ROLES, type Locale, type Role } from '@/lib/types';
import { LOCALES, t } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { NomadCTA } from '@/components/NomadCTA';
import { AiToolsCTA } from '@/components/AiToolsCTA';
import { EarnWithAi } from '@/components/EarnWithAi';

export const dynamicParams = false;
export const revalidate = false;

const AI_ROLES = new Set<Role>(['ml-ai', 'data']);

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
  const label = role.replace('-', ' ');
  return (
    <div className="space-y-8">
      <header className="border-b border-line pb-5">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">Role</p>
        <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1 capitalize">
          Remote {label} jobs
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

      <NomadCTA context={{ type: 'role', label }} />
      {AI_ROLES.has(role) && (
        <>
          <AiToolsCTA context={{ type: 'role', label }} />
          <EarnWithAi />
        </>
      )}
    </div>
  );
}
