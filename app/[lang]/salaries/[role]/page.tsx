import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { salaryStats } from '@/lib/jobs';
import { ROLES, type Locale, type Role } from '@/lib/types';
import { LOCALES, t } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = true;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => ROLES.map((role) => ({ lang, role })));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; role: string };
}): Metadata {
  const role = params.role.replace('-', ' ');
  return buildMetadata({
    locale: params.lang,
    path: `salaries/${params.role}`,
    title: `Remote ${role} salaries`,
    description: `Median, average and percentile salary ranges for remote ${role} roles, computed from current job listings.`,
  });
}

export default function SalaryPage({ params }: { params: { lang: Locale; role: string } }) {
  if (!ROLES.includes(params.role as Role)) notFound();
  const role = params.role as Role;
  const usd = salaryStats(role, 'USD');
  const eur = salaryStats(role, 'EUR');
  return (
    <div className="space-y-8 max-w-2xl">
      <header>
        <h1 className="text-2xl font-semibold capitalize">
          Remote {role.replace('-', ' ')} salaries
        </h1>
        <p className="text-muted text-sm mt-1">
          Computed live from open listings in our index.
        </p>
      </header>

      {usd && (
        <SalaryTable
          currency="USD"
          stats={usd}
          locale={params.lang}
        />
      )}
      {eur && (
        <SalaryTable
          currency="EUR"
          stats={eur}
          locale={params.lang}
        />
      )}
      {!usd && !eur && (
        <p className="text-muted text-sm">
          Not enough salary data for {role.replace('-', ' ')} yet. Check back as the index grows.
        </p>
      )}

      <section className="text-sm text-muted leading-relaxed">
        <h2 className="text-base font-semibold text-ink mb-2">How this is calculated</h2>
        <p>
          We average the min and max of each posting that publishes a salary range. Percentile
          values come from the sorted distribution of those midpoints. Listings without a salary
          are excluded. Currency conversion is not applied — each currency is computed in
          isolation. {t(params.lang, 'footer.refreshed')} daily.
        </p>
      </section>
    </div>
  );
}

function SalaryTable({
  currency,
  stats,
  locale,
}: {
  currency: string;
  stats: NonNullable<ReturnType<typeof salaryStats>>;
  locale: Locale;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">
        {currency} · based on {stats.count} listings
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: '25th pct', value: stats.p25 },
          { label: 'Median', value: stats.median },
          { label: 'Average', value: stats.avg },
          { label: '75th pct', value: stats.p75 },
        ].map((s) => (
          <div key={s.label} className="border border-line rounded p-3">
            <div className="text-xs text-muted">{s.label}</div>
            <div className="text-lg font-semibold mt-1">
              {currency} {Math.round(s.value).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted mt-2">{t(locale, 'label.updated')}</p>
    </section>
  );
}
