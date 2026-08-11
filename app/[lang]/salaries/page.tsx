import Link from 'next/link';
import type { Metadata } from 'next';
import { ROLES, type Locale } from '@/lib/types';
import { LOCALES, localePath } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { roleLabel, countryLabel } from '@/lib/labels';
import { salaryStats } from '@/lib/jobs';
import { SALARIES_INDEX_I18N, SALARY_COUNTRIES } from '@/lib/salaries-i18n';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = SALARIES_INDEX_I18N[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'salaries',
    title: c.metaTitle,
    description: c.metaDescription(ROLES.length, SALARY_COUNTRIES.length),
  });
}

export default function SalariesIndex({ params }: { params: { lang: Locale } }) {
  const c = SALARIES_INDEX_I18N[params.lang];

  return (
    <div className="space-y-8">
      <header>
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="text-2xl md:text-3xl font-semibold mt-1">{c.h1}</h1>
        <p className="text-muted text-sm mt-2 max-w-prose">
          {c.intro(ROLES.length, SALARY_COUNTRIES.length)}
        </p>
      </header>

      <ul className="grid sm:grid-cols-2 gap-3">
        {ROLES.map((role) => {
          const usd = salaryStats(role, 'USD');
          return (
            <li key={role}>
              <Link
                href={localePath(params.lang, `salaries/${role}`)}
                className="block border border-line rounded-lg p-4 hover:border-ink"
              >
                <h2 className="font-medium text-ink">{c.roleCard(roleLabel(params.lang, role))}</h2>
                <p className="text-sm text-muted mt-1">
                  {usd
                    ? c.median(`USD ${Math.round(usd.median).toLocaleString()}`, usd.count)
                    : c.noData}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>

      <section>
        <h2 className="text-base font-semibold text-ink mb-3">{c.byCountryHeading}</h2>
        <p className="text-sm text-muted mb-3 max-w-prose">{c.byCountryIntro}</p>
        <ul className="flex flex-wrap gap-2">
          {SALARY_COUNTRIES.map((country) => (
            <li key={country}>
              <Link
                href={localePath(params.lang, `salaries/developer/${country}`)}
                className="inline-block text-sm px-3 py-1 rounded-full bg-sand border border-line text-graphite hover:border-ink hover:text-ink"
              >
                {countryLabel(country)}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="text-sm text-muted leading-relaxed max-w-prose">
        <h2 className="text-base font-semibold text-ink mb-2">{c.methodologyHeading}</h2>
        <p>{c.methodology}</p>
      </section>
    </div>
  );
}
