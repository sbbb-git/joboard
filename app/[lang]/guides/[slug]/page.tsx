import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { GUIDES, GUIDE_MAP } from '@/lib/guides';

export const dynamicParams = true;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => GUIDES.map((g) => ({ lang, slug: g.slug })));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; slug: string };
}): Metadata {
  const g = GUIDE_MAP[params.slug];
  if (!g) return { title: 'Guide not found' };
  return buildMetadata({
    locale: params.lang,
    path: `guides/${params.slug}`,
    title: g.title,
    description: g.description,
  });
}

export default function GuidePage({ params }: { params: { lang: Locale; slug: string } }) {
  const g = GUIDE_MAP[params.slug];
  if (!g) notFound();

  const related = GUIDES.filter((x) => x.category === g.category && x.slug !== g.slug).slice(0, 4);

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', url: absoluteUrl(`/${params.lang}`) },
    { name: 'Guides', url: absoluteUrl(`/${params.lang}/guides`) },
    { name: g.title, url: absoluteUrl(`/${params.lang}/guides/${g.slug}`) },
  ]);

  const faqJsonLd = g.faqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: g.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.title,
    description: g.description,
    inLanguage: params.lang,
    url: absoluteUrl(`/${params.lang}/guides/${g.slug}`),
    publisher: { '@type': 'Organization', name: 'slateremote.com' },
  };

  return (
    <article className="max-w-prose mx-auto space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <header className="border-b border-line pb-4">
        <p className="text-xs uppercase tracking-wider text-muted">{g.category}</p>
        <h1 className="text-2xl md:text-3xl font-semibold mt-2">{g.title}</h1>
        <p className="text-muted text-sm mt-2">{g.description}</p>
      </header>
      <div className="prose-body whitespace-pre-line text-[0.95rem] leading-relaxed">{g.body}</div>

      {g.faqs && g.faqs.length > 0 && (
        <section className="border-t border-line pt-6">
          <h2 className="text-lg font-semibold mb-3">Frequently asked questions</h2>
          <div className="space-y-4">
            {g.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-medium text-ink">{f.q}</h3>
                <p className="text-sm text-muted mt-1">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="border-t border-line pt-6">
          <h2 className="text-lg font-semibold mb-3">Related guides</h2>
          <ul className="space-y-2 text-sm">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/${params.lang}/guides/${r.slug}`}
                  className="text-accent hover:underline"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
