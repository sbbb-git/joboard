import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import { localePath } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { GUIDES } from '@/lib/guides';
import { tGuide } from '@/lib/guides-i18n';
import { Breadcrumb } from '@/components/Breadcrumb';
import { FiverrCTA } from '@/components/FiverrCTA';
import { AppSumoCTA } from '@/components/AppSumoCTA';
import { BeehiivCTA } from '@/components/BeehiivCTA';

export const dynamicParams = false;
export const revalidate = false;

type Copy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  freelance: { title: string; body: string };
  saasDeals: { title: string; body: string };
  newsletter: { title: string; body: string };
  remoteJobs: { title: string; body: string };
  remoteJobsCta: string;
  closingTitle: string;
  closingBody: string;
  home: string;
  readGuide: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    metaTitle: 'Earn online as a developer: four routes that pay',
    metaDescription:
      'Four ways a developer earns online in 2026: a remote tech job, freelance gigs on Fiverr, lifetime SaaS deals on AppSumo, and a paid tech newsletter.',
    eyebrow: 'Earn online',
    h1: 'Four routes to earn online as a developer',
    intro:
      'Remote-friendly income is more accessible than ever for technical workers. The four routes below cover the realistic options in 2026, ranked from steady cash to compounding upside.',
    remoteJobs: {
      title: 'Land a remote tech job',
      body: 'The most predictable path. We aggregate every active remote tech listing from ten public job board APIs and refresh once a week. Filter by role, country, salary and seniority, all in the browser, no signup.',
    },
    remoteJobsCta: 'Browse remote jobs →',
    freelance: {
      title: 'Sell developer services on Fiverr',
      body: 'Fiverr is the fastest way to start earning independent income with code. List one repeatable service, ship reliably, climb the level system. Read the playbook below.',
    },
    saasDeals: {
      title: 'Cut SaaS spend with AppSumo lifetime deals',
      body: 'Pay once, skip subscriptions forever on the right tools. For bootstrapped founders and solo operators the math compounds quickly. Start with the deals explainer.',
    },
    newsletter: {
      title: 'Build a tech newsletter that pays',
      body: 'Slowest to start, highest long-term ceiling. A focused tech newsletter pairs durable audience growth with several monetization streams. The five-guide cluster covers platform choice through scale.',
    },
    closingTitle: 'Pick one, then go deep',
    closingBody:
      'The mistake most operators make is sampling all four at once. Pick the route that fits your time budget and risk tolerance, commit for at least six months, and only add a second route once the first is producing.',
    home: 'Home',
    readGuide: 'Read the guide →',
  },
  fr: {
    metaTitle: 'Gagner en ligne comme développeur : 4 voies qui paient',
    metaDescription:
      "Quatre façons de gagner en ligne en 2026 : un job tech remote, du freelance sur Fiverr, des deals SaaS à vie sur AppSumo et une newsletter payante.",
    eyebrow: 'Gagner en ligne',
    h1: 'Quatre voies pour gagner en ligne quand on est développeur',
    intro:
      "Les revenus remote n'ont jamais été aussi accessibles pour les profils tech. Les quatre voies ci-dessous couvrent les options réalistes en 2026, du cash régulier au upside qui compose dans le temps.",
    remoteJobs: {
      title: 'Décrocher un job tech remote',
      body: "La voie la plus prévisible. Nous agrégeons chaque offre tech remote active depuis les API publiques de dix job boards, mise à jour chaque semaine. Filtrez par rôle, pays, salaire et niveau, dans le navigateur, sans inscription.",
    },
    remoteJobsCta: 'Parcourir les offres remote →',
    freelance: {
      title: 'Vendre vos services dev sur Fiverr',
      body: "Fiverr est le moyen le plus rapide de commencer à gagner un revenu indépendant avec du code. Lancez une offre répétable, livrez avec fiabilité, montez les niveaux. Le playbook ci-dessous détaille la mécanique.",
    },
    saasDeals: {
      title: 'Réduire les coûts SaaS avec les deals à vie AppSumo',
      body: "Payez une fois, évitez l'abonnement à vie sur les bons outils. Pour les founders bootstrap et les opérateurs solo le calcul est vite rentable. Démarrez par le guide qui explique le mécanisme.",
    },
    newsletter: {
      title: 'Lancer une newsletter tech qui paie',
      body: "La voie la plus lente au démarrage, le plus haut plafond à long terme. Une newsletter tech ciblée combine audience durable et plusieurs leviers de monétisation. Le cluster de cinq guides couvre du choix de plateforme à la scale.",
    },
    closingTitle: "Choisissez-en une, et allez en profondeur",
    closingBody:
      "L'erreur classique est de goûter aux quatre voies en même temps. Choisissez celle qui colle à votre temps disponible et à votre tolérance au risque, engagez-vous au moins six mois, et n'ajoutez la deuxième que quand la première produit.",
    home: 'Accueil',
    readGuide: 'Lire le guide →',
  },
  de: {
    metaTitle: 'Online verdienen als Entwickler: 4 Wege, die zahlen',
    metaDescription:
      'Vier Wege, 2026 online zu verdienen: ein Remote-Tech-Job, Freelance auf Fiverr, Lifetime-SaaS-Deals auf AppSumo und ein bezahlter Tech-Newsletter.',
    eyebrow: 'Online verdienen',
    h1: 'Vier Wege, um als Entwickler online zu verdienen',
    intro:
      'Remote-Einkommen war für Tech-Profile nie zugänglicher. Die vier Wege unten decken die realistischen Optionen 2026 ab, vom stetigen Cashflow bis zum kompoundierenden Upside.',
    remoteJobs: {
      title: 'Einen Remote-Tech-Job finden',
      body: 'Der berechenbarste Weg. Wir aggregieren jede aktive Remote-Tech-Stelle aus den öffentlichen APIs von zehn Job Boards und aktualisieren wöchentlich. Filtere nach Rolle, Land, Gehalt und Senioritätsstufe, alles im Browser, ohne Anmeldung.',
    },
    remoteJobsCta: 'Remote-Jobs durchstöbern →',
    freelance: {
      title: 'Entwickler-Services auf Fiverr verkaufen',
      body: 'Fiverr ist der schnellste Weg, unabhängiges Einkommen mit Code zu starten. Liste einen wiederholbaren Service, liefere zuverlässig, klettere im Level-System. Das Playbook unten erklärt es im Detail.',
    },
    saasDeals: {
      title: 'SaaS-Ausgaben mit AppSumo-Lifetime-Deals senken',
      body: 'Einmal zahlen, Abos für immer sparen, auf den richtigen Tools. Für Bootstrap-Gründer und Solo-Operatoren rechnet sich das schnell. Starte mit dem Erklär-Guide.',
    },
    newsletter: {
      title: 'Einen Tech-Newsletter aufbauen, der zahlt',
      body: 'Am langsamsten beim Start, mit der höchsten Langfrist-Decke. Ein fokussierter Tech-Newsletter verbindet nachhaltiges Audience-Wachstum mit mehreren Monetisierungs-Strömen. Das Fünf-Guide-Cluster deckt Plattformwahl bis Skalierung ab.',
    },
    closingTitle: 'Wähle einen und geh in die Tiefe',
    closingBody:
      'Der häufigste Fehler: alle vier gleichzeitig probieren. Wähle den Weg, der zu deiner Zeit und Risikotoleranz passt, halte sechs Monate durch und füge den zweiten erst hinzu, wenn der erste liefert.',
    home: 'Startseite',
    readGuide: 'Guide lesen →',
  },
};

// Cross-link sets per cluster
const FIVERR_HUB_SLUGS = [
  'how-to-start-on-fiverr-as-a-developer',
  'best-fiverr-gigs-for-programmers',
  'fiverr-pricing-strategy-for-developers',
  'sell-ai-services-on-fiverr-2026',
];
const APPSUMO_HUB_SLUGS = [
  'appsumo-lifetime-deals-explained',
  'appsumo-best-deals-for-developers-2026',
  'building-a-startup-stack-with-appsumo',
  'how-to-spot-quality-appsumo-deals',
];
const NEWSLETTER_HUB_SLUGS = [
  'how-to-start-a-tech-newsletter-2026',
  'how-to-monetize-a-tech-newsletter',
  'best-newsletter-platforms-for-developers',
  'tech-newsletter-growth-tactics-2026',
];

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = COPY[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'earn-online',
    title: c.metaTitle,
    description: c.metaDescription,
  });
}

export default function EarnOnlinePage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const c = COPY[locale];

  const fiverrLinks = FIVERR_HUB_SLUGS.map((s) => GUIDES.find((g) => g.slug === s)!).filter(Boolean);
  const appsumoLinks = APPSUMO_HUB_SLUGS.map((s) => GUIDES.find((g) => g.slug === s)!).filter(Boolean);
  const newsletterLinks = NEWSLETTER_HUB_SLUGS.map((s) => GUIDES.find((g) => g.slug === s)!).filter(Boolean);

  const crumbItems = [
    { label: c.home, href: localePath(locale) },
    { label: c.eyebrow },
  ];
  const crumbJsonLd = breadcrumbJsonLd([
    { name: c.home, url: absoluteUrl(`/${locale}`) },
    { name: c.eyebrow, url: absoluteUrl(`/${locale}/earn-online`) },
  ]);

  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbJsonLd) }}
      />
      <Breadcrumb items={crumbItems} />

      <header className="border-b border-line pb-6">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tighter text-ink mt-2">
          {c.h1}
        </h1>
        <p className="text-graphite text-base mt-4 max-w-prose">{c.intro}</p>
      </header>

      {/* Route 1: Remote jobs */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">
          {c.remoteJobs.title}
        </h2>
        <p className="text-graphite max-w-prose">{c.remoteJobs.body}</p>
        <Link
          href={localePath(locale, 'jobs')}
          className="inline-flex items-center px-5 py-2.5 bg-ink text-bg rounded-full text-sm font-semibold hover:bg-forest transition-colors"
        >
          {c.remoteJobsCta}
        </Link>
      </section>

      {/* Route 2: Fiverr freelance */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">
          {c.freelance.title}
        </h2>
        <p className="text-graphite max-w-prose">{c.freelance.body}</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {fiverrLinks.map((g) => (
            <li key={g.slug}>
              <Link
                href={localePath(locale, `guides/${g.slug}`)}
                className="block rounded-2xl border border-line bg-paper p-4 hover:border-ink hover-lift transition-all"
              >
                <p className="font-semibold text-ink text-sm leading-snug">
                  {tGuide(g.slug, locale, 'title', g.title)}
                </p>
                <p className="text-xs text-forest mt-1.5">{c.readGuide}</p>
              </Link>
            </li>
          ))}
        </ul>
        <FiverrCTA locale={locale} />
      </section>

      {/* Route 3: AppSumo deals */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">
          {c.saasDeals.title}
        </h2>
        <p className="text-graphite max-w-prose">{c.saasDeals.body}</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {appsumoLinks.map((g) => (
            <li key={g.slug}>
              <Link
                href={localePath(locale, `guides/${g.slug}`)}
                className="block rounded-2xl border border-line bg-paper p-4 hover:border-ink hover-lift transition-all"
              >
                <p className="font-semibold text-ink text-sm leading-snug">
                  {tGuide(g.slug, locale, 'title', g.title)}
                </p>
                <p className="text-xs text-amber mt-1.5">{c.readGuide}</p>
              </Link>
            </li>
          ))}
        </ul>
        <AppSumoCTA locale={locale} />
      </section>

      {/* Route 4: Newsletter */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">
          {c.newsletter.title}
        </h2>
        <p className="text-graphite max-w-prose">{c.newsletter.body}</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {newsletterLinks.map((g) => (
            <li key={g.slug}>
              <Link
                href={localePath(locale, `guides/${g.slug}`)}
                className="block rounded-2xl border border-line bg-paper p-4 hover:border-ink hover-lift transition-all"
              >
                <p className="font-semibold text-ink text-sm leading-snug">
                  {tGuide(g.slug, locale, 'title', g.title)}
                </p>
                <p className="text-xs text-terracotta mt-1.5">{c.readGuide}</p>
              </Link>
            </li>
          ))}
        </ul>
        <BeehiivCTA locale={locale} />
      </section>

      {/* Closing */}
      <section className="border-t border-line pt-8 max-w-prose">
        <h2 className="font-display text-2xl font-normal tracking-tighter text-ink">
          {c.closingTitle}
        </h2>
        <p className="text-graphite mt-3">{c.closingBody}</p>
      </section>
    </div>
  );
}
