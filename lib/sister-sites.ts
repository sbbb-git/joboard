import type { Locale } from './types';

export interface SisterSite {
  name: string;
  domain: string;
  url: string;
  tagline: Record<Locale, string>;
}

export const SISTER_NOMAD: SisterSite = {
  name: 'Slowmadly',
  domain: 'slowmadly.com',
  url: 'https://slowmadly.com',
  tagline: {
    en: 'Country guides for nomads who stay a while.',
    fr: 'Des guides pays pour les nomades qui restent un moment.',
    de: 'Länderguides für Nomaden, die länger bleiben.',
  },
};

export const SISTER_AI: SisterSite = {
  name: 'AI by Job',
  domain: 'ai-by-job.com',
  url: 'https://ai-by-job.com',
  tagline: {
    en: 'The best AI tools for every job, in English, French and Spanish.',
    fr: 'Les meilleurs outils IA pour chaque métier, en anglais, français et espagnol.',
    de: 'Die besten KI-Tools für jeden Beruf, auf Englisch, Französisch und Spanisch.',
  },
};

// Locales the sister sites actually publish in (checked 2026-10: both serve
// /en and /fr, and redirect /de to /en). Anything else links straight to the
// English edition instead of through a redirect hop.
const SUPPORTED_LOCALES = new Set(['en', 'fr']);
const DEFAULT_LOCALE = 'en';

function localeSegment(locale?: string | null): string {
  if (!locale) return DEFAULT_LOCALE;
  return SUPPORTED_LOCALES.has(locale) ? locale : DEFAULT_LOCALE;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ─── Slowmadly URL builders ────────────────────────────────
export function slowmadlyHomeUrl(locale?: string | null): string {
  return `${SISTER_NOMAD.url}/${localeSegment(locale)}`;
}

export function slowmadlyCountryUrl(
  country: string | undefined | null,
  locale?: string | null,
): string {
  if (!country) return slowmadlyHomeUrl(locale);
  return `${SISTER_NOMAD.url}/${localeSegment(locale)}/${slugify(country)}`;
}

// ─── AI by Job URL builders ────────────────────────────────
export function aiByJobHomeUrl(locale?: string | null): string {
  return `${SISTER_AI.url}/${localeSegment(locale)}`;
}

export function aiByJobRoleUrl(
  role: string | undefined | null,
  locale?: string | null,
): string {
  if (!role) return aiByJobHomeUrl(locale);
  return `${SISTER_AI.url}/${localeSegment(locale)}/jobs/${slugify(role)}`;
}

export function aiByJobGuidesUrl(locale?: string | null): string {
  return `${SISTER_AI.url}/${localeSegment(locale)}/guides`;
}

export function slowmadlyGuidesUrl(locale?: string | null): string {
  return `${SISTER_NOMAD.url}/${localeSegment(locale)}/guides`;
}
