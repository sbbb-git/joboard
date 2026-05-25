import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { jobsByCompany, topCompanies } from '@/lib/jobs';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = true;
export const revalidate = false;

export function generateStaticParams() {
  const top = topCompanies(150).map((c) => c.slug);
  return LOCALES.flatMap((lang) => top.map((name) => ({ lang, name })));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; name: string };
}): Metadata {
  const jobs = jobsByCompany(params.name);
  const companyName = jobs[0]?.company ?? params.name.replace(/-/g, ' ');
  return buildMetadata({
    locale: params.lang,
    path: `companies/${params.name}`,
    title: `${companyName} · remote jobs`,
    description: `Open remote positions at ${companyName}, refreshed daily.`,
  });
}

export default function CompanyPage({ params }: { params: { lang: Locale; name: string } }) {
  const jobs = jobsByCompany(params.name);
  if (jobs.length === 0) notFound();
  const company = jobs[0].company;
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">{company}</h1>
        <p className="text-muted text-sm mt-1">{jobs.length} open remote positions</p>
      </header>
      <div className="grid gap-3 md:grid-cols-2">
        {jobs.map((j) => (
          <JobCard key={j.id} job={j} locale={params.lang} />
        ))}
      </div>
    </div>
  );
}
