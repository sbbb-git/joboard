// Cut from seven locales to three in 2026-09. Search Console showed 87.5% of
// queries in English and 10.6% in German, with zero queries in Polish or
// Italian, yet /pl/ and /it/ pages drew 32% of impressions: Google Jobs was
// picking one of seven identical URLs per posting and sending English-language
// searchers to Polish and Italian chrome (0 clicks on 218 /pl/ impressions).
// French is kept for the owner's market and partner network. The removed
// locales 301 to /en via public/_redirects.
export type Locale = 'en' | 'fr' | 'de';
export const LOCALES: Locale[] = ['en', 'fr', 'de'];
export const DEFAULT_LOCALE: Locale = 'en';
