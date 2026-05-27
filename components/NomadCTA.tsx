import { SISTER_NOMAD, slowmadlyCountryUrl, slowmadlyHomeUrl } from '@/lib/sister-sites';
import type { Locale } from '@/lib/types';

type Context =
  | { type: 'job' }
  | { type: 'role'; label: string }
  | { type: 'location'; label: string; country?: string }
  | { type: 'city'; label: string; country?: string };

function headline(c?: Context): string {
  if (!c) return 'Pick a basecamp for remote life.';
  switch (c.type) {
    case 'job':
      return 'Got the job? Pick a basecamp.';
    case 'role':
      return `Working remote as a ${c.label}? Where to base.`;
    case 'location':
    case 'city':
      return `Moving to ${c.label}? See the nomad guide.`;
  }
}

function targetUrl(c: Context | undefined, locale: Locale | undefined): string {
  if (!c) return slowmadlyHomeUrl(locale);
  if (c.type === 'city' || c.type === 'location') {
    return slowmadlyCountryUrl(c.country ?? c.label, locale);
  }
  return slowmadlyHomeUrl(locale);
}

export function NomadCTA({
  context,
  locale,
  variant = 'card',
}: {
  context?: Context;
  locale?: Locale;
  variant?: 'card' | 'inline';
}) {
  const title = headline(context);
  const url = targetUrl(context, locale);

  if (variant === 'inline') {
    return (
      <p className="my-4 text-[0.95rem] text-graphite border-l-4 border-forest pl-4 italic">
        {title}{' '}
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className="text-forest font-semibold not-italic hover:underline"
        >
          Read the guide on {SISTER_NOMAD.domain} →
        </a>
      </p>
    );
  }

  return (
    <section className="rounded-2xl border border-line bg-paper shadow-soft p-6 relative overflow-hidden">
      <div className="absolute -left-12 -bottom-12 w-44 h-44 rounded-full bg-forestSoft opacity-60" />
      <div className="relative">
        <p className="text-[10px] uppercase tracking-wider text-forest font-bold">
          Sister site · {SISTER_NOMAD.domain}
        </p>
        <h2 className="font-display text-xl md:text-2xl font-normal tracking-tighter text-ink mt-2">
          {title}
        </h2>
        <p className="text-sm text-muted mt-2 max-w-prose">{SISTER_NOMAD.tagline}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center mt-4 px-4 py-2 bg-forest text-bg rounded-full text-sm font-semibold hover:bg-ink transition-colors"
        >
          Read on {SISTER_NOMAD.domain} →
        </a>
      </div>
    </section>
  );
}
