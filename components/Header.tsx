import Link from 'next/link';
import { localePath, t } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { LangSwitcher } from './LangSwitcher';
import { Logo } from './Logo';

export function Header({ locale, path }: { locale: Locale; path: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-3.5 gap-4">
        <Link href={localePath(locale)} aria-label="slate.remote home">
          <Logo size="md" withMark />
        </Link>
        <nav className="flex items-center gap-1 md:gap-2 text-sm">
          <NavLink href={localePath(locale, 'jobs')}>{t(locale, 'nav.jobs')}</NavLink>
          <NavLink href={localePath(locale, 'skills')} hideMobile>Skills</NavLink>
          <NavLink href={localePath(locale, 'cities')} hideMobile>Cities</NavLink>
          <NavLink href={localePath(locale, 'salaries/developer')} hideMobile>{t(locale, 'nav.salaries')}</NavLink>
          <NavLink href={localePath(locale, 'guides')}>{t(locale, 'nav.guides')}</NavLink>
          <Link
            href={localePath(locale, 'submit')}
            className="ml-1 px-3 py-1.5 text-xs font-semibold text-bg bg-ink rounded-full hover:bg-forest transition-colors"
          >
            Post a job
          </Link>
          <span className="ml-2 pl-2 border-l border-line">
            <LangSwitcher current={locale} path={path} />
          </span>
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  hideMobile,
}: {
  href: string;
  children: React.ReactNode;
  hideMobile?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`px-2.5 py-1.5 rounded-md text-graphite hover:text-ink hover:bg-sand transition-colors ${hideMobile ? 'hidden sm:inline-block' : 'inline-block'}`}
    >
      {children}
    </Link>
  );
}
