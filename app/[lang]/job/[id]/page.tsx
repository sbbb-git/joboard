import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { jobById, allJobs, jobsByCompany, COMPANY_INDEX_MIN_JOBS } from '@/lib/jobs';
import type { Locale } from '@/lib/types';
import { t, localePath } from '@/lib/i18n';
import { buildMetadata, jobPostingJsonLd, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import { roleLabel } from '@/lib/labels';
import { isExpired } from '@/lib/filters';
import { flagFor } from '@/lib/flags';
import { NomadCTA } from '@/components/NomadCTA';
import { Breadcrumb } from '@/components/Breadcrumb';
import { BookmarkButton } from '@/components/BookmarkButton';
import { CompanyLogo } from '@/components/CompanyLogo';
import { SourceLogo } from '@/components/SourceLogo';

const PSEUDO_COUNTRIES = new Set(['Worldwide', 'Europe']);

export const dynamicParams = false;
export const revalidate = false;

type JobCopy = {
  // SEO description template. The body excerpt is already trimmed by the
  // caller; this only supplies the locale-specific framing around it, so a
  // French job page no longer ships an English sentence to Google.
  metaDescription: (
    role: string,
    company: string,
    country: string | undefined,
    excerpt: string,
  ) => string;
  postedLabel: string;
  via: string;
  applyOn: (source: string) => string;
  expired: string;
  fullyRemote: string;
  contract: string;
  aboutRole: string;
  quickFacts: string;
  factRole: string;
  factSeniority: string;
  factType: string;
  factSalary: string;
  factLocation: string;
  factPosted: string;
  factSource: string;
  moreJobs: (role: string) => string;
  seeAll: (role: string) => string;
  relToday: string;
  relDayAgo: string;
  relDaysAgo: (n: number) => string;
  relMonthAgo: string;
  relMonthsAgo: (n: number) => string;
  home: string;
};

const JOB_I18N: Record<Locale, JobCopy> = {
  en: {
    metaDescription: (role, company, country, excerpt) =>
      `Remote ${role} role at ${company}${country ? ` for candidates in ${country}` : ''}. ${excerpt}`,
    postedLabel: 'Posted',
    via: 'via',
    applyOn: (s) => `Apply on ${s} →`,
    expired: 'This listing has expired.',
    fullyRemote: 'Fully remote',
    contract: 'Contract',
    aboutRole: 'About this role',
    quickFacts: 'Quick facts',
    factRole: 'Role',
    factSeniority: 'Seniority',
    factType: 'Type',
    factSalary: 'Salary',
    factLocation: 'Location',
    factPosted: 'Posted',
    factSource: 'Source',
    moreJobs: (r) => `More remote ${r} jobs`,
    seeAll: (r) => `See all ${r} roles →`,
    relToday: 'today',
    relDayAgo: '1 day ago',
    relDaysAgo: (n) => `${n} days ago`,
    relMonthAgo: '1 month ago',
    relMonthsAgo: (n) => `${n} months ago`,
    home: 'Home',
  },
  fr: {
    metaDescription: (role, company, country, excerpt) =>
      `Poste de ${role} en remote chez ${company}${country ? `, candidats basés dans ce pays : ${country}` : ''}. ${excerpt}`,
    postedLabel: 'Publiée',
    via: 'via',
    applyOn: (s) => `Postuler sur ${s} →`,
    expired: 'Cette offre a expiré.',
    fullyRemote: 'Entièrement remote',
    contract: 'Freelance',
    aboutRole: 'À propos du poste',
    quickFacts: 'En bref',
    factRole: 'Rôle',
    factSeniority: 'Niveau',
    factType: 'Type',
    factSalary: 'Salaire',
    factLocation: 'Lieu',
    factPosted: 'Publiée',
    factSource: 'Source',
    moreJobs: (r) => `Plus d'offres remote ${r}`,
    seeAll: (r) => `Voir tous les postes ${r} →`,
    relToday: "aujourd'hui",
    relDayAgo: 'il y a 1 jour',
    relDaysAgo: (n) => `il y a ${n} jours`,
    relMonthAgo: 'il y a 1 mois',
    relMonthsAgo: (n) => `il y a ${n} mois`,
    home: 'Accueil',
  },
  de: {
    metaDescription: (role, company, country, excerpt) =>
      `Remote-Stelle als ${role} bei ${company}${country ? `, offen für Bewerber in ${country}` : ''}. ${excerpt}`,
    postedLabel: 'Veröffentlicht',
    via: 'via',
    applyOn: (s) => `Bewerben auf ${s} →`,
    expired: 'Diese Stelle ist abgelaufen.',
    fullyRemote: 'Vollständig remote',
    contract: 'Freiberuflich',
    aboutRole: 'Über diese Stelle',
    quickFacts: 'Auf einen Blick',
    factRole: 'Rolle',
    factSeniority: 'Level',
    factType: 'Art',
    factSalary: 'Gehalt',
    factLocation: 'Ort',
    factPosted: 'Veröffentlicht',
    factSource: 'Quelle',
    moreJobs: (r) => `Weitere Remote-${r}-Jobs`,
    seeAll: (r) => `Alle ${r}-Stellen ansehen →`,
    relToday: 'heute',
    relDayAgo: 'vor 1 Tag',
    relDaysAgo: (n) => `vor ${n} Tagen`,
    relMonthAgo: 'vor 1 Monat',
    relMonthsAgo: (n) => `vor ${n} Monaten`,
    home: 'Startseite',
  },
};

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
  const fullTitle = `${job.title} · ${job.company}`;
  const title = fullTitle.length <= 60 ? fullTitle : fullTitle.slice(0, 57).trimEnd() + '…';
  const cleanBody = job.description.replace(/\s+/g, ' ').trim();
  const bodyExcerpt = cleanBody.slice(0, 140);
  // normalizeLocation buckets location-agnostic postings under pseudo
  // countries ("Worldwide", "Europe"). Feeding those into the "for candidates
  // in X" clause produced "candidats basés dans ce pays : Worldwide", so drop
  // the clause for them: the description already says the role is remote.
  const realCountry =
    job.locationCountry && !PSEUDO_COUNTRIES.has(job.locationCountry)
      ? job.locationCountry
      : undefined;
  const description = JOB_I18N[params.lang]
    .metaDescription(roleLabel(params.lang, job.role), job.company, realCountry, bodyExcerpt)
    .slice(0, 160);
  return buildMetadata({
    locale: params.lang,
    path: `job/${params.id}`,
    title,
    description,
    index: !expired,
  });
}

function relativeDate(iso: string, c: JobCopy): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days < 1) return c.relToday;
  if (days === 1) return c.relDayAgo;
  if (days < 30) return c.relDaysAgo(days);
  const m = Math.floor(days / 30);
  return m === 1 ? c.relMonthAgo : c.relMonthsAgo(m);
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
  const flag = flagFor(job.locationCountry);
  const c = JOB_I18N[params.lang];

  const related = allJobs()
    .filter((j) => j.id !== job.id && j.role === job.role)
    .slice(0, 5);

  const roleName = roleLabel(params.lang, job.role);

  const crumbItems = [
    { label: c.home, href: localePath(params.lang) },
    { label: t(params.lang, 'nav.jobs'), href: localePath(params.lang, 'jobs') },
    {
      label: roleName,
      href: localePath(params.lang, `jobs/${job.role}`),
    },
    { label: job.title },
  ];

  const crumbJsonLd = breadcrumbJsonLd(
    crumbItems
      .filter((cr) => cr.href)
      .map((cr) => ({ name: cr.label, url: absoluteUrl(cr.href!) }))
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
            <CompanyLogo company={job.company} companySlug={job.companySlug} role={job.role} size={56} />
            <div className="flex-1 min-w-0">
              {/* Single-opening companies have no page of their own. */}
              {jobsByCompany(job.companySlug).length >= COMPANY_INDEX_MIN_JOBS ? (
                <Link
                  href={localePath(params.lang, `companies/${job.companySlug}`)}
                  className="text-sm font-semibold text-graphite hover:text-ink"
                >
                  {job.company}
                </Link>
              ) : (
                <span className="text-sm font-semibold text-graphite">{job.company}</span>
              )}
              <h1 className="font-display text-2xl md:text-4xl font-normal tracking-tighter text-ink mt-1 leading-tight">
                {job.title}
              </h1>
              <p className="text-sm text-muted mt-2">
                <span>{flag} {job.location} · {c.postedLabel} {relativeDate(job.postedAt, c)} · {c.via}</span>{' '}
                <span className="inline-flex items-baseline gap-1 align-middle">
                  <SourceLogo source={job.source} size={14} />
                  <span>{job.source}</span>
                </span>
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-forestSoft text-forest font-semibold capitalize">
              {roleName}
            </span>
            <span className="px-3 py-1 rounded-full bg-sand text-graphite border border-line font-medium capitalize">
              {job.seniority}
            </span>
            <span className="px-3 py-1 rounded-full bg-sand text-graphite border border-line font-medium">
              {job.employmentType === 'CONTRACTOR' ? c.contract : job.employmentType.replace('_', ' ').toLowerCase()}
            </span>
            {salary && (
              <span className="px-3 py-1 rounded-full bg-amberSoft text-amber font-semibold">
                {salary}
              </span>
            )}
            {job.remote === 'full' && (
              <span className="px-3 py-1 rounded-full bg-terracottaSoft text-terracotta font-medium">
                {c.fullyRemote}
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
                {c.applyOn(job.source)}
              </a>
              <BookmarkButton id={job.id} locale={params.lang} />
            </div>
          )}
          {expired && (
            <p className="mt-5 text-sm text-muted italic">{c.expired}</p>
          )}
        </header>

        {/* Body grid: description + sidebar */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-6">
          <article className="rounded-2xl border border-line bg-paper shadow-soft p-5 md:p-7 prose-body">
            <h2 className="font-display text-2xl tracking-tighter !mt-0">{c.aboutRole}</h2>
            <div className="text-graphite">{renderDescription(job.description)}</div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-line bg-paper shadow-soft p-5">
              <h3 className="text-[10px] uppercase tracking-wider text-subtle font-semibold mb-3">
                {c.quickFacts}
              </h3>
              <dl className="space-y-2.5 text-sm">
                <Fact label={c.factRole} value={roleName} />
                <Fact label={c.factSeniority} value={job.seniority} />
                <Fact label={c.factType} value={job.employmentType.replace('_', ' ').toLowerCase()} />
                {salary && <Fact label={c.factSalary} value={salary} />}
                <Fact label={c.factLocation} value={`${flag} ${job.location}`} />
                <Fact label={c.factPosted} value={new Date(job.postedAt).toISOString().slice(0, 10)} />
                <Fact label={c.factSource} value={job.source} />
              </dl>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-line bg-paper shadow-soft p-5">
                <h3 className="text-[10px] uppercase tracking-wider text-subtle font-semibold mb-3">
                  {c.moreJobs(roleName)}
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
                  {c.seeAll(roleName)}
                </Link>
              </div>
            )}
          </aside>
        </div>

        <NomadCTA context={{ type: 'job' }} locale={params.lang} />
      </div>

      {/* Sticky apply bar on mobile */}
      {!expired && (
        <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-paper/95 backdrop-blur-md border-t border-line p-3 shadow-lift">
          <div className="flex items-center gap-2 max-w-5xl mx-auto">
            <BookmarkButton id={job.id} variant="icon" locale={params.lang} />
            <a
              href={job.url}
              target="_blank"
              rel="nofollow noopener"
              className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-ink text-bg rounded-full text-sm font-semibold hover:bg-forest transition-colors"
            >
              {c.applyOn(job.source)}
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
