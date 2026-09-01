import type { Locale } from './types';

export type HomeCopy = {
  metaTitle: string;
  metaDescription: string;
  badge: (n: number) => string;
  h1a: string;
  h1em: string;
  h1b: string;
  browseJobs: (n: number) => string;
  seeSalary: string;
  stat: { jobs: string; countries: string; companies: string; skills: string; cities: string; guides: string };
  latest: string;
  bentoEyebrow: string;
  bentoTitle: string;
  dailyRefresh: string;
  jobsRightNow: string;
  browseAll: string;
  findStack: string;
  browseBySkillTile: string;
  skillsSub: (n: number) => string;
  exploreSkills: string;
  salaryData: string;
  whatPays: string;
  seeBands: string;
  moveWork: string;
  citiesProfiled: (n: number) => string;
  citiesLink: string;
  freeForever: string;
  browseFilterApply: string;
  skillsEyebrow: string;
  skillsTitle: string;
  allSkills: (n: number) => string;
  citiesEyebrow: string;
  citiesTitle: string;
  allCities: (n: number) => string;
  countryEyebrow: string;
  guidesEyebrow: string;
  allGuides: (n: number) => string;
};

export const HOME: Record<Locale, HomeCopy> = {
  en: {
    metaTitle: 'Remote tech jobs from across the web, refreshed daily',
    metaDescription:
      'Remote engineering, data, design and product jobs aggregated daily from ten public job boards, with salary bands, city guides and skill pages.',
    badge: (n) => `Updated every 24 hours · ${n} active jobs`,
    h1a: 'Find your next ', h1em: 'remote tech role', h1b: ', fresh every day.',
    browseJobs: (n) => `Browse ${n} jobs →`, seeSalary: 'See salary data',
    stat: { jobs: 'active jobs', countries: 'countries', companies: 'companies', skills: 'skills tracked', cities: 'cities profiled', guides: 'long-form guides' },
    latest: 'Latest postings',
    bentoEyebrow: 'Explore the index', bentoTitle: 'Built for the way remote tech actually works',
    dailyRefresh: 'Daily refresh', jobsRightNow: 'jobs in the index right now', browseAll: 'Browse all →',
    findStack: 'Find your stack', browseBySkillTile: 'Browse by skill', skillsSub: (n) => `${n} languages, frameworks, clouds, ML stacks`, exploreSkills: 'Explore skills →',
    salaryData: 'Salary data', whatPays: 'What roles actually pay', seeBands: 'See bands →',
    moveWork: 'Move and work', citiesProfiled: (n) => `${n} cities profiled`, citiesLink: 'Cities →',
    freeForever: 'Free, forever, no signup', browseFilterApply: 'Browse, filter, apply directly.',
    skillsEyebrow: 'Browse by stack', skillsTitle: 'Find jobs by skill', allSkills: (n) => `All ${n} skills →`,
    citiesEyebrow: 'Live and work anywhere', citiesTitle: 'Top cities for remote tech workers', allCities: (n) => `All ${n} cities →`,
    countryEyebrow: 'By country',
    guidesEyebrow: 'Read up', allGuides: (n) => `All ${n} guides →`,
  },
  fr: {
    metaTitle: 'Offres tech remote du web entier, mises à jour chaque jour',
    metaDescription:
      "Offres remote en ingénierie, data, design et produit agrégées chaque jour depuis dix job boards publics, avec salaires, guides de villes et compétences.",
    badge: (n) => `Mis à jour toutes les 24h · ${n} offres actives`,
    h1a: 'Trouvez votre prochain ', h1em: 'rôle tech remote', h1b: ', frais chaque jour.',
    browseJobs: (n) => `Parcourir ${n} offres →`, seeSalary: 'Voir les salaires',
    stat: { jobs: 'offres actives', countries: 'pays', companies: 'entreprises', skills: 'compétences suivies', cities: 'villes profilées', guides: 'guides longs' },
    latest: 'Dernières offres',
    bentoEyebrow: "Explorer l'index", bentoTitle: 'Conçu pour la façon dont la tech remote marche vraiment',
    dailyRefresh: 'Refresh quotidien', jobsRightNow: "offres dans l'index en ce moment", browseAll: 'Tout parcourir →',
    findStack: 'Trouvez votre stack', browseBySkillTile: 'Parcourir par compétence', skillsSub: (n) => `${n} langages, frameworks, clouds, stacks ML`, exploreSkills: 'Explorer les compétences →',
    salaryData: 'Données salariales', whatPays: 'Ce que les rôles paient vraiment', seeBands: 'Voir les fourchettes →',
    moveWork: 'Bouger et travailler', citiesProfiled: (n) => `${n} villes profilées`, citiesLink: 'Villes →',
    freeForever: 'Gratuit, pour toujours, sans inscription', browseFilterApply: 'Parcourez, filtrez, postulez directement.',
    skillsEyebrow: 'Parcourir par stack', skillsTitle: 'Trouver des offres par compétence', allSkills: (n) => `Les ${n} compétences →`,
    citiesEyebrow: 'Vivre et travailler partout', citiesTitle: 'Top villes pour travailleurs tech remote', allCities: (n) => `Les ${n} villes →`,
    countryEyebrow: 'Par pays',
    guidesEyebrow: 'À lire', allGuides: (n) => `Les ${n} guides →`,
  },
  es: {
    metaTitle: 'Empleos tech remotos de toda la web, actualizados cada día',
    metaDescription:
      'Empleos remotos de ingeniería, datos, diseño y producto agregados a diario desde diez portales públicos, con salarios, guías de ciudades y skills.',
    badge: (n) => `Actualizado cada 24h · ${n} empleos activos`,
    h1a: 'Encuentra tu próximo ', h1em: 'rol tech remoto', h1b: ', fresco cada día.',
    browseJobs: (n) => `Ver ${n} empleos →`, seeSalary: 'Ver datos de salario',
    stat: { jobs: 'empleos activos', countries: 'países', companies: 'empresas', skills: 'skills seguidas', cities: 'ciudades perfiladas', guides: 'guías largas' },
    latest: 'Últimas ofertas',
    bentoEyebrow: 'Explorar el índice', bentoTitle: 'Construido para cómo funciona realmente la tech remota',
    dailyRefresh: 'Refresh diario', jobsRightNow: 'empleos en el índice ahora mismo', browseAll: 'Ver todo →',
    findStack: 'Encuentra tu stack', browseBySkillTile: 'Buscar por skill', skillsSub: (n) => `${n} lenguajes, frameworks, clouds, stacks ML`, exploreSkills: 'Explorar skills →',
    salaryData: 'Datos de salario', whatPays: 'Lo que los roles pagan de verdad', seeBands: 'Ver bandas →',
    moveWork: 'Múevete y trabaja', citiesProfiled: (n) => `${n} ciudades perfiladas`, citiesLink: 'Ciudades →',
    freeForever: 'Gratis, para siempre, sin registro', browseFilterApply: 'Navega, filtra, aplica directamente.',
    skillsEyebrow: 'Buscar por stack', skillsTitle: 'Encuentra empleos por skill', allSkills: (n) => `Las ${n} skills →`,
    citiesEyebrow: 'Vive y trabaja donde sea', citiesTitle: 'Top ciudades para trabajadores tech remotos', allCities: (n) => `Las ${n} ciudades →`,
    countryEyebrow: 'Por país',
    guidesEyebrow: 'Para leer', allGuides: (n) => `Las ${n} guías →`,
  },
  de: {
    metaTitle: 'Remote-Tech-Jobs aus dem ganzen Web, täglich aktualisiert',
    metaDescription:
      'Remote-Jobs in Engineering, Data, Design und Product, täglich aus zehn öffentlichen Jobbörsen aggregiert, mit Gehaltsbändern, Städte- und Skill-Seiten.',
    badge: (n) => `Alle 24h aktualisiert · ${n} aktive Jobs`,
    h1a: 'Finden Sie Ihre nächste ', h1em: 'Remote-Tech-Rolle', h1b: ', täglich frisch.',
    browseJobs: (n) => `${n} Jobs durchsuchen →`, seeSalary: 'Gehaltsdaten ansehen',
    stat: { jobs: 'aktive Jobs', countries: 'Länder', companies: 'Unternehmen', skills: 'Skills erfasst', cities: 'Städte profiliert', guides: 'ausführliche Guides' },
    latest: 'Neueste Stellen',
    bentoEyebrow: 'Index erkunden', bentoTitle: 'Gebaut für die Art, wie Remote-Tech wirklich funktioniert',
    dailyRefresh: 'Täglicher Refresh', jobsRightNow: 'Jobs gerade im Index', browseAll: 'Alle durchsuchen →',
    findStack: 'Finden Sie Ihren Stack', browseBySkillTile: 'Nach Skill durchsuchen', skillsSub: (n) => `${n} Sprachen, Frameworks, Clouds, ML-Stacks`, exploreSkills: 'Skills erkunden →',
    salaryData: 'Gehaltsdaten', whatPays: 'Was Rollen wirklich zahlen', seeBands: 'Bänder ansehen →',
    moveWork: 'Umziehen und arbeiten', citiesProfiled: (n) => `${n} Städte profiliert`, citiesLink: 'Städte →',
    freeForever: 'Kostenlos, für immer, ohne Anmeldung', browseFilterApply: 'Durchsuchen, filtern, direkt bewerben.',
    skillsEyebrow: 'Nach Stack durchsuchen', skillsTitle: 'Jobs nach Skill finden', allSkills: (n) => `Alle ${n} Skills →`,
    citiesEyebrow: 'Überall leben und arbeiten', citiesTitle: 'Top-Städte für Remote-Tech-Worker', allCities: (n) => `Alle ${n} Städte →`,
    countryEyebrow: 'Nach Land',
    guidesEyebrow: 'Zum Nachlesen', allGuides: (n) => `Alle ${n} Guides →`,
  },
  pt: {
    metaTitle: 'Vagas tech remotas de toda a web, atualizadas todos os dias',
    metaDescription:
      'Vagas remotas de engenharia, dados, design e produto agregadas diariamente de dez portais públicos, com faixas salariais, guias de cidades e skills.',
    badge: (n) => `Atualizado a cada 24h · ${n} vagas ativas`,
    h1a: 'Encontre sua próxima ', h1em: 'vaga tech remota', h1b: ', fresca todo dia.',
    browseJobs: (n) => `Ver ${n} vagas →`, seeSalary: 'Ver dados de salário',
    stat: { jobs: 'vagas ativas', countries: 'países', companies: 'empresas', skills: 'skills acompanhadas', cities: 'cidades perfiladas', guides: 'guias longos' },
    latest: 'Últimas vagas',
    bentoEyebrow: 'Explorar o índice', bentoTitle: 'Construído para como o tech remoto realmente funciona',
    dailyRefresh: 'Refresh diário', jobsRightNow: 'vagas no índice agora', browseAll: 'Ver tudo →',
    findStack: 'Encontre seu stack', browseBySkillTile: 'Buscar por skill', skillsSub: (n) => `${n} linguagens, frameworks, clouds, stacks ML`, exploreSkills: 'Explorar skills →',
    salaryData: 'Dados de salário', whatPays: 'O que as vagas realmente pagam', seeBands: 'Ver faixas →',
    moveWork: 'Mude e trabalhe', citiesProfiled: (n) => `${n} cidades perfiladas`, citiesLink: 'Cidades →',
    freeForever: 'Grátis, para sempre, sem cadastro', browseFilterApply: 'Navegue, filtre, candidate-se direto.',
    skillsEyebrow: 'Buscar por stack', skillsTitle: 'Encontre vagas por skill', allSkills: (n) => `Todas as ${n} skills →`,
    citiesEyebrow: 'Viva e trabalhe em qualquer lugar', citiesTitle: 'Top cidades para trabalhadores tech remotos', allCities: (n) => `Todas as ${n} cidades →`,
    countryEyebrow: 'Por país',
    guidesEyebrow: 'Para ler', allGuides: (n) => `Todos os ${n} guias →`,
  },
  it: {
    metaTitle: 'Lavori tech remote da tutto il web, aggiornati ogni giorno',
    metaDescription:
      'Lavori remote in ingegneria, dati, design e prodotto aggregati ogni giorno da dieci job board pubbliche, con fasce salariali, guide città e skill.',
    badge: (n) => `Aggiornato ogni 24h · ${n} lavori attivi`,
    h1a: 'Trova il tuo prossimo ', h1em: 'ruolo tech remote', h1b: ', fresco ogni giorno.',
    browseJobs: (n) => `Sfoglia ${n} lavori →`, seeSalary: 'Vedi dati stipendi',
    stat: { jobs: 'lavori attivi', countries: 'paesi', companies: 'aziende', skills: 'skill tracciate', cities: 'città profilate', guides: 'guide lunghe' },
    latest: 'Ultimi annunci',
    bentoEyebrow: "Esplora l'indice", bentoTitle: 'Costruito per come funziona davvero il tech remote',
    dailyRefresh: 'Refresh giornaliero', jobsRightNow: "lavori nell'indice in questo momento", browseAll: 'Sfoglia tutto →',
    findStack: 'Trova il tuo stack', browseBySkillTile: 'Sfoglia per skill', skillsSub: (n) => `${n} linguaggi, framework, cloud, stack ML`, exploreSkills: 'Esplora le skill →',
    salaryData: 'Dati stipendi', whatPays: 'Quanto pagano davvero i ruoli', seeBands: 'Vedi le fasce →',
    moveWork: 'Spostati e lavora', citiesProfiled: (n) => `${n} città profilate`, citiesLink: 'Città →',
    freeForever: 'Gratis, per sempre, senza registrazione', browseFilterApply: 'Sfoglia, filtra, candidati direttamente.',
    skillsEyebrow: 'Sfoglia per stack', skillsTitle: 'Trova lavori per skill', allSkills: (n) => `Tutte le ${n} skill →`,
    citiesEyebrow: 'Vivi e lavora ovunque', citiesTitle: 'Top città per lavoratori tech remote', allCities: (n) => `Tutte le ${n} città →`,
    countryEyebrow: 'Per paese',
    guidesEyebrow: 'Da leggere', allGuides: (n) => `Tutte le ${n} guide →`,
  },
  pl: {
    metaTitle: 'Zdalne oferty tech z całej sieci, aktualizowane codziennie',
    metaDescription:
      'Zdalne oferty w inżynierii, danych, designie i produkcie, agregowane codziennie z dziesięciu publicznych portali, z widełkami płac i profilami miast.',
    badge: (n) => `Aktualizowane co 24h · ${n} aktywnych ofert`,
    h1a: 'Znajdź swoją następną ', h1em: 'zdalną rolę tech', h1b: ', świeżą każdego dnia.',
    browseJobs: (n) => `Przeglądaj ${n} ofert →`, seeSalary: 'Zobacz dane o płacach',
    stat: { jobs: 'aktywnych ofert', countries: 'krajów', companies: 'firm', skills: 'śledzonych umiejętności', cities: 'profilowanych miast', guides: 'długich poradników' },
    latest: 'Najnowsze oferty',
    bentoEyebrow: 'Eksploruj indeks', bentoTitle: 'Zbudowane pod to, jak naprawdę działa zdalny tech',
    dailyRefresh: 'Codzienny refresh', jobsRightNow: 'ofert w indeksie teraz', browseAll: 'Przeglądaj wszystko →',
    findStack: 'Znajdź swój stack', browseBySkillTile: 'Przeglądaj po umiejętności', skillsSub: (n) => `${n} języków, frameworków, chmur, stacków ML`, exploreSkills: 'Eksploruj umiejętności →',
    salaryData: 'Dane o płacach', whatPays: 'Ile role naprawdę płacą', seeBands: 'Zobacz widełki →',
    moveWork: 'Przenieś się i pracuj', citiesProfiled: (n) => `${n} profilowanych miast`, citiesLink: 'Miasta →',
    freeForever: 'Za darmo, na zawsze, bez rejestracji', browseFilterApply: 'Przeglądaj, filtruj, aplikuj bezpośrednio.',
    skillsEyebrow: 'Przeglądaj po stacku', skillsTitle: 'Znajdź oferty po umiejętności', allSkills: (n) => `Wszystkie ${n} umiejętności →`,
    citiesEyebrow: 'Żyj i pracuj gdziekolwiek', citiesTitle: 'Top miasta dla zdalnych pracowników tech', allCities: (n) => `Wszystkie ${n} miast →`,
    countryEyebrow: 'Według kraju',
    guidesEyebrow: 'Do poczytania', allGuides: (n) => `Wszystkie ${n} poradniki →`,
  },
};
