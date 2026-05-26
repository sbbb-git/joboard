import type { Metadata } from 'next';
import { JobSearch } from '@/components/JobSearch';
import { allJobs } from '@/lib/jobs';
import { t } from '@/lib/i18n';
import { buildMetadata, itemListJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'jobs',
    title: 'Search remote tech jobs',
    description:
      'Filter every active remote tech job in our index by role, country, seniority, employment type, and salary. Updated daily.',
  });
}

export default function JobsList({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const all = allJobs();
  const itemList = itemListJsonLd(
    all.slice(0, 30).map((j) => ({
      name: `${j.title} at ${j.company}`,
      url: absoluteUrl(`/${locale}/job/${j.id}`),
    })),
  );
  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <header className="border-b border-line pb-5">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">Search</p>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-ink mt-1">
          {t(locale, 'nav.jobs')}
        </h1>
        <p className="text-graphite text-base mt-3 max-w-prose">
          {all.length.toLocaleString()} active remote tech jobs. Filter by role, country, level,
          contract type and salary, all in the browser. No signup needed.
        </p>
      </header>
      <JobSearch locale={locale} />
    </div>
  );
}
