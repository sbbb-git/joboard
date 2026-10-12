// Publication date of each guide, as an ISO day.
//
// Derived once from the full git history: the commit that introduced the
// guide's entry in lib/guides.ts, or its scheduled publishedAt when that was
// later. Stored here rather than computed at build time because CI checks
// out a depth-1 clone, where the history is not available.
//
// Used for the Article datePublished, the visible date on the page and the
// sitemap lastmod. A guide without an entry simply carries no date. Add one
// when publishing a new guide.
export const GUIDE_PUBLISHED: Record<string, string> = {
  'ai-engineer-salary-2026': '2026-05-25',
  'appsumo-best-deals-for-developers-2026': '2026-06-01',
  'appsumo-vs-saas-subscription-which-saves-more': '2026-06-01',
  'best-countries-for-remote-tech-workers': '2026-05-25',
  'best-laptops-for-remote-developers': '2026-05-25',
  'claude-prompt-patterns-for-developers': '2026-06-09',
  'digital-nomad-visa-georgia': '2026-05-25',
  'fiverr-buyer-objections-handling-guide': '2026-06-09',
  'fiverr-gig-conversion-optimisation-2026': '2026-06-04',
  'fiverr-gig-seo-ranking-guide': '2026-05-29',
  'fiverr-pro-application-checklist-2026': '2026-06-09',
  'fiverr-profile-that-wins-orders': '2026-05-29',
  'how-much-does-mercor-pay-in-2026': '2026-06-03',
  'how-to-get-accepted-on-mercor': '2026-06-03',
  'how-to-get-your-first-fiverr-order': '2026-05-29',
  'how-to-receive-stripe-payouts-as-non-us': '2026-06-09',
  'how-to-start-on-fiverr-as-a-developer': '2026-05-29',
  'maximize-earnings-on-mercor-as-a-developer': '2026-06-03',
  'mercor-application-timeline-2026': '2026-06-14',
  'mercor-evaluator-quality-rubrics-explained': '2026-06-09',
  'mercor-side-hustle-while-working-full-time': '2026-06-03',
  'mercor-tax-and-payout-guide-2026': '2026-06-03',
  'mercor-vs-scale-vs-surge-ai': '2026-06-03',
  'mercor-vs-tortoise-eval-platforms': '2026-06-09',
  'niche-fiverr-gigs-that-still-pay-in-2026': '2026-06-06',
  'remote-developer-salary-guide': '2026-05-25',
  'remote-tech-interview-loop-2026-changes': '2026-06-09',
  'remote-work-tax-residency-strategies-2026': '2026-06-06',
  'safetywing-pre-existing-conditions-guide': '2026-06-09',
  'safetywing-real-claim-process-2026': '2026-06-10',
  'sell-ai-services-on-fiverr-2026': '2026-05-29',
  'wise-borderless-account-explained-2026': '2026-06-07',
  'wise-vs-payoneer-for-developers': '2026-06-13',
};
