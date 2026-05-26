import { affiliatesByCategory } from '@/lib/affiliates';
import { AffiliateGrid } from './AffiliateCard';

export function RemoteTools() {
  const entries = affiliatesByCategory(
    'newsletter',
    'productivity',
    'community',
    'talent',
    'ai',
  );
  return (
    <AffiliateGrid
      title="Tools remote workers actually use"
      intro="Software we run our own stack on, plus the better picks we recommend to remote engineers around us."
      entries={entries}
    />
  );
}
