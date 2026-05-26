// Affiliate placements for tools every remote worker ends up using.

const TOOLS = [
  {
    slug: 'fireflies',
    name: 'Fireflies',
    tag: 'Meeting AI',
    blurb:
      'Records, transcribes, and summarizes every meeting automatically. Async-friendly: skip the call, read the summary.',
    url: 'https://fireflies.ai/?fpr=sacha61',
  },
  {
    slug: 'beehiiv',
    name: 'Beehiiv',
    tag: 'Newsletter',
    blurb:
      'The platform we use for our own newsletter. Built for monetized writing, no monthly fee on the starter tier.',
    url: 'https://www.beehiiv.com/?via=sacha-bitoun',
  },
  {
    slug: 'skool',
    name: 'Skool',
    tag: 'Community',
    blurb:
      'Run a paid community with built-in courses, events, and a gamified leaderboard. Used by many remote tech educators.',
    url: 'https://www.skool.com/refer?ref=ed047124b59a477596ccc32e3c786ee7',
  },
  {
    slug: 'braintrust',
    name: 'Braintrust',
    tag: 'Freelance network',
    blurb:
      'Top-tier freelance engineering talent network. Build a profile once, get matched to vetted client engagements.',
    url: 'https://www.usebraintrust.com/r/sacha67/',
  },
];

export function RemoteTools() {
  return (
    <section className="border border-line rounded-xl p-6 bg-paper shadow-soft">
      <div className="flex items-baseline justify-between mb-4 flex-wrap gap-2">
        <h2 className="text-base font-semibold text-ink">Tools remote workers actually use</h2>
        <span className="text-[10px] uppercase tracking-wider text-subtle">
          Affiliate · disclosure below
        </span>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {TOOLS.map((t) => (
          <a
            key={t.slug}
            href={t.url}
            target="_blank"
            rel="nofollow noopener sponsored"
            className="block border border-line rounded-lg p-4 bg-bg hover:border-ink hover-lift"
          >
            <div className="flex items-baseline justify-between">
              <div className="font-medium text-ink">{t.name}</div>
              <span className="text-[10px] uppercase tracking-wider text-forest">{t.tag}</span>
            </div>
            <div className="text-xs text-muted mt-2 leading-relaxed">{t.blurb}</div>
            <div className="text-xs text-forest mt-3 font-medium">Try free →</div>
          </a>
        ))}
      </div>
      <p className="text-[10px] text-subtle mt-3">
        We may earn a small commission if you sign up. Pricing and features are unaffected.
      </p>
    </section>
  );
}
