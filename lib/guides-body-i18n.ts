import type { Locale } from './types';
import { fr } from './guide-bodies/fr';
import { de } from './guide-bodies/de';

export type GuideBody = {
  body: string;
  faqs?: Array<{ q: string; a: string }>;
};

// Translated guide bodies + FAQs. English stays canonical in lib/guides.ts.
// Each locale file is produced per language; missing slugs fall back to English.
const BODIES: Partial<Record<Locale, Record<string, GuideBody>>> = {
  fr,
  de,
};

// English is the source language, so it always has a body. Any other locale
// only has one if the guide was actually translated; without it the page would
// render the English text under a URL that declares itself French or German,
// which is an exact duplicate of the /en/ page wearing the wrong hreflang.
export function hasGuideTranslation(slug: string, locale: Locale): boolean {
  return locale === 'en' || Boolean(BODIES[locale]?.[slug]?.body);
}

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
