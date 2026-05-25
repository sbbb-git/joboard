import Link from 'next/link';
import { LOCALES } from '@/lib/i18n';
import type { Locale } from '@/lib/types';

export function LangSwitcher({ current, path }: { current: Locale; path: string }) {
  const clean = path.replace(/^\/(en|fr|es|de)/, '').replace(/^\/+/, '');
  return (
    <span className="flex items-center gap-1 text-xs uppercase tracking-wide">
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={clean ? `/${l}/${clean}` : `/${l}`}
          className={`px-1.5 py-0.5 rounded ${
            l === current ? 'bg-ink text-cream' : 'text-muted hover:text-ink'
          }`}
        >
          {l}
        </Link>
      ))}
    </span>
  );
}
