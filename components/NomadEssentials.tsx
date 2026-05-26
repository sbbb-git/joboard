import { AFFILIATE_MAP } from '@/lib/affiliates';
import { AffiliateGrid } from './AffiliateCard';

// Insurance + privacy bundle for city pages and visa guides.
// Two of the highest-LTV affiliate categories for the nomad audience.

export function NomadEssentials({ city }: { city?: string }) {
  return (
    <AffiliateGrid
      title="Essentials for working from anywhere"
      intro={
        city
          ? `Two things you want sorted before you start working from ${city}: health insurance that follows you, and a VPN that handles public Wi-Fi.`
          : 'Two things you want sorted when you work from anywhere: portable insurance and a reliable VPN.'
      }
      entries={[AFFILIATE_MAP.safetywing, AFFILIATE_MAP.nordvpn]}
    />
  );
}
