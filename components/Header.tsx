import Link from 'next/link';
import { localePath, t } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { LangSwitcher } from './LangSwitcher';

export function Header({ locale, path }: { locale: Locale; path: string }) {
  return (
    <header className="border-b border-line bg-cream">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-4 gap-4 flex-wrap">
        <Link href={localePath(locale)} className="font-semibold tracking-tight text-lg">
          slateremote<span className="text-accent">.com</span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-5 text-sm text-muted">
          <Link href={localePath(locale, 'jobs')} className="hover:text-ink">
            {t(locale, 'nav.jobs')}
          </Link>
          <Link href={localePath(locale, 'skills')} className="hover:text-ink hidden sm:inline">
            Skills
          </Link>
          <Link href={localePath(locale, 'cities')} className="hover:text-ink hidden sm:inline">
            Cities
          </Link>
          <Link href={localePath(locale, 'companies')} className="hover:text-ink hidden md:inline">
            {t(locale, 'nav.companies')}
          </Link>
          <Link href={localePath(locale, 'salaries/developer')} className="hover:text-ink hidden md:inline">
            {t(locale, 'nav.salaries')}
          </Link>
          <Link href={localePath(locale, 'guides')} className="hover:text-ink">
            {t(locale, 'nav.guides')}
          </Link>
          <Link href={localePath(locale, 'submit')} className="hover:text-ink hidden md:inline px-2 py-1 border border-line rounded text-xs">
            Post a job
          </Link>
          <LangSwitcher current={locale} path={path} />
        </nav>
      </div>
    </header>
  );
}
