import type { Locale } from './types';

type Index = {
  metaTitle: string;
  metaDescription: (n: number) => string;
  eyebrow: string;
  h1: string;
  intro: (n: number) => string;
};

type WithCategories = Index & { categories: Record<string, string> };

export const GUIDES_I18N: Record<Locale, WithCategories> = {
  en: {
    metaTitle: 'Guides for remote tech workers',
    metaDescription: () => 'Long-form guides on finding remote tech jobs, salaries, visas, taxes, tools and lifestyle for remote engineers. Free, updated regularly, no signup needed.',
    eyebrow: 'Guides',
    h1: 'Guides for remote tech workers',
    intro: (n) => `${n} long-form, opinionated guides on every topic that matters for landing and sustaining a remote tech career.`,
    categories: { finding: 'Finding a job', salary: 'Salaries & negotiation', career: 'Career paths', freelance: 'Freelancing & Fiverr', visa: 'Visas', tax: 'Taxes', lifestyle: 'Lifestyle', tools: 'Tools & setup' },
  },
  fr: {
    metaTitle: 'Guides pour les travailleurs tech remote',
    metaDescription: () => 'Guides longs sur la recherche de jobs tech remote, salaires, visas, taxes, outils et lifestyle pour ingés remote. Gratuit, mis à jour régulièrement, sans inscription.',
    eyebrow: 'Guides',
    h1: 'Guides pour les travailleurs tech remote',
    intro: (n) => `${n} guides longs et tranchés sur tous les sujets qui comptent pour décrocher et tenir une carrière tech remote.`,
    categories: { finding: 'Trouver un job', salary: 'Salaires et négociation', career: 'Trajectoires de carrière', freelance: 'Freelance et Fiverr', visa: 'Visas', tax: 'Impôts', lifestyle: 'Lifestyle', tools: 'Outils et setup' },
  },
  de: {
    metaTitle: 'Guides für Remote-Tech-Worker',
    metaDescription: () => 'Ausführliche Guides zum Finden von Remote-Tech-Jobs, Gehältern, Visa, Steuern, Tools und Lifestyle für Remote-Engineers. Kostenlos, regelmäßig aktualisiert.',
    eyebrow: 'Guides',
    h1: 'Guides für Remote-Tech-Worker',
    intro: (n) => `${n} ausführliche, meinungsstarke Guides zu jedem Thema, das für eine Remote-Tech-Karriere zählt.`,
    categories: { finding: 'Job finden', salary: 'Gehälter & Verhandlung', career: 'Karrierepfade', freelance: 'Freelancing & Fiverr', visa: 'Visa', tax: 'Steuern', lifestyle: 'Lifestyle', tools: 'Tools & Setup' },
  },
};

export const GLOSSARY_I18N: Record<Locale, WithCategories & { missingPre: string; missingLink: string; missingPost: string }> = {
  en: {
    metaTitle: 'Remote work glossary',
    metaDescription: (n) => `${n} essential terms every remote tech worker should know: RTO, EOR, async, DNV, OKR, RSU, geo-arbitrage and more. Short definitions with deeper context.`,
    eyebrow: 'Glossary',
    h1: 'Remote work glossary',
    intro: (n) => `${n} terms every remote tech worker should know, organised by category. Short definitions for the quick lookup, longer explanations for the parts that actually differ from in-office work.`,
    categories: { work: 'Work patterns', comp: 'Compensation', legal: 'Legal & visas', culture: 'Culture', tech: 'Tech' },
    missingPre: 'Missing a term?',
    missingLink: 'Email us',
    missingPost: 'and we add it.',
  },
  fr: {
    metaTitle: 'Glossaire du travail remote',
    metaDescription: (n) => `${n} termes essentiels que chaque travailleur tech remote devrait connaître : RTO, EOR, async, DNV, OKR, RSU, géo-arbitrage et plus. Définitions courtes et contexte approfondi.`,
    eyebrow: 'Glossaire',
    h1: 'Glossaire du travail remote',
    intro: (n) => `${n} termes que tout travailleur tech remote devrait connaître, organisés par catégorie. Définitions courtes pour la recherche rapide, explications plus longues pour ce qui diffère vraiment du bureau.`,
    categories: { work: 'Modes de travail', comp: 'Rémunération', legal: 'Légal et visas', culture: 'Culture', tech: 'Tech' },
    missingPre: 'Un terme manque ?',
    missingLink: 'Écrivez-nous',
    missingPost: 'et nous l\'ajoutons.',
  },
  de: {
    metaTitle: 'Remote-Work-Glossar',
    metaDescription: (n) => `${n} unverzichtbare Begriffe, die jeder Remote-Tech-Worker kennen sollte: RTO, EOR, async, DNV, OKR, RSU, Geo-Arbitrage und mehr. Kurze Definitionen mit tieferem Kontext.`,
    eyebrow: 'Glossar',
    h1: 'Remote-Work-Glossar',
    intro: (n) => `${n} Begriffe, die jeder Remote-Tech-Worker kennen sollte, nach Kategorien geordnet. Kurze Definitionen zum schnellen Nachschlagen, längere Erklärungen für die Aspekte, die sich wirklich von der Büroarbeit unterscheiden.`,
    categories: { work: 'Arbeitsmodelle', comp: 'Vergütung', legal: 'Recht & Visa', culture: 'Kultur', tech: 'Tech' },
    missingPre: 'Ein Begriff fehlt?',
    missingLink: 'Schreiben Sie uns',
    missingPost: 'und wir fügen ihn hinzu.',
  },
};

