import Link from 'next/link';
import { localePath, t } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { LangSwitcher } from './LangSwitcher';
import { Logo } from './Logo';
import { SISTER_NOMAD, slowmadlyHomeUrl } from '@/lib/sister-sites';

export function Header({ locale, path }: { locale: Locale; path: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-5 py-3 gap-3">
        <Link href={localePath(locale)} aria-label="slate.remote home" className="shrink-0">
          <Logo size="md" withMark />
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-1 text-sm">
          <NavLink href={localePath(locale, 'jobs')}>{t(locale, 'nav.jobs')}</NavLink>
          <NavLink href={localePath(locale, 'skills')} hide="sm">Skills</NavLink>
          <NavLink href={localePath(locale, 'cities')} hide="md">Cities</NavLink>
          <NavLink href={localePath(locale, 'salaries/developer')} hide="lg">{t(locale, 'nav.salaries')}</NavLink>
          <NavLink href={localePath(locale, 'guides')} hide="sm">{t(locale, 'nav.guides')}</NavLink>
          <a
            href={slowmadlyHomeUrl(locale)}
            target="_blank"
            rel="noopener"
            className="hidden lg:inline-block px-2.5 py-1.5 rounded-md text-graphite hover:text-ink hover:bg-sand transition-colors"
          >
            Slow travel guides ↗
          </a>
          <Link
            href={localePath(locale, 'employers')}
            className="ml-1 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-bg bg-ink rounded-full hover:bg-forest transition-colors whitespace-nowrap"
          >
            Post a job
          </Link>
          <span className="ml-1.5 sm:ml-2 pl-1.5 sm:pl-2 border-l border-line">
            <LangSwitcher current={locale} path={path} />
          </span>
        </nav>
      </div>
      {/* Mobile / tablet: Slow travel link surfaces in a secondary row when hidden above */}
      <div className="lg:hidden border-t border-line/70 bg-bg/70">
        <div className="mx-auto max-w-6xl px-4 py-1.5 flex justify-end">
          <a
            href={slowmadlyHomeUrl(locale)}
            target="_blank"
            rel="noopener"
            className="text-[11px] text-muted hover:text-ink"
          >
            Slow travel guides on {SISTER_NOMAD.domain} ↗
          </a>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  hide,
}: {
  href: string;
  children: React.ReactNode;
  hide?: 'sm' | 'md' | 'lg';
}) {
  const hideClass = hide === 'sm' ? 'hidden sm:inline-block' : hide === 'md' ? 'hidden md:inline-block' : hide === 'lg' ? 'hidden lg:inline-block' : 'inline-block';
  return (
    <Link
      href={href}
      className={`px-2 sm:px-2.5 py-1.5 rounded-md text-graphite hover:text-ink hover:bg-sand transition-colors ${hideClass}`}
    >
      {children}
    </Link>
  );
}
