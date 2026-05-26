// Cross-promotion to slowmadly.com (sister site on slow nomadism + remote
// living). Three visual variants: card / inline / banner.

import Link from 'next/link';

const URL_ROOT = 'https://slowmadly.com';

export function SlowmadlyPromo({
  context,
  variant = 'card',
}: {
  context?: string;
  variant?: 'card' | 'inline' | 'banner';
}) {
  if (variant === 'inline') {
    return (
      <p className="my-4 text-[0.95rem] text-graphite border-l-4 border-forest pl-4 italic">
        Going beyond the job?{' '}
        <a
          href={URL_ROOT}
          target="_blank"
          rel="noopener"
          className="text-forest font-semibold not-italic hover:underline"
        >
          Read our longer essays on slow nomad living{context ? ` in ${context}` : ''} on slowmadly.com →
        </a>
      </p>
    );
  }

  if (variant === 'banner') {
    return (
      <a
        href={URL_ROOT}
        target="_blank"
        rel="noopener"
        className="block rounded-xl bg-gradient-to-br from-forest to-forestDark text-bg p-5 hover-lift hover:shadow-lift"
      >
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <p className="text-[10px] uppercase tracking-wider opacity-70 font-semibold">
              Sister site · slowmadly.com
            </p>
            <p className="font-display text-lg font-bold tracking-tight mt-1">
              Slow remote living: cities, visas, real-world setups
            </p>
          </div>
          <span className="text-sm font-medium underline">Read our essays →</span>
        </div>
      </a>
    );
  }

  return (
    <section className="rounded-2xl border border-line bg-paper shadow-soft p-6 relative overflow-hidden">
      <div className="absolute -left-12 -bottom-12 w-44 h-44 rounded-full bg-forestSoft opacity-60" />
      <div className="relative">
        <p className="text-[10px] uppercase tracking-wider text-forest font-bold">
          Slow living for remote workers
        </p>
        <h2 className="font-display text-xl md:text-2xl font-bold tracking-tighter text-ink mt-2">
          {context
            ? `Thinking of slow-traveling to ${context}?`
            : 'Long-form essays on slow nomad living'}
        </h2>
        <p className="text-sm text-muted mt-2 max-w-prose">
          slowmadly.com is our sister publication on slow nomadism: how to actually live well in
          a place for weeks or months, not how to maximize stamp count. Real-world setups, visa
          stories, cost breakdowns, lifestyle deep-dives.
        </p>
        <div className="mt-4">
          <a
            href={URL_ROOT}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center px-4 py-2 bg-forest text-bg rounded-full text-sm font-semibold hover:bg-ink transition-colors"
          >
            Read on slowmadly.com →
          </a>
          <Link
            href="https://slowmadly.com/guides"
            target="_blank"
            rel="noopener"
            className="ml-2 inline-flex items-center px-4 py-2 border border-line text-ink rounded-full text-sm font-medium hover:border-ink hover:bg-sand"
          >
            Browse all guides
          </Link>
        </div>
      </div>
    </section>
  );
}
