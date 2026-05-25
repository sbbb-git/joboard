import Link from 'next/link';
import type { Metadata } from 'next';
import { COMPARISONS } from '@/lib/comparisons';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'compare',
    title: 'Remote tech career comparisons',
    description:
      'Head-to-head comparisons on the trade-offs that matter for remote tech workers: remote vs hybrid, freelance vs full-time, startup vs big tech, and more.',
  });
}

export default function CompareIndex({ params }: { params: { lang: Locale } }) {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold">Remote tech career comparisons</h1>
        <p className="text-muted text-sm mt-2 max-w-prose">
          {COMPARISONS.length} head-to-head breakdowns on the trade-offs that actually matter for
          remote tech careers.
        </p>
      </header>
      <ul className="grid sm:grid-cols-2 gap-3">
        {COMPARISONS.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/${params.lang}/compare/${c.slug}`}
              className="block border border-line rounded-lg p-4 hover:border-ink"
            >
              <h2 className="font-medium text-ink">{c.title}</h2>
              <p className="text-sm text-muted mt-1">{c.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
