import type { Metadata } from 'next';
import Link from 'next/link';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

type Copy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  h2What: string;
  bodyWhat: string;
  h2Sources: string;
  bodySourcesIntro: string;
  sources: string[];
  h2Updates: string;
  bodyUpdates: string;
  h2Salaries: string;
  bodySalaries: string;
  h2Applying: string;
  bodyApplying: string;
  h2Contact: string;
  bodyContactPre: string;
  bodyContactLink: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    metaTitle: 'About slateremote.com: sources and method',
    metaDescription: 'How slateremote.com builds its remote job index: the ten public APIs it pulls from, the daily refresh at 04:00 UTC, and how salary bands are computed.',
    h1: 'About slateremote.com',
    subtitle: 'A curated index of remote tech jobs, aggregated from public job board APIs.',
    h2What: 'What this is',
    bodyWhat: 'slateremote.com is an aggregator of remote engineering, data, design, and product job postings. Every listing in our index is pulled from a public, documented job board API. We do not scrape websites without permission, do not republish proprietary content, and do not modify employer copy.',
    h2Sources: 'Sources',
    bodySourcesIntro: 'The index is built from ten sources:',
    sources: [
      'Remotive · public API',
      'Remote OK · public API',
      'Arbeitnow · public API',
      'We Work Remotely · public RSS feeds',
      'Himalayas · public API',
      'Jobicy · public API',
      'The Muse · public API',
      'Hacker News "Who is hiring" · public Algolia API',
      'Working Nomads · public API',
      'Jobspresso · public RSS feeds',
    ],
    h2Updates: 'How often it updates',
    bodyUpdates: 'A scheduled job runs once a day at 04:00 UTC. It pulls fresh listings from all ten sources, deduplicates them, removes spam and expired entries, and commits the result. A new build deploys automatically after each commit.',
    h2Salaries: 'Salary numbers',
    bodySalaries: 'Salary pages compute median, average and percentile bands live from the postings that publish a salary range. Currency conversion is not applied; each currency is reported in isolation. Pages with too few data points display the global benchmark instead.',
    h2Applying: 'Applying',
    bodyApplying: "Every job links directly to the employer's application page. We do not collect applications. We do not intermediate communication between candidates and employers.",
    h2Contact: 'Contact',
    bodyContactPre: 'For corrections, takedown requests, or general questions, see the',
    bodyContactLink: 'contact page',
  },
  fr: {
    metaTitle: 'À propos de slateremote.com : sources et méthode',
    metaDescription: "Comment slateremote.com construit son index d'offres remote : les dix APIs publiques, la mise à jour quotidienne à 04:00 UTC et le calcul des salaires.",
    h1: 'À propos de slateremote.com',
    subtitle: 'Un index curé des offres tech remote, agrégé depuis les APIs publiques des job boards.',
    h2What: 'De quoi il s\'agit',
    bodyWhat: "slateremote.com agrège des offres remote en ingénierie, data, design et produit. Chaque annonce de notre index provient d'une API publique et documentée. Nous ne scrapons pas de sites sans permission, nous ne republions pas de contenu propriétaire, et nous ne modifions pas le texte des employeurs.",
    h2Sources: 'Sources',
    bodySourcesIntro: "L'index est construit à partir de dix sources :",
    sources: [
      'Remotive · API publique',
      'Remote OK · API publique',
      'Arbeitnow · API publique',
      'We Work Remotely · flux RSS publics',
      'Himalayas · API publique',
      'Jobicy · API publique',
      'The Muse · API publique',
      'Hacker News "Who is hiring" · API Algolia publique',
      'Working Nomads · API publique',
      'Jobspresso · flux RSS publics',
    ],
    h2Updates: 'Fréquence de mise à jour',
    bodyUpdates: "Un job planifié tourne une fois par jour à 04:00 UTC. Il récupère les annonces fraîches des dix sources, les déduplique, supprime spam et entrées expirées, et commit le résultat. Un nouveau build se déploie automatiquement après chaque commit.",
    h2Salaries: 'Données salariales',
    bodySalaries: "Les pages salaires calculent médiane, moyenne et percentiles en direct depuis les annonces qui publient une fourchette. Aucune conversion de devise n'est appliquée ; chaque devise est rapportée isolément. Les pages avec trop peu de points affichent le benchmark global à la place.",
    h2Applying: 'Postuler',
    bodyApplying: "Chaque offre renvoie directement vers la page de candidature de l'employeur. Nous ne collectons pas les candidatures et n'intermédions pas la communication entre candidats et employeurs.",
    h2Contact: 'Contact',
    bodyContactPre: 'Pour corrections, demandes de retrait ou questions générales, voyez la',
    bodyContactLink: 'page contact',
  },
  de: {
    metaTitle: 'Über slateremote.com: Quellen und Methode',
    metaDescription: 'Wie slateremote.com seinen Remote-Job-Index baut: die zehn öffentlichen APIs, das tägliche Update um 04:00 UTC und die Berechnung der Gehaltsbänder.',
    h1: 'Über slateremote.com',
    subtitle: 'Ein kuratierter Index für Remote-Tech-Jobs, aggregiert aus öffentlichen Job-Board-APIs.',
    h2What: 'Was das ist',
    bodyWhat: 'slateremote.com aggregiert Remote-Stellen in Engineering, Data, Design und Product. Jedes Listing in unserem Index stammt aus einer öffentlichen, dokumentierten Job-Board-API. Wir scrapen keine Websites ohne Erlaubnis, veröffentlichen keinen proprietären Content erneut und ändern keinen Arbeitgeber-Text.',
    h2Sources: 'Quellen',
    bodySourcesIntro: 'Der Index wird aus zehn Quellen gebaut:',
    sources: [
      'Remotive · öffentliche API',
      'Remote OK · öffentliche API',
      'Arbeitnow · öffentliche API',
      'We Work Remotely · öffentliche RSS-Feeds',
      'Himalayas · öffentliche API',
      'Jobicy · öffentliche API',
      'The Muse · öffentliche API',
      'Hacker News "Who is hiring" · öffentliche Algolia API',
      'Working Nomads · öffentliche API',
      'Jobspresso · öffentliche RSS-Feeds',
    ],
    h2Updates: 'Wie oft aktualisiert wird',
    bodyUpdates: 'Ein geplanter Job läuft einmal täglich um 04:00 UTC. Er holt frische Listings aus allen zehn Quellen, dedupliziert, entfernt Spam und abgelaufene Einträge und committet das Ergebnis. Ein neuer Build wird nach jedem Commit automatisch deployed.',
    h2Salaries: 'Gehaltszahlen',
    bodySalaries: 'Gehaltsseiten berechnen Median, Durchschnitt und Perzentile live aus den Inseraten, die eine Gehaltsspanne veröffentlichen. Es wird keine Währungsumrechnung angewandt; jede Währung wird isoliert berichtet. Seiten mit zu wenig Datenpunkten zeigen stattdessen den globalen Benchmark.',
    h2Applying: 'Bewerben',
    bodyApplying: 'Jeder Job verlinkt direkt auf die Bewerbungsseite des Arbeitgebers. Wir sammeln keine Bewerbungen und vermitteln keine Kommunikation zwischen Kandidaten und Arbeitgebern.',
    h2Contact: 'Kontakt',
    bodyContactPre: 'Für Korrekturen, Löschanfragen oder allgemeine Fragen siehe die',
    bodyContactLink: 'Kontaktseite',
  },
};

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = COPY[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'about',
    title: c.metaTitle,
    description: c.metaDescription,
  });
}

export default function AboutPage({ params }: { params: { lang: Locale } }) {
  const c = COPY[params.lang];
  return (
    <article className="max-w-prose mx-auto space-y-6">
      <header className="border-b border-line pb-4">
        <h1 className="text-2xl md:text-3xl font-semibold">{c.h1}</h1>
        <p className="text-muted text-sm mt-2">{c.subtitle}</p>
      </header>

      <section className="prose-body text-[0.95rem] leading-relaxed space-y-4">
        <h2 className="text-lg font-semibold">{c.h2What}</h2>
        <p>{c.bodyWhat}</p>

        <h2 className="text-lg font-semibold">{c.h2Sources}</h2>
        <p>{c.bodySourcesIntro}</p>
        <ul>
          {c.sources.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold">{c.h2Updates}</h2>
        <p>{c.bodyUpdates}</p>

        <h2 className="text-lg font-semibold">{c.h2Salaries}</h2>
        <p>{c.bodySalaries}</p>

        <h2 className="text-lg font-semibold">{c.h2Applying}</h2>
        <p>{c.bodyApplying}</p>

        <h2 className="text-lg font-semibold">{c.h2Contact}</h2>
        <p>
          {c.bodyContactPre}{' '}
          <Link href={`/${params.lang}/contact`} className="text-forest hover:underline">
            {c.bodyContactLink}
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
