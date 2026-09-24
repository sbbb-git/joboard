import { LOCALES, type Locale } from '@/lib/types';

// Honest, verifiable numbers pulled from Cloudflare zone analytics.
// Update the constants below as the index grows; everything else recomputes.
const MONTHLY_UNIQUES = 85_000;
const WEEKLY_PAGEVIEWS = 56_000;
const INDEXED_PAGES = 6_800;
const LOCALES_COUNT = LOCALES.length;
const SISTER_SITES_COUNT = 3;
const FEATURED_30D_VIEWS_LOW = 1_200;
const FEATURED_30D_VIEWS_HIGH = 2_400;

type Copy = {
  eyebrow: string;
  title: string;
  reach: (uniques: number, pv: number) => string;
  pages: (n: number, langs: number) => string;
  network: (n: number) => string;
  audience: string;
  fresh: string;
  featured: (lo: number, hi: number) => string;
  featuredNote: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    eyebrow: 'Why post here',
    title: 'Where your listing will be seen',
    reach: (u, pv) =>
      `${u.toLocaleString('en-US')} unique visitors per month and roughly ${pv.toLocaleString('en-US')} page views per week, growing.`,
    pages: (n, langs) =>
      `${n.toLocaleString('en-US')}+ statically prerendered pages across ${langs} natively translated languages.`,
    network: (n) =>
      `Part of a ${n}-site remote-work network (slateremote.com, slowmadly.com, ai-by-job.com) with cross-linking on relevant pages.`,
    audience: 'Audience filtered for developers, data, design and product roles, all 100% remote.',
    fresh: 'Index refreshed weekly, sitemap submitted to Google and Bing, hreflang across English, French and German.',
    featured: (lo, hi) =>
      `Average featured listing: ${lo.toLocaleString('en-US')}–${hi.toLocaleString('en-US')} page views over 30 days.`,
    featuredNote:
      'Featured listings appear on the homepage, the role page, and all three language editions. Sponsored top slots add the homepage hero in all three.',
  },
  fr: {
    eyebrow: 'Pourquoi publier ici',
    title: 'Où votre offre sera vue',
    reach: (u, pv) =>
      `${u.toLocaleString('fr-FR')} visiteurs uniques par mois et environ ${pv.toLocaleString('fr-FR')} pages vues par semaine, en croissance.`,
    pages: (n, langs) =>
      `${n.toLocaleString('fr-FR')}+ pages pré-rendues statiquement dans ${langs} langues traduites nativement.`,
    network: (n) =>
      `Partie d'un réseau de ${n} sites remote-work (slateremote.com, slowmadly.com, ai-by-job.com) avec maillage croisé sur les pages pertinentes.`,
    audience: 'Audience filtrée : développeurs, data, design et produit, 100% remote.',
    fresh: "Index actualisé chaque semaine, sitemap soumis à Google et Bing, hreflang en anglais, français et allemand.",
    featured: (lo, hi) =>
      `Annonce Featured moyenne : ${lo.toLocaleString('fr-FR')}–${hi.toLocaleString('fr-FR')} pages vues sur 30 jours.`,
    featuredNote:
      "Les annonces Featured apparaissent sur la home, la page du rôle et les trois éditions linguistiques. Les slots Sponsored top ajoutent le hero de la home dans les trois.",
  },
  de: {
    eyebrow: 'Warum hier posten',
    title: 'Wo deine Stelle gesehen wird',
    reach: (u, pv) =>
      `${u.toLocaleString('de-DE')} eindeutige Besucher pro Monat und rund ${pv.toLocaleString('de-DE')} Seitenaufrufe pro Woche, wachsend.`,
    pages: (n, langs) =>
      `${n.toLocaleString('de-DE')}+ statisch vorgerenderte Seiten in ${langs} nativ übersetzten Sprachen.`,
    network: (n) =>
      `Teil eines ${n}-Site-Remote-Work-Netzwerks (slateremote.com, slowmadly.com, ai-by-job.com) mit Cross-Linking auf relevanten Seiten.`,
    audience: 'Zielgruppe gefiltert: Entwickler, Data, Design und Product, 100% remote.',
    fresh: 'Index wöchentlich aktualisiert, Sitemap an Google und Bing übermittelt, hreflang auf Englisch, Französisch und Deutsch.',
    featured: (lo, hi) =>
      `Durchschnittliche Featured-Stelle: ${lo.toLocaleString('de-DE')}–${hi.toLocaleString('de-DE')} Seitenaufrufe in 30 Tagen.`,
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
          <span>{c.reach(MONTHLY_UNIQUES, WEEKLY_PAGEVIEWS)}</span>
        </li>
        <li className="flex items-start gap-2">
          <Check />
          <span>{c.pages(INDEXED_PAGES, LOCALES_COUNT)}</span>
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
        <p className="text-ink font-semibold text-sm">{c.featured(FEATURED_30D_VIEWS_LOW, FEATURED_30D_VIEWS_HIGH)}</p>
        <p className="text-xs text-muted mt-1.5 leading-relaxed">{c.featuredNote}</p>
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
