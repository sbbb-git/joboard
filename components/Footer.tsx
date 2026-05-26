import Link from 'next/link';
import { readJobs } from '@/lib/jobs';
import { localePath, t } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { ROLES } from '@/lib/types';
import { SKILLS } from '@/lib/skills';
import { CITIES } from '@/lib/cities';

export function Footer({ locale }: { locale: Locale }) {
  const meta = readJobs();
  const refreshed = new Date(meta.generatedAt).toISOString().slice(0, 10);
  const topSkills = SKILLS.slice(0, 16);
  const topCities = CITIES.slice(0, 16);
  const topRoles = ROLES.slice(0, 10);

  return (
    <footer className="border-t border-line bg-cream mt-16">
      <div className="mx-auto max-w-6xl px-5 py-10 space-y-8">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-ink mb-3">Roles</h3>
            <ul className="space-y-1.5 text-muted">
              {topRoles.map((r) => (
                <li key={r}>
                  <Link href={localePath(locale, `jobs/${r}`)} className="hover:text-ink capitalize">
                    {r.replace('-', ' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-ink mb-3">Skills</h3>
            <ul className="space-y-1.5 text-muted">
              {topSkills.map((s) => (
                <li key={s.slug}>
                  <Link href={localePath(locale, `skills/${s.slug}`)} className="hover:text-ink">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-ink mb-3">Cities</h3>
            <ul className="space-y-1.5 text-muted">
              {topCities.map((c) => (
                <li key={c.slug}>
                  <Link href={localePath(locale, `cities/${c.slug}`)} className="hover:text-ink">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-ink mb-3">Resources</h3>
            <ul className="space-y-1.5 text-muted">
              <li><Link href={localePath(locale, 'guides')} className="hover:text-ink">{t(locale, 'nav.guides')}</Link></li>
              <li><Link href={localePath(locale, 'compare')} className="hover:text-ink">Compare</Link></li>
              <li><Link href={localePath(locale, 'companies')} className="hover:text-ink">{t(locale, 'nav.companies')}</Link></li>
              <li><Link href={localePath(locale, 'skills')} className="hover:text-ink">All skills</Link></li>
              <li><Link href={localePath(locale, 'cities')} className="hover:text-ink">All cities</Link></li>
              <li><Link href={localePath(locale, 'submit')} className="hover:text-ink">Post a job</Link></li>
              <li><Link href={localePath(locale, 'about')} className="hover:text-ink">About</Link></li>
              <li><Link href={localePath(locale, 'contact')} className="hover:text-ink">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line pt-5 text-xs text-muted flex flex-wrap items-center justify-between gap-3">
          <span>{t(locale, 'footer.disclaimer')}</span>
          <span>
            {t(locale, 'footer.refreshed')}: {refreshed} · {meta.count} jobs
          </span>
        </div>
      </div>
    </footer>
  );
}
