import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { GUIDES, GUIDE_MAP } from '@/lib/guides';
import { tGuide } from '@/lib/guides-i18n';
import { tGuideBody, tGuideFaqs } from '@/lib/guides-body-i18n';
import { NomadBanking } from '@/components/NomadBanking';
import { NomadEssentials } from '@/components/NomadEssentials';
import { NomadCTA } from '@/components/NomadCTA';
import { AiToolsCTA } from '@/components/AiToolsCTA';
import { RemoteTools } from '@/components/RemoteTools';
import { EarnWithAi } from '@/components/EarnWithAi';
import { FiverrCTA } from '@/components/FiverrCTA';
import { Breadcrumb } from '@/components/Breadcrumb';
import { localePath } from '@/lib/i18n';

const AI_KEYWORDS = /\b(ai|ml|machine learning|llm|prompt|data scientist|ml engineer)\b/i;

const GUIDE_LABELS: Record<Locale, { faq: string; related: string }> = {
  en: { faq: 'Frequently asked questions', related: 'Related guides' },
  fr: { faq: 'Questions fréquentes', related: 'Guides liés' },
  es: { faq: 'Preguntas frecuentes', related: 'Guías relacionadas' },
  de: { faq: 'Häufige Fragen', related: 'Verwandte Guides' },
  pt: { faq: 'Perguntas frequentes', related: 'Guias relacionados' },
  it: { faq: 'Domande frequenti', related: 'Guide correlate' },
  pl: { faq: 'Często zadawane pytania', related: 'Powiązane poradniki' },
};

export const dynamicParams = false;
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
    title: tGuide(g.slug, params.lang, 'title', g.title),
    description: tGuide(g.slug, params.lang, 'description', g.description),
  });
}

export default function GuidePage({ params }: { params: { lang: Locale; slug: string } }) {
  const g = GUIDE_MAP[params.slug];
  if (!g) notFound();

  const title = tGuide(g.slug, params.lang, 'title', g.title);
  const description = tGuide(g.slug, params.lang, 'description', g.description);
  const body = tGuideBody(g.slug, params.lang, g.body);
  const faqs = tGuideFaqs(g.slug, params.lang, g.faqs);
  const labels = GUIDE_LABELS[params.lang];
  const related = GUIDES.filter((x) => x.category === g.category && x.slug !== g.slug).slice(0, 4);

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', url: absoluteUrl(`/${params.lang}`) },
    { name: 'Guides', url: absoluteUrl(`/${params.lang}/guides`) },
    { name: title, url: absoluteUrl(`/${params.lang}/guides/${g.slug}`) },
  ]);

  const faqJsonLd = faqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
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
      <Breadcrumb
        items={[
          { label: 'Home', href: localePath(params.lang) },
          { label: 'Guides', href: localePath(params.lang, 'guides') },
          { label: title },
        ]}
      />
      <header className="border-b border-line pb-4">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{g.category}</p>
        <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1.5 leading-tight">
          {title}
        </h1>
        <p className="text-graphite text-base mt-3">{description}</p>
      </header>
      <div className="prose-body whitespace-pre-line text-[0.95rem] leading-relaxed">{body}</div>

      {AI_KEYWORDS.test(g.title) && (
        <>
          <AiToolsCTA
            context={{ type: 'guide', label: g.title.replace(/^(How to become a |Best |Remote )/i, '').toLowerCase() }}
            locale={params.lang}
          />
          <EarnWithAi locale={params.lang} />
        </>
      )}
      {g.category === 'freelance' && <FiverrCTA locale={params.lang} />}
      {g.category === 'tools' && <RemoteTools locale={params.lang} />}
      {(g.category === 'lifestyle' || g.category === 'visa' || g.category === 'tax' || g.category === 'finding' || g.category === 'career') && (
        <NomadCTA  locale={params.lang} />
      )}
      {(g.category === 'visa' || g.category === 'tax') && (
        <>
          <NomadEssentials locale={params.lang} />
          <NomadBanking locale={params.lang} />
        </>
      )}
      {g.category === 'lifestyle' && <NomadEssentials locale={params.lang} />}

      {faqs && faqs.length > 0 && (
        <section className="border-t border-line pt-6">
          <h2 className="text-lg font-semibold mb-3">{labels.faq}</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
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
          <h2 className="text-lg font-semibold mb-3">{labels.related}</h2>
          <ul className="space-y-2 text-sm">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/${params.lang}/guides/${r.slug}`}
                  className="text-forest hover:underline"
                >
                  {tGuide(r.slug, params.lang, 'title', r.title)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
