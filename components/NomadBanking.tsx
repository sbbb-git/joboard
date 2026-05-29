import { AFFILIATE_MAP, wiseForLocale } from '@/lib/affiliates';
import { AffiliateGrid } from './AffiliateCard';
import { AFFILIATE_COPY } from '@/lib/affiliates-i18n';
import type { Locale } from '@/lib/types';

const EU_COUNTRIES = new Set([
  'Portugal', 'Spain', 'Germany', 'France', 'Italy', 'Netherlands', 'Belgium',
  'Ireland', 'Austria', 'Greece', 'Poland', 'Czech Republic', 'Hungary',
  'Sweden', 'Denmark', 'Finland', 'Estonia',
]);

export function NomadBanking({
  context,
  country,
  locale,
}: {
  context?: string;
  country?: string;
  locale?: Locale;
}) {
  // Wise URL adapts to the visitor's currency (USD on en, EUR elsewhere)
  const entries = [wiseForLocale(locale), AFFILIATE_MAP.revolut];
  if (country && EU_COUNTRIES.has(country)) entries.push(AFFILIATE_MAP.qonto);
  const copy = AFFILIATE_COPY[locale ?? 'en'];

  return (
    <AffiliateGrid
      title={copy.bankingTitle}
      intro={copy.bankingIntro(context)}
      entries={entries}
      locale={locale ?? 'en'}
    />
  );
}
