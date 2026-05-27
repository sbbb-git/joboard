import Link from 'next/link';
import type { Metadata } from 'next';
import { COMPARISONS } from '@/lib/comparisons';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { COMPARE_I18N } from '@/lib/page-i18n';

export const dynamicParams = false;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = COMPARE_I18N[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'compare',
    title: c.metaTitle,
    description: c.metaDescription(COMPARISONS.length),
  });
}

export default function CompareIndex({ params }: { params: { lang: Locale } }) {
  const c = COMPARE_I18N[params.lang];
  return (
    <div className="space-y-6">
      <header>
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="text-2xl md:text-3xl font-semibold mt-1">{c.h1}</h1>
        <p className="text-muted text-sm mt-2 max-w-prose">{c.intro(COMPARISONS.length)}</p>
      </header>
      <ul className="grid sm:grid-cols-2 gap-3">
        {COMPARISONS.map((comp) => (
          <li key={comp.slug}>
            <Link
              href={`/${params.lang}/compare/${comp.slug}`}
              className="block border border-line rounded-lg p-4 hover:border-ink"
            >
              <h2 className="font-medium text-ink">{comp.title}</h2>
              <p className="text-sm text-muted mt-1">{comp.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
