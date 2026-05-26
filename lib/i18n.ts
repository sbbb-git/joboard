import { DEFAULT_LOCALE, LOCALES, type Locale } from './types';

export { LOCALES, DEFAULT_LOCALE };

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as string[]).includes(value);
}

type Dict = Record<string, string>;

const en: Dict = {
  'site.tagline': 'Remote tech jobs from across the web, refreshed daily.',
  'site.intro':
    'A curated index of remote engineering, data, design and product roles, aggregated from the public APIs of the eight largest remote job boards.',
  'nav.jobs': 'Jobs',
  'nav.companies': 'Companies',
  'nav.salaries': 'Salaries',
  'nav.locations': 'Locations',
  'nav.guides': 'Guides',
  'cta.apply': 'Apply on company site',
  'cta.viewAll': 'View all jobs',
  'label.posted': 'Posted',
  'label.salary': 'Salary',
  'label.remote': 'Remote',
  'label.seniority': 'Seniority',
  'label.source': 'Source',
  'label.updated': 'Updated',
  'list.empty': 'No jobs match this filter yet. Check back tomorrow.',
  'footer.disclaimer':
    'slateremote.com indexes publicly listed jobs. Apply directly on the employer website.',
  'footer.refreshed': 'Index refreshed',
};

const fr: Dict = {
  'site.tagline': 'Les offres tech remote du web, mises à jour chaque jour.',
  'site.intro':
    "Un index curé d'offres d'ingénierie, data, design et produit en remote, agrégé depuis les APIs publiques des huit principaux job boards.",
  'nav.jobs': 'Offres',
  'nav.companies': 'Entreprises',
  'nav.salaries': 'Salaires',
  'nav.locations': 'Pays',
  'nav.guides': 'Guides',
  'cta.apply': "Postuler sur le site de l'entreprise",
  'cta.viewAll': 'Voir toutes les offres',
  'label.posted': 'Publiée',
  'label.salary': 'Salaire',
  'label.remote': 'Remote',
  'label.seniority': 'Niveau',
  'label.source': 'Source',
  'label.updated': 'Mis à jour',
  'list.empty': "Aucune offre pour ce filtre pour l'instant. Revenez demain.",
  'footer.disclaimer':
    "slateremote.com indexe des offres publiquement publiées. Postulez directement sur le site de l'employeur.",
  'footer.refreshed': 'Index actualisé',
};

const es: Dict = {
  'site.tagline': 'Empleos tech remotos de toda la web, actualizados cada día.',
  'site.intro':
    'Un índice curado de puestos remotos de ingeniería, datos, diseño y producto, agregado desde las APIs públicas de los ocho mayores job boards.',
  'nav.jobs': 'Empleos',
  'nav.companies': 'Empresas',
  'nav.salaries': 'Salarios',
  'nav.locations': 'Países',
  'nav.guides': 'Guías',
  'cta.apply': 'Aplicar en el sitio de la empresa',
  'cta.viewAll': 'Ver todos los empleos',
  'label.posted': 'Publicada',
  'label.salary': 'Salario',
  'label.remote': 'Remoto',
  'label.seniority': 'Nivel',
  'label.source': 'Fuente',
  'label.updated': 'Actualizado',
  'list.empty': 'Aún no hay ofertas para este filtro. Vuelve mañana.',
  'footer.disclaimer':
    'slateremote.com indexa empleos publicados públicamente. Postúlate directamente en el sitio del empleador.',
  'footer.refreshed': 'Índice actualizado',
};

const de: Dict = {
  'site.tagline': 'Remote Tech Jobs aus dem ganzen Web, täglich aktualisiert.',
  'site.intro':
    'Ein kuratierter Index von Remote-Stellen in Engineering, Data, Design und Product, aggregiert aus den öffentlichen APIs der acht größten Remote Job Boards.',
  'nav.jobs': 'Jobs',
  'nav.companies': 'Unternehmen',
  'nav.salaries': 'Gehälter',
  'nav.locations': 'Länder',
  'nav.guides': 'Guides',
  'cta.apply': 'Auf der Unternehmensseite bewerben',
  'cta.viewAll': 'Alle Jobs ansehen',
  'label.posted': 'Veröffentlicht',
  'label.salary': 'Gehalt',
  'label.remote': 'Remote',
  'label.seniority': 'Level',
  'label.source': 'Quelle',
  'label.updated': 'Aktualisiert',
  'list.empty': 'Noch keine Stellen für diesen Filter. Morgen vorbeischauen.',
  'footer.disclaimer':
    'slateremote.com indexiert öffentlich veröffentlichte Stellen. Bewerben Sie sich direkt auf der Arbeitgeberseite.',
  'footer.refreshed': 'Index aktualisiert',
};

const pt: Dict = {
  'site.tagline': 'Empregos tech remotos da web inteira, atualizados todos os dias.',
  'site.intro':
    'Um índice curado de vagas remotas de engenharia, dados, design e produto, agregadas das APIs públicas dos oito maiores job boards.',
  'nav.jobs': 'Vagas',
  'nav.companies': 'Empresas',
  'nav.salaries': 'Salários',
  'nav.locations': 'Países',
  'nav.guides': 'Guias',
  'cta.apply': 'Candidatar-se no site da empresa',
  'cta.viewAll': 'Ver todas as vagas',
  'label.posted': 'Publicada',
  'label.salary': 'Salário',
  'label.remote': 'Remoto',
  'label.seniority': 'Senioridade',
  'label.source': 'Fonte',
  'label.updated': 'Atualizado',
  'list.empty': 'Nenhuma vaga corresponde a este filtro por enquanto. Volte amanhã.',
  'footer.disclaimer':
    'slateremote.com indexa vagas publicadas publicamente. Candidate-se diretamente no site do empregador.',
  'footer.refreshed': 'Índice atualizado',
};

const it: Dict = {
  'site.tagline': 'Lavori tech remoti da tutto il web, aggiornati ogni giorno.',
  'site.intro':
    'Un indice curato di ruoli remoti di engineering, data, design e prodotto, aggregato dalle API pubbliche delle otto principali job board.',
  'nav.jobs': 'Lavori',
  'nav.companies': 'Aziende',
  'nav.salaries': 'Stipendi',
  'nav.locations': 'Paesi',
  'nav.guides': 'Guide',
  'cta.apply': 'Candidati sul sito aziendale',
  'cta.viewAll': 'Vedi tutti i lavori',
  'label.posted': 'Pubblicata',
  'label.salary': 'Stipendio',
  'label.remote': 'Remoto',
  'label.seniority': 'Livello',
  'label.source': 'Fonte',
  'label.updated': 'Aggiornato',
  'list.empty': 'Nessun lavoro corrisponde a questo filtro per ora. Torna domani.',
  'footer.disclaimer':
    'slateremote.com indicizza lavori pubblicamente elencati. Candidati direttamente sul sito del datore di lavoro.',
  'footer.refreshed': 'Indice aggiornato',
};

const pl: Dict = {
  'site.tagline': 'Zdalne prace tech z całej sieci, aktualizowane codziennie.',
  'site.intro':
    'Wyselekcjonowany indeks zdalnych stanowisk inżynierskich, data, design i produktowych, agregowany z publicznych API ośmiu największych portali pracy.',
  'nav.jobs': 'Praca',
  'nav.companies': 'Firmy',
  'nav.salaries': 'Wynagrodzenia',
  'nav.locations': 'Kraje',
  'nav.guides': 'Poradniki',
  'cta.apply': 'Aplikuj na stronie firmy',
  'cta.viewAll': 'Zobacz wszystkie oferty',
  'label.posted': 'Opublikowano',
  'label.salary': 'Wynagrodzenie',
  'label.remote': 'Zdalna',
  'label.seniority': 'Poziom',
  'label.source': 'Źródło',
  'label.updated': 'Zaktualizowano',
  'list.empty': 'Brak ofert dla tego filtra. Zajrzyj jutro.',
  'footer.disclaimer':
    'slateremote.com indeksuje publicznie opublikowane oferty. Aplikuj bezpośrednio na stronie pracodawcy.',
  'footer.refreshed': 'Indeks zaktualizowany',
};

const DICTS: Record<Locale, Dict> = { en, fr, es, de, pt, it, pl };

export function t(locale: Locale, key: keyof typeof en): string {
  return DICTS[locale][key] ?? en[key] ?? key;
}

export function localePath(locale: Locale, path: string = ''): string {
  const clean = path.replace(/^\/+/, '');
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}
