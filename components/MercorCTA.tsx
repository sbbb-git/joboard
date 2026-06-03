import { AFFILIATE_MAP } from '@/lib/affiliates';
import type { Locale } from '@/lib/types';

type MercorCopy = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
};

const COPY: Record<Locale, MercorCopy> = {
  en: {
    eyebrow: 'Get paid by AI labs',
    title: 'Earn $30-$100/hour evaluating AI model outputs',
    body: 'Mercor matches vetted experts (developers, researchers, domain specialists) with paid evaluation work for frontier AI labs. Async, remote, USD payouts. Best fit if you have technical depth and want flexible high-rate side income.',
    cta: 'Apply to Mercor →',
  },
  fr: {
    eyebrow: 'Soyez payé par les labos IA',
    title: 'Gagnez 30 à 100 USD/heure en évaluant les sorties des modèles IA',
    body: "Mercor met en relation des experts vérifiés (développeurs, chercheurs, spécialistes métiers) avec du travail d'évaluation rémunéré pour les labos IA. Asynchrone, remote, paiements en USD. Idéal si vous avez de la profondeur technique et que vous voulez un revenu d'appoint flexible et bien payé.",
    cta: 'Postuler à Mercor →',
  },
  es: {
    eyebrow: 'Cobra de los labs de IA',
    title: 'Gana 30-100 USD/hora evaluando salidas de modelos IA',
    body: 'Mercor conecta a expertos validados (desarrolladores, investigadores, especialistas) con trabajo de evaluación remunerado para labs de IA punteros. Async, remoto, pagos en USD. Ideal si tienes profundidad técnica y quieres un ingreso extra flexible y bien pagado.',
    cta: 'Aplicar a Mercor →',
  },
  de: {
    eyebrow: 'Werde von KI-Laboren bezahlt',
    title: 'Verdiene 30-100 USD/Stunde mit der Bewertung von KI-Modell-Outputs',
    body: 'Mercor verbindet geprüfte Experten (Entwickler, Forscher, Domain-Spezialisten) mit bezahlter Evaluationsarbeit für führende KI-Labore. Asynchron, remote, Auszahlungen in USD. Beste Wahl, wenn du technische Tiefe hast und ein flexibles, gut bezahltes Nebeneinkommen suchst.',
    cta: 'Bei Mercor bewerben →',
  },
  pt: {
    eyebrow: 'Seja pago por labs de IA',
    title: 'Ganhe 30 a 100 USD/hora avaliando outputs de modelos de IA',
    body: 'A Mercor conecta especialistas validados (desenvolvedores, pesquisadores, especialistas de domínio) com trabalho remunerado de avaliação para labs de IA de ponta. Assíncrono, remoto, pagamentos em USD. Ideal se você tem profundidade técnica e quer uma renda extra flexível e bem paga.',
    cta: 'Aplicar na Mercor →',
  },
  it: {
    eyebrow: 'Fatti pagare dai lab di IA',
    title: 'Guadagna 30-100 USD/ora valutando gli output dei modelli IA',
    body: "Mercor mette in contatto esperti verificati (sviluppatori, ricercatori, specialisti di dominio) con lavoro retribuito di valutazione per i lab IA di punta. Asincrono, remote, pagamenti in USD. Ideale se hai profondità tecnica e cerchi un reddito extra flessibile e ben pagato.",
    cta: 'Candidati a Mercor →',
  },
  pl: {
    eyebrow: 'Otrzymuj zapłatę od labów AI',
    title: 'Zarabiaj 30-100 USD/godz. oceniając wyniki modeli AI',
    body: 'Mercor łączy zweryfikowanych ekspertów (deweloperów, badaczy, specjalistów dziedzinowych) z płatną pracą oceniania dla czołowych labów AI. Asynchronicznie, zdalnie, wypłaty w USD. Idealne, jeśli masz głęboką wiedzę techniczną i chcesz elastyczny, dobrze płatny dochód dodatkowy.',
    cta: 'Aplikuj do Mercor →',
  },
};

export function MercorCTA({ locale = 'en' }: { locale?: Locale }) {
  const copy = COPY[locale];
  const url = AFFILIATE_MAP.mercor.url;
  return (
    <section className="rounded-2xl border border-line shadow-soft p-6 relative overflow-hidden bg-ink text-bg">
      <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-amber/20" />
      <div className="relative">
        <p className="text-[10px] uppercase tracking-wider text-amber font-bold">{copy.eyebrow}</p>
        <h2 className="font-display text-xl md:text-2xl font-normal tracking-tighter text-bg mt-2">
          {copy.title}
        </h2>
        <p className="text-sm text-bg/80 mt-2 max-w-prose">{copy.body}</p>
        <a
          href={url}
          target="_blank"
          rel="nofollow noopener sponsored"
          className="inline-flex items-center mt-4 px-5 py-2.5 bg-amber text-ink rounded-full text-sm font-semibold hover:bg-bg hover:text-ink transition-colors"
        >
          {copy.cta}
        </a>
      </div>
    </section>
  );
}
