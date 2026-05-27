export interface SisterSite {
  name: string;
  domain: string;
  url: string;
  tagline: string;
}

export const SISTER_NOMAD: SisterSite = {
  name: 'Slowmadly',
  domain: 'slowmadly.com',
  url: 'https://slowmadly.com',
  tagline: 'Country guides for nomads who stay a while.',
};

export const SISTER_AI: SisterSite = {
  name: 'AI by Job',
  domain: 'ai-by-job.com',
  url: 'https://ai-by-job.com',
  tagline: 'The best AI tools for every job, in 7 languages.',
};

// Locales the sister network publishes in. If the current visitor is on a
// locale outside this set, we fall back to English on the destination site
// rather than producing a broken URL.
const SUPPORTED_LOCALES = new Set(['en', 'fr', 'es', 'de', 'pt', 'it', 'pl']);
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
