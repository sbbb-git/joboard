import { AFFILIATE_MAP } from '@/lib/affiliates';
import { AffiliateGrid } from './AffiliateCard';

// "Earn with AI" angle: Mercor (paid AI evaluation) + Claude (working tool).
// Best fit on AI skill pages, ML/AI role page, and AI-themed guides.

export function EarnWithAi() {
  return (
    <AffiliateGrid
      title="Earn with AI (or build with it)"
      intro="Two options if AI is in the loop: get paid by Mercor to evaluate model outputs, or work alongside Claude on your own product."
      entries={[AFFILIATE_MAP.mercor, AFFILIATE_MAP.claude]}
    />
  );
}
