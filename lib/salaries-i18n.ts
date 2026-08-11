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
  es: {
    metaTitle: 'Benchmarks de salarios tech remotos por rol y país',
    metaDescription: (r, c) =>
      `Rangos salariales medianos y percentiles para ${r} roles tech remotos en ${c} mercados de contratación, calculados desde ofertas activas. Gratis, actualizado a diario.`,
    eyebrow: 'Salarios',
    h1: 'Benchmarks de salarios tech remotos',
    intro: (r, c) =>
      `Bandas salariales para ${r} roles tech remotos en ${c} grandes mercados de contratación, calculadas desde los rangos publicados en las ofertas activas de nuestro índice.`,
    roleCard: (role) => `Salarios remotos de ${role}`,
    median: (amount, n) => `Mediana ${amount} · basado en ${n} ofertas`,
    noData: 'Aún no hay suficientes datos salariales publicados.',
    byCountryHeading: 'Salarios por país',
    byCountryIntro:
      'Cada rol tiene también un desglose por país. Estos enlaces llevan al benchmark de desarrollador; el resto de roles tiene el mismo conjunto de países.',
    methodologyHeading: 'Metodología',
    methodology:
      'Tomamos el punto medio de cada oferta que publica una banda salarial y calculamos percentiles desde la distribución ordenada de esos puntos. Las ofertas sin salario publicado se excluyen. No se aplica conversión de divisa; cada moneda se calcula por separado.',
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
  pt: {
    metaTitle: 'Benchmarks de salários tech remotos por cargo e país',
    metaDescription: (r, c) =>
      `Faixas salariais medianas e percentis para ${r} cargos tech remotos em ${c} mercados de contratação, calculadas a partir de vagas ativas. Grátis, atualizado todo dia.`,
    eyebrow: 'Salários',
    h1: 'Benchmarks de salários tech remotos',
    intro: (r, c) =>
      `Faixas salariais para ${r} cargos tech remotos em ${c} grandes mercados de contratação, calculadas a partir das faixas publicadas nas vagas ativas do nosso índice.`,
    roleCard: (role) => `Salários remotos de ${role}`,
    median: (amount, n) => `Mediana ${amount} · com base em ${n} vagas`,
    noData: 'Ainda não há dados salariais publicados suficientes.',
    byCountryHeading: 'Salários por país',
    byCountryIntro:
      'Cada cargo também tem uma análise por país. Estes links levam ao benchmark de desenvolvedor; os demais cargos têm o mesmo conjunto de países.',
    methodologyHeading: 'Metodologia',
    methodology:
      'Usamos o ponto médio de cada vaga que publica uma faixa salarial e calculamos percentis a partir da distribuição ordenada desses pontos. Vagas sem salário publicado são excluídas. Nenhuma conversão de moeda é aplicada; cada moeda é calculada isoladamente.',
  },
  it: {
    metaTitle: 'Benchmark degli stipendi tech remote per ruolo e paese',
    metaDescription: (r, c) =>
      `Fasce di stipendio mediane e percentili per ${r} ruoli tech remote in ${c} mercati del lavoro, calcolate dalle offerte attive. Gratuito, aggiornato ogni giorno.`,
    eyebrow: 'Stipendi',
    h1: 'Benchmark degli stipendi tech remote',
    intro: (r, c) =>
      `Fasce di stipendio per ${r} ruoli tech remote in ${c} grandi mercati del lavoro, calcolate dalle fasce pubblicate sulle offerte attive del nostro indice.`,
    roleCard: (role) => `Stipendi remote per ${role}`,
    median: (amount, n) => `Mediana ${amount} · basato su ${n} offerte`,
    noData: 'Non ci sono ancora abbastanza dati sugli stipendi pubblicati.',
    byCountryHeading: 'Stipendi per paese',
    byCountryIntro:
      "Ogni ruolo ha anche un'analisi per paese. Questi link portano al benchmark per sviluppatore; tutti gli altri ruoli hanno lo stesso insieme di paesi.",
    methodologyHeading: 'Metodologia',
    methodology:
      'Prendiamo il punto medio di ogni offerta che pubblica una fascia di stipendio, poi calcoliamo i percentili dalla distribuzione ordinata di quei punti. Le offerte senza stipendio pubblicato sono escluse. Non viene applicata alcuna conversione di valuta; ogni valuta è calcolata separatamente.',
  },
  pl: {
    metaTitle: 'Benchmarki wynagrodzeń zdalnych tech według roli i kraju',
    metaDescription: (r, c) =>
      `Mediany i percentyle widełek płacowych dla ${r} zdalnych ról tech w ${c} rynkach rekrutacyjnych, liczone z aktywnych ofert. Bezpłatnie, aktualizowane codziennie.`,
    eyebrow: 'Wynagrodzenia',
    h1: 'Benchmarki wynagrodzeń zdalnych tech',
    intro: (r, c) =>
      `Widełki płacowe dla ${r} zdalnych ról tech w ${c} największych rynkach rekrutacyjnych, liczone z widełek publikowanych w aktywnych ofertach w naszym indeksie.`,
    roleCard: (role) => `Zdalne wynagrodzenia: ${role}`,
    median: (amount, n) => `Mediana ${amount} · na podstawie ${n} ofert`,
    noData: 'Wciąż za mało opublikowanych danych o wynagrodzeniach.',
    byCountryHeading: 'Wynagrodzenia według kraju',
    byCountryIntro:
      'Każda rola ma też podział na kraje. Te odnośniki prowadzą do benchmarku programisty; pozostałe role mają ten sam zestaw krajów.',
    methodologyHeading: 'Metodologia',
    methodology:
      'Bierzemy punkt środkowy każdej oferty publikującej widełki płacowe, a następnie liczymy percentyle z posortowanego rozkładu tych punktów. Oferty bez opublikowanego wynagrodzenia są pomijane. Nie stosujemy przeliczania walut; każda waluta liczona jest osobno.',
  },
};
