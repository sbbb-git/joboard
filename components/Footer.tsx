import Link from 'next/link';
import { localePath, t } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { Logo } from './Logo';
import { ConsentLink } from './Consent';

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
            <FooterLink href={localePath(locale, 'disclosure')}>{t(locale, 'footer.disclosure')}</FooterLink>
          </FooterCol>
        </div>


        <div className="border-t border-line pt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
          <span>{t(locale, 'footer.disclaimer')}</span>
          <ConsentLink label={t(locale, 'footer.cookies')} />
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
