import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { jobById, allJobs } from '@/lib/jobs';
import type { Locale } from '@/lib/types';
import { t } from '@/lib/i18n';
import { buildMetadata, jobPostingJsonLd } from '@/lib/seo';
import { isExpired } from '@/lib/filters';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return allJobs().map((j) => ({ id: j.id }));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; id: string };
}): Metadata {
  const job = jobById(params.id);
  if (!job) return { title: 'Job not found' };
  const expired = isExpired(job);
  return buildMetadata({
    locale: params.lang,
    path: `job/${params.id}`,
    title: `${job.title} · ${job.company}`,
    description: job.description.slice(0, 160).replace(/\s+/g, ' '),
    index: !expired,
  });
}

export default function JobPage({ params }: { params: { lang: Locale; id: string } }) {
  const job = jobById(params.id);
  if (!job) notFound();
  const expired = isExpired(job);
  return (
    <article className="max-w-3xl mx-auto space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd(job)) }}
      />
      <header className="border-b border-line pb-6">
        <p className="text-sm text-muted">
          <Link
            href={`/${params.lang}/companies/${job.companySlug}`}
            className="hover:text-ink"
          >
            {job.company}
          </Link>
          {' · '}
          {job.location}
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold mt-1">{job.title}</h1>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-accentSoft text-accent capitalize">
            {job.role}
          </span>
          <span className="px-2 py-0.5 rounded bg-cream border border-line capitalize">
            {job.seniority}
          </span>
          <span className="px-2 py-0.5 rounded bg-cream border border-line">
            {t(params.lang, 'label.posted')}: {new Date(job.postedAt).toISOString().slice(0, 10)}
          </span>
        </div>
        {expired ? (
          <p className="mt-4 text-sm text-muted">This listing has expired.</p>
        ) : (
          <a
            href={job.url}
            target="_blank"
            rel="nofollow noopener"
            className="inline-block mt-5 px-4 py-2 bg-ink text-cream rounded text-sm hover:opacity-90"
          >
            {t(params.lang, 'cta.apply')} →
          </a>
        )}
      </header>
      <section className="prose-body text-[0.95rem] leading-relaxed whitespace-pre-wrap">
        {job.description}
      </section>
    </article>
  );
}
