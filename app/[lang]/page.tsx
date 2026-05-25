import Link from 'next/link';
import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { allJobs, rolesWithCounts, topCountries } from '@/lib/jobs';
import { localePath, t } from '@/lib/i18n';
import { buildMetadata, organizationJsonLd } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = true;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: '',
    title: 'Remote tech jobs from across the web, refreshed daily',
    description:
      'Browse remote engineering, data, design and product jobs aggregated from eight public job board APIs. Updated every day.',
  });
}

export default function Home({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const jobs = allJobs().slice(0, 18);
  const roles = rolesWithCounts().filter((r) => r.count > 0).slice(0, 8);
  const countries = topCountries(8);

  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <section className="border-b border-line pb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl">
          {t(locale, 'site.tagline')}
        </h1>
        <p className="mt-4 text-muted max-w-prose">{t(locale, 'site.intro')}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {roles.map((r) => (
            <Link
              key={r.role}
              href={localePath(locale, `jobs/${r.role}`)}
              className="text-sm px-3 py-1.5 rounded-full border border-line hover:border-ink capitalize"
            >
              {r.role} <span className="text-muted">· {r.count}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-xl font-semibold">{t(locale, 'nav.jobs')}</h2>
          <Link href={localePath(locale, 'jobs')} className="text-sm text-accent">
            {t(locale, 'cta.viewAll')} →
          </Link>
        </div>
        {jobs.length === 0 ? (
          <p className="text-muted text-sm">{t(locale, 'list.empty')}</p>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {jobs.map((j) => (
              <JobCard key={j.id} job={j} locale={locale} />
            ))}
          </div>
        )}
      </section>

      {countries.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">{t(locale, 'nav.locations')}</h2>
          <div className="flex flex-wrap gap-2">
            {countries.map((c) => (
              <Link
                key={c.slug}
                href={localePath(locale, `locations/${c.slug}`)}
                className="text-sm px-3 py-1.5 rounded-full border border-line hover:border-ink"
              >
                {c.name} <span className="text-muted">· {c.count}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
