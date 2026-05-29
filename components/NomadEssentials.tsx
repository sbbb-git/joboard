import { AFFILIATE_MAP } from '@/lib/affiliates';
import { AffiliateGrid } from './AffiliateCard';
import { AFFILIATE_COPY } from '@/lib/affiliates-i18n';
import type { Locale } from '@/lib/types';

// Insurance + privacy bundle for city pages and visa guides.
// Two of the highest-LTV affiliate categories for the nomad audience.

export function NomadEssentials({ city, locale = 'en' }: { city?: string; locale?: Locale }) {
  const copy = AFFILIATE_COPY[locale];
  return (
    <AffiliateGrid
      title={copy.essentialsTitle}
      intro={copy.essentialsIntro(city)}
      entries={[AFFILIATE_MAP.safetywing, AFFILIATE_MAP.nordvpn]}
      locale={locale}
    />
  );
}
