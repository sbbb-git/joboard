import { wiseUrlForLocale } from '@/lib/affiliates';
import type { Locale } from '@/lib/types';

type WiseCopy = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
};

const COPY: Record<Locale, WiseCopy> = {
  en: {
    eyebrow: 'Multi-currency banking',
    title: 'Get paid in USD or EUR from anywhere with Wise',
    body: 'The default account for remote workers earning across borders. Real exchange rate (no FX markup), IBANs in 8+ currencies, no monthly fee. Receive client and employer payments at the mid-market rate, hold balances in any currency, spend with a debit card worldwide.',
    cta: 'Open a free Wise account →',
  },
  fr: {
    eyebrow: 'Banque multi-devises',
    title: 'Soyez payé en USD ou EUR depuis partout avec Wise',
    body: "Le compte par défaut des travailleurs remote payés à l'international. Taux de change réel (sans marge), IBANs dans 8+ devises, sans frais mensuels. Recevez vos paiements clients et employeurs au taux interbancaire, gardez vos soldes dans la devise voulue, payez par carte partout dans le monde.",
    cta: 'Ouvrir un compte Wise gratuit →',
  },
  es: {
    eyebrow: 'Banca multidivisa',
    title: 'Cobra en USD o EUR desde cualquier sitio con Wise',
    body: 'La cuenta por defecto para trabajadores remotos que cobran entre divisas. Tipo de cambio real (sin marca FX), IBANs en 8+ divisas, sin cuota mensual. Recibe pagos de clientes y empleadores al tipo interbancario, conserva saldos en cualquier divisa, paga con tarjeta en todo el mundo.',
    cta: 'Abrir cuenta Wise gratis →',
  },
  de: {
    eyebrow: 'Multi-Währungs-Konto',
    title: 'In USD oder EUR von überall mit Wise bezahlt werden',
    body: 'Das Standardkonto für Remote-Worker mit internationalen Einnahmen. Echter Wechselkurs (kein FX-Aufschlag), IBANs in 8+ Währungen, keine monatliche Gebühr. Empfange Kunden- und Arbeitgeberzahlungen zum Interbankenkurs, halte Salden in beliebiger Währung, zahle weltweit mit Debitkarte.',
    cta: 'Kostenloses Wise-Konto eröffnen →',
  },
  pt: {
    eyebrow: 'Banco multimoeda',
    title: 'Receba em USD ou EUR de qualquer lugar com Wise',
    body: 'A conta padrão para trabalhadores remotos que recebem entre moedas. Taxa de câmbio real (sem markup), IBANs em 8+ moedas, sem mensalidade. Receba pagamentos de clientes e empregadores à taxa interbancária, mantenha saldos em qualquer moeda, gaste com cartão no mundo todo.',
    cta: 'Abrir conta Wise gratuita →',
  },
  it: {
    eyebrow: 'Banking multi-valuta',
    title: 'Fatti pagare in USD o EUR da ovunque con Wise',
    body: 'Il conto di default per i lavoratori remote pagati tra valute. Tasso di cambio reale (senza markup FX), IBAN in 8+ valute, nessun canone mensile. Ricevi i pagamenti di clienti e datori di lavoro al tasso interbancario, conserva i saldi in qualunque valuta, paga con carta in tutto il mondo.',
    cta: 'Apri un conto Wise gratuito →',
  },
  pl: {
    eyebrow: 'Bankowość wielowalutowa',
    title: 'Otrzymuj zapłatę w USD lub EUR skądkolwiek z Wise',
    body: 'Domyślne konto dla pracowników zdalnych zarabiających w wielu walutach. Realny kurs (bez narzutu FX), IBAN-y w 8+ walutach, bez miesięcznych opłat. Odbieraj płatności od klientów i pracodawców po kursie międzybankowym, trzymaj salda w dowolnej walucie, płać kartą na całym świecie.',
    cta: 'Otwórz darmowe konto Wise →',
  },
};

export function WiseCTA({ locale = 'en' }: { locale?: Locale }) {
  const copy = COPY[locale];
  const url = wiseUrlForLocale(locale);
  return (
    <section className="rounded-2xl border border-line shadow-soft p-6 relative overflow-hidden bg-gradient-to-br from-forestSoft to-paper">
      <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-forest/15" />
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
          className="inline-flex items-center mt-4 px-5 py-2.5 bg-forest text-bg rounded-full text-sm font-semibold hover:bg-ink transition-colors"
        >
          {copy.cta}
        </a>
      </div>
    </section>
  );
}
