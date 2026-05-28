import Link from 'next/link';
import { localePath, t } from '@/lib/i18n';
import type { Locale } from '@/lib/types';

export default function NotFound() {
  // Next.js doesn't pass params to not-found.tsx — fall back to default locale
  const locale: Locale = 'en';
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-5 px-5">
      <p className="text-xs uppercase tracking-wider text-muted">Error 404</p>
      <h1 className="text-3xl font-semibold">{t(locale, '404.title')}</h1>
      <p className="text-muted text-sm max-w-sm">{t(locale, '404.body')}</p>
      <div className="flex flex-wrap gap-2 justify-center pt-2">
        <Link
          href={localePath(locale)}
          className="px-4 py-2 bg-ink text-bg rounded text-sm hover:opacity-90"
        >
          {t(locale, '404.home')}
        </Link>
        <Link
          href={localePath(locale, 'jobs')}
          className="px-4 py-2 border border-line rounded text-sm hover:border-ink"
        >
          {t(locale, '404.jobs')}
        </Link>
        <Link
          href={localePath(locale, 'guides')}
          className="px-4 py-2 border border-line rounded text-sm hover:border-ink"
        >
          {t(locale, '404.guides')}
        </Link>
      </div>
    </div>
  );
}
