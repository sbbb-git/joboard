import Link from 'next/link';
import { LOCALES } from '@/lib/i18n';
import type { Locale } from '@/lib/types';

export function LangSwitcher({ current, path }: { current: Locale; path: string }) {
  const clean = path.replace(/^\/(en|fr|es|de|pt|it|pl)/, '').replace(/^\/+/, '');
  const others = LOCALES.filter((l) => l !== current);

  return (
    <span className="relative group inline-block">
      <button
        type="button"
        className="px-2 py-1 rounded-md text-xs font-medium uppercase tracking-wider text-graphite hover:text-ink hover:bg-sand transition-colors inline-flex items-center gap-1"
        aria-haspopup="true"
        aria-label="Change language"
      >
        {current}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-60">
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <span className="absolute right-0 top-full mt-1 hidden group-hover:grid group-focus-within:grid grid-cols-3 gap-1 bg-paper border border-line rounded-lg shadow-lift p-1.5 min-w-[140px] z-50">
        {others.map((l) => (
          <Link
            key={l}
            href={clean ? `/${l}/${clean}` : `/${l}`}
            className="px-2 py-1 rounded text-xs uppercase tracking-wider text-graphite hover:bg-sand hover:text-ink text-center"
          >
            {l}
          </Link>
        ))}
      </span>
    </span>
  );
}
