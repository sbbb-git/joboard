import type { Locale, Role } from './types';

// Display labels for roles. Previously every template derived these with
// `slug.replace('-', ' ')`, which produced "ml ai" (and only replaced the
// first hyphen), leaking raw slugs into titles on ~1,500 URLs.
const ROLE_LABELS: Record<Locale, Record<Role, string>> = {
  en: {
    developer: 'developer',
    frontend: 'front-end developer',
    backend: 'back-end developer',
    fullstack: 'full-stack developer',
    mobile: 'mobile developer',
    data: 'data engineer',
    'ml-ai': 'machine learning engineer',
    devops: 'DevOps engineer',
    security: 'security engineer',
    qa: 'QA engineer',
    product: 'product manager',
    design: 'product designer',
  },
  fr: {
    developer: 'développeur',
    frontend: 'développeur front-end',
    backend: 'développeur back-end',
    fullstack: 'développeur full-stack',
    mobile: 'développeur mobile',
    data: 'data engineer',
    'ml-ai': 'ingénieur machine learning',
    devops: 'ingénieur DevOps',
    security: 'ingénieur sécurité',
    qa: 'ingénieur QA',
    product: 'product manager',
    design: 'product designer',
  },
  de: {
    developer: 'Entwickler',
    frontend: 'Frontend-Entwickler',
    backend: 'Backend-Entwickler',
    fullstack: 'Fullstack-Entwickler',
    mobile: 'Mobile-Entwickler',
    data: 'Data Engineer',
    'ml-ai': 'Machine-Learning-Engineer',
    devops: 'DevOps-Engineer',
    security: 'Security-Engineer',
    qa: 'QA-Engineer',
    product: 'Product Manager',
    design: 'Product Designer',
  },
};

export function roleLabel(locale: Locale, role: string): string {
  const byLocale = ROLE_LABELS[locale] ?? ROLE_LABELS.en;
  return byLocale[role as Role] ?? ROLE_LABELS.en[role as Role] ?? role.replace(/-/g, ' ');
}

// Words that stay lowercase inside a country name ("Isle of Man").
const MINOR_WORDS = new Set(['of', 'and', 'the', 'da', 'de', 'do', 'del']);

// "united-states" -> "United States". Country slugs were previously rendered
// as raw lowercase text in titles and headings.
export function countryLabel(slug: string): string {
  return slug
    .split('-')
    .map((word, i) => {
      if (i > 0 && MINOR_WORDS.has(word)) return word;
      if (word.length <= 3 && /^(usa|uk|uae)$/.test(word)) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
