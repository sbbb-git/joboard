// Single source of truth for affiliate placements across slateremote.com.
// Add a program here, reference its slug from a placement component, done.

export type Currency = 'cash' | 'credit';

export interface AffiliateEntry {
  slug: string;
  name: string;
  url: string;
  /** Short pitch used as a one-liner under the name */
  blurb: string;
  /** CTA verb on the button */
  cta: string;
  /** What the commission looks like, for the disclosure page */
  payout: string;
  /** Coarse currency: real money vs in-app credits */
  payoutType: Currency;
  /** Loose category for filtering */
  category:
    | 'banking'
    | 'insurance'
    | 'privacy'
    | 'newsletter'
    | 'productivity'
    | 'ai'
    | 'community'
    | 'talent'
    | 'voice'
    | 'shopping'
    | 'investing'
    | 'mobility'
    | 'travel'
    | 'misc';
}

export const AFFILIATES: AffiliateEntry[] = [
  // ─── Banking ───────────────────────────────────────────────
  {
    slug: 'wise',
    name: 'Wise',
    url: 'https://wise.prf.hn/click/camref:1100l5KwDi',
    blurb:
      'Real exchange rate, IBANs in 8+ currencies. The default account for getting paid in USD or EUR from anywhere.',
    cta: 'Open free account',
    payout: 'Variable per signup (Impact)',
    payoutType: 'cash',
    category: 'banking',
  },
  {
    slug: 'revolut',
    name: 'Revolut',
    url: 'https://revolut.com/referral/?referral-code=sacha5bp%21MAY2-26-AR-TR5DDH1-H1&geo-redirect',
    blurb:
      'EU-based all-in-one account: currency exchange, virtual cards, savings vaults. Strong fit for EU-resident remote workers.',
    cta: 'Open free account',
    payout: '€10-100 per referral',
    payoutType: 'cash',
    category: 'banking',
  },
  {
    slug: 'qonto',
    name: 'Qonto',
    url: 'https://app.affilae.com/p/click/69a078a4-2709',
    blurb:
      'Business banking for freelancers and startups across the EU. Receipts, expense management, integrated accounting.',
    cta: 'Open business account',
    payout: '€60-100 per business account',
    payoutType: 'cash',
    category: 'banking',
  },

  // ─── Insurance ─────────────────────────────────────────────
  {
    slug: 'safetywing',
    name: 'SafetyWing',
    url: 'https://safetywing.com/?referenceID=26533496&utm_source=26533496&utm_medium=Ambassador',
    blurb:
      'Health and travel insurance designed for nomads. Subscription that follows you across borders, covers 180+ countries.',
    cta: 'Get covered',
    payout: '10% recurring',
    payoutType: 'cash',
    category: 'insurance',
  },

  // ─── Privacy ───────────────────────────────────────────────
  {
    slug: 'nordvpn',
    name: 'NordVPN',
    url: 'https://refer-nordvpn.com/duxeAtWzEDy',
    blurb:
      'Premium VPN with 6000+ servers worldwide. Useful for public Wi-Fi at coworking spaces and for accessing region-locked tools.',
    cta: 'Get NordVPN',
    payout: '40-100% new, 30% renewal',
    payoutType: 'cash',
    category: 'privacy',
  },

  // ─── Newsletter & email ───────────────────────────────────
  {
    slug: 'beehiiv',
    name: 'Beehiiv',
    url: 'https://www.beehiiv.com/?via=sacha-bitoun',
    blurb:
      'The platform we use for our own newsletter. Built for monetised writing, no monthly fee on the starter tier.',
    cta: 'Start a newsletter',
    payout: '50% recurring (12 months)',
    payoutType: 'cash',
    category: 'newsletter',
  },
  {
    slug: 'aweber',
    name: 'AWeber',
    url: 'https://www.aweber.com/easy-email.htm?id=560652',
    blurb:
      'Established email marketing platform with strong deliverability. Free up to 500 subscribers, 365-day cookie.',
    cta: 'Try AWeber',
    payout: '30% recurring (365d cookie)',
    payoutType: 'cash',
    category: 'newsletter',
  },

  // ─── AI & productivity ────────────────────────────────────
  {
    slug: 'claude',
    name: 'Claude',
    url: 'https://claude.ai/referral/zUyyYBl9ZQ',
    blurb:
      'The LLM we use to draft our content, debug our scrapers, and prep applications. Best long-context model in 2026.',
    cta: 'Try Claude',
    payout: 'Bonus per referral',
    payoutType: 'cash',
    category: 'ai',
  },
  {
    slug: 'fireflies',
    name: 'Fireflies',
    url: 'https://fireflies.ai/?fpr=sacha61',
    blurb:
      'Records, transcribes and summarises every meeting automatically. Async-friendly: skip the call, read the summary.',
    cta: 'Try free',
    payout: '30% recurring',
    payoutType: 'cash',
    category: 'productivity',
  },

  // ─── Voice AI ─────────────────────────────────────────────
  {
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    url: 'https://try.elevenlabs.io/x3g7rn9eiuq9',
    blurb:
      'Industry-leading voice synthesis. Useful for product narration, podcasts, and accessibility on remote products.',
    cta: 'Try ElevenLabs',
    payout: '20% recurring',
    payoutType: 'cash',
    category: 'voice',
  },
  {
    slug: 'speechify',
    name: 'Speechify',
    url: 'https://share.speechify.com/mzTUJxt',
    blurb:
      'Text-to-speech reader. Listen to docs, articles, and books while commuting or working out.',
    cta: 'Try Speechify',
    payout: '50% (90-day cookie)',
    payoutType: 'cash',
    category: 'voice',
  },
  {
    slug: 'murf',
    name: 'Murf.ai',
    url: 'https://get.murf.ai/vurkutbp9bpv',
    blurb:
      'AI voiceover platform with 120+ voices for product demos, training videos and presentations.',
    cta: 'Try Murf',
    payout: '20% recurring',
    payoutType: 'cash',
    category: 'voice',
  },

  // ─── Earn-with-AI / talent ───────────────────────────────
  {
    slug: 'mercor',
    name: 'Mercor',
    url: 'https://t.mercor.com/sk2JJ',
    blurb:
      'Get paid to evaluate AI model outputs. Vetted experts earn $30-$100/hour reviewing prompts, code, and reasoning.',
    cta: 'Apply to Mercor',
    payout: 'Bonus per successful signup',
    payoutType: 'cash',
    category: 'talent',
  },
  {
    slug: 'braintrust',
    name: 'Braintrust',
    url: 'https://www.usebraintrust.com/r/sacha67/',
    blurb:
      'Top-tier freelance engineering talent network. Build a profile once, get matched to vetted client engagements.',
    cta: 'Join Braintrust',
    payout: 'Bonus per hire',
    payoutType: 'cash',
    category: 'talent',
  },

  // ─── Community ────────────────────────────────────────────
  {
    slug: 'skool',
    name: 'Skool',
    url: 'https://www.skool.com/signup?ref=ed047124b59a477596ccc32e3c786ee7',
    blurb:
      'Run a paid community with built-in courses, events and a gamified leaderboard. Used by many remote tech educators.',
    cta: 'Start a community',
    payout: '40% recurring',
    payoutType: 'cash',
    category: 'community',
  },

  // ─── Shopping / home office ──────────────────────────────
  {
    slug: 'amazon-fr',
    name: 'Amazon (FR)',
    url: 'https://amzn.to/4v8i8tB',
    blurb:
      'Standard marketplace for ergonomic gear, monitors, microphones and cables every remote worker ends up buying.',
    cta: 'Browse on Amazon',
    payout: '1-12% per category',
    payoutType: 'cash',
    category: 'shopping',
  },

  // ─── Investing ────────────────────────────────────────────
  {
    slug: 'esketit',
    name: 'Esketit',
    url: 'https://esketit.com/registration/?promo=R1005651463',
    blurb:
      'P2P lending platform with 8-12% returns. Pair with a remote income stream to diversify beyond your local economy.',
    cta: 'See Esketit',
    payout: 'P2P referral bonus',
    payoutType: 'cash',
    category: 'investing',
  },
  {
    slug: 'enerfip',
    name: 'Enerfip',
    url: 'https://enerfip.fr/?ref=SB221ENF',
    blurb:
      'French crowdfunding platform for renewable energy projects. Long-horizon yield play for EU-resident workers.',
    cta: 'Browse projects',
    payout: 'Referral bonus',
    payoutType: 'cash',
    category: 'investing',
  },
];

export const AFFILIATE_MAP: Record<string, AffiliateEntry> = Object.fromEntries(
  AFFILIATES.map((a) => [a.slug, a]),
);

export function affiliatesByCategory(...cats: AffiliateEntry['category'][]): AffiliateEntry[] {
  return AFFILIATES.filter((a) => cats.includes(a.category));
}
