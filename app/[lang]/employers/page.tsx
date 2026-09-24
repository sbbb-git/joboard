import type { Metadata } from 'next';
import Link from 'next/link';
import { LOCALES, localePath } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { readJobs } from '@/lib/jobs';
import { SCRAPERS } from '@/lib/scrapers';
import { TrustBlock } from '@/components/TrustBlock';

const FEATURED_30D_URL =
  process.env.NEXT_PUBLIC_STRIPE_FEATURED_30D ||
  'mailto:hello@slateremote.com?subject=Featured%20job%2049%20USD';
const SPONSORED_TOP_URL =
  process.env.NEXT_PUBLIC_STRIPE_SPONSORED_TOP ||
  'mailto:hello@slateremote.com?subject=Sponsored%20placement%2099%20USD';

type StripeCopy = {
  pricingEyebrow: string;
  pricingTitle: string;
  featuredName: string;
  featuredDuration: string;
  featuredBullet: string;
  featuredCta: string;
  sponsoredName: string;
  sponsoredDuration: string;
  sponsoredBullet: string;
  sponsoredCta: string;
  perWeek: string;
};

const STRIPE_COPY: Record<Locale, StripeCopy> = {
  en: {
    pricingEyebrow: 'Pricing',
    pricingTitle: 'Pick a placement and go live in 24 hours',
    featuredName: 'Featured',
    featuredDuration: '30 days',
    featuredBullet: 'Top of role page + homepage + all 7 locale variants',
    featuredCta: 'Buy Featured · $49 →',
    sponsoredName: 'Sponsored top',
    sponsoredDuration: 'per week',
    sponsoredBullet: 'Homepage hero across all 7 locales + 1st position on /jobs',
    sponsoredCta: 'Buy Sponsored · $99 →',
    perWeek: '/week',
  },
  fr: {
    pricingEyebrow: 'Tarifs',
    pricingTitle: "Choisissez un emplacement, en ligne sous 24 h",
    featuredName: 'Featured',
    featuredDuration: '30 jours',
    featuredBullet: 'Haut de la page rôle + home + les 7 variantes de langue',
    featuredCta: 'Acheter Featured · 49 USD →',
    sponsoredName: 'Sponsored top',
    sponsoredDuration: 'par semaine',
    sponsoredBullet: 'Hero de la home dans les 3 langues + 1ère position sur /jobs',
    sponsoredCta: 'Acheter Sponsored · 99 USD →',
    perWeek: '/semaine',
  },
  de: {
    pricingEyebrow: 'Preise',
    pricingTitle: 'Wähle einen Platz, live in 24 Stunden',
    featuredName: 'Featured',
    featuredDuration: '30 Tage',
    featuredBullet: 'Top der Rollen-Seite + Homepage + alle 3 Sprachvarianten',
    featuredCta: 'Featured kaufen · 49 USD →',
    sponsoredName: 'Sponsored top',
    sponsoredDuration: 'pro Woche',
    sponsoredBullet: 'Homepage-Hero in allen 3 Sprachen + 1. Position auf /jobs',
    sponsoredCta: 'Sponsored kaufen · 99 USD →',
    perWeek: '/Woche',
  },
};

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

type Bullet = { title: string; body: string };
type Faq = { q: string; a: string };

type Copy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  ctaPrimary: string;
  ctaSecondary: string;
  statLabels: [string, string, string, string];
  whyH2: string;
  whyIntro: string;
  why: Bullet[];
  compareH2: string;
  compareHeaders: [string, string, string, string];
  compareRows: Array<[string, string, string, string]>;
  pricingH2: string;
  featuredTitle: string;
  featuredDuration: string;
  featuredBullets: string[];
  featuredCta: string;
  sponsoredTitle: string;
  sponsoredDuration: string;
  perWeek: string;
  sponsoredBullets: string[];
  sponsoredCta: string;
  pricingFootnote: (n: number) => string;
  faqH2: string;
  faqs: Faq[];
  finalH2: string;
  finalBody: string;
  finalCta: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    metaTitle: 'Hire remote tech talent · post a job for $49',
    metaDescription:
      'Put a remote role in front of engineers, data, design and product candidates already searching. 30 days for $49, in English, French and German.',
    eyebrow: 'For employers',
    h1: 'Hire engineers who already chose remote.',
    intro:
      'slateremote.com is a focused remote tech job network. We index every remote-friendly role across the major public boards, then publish them in English, French and German with full SEO coverage. Your sponsored listing rides on top of that distribution.',
    ctaPrimary: 'Post a job · from $49',
    ctaSecondary: 'Talk to us',
    statLabels: [
      'Active remote jobs indexed today',
      'SEO-indexed pages across the site',
      'Public job sources aggregated weekly',
      'Languages (en · fr · es · de · pt · it · pl)',
    ],
    whyH2: 'Why post here instead of LinkedIn or Indeed',
    whyIntro:
      'The generic boards bury your remote role under 400 office jobs. We do the opposite: everything we list is fully remote, so your role is never buried under office jobs.',
    why: [
      { title: 'A remote-only index', body: 'Every listing in the index is fully remote, so your role is not competing with office jobs for attention.' },
      { title: 'Three languages from one post', body: 'Your role appears on the English, French and German editions, with proper hreflang, so it reaches candidates across Europe without paying three different boards.' },
      { title: 'SEO that compounds', body: 'Every listing gets its own static page with JobPosting structured data, which makes it eligible for Google Jobs. Your slot stays live for 30 days instead of sinking after 48 hours on a feed.' },
      { title: 'Sourced from tech boards', body: 'The index is built from remote tech job boards, so your role sits alongside engineering, data, design and product openings rather than general listings.' },
      { title: 'Candidates apply with you', body: 'Every apply button goes straight to your own application page. We never collect applications or sit between you and a candidate.' },
      { title: 'Pricing that respects the test', body: "$49 buys you 30 days. No annual contract, no sales call, no negotiated MSA. If it works, you renew. If it doesn't, you move on." },
    ],
    compareH2: 'How a sponsored slot compares',
    compareHeaders: ['', 'slateremote.com', 'LinkedIn promoted', 'Indeed sponsored'],
    compareRows: [
      ['Starting price', '$49 / 30 days', '$300+ / 30 days', '$0.10-$1 / click'],
      ['Audience', 'Remote tech only', 'All industries', 'All industries'],
      ['Languages', '3 (auto)', '1 per post', '1 per post'],
      ['SEO indexing', 'Permanent, static page', 'Behind login wall', 'Expires fast'],
      ['Sales call required', 'No', 'For enterprise', 'No'],
      ['Free aggregation tier', "Yes, if you're on Remotive/RemoteOK/etc", 'No', 'No'],
    ],
    pricingH2: 'Pricing',
    featuredTitle: 'Featured listing',
    featuredDuration: '30 days',
    featuredBullets: [
      'Top of the front page for 30 days',
      'Top of the matching role page',
      'Top of the matching city page',
      'Highlighted across all 3 language editions',
    ],
    featuredCta: 'Buy featured slot',
    sponsoredTitle: 'Sponsored placement',
    sponsoredDuration: 'Per week',
    perWeek: '/week',
    sponsoredBullets: [
      'Pinned at the very top of every relevant page',
      'Distinct sponsor tag',
      'Cross-language placement',
      'Cancellable any time',
    ],
    sponsoredCta: 'Buy sponsored slot',
    pricingFootnote: (n) =>
      `Already aggregated for free from one of our ${n} sources? Your job is live within 24h at no cost. Sponsorship just buys the visibility on top of it.`,
    faqH2: 'Common questions',
    faqs: [
      { q: 'How fast does my post go live?', a: 'Featured and sponsored slots are live within 24h of payment. We do a quick manual review to keep the bar high (no MLM, no crypto rugs, no fake remote).' },
      { q: 'Do you offer refunds?', a: "Yes. If your role gets fewer than 100 unique viewers in the first 7 days, we refund the full amount. We'd rather you come back than feel burned." },
      { q: 'Can I track clicks?', a: 'Yes. We can send you a weekly metrics email with viewers, apply-button clicks and country breakdown. Just ask after purchase.' },
      { q: 'Do you write the job copy?', a: "If you're stuck, send us bullet points and we'll draft it. No extra fee for sponsored customers." },
      { q: 'What if my role is already aggregated?', a: "Great, it's already free on the site. The paid tier just promotes it to a featured or sponsored slot, with the highlighted styling and top-of-page placement." },
      { q: 'Can I post non-remote roles?', a: 'No. The promise to the audience is that 100% of listings are remote-friendly. Hybrid with a city requirement is OK if you tag it clearly.' },
    ],
    finalH2: 'Ready when you are.',
    finalBody: 'One job, one Stripe checkout, zero sales calls. Live in 24 hours.',
    finalCta: 'Post a job for $49 →',
  },
  fr: {
    metaTitle: 'Recruter en tech remote · publier une offre pour 49 $',
    metaDescription:
      "Placez une offre remote devant des ingénieurs, data, design et produit déjà en recherche. 30 jours pour 49 $, en anglais, français et allemand.",
    eyebrow: 'Espace recruteurs',
    h1: 'Recrutez des ingénieurs qui ont déjà choisi le remote.',
    intro:
      "slateremote.com est un réseau d'emploi tech remote spécialisé. Nous indexons chaque poste remote-friendly des grands job boards publics, puis nous le publions en anglais, français et allemand avec une couverture SEO complète. Votre annonce sponsorisée surfe sur cette distribution.",
    ctaPrimary: 'Publier une offre · à partir de 49 $',
    ctaSecondary: 'Nous contacter',
    statLabels: [
      "Offres remote indexées aujourd'hui",
      'Pages indexées par Google',
      'Sources publiques agrégées chaque semaine',
      'Langues (en · fr · es · de · pt · it · pl)',
    ],
    whyH2: 'Pourquoi publier ici plutôt que sur LinkedIn ou Indeed',
    whyIntro:
      "Les job boards généralistes noient votre offre remote sous 400 postes en présentiel. Nous faisons l'inverse : tout ce que nous listons est en full remote, votre offre n'est jamais noyée sous des postes en présentiel.",
    why: [
      { title: 'Un index 100 % remote', body: 'Toutes les offres de l’index sont en full remote : votre poste n’est pas en concurrence avec des offres en présentiel.' },
      { title: 'Trois langues pour une annonce', body: 'Votre offre apparaît sur les éditions anglaise, française et allemande, avec hreflang propre. Vous touchez les candidats européens sans payer trois boards différents.' },
      { title: 'Un SEO qui compose', body: 'Chaque offre a sa propre page statique avec des données structurées JobPosting, ce qui la rend éligible à Google Jobs. Votre slot reste en ligne 30 jours au lieu de couler après 48 h dans un flux.' },
      { title: 'Issu de job boards tech', body: 'L’index est construit à partir de job boards tech remote : votre offre côtoie des postes en ingénierie, data, design et produit plutôt que des annonces généralistes.' },
      { title: 'Les candidats postulent chez vous', body: "Chaque bouton de candidature mène directement à votre propre page de recrutement. Nous ne collectons aucune candidature et ne nous interposons jamais." },
      { title: 'Un pricing qui respecte le test', body: '49 $ pour 30 jours. Pas de contrat annuel, pas de call commercial, pas de MSA négocié. Si ça marche, vous renouvelez. Sinon, vous passez à autre chose.' },
    ],
    compareH2: 'Comment se compare un slot sponsorisé',
    compareHeaders: ['', 'slateremote.com', 'LinkedIn promu', 'Indeed sponsorisé'],
    compareRows: [
      ['Prix de départ', '49 $ / 30 jours', '300+ $ / 30 jours', '0,10-1 $ / clic'],
      ['Audience', 'Tech remote uniquement', 'Toutes industries', 'Toutes industries'],
      ['Langues', '3 (auto)', '1 par annonce', '1 par annonce'],
      ['Indexation SEO', 'Page statique permanente', 'Derrière login', 'Expire vite'],
      ['Call commercial requis', 'Non', 'En entreprise', 'Non'],
      ['Tier agrégation gratuit', 'Oui, si vous êtes sur Remotive/RemoteOK/etc', 'Non', 'Non'],
    ],
    pricingH2: 'Tarifs',
    featuredTitle: 'Annonce mise en avant',
    featuredDuration: '30 jours',
    featuredBullets: [
      "En tête de la page d'accueil pendant 30 jours",
      'En haut de la page rôle correspondante',
      'En haut de la page ville correspondante',
      'Mise en valeur sur les 7 éditions linguistiques',
    ],
    featuredCta: 'Acheter la mise en avant',
    sponsoredTitle: 'Placement sponsorisé',
    sponsoredDuration: 'Par semaine',
    perWeek: '/sem',
    sponsoredBullets: [
      'Épinglé tout en haut de chaque page pertinente',
      'Badge sponsor distinct',
      'Diffusion dans toutes les langues',
      'Annulable à tout moment',
    ],
    sponsoredCta: 'Acheter le placement sponso',
    pricingFootnote: (n) =>
      `Déjà agrégé gratuitement depuis une de nos ${n} sources ? Votre offre est en ligne sous 24 h, sans frais. Le sponsoring achète juste la visibilité par-dessus.`,
    faqH2: 'Questions fréquentes',
    faqs: [
      { q: "En combien de temps l'annonce est en ligne ?", a: 'Les slots featured et sponsorisés sont actifs sous 24 h après paiement. Nous faisons une revue manuelle rapide pour garder un haut niveau (pas de MLM, pas de crypto-arnaques, pas de faux remote).' },
      { q: 'Remboursez-vous ?', a: 'Oui. Si votre annonce a moins de 100 vues uniques sur les 7 premiers jours, nous remboursons intégralement. Mieux vaut vous voir revenir que vous voir partir vexé.' },
      { q: 'Puis-je tracker les clics ?', a: "Oui. On peut vous envoyer un email hebdo avec vues, clics sur le bouton 'Postuler' et répartition par pays. Demandez après l'achat." },
      { q: "Écrivez-vous le texte de l'annonce ?", a: "Si vous bloquez, envoyez-nous quelques bullets et on rédige. Sans frais supplémentaire pour les clients sponsorisés." },
      { q: 'Et si mon offre est déjà agrégée ?', a: 'Parfait, elle est déjà gratuite sur le site. Le tier payant la promeut juste en featured ou sponsorisé, avec le style mis en avant et le placement en haut.' },
      { q: 'Puis-je publier des offres non remote ?', a: "Non. La promesse à l'audience c'est 100 % remote-friendly. L'hybride avec exigence de ville passe si vous le taggez clairement." },
    ],
    finalH2: 'Quand vous voulez.',
    finalBody: "Une offre, un checkout Stripe, zéro call commercial. En ligne sous 24 h.",
    finalCta: 'Publier pour 49 $ →',
  },
  de: {
    metaTitle: 'Remote-Tech-Talente einstellen · Anzeige für 49 $',
    metaDescription:
      'Zeigen Sie eine Remote-Stelle Engineers, Data-, Design- und Product-Kandidaten, die schon suchen. 30 Tage für 49 $, auf Englisch, Französisch und Deutsch.',
    eyebrow: 'Für Arbeitgeber',
    h1: 'Stellen Sie Engineers ein, die sich schon für Remote entschieden haben.',
    intro:
      'slateremote.com ist ein fokussiertes Remote-Tech-Jobnetzwerk. Wir indexieren jede remote-freundliche Stelle der großen öffentlichen Boards und veröffentlichen sie auf Englisch, Französisch und Deutsch mit vollständiger SEO-Abdeckung. Ihr gesponserter Eintrag fährt auf dieser Distribution mit.',
    ctaPrimary: 'Job posten · ab 49 $',
    ctaSecondary: 'Sprechen wir',
    statLabels: [
      'Heute indexierte Remote-Jobs',
      'SEO-indexierte Seiten',
      'Wöchentlich aggregierte öffentliche Quellen',
      'Sprachen (en · fr · es · de · pt · it · pl)',
    ],
    whyH2: 'Warum hier posten statt LinkedIn oder Indeed',
    whyIntro:
      'Die generischen Boards begraben Ihre Remote-Stelle unter 400 Büro-Jobs. Wir machen das Gegenteil: alles bei uns ist vollständig remote, Ihre Stelle geht nie unter Büro-Jobs unter.',
    why: [
      { title: 'Ein reiner Remote-Index', body: 'Jede Stelle im Index ist vollständig remote, Ihre Stelle konkurriert also nicht mit Büro-Jobs um Aufmerksamkeit.' },
      { title: 'Drei Sprachen mit einem Inserat', body: 'Ihre Stelle erscheint in der englischen, französischen und deutschen Ausgabe, mit sauberem hreflang. Sie erreichen europäische Kandidaten, ohne drei verschiedene Boards zu zahlen.' },
      { title: 'SEO mit Zinseszins', body: 'Jede Stelle erhält eine eigene statische Seite mit JobPosting-Strukturdaten und ist damit für Google Jobs geeignet. Ihr Slot bleibt 30 Tage sichtbar, statt nach 48 Stunden in einem Feed zu versinken.' },
      { title: 'Aus Tech-Jobbörsen', body: 'Der Index speist sich aus Remote-Tech-Jobbörsen, Ihre Stelle steht also neben Engineering-, Data-, Design- und Product-Rollen statt neben allgemeinen Anzeigen.' },
      { title: 'Bewerbungen landen bei Ihnen', body: 'Jeder Bewerben-Button führt direkt zu Ihrer eigenen Bewerbungsseite. Wir sammeln keine Bewerbungen und stellen uns nie zwischen Sie und Kandidaten.' },
      { title: 'Preise, die den Test respektieren', body: '49 $ für 30 Tage. Kein Jahresvertrag, kein Sales-Call, kein verhandelter MSA. Funktioniert es, verlängern Sie. Wenn nicht, gehen Sie weiter.' },
    ],
    compareH2: 'Wie sich ein gesponserter Slot vergleicht',
    compareHeaders: ['', 'slateremote.com', 'LinkedIn promoted', 'Indeed sponsored'],
    compareRows: [
      ['Einstiegspreis', '49 $ / 30 Tage', '300+ $ / 30 Tage', '0,10-1 $ / Klick'],
      ['Audience', 'Nur Remote-Tech', 'Alle Branchen', 'Alle Branchen'],
      ['Sprachen', '3 (auto)', '1 pro Post', '1 pro Post'],
      ['SEO-Indexierung', 'Permanente statische Seite', 'Hinter Login', 'Läuft schnell ab'],
      ['Sales-Call nötig', 'Nein', 'Für Enterprise', 'Nein'],
      ['Kostenlose Aggregationsstufe', 'Ja, wenn auf Remotive/RemoteOK/etc', 'Nein', 'Nein'],
    ],
    pricingH2: 'Preise',
    featuredTitle: 'Hervorgehobener Eintrag',
    featuredDuration: '30 Tage',
    featuredBullets: [
      '30 Tage lang oben auf der Startseite',
      'Oben auf der passenden Rollen-Seite',
      'Oben auf der passenden Stadt-Seite',
      'Hervorgehoben in allen 3 Sprachausgaben',
    ],
    featuredCta: 'Hervorgehobenen Slot kaufen',
    sponsoredTitle: 'Gesponserte Platzierung',
    sponsoredDuration: 'Pro Woche',
    perWeek: '/Woche',
    sponsoredBullets: [
      'Ganz oben auf allen relevanten Seiten angeheftet',
      'Klares Sponsor-Label',
      'Sprachübergreifende Platzierung',
      'Jederzeit kündbar',
    ],
    sponsoredCta: 'Gesponserten Slot kaufen',
    pricingFootnote: (n) =>
      `Bereits kostenlos aus einer unserer ${n} Quellen aggregiert? Ihr Job ist innerhalb von 24 h live, ohne Kosten. Sponsoring kauft nur die Sichtbarkeit obendrauf.`,
    faqH2: 'Häufige Fragen',
    faqs: [
      { q: 'Wie schnell geht mein Post live?', a: 'Hervorgehobene und gesponserte Slots sind 24 h nach Zahlung live. Wir machen eine kurze manuelle Prüfung, um die Qualität hochzuhalten (kein MLM, keine Crypto-Rugs, kein falsches Remote).' },
      { q: 'Gibt es Rückerstattungen?', a: 'Ja. Wenn Ihr Inserat in den ersten 7 Tagen weniger als 100 Unique Views hat, erstatten wir den vollen Betrag. Lieber Wiederkehrer als enttäuschte Kunden.' },
      { q: 'Kann ich Klicks tracken?', a: 'Ja. Wir senden Ihnen wöchentlich eine Metriken-Mail mit Views, Klicks auf den Bewerben-Button und Länder-Aufschlüsselung. Einfach nach dem Kauf anfragen.' },
      { q: 'Schreiben Sie den Job-Text?', a: 'Wenn Sie nicht weiterkommen, schicken Sie uns Stichpunkte und wir entwerfen. Keine Zusatzkosten für gesponserte Kunden.' },
      { q: 'Was, wenn meine Stelle schon aggregiert ist?', a: 'Super, sie ist bereits kostenlos auf der Seite. Die kostenpflichtige Stufe befördert sie nur zu einem hervorgehobenen oder gesponserten Slot.' },
      { q: 'Kann ich Nicht-Remote-Stellen posten?', a: 'Nein. Das Versprechen an die Audience ist 100 % remote-freundlich. Hybrid mit Stadt-Bindung ist OK, wenn klar getaggt.' },
    ],
    finalH2: 'Wann Sie wollen.',
    finalBody: 'Ein Job, ein Stripe-Checkout, null Sales-Calls. Live in 24 Stunden.',
    finalCta: 'Job posten für 49 $ →',
  },
};

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = COPY[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'employers',
    title: c.metaTitle,
    description: c.metaDescription,
  });
}

export default function EmployersPage({ params }: { params: { lang: Locale } }) {
  const c = COPY[params.lang];
  const sc = STRIPE_COPY[params.lang];
  const meta = readJobs();
  const liveJobs = meta.count;
  const sourceCount = SCRAPERS.length;

  return (
    <div className="space-y-16">
      <header className="border-b border-line pb-10">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-normal tracking-tighter text-ink mt-2 leading-[1.05]">
          {c.h1}
        </h1>
        <p className="text-graphite text-base md:text-lg mt-5 max-w-2xl leading-relaxed">{c.intro}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={localePath(params.lang, 'submit')}
            className="px-5 py-2.5 bg-ink text-bg rounded-full text-sm font-semibold hover:bg-forest transition-colors"
          >
            {c.ctaPrimary}
          </Link>
          <a
            href="mailto:hello@slateremote.com?subject=Recruiter%20enquiry"
            className="px-5 py-2.5 border border-line rounded-full text-sm font-semibold hover:border-ink"
          >
            {c.ctaSecondary}
          </a>
        </div>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat big={liveJobs.toLocaleString()} label={c.statLabels[0]} />
        <Stat big="6,800+" label={c.statLabels[1]} />
        <Stat big={`${sourceCount}`} label={c.statLabels[2]} />
        <Stat big="7" label={c.statLabels[3]} />
      </section>

      <TrustBlock locale={params.lang} />

      <section>
        <p className="text-[10px] uppercase tracking-wider text-forest font-bold">{sc.pricingEyebrow}</p>
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink mt-2">
          {sc.pricingTitle}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <article className="rounded-2xl border border-line bg-paper p-6 shadow-soft">
            <h3 className="font-semibold text-ink">{sc.featuredName}</h3>
            <p className="text-xs uppercase tracking-wider text-muted mt-1">{sc.featuredDuration}</p>
            <p className="font-display text-4xl text-ink mt-3">$49</p>
            <p className="text-sm text-graphite mt-3">· {sc.featuredBullet}</p>
            <a
              href={FEATURED_30D_URL}
              target={FEATURED_30D_URL.startsWith('http') ? '_blank' : undefined}
              rel={FEATURED_30D_URL.startsWith('http') ? 'noopener' : undefined}
              className="inline-flex items-center mt-5 px-5 py-2.5 bg-ink text-bg rounded-full text-sm font-semibold hover:bg-forest transition-colors"
            >
              {sc.featuredCta}
            </a>
          </article>
          <article className="rounded-2xl border border-forest bg-forestSoft p-6 shadow-soft">
            <h3 className="font-semibold text-forest">{sc.sponsoredName}</h3>
            <p className="text-xs uppercase tracking-wider text-forest mt-1">{sc.sponsoredDuration}</p>
            <p className="font-display text-4xl text-ink mt-3">
              $99<span className="text-base text-muted">{sc.perWeek}</span>
            </p>
            <p className="text-sm text-graphite mt-3">· {sc.sponsoredBullet}</p>
            <a
              href={SPONSORED_TOP_URL}
              target={SPONSORED_TOP_URL.startsWith('http') ? '_blank' : undefined}
              rel={SPONSORED_TOP_URL.startsWith('http') ? 'noopener' : undefined}
              className="inline-flex items-center mt-5 px-5 py-2.5 bg-forest text-bg rounded-full text-sm font-semibold hover:bg-ink transition-colors"
            >
              {sc.sponsoredCta}
            </a>
          </article>
        </div>
      </section>

      <section>
        <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink">{c.whyH2}</h2>
        <p className="text-graphite mt-3 max-w-2xl">{c.whyIntro}</p>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {c.why.map((w) => (
            <Why key={w.title} title={w.title} body={w.body} />
          ))}
        </div>
      </section>


      <section>
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">{c.compareH2}</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-xs sm:text-sm border border-line rounded-lg overflow-hidden min-w-[520px]">
            <thead className="bg-sand">
              <tr className="text-left">
                <th className="px-2 py-2 sm:px-4 sm:py-3 font-semibold">{c.compareHeaders[0]}</th>
                <th className="px-2 py-2 sm:px-4 sm:py-3 font-semibold text-ink">{c.compareHeaders[1]}</th>
                <th className="px-2 py-2 sm:px-4 sm:py-3 font-semibold text-muted">{c.compareHeaders[2]}</th>
                <th className="px-2 py-2 sm:px-4 sm:py-3 font-semibold text-muted">{c.compareHeaders[3]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {c.compareRows.map((r) => (
                <tr key={r[0]}>
                  <td className="px-2 py-2 sm:px-4 sm:py-3 text-graphite">{r[0]}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-3 text-ink font-medium">{r[1]}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-3 text-muted">{r[2]}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-3 text-muted">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-line pt-10">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">{c.pricingH2}</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <article className="border border-line rounded-lg p-6 bg-white">
            <h3 className="font-semibold">{c.featuredTitle}</h3>
            <p className="text-xs uppercase tracking-wider text-muted mt-1">{c.featuredDuration}</p>
            <p className="text-3xl font-semibold mt-3">$49</p>
            <ul className="text-sm text-muted mt-4 space-y-1.5">
              {c.featuredBullets.map((b) => (
                <li key={b}>· {b}</li>
              ))}
            </ul>
            <Link
              href={localePath(params.lang, 'submit')}
              className="inline-block mt-5 px-4 py-2 bg-ink text-bg rounded text-sm hover:opacity-90"
            >
              {c.featuredCta}
            </Link>
          </article>
          <article className="border border-line rounded-lg p-6 bg-forestSoft">
            <h3 className="font-semibold">{c.sponsoredTitle}</h3>
            <p className="text-xs uppercase tracking-wider text-forest mt-1">{c.sponsoredDuration}</p>
            <p className="text-3xl font-semibold mt-3">$99<span className="text-base text-muted">{c.perWeek}</span></p>
            <ul className="text-sm text-muted mt-4 space-y-1.5">
              {c.sponsoredBullets.map((b) => (
                <li key={b}>· {b}</li>
              ))}
            </ul>
            <Link
              href={localePath(params.lang, 'submit')}
              className="inline-block mt-5 px-4 py-2 bg-ink text-bg rounded text-sm hover:opacity-90"
            >
              {c.sponsoredCta}
            </Link>
          </article>
        </div>
        <p className="text-xs text-muted mt-4">{c.pricingFootnote(sourceCount)}</p>
      </section>

      <section className="border-t border-line pt-10">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">{c.faqH2}</h2>
        <div className="mt-6 space-y-5 max-w-3xl">
          {c.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-medium text-ink">{f.q}</h3>
              <p className="text-sm text-muted mt-1.5 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-ink text-bg p-8 md:p-12 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tighter">{c.finalH2}</h2>
        <p className="text-bg/80 mt-3 max-w-xl mx-auto">{c.finalBody}</p>
        <Link
          href={localePath(params.lang, 'submit')}
          className="inline-block mt-6 px-6 py-3 bg-bg text-ink rounded-full text-sm font-semibold hover:bg-sand transition-colors"
        >
          {c.finalCta}
        </Link>
      </section>
    </div>
  );
}

function Stat({ big, label }: { big: string; label: string }) {
  return (
    <div className="border border-line rounded-lg p-3 sm:p-4 bg-paper">
      <div className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tighter text-ink">{big}</div>
      <div className="text-xs text-muted mt-1.5 leading-snug">{label}</div>
    </div>
  );
}

function Why({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-line rounded-lg p-5 bg-paper hover:border-ink transition-colors">
      <h3 className="font-semibold text-ink">{title}</h3>
      <p className="text-sm text-muted mt-2 leading-relaxed">{body}</p>
    </div>
  );
}

