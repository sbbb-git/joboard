import { AFFILIATE_MAP, wiseForLocale } from '@/lib/affiliates';
import { AffiliateGrid } from './AffiliateCard';
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

  return (
    <AffiliateGrid
      title="Banking for remote workers"
      intro={
        context
          ? `Multi-currency tools that work well if you're moving to or earning from ${context}.`
          : 'Multi-currency tools for receiving payments across borders.'
      }
      entries={entries}
    />
  );
}
