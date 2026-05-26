// Affiliate placements for the nomad-banking audience. EU-focused stack
// shows Wise + Revolut + Qonto; non-EU shows Wise + Revolut.

const EU_COUNTRIES = new Set([
  'Portugal', 'Spain', 'Germany', 'France', 'Italy', 'Netherlands', 'Belgium',
  'Ireland', 'Austria', 'Greece', 'Poland', 'Czech Republic', 'Hungary',
  'Sweden', 'Denmark', 'Finland', 'Estonia',
]);

const PARTNERS = {
  wise: {
    name: 'Wise',
    url: 'https://wise.prf.hn/click/camref:1100l5KwDi',
    blurb:
      'Real exchange rate, IBANs in 8+ currencies. The default account for getting paid in USD or EUR from anywhere.',
    cta: 'Open free account',
  },
  revolut: {
    name: 'Revolut',
    url: 'https://revolut.com/referral/?referral-code=sacha5bp%21MAY2-26-AR-TR5DDH1-H1',
    blurb:
      'EU-based all-in-one account: currency exchange, virtual cards, savings vaults. Strong fit for EU-resident remote workers.',
    cta: 'Open free account',
  },
  qonto: {
    name: 'Qonto',
    url: 'https://affilae.com/r/?p=69a078&af=2709',
    blurb:
      'Business banking built for freelancers and startups across the EU. Receipts, expense management, and integrated accounting.',
    cta: 'Open business account',
  },
};

export function NomadBanking({
  context,
  country,
}: {
  context?: string;
  country?: string;
}) {
  const partners = country && EU_COUNTRIES.has(country)
    ? [PARTNERS.wise, PARTNERS.revolut, PARTNERS.qonto]
    : [PARTNERS.wise, PARTNERS.revolut];

  return (
    <section className="border border-line rounded-xl p-6 bg-paper shadow-soft">
      <div className="flex items-baseline justify-between mb-4 flex-wrap gap-2">
        <h2 className="text-base font-semibold text-ink">Banking for remote workers</h2>
        <span className="text-[10px] uppercase tracking-wider text-subtle">
          Affiliate · disclosure below
        </span>
      </div>
      <p className="text-sm text-muted mb-5">
        {context
          ? `Multi-currency tools that work well if you're moving to or earning from ${context}.`
          : 'Multi-currency tools for receiving payments across borders.'}
      </p>
      <div className={`grid gap-3 ${partners.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
        {partners.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="nofollow noopener sponsored"
            className="block border border-line rounded-lg p-4 bg-bg hover:border-ink hover-lift"
          >
            <div className="font-medium text-ink">{p.name}</div>
            <div className="text-xs text-muted mt-1.5 leading-relaxed">{p.blurb}</div>
            <div className="text-xs text-forest mt-3 font-medium">{p.cta} →</div>
          </a>
        ))}
      </div>
      <p className="text-[10px] text-subtle mt-3">
        We may earn a small commission if you sign up. Pricing and features are unaffected.
      </p>
    </section>
  );
}
