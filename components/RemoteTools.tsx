import { affiliatesByCategory } from '@/lib/affiliates';
import { AffiliateGrid } from './AffiliateCard';
import { AFFILIATE_COPY } from '@/lib/affiliates-i18n';
import type { Locale } from '@/lib/types';

export function RemoteTools({ locale = 'en' }: { locale?: Locale }) {
  const entries = affiliatesByCategory(
    'newsletter',
    'productivity',
    'community',
    'talent',
    'ai',
  );
  const copy = AFFILIATE_COPY[locale];
  return (
    <AffiliateGrid
      title={copy.toolsTitle}
      intro={copy.toolsIntro}
      entries={entries}
      locale={locale}
    />
  );
}
