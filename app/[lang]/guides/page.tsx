import Link from 'next/link';
import type { Metadata } from 'next';
import { GUIDES } from '@/lib/guides';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'guides',
    title: 'Guides for remote tech workers',
    description:
      'Long-form guides on finding remote tech jobs, salaries, visas, taxes and lifestyle for remote engineers.',
  });
}

const CATEGORIES: Array<{ id: string; label: string }> = [
  { id: 'finding', label: 'Finding a job' },
  { id: 'salary', label: 'Salaries and negotiation' },
  { id: 'career', label: 'Career paths' },
  { id: 'visa', label: 'Visas' },
  { id: 'tax', label: 'Taxes' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'tools', label: 'Tools and setup' },
];

export default function GuidesIndex({ params }: { params: { lang: Locale } }) {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold">Guides for remote tech workers</h1>
        <p className="text-muted text-sm mt-2 max-w-prose">
          Long-form, opinionated guides on every topic that matters for landing and sustaining a
          remote tech career. Updated as the market shifts.
        </p>
      </header>

      {CATEGORIES.map((cat) => {
        const items = GUIDES.filter((g) => g.category === cat.id);
        if (items.length === 0) return null;
        return (
          <section key={cat.id}>
            <h2 className="text-lg font-semibold mb-3">{cat.label}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {items.map((g) => (
                <Link
                  key={g.slug}
                  href={`/${params.lang}/guides/${g.slug}`}
                  className="block border border-line rounded-lg p-4 hover:border-ink"
                >
                  <h3 className="font-medium text-ink">{g.title}</h3>
                  <p className="text-sm text-muted mt-1">{g.description}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
