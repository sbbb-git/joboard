import Link from 'next/link';
import type { Metadata } from 'next';
import { GUIDES } from '@/lib/guides';
import { buildMetadata, itemListJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'guides',
    title: 'Guides for remote tech workers',
    description:
      'Long-form guides on finding remote tech jobs, salaries, visas, taxes, tools and lifestyle for remote engineers.',
  });
}

const CATEGORIES: Array<{ id: string; label: string }> = [
  { id: 'finding', label: 'Finding a job' },
  { id: 'salary', label: 'Salaries & negotiation' },
  { id: 'career', label: 'Career paths' },
  { id: 'visa', label: 'Visas' },
  { id: 'tax', label: 'Taxes' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'tools', label: 'Tools & setup' },
];

export default function GuidesIndex({ params }: { params: { lang: Locale } }) {
  const itemList = itemListJsonLd(
    GUIDES.map((g) => ({ name: g.title, url: absoluteUrl(`/${params.lang}/guides/${g.slug}`) })),
  );
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <header className="border-b border-line pb-6">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">Guides</p>
        <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1">
          Guides for remote tech workers
        </h1>
        <p className="text-graphite text-base mt-3 max-w-prose">
          {GUIDES.length} long-form, opinionated guides on every topic that matters for landing
          and sustaining a remote tech career.
        </p>
      </header>

      {CATEGORIES.map((cat) => {
        const items = GUIDES.filter((g) => g.category === cat.id);
        if (items.length === 0) return null;
        return (
          <section key={cat.id}>
            <h2 className="font-display text-xl font-normal tracking-tighter text-ink mb-4">
              {cat.label}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((g) => (
                <Link
                  key={g.slug}
                  href={`/${params.lang}/guides/${g.slug}`}
                  className="block rounded-2xl border border-line bg-paper shadow-soft hover-lift hover:shadow-lift hover:border-ink/20 p-5"
                >
                  <p className="text-[10px] uppercase tracking-wider text-forest font-semibold">
                    {g.category}
                  </p>
                  <h3 className="font-semibold text-ink mt-1.5 leading-snug">{g.title}</h3>
                  <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-3">
                    {g.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
