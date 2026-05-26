import { SISTER_AI, aiByJobRoleUrl } from '@/lib/sister-sites';

type Context =
  | { type: 'role'; label: string }
  | { type: 'skill'; label: string }
  | { type: 'guide'; label?: string };

function headline(c?: Context): string {
  if (!c) return 'Best AI tools for every tech role';
  switch (c.type) {
    case 'role':
      return `Best AI tools for ${c.label} jobs`;
    case 'skill':
      return `Best AI tools for ${c.label} engineers`;
    case 'guide':
      return c.label ? `Best AI tools for ${c.label}` : 'Best AI tools for tech work';
  }
}

function targetUrl(c?: Context): string {
  if (!c) return SISTER_AI.url;
  if (c.type === 'role' || c.type === 'skill') {
    return aiByJobRoleUrl(c.label);
  }
  return SISTER_AI.url;
}

export function AiToolsCTA({
  context,
  variant = 'card',
}: {
  context?: Context;
  variant?: 'card' | 'inline';
}) {
  const title = headline(context);
  const url = targetUrl(context);

  if (variant === 'inline') {
    return (
      <p className="my-4 text-[0.95rem] text-graphite border-l-4 border-terracotta pl-4 italic">
        {title}.{' '}
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className="text-terracotta font-semibold not-italic hover:underline"
        >
          See the curated stack on {SISTER_AI.domain} →
        </a>
      </p>
    );
  }

  return (
    <section className="rounded-2xl border border-line bg-paper shadow-soft p-6 relative overflow-hidden">
      <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-terracottaSoft opacity-60" />
      <div className="relative">
        <p className="text-[10px] uppercase tracking-wider text-terracotta font-bold">
          Sister site · {SISTER_AI.domain}
        </p>
        <h2 className="font-display text-xl md:text-2xl font-bold tracking-tighter text-ink mt-2">
          {title}
        </h2>
        <p className="text-sm text-muted mt-2 max-w-prose">{SISTER_AI.tagline}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center mt-4 px-4 py-2 bg-terracotta text-bg rounded-full text-sm font-semibold hover:bg-ink transition-colors"
        >
          Explore on {SISTER_AI.domain} →
        </a>
      </div>
    </section>
  );
}
