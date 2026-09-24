import Link from 'next/link';
import type { Metadata } from 'next';
import { LOCALES, localePath } from '@/lib/i18n';
import { buildMetadata, organizationJsonLd, websiteJsonLd } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { GUIDES } from '@/lib/guides';
import { tGuide } from '@/lib/guides-i18n';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

// The site now publishes guides only (the job board was retired in 2026-09).
// The homepage stays a short landing rather than a copy of /guides: it
// features the guides that actually draw search impressions (Search Console
// and Bing exports, 2026-09) and sends everything else to the full index.
const FEATURED = [
  'mercor-vs-scale-vs-surge-ai',
  'mercor-application-timeline-2026',
  'niche-fiverr-gigs-that-still-pay-in-2026',
  'safetywing-real-claim-process-2026',
  'mercor-tax-and-payout-guide-2026',
  'wise-borderless-account-explained-2026',
];

type HomeCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  featuredHeading: string;
  allGuides: (n: number) => string;
  glossaryPre: string;
  glossaryLink: string;
};

const COPY: Record<Locale, HomeCopy> = {
  en: {
    metaTitle: 'Remote work guides: getting paid, platforms and tools',
    metaDescription:
      'Practical guides for remote tech workers: earning on Mercor and Fiverr, getting paid across borders with Wise, travel insurance and the tools worth using.',
    eyebrow: 'Guides',
    h1: 'Practical guides for remote tech workers',
    intro:
      'How to earn on talent platforms, get paid across borders, stay insured while travelling and pick the tools that matter. Each guide is written to be acted on, not skimmed.',
    featuredHeading: 'Most read',
    allGuides: (n) => `All ${n} guides →`,
    glossaryPre: 'New to the vocabulary? The',
    glossaryLink: 'remote work glossary',
  },
  fr: {
    metaTitle: 'Guides du travail à distance : paiements, plateformes, outils',
    metaDescription:
      'Guides pratiques pour les travailleurs tech à distance : gagner sur Mercor et Fiverr, se faire payer à l’étranger avec Wise, assurance voyage et outils utiles.',
    eyebrow: 'Guides',
    h1: 'Des guides pratiques pour travailler à distance',
    intro:
      'Gagner sur les plateformes de talents, se faire payer depuis l’étranger, rester assuré en voyage et choisir les bons outils. Chaque guide est écrit pour passer à l’action.',
    featuredHeading: 'Les plus lus',
    allGuides: (n) => `Les ${n} guides →`,
    glossaryPre: 'Besoin du vocabulaire ? Le',
    glossaryLink: 'glossaire du travail à distance',
  },
  de: {
    metaTitle: 'Remote-Work-Guides: Bezahlung, Plattformen und Tools',
    metaDescription:
      'Praktische Guides für Remote-Tech-Worker: Geld verdienen auf Mercor und Fiverr, mit Wise grenzüberschreitend bezahlt werden, Reiseversicherung und nützliche Tools.',
    eyebrow: 'Guides',
    h1: 'Praktische Guides für Remote-Tech-Worker',
    intro:
      'Auf Talent-Plattformen verdienen, grenzüberschreitend bezahlt werden, auf Reisen versichert bleiben und die richtigen Tools wählen. Jeder Guide ist zum Umsetzen geschrieben.',
    featuredHeading: 'Meistgelesen',
    allGuides: (n) => `Alle ${n} Guides →`,
    glossaryPre: 'Neu im Vokabular? Das',
    glossaryLink: 'Remote-Work-Glossar',
  },
};

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = COPY[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: '',
    title: c.metaTitle,
    description: c.metaDescription,
  });
}

export default function Home({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const c = COPY[locale];
  const featured = FEATURED.map((slug) => GUIDES.find((g) => g.slug === slug)).filter(
    (g): g is (typeof GUIDES)[number] => Boolean(g),
  );

  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />

      <header className="border-b border-line pb-8">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="font-display text-4xl md:text-5xl font-normal tracking-tighter text-ink mt-2 leading-tight">
          {c.h1}
        </h1>
        <p className="text-graphite text-base mt-4 max-w-prose">{c.intro}</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-display text-2xl tracking-tighter text-ink">{c.featuredHeading}</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {featured.map((g) => (
            <li key={g.slug}>
              <Link
                href={localePath(locale, `guides/${g.slug}`)}
                className="block h-full rounded-2xl border border-line bg-paper p-5 hover-lift hover:border-ink"
              >
                <h3 className="font-semibold text-ink">{tGuide(g.slug, locale, 'title', g.title)}</h3>
                <p className="text-sm text-graphite mt-2">
                  {tGuide(g.slug, locale, 'description', g.description)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={localePath(locale, 'guides')}
          className="inline-block text-sm text-forest font-semibold hover:underline"
        >
          {c.allGuides(GUIDES.length)}
        </Link>
      </section>

      <p className="text-sm text-muted">
        {c.glossaryPre}{' '}
        <Link href={localePath(locale, 'glossary')} className="text-forest hover:underline">
          {c.glossaryLink}
        </Link>
        .
      </p>
    </div>
  );
}
