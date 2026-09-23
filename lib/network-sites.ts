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
  es: {
    metaTitle: 'Nuestra red de sitios para el trabajo en remoto',
    metaDescription:
      'Los demás sitios que publicamos: guías de trabajo remoto, directorios de herramientas de IA, planificación de turnos, reclutamiento médico en Francia y asesoría para pymes.',
    eyebrow: 'Red',
    h1: 'Nuestra red',
    intro:
      'slateremote.com es uno de los varios sitios que publicamos. Los siguientes cubren terrenos vecinos: herramientas de trabajo, reclutamiento en otros sectores y asesoría para las empresas que contratan. Varios publican solo en francés, queda indicado.',
    groups: {
      jobs: 'Empleo y reclutamiento',
      tools: 'Herramientas y software',
      business: 'Empresa y asesoría',
    },
    frenchOnly: 'En francés',
    visit: 'Visitar',
    taglines: {
      slowmadly: 'Guías por país para nómadas que se quedan una temporada: visados, coste de vida y dónde instalarse.',
      aibyjob: 'Un directorio de las mejores herramientas de IA para cada oficio, organizado por rol y publicado en siete idiomas.',
      shiftplanner: 'Planificación de turnos para equipos distribuidos, con asignación por IA que respeta la disponibilidad declarada de cada persona.',
      talentcare: 'Una agencia de reclutamiento médico en Francia que conecta médicos, dentistas, matronas y paramédicos con centros de salud que contratan.',
      opticds: 'Asesoría para centros de salud franceses: recuperación de subvenciones, reclutamiento de facultativos, auditorías financieras y gestión operativa.',
      sabico: 'Asesoría de estrategia y finanzas para pymes francesas: dirección financiera a tiempo parcial, captación de fondos, subvenciones y fusiones.',
      coincheur: 'Un juego gratuito en el navegador para aprender y practicar la coinche, juego de cartas francés, contra oponentes de IA ajustables.',
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
  pt: {
    metaTitle: 'A nossa rede de sites sobre trabalho remoto',
    metaDescription:
      'Os outros sites que publicamos: guias de trabalho remoto, diretórios de ferramentas de IA, planeamento de turnos, recrutamento médico em França e consultoria para PME.',
    eyebrow: 'Rede',
    h1: 'A nossa rede',
    intro:
      'O slateremote.com é um de vários sites que publicamos. Os seguintes cobrem terrenos vizinhos: ferramentas de trabalho, recrutamento noutros setores e consultoria para as empresas que contratam. Vários publicam apenas em francês, fica indicado.',
    groups: {
      jobs: 'Emprego e recrutamento',
      tools: 'Ferramentas e software',
      business: 'Empresa e consultoria',
    },
    frenchOnly: 'Em francês',
    visit: 'Visitar',
    taglines: {
      slowmadly: 'Guias por país para nómadas que ficam uma temporada: vistos, custo de vida e onde se instalar.',
      aibyjob: 'Um diretório das melhores ferramentas de IA para cada profissão, organizado por função e publicado em sete línguas.',
      shiftplanner: 'Planeamento de turnos para equipas distribuídas, com atribuição por IA que respeita a disponibilidade declarada de cada pessoa.',
      talentcare: 'Uma agência de recrutamento médico em França que liga médicos, dentistas, parteiras e paramédicos a estruturas de saúde que contratam.',
      opticds: 'Consultoria para centros de saúde franceses: recuperação de subsídios, recrutamento de clínicos, auditorias financeiras e gestão operacional.',
      sabico: 'Consultoria de estratégia e finanças para PME francesas: direção financeira a tempo parcial, angariação de fundos, subsídios e fusões.',
      coincheur: 'Um jogo gratuito no navegador para aprender e praticar coinche, o jogo de cartas francês, contra adversários de IA ajustáveis.',
    },
  },
  it: {
    metaTitle: 'La nostra rete di siti sul lavoro da remoto',
    metaDescription:
      'Gli altri siti che pubblichiamo: guide al lavoro da remoto, directory di strumenti IA, pianificazione dei turni, recruiting medico in Francia e consulenza per le PMI.',
    eyebrow: 'Rete',
    h1: 'La nostra rete',
    intro:
      'slateremote.com è uno dei vari siti che pubblichiamo. Quelli qui sotto coprono terreni vicini: strumenti di lavoro, recruiting in altri settori e consulenza per le aziende che assumono. Diversi pubblicano solo in francese, è indicato.',
    groups: {
      jobs: 'Lavoro e recruiting',
      tools: 'Strumenti e software',
      business: 'Impresa e consulenza',
    },
    frenchOnly: 'In francese',
    visit: 'Visita',
    taglines: {
      slowmadly: 'Guide per paese per nomadi che si fermano a lungo: visti, costo della vita e dove stabilirsi per una stagione.',
      aibyjob: 'Una directory dei migliori strumenti IA per ogni mestiere, ordinata per ruolo e pubblicata in sette lingue.',
      shiftplanner: 'Pianificazione dei turni per team distribuiti, con assegnazione tramite IA che rispetta la disponibilità dichiarata di ciascuno.',
      talentcare: 'Un’agenzia di recruiting medico in Francia che mette in contatto medici, dentisti, ostetriche e paramedici con le strutture che assumono.',
      opticds: 'Consulenza per i centri sanitari francesi: recupero di sovvenzioni, reclutamento di medici, audit finanziari e gestione operativa.',
      sabico: 'Consulenza di strategia e finanza per PMI francesi: direzione finanziaria a tempo parziale, raccolta fondi, sovvenzioni e cessioni.',
      coincheur: 'Un gioco gratuito nel browser per imparare e allenare la coinche, il gioco di carte francese, contro avversari IA regolabili.',
    },
  },
  pl: {
    metaTitle: 'Nasza sieć serwisów o pracy zdalnej',
    metaDescription:
      'Pozostałe serwisy, które prowadzimy: poradniki pracy zdalnej, katalogi narzędzi AI, planowanie zmian, rekrutacja medyczna we Francji i doradztwo dla małych firm.',
    eyebrow: 'Sieć',
    h1: 'Nasza sieć',
    intro:
      'slateremote.com to jeden z kilku serwisów, które prowadzimy. Poniższe obejmują sąsiednie obszary: narzędzia pracy, rekrutację w innych branżach i doradztwo dla firm, które zatrudniają. Kilka publikuje wyłącznie po francusku, jest to oznaczone.',
    groups: {
      jobs: 'Praca i rekrutacja',
      tools: 'Narzędzia i oprogramowanie',
      business: 'Firma i doradztwo',
    },
    frenchOnly: 'Po francusku',
    visit: 'Odwiedź',
    taglines: {
      slowmadly: 'Przewodniki po krajach dla nomadów, którzy zostają na dłużej: wizy, koszty życia i gdzie osiąść na sezon.',
      aibyjob: 'Katalog najlepszych narzędzi AI dla każdego zawodu, uporządkowany według ról i publikowany w siedmiu językach.',
      shiftplanner: 'Planowanie zmian i dyżurów dla rozproszonych zespołów, z przydziałem przez AI respektującym zadeklarowaną dostępność.',
      talentcare: 'Agencja rekrutacji medycznej we Francji, łącząca lekarzy, dentystów, położne i ratowników z placówkami, które zatrudniają.',
      opticds: 'Doradztwo dla francuskich centrów zdrowia: odzyskiwanie dotacji, rekrutacja lekarzy, audyty finansowe i zarządzanie operacyjne.',
      sabico: 'Doradztwo strategiczne i finansowe dla francuskich MŚP: dyrektor finansowy na część etatu, pozyskiwanie kapitału, dotacje i fuzje.',
      coincheur: 'Darmowa gra przeglądarkowa do nauki i ćwiczenia coinche, francuskiej gry karcianej, przeciwko regulowanym przeciwnikom AI.',
    },
  },
};
