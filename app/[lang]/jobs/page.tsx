import Link from 'next/link';
import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { allJobs, paginate } from '@/lib/jobs';
import { localePath, t } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = true;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'jobs',
    title: 'All remote tech jobs',
    description: 'Every active remote tech job in our index, sorted by posting date.',
  });
}

export default function JobsList({
  params,
  searchParams,
}: {
  params: { lang: Locale };
  searchParams: { page?: string };
}) {
  const locale = params.lang;
  const page = Number(searchParams.page) || 1;
  const all = allJobs();
  const { items, totalPages, page: current, total } = paginate(all, page, 30);
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">{t(locale, 'nav.jobs')}</h1>
        <p className="text-muted text-sm mt-1">{total.toLocaleString()} jobs</p>
      </header>
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((j) => (
          <JobCard key={j.id} job={j} locale={locale} />
        ))}
      </div>
      <nav className="flex justify-center gap-2 pt-4 text-sm">
        {current > 1 && (
          <Link
            href={`${localePath(locale, 'jobs')}?page=${current - 1}`}
            className="px-3 py-1 border border-line rounded hover:border-ink"
          >
            ← Prev
          </Link>
        )}
        <span className="px-3 py-1 text-muted">
          {current} / {totalPages}
        </span>
        {current < totalPages && (
          <Link
            href={`${localePath(locale, 'jobs')}?page=${current + 1}`}
            className="px-3 py-1 border border-line rounded hover:border-ink"
          >
            Next →
          </Link>
        )}
      </nav>
    </div>
  );
}
