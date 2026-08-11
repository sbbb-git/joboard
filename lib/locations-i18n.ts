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
      `Browse remote engineering, data, design and product roles by hiring country across ${n} markets. Aggregated from public job board APIs and updated every day.`,
    eyebrow: 'Countries',
    h1: 'Remote tech jobs by country',
    intro: (n) =>
      `${n} countries with open remote tech roles in the index. Pick a market to see which companies hire candidates based there.`,
    jobCount: (n) => `${n} open ${n === 1 ? 'role' : 'roles'}`,
  },
  fr: {
    metaTitle: 'Offres tech remote par pays',
    metaDescription: (n) =>
      `Parcourez les offres remote en ingénierie, data, design et produit par pays de recrutement sur ${n} marchés. Agrégées depuis des APIs publiques, mises à jour chaque jour.`,
    eyebrow: 'Pays',
    h1: 'Offres tech remote par pays',
    intro: (n) =>
      `${n} pays avec des postes tech remote ouverts dans l'index. Choisissez un marché pour voir les entreprises qui recrutent sur place.`,
    jobCount: (n) => `${n} ${n === 1 ? 'poste ouvert' : 'postes ouverts'}`,
  },
  es: {
    metaTitle: 'Empleos tech remotos por país',
    metaDescription: (n) =>
      `Explora puestos remotos de ingeniería, datos, diseño y producto por país de contratación en ${n} mercados. Agregados desde APIs públicas y actualizados cada día.`,
    eyebrow: 'Países',
    h1: 'Empleos tech remotos por país',
    intro: (n) =>
      `${n} países con puestos tech remotos abiertos en el índice. Elige un mercado para ver qué empresas contratan candidatos allí.`,
    jobCount: (n) => `${n} ${n === 1 ? 'puesto abierto' : 'puestos abiertos'}`,
  },
  de: {
    metaTitle: 'Remote-Tech-Jobs nach Land',
    metaDescription: (n) =>
      `Remote-Stellen in Engineering, Data, Design und Product nach Einstellungsland in ${n} Märkten durchsuchen. Aus öffentlichen Job-APIs aggregiert, täglich aktualisiert.`,
    eyebrow: 'Länder',
    h1: 'Remote-Tech-Jobs nach Land',
    intro: (n) =>
      `${n} Länder mit offenen Remote-Tech-Stellen im Index. Wählen Sie einen Markt, um zu sehen, welche Unternehmen dort ansässige Kandidaten einstellen.`,
    jobCount: (n) => `${n} offene ${n === 1 ? 'Stelle' : 'Stellen'}`,
  },
  pt: {
    metaTitle: 'Vagas tech remotas por país',
    metaDescription: (n) =>
      `Navegue vagas remotas de engenharia, dados, design e produto por país de contratação em ${n} mercados. Agregadas de APIs públicas e atualizadas todo dia.`,
    eyebrow: 'Países',
    h1: 'Vagas tech remotas por país',
    intro: (n) =>
      `${n} países com vagas tech remotas abertas no índice. Escolha um mercado para ver quais empresas contratam candidatos baseados lá.`,
    jobCount: (n) => `${n} ${n === 1 ? 'vaga aberta' : 'vagas abertas'}`,
  },
  it: {
    metaTitle: 'Lavori tech remote per paese',
    metaDescription: (n) =>
      `Sfoglia posizioni remote in engineering, data, design e prodotto per paese di assunzione su ${n} mercati. Aggregate da API pubbliche e aggiornate ogni giorno.`,
    eyebrow: 'Paesi',
    h1: 'Lavori tech remote per paese',
    intro: (n) =>
      `${n} paesi con posizioni tech remote aperte nell'indice. Scegli un mercato per vedere quali aziende assumono candidati che risiedono lì.`,
    jobCount: (n) => `${n} ${n === 1 ? 'posizione aperta' : 'posizioni aperte'}`,
  },
  pl: {
    metaTitle: 'Zdalne oferty tech według kraju',
    metaDescription: (n) =>
      `Przeglądaj zdalne oferty inżynierskie, data, design i produktowe według kraju rekrutacji w ${n} rynkach. Agregowane z publicznych API, aktualizowane codziennie.`,
    eyebrow: 'Kraje',
    h1: 'Zdalne oferty tech według kraju',
    intro: (n) =>
      `${n} krajów z otwartymi zdalnymi ofertami tech w indeksie. Wybierz rynek, aby zobaczyć, które firmy zatrudniają kandydatów z danego kraju.`,
    jobCount: (n) => `${n} ${n === 1 ? 'otwarta oferta' : 'otwartych ofert'}`,
  },
};
