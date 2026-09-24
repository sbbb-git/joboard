import type { Locale } from './types';
import { SISTER_NOMAD, SISTER_AI } from './sister-sites';

export interface NetworkSite {
  key: string;
  name: string;
  domain: string;
  url: string;
  /** Content language of the destination, surfaced so a visitor on a
      non-matching locale is not sent to a page they cannot read. */
  contentLang: 'en' | 'fr';
  category: 'jobs' | 'tools' | 'business';
}

export const NETWORK_SITES: NetworkSite[] = [
  {
    key: 'slowmadly',
    name: SISTER_NOMAD.name,
    domain: SISTER_NOMAD.domain,
    url: SISTER_NOMAD.url,
    contentLang: 'en',
    category: 'jobs',
  },
  {
    key: 'aibyjob',
    name: SISTER_AI.name,
    domain: SISTER_AI.domain,
    url: SISTER_AI.url,
    contentLang: 'en',
    category: 'tools',
  },
  {
    key: 'shiftplanner',
    name: 'ShiftPlanner',
    domain: 'shiftplanner.eu',
    url: 'https://shiftplanner.eu',
    contentLang: 'en',
    category: 'tools',
  },
  {
    key: 'talentcare',
    name: 'TalentCare Santé',
    domain: 'talentcaresante.fr',
    url: 'https://talentcaresante.fr',
    contentLang: 'fr',
    category: 'jobs',
  },
  {
    key: 'opticds',
    name: 'Opti-CDS',
    domain: 'opti-cds.fr',
    url: 'https://opti-cds.fr',
    contentLang: 'fr',
    category: 'business',
  },
  {
    key: 'sabico',
    name: 'sabi&co',
    domain: 'sabi-co.fr',
    url: 'https://sabi-co.fr',
    contentLang: 'fr',
    category: 'business',
  },
  {
    key: 'coincheur',
    name: 'Coincheur',
    domain: 'coincheur.fr',
    url: 'https://coincheur.fr',
    contentLang: 'fr',
    category: 'tools',
  },
];

type NetworkCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  groups: Record<NetworkSite['category'], string>;
  frenchOnly: string;
  visit: string;
  /** One honest sentence per site. These describe what each site actually
      does, so the link is useful to a reader rather than an anchor drop. */
  taglines: Record<string, string>;
};

export const NETWORK_I18N: Record<Locale, NetworkCopy> = {
  en: {
    metaTitle: 'Our network of sites for remote workers and employers',
    metaDescription:
      'The other sites we build and run: remote job guides, AI tool directories, team shift planning, healthcare recruitment in France and business advisory for small companies.',
    eyebrow: 'Network',
    h1: 'Our network',
    intro:
      'slateremote.com is one of several sites we build and run. The others below cover neighbouring ground: work tooling, recruitment in other sectors, and advisory for the small companies that do the hiring. Several publish in French only, marked as such.',
    groups: {
      jobs: 'Jobs and recruitment',
      tools: 'Tools and software',
      business: 'Business and advisory',
    },
    frenchOnly: 'French language',
    visit: 'Visit',
    taglines: {
      slowmadly: 'Country guides for nomads who stay a while: visas, cost of living and where to settle for a season.',
      aibyjob: 'A directory of the best AI tools for each job, organised by role and published in seven languages.',
      shiftplanner: 'Shift and rota planning for distributed teams, with AI assignment that respects each person’s stated availability.',
      talentcare: 'A medical recruitment agency in France, connecting doctors, dentists, midwives and paramedics with health structures that are hiring.',
      opticds: 'Advisory for French health centres: grant recovery, physician recruitment, financial audits and day to day operational management.',
      sabico: 'Strategy and finance advisory for small and mid-sized French companies: part-time CFO work, fundraising, grants and M&A.',
      coincheur: 'A free browser game to learn and practise coinche, the French trick-taking card game, against adjustable AI opponents.',
    },
  },
  fr: {
    metaTitle: 'Notre réseau de sites pour le travail à distance',
    metaDescription:
      'Les autres sites que nous éditons : guides du travail à distance, annuaires d’outils IA, planification d’équipes, recrutement médical en France et conseil aux dirigeants de PME.',
    eyebrow: 'Réseau',
    h1: 'Notre réseau',
    intro:
      'slateremote.com fait partie de plusieurs sites que nous éditons. Ceux qui suivent couvrent des terrains voisins : l’outillage de travail, le recrutement dans d’autres secteurs, et le conseil aux entreprises qui recrutent. Plusieurs ne publient qu’en français, c’est indiqué.',
    groups: {
      jobs: 'Emploi et recrutement',
      tools: 'Outils et logiciels',
      business: 'Entreprise et conseil',
    },
    frenchOnly: 'En français',
    visit: 'Visiter',
    taglines: {
      slowmadly: 'Des guides pays pour les nomades qui restent un moment : visas, coût de la vie et où poser ses valises pour une saison.',
      aibyjob: 'Un annuaire des meilleurs outils IA métier par métier, classés par rôle et publié en sept langues.',
      shiftplanner: 'La planification des plannings et des gardes pour équipes réparties, avec une affectation par IA qui respecte les disponibilités déclarées.',
      talentcare: 'Un cabinet de recrutement médical en France, qui met en relation médecins, dentistes, sages-femmes et paramédicaux avec les structures de santé qui recrutent.',
      opticds: 'Le conseil aux centres de santé : récupération de subventions, recrutement de praticiens, audits financiers et gestion opérationnelle au quotidien.',
      sabico: 'Le conseil en stratégie et finance pour les PME : direction financière à temps partagé, levée de fonds, subventions et opérations de cession.',
      coincheur: 'Un jeu gratuit dans le navigateur pour apprendre et travailler la coinche face à des adversaires IA réglables.',
    },
  },
  de: {
    metaTitle: 'Unser Netzwerk an Seiten rund um Remote-Arbeit',
    metaDescription:
      'Die anderen Seiten, die wir betreiben: Remote-Work-Guides, KI-Tool-Verzeichnisse, Schichtplanung, medizinische Personalvermittlung in Frankreich und Beratung für kleine Unternehmen.',
    eyebrow: 'Netzwerk',
    h1: 'Unser Netzwerk',
    intro:
      'slateremote.com ist eine von mehreren Seiten, die wir betreiben. Die folgenden decken angrenzende Themen ab: Arbeitswerkzeuge, Recruiting in anderen Branchen und Beratung für die Unternehmen, die einstellen. Mehrere erscheinen nur auf Französisch, das ist gekennzeichnet.',
    groups: {
      jobs: 'Jobs und Recruiting',
      tools: 'Tools und Software',
      business: 'Unternehmen und Beratung',
    },
    frenchOnly: 'Französischsprachig',
    visit: 'Besuchen',
    taglines: {
      slowmadly: 'Länderguides für Nomaden, die länger bleiben: Visa, Lebenshaltungskosten und wo man sich für eine Saison niederlässt.',
      aibyjob: 'Ein Verzeichnis der besten KI-Tools für jeden Beruf, nach Rolle geordnet und in sieben Sprachen veröffentlicht.',
      shiftplanner: 'Schicht- und Dienstplanung für verteilte Teams, mit KI-Zuteilung, die die angegebene Verfügbarkeit jeder Person berücksichtigt.',
      talentcare: 'Eine medizinische Personalvermittlung in Frankreich, die Ärzte, Zahnärzte, Hebammen und Pflegekräfte mit einstellenden Einrichtungen zusammenbringt.',
      opticds: 'Beratung für französische Gesundheitszentren: Fördermittel, Ärztegewinnung, Finanzprüfungen und operatives Management.',
      sabico: 'Strategie- und Finanzberatung für französische Mittelständler: CFO auf Zeit, Fundraising, Fördermittel und Unternehmensverkäufe.',
      coincheur: 'Ein kostenloses Browserspiel, um Coinche, das französische Stichkartenspiel, gegen einstellbare KI-Gegner zu lernen und zu üben.',
    },
  },
};
