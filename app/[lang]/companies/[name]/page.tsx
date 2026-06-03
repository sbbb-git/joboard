import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { jobsByCompany, topCompanies } from '@/lib/jobs';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

type CompanyCopy = {
  metaTitle: (company: string) => string;
  metaDescription: (company: string) => string;
  openPositions: (n: number) => string;
};

const COMPANY_I18N: Record<Locale, CompanyCopy> = {
  en: {
    metaTitle: (c) => `${c} · remote jobs`,
    metaDescription: (c) => `Open remote positions at ${c}, refreshed daily.`,
    openPositions: (n) => `${n} open remote position${n === 1 ? '' : 's'}`,
  },
  fr: {
    metaTitle: (c) => `${c} · offres remote`,
    metaDescription: (c) => `Postes remote ouverts chez ${c}, mis à jour chaque jour.`,
    openPositions: (n) => `${n} poste${n === 1 ? '' : 's'} remote ouvert${n === 1 ? '' : 's'}`,
  },
  es: {
    metaTitle: (c) => `${c} · empleos remote`,
    metaDescription: (c) => `Puestos remotos abiertos en ${c}, actualizados cada día.`,
    openPositions: (n) => `${n} puesto${n === 1 ? '' : 's'} remoto${n === 1 ? '' : 's'} abierto${n === 1 ? '' : 's'}`,
  },
  de: {
    metaTitle: (c) => `${c} · Remote-Jobs`,
    metaDescription: (c) => `Offene Remote-Stellen bei ${c}, täglich aktualisiert.`,
    openPositions: (n) => `${n} offene Remote-Stelle${n === 1 ? '' : 'n'}`,
  },
  pt: {
    metaTitle: (c) => `${c} · vagas remote`,
    metaDescription: (c) => `Vagas remotas abertas na ${c}, atualizadas todo dia.`,
    openPositions: (n) => `${n} vaga${n === 1 ? '' : 's'} remota${n === 1 ? '' : 's'} aberta${n === 1 ? '' : 's'}`,
  },
  it: {
    metaTitle: (c) => `${c} · lavori remote`,
    metaDescription: (c) => `Posizioni remote aperte in ${c}, aggiornate ogni giorno.`,
    openPositions: (n) => `${n} posizione${n === 1 ? '' : 'i'} remote aperte`,
  },
  pl: {
    metaTitle: (c) => `${c} · praca zdalna`,
    metaDescription: (c) => `Otwarte zdalne stanowiska w ${c}, aktualizowane codziennie.`,
    openPositions: (n) => `${n} otwart${n === 1 ? 'a' : 'ych'} zdalna${n === 1 ? '' : 'ch'} ofert${n === 1 ? 'a' : ''}`,
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
  return buildMetadata({
    locale: params.lang,
    path: `companies/${params.name}`,
    title: c.metaTitle(companyName),
    description: c.metaDescription(companyName),
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
