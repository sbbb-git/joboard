import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { GUIDES, GUIDE_MAP } from '@/lib/guides';
import { tGuide } from '@/lib/guides-i18n';
import { tGuideBody, tGuideFaqs, hasGuideTranslation } from '@/lib/guides-body-i18n';
import { NomadBanking } from '@/components/NomadBanking';
import { NomadEssentials } from '@/components/NomadEssentials';
import { NomadCTA } from '@/components/NomadCTA';
import { AiToolsCTA } from '@/components/AiToolsCTA';
import { RemoteTools } from '@/components/RemoteTools';
import { EarnWithAi } from '@/components/EarnWithAi';
import { FiverrCTA } from '@/components/FiverrCTA';
import { AppSumoCTA } from '@/components/AppSumoCTA';
import { BeehiivCTA } from '@/components/BeehiivCTA';
import { MercorCTA } from '@/components/MercorCTA';
import { WiseCTA } from '@/components/WiseCTA';
import { SafetyWingCTA } from '@/components/SafetyWingCTA';
import { NordVPNCTA } from '@/components/NordVPNCTA';

const APPSUMO_SLUGS = new Set([
  'appsumo-lifetime-deals-explained',
  'appsumo-best-deals-for-developers-2026',
  'appsumo-vs-saas-subscription-which-saves-more',
  'how-to-spot-quality-appsumo-deals',
  'appsumo-deals-for-remote-workers',
  'building-a-startup-stack-with-appsumo',
  'selling-on-appsumo-as-a-founder',
]);

const BEEHIIV_SLUGS = new Set([
  'how-to-start-a-tech-newsletter-2026',
  'how-to-monetize-a-tech-newsletter',
  'best-newsletter-platforms-for-developers',
  'tech-newsletter-growth-tactics-2026',
  'newsletter-vs-blog-which-earns-more',
  'saas-stack-for-newsletter-operators-2026',
  'how-i-built-a-tech-newsletter-side-income',
  'beehiiv-vs-substack-monetisation-2026',
  'tech-newsletter-niche-selection-2026',
  'how-to-cross-promote-newsletter-with-tech-blog',
  'passive-income-stack-for-remote-developers-2026',
]);

const WISE_SLUGS = new Set([
  'multi-currency-banking-for-freelance-developers',
  'how-to-invoice-international-clients-as-a-developer',
  'multi-currency-invoicing-for-remote-developers',
  'wise-borderless-account-explained-2026',
  'wise-vs-payoneer-for-developers',
  'wise-debit-card-spending-tips',
  'wise-vs-revolut-business-comparison-2026',
  'how-to-receive-stripe-payouts-as-non-us',
]);

const MERCOR_SLUGS = new Set([
  'how-to-get-accepted-on-mercor',
  'how-much-does-mercor-pay-in-2026',
  'mercor-vs-scale-vs-surge-ai',
  'maximize-earnings-on-mercor-as-a-developer',
  'mercor-screening-test-prep',
  'mercor-tax-and-payout-guide-2026',
  'best-paid-domains-on-mercor-2026',
  'mercor-side-hustle-while-working-full-time',
  'mercor-domain-application-strategy',
  'mercor-application-timeline-2026',
  'mercor-evaluator-quality-rubrics-explained',
  'mercor-vs-tortoise-eval-platforms',
]);
import { Breadcrumb } from '@/components/Breadcrumb';
import { GuideBody } from '@/components/GuideBody';
import { localePath } from '@/lib/i18n';
import { GUIDE_PUBLISHED } from '@/lib/guide-dates';
import { GUIDES_I18N } from '@/lib/page-i18n';

const AI_KEYWORDS = /\b(ai|ml|machine learning|llm|prompt|data scientist|ml engineer)\b/i;

const GUIDE_LABELS: Record<
  Locale,
  { faq: string; related: string; home: string; guides: string; published: string; dateLocale: string }
> = {
  en: { faq: 'Frequently asked questions', related: 'Related guides', home: 'Home', guides: 'Guides', published: 'Published', dateLocale: 'en-GB' },
  fr: { faq: 'Questions fréquentes', related: 'Guides liés', home: 'Accueil', guides: 'Guides', published: 'Publié le', dateLocale: 'fr-FR' },
  de: { faq: 'Häufige Fragen', related: 'Verwandte Guides', home: 'Startseite', guides: 'Guides', published: 'Veröffentlicht am', dateLocale: 'de-DE' },
};

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => GUIDES.map((g) => ({ lang, slug: g.slug })));
}

const CAT_CONTEXT: Record<string, string> = {
  finding: 'remote job search tactics, resume tips and application strategies for tech roles',
  salary: 'salary benchmarks, equity, and negotiation strategies for remote engineering roles',
  career: 'career paths, required skills, and roadmaps for remote tech professionals',
  visa: 'visa options, eligibility requirements, and relocation guides for remote workers',
  tax: 'tax planning, deductions, and cross-border considerations for remote tech workers',
  lifestyle: 'productivity, async workflows, and lifestyle design for distributed teams',
  tools: 'tools, software, and home-office setups for remote engineering teams',
  freelance: 'freelancing strategies, platforms, pricing, and client-finding for tech professionals',
};

function guideMetaDesc(base: string, category: string): string {
  if (base.length >= 130) return base;
  const ctx = CAT_CONTEXT[category] ?? 'strategies and advice for remote tech workers in 2026';
  const suffix = ` Covers ${ctx}.`;
  return (base + suffix).slice(0, 160);
}

// Related guides: same topic first (Mercor, Fiverr, Wise...), then same
// category, then anything else, so every guide links to four others. The old
// rule took the first four of the category, which sent all 21 freelance
// guides (Mercor ones included) to the same four Fiverr guides and left the
// three guides that are alone in their category with no related links at all.
// Topic families, matched on slug words. Grouping matters: a lone keyword
// left the Stripe, tax-residency and interview guides related to nothing.
const TOPICS: Record<string, string[]> = {
  mercor: ['mercor'],
  fiverr: ['fiverr'],
  money: ['wise', 'stripe', 'payoneer', 'payout', 'tax', 'revolut'],
  travel: ['safetywing', 'visa', 'countries', 'nomad'],
  career: ['salary', 'interview', 'engineer'],
  tools: ['appsumo', 'claude', 'laptop', 'saas'],
};
const topicOf = (slug: string) =>
  Object.keys(TOPICS).filter((t) => TOPICS[t].some((w) => slug.includes(w)));
function relatedGuides(g: (typeof GUIDES)[number], n = 4) {
  const mine = topicOf(g.slug);
  const score = (x: (typeof GUIDES)[number]) =>
    (topicOf(x.slug).some((t) => mine.includes(t)) ? 2 : 0) + (x.category === g.category ? 1 : 0);
  // Ties go to the nearest guides in list order, wrapping around, so links
  // spread across the topic instead of piling onto its first four entries.
  const me = GUIDES.findIndex((x) => x.slug === g.slug);
  const dist = (i: number) => (i - me + GUIDES.length) % GUIDES.length;
  return GUIDES.map((x, i) => ({ x, s: score(x), d: dist(i) }))
    .filter(({ x }) => x.slug !== g.slug)
    .sort((a, b) => b.s - a.s || a.d - b.d)
    .slice(0, n)
    .map(({ x }) => x);
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; slug: string };
}): Metadata {
  const g = GUIDE_MAP[params.slug];
  if (!g) return { title: 'Guide not found' };
  const base = tGuide(g.slug, params.lang, 'description', g.description);
  return buildMetadata({
    locale: params.lang,
    path: `guides/${params.slug}`,
    title: tGuide(g.slug, params.lang, 'title', g.title),
    description: guideMetaDesc(base, g.category),
    index: hasGuideTranslation(g.slug, params.lang),
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
  const related = relatedGuides(g);
  const pageUrl = absoluteUrl(`/${params.lang}/guides/${g.slug}`);
  const published = GUIDE_PUBLISHED[g.slug];
  const categoryLabel = GUIDES_I18N[params.lang].categories[g.category] ?? g.category;

  const breadcrumb = breadcrumbJsonLd([
    { name: labels.home, url: absoluteUrl(`/${params.lang}`) },
    { name: labels.guides, url: absoluteUrl(`/${params.lang}/guides`) },
    { name: title, url: pageUrl },
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
    url: pageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    image: absoluteUrl('/og.png'),
    articleSection: categoryLabel,
    // Content has not been revised since publication, so both dates match.
    ...(published ? { datePublished: published, dateModified: published } : {}),
    // No named human author: the guides are published by the site itself.
    author: { '@type': 'Organization', name: 'slateremote.com', url: absoluteUrl('/') },
    publisher: {
      '@type': 'Organization',
      name: 'slateremote.com',
      url: absoluteUrl('/'),
      logo: { '@type': 'ImageObject', url: absoluteUrl('/icon.svg') },
    },
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
          { label: labels.home, href: localePath(params.lang) },
          { label: labels.guides, href: localePath(params.lang, 'guides') },
          { label: title },
        ]}
      />
      <header className="border-b border-line pb-4">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{categoryLabel}</p>
        <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1.5 leading-tight">
          {title}
        </h1>
        <p className="text-graphite text-base mt-3">{description}</p>
        {published && (
          <p className="text-xs text-muted mt-3">
            {labels.published}{' '}
            <time dateTime={published}>
              {new Date(`${published}T00:00:00Z`).toLocaleDateString(labels.dateLocale, {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                timeZone: 'UTC',
              })}
            </time>
          </p>
        )}
      </header>
      <GuideBody body={body} />

      {AI_KEYWORDS.test(g.title) && (
        <>
          <AiToolsCTA context={{ type: 'guide' }} locale={params.lang} />
          <EarnWithAi locale={params.lang} />
        </>
      )}
      {g.category === 'freelance' && <FiverrCTA locale={params.lang} />}
      {APPSUMO_SLUGS.has(g.slug) && <AppSumoCTA locale={params.lang} />}
      {BEEHIIV_SLUGS.has(g.slug) && <BeehiivCTA locale={params.lang} />}
      {MERCOR_SLUGS.has(g.slug) && <MercorCTA locale={params.lang} />}
      {(g.category === 'tax' || g.category === 'visa' || WISE_SLUGS.has(g.slug)) && <WiseCTA locale={params.lang} />}
      {(g.category === 'visa' || g.category === 'lifestyle') && <SafetyWingCTA locale={params.lang} />}
      {g.category === 'tools' && <NordVPNCTA locale={params.lang} />}
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
