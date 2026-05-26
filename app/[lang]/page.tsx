import Link from 'next/link';
import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { CityCard } from '@/components/CityCard';
import { Newsletter } from '@/components/Newsletter';
import { HomeFaq } from '@/components/HomeFaq';
import { allJobs, rolesWithCounts, topCompanies, topCountries } from '@/lib/jobs';
import { localePath, t } from '@/lib/i18n';
import { buildMetadata, organizationJsonLd } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { SKILLS } from '@/lib/skills';
import { CITIES } from '@/lib/cities';
import { GUIDES } from '@/lib/guides';

export const dynamicParams = false;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: '',
    title: 'Remote tech jobs from across the web, refreshed daily',
    description:
      'Browse remote engineering, data, design and product jobs aggregated from eight public job board APIs. Updated every day in 7 languages. Salary, city and skill pages included.',
  });
}

export default function Home({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const all = allJobs();
  const jobs = all.slice(0, 12);
  const roles = rolesWithCounts().filter((r) => r.count > 0).slice(0, 8);
  const countries = topCountries(8);
  const companies = topCompanies(8);
  const featuredSkills = SKILLS.slice(0, 14);
  const featuredCities = CITIES.slice(0, 6);
  const featuredGuides = GUIDES.slice(0, 6);

  return (
    <div className="space-y-20 animate-fadein">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />

      {/* HERO */}
      <section className="relative -mt-8 pt-12 pb-12 px-1">
        <div className="absolute inset-0 -z-10 bg-mesh rounded-3xl" />
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-forestSoft text-forest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
              Updated every 24 hours · {all.length} active jobs
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tightest leading-[1.04] text-ink">
              Find your next <span className="gradient-text">remote tech role</span>, fresh every day.
            </h1>
            <p className="mt-5 text-lg text-graphite max-w-prose">
              {t(locale, 'site.intro')}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <Link
                href={localePath(locale, 'jobs')}
                className="inline-flex items-center px-5 py-2.5 bg-ink text-bg rounded-full text-sm font-semibold hover:bg-forest transition-colors"
              >
                Browse {all.length} jobs →
              </Link>
              <Link
                href={localePath(locale, 'salaries/developer')}
                className="inline-flex items-center px-5 py-2.5 bg-paper border border-line text-ink rounded-full text-sm font-semibold hover:border-ink transition-colors"
              >
                See salary data
              </Link>
            </div>
          </div>

          {/* Stats card */}
          <div className="rounded-2xl bg-paper border border-line shadow-soft p-6 grid grid-cols-2 gap-5">
            <Stat number={all.length} label="active jobs" />
            <Stat number={countries.length} label="countries" suffix="+" />
            <Stat number={companies.length * 10} label="companies" suffix="+" />
            <Stat number={SKILLS.length} label="skills tracked" />
            <Stat number={CITIES.length} label="cities profiled" />
            <Stat number={GUIDES.length} label="long-form guides" />
          </div>
        </div>

        {/* role chips below hero */}
        <div className="mt-10 flex flex-wrap gap-2">
          {(roles.length > 0
            ? roles
            : ['developer', 'frontend', 'backend', 'fullstack', 'data', 'devops', 'ml-ai', 'design'].map((r) => ({
                role: r as never,
                count: 0,
              }))
          ).map((r) => (
            <Link
              key={r.role}
              href={localePath(locale, `jobs/${r.role}`)}
              className="text-sm px-4 py-2 rounded-full bg-paper border border-line text-graphite hover:border-ink hover:text-ink transition-colors capitalize"
            >
              {String(r.role).replace('-', ' ')}
              {r.count > 0 && <span className="ml-1.5 text-subtle">· {r.count}</span>}
            </Link>
          ))}
        </div>
      </section>

      {/* LATEST JOBS */}
      <section>
        <SectionHeader
          eyebrow="Latest postings"
          title={t(locale, 'nav.jobs')}
          link={{ href: localePath(locale, 'jobs'), label: `${t(locale, 'cta.viewAll')} →` }}
        />
        {jobs.length === 0 ? (
          <p className="text-muted text-sm">{t(locale, 'list.empty')}</p>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {jobs.map((j) => (
              <JobCard key={j.id} job={j} locale={locale} />
            ))}
          </div>
        )}
      </section>

      {/* NEWSLETTER */}
      <Newsletter />

      {/* SKILLS */}
      <section>
        <SectionHeader
          eyebrow="Browse by stack"
          title="Find jobs by skill"
          link={{ href: localePath(locale, 'skills'), label: `All ${SKILLS.length} skills →` }}
        />
        <div className="flex flex-wrap gap-2">
          {featuredSkills.map((s) => (
            <Link
              key={s.slug}
              href={localePath(locale, `skills/${s.slug}`)}
              className="text-sm px-4 py-2 rounded-xl border border-line bg-paper hover:border-ink hover:bg-sand transition-colors"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </section>

      {/* CITIES */}
      <section>
        <SectionHeader
          eyebrow="Live and work anywhere"
          title="Top cities for remote tech workers"
          link={{ href: localePath(locale, 'cities'), label: `All ${CITIES.length} cities →` }}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {featuredCities.map((c) => (
            <CityCard key={c.slug} city={c} locale={locale} />
          ))}
        </div>
      </section>

      {/* COUNTRIES */}
      {countries.length > 0 && (
        <section>
          <SectionHeader eyebrow="By country" title={t(locale, 'nav.locations')} />
          <div className="flex flex-wrap gap-2">
            {countries.map((c) => (
              <Link
                key={c.slug}
                href={localePath(locale, `locations/${c.slug}`)}
                className="text-sm px-4 py-2 rounded-xl border border-line bg-paper hover:border-ink hover:bg-sand transition-colors"
              >
                {c.name} <span className="text-subtle">· {c.count}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* GUIDES */}
      <section>
        <SectionHeader
          eyebrow="Read up"
          title={t(locale, 'nav.guides')}
          link={{ href: localePath(locale, 'guides'), label: `All ${GUIDES.length} guides →` }}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {featuredGuides.map((g) => (
            <Link
              key={g.slug}
              href={localePath(locale, `guides/${g.slug}`)}
              className="block rounded-2xl border border-line bg-paper shadow-soft hover-lift hover:shadow-lift hover:border-ink/20 p-5"
            >
              <p className="text-[10px] uppercase tracking-wider text-forest font-semibold">{g.category}</p>
              <h3 className="font-semibold text-ink mt-1.5 leading-snug">{g.title}</h3>
              <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-3">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <HomeFaq />
    </div>
  );
}

function Stat({ number, label, suffix }: { number: number; label: string; suffix?: string }) {
  return (
    <div>
      <div className="stat-num text-3xl md:text-4xl font-extrabold text-ink">
        {number.toLocaleString()}
        {suffix && <span className="text-forest">{suffix}</span>}
      </div>
      <div className="text-xs text-muted mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  link,
}: {
  eyebrow: string;
  title: string;
  link?: { href: string; label: string };
}) {
  return (
    <div className="flex items-end justify-between mb-5 gap-4 flex-wrap">
      <div>
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{eyebrow}</p>
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-ink mt-1">
          {title}
        </h2>
      </div>
      {link && (
        <Link href={link.href} className="text-sm font-medium text-forest hover:text-forestDark whitespace-nowrap">
          {link.label}
        </Link>
      )}
    </div>
  );
}
