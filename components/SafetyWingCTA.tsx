import { AFFILIATE_MAP } from '@/lib/affiliates';
import type { Locale } from '@/lib/types';

type SwCopy = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
};

const COPY: Record<Locale, SwCopy> = {
  en: {
    eyebrow: 'Nomad insurance',
    title: 'Health insurance that follows you across borders',
    body: 'SafetyWing is built specifically for remote workers and nomads. Subscription health and travel insurance covering 180+ countries, sign up and cancel any time, monthly billing. Includes COVID coverage, medical evacuation, and inpatient care up to USD 250,000.',
    cta: 'Get SafetyWing coverage →',
  },
  fr: {
    eyebrow: 'Assurance nomade',
    title: 'Une assurance santé qui vous suit à travers les frontières',
    body: 'SafetyWing est conçue pour les travailleurs remote et les nomades. Assurance santé et voyage par abonnement couvrant 180+ pays, souscription et résiliation à tout moment, facturation mensuelle. Comprend la couverture COVID, le rapatriement médical et les soins hospitaliers jusqu\'à 250 000 USD.',
    cta: 'Souscrire à SafetyWing →',
  },
  de: {
    eyebrow: 'Nomaden-Versicherung',
    title: 'Krankenversicherung, die mit dir um die Welt reist',
    body: 'SafetyWing ist speziell für Remote-Worker und Nomaden gebaut. Abo-basierte Kranken- und Reiseversicherung für 180+ Länder, jederzeit kündbar, monatliche Abrechnung. Inklusive COVID-Schutz, medizinischer Rückführung und stationärer Versorgung bis 250.000 USD.',
    cta: 'SafetyWing abschließen →',
  },
};

export function SafetyWingCTA({ locale = 'en' }: { locale?: Locale }) {
  const copy = COPY[locale];
  const url = AFFILIATE_MAP.safetywing.url;
  return (
    <section className="rounded-2xl border border-line shadow-soft p-6 relative overflow-hidden bg-gradient-to-br from-paper to-forestSoft">
      <div className="absolute -left-12 -bottom-12 w-44 h-44 rounded-full bg-forest/15" />
      <div className="relative">
        <p className="text-[10px] uppercase tracking-wider text-forest font-bold">{copy.eyebrow}</p>
        <h2 className="font-display text-xl md:text-2xl font-normal tracking-tighter text-ink mt-2">
          {copy.title}
        </h2>
        <p className="text-sm text-graphite mt-2 max-w-prose">{copy.body}</p>
        <a
          href={url}
          target="_blank"
          rel="nofollow noopener sponsored"
          className="inline-flex items-center mt-4 px-5 py-2.5 bg-ink text-bg rounded-full text-sm font-semibold hover:bg-forest transition-colors"
        >
          {copy.cta}
        </a>
      </div>
    </section>
  );
}
