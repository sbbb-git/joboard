// Cross-promotion to ai-by-job.com (sister site by the same team).
// Two visual variants: card for sections, inline for mid-article placement.

import Link from 'next/link';

const URL_ROOT = 'https://ai-by-job.com';

export function AiByJobPromo({
  context,
  variant = 'card',
}: {
  context?: string;
  variant?: 'card' | 'inline' | 'banner';
}) {
  const targetUrl = context ? `${URL_ROOT}/en/jobs/${context}` : URL_ROOT;

  if (variant === 'inline') {
    return (
      <p className="my-4 text-[0.95rem] text-graphite border-l-4 border-terracotta pl-4 italic">
        Looking for the AI tools that match this role?{' '}
        <a
          href={targetUrl}
          target="_blank"
          rel="noopener"
          className="text-terracotta font-semibold not-italic hover:underline"
        >
          See the AI stack curated for {context || 'every job'} on ai-by-job.com →
        </a>
      </p>
    );
  }

  if (variant === 'banner') {
    return (
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener"
        className="block rounded-xl bg-gradient-to-br from-ink to-forestDark text-bg p-5 hover-lift hover:shadow-lift"
      >
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <p className="text-[10px] uppercase tracking-wider opacity-70 font-semibold">
              Sister site · ai-by-job.com
            </p>
            <p className="font-display text-lg font-bold tracking-tight mt-1">
              The right AI tools for every tech role
            </p>
          </div>
          <span className="text-sm font-medium underline">Browse 200+ roles →</span>
        </div>
      </a>
    );
  }

  return (
    <section className="rounded-2xl border border-line bg-paper shadow-soft p-6 relative overflow-hidden">
      <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-terracottaSoft opacity-60" />
      <div className="relative">
        <p className="text-[10px] uppercase tracking-wider text-terracotta font-bold">
          Curated by us, on our sister site
        </p>
        <h2 className="font-display text-xl md:text-2xl font-bold tracking-tighter text-ink mt-2">
          Find the AI tools that pair with this role
        </h2>
        <p className="text-sm text-muted mt-2 max-w-prose">
          ai-by-job.com indexes the best AI tools for {context || '200+ tech roles'}: writing,
          coding, design, data, audio, video, automation. Free to browse, organised by what
          actually works for the job you do.
        </p>
        <div className="mt-4">
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center px-4 py-2 bg-terracotta text-bg rounded-full text-sm font-semibold hover:bg-ink transition-colors"
          >
            Explore AI tools{context ? ` for ${context}` : ''} →
          </a>
          <Link
            href="https://ai-by-job.com/en/guides"
            target="_blank"
            rel="noopener"
            className="ml-2 inline-flex items-center px-4 py-2 border border-line text-ink rounded-full text-sm font-medium hover:border-ink hover:bg-sand"
          >
            Read the AI guides
          </Link>
        </div>
      </div>
    </section>
  );
}
