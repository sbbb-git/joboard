import Link from 'next/link';
import { localePath, t } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { LangSwitcher } from './LangSwitcher';

export function Header({ locale, path }: { locale: Locale; path: string }) {
  return (
    <header className="border-b border-line bg-cream">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-4">
        <Link href={localePath(locale)} className="font-semibold tracking-tight text-lg">
          remotedev<span className="text-accent">.work</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted">
          <Link href={localePath(locale, 'jobs')} className="hover:text-ink">
            {t(locale, 'nav.jobs')}
          </Link>
          <Link href={localePath(locale, 'salaries/developer')} className="hover:text-ink">
            {t(locale, 'nav.salaries')}
          </Link>
          <Link href={localePath(locale, 'companies')} className="hover:text-ink">
            {t(locale, 'nav.companies')}
          </Link>
          <Link href={localePath(locale, 'guides/finding-a-remote-tech-job')} className="hover:text-ink">
            {t(locale, 'nav.guides')}
          </Link>
          <LangSwitcher current={locale} path={path} />
        </nav>
      </div>
    </header>
  );
}
