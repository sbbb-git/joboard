import Link from 'next/link';
import type { Metadata } from 'next';
import { GLOSSARY, GlossaryEntry } from '@/lib/glossary';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata, itemListJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'glossary',
    title: 'Remote work glossary',
    description: `${GLOSSARY.length} terms every remote tech worker should know: RTO, EOR, async, DNV, OKR, RSU, geo-arbitrage and more.`,
  });
}

const CATEGORY_LABELS: Record<string, string> = {
  work: 'Work patterns',
  comp: 'Compensation',
  legal: 'Legal & visas',
  culture: 'Culture',
  tech: 'Tech',
};

export default function GlossaryIndex({ params }: { params: { lang: Locale } }) {
  const grouped = GLOSSARY.reduce(
    (acc, g) => {
      (acc[g.category] ??= []).push(g);
      return acc;
    },
    {} as Record<string, GlossaryEntry[]>,
  );
  const itemList = itemListJsonLd(
    GLOSSARY.map((g) => ({ name: g.term, url: absoluteUrl(`/${params.lang}/glossary#${g.slug}`) })),
  );
  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <header className="border-b border-line pb-6">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">Glossary</p>
        <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1">
          Remote work glossary
        </h1>
        <p className="text-graphite text-base mt-3 max-w-prose">
          {GLOSSARY.length} terms every remote tech worker should know, organised by category.
          Short definitions for the quick lookup, longer explanations for the parts that actually
          differ from in-office work.
        </p>
      </header>

      {Object.entries(grouped).map(([cat, items]) => (
        <section key={cat}>
          <h2 className="font-display text-xl font-normal tracking-tighter text-ink mb-4">
            {CATEGORY_LABELS[cat] ?? cat}
          </h2>
          <dl className="grid sm:grid-cols-2 gap-4">
            {items.map((g) => (
              <div key={g.slug} id={g.slug} className="rounded-xl border border-line bg-paper p-5 shadow-soft scroll-mt-20">
                <dt className="font-semibold text-ink">{g.term}</dt>
                <dd className="text-sm text-graphite mt-1.5 leading-relaxed">{g.short}</dd>
                <dd className="text-xs text-muted mt-2.5 leading-relaxed">{g.long}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}

      <section className="text-sm text-muted">
        <p>
          Missing a term?{' '}
          <Link href={`/${params.lang}/contact`} className="text-forest hover:underline">
            Email us
          </Link>{' '}
          and we add it.
        </p>
      </section>
    </div>
  );
}
