import { SISTER_AI, aiByJobRoleUrl, aiByJobHomeUrl } from '@/lib/sister-sites';
import type { Locale } from '@/lib/types';

type Context =
  | { type: 'role'; label: string }
  | { type: 'skill'; label: string }
  | { type: 'guide'; label?: string };

type CtaCopy = {
  headlineDefault: string;
  headlineRole: (l: string) => string;
  headlineSkill: (l: string) => string;
  headlineGuide: (l: string) => string;
  headlineGuideDefault: string;
  sisterSite: string;
  inlineCta: (d: string) => string;
  cardCta: (d: string) => string;
};

const COPY: Record<Locale, CtaCopy> = {
  en: {
    headlineDefault: 'Best AI tools for every tech role',
    headlineRole: (l) => `Best AI tools for ${l} jobs`,
    headlineSkill: (l) => `Best AI tools for ${l} engineers`,
    headlineGuide: (l) => `Best AI tools for ${l}`,
    headlineGuideDefault: 'Best AI tools for tech work',
    sisterSite: 'Sister site',
    inlineCta: (d) => `See the curated stack on ${d} →`,
    cardCta: (d) => `Explore on ${d} →`,
  },
  fr: {
    headlineDefault: 'Les meilleurs outils IA pour chaque métier tech',
    headlineRole: (l) => `Les meilleurs outils IA pour les postes ${l}`,
    headlineSkill: (l) => `Les meilleurs outils IA pour les ingénieurs ${l}`,
    headlineGuide: (l) => `Les meilleurs outils IA pour ${l}`,
    headlineGuideDefault: 'Les meilleurs outils IA pour le travail tech',
    sisterSite: 'Site partenaire',
    inlineCta: (d) => `Voir la sélection sur ${d} →`,
    cardCta: (d) => `Explorer sur ${d} →`,
  },
  es: {
    headlineDefault: 'Las mejores herramientas IA para cada rol tech',
    headlineRole: (l) => `Las mejores herramientas IA para puestos ${l}`,
    headlineSkill: (l) => `Las mejores herramientas IA para ingenieros ${l}`,
    headlineGuide: (l) => `Las mejores herramientas IA para ${l}`,
    headlineGuideDefault: 'Las mejores herramientas IA para el trabajo tech',
    sisterSite: 'Sitio hermano',
    inlineCta: (d) => `Mira la selección en ${d} →`,
    cardCta: (d) => `Explorar en ${d} →`,
  },
  de: {
    headlineDefault: 'Die besten KI-Tools für jede Tech-Rolle',
    headlineRole: (l) => `Die besten KI-Tools für ${l}-Jobs`,
    headlineSkill: (l) => `Die besten KI-Tools für ${l}-Ingenieure`,
    headlineGuide: (l) => `Die besten KI-Tools für ${l}`,
    headlineGuideDefault: 'Die besten KI-Tools für die Tech-Arbeit',
    sisterSite: 'Schwester-Seite',
    inlineCta: (d) => `Sieh dir den Stack auf ${d} an →`,
    cardCta: (d) => `Auf ${d} entdecken →`,
  },
  pt: {
    headlineDefault: 'As melhores ferramentas de IA para cada cargo tech',
    headlineRole: (l) => `As melhores ferramentas de IA para vagas ${l}`,
    headlineSkill: (l) => `As melhores ferramentas de IA para engenheiros ${l}`,
    headlineGuide: (l) => `As melhores ferramentas de IA para ${l}`,
    headlineGuideDefault: 'As melhores ferramentas de IA para o trabalho tech',
    sisterSite: 'Site irmão',
    inlineCta: (d) => `Veja a seleção em ${d} →`,
    cardCta: (d) => `Explorar em ${d} →`,
  },
  it: {
    headlineDefault: 'I migliori strumenti IA per ogni ruolo tech',
    headlineRole: (l) => `I migliori strumenti IA per i lavori ${l}`,
    headlineSkill: (l) => `I migliori strumenti IA per gli ingegneri ${l}`,
    headlineGuide: (l) => `I migliori strumenti IA per ${l}`,
    headlineGuideDefault: 'I migliori strumenti IA per il lavoro tech',
    sisterSite: 'Sito gemello',
    inlineCta: (d) => `Guarda la selezione su ${d} →`,
    cardCta: (d) => `Esplora su ${d} →`,
  },
  pl: {
    headlineDefault: 'Najlepsze narzędzia AI dla każdej roli tech',
    headlineRole: (l) => `Najlepsze narzędzia AI dla stanowisk ${l}`,
    headlineSkill: (l) => `Najlepsze narzędzia AI dla inżynierów ${l}`,
    headlineGuide: (l) => `Najlepsze narzędzia AI dla ${l}`,
    headlineGuideDefault: 'Najlepsze narzędzia AI do pracy tech',
    sisterSite: 'Strona siostrzana',
    inlineCta: (d) => `Zobacz zestaw na ${d} →`,
    cardCta: (d) => `Odkryj na ${d} →`,
  },
};

function headline(copy: CtaCopy, c?: Context): string {
  if (!c) return copy.headlineDefault;
  switch (c.type) {
    case 'role':
      return copy.headlineRole(c.label);
    case 'skill':
      return copy.headlineSkill(c.label);
    case 'guide':
      return c.label ? copy.headlineGuide(c.label) : copy.headlineGuideDefault;
  }
}

function targetUrl(c: Context | undefined, locale: Locale | undefined): string {
  if (!c) return aiByJobHomeUrl(locale);
  if (c.type === 'role' || c.type === 'skill') {
    return aiByJobRoleUrl(c.label, locale);
  }
  return aiByJobHomeUrl(locale);
}

export function AiToolsCTA({
  context,
  locale = 'en',
  variant = 'card',
}: {
  context?: Context;
  locale?: Locale;
  variant?: 'card' | 'inline';
}) {
  const copy = COPY[locale];
  const title = headline(copy, context);
  const url = targetUrl(context, locale);

  if (variant === 'inline') {
    return (
      <p className="my-4 text-[0.95rem] text-graphite border-l-4 border-terracotta pl-4 italic">
        {title}.{' '}
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className="text-terracotta font-semibold not-italic hover:underline"
        >
          {copy.inlineCta(SISTER_AI.domain)}
        </a>
      </p>
    );
  }

  return (
    <section className="rounded-2xl border border-line bg-paper shadow-soft p-6 relative overflow-hidden">
      <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-terracottaSoft opacity-60" />
      <div className="relative">
        <p className="text-[10px] uppercase tracking-wider text-terracotta font-bold">
          {copy.sisterSite} · {SISTER_AI.domain}
        </p>
        <h2 className="font-display text-xl md:text-2xl font-normal tracking-tighter text-ink mt-2">
          {title}
        </h2>
        <p className="text-sm text-muted mt-2 max-w-prose">{SISTER_AI.tagline}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center mt-4 px-4 py-2 bg-terracotta text-bg rounded-full text-sm font-semibold hover:bg-ink transition-colors"
        >
          {copy.cardCta(SISTER_AI.domain)}
        </a>
      </div>
    </section>
  );
}
