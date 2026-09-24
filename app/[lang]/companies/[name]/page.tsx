import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { jobsByCompany, topCompanies, COMPANY_INDEX_MIN_JOBS } from '@/lib/jobs';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { roleLabel } from '@/lib/labels';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

type CompanyCopy = {
  metaTitle: (company: string) => string;
  // Takes the live job count and role mix so each company page gets a
  // description that is both long enough for the SERP and actually specific
  // to that company, rather than one 45-char sentence repeated 343 times.
  metaDescription: (company: string, n: number, roles: string) => string;
  openPositions: (n: number) => string;
};

const COMPANY_I18N: Record<Locale, CompanyCopy> = {
  en: {
    metaTitle: (c) => `${c} remote jobs and open positions`,
    metaDescription: (c, n, r) =>
      `${n} open remote ${n === 1 ? 'role' : 'roles'} at ${c}${r ? ` across ${r}` : ''}. Salary ranges, locations and direct application links, aggregated from public job boards and updated daily.`,
    openPositions: (n) => `${n} open remote position${n === 1 ? '' : 's'}`,
  },
  fr: {
    metaTitle: (c) => `${c} : offres remote et postes ouverts`,
    metaDescription: (c, n, r) =>
      `${n} poste${n === 1 ? '' : 's'} remote ouvert${n === 1 ? '' : 's'} chez ${c}${r ? ` en ${r}` : ''}. Fourchettes salariales, localisations et liens de candidature directs, mis à jour chaque jour.`,
    openPositions: (n) => `${n} poste${n === 1 ? '' : 's'} remote ouvert${n === 1 ? '' : 's'}`,
  },
  de: {
    metaTitle: (c) => `${c}: Remote-Jobs und offene Stellen`,
    metaDescription: (c, n, r) =>
      `${n} offene Remote-Stelle${n === 1 ? '' : 'n'} bei ${c}${r ? ` in ${r}` : ''}. Gehaltsspannen, Standorte und direkte Bewerbungslinks, aus öffentlichen Job-Boards aggregiert und täglich aktualisiert.`,
    openPositions: (n) => `${n} offene Remote-Stelle${n === 1 ? '' : 'n'}`,
  },
};

export function generateStaticParams() {
  const all = topCompanies(10000).map((c) => c.slug);
  return LOCALES.flatMap((lang) => all.map((name) => ({ lang, name })));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; name: string };
}): Metadata {
  const jobs = jobsByCompany(params.name);
  const companyName = jobs[0]?.company ?? params.name.replace(/-/g, ' ');
  const c = COMPANY_I18N[params.lang];
  const roles = [...new Set(jobs.map((j) => roleLabel(params.lang, j.role)))].slice(0, 3).join(', ');
  return buildMetadata({
    locale: params.lang,
    path: `companies/${params.name}`,
    title: c.metaTitle(companyName),
    description: c.metaDescription(companyName, jobs.length, roles),
    // A company with a single opening restates that one posting, which is
    // already indexed in full on its own /job/ page. 222 of 289 companies are
    // in that position, so indexing them means 1,554 near-duplicate pages
    // across 7 locales for 12 impressions. Kept crawlable and linked, just
    // not indexed; a company flips back the moment it lists a second role.
    index: jobs.length >= COMPANY_INDEX_MIN_JOBS,
  });
}

export default function CompanyPage({ params }: { params: { lang: Locale; name: string } }) {
  const jobs = jobsByCompany(params.name);
  if (jobs.length === 0) notFound();
  const company = jobs[0].company;
  const c = COMPANY_I18N[params.lang];
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">{company}</h1>
        <p className="text-muted text-sm mt-1">{c.openPositions(jobs.length)}</p>
      </header>
      <div className="grid gap-3 md:grid-cols-2">
        {jobs.map((j) => (
          <JobCard key={j.id} job={j} locale={params.lang} />
        ))}
      </div>
    </div>
  );
}
