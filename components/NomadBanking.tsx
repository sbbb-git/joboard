// Affiliate placements for the nomad-banking audience (recipients of
// international payments). Placed on city pages and visa guides where it's
// actually useful: someone moving to Lisbon or applying for a DNV needs a
// multi-currency account.

export function NomadBanking({ context }: { context?: string }) {
  return (
    <section className="border border-line rounded-lg p-5 bg-cream">
      <h2 className="text-base font-semibold text-ink mb-1">Banking for remote workers</h2>
      <p className="text-xs text-muted mb-4">
        {context
          ? `Useful tools if you're moving to or earning from ${context}.`
          : 'Useful multi-currency tools if you receive payments across borders.'}
      </p>
      <div className="grid sm:grid-cols-2 gap-3 text-sm">
        <a
          href="https://wise.prf.hn/click/camref:1100l5KwDi"
          target="_blank"
          rel="nofollow noopener sponsored"
          className="block border border-line rounded p-3 bg-white hover:border-ink"
        >
          <div className="font-medium">Wise multi-currency</div>
          <div className="text-xs text-muted mt-1">
            Real exchange rate, IBANs in 8+ currencies. The default account for getting paid in
            USD or EUR from anywhere.
          </div>
          <div className="text-xs text-accent mt-2">Open free account →</div>
        </a>
        <a
          href="https://revolut.com/referral/?referral-code=sacha5bp%21MAY2-26-AR-TR5DDH1-H1"
          target="_blank"
          rel="nofollow noopener sponsored"
          className="block border border-line rounded p-3 bg-white hover:border-ink"
        >
          <div className="font-medium">Revolut</div>
          <div className="text-xs text-muted mt-1">
            EU-based all-in-one account with currency exchange, virtual cards and savings vaults.
            Good fit for EU-resident remote workers.
          </div>
          <div className="text-xs text-accent mt-2">Open free account →</div>
        </a>
      </div>
      <p className="text-[10px] text-muted mt-3">
        Affiliate links: we may earn a small commission if you sign up. Pricing and features are
        not affected.
      </p>
    </section>
  );
}
