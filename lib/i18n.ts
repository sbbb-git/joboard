import { DEFAULT_LOCALE, LOCALES, type Locale } from './types';

export { LOCALES, DEFAULT_LOCALE };

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as string[]).includes(value);
}

type Dict = Record<string, string>;

const en: Dict = {
  'nav.guides': 'Guides',
  'nav.travel': 'Slow travel guides',
  'footer.disclaimer': 'Some links in our guides are affiliate links. See the disclosure page for details.',
  'footer.glossary': 'Glossary',
  'footer.disclosure': 'Affiliate disclosure',
  'footer.network': 'Our network',
  'footer.section.site': 'Site',
  'footer.basecamp': 'Picking a basecamp?',
  'footer.aiTools': 'Need AI tools?',
  'footer.byline': 'Practical guides for remote tech workers: earning on talent platforms, getting paid across borders, insurance and the tools worth using.',
  '404.title': 'Page not found',
  '404.body': 'This page does not exist. It may have been removed or never existed.',
  '404.home': 'Go home',
  '404.guides': 'Read guides',
};

const fr: Dict = {
  'nav.guides': 'Guides',
  'nav.travel': 'Guides slow travel',
  'footer.disclaimer': 'Certains liens de nos guides sont affiliés. Les détails sont sur la page de divulgation.',
  'footer.glossary': 'Glossaire',
  'footer.disclosure': 'Divulgation affiliés',
  'footer.network': 'Notre réseau',
  'footer.section.site': 'Site',
  'footer.basecamp': 'Choisir un basecamp ?',
  'footer.aiTools': 'Besoin d\'outils IA ?',
  'footer.byline': "Des guides pratiques pour les travailleurs tech à distance : gagner sur les plateformes, se faire payer à l'étranger, assurance et outils utiles.",
  '404.title': 'Page introuvable',
  '404.body': 'Cette page n\'existe pas. Elle a peut-être été supprimée ou n\'a jamais existé.',
  '404.home': 'Accueil',
  '404.guides': 'Lire les guides',
};

const de: Dict = {
  'nav.guides': 'Guides',
  'nav.travel': 'Slow-Travel-Guides',
  'footer.disclaimer': 'Einige Links in unseren Guides sind Affiliate-Links. Details auf der Offenlegungsseite.',
  'footer.glossary': 'Glossar',
  'footer.disclosure': 'Affiliate-Offenlegung',
  'footer.network': 'Unser Netzwerk',
  'footer.section.site': 'Site',
  'footer.basecamp': 'Basecamp wählen?',
  'footer.aiTools': 'KI-Tools nötig?',
  'footer.byline': 'Praktische Guides für Remote-Tech-Worker: Geld verdienen auf Talent-Plattformen, grenzüberschreitend bezahlt werden, Versicherung und nützliche Tools.',
  '404.title': 'Seite nicht gefunden',
  '404.body': 'Diese Seite existiert nicht. Sie wurde möglicherweise entfernt oder hat nie existiert.',
  '404.home': 'Startseite',
  '404.guides': 'Guides lesen',
};

const DICTS: Record<Locale, Dict> = { en, fr, de };

export function t(locale: Locale, key: keyof typeof en): string {
  return DICTS[locale][key] ?? en[key] ?? key;
}

export function localePath(locale: Locale, path: string = ''): string {
  const clean = path.replace(/^\/+/, '');
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}
