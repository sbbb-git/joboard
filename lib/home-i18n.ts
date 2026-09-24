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
  stat: { jobs: string; countries: string; companies: string; guides: string };
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
  freeForever: string;
  browseFilterApply: string;
  skillsEyebrow: string;
  skillsTitle: string;
  allSkills: (n: number) => string;
  countryEyebrow: string;
  guidesEyebrow: string;
  allGuides: (n: number) => string;
};

export const HOME: Record<Locale, HomeCopy> = {
  en: {
    metaTitle: 'Remote tech jobs from across the web, refreshed weekly',
    metaDescription:
      'Remote engineering, data, design and product jobs aggregated weekly from ten public job boards, with salary bands, company pages and guides for remote workers.',
    badge: (n) => `Updated weekly · ${n} active jobs`,
    h1a: 'Find your next ', h1em: 'remote tech role', h1b: ', fresh every week.',
    browseJobs: (n) => `Browse ${n} jobs →`, seeSalary: 'See salary data',
    stat: { jobs: 'active jobs', countries: 'countries', companies: 'companies', guides: 'long-form guides' },
    latest: 'Latest postings',
    bentoEyebrow: 'Explore the index', bentoTitle: 'Built for the way remote tech actually works',
    dailyRefresh: 'Weekly refresh', jobsRightNow: 'jobs in the index right now', browseAll: 'Browse all →',
    findStack: 'Find your stack', browseBySkillTile: 'Browse by skill', skillsSub: (n) => `${n} languages, frameworks, clouds, ML stacks`, exploreSkills: 'Explore skills →',
    salaryData: 'Salary data', whatPays: 'What roles actually pay', seeBands: 'See bands →',
    freeForever: 'Free, forever, no signup', browseFilterApply: 'Browse, filter, apply directly.',
    skillsEyebrow: 'Browse by stack', skillsTitle: 'Find jobs by skill', allSkills: (n) => `All ${n} skills →`,
    countryEyebrow: 'By country',
    guidesEyebrow: 'Read up', allGuides: (n) => `All ${n} guides →`,
  },
  fr: {
    metaTitle: 'Offres tech remote du web entier, mises à jour chaque semaine',
    metaDescription:
      "Offres remote en ingénierie, data, design et produit agrégées chaque semaine depuis dix job boards publics, avec fourchettes salariales, fiches entreprises et guides pour travailler en remote.",
    badge: (n) => `Mis à jour chaque semaine · ${n} offres actives`,
    h1a: 'Trouvez votre prochain ', h1em: 'rôle tech remote', h1b: ', frais chaque semaine.',
    browseJobs: (n) => `Parcourir ${n} offres →`, seeSalary: 'Voir les salaires',
    stat: { jobs: 'offres actives', countries: 'pays', companies: 'entreprises', guides: 'guides longs' },
    latest: 'Dernières offres',
    bentoEyebrow: "Explorer l'index", bentoTitle: 'Conçu pour la façon dont la tech remote marche vraiment',
    dailyRefresh: 'Refresh hebdomadaire', jobsRightNow: "offres dans l'index en ce moment", browseAll: 'Tout parcourir →',
    findStack: 'Trouvez votre stack', browseBySkillTile: 'Parcourir par compétence', skillsSub: (n) => `${n} langages, frameworks, clouds, stacks ML`, exploreSkills: 'Explorer les compétences →',
    salaryData: 'Données salariales', whatPays: 'Ce que les rôles paient vraiment', seeBands: 'Voir les fourchettes →',
    freeForever: 'Gratuit, pour toujours, sans inscription', browseFilterApply: 'Parcourez, filtrez, postulez directement.',
    skillsEyebrow: 'Parcourir par stack', skillsTitle: 'Trouver des offres par compétence', allSkills: (n) => `Les ${n} compétences →`,
    countryEyebrow: 'Par pays',
    guidesEyebrow: 'À lire', allGuides: (n) => `Les ${n} guides →`,
  },
  de: {
    metaTitle: 'Remote-Tech-Jobs aus dem ganzen Web, wöchentlich aktualisiert',
    metaDescription:
      'Remote-Jobs in Engineering, Data, Design und Product, wöchentlich aus zehn öffentlichen Jobbörsen aggregiert, mit Gehaltsbändern, Unternehmensseiten und Guides für Remote-Arbeit.',
    badge: (n) => `Wöchentlich aktualisiert · ${n} aktive Jobs`,
    h1a: 'Finden Sie Ihre nächste ', h1em: 'Remote-Tech-Rolle', h1b: ', wöchentlich frisch.',
    browseJobs: (n) => `${n} Jobs durchsuchen →`, seeSalary: 'Gehaltsdaten ansehen',
    stat: { jobs: 'aktive Jobs', countries: 'Länder', companies: 'Unternehmen', guides: 'ausführliche Guides' },
    latest: 'Neueste Stellen',
    bentoEyebrow: 'Index erkunden', bentoTitle: 'Gebaut für die Art, wie Remote-Tech wirklich funktioniert',
    dailyRefresh: 'Wöchentlicher Refresh', jobsRightNow: 'Jobs gerade im Index', browseAll: 'Alle durchsuchen →',
    findStack: 'Finden Sie Ihren Stack', browseBySkillTile: 'Nach Skill durchsuchen', skillsSub: (n) => `${n} Sprachen, Frameworks, Clouds, ML-Stacks`, exploreSkills: 'Skills erkunden →',
    salaryData: 'Gehaltsdaten', whatPays: 'Was Rollen wirklich zahlen', seeBands: 'Bänder ansehen →',
    freeForever: 'Kostenlos, für immer, ohne Anmeldung', browseFilterApply: 'Durchsuchen, filtern, direkt bewerben.',
    skillsEyebrow: 'Nach Stack durchsuchen', skillsTitle: 'Jobs nach Skill finden', allSkills: (n) => `Alle ${n} Skills →`,
    countryEyebrow: 'Nach Land',
    guidesEyebrow: 'Zum Nachlesen', allGuides: (n) => `Alle ${n} Guides →`,
  },
};
