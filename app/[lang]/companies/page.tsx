import Link from 'next/link';
import type { Metadata } from 'next';
import { topCompanies } from '@/lib/jobs';
import { localePath, t } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = true;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'companies',
    title: 'Remote-friendly companies hiring now',
    description:
      'Every company currently posting remote tech jobs in our index, ranked by open positions.',
  });
}

export default function CompaniesPage({ params }: { params: { lang: Locale } }) {
  const companies = topCompanies(200);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{t(params.lang, 'nav.companies')}</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
        {companies.map((c) => (
          <li key={c.slug}>
            <Link
              href={localePath(params.lang, `companies/${c.slug}`)}
              className="block px-3 py-2 border border-line rounded hover:border-ink"
            >
              <span className="font-medium">{c.name}</span>
              <span className="text-muted"> · {c.count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
