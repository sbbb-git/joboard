import { AFFILIATE_MAP } from '@/lib/affiliates';
import { AffiliateGrid } from './AffiliateCard';
import { AFFILIATE_COPY } from '@/lib/affiliates-i18n';
import type { Locale } from '@/lib/types';

// "Earn with AI" angle: Mercor (paid AI evaluation) + Claude (working tool).
// Best fit on AI skill pages, ML/AI role page, and AI-themed guides.

export function EarnWithAi({ locale = 'en' }: { locale?: Locale }) {
  const copy = AFFILIATE_COPY[locale];
  return (
    <AffiliateGrid
      title={copy.earnTitle}
      intro={copy.earnIntro}
      entries={[AFFILIATE_MAP.mercor, AFFILIATE_MAP.claude]}
      locale={locale}
    />
  );
}
