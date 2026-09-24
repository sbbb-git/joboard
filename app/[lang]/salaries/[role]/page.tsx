import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { salaryStats } from '@/lib/jobs';
import { ROLES, type Locale, type Role } from '@/lib/types';
import { LOCALES, t, localePath } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { roleLabel, countryLabel } from '@/lib/labels';

// Kept in sync with the country list in salaries/[role]/[country].
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

export const dynamicParams = false;
export const revalidate = false;

type SalaryCopy = {
  metaTitle: (role: string) => string;
  metaDescription: (role: string) => string;
  h1: (role: string) => string;
  subtitle: string;
  noData: (role: string) => string;
  basedOn: (n: number) => string;
  howCalculated: string;
  methodology: string;
  p25: string;
  median: string;
  average: string;
  p75: string;
  byCountryHeading: string;
  byCountryBlurb: string;
  otherRolesHeading: string;
};

const SALARY_I18N: Record<Locale, SalaryCopy> = {
  en: {
    metaTitle: (r) => `Remote ${r} salaries`,
    metaDescription: (r) =>
      `Median, average and percentile salary ranges for remote ${r} roles, computed from current job listings.`,
    h1: (r) => `Remote ${r} salaries`,
    subtitle: 'Computed live from open listings in our index.',
    noData: (r) =>
      `Not enough salary data for ${r} yet. Check back as the index grows.`,
    basedOn: (n) => `based on ${n} listings`,
    howCalculated: 'How this is calculated',
    methodology:
      'We average the min and max of each posting that publishes a salary range. Percentile values come from the sorted distribution of those midpoints. Listings without a salary are excluded. Currency conversion is not applied; each currency is computed in isolation.',
    p25: '25th pct',
    median: 'Median',
    average: 'Average',
    p75: '75th pct',
    byCountryHeading: 'Salaries by country',
    byCountryBlurb: 'Includes a country-by-country breakdown across 12 major hiring markets.',
    otherRolesHeading: 'Other roles',
  },
  fr: {
    metaTitle: (r) => `Salaires remote ${r}`,
    metaDescription: (r) =>
      `Fourchettes salariales médianes et percentiles pour les postes remote ${r}, calculées depuis les offres d'emploi actuelles.`,
    h1: (r) => `Salaires remote ${r}`,
    subtitle: "Calculé en direct depuis les offres actives de notre index.",
    noData: (r) =>
      `Pas assez de données salariales pour ${r} pour l'instant. Revenez quand l'index grandit.`,
    basedOn: (n) => `basé sur ${n} offres`,
    howCalculated: 'Comment c\'est calculé',
    methodology:
      "Nous calculons la moyenne du min et du max de chaque offre qui publie une fourchette salariale. Les valeurs percentiles viennent de la distribution triée de ces points médians. Les offres sans salaire sont exclues. La conversion de devise n'est pas appliquée ; chaque devise est calculée isolément.",
    p25: '25e pct',
    median: 'Médiane',
    average: 'Moyenne',
    p75: '75e pct',
    byCountryHeading: 'Salaires par pays',
    byCountryBlurb: 'Inclut une ventilation pays par pays sur 12 grands marchés du recrutement.',
    otherRolesHeading: 'Autres rôles',
  },
  de: {
    metaTitle: (r) => `Remote-${r}-Gehälter`,
    metaDescription: (r) =>
      `Median-, Durchschnitts- und Perzentil-Gehaltsspannen für Remote-${r}-Stellen, berechnet aus aktuellen Stellenausschreibungen.`,
    h1: (r) => `Remote-${r}-Gehälter`,
    subtitle: 'Live aus offenen Stellen in unserem Index berechnet.',
    noData: (r) =>
      `Noch nicht genug Gehaltsdaten für ${r}. Schau wieder vorbei, wenn der Index wächst.`,
    basedOn: (n) => `basierend auf ${n} Stellen`,
    howCalculated: 'Wie wird das berechnet',
    methodology:
      'Wir berechnen den Durchschnitt aus Minimum und Maximum jeder Stelle, die eine Gehaltsspanne veröffentlicht. Perzentilwerte kommen aus der sortierten Verteilung dieser Mittelpunkte. Stellen ohne Gehalt werden ausgeschlossen. Währungsumrechnung wird nicht angewendet; jede Währung wird isoliert berechnet.',
    p25: '25. Pzt.',
    median: 'Median',
    average: 'Durchschnitt',
    p75: '75. Pzt.',
    byCountryHeading: 'Gehälter nach Land',
    byCountryBlurb: 'Enthält eine Aufschlüsselung nach Ländern über 12 große Einstellungsmärkte.',
    otherRolesHeading: 'Andere Rollen',
  },
};

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => ROLES.map((role) => ({ lang, role })));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; role: string };
}): Metadata {
  const c = SALARY_I18N[params.lang];
  const role = roleLabel(params.lang, params.role);
  return buildMetadata({
    locale: params.lang,
    path: `salaries/${params.role}`,
    title: `${c.metaTitle(role)} in 2026`,
    description: `${c.metaDescription(role)} ${c.byCountryBlurb}`,
  });
}

export default function SalaryPage({ params }: { params: { lang: Locale; role: string } }) {
  if (!ROLES.includes(params.role as Role)) notFound();
  const role = params.role as Role;
  const c = SALARY_I18N[params.lang];
  const roleName = roleLabel(params.lang, params.role);
  const usd = salaryStats(role, 'USD');
  const eur = salaryStats(role, 'EUR');
  return (
    <div className="space-y-8 max-w-2xl">
      <header>
        <h1 className="text-2xl font-semibold">
          {c.h1(roleName)}
        </h1>
        <p className="text-muted text-sm mt-1">{c.subtitle}</p>
      </header>

      {usd && (
        <SalaryTable currency="USD" stats={usd} locale={params.lang} c={c} />
      )}
      {eur && (
        <SalaryTable currency="EUR" stats={eur} locale={params.lang} c={c} />
      )}
      {!usd && !eur && (
        <p className="text-muted text-sm">{c.noData(roleName)}</p>
      )}

      <section>
        <h2 className="text-base font-semibold text-ink mb-3">{c.byCountryHeading}</h2>
        <ul className="flex flex-wrap gap-2">
          {TOP_COUNTRIES.map((country) => (
            <li key={country}>
              <Link
                href={localePath(params.lang, `salaries/${role}/${country}`)}
                className="inline-block text-sm px-3 py-1 rounded-full bg-sand border border-line text-graphite hover:border-ink hover:text-ink"
              >
                {countryLabel(country)}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-base font-semibold text-ink mb-3">{c.otherRolesHeading}</h2>
        <ul className="flex flex-wrap gap-2">
          {ROLES.filter((r) => r !== role).map((r) => (
            <li key={r}>
              <Link
                href={localePath(params.lang, `salaries/${r}`)}
                className="inline-block text-sm px-3 py-1 rounded-full bg-sand border border-line text-graphite hover:border-ink hover:text-ink"
              >
                {roleLabel(params.lang, r)}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="text-sm text-muted leading-relaxed">
        <h2 className="text-base font-semibold text-ink mb-2">{c.howCalculated}</h2>
        <p>
          {c.methodology} {t(params.lang, 'footer.refreshed')} daily.
        </p>
      </section>
    </div>
  );
}

function SalaryTable({
  currency,
  stats,
  locale,
  c,
}: {
  currency: string;
  stats: NonNullable<ReturnType<typeof salaryStats>>;
  locale: Locale;
  c: SalaryCopy;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">
        {currency} · {c.basedOn(stats.count)}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: c.p25, value: stats.p25 },
          { label: c.median, value: stats.median },
          { label: c.average, value: stats.avg },
          { label: c.p75, value: stats.p75 },
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
