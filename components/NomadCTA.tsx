import { SISTER_NOMAD, slowmadlyCountryUrl, slowmadlyHomeUrl } from '@/lib/sister-sites';
import type { Locale } from '@/lib/types';

type Context =
  | { type: 'job' }
  | { type: 'role'; label: string }
  | { type: 'location'; label: string; country?: string }
  | { type: 'city'; label: string; country?: string };

type CtaCopy = {
  headlineDefault: string;
  headlineJob: string;
  headlineRole: (l: string) => string;
  headlineMove: (l: string) => string;
  sisterSite: string;
  inlineCta: (d: string) => string;
  cardCta: (d: string) => string;
};

const COPY: Record<Locale, CtaCopy> = {
  en: {
    headlineDefault: 'Pick a basecamp for remote life.',
    headlineJob: 'Got the job? Pick a basecamp.',
    headlineRole: (l) => `Working remote as a ${l}? Where to base.`,
    headlineMove: (l) => `Moving to ${l}? See the nomad guide.`,
    sisterSite: 'Sister site',
    inlineCta: (d) => `Read the guide on ${d} →`,
    cardCta: (d) => `Read on ${d} →`,
  },
  fr: {
    headlineDefault: 'Choisissez un camp de base pour la vie remote.',
    headlineJob: 'Le poste est décroché ? Choisissez un camp de base.',
    headlineRole: (l) => `Travailler en remote comme ${l} ? Où s'installer.`,
    headlineMove: (l) => `Vous partez à ${l} ? Lisez le guide nomade.`,
    sisterSite: 'Site partenaire',
    inlineCta: (d) => `Lire le guide sur ${d} →`,
    cardCta: (d) => `Lire sur ${d} →`,
  },
  es: {
    headlineDefault: 'Elige un campamento base para la vida remota.',
    headlineJob: '¿Conseguiste el trabajo? Elige un campamento base.',
    headlineRole: (l) => `¿Trabajas en remoto como ${l}? Dónde establecerte.`,
    headlineMove: (l) => `¿Te mudas a ${l}? Mira la guía nómada.`,
    sisterSite: 'Sitio hermano',
    inlineCta: (d) => `Lee la guía en ${d} →`,
    cardCta: (d) => `Leer en ${d} →`,
  },
  de: {
    headlineDefault: 'Wähle ein Basislager fürs Remote-Leben.',
    headlineJob: 'Job in der Tasche? Wähle ein Basislager.',
    headlineRole: (l) => `Remote als ${l}? Wo du dich niederlässt.`,
    headlineMove: (l) => `Umzug nach ${l}? Lies den Nomaden-Guide.`,
    sisterSite: 'Schwester-Seite',
    inlineCta: (d) => `Guide auf ${d} lesen →`,
    cardCta: (d) => `Auf ${d} lesen →`,
  },
  pt: {
    headlineDefault: 'Escolha um acampamento base para a vida remota.',
    headlineJob: 'Conseguiu a vaga? Escolha um acampamento base.',
    headlineRole: (l) => `Trabalhando remoto como ${l}? Onde se estabelecer.`,
    headlineMove: (l) => `Mudando para ${l}? Veja o guia nômade.`,
    sisterSite: 'Site irmão',
    inlineCta: (d) => `Leia o guia em ${d} →`,
    cardCta: (d) => `Ler em ${d} →`,
  },
  it: {
    headlineDefault: 'Scegli un campo base per la vita remote.',
    headlineJob: 'Hai ottenuto il lavoro? Scegli un campo base.',
    headlineRole: (l) => `Lavori in remoto come ${l}? Dove stabilirti.`,
    headlineMove: (l) => `Ti trasferisci a ${l}? Guarda la guida nomade.`,
    sisterSite: 'Sito gemello',
    inlineCta: (d) => `Leggi la guida su ${d} →`,
    cardCta: (d) => `Leggi su ${d} →`,
  },
  pl: {
    headlineDefault: 'Wybierz bazę wypadową do życia zdalnego.',
    headlineJob: 'Masz pracę? Wybierz bazę wypadową.',
    headlineRole: (l) => `Pracujesz zdalnie jako ${l}? Gdzie się osiedlić.`,
    headlineMove: (l) => `Przeprowadzasz się do ${l}? Zobacz przewodnik nomadów.`,
    sisterSite: 'Strona siostrzana',
    inlineCta: (d) => `Przeczytaj przewodnik na ${d} →`,
    cardCta: (d) => `Czytaj na ${d} →`,
  },
};

function headline(copy: CtaCopy, c?: Context): string {
  if (!c) return copy.headlineDefault;
  switch (c.type) {
    case 'job':
      return copy.headlineJob;
    case 'role':
      return copy.headlineRole(c.label);
    case 'location':
    case 'city':
      return copy.headlineMove(c.label);
  }
}

function targetUrl(c: Context | undefined, locale: Locale | undefined): string {
  if (!c) return slowmadlyHomeUrl(locale);
  if (c.type === 'city' || c.type === 'location') {
    return slowmadlyCountryUrl(c.country ?? c.label, locale);
  }
  return slowmadlyHomeUrl(locale);
}

export function NomadCTA({
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
      <p className="my-4 text-[0.95rem] text-graphite border-l-4 border-forest pl-4 italic">
        {title}{' '}
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className="text-forest font-semibold not-italic hover:underline"
        >
          {copy.inlineCta(SISTER_NOMAD.domain)}
        </a>
      </p>
    );
  }

  return (
    <section className="rounded-2xl border border-line bg-paper shadow-soft p-6 relative overflow-hidden">
      <div className="absolute -left-12 -bottom-12 w-44 h-44 rounded-full bg-forestSoft opacity-60" />
      <div className="relative">
        <p className="text-[10px] uppercase tracking-wider text-forest font-bold">
          {copy.sisterSite} · {SISTER_NOMAD.domain}
        </p>
        <h2 className="font-display text-xl md:text-2xl font-normal tracking-tighter text-ink mt-2">
          {title}
        </h2>
        <p className="text-sm text-muted mt-2 max-w-prose">{SISTER_NOMAD.tagline}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center mt-4 px-4 py-2 bg-forest text-bg rounded-full text-sm font-semibold hover:bg-ink transition-colors"
        >
          {copy.cardCta(SISTER_NOMAD.domain)}
        </a>
      </div>
    </section>
  );
}
