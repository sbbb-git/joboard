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
  es: {
    eyebrow: 'Seguro para nómadas',
    title: 'Seguro de salud que te acompaña a través de fronteras',
    body: 'SafetyWing está pensado para trabajadores remotos y nómadas. Seguro de salud y viaje por suscripción que cubre 180+ países, alta y baja en cualquier momento, facturación mensual. Incluye cobertura COVID, evacuación médica y hospitalización hasta 250 000 USD.',
    cta: 'Contratar SafetyWing →',
  },
  de: {
    eyebrow: 'Nomaden-Versicherung',
    title: 'Krankenversicherung, die mit dir um die Welt reist',
    body: 'SafetyWing ist speziell für Remote-Worker und Nomaden gebaut. Abo-basierte Kranken- und Reiseversicherung für 180+ Länder, jederzeit kündbar, monatliche Abrechnung. Inklusive COVID-Schutz, medizinischer Rückführung und stationärer Versorgung bis 250.000 USD.',
    cta: 'SafetyWing abschließen →',
  },
  pt: {
    eyebrow: 'Seguro para nômades',
    title: 'Seguro de saúde que te acompanha entre países',
    body: 'A SafetyWing foi feita para trabalhadores remotos e nômades. Seguro de saúde e viagem por assinatura cobrindo 180+ países, contrate e cancele a qualquer momento, cobrança mensal. Inclui cobertura COVID, evacuação médica e internação até 250.000 USD.',
    cta: 'Contratar SafetyWing →',
  },
  it: {
    eyebrow: 'Assicurazione nomadi',
    title: "Un'assicurazione sanitaria che ti segue tra i paesi",
    body: 'SafetyWing è costruita per lavoratori remote e nomadi. Assicurazione sanitaria e viaggio in abbonamento che copre 180+ paesi, attivazione e cancellazione in qualunque momento, fatturazione mensile. Include copertura COVID, evacuazione medica e ricovero fino a 250.000 USD.',
    cta: 'Attivare SafetyWing →',
  },
  pl: {
    eyebrow: 'Ubezpieczenie nomadów',
    title: 'Ubezpieczenie zdrowotne, które podróżuje z Tobą',
    body: 'SafetyWing zaprojektowane dla pracowników zdalnych i nomadów. Subskrypcyjne ubezpieczenie zdrowotne i podróżne pokrywające 180+ krajów, włącz i wyłącz w dowolnej chwili, miesięczne rozliczenia. Obejmuje COVID, ewakuację medyczną i hospitalizację do 250 000 USD.',
    cta: 'Wykup SafetyWing →',
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
