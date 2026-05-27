import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { jobById, allJobs } from '@/lib/jobs';
import type { Locale } from '@/lib/types';
import { t, localePath } from '@/lib/i18n';
import { buildMetadata, jobPostingJsonLd, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import { isExpired } from '@/lib/filters';
import { flagFor } from '@/lib/flags';
import { NomadCTA } from '@/components/NomadCTA';
import { Breadcrumb } from '@/components/Breadcrumb';
import { BookmarkButton } from '@/components/BookmarkButton';

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
  // Truncate to keep titles under ~60 chars (Google search snippet limit)
  const fullTitle = `${job.title} · ${job.company}`;
  const title = fullTitle.length <= 60 ? fullTitle : fullTitle.slice(0, 57).trimEnd() + '…';
  // Build a richer description: first 200 chars of body, padded with role + location signals
  const cleanBody = job.description.replace(/\s+/g, ' ').trim();
  const bodyExcerpt = cleanBody.slice(0, 140);
  const description =
    `Remote ${job.role.replace('-', ' ')} role at ${job.company}${job.locationCountry ? ` for candidates in ${job.locationCountry}` : ''}. ${bodyExcerpt}`.slice(0, 160);
  return buildMetadata({
    locale: params.lang,
    path: `job/${params.id}`,
    title,
    description,
    index: !expired,
  });
}

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

function relativeDate(iso: string): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days < 1) return 'today';
  if (days === 1) return '1 day ago';
  if (days < 30) return `${days} days ago`;
  const m = Math.floor(days / 30);
  return m === 1 ? '1 month ago' : `${m} months ago`;
}

// Best-effort description parsing: split into paragraphs and detect list items.
function renderDescription(desc: string) {
  const blocks = desc.split(/\n{2,}/).filter((b) => b.trim().length > 0);
  return blocks.map((block, i) => {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    const isList = lines.every((l) => /^[-•*·]\s/.test(l) || /^\d+\.\s/.test(l));
    if (isList && lines.length > 1) {
      return (
        <ul key={i} className="list-disc pl-5 space-y-1 my-3">
          {lines.map((l, j) => (
            <li key={j}>{l.replace(/^[-•*·]\s|^\d+\.\s/, '')}</li>
          ))}
        </ul>
      );
    }
    // Treat short ALL-CAPS-LIKE lines as headings
    if (lines.length === 1 && lines[0].length < 60 && /:$/.test(lines[0])) {
      return (
        <h3 key={i} className="font-semibold text-ink mt-5 mb-1.5">
          {lines[0].replace(/:$/, '')}
        </h3>
      );
    }
    return (
      <p key={i} className="my-3">
        {block}
      </p>
    );
  });
}

export default function JobPage({ params }: { params: { lang: Locale; id: string } }) {
  const job = jobById(params.id);
  if (!job) notFound();
  const expired = isExpired(job);
  const tile = tileColors(job.company);
  const flag = flagFor(job.locationCountry);

  const related = allJobs()
    .filter((j) => j.id !== job.id && j.role === job.role)
    .slice(0, 5);

  const crumbItems = [
    { label: 'Home', href: localePath(params.lang) },
    { label: t(params.lang, 'nav.jobs'), href: localePath(params.lang, 'jobs') },
    {
      label: job.role.replace('-', ' '),
      href: localePath(params.lang, `jobs/${job.role}`),
    },
    { label: job.title },
  ];

  const crumbJsonLd = breadcrumbJsonLd(
    crumbItems
      .filter((c) => c.href)
      .map((c) => ({ name: c.label, url: absoluteUrl(c.href!) }))
      .concat([
        {
          name: job.title,
          url: absoluteUrl(`/${params.lang}/job/${job.id}`),
        },
      ]),
  );

  const salary =
    job.salaryMin || job.salaryMax
      ? `${job.currency ?? 'USD'} ${(job.salaryMin || 0).toLocaleString()}${
          job.salaryMax ? ' – ' + job.salaryMax.toLocaleString() : '+'
        }`
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd(job)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbJsonLd) }}
      />

      <div className="max-w-5xl mx-auto space-y-6">
        <Breadcrumb items={crumbItems} />

        {/* Hero */}
        <header className="rounded-2xl border border-line bg-paper shadow-soft p-5 md:p-7">
          <div className="flex items-start gap-4">
            <div
              className={`flex-shrink-0 w-14 h-14 rounded-xl ${tile.bg} ${tile.fg} flex items-center justify-center text-xl font-bold`}
            >
              {job.company.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <Link
                href={localePath(params.lang, `companies/${job.companySlug}`)}
                className="text-sm font-semibold text-graphite hover:text-ink"
              >
                {job.company}
              </Link>
              <h1 className="font-display text-2xl md:text-4xl font-normal tracking-tighter text-ink mt-1 leading-tight">
                {job.title}
              </h1>
              <p className="text-sm text-muted mt-2">
                {flag} {job.location} · Posted {relativeDate(job.postedAt)} · via {job.source}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-forestSoft text-forest font-semibold capitalize">
              {job.role.replace('-', ' ')}
            </span>
            <span className="px-3 py-1 rounded-full bg-sand text-graphite border border-line font-medium capitalize">
              {job.seniority}
            </span>
            <span className="px-3 py-1 rounded-full bg-sand text-graphite border border-line font-medium">
              {job.employmentType === 'CONTRACTOR' ? 'Contract' : job.employmentType.replace('_', ' ').toLowerCase()}
            </span>
            {salary && (
              <span className="px-3 py-1 rounded-full bg-amberSoft text-amber font-semibold">
                {salary}
              </span>
            )}
            {job.remote === 'full' && (
              <span className="px-3 py-1 rounded-full bg-terracottaSoft text-terracotta font-medium">
                Fully remote
              </span>
            )}
          </div>

          {!expired && (
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={job.url}
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center px-5 py-2.5 bg-ink text-bg rounded-full text-sm font-semibold hover:bg-forest transition-colors"
              >
                Apply on {job.source} →
              </a>
              <BookmarkButton id={job.id} />
            </div>
          )}
          {expired && (
            <p className="mt-5 text-sm text-muted italic">This listing has expired.</p>
          )}
        </header>

        {/* Body grid: description + sidebar */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-6">
          <article className="rounded-2xl border border-line bg-paper shadow-soft p-5 md:p-7 prose-body">
            <h2 className="font-display text-2xl tracking-tighter !mt-0">About this role</h2>
            <div className="text-graphite">{renderDescription(job.description)}</div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-line bg-paper shadow-soft p-5">
              <h3 className="text-[10px] uppercase tracking-wider text-subtle font-semibold mb-3">
                Quick facts
              </h3>
              <dl className="space-y-2.5 text-sm">
                <Fact label="Role" value={job.role.replace('-', ' ')} />
                <Fact label="Seniority" value={job.seniority} />
                <Fact label="Type" value={job.employmentType.replace('_', ' ').toLowerCase()} />
                {salary && <Fact label="Salary" value={salary} />}
                <Fact label="Location" value={`${flag} ${job.location}`} />
                <Fact label="Posted" value={new Date(job.postedAt).toISOString().slice(0, 10)} />
                <Fact label="Source" value={job.source} />
              </dl>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-line bg-paper shadow-soft p-5">
                <h3 className="text-[10px] uppercase tracking-wider text-subtle font-semibold mb-3">
                  More remote {job.role.replace('-', ' ')} jobs
                </h3>
                <ul className="space-y-2">
                  {related.map((r) => (
                    <li key={r.id}>
                      <Link
                        href={localePath(params.lang, `job/${r.id}`)}
                        className="block text-sm text-graphite hover:text-ink"
                      >
                        <span className="font-medium line-clamp-1">{r.title}</span>
                        <span className="text-xs text-subtle">
                          {r.company} · {flagFor(r.locationCountry)} {r.location}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={localePath(params.lang, `jobs/${job.role}`)}
                  className="text-xs text-forest hover:underline mt-3 inline-block"
                >
                  See all {job.role.replace('-', ' ')} roles →
                </Link>
              </div>
            )}
          </aside>
        </div>

        <NomadCTA context={{ type: 'job' }} />
      </div>

      {/* Sticky apply bar on mobile */}
      {!expired && (
        <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-paper/95 backdrop-blur-md border-t border-line p-3 shadow-lift">
          <div className="flex items-center gap-2 max-w-5xl mx-auto">
            <BookmarkButton id={job.id} variant="icon" />
            <a
              href={job.url}
              target="_blank"
              rel="nofollow noopener"
              className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-ink text-bg rounded-full text-sm font-semibold hover:bg-forest transition-colors"
            >
              Apply on {job.source} →
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <dt className="text-subtle text-xs uppercase tracking-wide flex-shrink-0">{label}</dt>
      <dd className="text-ink font-medium text-right capitalize">{value}</dd>
    </div>
  );
}
