import Link from 'next/link';
import { readJobs } from '@/lib/jobs';
import { localePath, t } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { ROLES } from '@/lib/types';
import { SKILLS } from '@/lib/skills';
import { CITIES } from '@/lib/cities';
import { Logo } from './Logo';

export function Footer({ locale }: { locale: Locale }) {
  const meta = readJobs();
  const refreshed = new Date(meta.generatedAt).toISOString().slice(0, 10);
  const topSkills = SKILLS.slice(0, 16);
  const topCities = CITIES.slice(0, 16);
  const topRoles = ROLES.slice(0, 10);

  return (
    <footer className="border-t border-line bg-sand mt-20">
      <div className="mx-auto max-w-6xl px-5 py-12 space-y-10">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <Logo size="md" withMark />
            <p className="text-xs text-muted mt-3 leading-relaxed">
              Remote tech jobs aggregated from eight public job board APIs. Refreshed every day,
              forever free to browse.
            </p>
            <div className="mt-4 flex gap-2 text-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-forest mt-1.5"></span>
              <span className="text-muted">
                {meta.count} active jobs · index updated {refreshed}
              </span>
            </div>
          </div>

          <FooterCol title="Roles">
            {topRoles.map((r) => (
              <FooterLink key={r} href={localePath(locale, `jobs/${r}`)}>
                <span className="capitalize">{r.replace('-', ' ')}</span>
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Skills">
            {topSkills.map((s) => (
              <FooterLink key={s.slug} href={localePath(locale, `skills/${s.slug}`)}>
                {s.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Cities">
            {topCities.map((c) => (
              <FooterLink key={c.slug} href={localePath(locale, `cities/${c.slug}`)}>
                {c.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Site">
            <FooterLink href={localePath(locale, 'guides')}>{t(locale, 'nav.guides')}</FooterLink>
            <FooterLink href={localePath(locale, 'compare')}>Compare</FooterLink>
            <FooterLink href={localePath(locale, 'companies')}>{t(locale, 'nav.companies')}</FooterLink>
            <FooterLink href={localePath(locale, 'submit')}>Post a job</FooterLink>
            <FooterLink href={localePath(locale, 'about')}>About</FooterLink>
            <FooterLink href={localePath(locale, 'contact')}>Contact</FooterLink>
          </FooterCol>
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
