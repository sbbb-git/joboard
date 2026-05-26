import Link from 'next/link';
import type { Metadata } from 'next';
import { SKILLS, skillsByCategory } from '@/lib/skills';
import { buildMetadata, itemListJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';

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
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <header className="border-b border-line pb-6">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">By skill</p>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-ink mt-1">
          Remote tech jobs by skill
        </h1>
        <p className="text-graphite text-base mt-3 max-w-prose">
          {SKILLS.length} skill categories tracked across the index. Pick a stack to see open
          positions and salary ranges.
        </p>
      </header>

      {Object.entries(grouped).map(([cat, items]) => (
        <section key={cat}>
          <h2 className="font-display text-xl font-bold tracking-tighter text-ink mb-3">
            {CATEGORY_LABELS[cat] ?? cat}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {items.map((s) => (
              <Link
                key={s.slug}
                href={`/${params.lang}/skills/${s.slug}`}
                className="block rounded-xl border border-line bg-paper shadow-soft hover-lift hover:shadow-lift hover:border-ink/20 p-4"
              >
                <div className="font-semibold text-ink">{s.name}</div>
                <div className="text-xs text-muted mt-1 line-clamp-2">{s.blurb}</div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
