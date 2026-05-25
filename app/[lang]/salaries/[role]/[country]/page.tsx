import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { allJobs } from '@/lib/jobs';
import { ROLES, type Locale, type Role } from '@/lib/types';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';

export const dynamicParams = false;
export const revalidate = false;

const TOP_COUNTRIES = [
  'united-states',
  'united-kingdom',
  'germany',
  'france',
  'spain',
  'portugal',
  'netherlands',
  'canada',
  'mexico',
  'brazil',
  'india',
  'australia',
];

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    ROLES.flatMap((role) => TOP_COUNTRIES.map((country) => ({ lang, role, country }))),
  );
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; role: string; country: string };
}): Metadata {
  const role = params.role.replace(/-/g, ' ');
  const country = params.country.replace(/-/g, ' ');
  return buildMetadata({
    locale: params.lang,
    path: `salaries/${params.role}/${params.country}`,
    title: `Remote ${role} salaries in ${country}`,
    description: `Median and percentile salary ranges for remote ${role} positions hiring candidates based in ${country}, computed live from current job listings.`,
  });
}

function statsFor(role: Role, country: string) {
  const target = country.replace(/-/g, ' ').toLowerCase();
  const jobs = allJobs().filter(
    (j) => j.role === role && j.locationCountry?.toLowerCase() === target,
  );
  const byCurrency = new Map<string, number[]>();
  for (const j of jobs) {
    if (!j.currency) continue;
    let v: number | null = null;
    if (j.salaryMin && j.salaryMax) v = (j.salaryMin + j.salaryMax) / 2;
    else v = j.salaryMin || j.salaryMax || null;
    if (!v) continue;
    if (!byCurrency.has(j.currency)) byCurrency.set(j.currency, []);
    byCurrency.get(j.currency)!.push(v);
  }
  const results: Array<{ currency: string; count: number; median: number; avg: number; p25: number; p75: number }> = [];
  for (const [currency, vals] of byCurrency) {
    if (vals.length === 0) continue;
    vals.sort((a, b) => a - b);
    results.push({
      currency,
      count: vals.length,
      median: vals[Math.floor(vals.length / 2)],
      avg: Math.round(vals.reduce((a, b) => a + b, 0) / vals.length),
      p25: vals[Math.floor(vals.length * 0.25)],
      p75: vals[Math.floor(vals.length * 0.75)],
    });
  }
  return { jobs, results };
}

export default function SalaryByCountry({
  params,
}: {
  params: { lang: Locale; role: string; country: string };
}) {
  if (!ROLES.includes(params.role as Role)) notFound();
  const role = params.role as Role;
  const country = params.country.replace(/-/g, ' ');
  const { jobs, results } = statsFor(role, params.country);

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', url: absoluteUrl(`/${params.lang}`) },
    { name: 'Salaries', url: absoluteUrl(`/${params.lang}/salaries/${role}`) },
    {
      name: `${country}`,
      url: absoluteUrl(`/${params.lang}/salaries/${role}/${params.country}`),
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <header className="border-b border-line pb-4">
        <h1 className="text-2xl md:text-3xl font-semibold capitalize">
          Remote {role.replace('-', ' ')} salaries in {country}
        </h1>
        <p className="text-muted text-sm mt-2">
          Computed live from {jobs.length} {jobs.length === 1 ? 'listing' : 'listings'} in our
          index.
        </p>
      </header>

      {results.length === 0 ? (
        <section className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Not enough salary data yet for remote {role.replace('-', ' ')} positions targeting
            candidates in {country}. As the index grows, this page populates automatically.
          </p>
          <p>
            In the meantime, the{' '}
            <Link href={`/${params.lang}/salaries/${role}`} className="text-accent hover:underline">
              global {role.replace('-', ' ')} salary page
            </Link>{' '}
            shows broader benchmark numbers across all countries.
          </p>
        </section>
      ) : (
        results.map((r) => (
          <section key={r.currency}>
            <h2 className="text-lg font-semibold mb-3">
              {r.currency} · based on {r.count} listings
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: '25th pct', value: r.p25 },
                { label: 'Median', value: r.median },
                { label: 'Average', value: r.avg },
                { label: '75th pct', value: r.p75 },
              ].map((s) => (
                <div key={s.label} className="border border-line rounded p-3">
                  <div className="text-xs text-muted">{s.label}</div>
                  <div className="text-lg font-semibold mt-1">
                    {r.currency} {Math.round(s.value).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))
      )}

      <section className="text-sm text-muted leading-relaxed">
        <h2 className="text-base font-semibold text-ink mb-2">Methodology</h2>
        <p>
          Numbers come from postings in our index that explicitly publish a salary band and target
          candidates based in {country}. Each posting contributes the midpoint of its published
          band. Percentile values come from the sorted distribution of those midpoints.
        </p>
      </section>
    </div>
  );
}
