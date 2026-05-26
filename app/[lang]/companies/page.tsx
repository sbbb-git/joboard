import Link from 'next/link';
import type { Metadata } from 'next';
import { topCompanies } from '@/lib/jobs';
import { localePath, t } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'companies',
    title: 'Remote-friendly companies hiring now',
    description:
      'Every company currently posting remote tech jobs in our index, grouped by how many openings they have.',
  });
}

function tileColors(name: string): { bg: string; fg: string } {
  const palette = [
    { bg: 'bg-forestSoft', fg: 'text-forest' },
    { bg: 'bg-terracottaSoft', fg: 'text-terracotta' },
    { bg: 'bg-amberSoft', fg: 'text-amber' },
    { bg: 'bg-sand', fg: 'text-ink' },
  ];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return palette[h % palette.length];
}

export default function CompaniesPage({ params }: { params: { lang: Locale } }) {
  const all = topCompanies(500);
  const tier1 = all.filter((c) => c.count >= 5);
  const tier2 = all.filter((c) => c.count >= 2 && c.count < 5);
  const tier3 = all.filter((c) => c.count === 1);

  return (
    <div className="space-y-10">
      <header className="border-b border-line pb-6">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">Companies</p>
        <h1 className="font-display text-4xl md:text-5xl font-normal tracking-tighter text-ink mt-1">
          {t(params.lang, 'nav.companies')}
        </h1>
        <p className="text-graphite text-base mt-3 max-w-prose">
          {all.length.toLocaleString()} companies currently hiring remote tech roles in our index.
          Grouped by number of open positions.
        </p>
      </header>

      {tier1.length > 0 && (
        <CompanySection
          title="Hiring actively"
          subtitle="5+ open remote roles"
          companies={tier1}
          locale={params.lang}
          large
        />
      )}
      {tier2.length > 0 && (
        <CompanySection
          title="A few openings"
          subtitle="2-4 open roles"
          companies={tier2}
          locale={params.lang}
        />
      )}
      {tier3.length > 0 && (
        <CompanySection
          title="Single posting"
          subtitle="1 open role each"
          companies={tier3.slice(0, 200)}
          locale={params.lang}
          compact
        />
      )}
    </div>
  );
}

function CompanySection({
  title,
  subtitle,
  companies,
  locale,
  large,
  compact,
}: {
  title: string;
  subtitle: string;
  companies: Array<{ slug: string; name: string; count: number }>;
  locale: Locale;
  large?: boolean;
  compact?: boolean;
}) {
  return (
    <section>
      <div className="flex items-baseline gap-3 mb-4 flex-wrap">
        <h2 className="font-display text-2xl font-normal tracking-tighter text-ink">{title}</h2>
        <span className="text-xs text-subtle">
          {subtitle} · {companies.length}
        </span>
      </div>
      {large ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {companies.map((c) => {
            const tile = tileColors(c.name);
            return (
              <Link
                key={c.slug}
                href={localePath(locale, `companies/${c.slug}`)}
                className="group flex items-center gap-3 rounded-2xl border border-line bg-paper shadow-soft hover-lift hover:shadow-lift hover:border-ink/20 p-4"
              >
                <span
                  className={`flex-shrink-0 w-11 h-11 rounded-xl ${tile.bg} ${tile.fg} flex items-center justify-center text-base font-bold`}
                >
                  {c.name.charAt(0).toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-ink group-hover:text-forest transition-colors line-clamp-1">
                    {c.name}
                  </p>
                  <p className="text-xs text-muted">
                    {c.count} open {c.count === 1 ? 'role' : 'roles'}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : compact ? (
        <div className="flex flex-wrap gap-1.5">
          {companies.map((c) => (
            <Link
              key={c.slug}
              href={localePath(locale, `companies/${c.slug}`)}
              className="text-xs px-2.5 py-1.5 rounded-full border border-line bg-paper hover:border-ink hover:bg-sand transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {companies.map((c) => {
            const tile = tileColors(c.name);
            return (
              <Link
                key={c.slug}
                href={localePath(locale, `companies/${c.slug}`)}
                className="group flex items-center gap-2.5 rounded-xl border border-line bg-paper hover:border-ink/30 transition-colors p-2.5"
              >
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-md ${tile.bg} ${tile.fg} flex items-center justify-center text-sm font-bold`}
                >
                  {c.name.charAt(0).toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-ink line-clamp-1 group-hover:text-forest transition-colors">
                    {c.name}
                  </p>
                  <p className="text-[11px] text-muted">{c.count} roles</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
