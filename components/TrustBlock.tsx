import { LOCALES, type Locale } from '@/lib/types';

// Only claims that can be checked against the code or the build.
//
// This block used to show advertisers "85,000 unique visitors per month",
// "56,000 page views per week" and "1,200 to 2,400 views per featured listing".
// Those came from Cloudflare zone analytics, which counts every request
// including crawlers and bots, not people, while Search Console showed about
// 15 impressions a day. Presenting bot traffic as audience to someone paying
// for a listing is misleading, so the traffic figures are gone. Put numbers
// back only from a source that counts humans (the GA4 property), and only the
// real ones.
const LOCALES_COUNT = LOCALES.length;
const SISTER_SITES_COUNT = 3;

type Copy = {
  eyebrow: string;
  title: string;
  pages: (langs: number) => string;
  network: (n: number) => string;
  audience: string;
  fresh: string;
  featuredNote: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    eyebrow: 'Why post here',
    title: 'Where your listing will be seen',
    pages: (langs) =>
      `Each listing gets its own static page with JobPosting structured data, eligible for Google Jobs, in ${langs} languages.`,
    network: (n) =>
      `Part of a ${n}-site remote-work network (slateremote.com, slowmadly.com, ai-by-job.com) with cross-linking on relevant pages.`,
    audience: 'Every listing is fully remote, across engineering, data, design and product roles.',
    fresh: 'Index refreshed weekly, sitemap submitted to Google and Bing, hreflang across English, French and German.',
    featuredNote:
      'Featured listings appear on the homepage, the role page, and all three language editions. Sponsored top slots add the homepage hero in all three.',
  },
  fr: {
    eyebrow: 'Pourquoi publier ici',
    title: 'Où votre offre sera vue',
    pages: (langs) =>
      `Chaque offre a sa propre page statique avec des données structurées JobPosting, éligible à Google Jobs, en ${langs} langues.`,
    network: (n) =>
      `Partie d'un réseau de ${n} sites remote-work (slateremote.com, slowmadly.com, ai-by-job.com) avec maillage croisé sur les pages pertinentes.`,
    audience: 'Toutes les offres sont en full remote, en ingénierie, data, design et produit.',
    fresh: "Index actualisé chaque semaine, sitemap soumis à Google et Bing, hreflang en anglais, français et allemand.",
    featuredNote:
      "Les annonces Featured apparaissent sur la home, la page du rôle et les trois éditions linguistiques. Les slots Sponsored top ajoutent le hero de la home dans les trois.",
  },
  de: {
    eyebrow: 'Warum hier posten',
    title: 'Wo deine Stelle gesehen wird',
    pages: (langs) =>
      `Jede Stelle erhält eine eigene statische Seite mit JobPosting-Strukturdaten, geeignet für Google Jobs, in ${langs} Sprachen.`,
    network: (n) =>
      `Teil eines ${n}-Site-Remote-Work-Netzwerks (slateremote.com, slowmadly.com, ai-by-job.com) mit Cross-Linking auf relevanten Seiten.`,
    audience: 'Alle Stellen sind vollständig remote, in Engineering, Data, Design und Product.',
    fresh: 'Index wöchentlich aktualisiert, Sitemap an Google und Bing übermittelt, hreflang auf Englisch, Französisch und Deutsch.',
    featuredNote:
      'Featured-Stellen erscheinen auf der Homepage, der Rollen-Seite und allen drei Sprachausgaben. Sponsored-Top-Slots erweitern um den Homepage-Hero in allen drei.',
  },
};

export function TrustBlock({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <section className="rounded-2xl border border-line bg-paper shadow-soft p-6 sm:p-8">
      <p className="text-[10px] uppercase tracking-wider text-forest font-bold">{c.eyebrow}</p>
      <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink mt-2">
        {c.title}
      </h2>
      <ul className="mt-5 space-y-2.5 text-sm text-graphite">
        <li className="flex items-start gap-2">
          <Check />
          <span>{c.pages(LOCALES_COUNT)}</span>
        </li>
        <li className="flex items-start gap-2">
          <Check />
          <span>{c.network(SISTER_SITES_COUNT)}</span>
        </li>
        <li className="flex items-start gap-2">
          <Check />
          <span>{c.audience}</span>
        </li>
        <li className="flex items-start gap-2">
          <Check />
          <span>{c.fresh}</span>
        </li>
      </ul>
      <div className="mt-6 pt-5 border-t border-line">
        <p className="text-xs text-muted leading-relaxed">{c.featuredNote}</p>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="14"
      height="14"
      className="text-forest mt-1 flex-shrink-0"
      aria-hidden="true"
    >
      <path
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4L9 11.6l6.3-6.3a1 1 0 0 1 1.4 0z"
        fill="currentColor"
      />
    </svg>
  );
}
