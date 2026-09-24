import type { Locale } from './types';

export const SKILL_BLURBS: Record<string, Partial<Record<Locale, string>>> = {
  java: {
    fr: "Pilier enterprise, courant sur les offres back-end remote enterprise.",
    de: 'Enterprise-Rückgrat, häufig bei Remote-Enterprise-Backend-Stellen.',
  },
  csharp: {
    fr: "Courant sur les offres remote enterprise et game backend.",
    de: 'Häufig bei Remote-Enterprise- und Game-Backend-Stellen.',
  },
  aws: {
    fr: 'Le cloud le plus demandé sur backend, devops et platform remote.',
    de: 'Die meistgefragte Cloud bei Remote-Backend-, DevOps- und Platform-Rollen.',
  },
  'react-native': {
    fr: 'Compétence mobile cross-platform établie sur les offres remote.',
    de: 'Etablierter Cross-Platform-Mobile-Skill bei Remote-Stellen.',
  },
};

export function tSkillBlurb(slug: string, locale: Locale, fallback: string): string {
  return SKILL_BLURBS[slug]?.[locale] ?? fallback;
}
