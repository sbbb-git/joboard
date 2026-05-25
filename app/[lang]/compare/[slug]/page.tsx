import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { COMPARISONS, COMPARISON_MAP } from '@/lib/comparisons';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => COMPARISONS.map((c) => ({ lang, slug: c.slug })));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; slug: string };
}): Metadata {
  const c = COMPARISON_MAP[params.slug];
  if (!c) return { title: 'Comparison not found' };
  return buildMetadata({
    locale: params.lang,
    path: `compare/${params.slug}`,
    title: c.title,
    description: c.description,
  });
}

export default function ComparisonPage({ params }: { params: { lang: Locale; slug: string } }) {
  const c = COMPARISON_MAP[params.slug];
  if (!c) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', url: absoluteUrl(`/${params.lang}`) },
    { name: 'Compare', url: absoluteUrl(`/${params.lang}/compare`) },
    { name: c.title, url: absoluteUrl(`/${params.lang}/compare/${c.slug}`) },
  ]);

  const others = COMPARISONS.filter((x) => x.slug !== c.slug).slice(0, 6);

  return (
    <article className="max-w-prose mx-auto space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <header className="border-b border-line pb-4">
        <h1 className="text-2xl md:text-3xl font-semibold">{c.title}</h1>
        <p className="text-muted text-sm mt-2">{c.description}</p>
      </header>
      <div className="grid grid-cols-2 gap-3">
        <div className="border border-line rounded p-3 bg-accentSoft">
          <p className="text-xs uppercase tracking-wider text-accent">Option A</p>
          <p className="text-sm font-medium mt-1">{c.leftLabel}</p>
        </div>
        <div className="border border-line rounded p-3 bg-cream">
          <p className="text-xs uppercase tracking-wider text-muted">Option B</p>
          <p className="text-sm font-medium mt-1">{c.rightLabel}</p>
        </div>
      </div>
      <div className="prose-body whitespace-pre-line text-[0.95rem] leading-relaxed">{c.body}</div>

      <section className="border-t border-line pt-6">
        <h2 className="text-lg font-semibold mb-3">More comparisons</h2>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/${params.lang}/compare/${o.slug}`}
                className="block border border-line rounded p-3 hover:border-ink"
              >
                {o.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
