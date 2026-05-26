import Link from 'next/link';
import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { allJobs } from '@/lib/jobs';
import { localePath, t } from '@/lib/i18n';
import { buildMetadata, itemListJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'jobs',
    title: 'All remote tech jobs',
    description: 'Every active remote tech job in our index, sorted by posting date.',
  });
}

export default function JobsList({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const all = allJobs();
  const items = all.slice(0, 60);
  const itemList = itemListJsonLd(
    items.map((j) => ({
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
      <header>
        <h1 className="text-2xl font-semibold">{t(locale, 'nav.jobs')}</h1>
        <p className="text-muted text-sm mt-1">
          {all.length.toLocaleString()} jobs in our index. Showing the {items.length} most recent.
        </p>
      </header>
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((j) => (
          <JobCard key={j.id} job={j} locale={locale} />
        ))}
      </div>
      <p className="text-sm text-muted text-center pt-4">
        Looking for more?{' '}
        <Link href={localePath(locale, 'skills')} className="text-forest hover:underline">
          Browse by skill
        </Link>{' '}
        or{' '}
        <Link href={localePath(locale, 'cities')} className="text-forest hover:underline">
          by city
        </Link>
        .
      </p>
    </div>
  );
}
