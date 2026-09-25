import Link from 'next/link';
import { localePath, t } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { Logo } from './Logo';
import { SISTER_NOMAD, SISTER_AI, slowmadlyHomeUrl, aiByJobHomeUrl } from '@/lib/sister-sites';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-line bg-sand mt-20">
      <div className="mx-auto max-w-6xl px-5 py-12 space-y-10">
        <div className="grid sm:grid-cols-3 gap-8 lg:gap-10">
          <div className="sm:col-span-2">
            <Logo size="md" withMark />
            <p className="text-xs text-muted mt-3 leading-relaxed max-w-md">{t(locale, 'footer.byline')}</p>
          </div>

          <FooterCol title={t(locale, 'footer.section.site')}>
            <FooterLink href={localePath(locale, 'guides')}>{t(locale, 'nav.guides')}</FooterLink>
            <FooterLink href={localePath(locale, 'glossary')}>{t(locale, 'footer.glossary')}</FooterLink>
            <FooterLink href={localePath(locale, 'network')}>{t(locale, 'footer.network')}</FooterLink>
            <FooterLink href={localePath(locale, 'disclosure')}>{t(locale, 'footer.disclosure')}</FooterLink>
          </FooterCol>
        </div>

        {/* Sister sites cross-link band */}
        <div className="rounded-2xl bg-forestSoft p-5 sm:p-6 grid sm:grid-cols-2 gap-4">
          <a
            href={slowmadlyHomeUrl(locale)}
            target="_blank"
            rel="noopener"
            className="block rounded-xl bg-paper border border-line p-5 hover:border-ink hover-lift"
          >
            <p className="text-[10px] uppercase tracking-wider text-forest font-bold">
              {SISTER_NOMAD.domain}
            </p>
            <p className="font-display text-base font-normal tracking-tight text-ink mt-1">
              {t(locale, 'footer.basecamp')} → {SISTER_NOMAD.domain}
            </p>
            <p className="text-xs text-muted mt-1.5">{SISTER_NOMAD.tagline}</p>
          </a>
          <a
            href={aiByJobHomeUrl(locale)}
            target="_blank"
            rel="noopener"
            className="block rounded-xl bg-paper border border-line p-5 hover:border-ink hover-lift"
          >
            <p className="text-[10px] uppercase tracking-wider text-terracotta font-bold">
              {SISTER_AI.domain}
            </p>
            <p className="font-display text-base font-normal tracking-tight text-ink mt-1">
              {t(locale, 'footer.aiTools')} → {SISTER_AI.domain}
            </p>
            <p className="text-xs text-muted mt-1.5">{SISTER_AI.tagline}</p>
          </a>
        </div>

        <div className="border-t border-line pt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
          <span>{t(locale, 'footer.disclaimer')}</span>
          <span>© {new Date().getFullYear()} slateremote.com</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-semibold text-ink text-sm mb-3">{title}</h3>
      <ul className="space-y-1.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-xs text-muted hover:text-ink transition-colors">
        {children}
      </Link>
    </li>
  );
}
