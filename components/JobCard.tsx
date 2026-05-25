import Link from 'next/link';
import { localePath, t } from '@/lib/i18n';
import type { JobNormalized, Locale } from '@/lib/types';

export function JobCard({ job, locale }: { job: JobNormalized; locale: Locale }) {
  const posted = new Date(job.postedAt).toISOString().slice(0, 10);
  const salary =
    job.salaryMin || job.salaryMax
      ? `${job.currency ?? 'USD'} ${(job.salaryMin || 0).toLocaleString()}${
          job.salaryMax ? '–' + job.salaryMax.toLocaleString() : ''
        }`
      : null;
  return (
    <Link
      href={localePath(locale, `job/${job.id}`)}
      className="block border border-line rounded-lg p-4 hover:border-ink transition bg-white"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-medium text-ink truncate">{job.title}</h3>
          <p className="text-sm text-muted truncate">
            {job.company} · {job.location}
          </p>
        </div>
        <div className="text-xs text-muted whitespace-nowrap">{posted}</div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
        <span className="px-2 py-0.5 rounded bg-accentSoft text-accent capitalize">
          {job.role}
        </span>
        <span className="px-2 py-0.5 rounded bg-cream border border-line capitalize">
          {job.seniority}
        </span>
        {salary && (
          <span className="px-2 py-0.5 rounded bg-cream border border-line">{salary}</span>
        )}
        <span className="px-2 py-0.5 rounded bg-cream border border-line">
          {t(locale, 'label.source')}: {job.source}
        </span>
      </div>
    </Link>
  );
}
