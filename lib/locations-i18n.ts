import type { Locale } from './types';

type LocationsIndexCopy = {
  metaTitle: string;
  metaDescription: (n: number) => string;
  eyebrow: string;
  h1: string;
  intro: (n: number) => string;
  jobCount: (n: number) => string;
};

export const LOCATIONS_INDEX_I18N: Record<Locale, LocationsIndexCopy> = {
  en: {
    metaTitle: 'Remote tech jobs by country',
    metaDescription: (n) =>
      `Browse remote engineering, data, design and product roles by hiring country across ${n} markets. Aggregated from public job board APIs and updated every week.`,
    eyebrow: 'Countries',
    h1: 'Remote tech jobs by country',
    intro: (n) =>
      `${n} countries with open remote tech roles in the index. Pick a market to see which companies hire candidates based there.`,
    jobCount: (n) => `${n} open ${n === 1 ? 'role' : 'roles'}`,
  },
  fr: {
    metaTitle: 'Offres tech remote par pays',
    metaDescription: (n) =>
      `Parcourez les offres remote en ingénierie, data, design et produit par pays de recrutement sur ${n} marchés. Agrégées depuis des APIs publiques, mises à jour chaque semaine.`,
    eyebrow: 'Pays',
    h1: 'Offres tech remote par pays',
    intro: (n) =>
      `${n} pays avec des postes tech remote ouverts dans l'index. Choisissez un marché pour voir les entreprises qui recrutent sur place.`,
    jobCount: (n) => `${n} ${n === 1 ? 'poste ouvert' : 'postes ouverts'}`,
  },
  de: {
    metaTitle: 'Remote-Tech-Jobs nach Land',
    metaDescription: (n) =>
      `Remote-Stellen in Engineering, Data, Design und Product nach Einstellungsland in ${n} Märkten durchsuchen. Aus öffentlichen Job-APIs aggregiert, wöchentlich aktualisiert.`,
    eyebrow: 'Länder',
    h1: 'Remote-Tech-Jobs nach Land',
    intro: (n) =>
      `${n} Länder mit offenen Remote-Tech-Stellen im Index. Wählen Sie einen Markt, um zu sehen, welche Unternehmen dort ansässige Kandidaten einstellen.`,
    jobCount: (n) => `${n} offene ${n === 1 ? 'Stelle' : 'Stellen'}`,
  },
};
