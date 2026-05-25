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

const DICTS: Record<Locale, Dict> = { en, fr, es, de };

export function t(locale: Locale, key: keyof typeof en): string {
  return DICTS[locale][key] ?? en[key] ?? key;
}

export function localePath(locale: Locale, path: string = ''): string {
  const clean = path.replace(/^\/+/, '');
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}
