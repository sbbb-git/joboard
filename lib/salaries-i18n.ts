import type { Locale } from './types';

// Kept in sync with TOP_COUNTRIES in app/[lang]/salaries/[role]/[country].
export const SALARY_COUNTRIES = [
  'united-states',
  'united-kingdom',
  'germany',
  'france',
  'spain',
  'portugal',
  'netherlands',
  'canada',
  'mexico',
  'brazil',
  'india',
  'australia',
];

type SalariesIndexCopy = {
  metaTitle: string;
  metaDescription: (roles: number, countries: number) => string;
  eyebrow: string;
  h1: string;
  intro: (roles: number, countries: number) => string;
  roleCard: (role: string) => string;
  median: (amount: string, n: number) => string;
  noData: string;
  byCountryHeading: string;
  byCountryIntro: string;
  methodologyHeading: string;
  methodology: string;
};

export const SALARIES_INDEX_I18N: Record<Locale, SalariesIndexCopy> = {
  en: {
    metaTitle: 'Remote tech salary benchmarks by role and country',
    metaDescription: (r, c) =>
      `Median, average and percentile salary ranges for ${r} remote tech roles across ${c} hiring markets, computed live from current job listings. Free, updated daily.`,
    eyebrow: 'Salaries',
    h1: 'Remote tech salary benchmarks',
    intro: (r, c) =>
      `Salary bands for ${r} remote tech roles across ${c} major hiring markets, computed from the salary ranges published on live listings in our index.`,
    roleCard: (role) => `Remote ${role} salaries`,
    median: (amount, n) => `Median ${amount} · based on ${n} listings`,
    noData: 'Not enough published salary data yet.',
    byCountryHeading: 'Salaries by country',
    byCountryIntro:
      'Each role also has a per-country breakdown. These link through to the developer benchmark; every other role has the same country set.',
    methodologyHeading: 'Methodology',
    methodology:
      'We take the midpoint of every posting that publishes a salary band, then compute percentiles from the sorted distribution of those midpoints. Listings without a published salary are excluded. No currency conversion is applied; each currency is computed in isolation.',
  },
  fr: {
    metaTitle: 'Benchmarks de salaires tech remote par rôle et pays',
    metaDescription: (r, c) =>
      `Fourchettes salariales médianes et percentiles pour ${r} rôles tech remote sur ${c} marchés du recrutement, calculées depuis les offres actives. Gratuit, mis à jour chaque jour.`,
    eyebrow: 'Salaires',
    h1: 'Benchmarks de salaires tech remote',
    intro: (r, c) =>
      `Fourchettes salariales pour ${r} rôles tech remote sur ${c} grands marchés du recrutement, calculées depuis les fourchettes publiées sur les offres actives de notre index.`,
    roleCard: (role) => `Salaires remote ${role}`,
    median: (amount, n) => `Médiane ${amount} · basé sur ${n} offres`,
    noData: 'Pas encore assez de données salariales publiées.',
    byCountryHeading: 'Salaires par pays',
    byCountryIntro:
      "Chaque rôle a aussi une ventilation par pays. Ces liens pointent vers le benchmark développeur ; tous les autres rôles ont le même jeu de pays.",
    methodologyHeading: 'Méthodologie',
    methodology:
      "Nous prenons le point médian de chaque offre publiant une fourchette salariale, puis calculons les percentiles depuis la distribution triée de ces points. Les offres sans salaire publié sont exclues. Aucune conversion de devise n'est appliquée ; chaque devise est calculée isolément.",
  },
  de: {
    metaTitle: 'Remote-Tech-Gehalts-Benchmarks nach Rolle und Land',
    metaDescription: (r, c) =>
      `Median-, Durchschnitts- und Perzentil-Gehaltsspannen für ${r} Remote-Tech-Rollen in ${c} Einstellungsmärkten, live aus aktuellen Stellenanzeigen berechnet. Täglich aktualisiert.`,
    eyebrow: 'Gehälter',
    h1: 'Remote-Tech-Gehalts-Benchmarks',
    intro: (r, c) =>
      `Gehaltsspannen für ${r} Remote-Tech-Rollen in ${c} großen Einstellungsmärkten, berechnet aus den veröffentlichten Spannen der aktiven Anzeigen in unserem Index.`,
    roleCard: (role) => `Remote-Gehälter für ${role}`,
    median: (amount, n) => `Median ${amount} · basierend auf ${n} Anzeigen`,
    noData: 'Noch nicht genügend veröffentlichte Gehaltsdaten.',
    byCountryHeading: 'Gehälter nach Land',
    byCountryIntro:
      'Jede Rolle hat zusätzlich eine Aufschlüsselung nach Ländern. Diese Links führen zum Entwickler-Benchmark; alle anderen Rollen haben dieselbe Länderauswahl.',
    methodologyHeading: 'Methodik',
    methodology:
      'Wir nehmen den Mittelwert jeder Anzeige, die eine Gehaltsspanne veröffentlicht, und berechnen Perzentile aus der sortierten Verteilung dieser Mittelwerte. Anzeigen ohne veröffentlichtes Gehalt werden ausgeschlossen. Es findet keine Währungsumrechnung statt; jede Währung wird isoliert berechnet.',
  },
};
