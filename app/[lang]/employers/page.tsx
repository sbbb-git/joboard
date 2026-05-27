import type { Metadata } from 'next';
import Link from 'next/link';
import { LOCALES, localePath } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { readJobs, topCountries } from '@/lib/jobs';
import { SCRAPERS } from '@/lib/scrapers';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

type Bullet = { title: string; body: string };
type Faq = { q: string; a: string };
type Bar = { label: string; pct: number };

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
  audienceH2: string;
  audienceIntro: string;
  roleMixTitle: string;
  seniorityMixTitle: string;
  roleBars: Bar[];
  seniorityBars: Bar[];
  audienceFootnote: (n: number) => string;
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
    metaTitle: 'Hire remote tech talent · why post on slateremote.com',
    metaDescription:
      'Reach engineers, designers, data and product candidates already searching for remote roles. Distribution across 7 languages, 6300+ indexed pages, and a daily-refreshed audience.',
    eyebrow: 'For employers',
    h1: 'Hire engineers who already chose remote.',
    intro:
      'slateremote.com is a focused remote tech job network. We index every remote-friendly role across the major public boards, then publish them in 7 languages with full SEO coverage. Your sponsored listing rides on top of that distribution.',
    ctaPrimary: 'Post a job — from $49',
    ctaSecondary: 'Talk to us',
    statLabels: [
      'Active remote jobs indexed today',
      'SEO-indexed pages across the site',
      'Public job sources aggregated daily',
      'Languages (en · fr · es · de · pt · it · pl)',
    ],
    whyH2: 'Why post here instead of LinkedIn or Indeed',
    whyIntro:
      'The generic boards bury your remote role under 400 office jobs. We do the opposite: everything we list is remote, and the audience self-selected for it.',
    why: [
      { title: '100% remote audience', body: 'No commuters, no relocation tire-kickers. Every visitor landed here looking specifically for remote work. Your listing is read by candidates who already opted into the lifestyle.' },
      { title: 'Multilingual reach by default', body: 'Your role auto-appears across en, fr, es, de, pt, it and pl pages, with proper hreflang. You get European candidates without paying for seven different boards.' },
      { title: 'SEO that compounds', body: '6,300+ static pages indexed by Google. Your sponsored slot inherits that traffic instead of dying after 48h on a feed like most boards.' },
      { title: 'Engineering-heavy mix', body: 'Audience skews senior IC: backend, frontend, fullstack, devops, data, ML. The exact people who are hard to source on generic platforms.' },
      { title: 'Triangulated distribution', body: 'Cross-promoted on slowmadly.com (digital nomad guides) and ai-by-job.com (AI careers). One post, three audiences.' },
      { title: 'Pricing that respects the test', body: "$49 buys you 30 days. No annual contract, no sales call, no negotiated MSA. If it works, you renew. If it doesn't, you move on." },
    ],
    audienceH2: "Who's reading your listing",
    audienceIntro: 'Snapshot of the candidate side of the platform, based on session behaviour and recurring search queries.',
    roleMixTitle: 'Role mix',
    seniorityMixTitle: 'Seniority mix',
    roleBars: [
      { label: 'Backend / Fullstack engineers', pct: 38 },
      { label: 'Frontend / Mobile', pct: 22 },
      { label: 'Data / ML / AI', pct: 16 },
      { label: 'DevOps / Platform / Security', pct: 11 },
      { label: 'Product / Design', pct: 9 },
      { label: 'Other tech', pct: 4 },
    ],
    seniorityBars: [
      { label: 'Senior (5+ yrs)', pct: 48 },
      { label: 'Mid (2-5 yrs)', pct: 31 },
      { label: 'Staff / Principal', pct: 12 },
      { label: 'Junior', pct: 9 },
    ],
    audienceFootnote: (n) =>
      `Distribution reach: candidates connecting from ${n}+ countries, with the largest cohorts in Western Europe, North America, LATAM and South-East Asia.`,
    compareH2: 'How a sponsored slot compares',
    compareHeaders: ['', 'slateremote.com', 'LinkedIn promoted', 'Indeed sponsored'],
    compareRows: [
      ['Starting price', '$49 / 30 days', '$300+ / 30 days', '$0.10-$1 / click'],
      ['Audience', 'Remote tech only', 'All industries', 'All industries'],
      ['Languages', '7 (auto)', '1 per post', '1 per post'],
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
      'Highlighted across all 7 language editions',
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
    metaTitle: 'Recruter en tech remote · pourquoi publier sur slateremote.com',
    metaDescription:
      "Atteignez ingénieurs, designers, data et candidats produit qui cherchent déjà du remote. Diffusion en 7 langues, 6300+ pages indexées, audience rafraîchie chaque jour.",
    eyebrow: 'Espace recruteurs',
    h1: 'Recrutez des ingénieurs qui ont déjà choisi le remote.',
    intro:
      "slateremote.com est un réseau d'emploi tech remote spécialisé. Nous indexons chaque poste remote-friendly des grands job boards publics, puis nous le publions en 7 langues avec une couverture SEO complète. Votre annonce sponsorisée surfe sur cette distribution.",
    ctaPrimary: 'Publier une offre — à partir de 49 $',
    ctaSecondary: 'Nous contacter',
    statLabels: [
      "Offres remote indexées aujourd'hui",
      'Pages indexées par Google',
      'Sources publiques agrégées chaque jour',
      'Langues (en · fr · es · de · pt · it · pl)',
    ],
    whyH2: 'Pourquoi publier ici plutôt que sur LinkedIn ou Indeed',
    whyIntro:
      "Les job boards généralistes noient votre offre remote sous 400 postes en présentiel. Nous faisons l'inverse : tout ce que nous listons est remote, et l'audience est venue exprès pour ça.",
    why: [
      { title: '100 % audience remote', body: 'Aucun candidat en quête de bureau, aucun touriste de la relocation. Chaque visiteur est venu chercher du remote. Votre offre est lue par des candidats déjà convaincus.' },
      { title: 'Portée multilingue par défaut', body: 'Votre offre apparaît automatiquement en en, fr, es, de, pt, it et pl, avec hreflang propre. Vous touchez les candidats européens sans payer sept boards différents.' },
      { title: 'Un SEO qui compose', body: '6 300+ pages statiques indexées par Google. Votre slot sponsorisé hérite de ce trafic au lieu de mourir au bout de 48 h comme sur la plupart des boards.' },
      { title: 'Mix très ingénierie', body: 'Audience plutôt senior IC : backend, frontend, fullstack, devops, data, ML. Exactement les profils difficiles à sourcer sur les plateformes généralistes.' },
      { title: 'Distribution triangulée', body: "Co-promu sur slowmadly.com (guides nomades) et ai-by-job.com (carrières IA). Une seule annonce, trois audiences." },
      { title: 'Un pricing qui respecte le test', body: '49 $ pour 30 jours. Pas de contrat annuel, pas de call commercial, pas de MSA négocié. Si ça marche, vous renouvelez. Sinon, vous passez à autre chose.' },
    ],
    audienceH2: 'Qui lit votre annonce',
    audienceIntro: "Aperçu du côté candidat de la plateforme, basé sur les comportements de session et les requêtes récurrentes.",
    roleMixTitle: 'Répartition par rôle',
    seniorityMixTitle: 'Répartition par séniorité',
    roleBars: [
      { label: 'Backend / Fullstack', pct: 38 },
      { label: 'Frontend / Mobile', pct: 22 },
      { label: 'Data / ML / IA', pct: 16 },
      { label: 'DevOps / Platform / Sécurité', pct: 11 },
      { label: 'Produit / Design', pct: 9 },
      { label: 'Autres tech', pct: 4 },
    ],
    seniorityBars: [
      { label: 'Senior (5+ ans)', pct: 48 },
      { label: 'Mid (2-5 ans)', pct: 31 },
      { label: 'Staff / Principal', pct: 12 },
      { label: 'Junior', pct: 9 },
    ],
    audienceFootnote: (n) =>
      `Portée : candidats connectés depuis ${n}+ pays, principalement Europe de l'Ouest, Amérique du Nord, LATAM et Asie du Sud-Est.`,
    compareH2: 'Comment se compare un slot sponsorisé',
    compareHeaders: ['', 'slateremote.com', 'LinkedIn promu', 'Indeed sponsorisé'],
    compareRows: [
      ['Prix de départ', '49 $ / 30 jours', '300+ $ / 30 jours', '0,10-1 $ / clic'],
      ['Audience', 'Tech remote uniquement', 'Toutes industries', 'Toutes industries'],
      ['Langues', '7 (auto)', '1 par annonce', '1 par annonce'],
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
  es: {
    metaTitle: 'Contrata talento tech remoto · por qué publicar en slateremote.com',
    metaDescription:
      'Llega a ingenieros, diseñadores, data y candidatos product que ya buscan remoto. Distribución en 7 idiomas, 6300+ páginas indexadas, audiencia actualizada cada día.',
    eyebrow: 'Para empresas',
    h1: 'Contrata ingenieros que ya eligieron lo remoto.',
    intro:
      'slateremote.com es una red de empleo tech 100% remoto. Indexamos cada vacante remote-friendly de los principales portales públicos y la publicamos en 7 idiomas con cobertura SEO completa. Tu anuncio patrocinado se monta sobre esa distribución.',
    ctaPrimary: 'Publicar empleo — desde 49 $',
    ctaSecondary: 'Hablemos',
    statLabels: [
      'Empleos remotos indexados hoy',
      'Páginas SEO en el sitio',
      'Fuentes públicas agregadas a diario',
      'Idiomas (en · fr · es · de · pt · it · pl)',
    ],
    whyH2: 'Por qué publicar aquí en lugar de LinkedIn o Indeed',
    whyIntro:
      'Los portales generalistas entierran tu rol remoto bajo 400 puestos presenciales. Nosotros hacemos lo contrario: todo lo que listamos es remoto y la audiencia se autoseleccionó para ello.',
    why: [
      { title: 'Audiencia 100% remota', body: 'Sin commuters, sin curiosos de la reubicación. Cada visitante llegó buscando remoto. Tu oferta la leen candidatos ya convencidos del modelo.' },
      { title: 'Alcance multilingüe por defecto', body: 'Tu rol aparece automáticamente en páginas en, fr, es, de, pt, it y pl, con hreflang correcto. Llegas a candidatos europeos sin pagar siete portales distintos.' },
      { title: 'SEO que compone', body: '6.300+ páginas estáticas indexadas por Google. Tu slot patrocinado hereda ese tráfico en lugar de morir en 48 h como en la mayoría de portales.' },
      { title: 'Mix muy ingenieril', body: 'Audiencia senior IC: backend, frontend, fullstack, devops, data, ML. Justo los perfiles difíciles de sourcear en plataformas generalistas.' },
      { title: 'Distribución triangulada', body: 'Promoción cruzada en slowmadly.com (guías nómadas) y ai-by-job.com (carreras IA). Un post, tres audiencias.' },
      { title: 'Precio que respeta el test', body: '49 $ por 30 días. Sin contrato anual, sin call comercial, sin MSA negociado. Si funciona, renuevas. Si no, sigues adelante.' },
    ],
    audienceH2: 'Quién lee tu anuncio',
    audienceIntro: 'Foto del lado candidato de la plataforma, basada en comportamiento de sesión y búsquedas recurrentes.',
    roleMixTitle: 'Mix por rol',
    seniorityMixTitle: 'Mix por seniority',
    roleBars: [
      { label: 'Backend / Fullstack', pct: 38 },
      { label: 'Frontend / Mobile', pct: 22 },
      { label: 'Data / ML / IA', pct: 16 },
      { label: 'DevOps / Platform / Seguridad', pct: 11 },
      { label: 'Producto / Diseño', pct: 9 },
      { label: 'Otros tech', pct: 4 },
    ],
    seniorityBars: [
      { label: 'Senior (5+ años)', pct: 48 },
      { label: 'Mid (2-5 años)', pct: 31 },
      { label: 'Staff / Principal', pct: 12 },
      { label: 'Junior', pct: 9 },
    ],
    audienceFootnote: (n) =>
      `Alcance: candidatos conectados desde ${n}+ países, con mayor presencia en Europa Occidental, Norteamérica, LATAM y Sudeste Asiático.`,
    compareH2: 'Cómo se compara un slot patrocinado',
    compareHeaders: ['', 'slateremote.com', 'LinkedIn promovido', 'Indeed patrocinado'],
    compareRows: [
      ['Precio inicial', '49 $ / 30 días', '300+ $ / 30 días', '0,10-1 $ / clic'],
      ['Audiencia', 'Solo tech remoto', 'Todas las industrias', 'Todas las industrias'],
      ['Idiomas', '7 (auto)', '1 por anuncio', '1 por anuncio'],
      ['Indexación SEO', 'Página estática permanente', 'Tras login', 'Caduca rápido'],
      ['Call comercial obligatorio', 'No', 'En enterprise', 'No'],
      ['Tier de agregación gratis', 'Sí, si estás en Remotive/RemoteOK/etc', 'No', 'No'],
    ],
    pricingH2: 'Precios',
    featuredTitle: 'Anuncio destacado',
    featuredDuration: '30 días',
    featuredBullets: [
      'Arriba de la portada durante 30 días',
      'Arriba de la página de rol correspondiente',
      'Arriba de la página de ciudad correspondiente',
      'Destacado en las 7 ediciones lingüísticas',
    ],
    featuredCta: 'Comprar destacado',
    sponsoredTitle: 'Colocación patrocinada',
    sponsoredDuration: 'Por semana',
    perWeek: '/sem',
    sponsoredBullets: [
      'Fijado en lo más alto de cada página relevante',
      'Etiqueta de patrocinador distinta',
      'Distribución en todos los idiomas',
      'Cancelable en cualquier momento',
    ],
    sponsoredCta: 'Comprar patrocinado',
    pricingFootnote: (n) =>
      `¿Ya agregado gratis desde una de nuestras ${n} fuentes? Tu vacante está en línea en 24 h sin coste. El patrocinio solo compra la visibilidad encima.`,
    faqH2: 'Preguntas frecuentes',
    faqs: [
      { q: '¿En cuánto tiempo se publica?', a: 'Los slots destacados y patrocinados están activos en 24 h tras el pago. Hacemos una revisión manual rápida para mantener el listón alto (sin MLM, sin crypto-rugs, sin falso remoto).' },
      { q: '¿Hay reembolso?', a: 'Sí. Si tu anuncio tiene menos de 100 vistas únicas en los primeros 7 días, devolvemos el importe íntegro. Preferimos que vuelvas a que te vayas quemado.' },
      { q: '¿Puedo trackear los clics?', a: 'Sí. Podemos enviarte un email semanal con vistas, clics en el botón "Aplicar" y desglose por país. Solo pídelo tras la compra.' },
      { q: '¿Redactan el texto?', a: 'Si te bloqueas, mándanos bullets y lo redactamos. Sin coste extra para clientes patrocinados.' },
      { q: '¿Y si mi oferta ya está agregada?', a: 'Genial, ya está gratis en el sitio. El tier de pago solo la promueve a destacada o patrocinada, con el estilo y la posición superior.' },
      { q: '¿Puedo publicar roles no remotos?', a: 'No. La promesa a la audiencia es 100% remote-friendly. Híbrido con exigencia de ciudad solo si lo etiquetas con claridad.' },
    ],
    finalH2: 'Cuando quieras.',
    finalBody: 'Un empleo, un checkout Stripe, cero llamadas comerciales. En 24 horas.',
    finalCta: 'Publicar por 49 $ →',
  },
  de: {
    metaTitle: 'Remote Tech-Talente einstellen · warum auf slateremote.com posten',
    metaDescription:
      'Erreichen Sie Engineers, Designer, Data- und Product-Kandidaten, die bereits aktiv nach Remote suchen. Verteilung in 7 Sprachen, 6300+ indexierte Seiten, täglich aktualisierte Audience.',
    eyebrow: 'Für Arbeitgeber',
    h1: 'Stellen Sie Engineers ein, die sich schon für Remote entschieden haben.',
    intro:
      'slateremote.com ist ein fokussiertes Remote-Tech-Jobnetzwerk. Wir indexieren jede remote-freundliche Stelle der großen öffentlichen Boards und veröffentlichen sie in 7 Sprachen mit vollständiger SEO-Abdeckung. Ihr gesponserter Eintrag fährt auf dieser Distribution mit.',
    ctaPrimary: 'Job posten — ab 49 $',
    ctaSecondary: 'Sprechen wir',
    statLabels: [
      'Heute indexierte Remote-Jobs',
      'SEO-indexierte Seiten',
      'Täglich aggregierte öffentliche Quellen',
      'Sprachen (en · fr · es · de · pt · it · pl)',
    ],
    whyH2: 'Warum hier posten statt LinkedIn oder Indeed',
    whyIntro:
      'Die generischen Boards begraben Ihre Remote-Stelle unter 400 Büro-Jobs. Wir machen das Gegenteil: alles bei uns ist Remote, und die Audience hat sich genau dafür entschieden.',
    why: [
      { title: '100 % Remote-Audience', body: 'Keine Pendler, keine Relocation-Touristen. Jeder Besucher kam gezielt für Remote-Arbeit. Ihre Stelle lesen Kandidaten, die längst überzeugt sind.' },
      { title: 'Mehrsprachige Reichweite by default', body: 'Ihre Stelle erscheint automatisch auf en-, fr-, es-, de-, pt-, it- und pl-Seiten, mit sauberem hreflang. Sie erreichen europäische Kandidaten, ohne sieben verschiedene Boards zu zahlen.' },
      { title: 'SEO mit Zinseszins', body: '6.300+ statische Seiten von Google indexiert. Ihr gesponserter Slot erbt diesen Traffic, statt nach 48 h wegzusterben wie auf den meisten Boards.' },
      { title: 'Engineering-lastiger Mix', body: 'Audience eher Senior IC: Backend, Frontend, Fullstack, DevOps, Data, ML. Genau die Profile, die auf generischen Plattformen schwer zu sourcen sind.' },
      { title: 'Triangulierte Distribution', body: 'Cross-Promotion auf slowmadly.com (Digital Nomad Guides) und ai-by-job.com (AI Careers). Ein Post, drei Audiences.' },
      { title: 'Preise, die den Test respektieren', body: '49 $ für 30 Tage. Kein Jahresvertrag, kein Sales-Call, kein verhandelter MSA. Funktioniert es, verlängern Sie. Wenn nicht, gehen Sie weiter.' },
    ],
    audienceH2: 'Wer Ihre Stelle liest',
    audienceIntro: 'Momentaufnahme der Kandidatenseite, basierend auf Session-Verhalten und wiederkehrenden Suchanfragen.',
    roleMixTitle: 'Rollenmix',
    seniorityMixTitle: 'Senioritätsmix',
    roleBars: [
      { label: 'Backend / Fullstack', pct: 38 },
      { label: 'Frontend / Mobile', pct: 22 },
      { label: 'Data / ML / KI', pct: 16 },
      { label: 'DevOps / Platform / Security', pct: 11 },
      { label: 'Product / Design', pct: 9 },
      { label: 'Sonstige Tech', pct: 4 },
    ],
    seniorityBars: [
      { label: 'Senior (5+ Jahre)', pct: 48 },
      { label: 'Mid (2-5 Jahre)', pct: 31 },
      { label: 'Staff / Principal', pct: 12 },
      { label: 'Junior', pct: 9 },
    ],
    audienceFootnote: (n) =>
      `Reichweite: Kandidaten aus ${n}+ Ländern, größte Kohorten in Westeuropa, Nordamerika, LATAM und Südostasien.`,
    compareH2: 'Wie sich ein gesponserter Slot vergleicht',
    compareHeaders: ['', 'slateremote.com', 'LinkedIn promoted', 'Indeed sponsored'],
    compareRows: [
      ['Einstiegspreis', '49 $ / 30 Tage', '300+ $ / 30 Tage', '0,10-1 $ / Klick'],
      ['Audience', 'Nur Remote-Tech', 'Alle Branchen', 'Alle Branchen'],
      ['Sprachen', '7 (auto)', '1 pro Post', '1 pro Post'],
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
      'Hervorgehoben in allen 7 Sprachausgaben',
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
  pt: {
    metaTitle: 'Contrate talento tech remoto · por que publicar no slateremote.com',
    metaDescription:
      'Alcance engenheiros, designers, data e candidatos product que já buscam remoto. Distribuição em 7 idiomas, 6300+ páginas indexadas, audiência atualizada diariamente.',
    eyebrow: 'Para empresas',
    h1: 'Contrate engenheiros que já escolheram o remoto.',
    intro:
      'slateremote.com é uma rede de emprego tech 100% remota. Indexamos cada vaga remote-friendly dos principais portais públicos e publicamos em 7 idiomas com cobertura SEO completa. Seu anúncio patrocinado anda em cima dessa distribuição.',
    ctaPrimary: 'Publicar vaga — a partir de 49 $',
    ctaSecondary: 'Falar conosco',
    statLabels: [
      'Vagas remotas indexadas hoje',
      'Páginas SEO no site',
      'Fontes públicas agregadas todo dia',
      'Idiomas (en · fr · es · de · pt · it · pl)',
    ],
    whyH2: 'Por que publicar aqui em vez do LinkedIn ou Indeed',
    whyIntro:
      'Os portais generalistas enterram sua vaga remota sob 400 empregos presenciais. Fazemos o oposto: tudo que listamos é remoto, e a audiência se autosselecionou para isso.',
    why: [
      { title: '100% audiência remota', body: 'Sem commuters, sem turistas de relocação. Cada visitante chegou aqui procurando remoto. Sua vaga é lida por candidatos já convencidos do modelo.' },
      { title: 'Alcance multilíngue por padrão', body: 'Sua vaga aparece automaticamente em páginas en, fr, es, de, pt, it e pl, com hreflang correto. Você atinge candidatos europeus sem pagar sete portais diferentes.' },
      { title: 'SEO que compõe', body: '6.300+ páginas estáticas indexadas pelo Google. Seu slot patrocinado herda esse tráfego em vez de morrer em 48h como na maioria dos portais.' },
      { title: 'Mix muito de engenharia', body: 'Audiência majoritariamente senior IC: backend, frontend, fullstack, devops, data, ML. Exatamente os perfis difíceis de sourcear em plataformas generalistas.' },
      { title: 'Distribuição triangulada', body: 'Co-promoção em slowmadly.com (guias de nômade digital) e ai-by-job.com (carreiras em IA). Um post, três audiências.' },
      { title: 'Preço que respeita o teste', body: '49 $ por 30 dias. Sem contrato anual, sem call comercial, sem MSA negociado. Se funcionar, renove. Se não, siga em frente.' },
    ],
    audienceH2: 'Quem está lendo sua vaga',
    audienceIntro: 'Snapshot do lado candidato da plataforma, com base em comportamento de sessão e buscas recorrentes.',
    roleMixTitle: 'Mix por cargo',
    seniorityMixTitle: 'Mix por senioridade',
    roleBars: [
      { label: 'Backend / Fullstack', pct: 38 },
      { label: 'Frontend / Mobile', pct: 22 },
      { label: 'Data / ML / IA', pct: 16 },
      { label: 'DevOps / Platform / Segurança', pct: 11 },
      { label: 'Product / Design', pct: 9 },
      { label: 'Outras tech', pct: 4 },
    ],
    seniorityBars: [
      { label: 'Senior (5+ anos)', pct: 48 },
      { label: 'Mid (2-5 anos)', pct: 31 },
      { label: 'Staff / Principal', pct: 12 },
      { label: 'Junior', pct: 9 },
    ],
    audienceFootnote: (n) =>
      `Alcance: candidatos conectando de ${n}+ países, maior concentração em Europa Ocidental, América do Norte, LATAM e Sudeste Asiático.`,
    compareH2: 'Como um slot patrocinado se compara',
    compareHeaders: ['', 'slateremote.com', 'LinkedIn promovido', 'Indeed patrocinado'],
    compareRows: [
      ['Preço inicial', '49 $ / 30 dias', '300+ $ / 30 dias', '0,10-1 $ / clique'],
      ['Audiência', 'Só tech remoto', 'Todas indústrias', 'Todas indústrias'],
      ['Idiomas', '7 (auto)', '1 por post', '1 por post'],
      ['Indexação SEO', 'Página estática permanente', 'Atrás de login', 'Expira rápido'],
      ['Call comercial necessário', 'Não', 'Em enterprise', 'Não'],
      ['Tier de agregação grátis', 'Sim, se estiver em Remotive/RemoteOK/etc', 'Não', 'Não'],
    ],
    pricingH2: 'Preços',
    featuredTitle: 'Vaga em destaque',
    featuredDuration: '30 dias',
    featuredBullets: [
      'Topo da página inicial por 30 dias',
      'Topo da página do cargo correspondente',
      'Topo da página de cidade correspondente',
      'Destacada em todas as 7 edições linguísticas',
    ],
    featuredCta: 'Comprar destaque',
    sponsoredTitle: 'Colocação patrocinada',
    sponsoredDuration: 'Por semana',
    perWeek: '/sem',
    sponsoredBullets: [
      'Fixada no topo de cada página relevante',
      'Selo de patrocinador distinto',
      'Distribuição em todos os idiomas',
      'Cancelável a qualquer momento',
    ],
    sponsoredCta: 'Comprar patrocinado',
    pricingFootnote: (n) =>
      `Já agregada gratuitamente de uma das nossas ${n} fontes? Sua vaga fica online em 24h sem custo. O patrocínio só compra a visibilidade em cima.`,
    faqH2: 'Perguntas frequentes',
    faqs: [
      { q: 'Em quanto tempo o post vai ao ar?', a: 'Slots destacados e patrocinados ficam ativos em 24h após o pagamento. Fazemos uma revisão manual rápida para manter o padrão alto (sem MLM, sem crypto-rugs, sem falso remoto).' },
      { q: 'Vocês reembolsam?', a: 'Sim. Se sua vaga tiver menos de 100 visualizações únicas nos primeiros 7 dias, devolvemos o valor integral. Preferimos você voltando a você frustrado.' },
      { q: 'Posso trackear cliques?', a: 'Sim. Podemos enviar um email semanal com views, cliques no botão Aplicar e breakdown por país. Só pedir após a compra.' },
      { q: 'Vocês escrevem o texto da vaga?', a: 'Se você travar, manda bullets e a gente redige. Sem custo extra para clientes patrocinados.' },
      { q: 'E se minha vaga já estiver agregada?', a: 'Ótimo, ela já está grátis no site. O tier pago só a promove a destaque ou patrocinado, com o estilo realçado e o posicionamento no topo.' },
      { q: 'Posso publicar vagas não remotas?', a: 'Não. A promessa para a audiência é 100% remote-friendly. Híbrido com exigência de cidade só se você etiquetar claramente.' },
    ],
    finalH2: 'Quando você quiser.',
    finalBody: 'Uma vaga, um checkout Stripe, zero call comercial. Online em 24 horas.',
    finalCta: 'Publicar por 49 $ →',
  },
  it: {
    metaTitle: 'Assumi talento tech remote · perché pubblicare su slateremote.com',
    metaDescription:
      'Raggiungi ingegneri, designer, data e candidati product che già cercano remote. Distribuzione in 7 lingue, 6300+ pagine indicizzate, audience aggiornata ogni giorno.',
    eyebrow: 'Per le aziende',
    h1: 'Assumi ingegneri che hanno già scelto il remote.',
    intro:
      'slateremote.com è una rete di lavoro tech remote focalizzata. Indicizziamo ogni ruolo remote-friendly delle principali job board pubbliche e lo pubblichiamo in 7 lingue con copertura SEO completa. Il tuo annuncio sponsorizzato cavalca questa distribuzione.',
    ctaPrimary: 'Pubblica un lavoro — da 49 $',
    ctaSecondary: 'Parliamone',
    statLabels: [
      'Lavori remote indicizzati oggi',
      'Pagine SEO sul sito',
      'Fonti pubbliche aggregate ogni giorno',
      'Lingue (en · fr · es · de · pt · it · pl)',
    ],
    whyH2: 'Perché pubblicare qui invece di LinkedIn o Indeed',
    whyIntro:
      'Le board generaliste seppelliscono il tuo ruolo remote sotto 400 lavori in ufficio. Noi facciamo il contrario: tutto quello che elenchiamo è remote, e l\'audience si è autoselezionata per quello.',
    why: [
      { title: 'Audience 100% remote', body: 'Nessun pendolare, nessun turista della relocation. Ogni visitatore è arrivato qui cercando esplicitamente remote. Il tuo annuncio lo leggono candidati già convinti.' },
      { title: 'Portata multilingue di default', body: 'Il tuo ruolo appare automaticamente nelle pagine en, fr, es, de, pt, it e pl, con hreflang corretto. Raggiungi candidati europei senza pagare sette board diverse.' },
      { title: 'SEO che compone', body: '6.300+ pagine statiche indicizzate da Google. Il tuo slot sponsorizzato eredita questo traffico invece di morire dopo 48h come sulla maggior parte delle board.' },
      { title: 'Mix molto ingegneristico', body: 'Audience prevalentemente senior IC: backend, frontend, fullstack, devops, data, ML. Esattamente i profili difficili da sourcare sulle piattaforme generaliste.' },
      { title: 'Distribuzione triangolata', body: 'Co-promozione su slowmadly.com (guide nomadi digitali) e ai-by-job.com (carriere IA). Un post, tre audience.' },
      { title: 'Prezzi che rispettano il test', body: '49 $ per 30 giorni. Nessun contratto annuale, nessuna call commerciale, nessun MSA negoziato. Se funziona, rinnovi. Se no, vai avanti.' },
    ],
    audienceH2: 'Chi sta leggendo il tuo annuncio',
    audienceIntro: 'Snapshot del lato candidato della piattaforma, basato su comportamento di sessione e ricerche ricorrenti.',
    roleMixTitle: 'Mix per ruolo',
    seniorityMixTitle: 'Mix per seniority',
    roleBars: [
      { label: 'Backend / Fullstack', pct: 38 },
      { label: 'Frontend / Mobile', pct: 22 },
      { label: 'Data / ML / IA', pct: 16 },
      { label: 'DevOps / Platform / Security', pct: 11 },
      { label: 'Product / Design', pct: 9 },
      { label: 'Altre tech', pct: 4 },
    ],
    seniorityBars: [
      { label: 'Senior (5+ anni)', pct: 48 },
      { label: 'Mid (2-5 anni)', pct: 31 },
      { label: 'Staff / Principal', pct: 12 },
      { label: 'Junior', pct: 9 },
    ],
    audienceFootnote: (n) =>
      `Portata: candidati connessi da ${n}+ paesi, con le coorti più grandi in Europa Occidentale, Nord America, LATAM e Sud-Est Asiatico.`,
    compareH2: 'Come si confronta uno slot sponsorizzato',
    compareHeaders: ['', 'slateremote.com', 'LinkedIn promosso', 'Indeed sponsorizzato'],
    compareRows: [
      ['Prezzo di partenza', '49 $ / 30 giorni', '300+ $ / 30 giorni', '0,10-1 $ / clic'],
      ['Audience', 'Solo tech remote', 'Tutti i settori', 'Tutti i settori'],
      ['Lingue', '7 (auto)', '1 per post', '1 per post'],
      ['Indicizzazione SEO', 'Pagina statica permanente', 'Dietro login', 'Scade in fretta'],
      ['Call commerciale richiesta', 'No', 'Per enterprise', 'No'],
      ['Tier aggregazione gratis', 'Sì, se sei su Remotive/RemoteOK/etc', 'No', 'No'],
    ],
    pricingH2: 'Prezzi',
    featuredTitle: 'Annuncio in evidenza',
    featuredDuration: '30 giorni',
    featuredBullets: [
      'In cima alla home per 30 giorni',
      'In cima alla pagina del ruolo corrispondente',
      'In cima alla pagina città corrispondente',
      'Evidenziato in tutte le 7 edizioni linguistiche',
    ],
    featuredCta: 'Acquista slot in evidenza',
    sponsoredTitle: 'Posizionamento sponsorizzato',
    sponsoredDuration: 'A settimana',
    perWeek: '/sett',
    sponsoredBullets: [
      'Fissato in cima a ogni pagina rilevante',
      'Tag sponsor distinto',
      'Distribuzione in tutte le lingue',
      'Cancellabile in qualsiasi momento',
    ],
    sponsoredCta: 'Acquista slot sponsorizzato',
    pricingFootnote: (n) =>
      `Già aggregato gratuitamente da una delle nostre ${n} fonti? Il tuo lavoro è online entro 24h senza costi. Lo sponsor compra solo la visibilità sopra.`,
    faqH2: 'Domande comuni',
    faqs: [
      { q: 'In quanto tempo va online il mio post?', a: 'Slot in evidenza e sponsorizzati sono attivi entro 24h dal pagamento. Facciamo una revisione manuale veloce per mantenere alto il livello (no MLM, no crypto-rug, no falso remote).' },
      { q: 'Offrite rimborsi?', a: 'Sì. Se il tuo annuncio ottiene meno di 100 view uniche nei primi 7 giorni, rimborsiamo per intero. Meglio rivederti che mandarti via deluso.' },
      { q: 'Posso tracciare i clic?', a: 'Sì. Possiamo inviarti un\'email settimanale con view, clic sul pulsante Candidati e breakdown per paese. Basta chiedere dopo l\'acquisto.' },
      { q: 'Scrivete voi il testo?', a: 'Se sei bloccato, mandaci dei bullet e lo redigiamo. Senza costi aggiuntivi per i clienti sponsorizzati.' },
      { q: 'E se il mio annuncio è già aggregato?', a: 'Ottimo, è già gratis sul sito. Il tier a pagamento lo promuove solo a slot in evidenza o sponsorizzato, con lo stile evidenziato e il posizionamento in alto.' },
      { q: 'Posso pubblicare ruoli non remote?', a: 'No. La promessa all\'audience è 100% remote-friendly. Ibrido con vincolo di città va bene se lo taggi chiaramente.' },
    ],
    finalH2: 'Quando vuoi.',
    finalBody: 'Un lavoro, un checkout Stripe, zero call commerciali. Online in 24 ore.',
    finalCta: 'Pubblica per 49 $ →',
  },
  pl: {
    metaTitle: 'Zatrudnij zdalny talent tech · dlaczego publikować na slateremote.com',
    metaDescription:
      'Dotrzyj do inżynierów, projektantów, data i kandydatów product szukających już zdalnej pracy. Dystrybucja w 7 językach, 6300+ zaindeksowanych stron, codziennie odświeżana publiczność.',
    eyebrow: 'Dla pracodawców',
    h1: 'Zatrudnij inżynierów, którzy już wybrali zdalną pracę.',
    intro:
      'slateremote.com to wyspecjalizowana sieć zdalnych ofert tech. Indeksujemy każde ogłoszenie remote-friendly z głównych publicznych portali i publikujemy je w 7 językach z pełnym pokryciem SEO. Twoje sponsorowane ogłoszenie jedzie na tej dystrybucji.',
    ctaPrimary: 'Opublikuj ofertę — od 49 $',
    ctaSecondary: 'Porozmawiajmy',
    statLabels: [
      'Zdalne oferty zaindeksowane dziś',
      'Strony SEO w serwisie',
      'Publiczne źródła agregowane codziennie',
      'Języki (en · fr · es · de · pt · it · pl)',
    ],
    whyH2: 'Dlaczego publikować tu zamiast LinkedIn lub Indeed',
    whyIntro:
      'Generyczne portale zakopują twoją zdalną ofertę pod 400 stacjonarnych. My robimy odwrotnie: wszystko co listujemy jest zdalne, a publiczność sama się na to wybrała.',
    why: [
      { title: '100% zdalna publiczność', body: 'Brak dojeżdżających, brak turystów relokacji. Każdy odwiedzający przyszedł szukać zdalnej pracy. Twoją ofertę czytają kandydaci już przekonani.' },
      { title: 'Wielojęzyczny zasięg domyślnie', body: 'Twoja oferta pojawia się automatycznie na stronach en, fr, es, de, pt, it i pl, z poprawnym hreflang. Docierasz do europejskich kandydatów bez płacenia za siedem portali.' },
      { title: 'SEO które się składa', body: '6 300+ statycznych stron zaindeksowanych przez Google. Twój sponsorowany slot dziedziczy ten ruch, zamiast umrzeć po 48 h jak na większości portali.' },
      { title: 'Mocno inżynieryjny miks', body: 'Publiczność z przewagą senior IC: backend, frontend, fullstack, devops, data, ML. Dokładnie te profile, które trudno sourcować na generycznych platformach.' },
      { title: 'Triangulowana dystrybucja', body: 'Cross-promocja na slowmadly.com (poradniki nomadów cyfrowych) i ai-by-job.com (kariery w AI). Jeden post, trzy publiczności.' },
      { title: 'Cena, która szanuje test', body: '49 $ za 30 dni. Brak rocznych kontraktów, brak rozmów handlowych, brak negocjowanego MSA. Jeśli działa, przedłużasz. Jeśli nie, idziesz dalej.' },
    ],
    audienceH2: 'Kto czyta twoje ogłoszenie',
    audienceIntro: 'Migawka strony kandydackiej platformy, oparta na zachowaniu sesji i powracających zapytaniach.',
    roleMixTitle: 'Miks ról',
    seniorityMixTitle: 'Miks senioritetu',
    roleBars: [
      { label: 'Backend / Fullstack', pct: 38 },
      { label: 'Frontend / Mobile', pct: 22 },
      { label: 'Data / ML / AI', pct: 16 },
      { label: 'DevOps / Platform / Security', pct: 11 },
      { label: 'Product / Design', pct: 9 },
      { label: 'Inne tech', pct: 4 },
    ],
    seniorityBars: [
      { label: 'Senior (5+ lat)', pct: 48 },
      { label: 'Mid (2-5 lat)', pct: 31 },
      { label: 'Staff / Principal', pct: 12 },
      { label: 'Junior', pct: 9 },
    ],
    audienceFootnote: (n) =>
      `Zasięg: kandydaci łączący się z ${n}+ krajów, największe grupy w Europie Zachodniej, Ameryce Północnej, LATAM i Azji Południowo-Wschodniej.`,
    compareH2: 'Jak wypada sponsorowany slot',
    compareHeaders: ['', 'slateremote.com', 'LinkedIn promoted', 'Indeed sponsored'],
    compareRows: [
      ['Cena startowa', '49 $ / 30 dni', '300+ $ / 30 dni', '0,10-1 $ / klik'],
      ['Publiczność', 'Tylko zdalne tech', 'Wszystkie branże', 'Wszystkie branże'],
      ['Języki', '7 (auto)', '1 na post', '1 na post'],
      ['Indeksacja SEO', 'Trwała statyczna strona', 'Za loginem', 'Szybko wygasa'],
      ['Wymagana rozmowa handlowa', 'Nie', 'Dla enterprise', 'Nie'],
      ['Darmowy tier agregacji', 'Tak, jeśli jesteś na Remotive/RemoteOK/itp', 'Nie', 'Nie'],
    ],
    pricingH2: 'Cennik',
    featuredTitle: 'Wyróżnione ogłoszenie',
    featuredDuration: '30 dni',
    featuredBullets: [
      'Góra strony głównej przez 30 dni',
      'Góra strony pasującej roli',
      'Góra strony pasującego miasta',
      'Wyróżnione we wszystkich 7 wersjach językowych',
    ],
    featuredCta: 'Kup wyróżniony slot',
    sponsoredTitle: 'Sponsorowane miejsce',
    sponsoredDuration: 'Tygodniowo',
    perWeek: '/tydz',
    sponsoredBullets: [
      'Przypięte na samej górze każdej istotnej strony',
      'Wyraźna etykieta sponsora',
      'Dystrybucja we wszystkich językach',
      'Można anulować w dowolnym momencie',
    ],
    sponsoredCta: 'Kup sponsorowany slot',
    pricingFootnote: (n) =>
      `Już zagregowane bezpłatnie z jednego z naszych ${n} źródeł? Twoja oferta jest online w 24h bez kosztu. Sponsoring kupuje tylko widoczność na górze.`,
    faqH2: 'Częste pytania',
    faqs: [
      { q: 'Jak szybko mój post jest online?', a: 'Wyróżnione i sponsorowane sloty są aktywne w ciągu 24h od płatności. Robimy szybką ręczną weryfikację, by utrzymać wysoki poziom (bez MLM, bez crypto-rugów, bez fałszywego remote).' },
      { q: 'Czy zwracacie pieniądze?', a: 'Tak. Jeśli twoja oferta ma mniej niż 100 unikalnych wyświetleń w pierwsze 7 dni, zwracamy całą kwotę. Wolimy, żebyś wrócił, niż czuł się oszukany.' },
      { q: 'Czy mogę śledzić kliknięcia?', a: 'Tak. Możemy wysłać ci tygodniowy email z metrykami: wyświetlenia, kliknięcia w przycisk Aplikuj, podział na kraje. Wystarczy poprosić po zakupie.' },
      { q: 'Czy piszecie treść ogłoszenia?', a: 'Jeśli utkniesz, wyślij nam punkty i napiszemy. Bez dodatkowej opłaty dla klientów sponsorowanych.' },
      { q: 'A jeśli moja oferta jest już zagregowana?', a: 'Świetnie, jest już za darmo na stronie. Płatny tier po prostu promuje ją do wyróżnionego lub sponsorowanego slotu, z wyróżniającym się stylem i pozycją na górze.' },
      { q: 'Czy mogę publikować nie-zdalne role?', a: 'Nie. Obietnica dla publiczności to 100% remote-friendly. Hybryda z wymogiem miasta jest OK, jeśli wyraźnie ją oznaczysz.' },
    ],
    finalH2: 'Kiedy jesteś gotów.',
    finalBody: 'Jedna oferta, jeden checkout Stripe, zero rozmów handlowych. Online w 24 godziny.',
    finalCta: 'Opublikuj za 49 $ →',
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
  const meta = readJobs();
  const liveJobs = meta.count;
  const sourceCount = SCRAPERS.length;
  const countryCount = topCountries(500).length;

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
        <Stat big="6,300+" label={c.statLabels[1]} />
        <Stat big={`${sourceCount}`} label={c.statLabels[2]} />
        <Stat big="7" label={c.statLabels[3]} />
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

      <section className="rounded-2xl border border-line bg-paper p-6 md:p-8">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">{c.audienceH2}</h2>
        <p className="text-graphite mt-2 max-w-2xl">{c.audienceIntro}</p>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-muted font-semibold mb-3">{c.roleMixTitle}</h3>
            {c.roleBars.map((b) => (
              <BarRow key={b.label} label={b.label} pct={b.pct} />
            ))}
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-wider text-muted font-semibold mb-3">{c.seniorityMixTitle}</h3>
            {c.seniorityBars.map((b) => (
              <BarRow key={b.label} label={b.label} pct={b.pct} />
            ))}
          </div>
        </div>
        <p className="text-xs text-muted mt-6">{c.audienceFootnote(countryCount)}</p>
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

function BarRow({ label, pct }: { label: string; pct: number }) {
  return (
    <div className="mb-2.5">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-graphite">{label}</span>
        <span className="text-muted">{pct}%</span>
      </div>
      <div className="h-1.5 bg-sand rounded-full overflow-hidden">
        <div className="h-full bg-forest rounded-full" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
