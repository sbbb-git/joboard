import Link from 'next/link';
import type { Metadata } from 'next';
import { SKILLS, skillsByCategory } from '@/lib/skills';
import { buildMetadata, itemListJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { categoryIcon, categoryColors } from '@/lib/skill-icons';

export const dynamicParams = false;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'skills',
    title: 'Remote tech jobs by skill',
    description:
      'Browse remote engineering jobs by language, framework, cloud, database, AI/ML stack. Updated daily.',
  });
}

const CATEGORY_LABELS: Record<string, string> = {
  language: 'Languages',
  framework: 'Frameworks',
  cloud: 'Cloud platforms',
  data: 'Data & databases',
  devops: 'DevOps & platform',
  ai: 'AI & ML',
  mobile: 'Mobile',
  web3: 'API & Web3',
};

export default function SkillsIndex({ params }: { params: { lang: Locale } }) {
  const grouped = skillsByCategory();
  const itemList = itemListJsonLd(
    SKILLS.map((s) => ({ name: s.name, url: absoluteUrl(`/${params.lang}/skills/${s.slug}`) })),
  );
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <header className="border-b border-line pb-6">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">By skill</p>
        <h1 className="font-display text-4xl md:text-5xl font-normal tracking-tighter text-ink mt-1">
          Remote tech jobs by skill
        </h1>
        <p className="text-graphite text-base mt-3 max-w-prose">
          {SKILLS.length} skill categories tracked across the index. Pick a stack to see open
          positions and salary ranges.
        </p>
      </header>

      {Object.entries(grouped).map(([cat, items]) => {
        const colors = categoryColors(cat);
        return (
          <section key={cat}>
            <div className="flex items-baseline gap-3 mb-5">
              <span
                className={`inline-flex items-center justify-center w-9 h-9 rounded-lg font-mono text-sm font-bold ${colors.bg} ${colors.text}`}
              >
                {categoryIcon(cat)}
              </span>
              <h2 className="font-display text-2xl font-normal tracking-tighter text-ink">
                {CATEGORY_LABELS[cat] ?? cat}
              </h2>
              <span className="text-xs text-subtle">{items.length} skills</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map((s) => {
                const c = categoryColors(s.category);
                return (
                  <Link
                    key={s.slug}
                    href={`/${params.lang}/skills/${s.slug}`}
                    className="group block rounded-2xl border border-line bg-paper shadow-soft hover-lift hover:shadow-lift hover:border-ink/20 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg font-mono text-sm font-bold ${c.bg} ${c.text}`}
                      >
                        {categoryIcon(s.category)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-ink group-hover:text-forest transition-colors">
                          {s.name}
                        </h3>
                        <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed">
                          {s.blurb}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
