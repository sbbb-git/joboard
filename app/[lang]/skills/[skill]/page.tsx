import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { allJobs } from '@/lib/jobs';
import { SKILLS, SKILL_MAP } from '@/lib/skills';
import { tSkillBlurb } from '@/lib/skills-i18n';
import { LOCALES, t } from '@/lib/i18n';
import { buildMetadata, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import type { JobNormalized, Locale } from '@/lib/types';
import { AiToolsCTA } from '@/components/AiToolsCTA';
import { EarnWithAi } from '@/components/EarnWithAi';
import { Breadcrumb } from '@/components/Breadcrumb';
import { localePath } from '@/lib/i18n';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => SKILLS.map((s) => ({ lang, skill: s.slug })));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; skill: string };
}): Metadata {
  const s = SKILL_MAP[params.skill];
  if (!s) return { title: 'Skill not found' };
  return buildMetadata({
    locale: params.lang,
    path: `skills/${params.skill}`,
    title: `Remote ${s.name} jobs`,
    description: `${tSkillBlurb(s.slug, params.lang, s.blurb)} Browse open remote positions requiring ${s.name}, updated daily.`,
  });
}

function matchSkillJobs(skill: { name: string; aliases: string[] }): JobNormalized[] {
  const needles = [skill.name.toLowerCase(), ...skill.aliases.map((a) => a.toLowerCase())];
  return allJobs().filter((j) => {
    const hay = `${j.title} ${j.description} ${(j.tags ?? []).join(' ')}`.toLowerCase();
    return needles.some((n) => hay.includes(n));
  });
}

export default function SkillPage({ params }: { params: { lang: Locale; skill: string } }) {
  const s = SKILL_MAP[params.skill];
  if (!s) notFound();
  const jobs = matchSkillJobs(s).slice(0, 60);

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', url: absoluteUrl(`/${params.lang}`) },
    { name: 'Skills', url: absoluteUrl(`/${params.lang}/skills`) },
    { name: s.name, url: absoluteUrl(`/${params.lang}/skills/${s.slug}`) },
  ]);

  const related = SKILLS.filter((x) => x.category === s.category && x.slug !== s.slug).slice(0, 6);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Breadcrumb
        items={[
          { label: 'Home', href: localePath(params.lang) },
          { label: 'Skills', href: localePath(params.lang, 'skills') },
          { label: s.name },
        ]}
      />
      <header className="border-b border-line pb-4">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{s.category}</p>
        <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1.5">
          Remote {s.name} jobs
        </h1>
        <p className="text-graphite text-base mt-3">{tSkillBlurb(s.slug, params.lang, s.blurb)}</p>
      </header>

      <section className="prose-body text-[0.95rem] leading-relaxed">
        <p>{s.bodyEn}</p>
      </section>

      {s.category === 'ai' && (
        <>
          <AiToolsCTA context={{ type: 'skill', label: s.name }}  locale={params.lang} />
          <EarnWithAi />
        </>
      )}

      <section>
        <h2 className="text-lg font-semibold mb-3">
          {jobs.length > 0 ? `Open ${s.name} positions` : 'No matching positions right now'}
        </h2>
        {jobs.length === 0 ? (
          <p className="text-sm text-muted">{t(params.lang, 'list.empty')}</p>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {jobs.map((j) => (
              <JobCard key={j.id} job={j} locale={params.lang} />
            ))}
          </div>
        )}
      </section>

      {related.length > 0 && (
        <section className="border-t border-line pt-6">
          <h2 className="text-lg font-semibold mb-3">Related skills</h2>
          <div className="flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${params.lang}/skills/${r.slug}`}
                className="text-sm px-3 py-1.5 rounded-full border border-line hover:border-ink"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
