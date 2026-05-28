import Link from 'next/link';
import type { Metadata } from 'next';
import { GUIDES } from '@/lib/guides';
import { tGuide } from '@/lib/guides-i18n';
import { buildMetadata, itemListJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { GUIDES_I18N } from '@/lib/page-i18n';

export const dynamicParams = false;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = GUIDES_I18N[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'guides',
    title: c.metaTitle,
    description: c.metaDescription(GUIDES.length),
  });
}

const CATEGORY_ORDER = ['finding', 'salary', 'career', 'visa', 'tax', 'lifestyle', 'tools'];

export default function GuidesIndex({ params }: { params: { lang: Locale } }) {
  const c = GUIDES_I18N[params.lang];
  const itemList = itemListJsonLd(
    GUIDES.map((g) => ({ name: tGuide(g.slug, params.lang, 'title', g.title), url: absoluteUrl(`/${params.lang}/guides/${g.slug}`) })),
  );
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <header className="border-b border-line pb-6">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1">
          {c.h1}
        </h1>
        <p className="text-graphite text-base mt-3 max-w-prose">{c.intro(GUIDES.length)}</p>
      </header>

      {CATEGORY_ORDER.map((catId) => {
        const items = GUIDES.filter((g) => g.category === catId);
        if (items.length === 0) return null;
        const label = c.categories[catId] ?? catId;
        return (
          <section key={catId}>
            <h2 className="font-display text-xl font-normal tracking-tighter text-ink mb-4">
              {label}
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
                  <h3 className="font-semibold text-ink mt-1.5 leading-snug">{tGuide(g.slug, params.lang, 'title', g.title)}</h3>
                  <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-3">
                    {tGuide(g.slug, params.lang, 'description', g.description)}
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
