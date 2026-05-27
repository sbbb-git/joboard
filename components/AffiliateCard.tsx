import type { AffiliateEntry } from '@/lib/affiliates';

export function AffiliateCard({ entry }: { entry: AffiliateEntry }) {
  return (
    <a
      href={entry.url}
      target="_blank"
      rel="nofollow noopener sponsored"
      className="group block rounded-xl border border-line bg-bg hover:border-ink hover:bg-paper hover-lift p-4"
    >
      <div className="flex items-baseline justify-between gap-2">
        <div className="font-semibold text-ink">{entry.name}</div>
        <span className="text-[10px] uppercase tracking-wider text-subtle">
          {entry.category}
        </span>
      </div>
      <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-3">{entry.blurb}</p>
      <p className="text-xs font-medium text-forest mt-3 group-hover:text-forestDark transition-colors">
        {entry.cta} →
      </p>
    </a>
  );
}

export function AffiliateGrid({
  title,
  intro,
  entries,
}: {
  title: string;
  intro?: string;
  entries: AffiliateEntry[];
}) {
  if (entries.length === 0) return null;
  return (
    <section className="rounded-2xl border border-line bg-paper shadow-soft p-6">
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
        <h2 className="font-semibold text-ink">{title}</h2>
        <span className="text-[10px] uppercase tracking-wider text-subtle">
          Affiliate · disclosure below
        </span>
      </div>
      {intro && <p className="text-sm text-muted mb-5 max-w-prose">{intro}</p>}
      <div
        className={`grid grid-cols-1 gap-3 ${entries.length >= 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'}`}
      >
        {entries.map((e) => (
          <AffiliateCard key={e.slug} entry={e} />
        ))}
      </div>
      <p className="text-[10px] text-subtle mt-3">
        We may earn a small commission if you sign up via these links. Pricing and features are
        unchanged.
      </p>
    </section>
  );
}
