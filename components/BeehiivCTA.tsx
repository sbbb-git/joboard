import { AFFILIATE_MAP } from '@/lib/affiliates';
import type { Locale } from '@/lib/types';

type BeehiivCopy = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
};

const COPY: Record<Locale, BeehiivCopy> = {
  en: {
    eyebrow: 'Newsletter platform',
    title: 'Start your tech newsletter on Beehiiv',
    body: 'Beehiiv is the platform we use for our own newsletter. Built for monetised writing, with native ads, paid subscriptions and a referral program. No monthly fee on the starter tier.',
    cta: 'Start your newsletter on Beehiiv →',
  },
  fr: {
    eyebrow: 'Plateforme newsletter',
    title: 'Lancez votre newsletter tech sur Beehiiv',
    body: 'Beehiiv est la plateforme que nous utilisons pour notre propre newsletter. Pensée pour l\'écriture monétisée : pubs natives, abonnements payants, programme de parrainage. Gratuit sur le tier starter.',
    cta: 'Lancer votre newsletter sur Beehiiv →',
  },
  es: {
    eyebrow: 'Plataforma de newsletter',
    title: 'Lanza tu newsletter tech en Beehiiv',
    body: 'Beehiiv es la plataforma que usamos para nuestra propia newsletter. Pensada para escribir y monetizar: anuncios nativos, suscripciones de pago y programa de referidos. Sin cuota mensual en el tier starter.',
    cta: 'Lanza tu newsletter en Beehiiv →',
  },
  de: {
    eyebrow: 'Newsletter-Plattform',
    title: 'Starte deinen Tech-Newsletter auf Beehiiv',
    body: 'Beehiiv ist die Plattform, auf der wir unseren eigenen Newsletter betreiben. Gebaut für monetisiertes Schreiben: native Ads, Paid-Abos und ein Empfehlungsprogramm. Im Starter-Tarif ohne Monatsgebühr.',
    cta: 'Newsletter auf Beehiiv starten →',
  },
  pt: {
    eyebrow: 'Plataforma de newsletter',
    title: 'Comece sua newsletter tech no Beehiiv',
    body: 'O Beehiiv é a plataforma que usamos para a nossa newsletter. Feita para escrever e monetizar: anúncios nativos, assinaturas pagas e programa de indicação. Sem mensalidade no plano starter.',
    cta: 'Comece sua newsletter no Beehiiv →',
  },
  it: {
    eyebrow: 'Piattaforma newsletter',
    title: 'Lancia la tua newsletter tech su Beehiiv',
    body: 'Beehiiv è la piattaforma che usiamo per la nostra newsletter. Pensata per scrivere e monetizzare: annunci nativi, abbonamenti a pagamento, programma di referral. Nessun canone mensile sul tier starter.',
    cta: 'Lancia la tua newsletter su Beehiiv →',
  },
  pl: {
    eyebrow: 'Platforma newsletterowa',
    title: 'Uruchom swój newsletter tech na Beehiiv',
    body: 'Beehiiv to platforma, na której prowadzimy nasz własny newsletter. Stworzona do monetyzowanego pisania: natywne reklamy, płatne subskrypcje i program poleceń. Bez miesięcznej opłaty w pakiecie starter.',
    cta: 'Uruchom newsletter na Beehiiv →',
  },
};

export function BeehiivCTA({ locale = 'en' }: { locale?: Locale }) {
  const copy = COPY[locale];
  const url = AFFILIATE_MAP.beehiiv.url;
  return (
    <section className="rounded-2xl border border-line shadow-soft p-6 relative overflow-hidden bg-gradient-to-br from-terracottaSoft to-paper">
      <div className="absolute -left-12 -bottom-12 w-44 h-44 rounded-full bg-terracotta/15" />
      <div className="relative">
        <p className="text-[10px] uppercase tracking-wider text-terracotta font-bold">{copy.eyebrow}</p>
        <h2 className="font-display text-xl md:text-2xl font-normal tracking-tighter text-ink mt-2">
          {copy.title}
        </h2>
        <p className="text-sm text-graphite mt-2 max-w-prose">{copy.body}</p>
        <a
          href={url}
          target="_blank"
          rel="nofollow noopener sponsored"
          className="inline-flex items-center mt-4 px-5 py-2.5 bg-terracotta text-bg rounded-full text-sm font-semibold hover:bg-ink transition-colors"
        >
          {copy.cta}
        </a>
      </div>
    </section>
  );
}
