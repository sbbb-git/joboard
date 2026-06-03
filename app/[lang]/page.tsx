import Link from 'next/link';
import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { CityCard } from '@/components/CityCard';
import { Newsletter } from '@/components/Newsletter';
import { HomeFaq } from '@/components/HomeFaq';
import { allJobs, rolesWithCounts, topCompanies, topCountries } from '@/lib/jobs';
import { localePath, t } from '@/lib/i18n';
import { buildMetadata, organizationJsonLd, websiteJsonLd } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { SKILLS } from '@/lib/skills';
import { CITIES } from '@/lib/cities';
import { GUIDES } from '@/lib/guides';
import { tGuide } from '@/lib/guides-i18n';
import { HOME } from '@/lib/home-i18n';

export const dynamicParams = false;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const h = HOME[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: '',
    title: h.metaTitle,
    description: h.metaDescription,
  });
}

export default function Home({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const h = HOME[locale];
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />

      {/* HERO */}
      <section className="relative -mt-8 pt-12 pb-12 px-1">
        <div className="absolute inset-0 -z-10 bg-mesh rounded-3xl" />
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-forestSoft text-forest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
              {h.badge(all.length)}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tightest leading-[1.04] text-ink">
              {h.h1a}
              <em className="font-display italic text-forest">{h.h1em}</em>{h.h1b}
            </h1>
            <p className="mt-5 text-lg text-graphite max-w-prose">
              {t(locale, 'site.intro')}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <Link
                href={localePath(locale, 'jobs')}
                className="inline-flex items-center px-5 py-2.5 bg-ink text-bg rounded-full text-sm font-semibold hover:bg-forest transition-colors"
              >
                {h.browseJobs(all.length)}
              </Link>
              <Link
                href={localePath(locale, 'salaries/developer')}
                className="inline-flex items-center px-5 py-2.5 bg-paper border border-line text-ink rounded-full text-sm font-semibold hover:border-ink transition-colors"
              >
                {h.seeSalary}
              </Link>
            </div>
          </div>

          {/* Stats card */}
          <div className="rounded-2xl bg-paper border border-line shadow-soft p-6 grid grid-cols-2 gap-5">
            <Stat number={all.length} label={h.stat.jobs} />
            <Stat number={countries.length} label={h.stat.countries} suffix="+" />
            <Stat number={companies.length * 10} label={h.stat.companies} suffix="+" />
            <Stat number={SKILLS.length} label={h.stat.skills} />
            <Stat number={CITIES.length} label={h.stat.cities} />
            <Stat number={GUIDES.length} label={h.stat.guides} />
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
          eyebrow={h.latest}
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
      <Newsletter locale={locale} />

      {/* BENTO HIGHLIGHTS */}
      <section>
        <SectionHeader
          eyebrow={h.bentoEyebrow}
          title={h.bentoTitle}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[170px] gap-3">
          <BentoTile className="col-span-2 md:col-span-2 md:row-span-2 bg-gradient-to-br from-forestSoft to-paper">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-forest font-bold">
                {h.dailyRefresh}
              </p>
              <p className="font-display text-4xl md:text-5xl font-normal text-ink leading-none mt-2">
                {all.length.toLocaleString()}
              </p>
              <p className="text-graphite text-sm mt-1">{h.jobsRightNow}</p>
            </div>
            <Link
              href={localePath(locale, 'jobs')}
              className="text-sm text-forest font-medium hover:underline self-end"
            >
              {h.browseAll}
            </Link>
          </BentoTile>

          <BentoTile className="col-span-1 md:col-span-2 bg-paper border border-line">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-terracotta font-bold">
                {h.findStack}
              </p>
              <p className="font-display text-2xl md:text-3xl font-normal text-ink mt-2 leading-tight">
                {h.browseBySkillTile}
              </p>
              <p className="text-xs text-muted mt-1">
                {h.skillsSub(SKILLS.length)}
              </p>
            </div>
            <Link
              href={localePath(locale, 'skills')}
              className="text-sm text-terracotta font-medium hover:underline self-end"
            >
              {h.exploreSkills}
            </Link>
          </BentoTile>

          <BentoTile className="col-span-1 md:col-span-1 bg-paper border border-line">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-amber font-bold">
                {h.salaryData}
              </p>
              <p className="font-display text-xl font-normal text-ink mt-1.5 leading-tight">
                {h.whatPays}
              </p>
            </div>
            <Link
              href={localePath(locale, 'salaries/developer')}
              className="text-xs text-amber font-medium hover:underline self-end"
            >
              {h.seeBands}
            </Link>
          </BentoTile>

          <BentoTile className="col-span-1 md:col-span-1 bg-gradient-to-br from-amberSoft to-paper">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-amber font-bold">
                {h.moveWork}
              </p>
              <p className="font-display text-xl font-normal text-ink mt-1.5 leading-tight">
                {h.citiesProfiled(CITIES.length)}
              </p>
            </div>
            <Link
              href={localePath(locale, 'cities')}
              className="text-xs text-amber font-medium hover:underline self-end"
            >
              {h.citiesLink}
            </Link>
          </BentoTile>

          <BentoTile className="col-span-2 md:col-span-4 bg-gradient-to-r from-paper to-terracottaSoft border border-line">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-terracotta font-bold">
                {h.freeForever}
              </p>
              <p className="font-display text-2xl md:text-3xl font-normal text-ink mt-2 leading-tight italic">
                {h.browseFilterApply}
              </p>
            </div>
            <span className="text-sm text-graphite hidden md:inline">
              Sources: Remotive · RemoteOK · WWR · Arbeitnow · Himalayas · Jobicy · The Muse · HN
            </span>
          </BentoTile>
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <SectionHeader
          eyebrow={h.skillsEyebrow}
          title={h.skillsTitle}
          link={{ href: localePath(locale, 'skills'), label: h.allSkills(SKILLS.length) }}
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
          eyebrow={h.citiesEyebrow}
          title={h.citiesTitle}
          link={{ href: localePath(locale, 'cities'), label: h.allCities(CITIES.length) }}
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
          <SectionHeader eyebrow={h.countryEyebrow} title={t(locale, 'nav.locations')} />
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
          eyebrow={h.guidesEyebrow}
          title={t(locale, 'nav.guides')}
          link={{ href: localePath(locale, 'guides'), label: h.allGuides(GUIDES.length) }}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {featuredGuides.map((g) => (
            <Link
              key={g.slug}
              href={localePath(locale, `guides/${g.slug}`)}
              className="block rounded-2xl border border-line bg-paper shadow-soft hover-lift hover:shadow-lift hover:border-ink/20 p-5"
            >
              <p className="text-[10px] uppercase tracking-wider text-forest font-semibold">{g.category}</p>
              <h3 className="font-semibold text-ink mt-1.5 leading-snug">{tGuide(g.slug, locale, 'title', g.title)}</h3>
              <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-3">{tGuide(g.slug, locale, 'description', g.description)}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <HomeFaq locale={locale} />
    </div>
  );
}

function Stat({ number, label, suffix }: { number: number; label: string; suffix?: string }) {
  return (
    <div>
      <div className="font-display stat-num text-4xl md:text-5xl font-normal text-ink leading-none">
        {number.toLocaleString()}
        {suffix && <span className="text-forest">{suffix}</span>}
      </div>
      <div className="text-xs text-muted mt-2 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function BentoTile({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl p-5 flex flex-col justify-between shadow-soft hover-lift hover:shadow-lift transition relative overflow-hidden ${className ?? ''}`}
    >
      {children}
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
        <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1">
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
