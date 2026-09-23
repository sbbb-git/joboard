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

type SkillMetaCopy = {
  // Only the template wording lives here. The skill blurb that opens the
  // description comes from tSkillBlurb() and is already translated.
  metaTitle: (skill: string) => string;
  metaSuffix: (skill: string) => string;
  // Short blurbs leave the description well under the ~150 characters Google
  // renders, so this tops it up when there is room for it.
  metaExtra: string;
};

const SKILL_META_I18N: Record<Locale, SkillMetaCopy> = {
  en: {
    metaTitle: (s) => `Remote ${s} jobs`,
    metaSuffix: (s) =>
      `Browse open remote positions that require ${s}, with salary ranges and seniority levels.`,
    metaExtra: 'Updated every day.',
  },
  fr: {
    metaTitle: (s) => `Offres d'emploi ${s} en remote`,
    metaSuffix: (s) =>
      `Parcourez les postes remote qui demandent ${s}, avec fourchettes salariales et niveaux.`,
    metaExtra: 'À jour chaque jour.',
  },
  es: {
    metaTitle: (s) => `Empleos remotos de ${s}`,
    metaSuffix: (s) =>
      `Explora puestos remotos que piden ${s}, con rangos salariales y niveles de seniority.`,
    metaExtra: 'Al día, cada día.',
  },
  de: {
    metaTitle: (s) => `Remote-Jobs mit ${s}`,
    metaSuffix: (s) =>
      `Offene Remote-Stellen mit ${s}, inklusive Gehaltsspannen, Level und Bewerbungslinks.`,
    metaExtra: 'Jeden Tag aktuell.',
  },
  pt: {
    metaTitle: (s) => `Vagas remotas de ${s}`,
    metaSuffix: (s) =>
      `Veja as vagas remotas que pedem ${s}, com faixas salariais e níveis de senioridade.`,
    metaExtra: 'Atualizado todo dia.',
  },
  it: {
    metaTitle: (s) => `Lavoro remote con ${s}`,
    metaSuffix: (s) =>
      `Sfoglia le posizioni remote che richiedono ${s}, con fasce di stipendio, livelli e sedi.`,
    metaExtra: 'Sempre aggiornato.',
  },
  pl: {
    metaTitle: (s) => `Praca zdalna: ${s}`,
    metaSuffix: (s) =>
      `Przeglądaj zdalne oferty wymagające ${s}, z widełkami płacowymi i poziomami stanowisk.`,
    metaExtra: 'Zawsze aktualne.',
  },
};

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
  const copy = SKILL_META_I18N[params.lang];
  const body = `${tSkillBlurb(s.slug, params.lang, s.blurb)} ${copy.metaSuffix(s.name)}`;
  const description =
    body.length + 1 + copy.metaExtra.length <= 160 ? `${body} ${copy.metaExtra}` : body;
  return buildMetadata({
    locale: params.lang,
    path: `skills/${params.skill}`,
    title: copy.metaTitle(s.name),
    description,
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
          <EarnWithAi locale={params.lang} />
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
