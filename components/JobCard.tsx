import Link from 'next/link';
import { localePath } from '@/lib/i18n';
import { flagFor } from '@/lib/flags';
import type { JobNormalized, Locale } from '@/lib/types';
import { CompanyLogo } from './CompanyLogo';
import { SourceLogo } from './SourceLogo';

type RelCopy = { today: string; days: (n: number) => string; months: (n: number) => string };

const REL: Record<Locale, RelCopy> = {
  en: { today: 'today', days: (n) => `${n}d ago`, months: (n) => `${n}mo ago` },
  fr: { today: "auj.", days: (n) => `il y a ${n}j`, months: (n) => `il y a ${n}m` },
  es: { today: 'hoy', days: (n) => `hace ${n}d`, months: (n) => `hace ${n}m` },
  de: { today: 'heute', days: (n) => `vor ${n}T`, months: (n) => `vor ${n}M` },
  pt: { today: 'hoje', days: (n) => `há ${n}d`, months: (n) => `há ${n}m` },
  it: { today: 'oggi', days: (n) => `${n}g fa`, months: (n) => `${n}m fa` },
  pl: { today: 'dziś', days: (n) => `${n}d temu`, months: (n) => `${n}mies temu` },
};

function relativeDate(iso: string, locale: Locale): string {
  const c = REL[locale];
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days < 1) return c.today;
  if (days < 30) return c.days(days);
  const m = Math.floor(days / 30);
  return c.months(m);
}

export function JobCard({ job, locale }: { job: JobNormalized; locale: Locale }) {
  const salary =
    job.salaryMin || job.salaryMax
      ? `${job.currency ?? 'USD'} ${Math.round((job.salaryMin || 0) / 1000)}${
          job.salaryMax ? '–' + Math.round(job.salaryMax / 1000) + 'k' : 'k+'
        }`
      : null;
  const flag = flagFor(job.locationCountry);

  return (
    <Link
      href={localePath(locale, `job/${job.id}`)}
      className="group block rounded-2xl bg-paper border border-line shadow-soft hover-lift hover:shadow-lift hover:border-ink/20 p-4"
    >
      <div className="flex items-start gap-3">
        <CompanyLogo company={job.company} companySlug={job.companySlug} role={job.role} size={44} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[15px] font-semibold text-ink leading-snug line-clamp-2 group-hover:text-forest transition-colors">
              {job.title}
            </h3>
            <span className="flex-shrink-0 text-[11px] text-subtle whitespace-nowrap pt-0.5">
              {relativeDate(job.postedAt, locale)}
            </span>
          </div>
          <p className="text-[13px] mt-1">
            <span className="font-medium text-graphite">{job.company}</span>
            <span className="text-subtle"> · {flag} {job.location}</span>
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px]">
            <Tag tone="forest">{job.role.replace('-', ' ')}</Tag>
            <Tag tone="neutral">{job.seniority}</Tag>
            {salary && <Tag tone="amber">{salary}</Tag>}
            <span className="ml-auto flex items-center gap-1 text-subtle">
              <SourceLogo source={job.source} size={14} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Tag({ tone, children }: { tone: 'forest' | 'neutral' | 'amber'; children: React.ReactNode }) {
  const styles = {
    forest: 'bg-forestSoft text-forest',
    amber: 'bg-amberSoft text-amber',
    neutral: 'bg-sand text-graphite border border-line',
  }[tone];
  return (
    <span className={`px-2 py-0.5 rounded-full font-medium capitalize ${styles}`}>{children}</span>
  );
}
