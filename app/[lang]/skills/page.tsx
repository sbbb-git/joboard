import Link from 'next/link';
import type { Metadata } from 'next';
import { SKILLS, skillsByCategory } from '@/lib/skills';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'skills',
    title: 'Remote tech jobs by skill',
    description:
      'Browse remote engineering jobs by programming language, framework, cloud, database, and ML stack. Updated daily.',
  });
}

const CATEGORY_LABELS: Record<string, string> = {
  language: 'Languages',
  framework: 'Frameworks',
  cloud: 'Cloud platforms',
  data: 'Data and databases',
  devops: 'DevOps and platform',
  ai: 'AI and ML',
  mobile: 'Mobile',
  web3: 'API and Web3',
};

export default function SkillsIndex({ params }: { params: { lang: Locale } }) {
  const grouped = skillsByCategory();
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold">Remote tech jobs by skill</h1>
        <p className="text-muted text-sm mt-2 max-w-prose">
          {SKILLS.length} skill categories tracked across our index. Pick a stack to see open
          remote positions and salary ranges for it.
        </p>
      </header>

      {Object.entries(grouped).map(([cat, items]) => (
        <section key={cat}>
          <h2 className="text-lg font-semibold mb-3">{CATEGORY_LABELS[cat] ?? cat}</h2>
          <div className="flex flex-wrap gap-2">
            {items.map((s) => (
              <Link
                key={s.slug}
                href={`/${params.lang}/skills/${s.slug}`}
                className="text-sm px-3 py-1.5 rounded-full border border-line hover:border-ink"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
