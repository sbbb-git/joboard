import type { Locale } from './types';
import { fr } from './guide-bodies/fr';
import { es } from './guide-bodies/es';
import { de } from './guide-bodies/de';
import { pt } from './guide-bodies/pt';
import { it } from './guide-bodies/it';
import { pl } from './guide-bodies/pl';

export type GuideBody = {
  body: string;
  faqs?: Array<{ q: string; a: string }>;
};

// Translated guide bodies + FAQs. English stays canonical in lib/guides.ts.
// Each locale file is produced per language; missing slugs fall back to English.
const BODIES: Partial<Record<Locale, Record<string, GuideBody>>> = {
  fr,
  es,
  de,
  pt,
  it,
  pl,
};

export function tGuideBody(slug: string, locale: Locale, fallback: string): string {
  if (locale === 'en') return fallback;
  return BODIES[locale]?.[slug]?.body ?? fallback;
}

export function tGuideFaqs(
  slug: string,
  locale: Locale,
  fallback?: Array<{ q: string; a: string }>,
): Array<{ q: string; a: string }> | undefined {
  if (locale === 'en') return fallback;
  return BODIES[locale]?.[slug]?.faqs ?? fallback;
}
