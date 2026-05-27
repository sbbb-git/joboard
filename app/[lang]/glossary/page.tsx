import Link from 'next/link';
import type { Metadata } from 'next';
import { GLOSSARY, GlossaryEntry } from '@/lib/glossary';
import { LOCALES, localePath } from '@/lib/i18n';
import { buildMetadata, itemListJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { GLOSSARY_I18N } from '@/lib/page-i18n';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = GLOSSARY_I18N[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'glossary',
    title: c.metaTitle,
    description: c.metaDescription(GLOSSARY.length),
  });
}

export default function GlossaryIndex({ params }: { params: { lang: Locale } }) {
  const c = GLOSSARY_I18N[params.lang];
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
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1">
          {c.h1}
        </h1>
        <p className="text-graphite text-base mt-3 max-w-prose">{c.intro(GLOSSARY.length)}</p>
      </header>

      {Object.entries(grouped).map(([cat, items]) => (
        <section key={cat}>
          <h2 className="font-display text-xl font-normal tracking-tighter text-ink mb-4">
            {c.categories[cat] ?? cat}
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
          {c.missingPre}{' '}
          <Link href={localePath(params.lang, 'contact')} className="text-forest hover:underline">
            {c.missingLink}
          </Link>{' '}
          {c.missingPost}
        </p>
      </section>
    </div>
  );
}
