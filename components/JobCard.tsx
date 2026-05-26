import Link from 'next/link';
import { localePath } from '@/lib/i18n';
import { flagFor } from '@/lib/flags';
import type { JobNormalized, Locale } from '@/lib/types';

function relativeDate(iso: string): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days < 1) return 'today';
  if (days === 1) return '1d ago';
  if (days < 30) return `${days}d ago`;
  const m = Math.floor(days / 30);
  return m === 1 ? '1mo ago' : `${m}mo ago`;
}

// Deterministic pastel from company name for the avatar tile
function tileColors(name: string): { bg: string; fg: string } {
  const palette = [
    { bg: 'bg-forestSoft', fg: 'text-forest' },
    { bg: 'bg-terracottaSoft', fg: 'text-terracotta' },
    { bg: 'bg-amberSoft', fg: 'text-amber' },
    { bg: 'bg-sand', fg: 'text-ink' },
  ];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return palette[h % palette.length];
}

export function JobCard({ job, locale }: { job: JobNormalized; locale: Locale }) {
  const salary =
    job.salaryMin || job.salaryMax
      ? `${job.currency ?? 'USD'} ${Math.round((job.salaryMin || 0) / 1000)}${
          job.salaryMax ? '–' + Math.round(job.salaryMax / 1000) + 'k' : 'k+'
        }`
      : null;
  const flag = flagFor(job.locationCountry);
  const initial = job.company.charAt(0).toUpperCase();
  const tile = tileColors(job.company);

  return (
    <Link
      href={localePath(locale, `job/${job.id}`)}
      className="group block rounded-2xl bg-paper border border-line shadow-soft hover-lift hover:shadow-lift hover:border-ink/20 p-4"
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex-shrink-0 w-11 h-11 rounded-xl ${tile.bg} ${tile.fg} flex items-center justify-center text-base font-bold`}
        >
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[15px] font-semibold text-ink leading-snug line-clamp-2 group-hover:text-forest transition-colors">
              {job.title}
            </h3>
            <span className="flex-shrink-0 text-[11px] text-subtle whitespace-nowrap pt-0.5">
              {relativeDate(job.postedAt)}
            </span>
          </div>
          <p className="text-[13px] mt-1">
            <span className="font-medium text-graphite">{job.company}</span>
            <span className="text-subtle"> · {flag} {job.location}</span>
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
            <Tag tone="forest">{job.role.replace('-', ' ')}</Tag>
            <Tag tone="neutral">{job.seniority}</Tag>
            {salary && <Tag tone="amber">{salary}</Tag>}
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
