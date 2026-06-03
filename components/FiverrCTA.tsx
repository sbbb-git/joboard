import { AFFILIATE_MAP } from '@/lib/affiliates';
import type { Locale } from '@/lib/types';

type FiverrCopy = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
};

const COPY: Record<Locale, FiverrCopy> = {
  en: {
    eyebrow: 'Freelance marketplace',
    title: 'Turn your skills into income on Fiverr',
    body: 'Fiverr is the fastest way to start selling tech services to buyers worldwide. List a gig in minutes, set your own prices, and get paid for code, automation, design and AI work.',
    cta: 'Start selling on Fiverr →',
  },
  fr: {
    eyebrow: 'Marketplace freelance',
    title: 'Transformez vos compétences en revenus sur Fiverr',
    body: 'Fiverr est le moyen le plus rapide de vendre vos services tech à des clients du monde entier. Créez une offre en quelques minutes, fixez vos prix et soyez payé pour du code, de l\'automatisation, du design et du travail IA.',
    cta: 'Commencer à vendre sur Fiverr →',
  },
  es: {
    eyebrow: 'Marketplace freelance',
    title: 'Convierte tus habilidades en ingresos en Fiverr',
    body: 'Fiverr es la forma más rápida de empezar a vender servicios tech a clientes de todo el mundo. Publica un gig en minutos, fija tus precios y cobra por código, automatización, diseño y trabajo con IA.',
    cta: 'Empieza a vender en Fiverr →',
  },
  de: {
    eyebrow: 'Freelance-Marktplatz',
    title: 'Mach aus deinen Skills Einkommen auf Fiverr',
    body: 'Fiverr ist der schnellste Weg, Tech-Dienstleistungen an Kunden weltweit zu verkaufen. Erstelle in Minuten ein Gig, lege deine Preise selbst fest und werde für Code, Automatisierung, Design und KI-Arbeit bezahlt.',
    cta: 'Auf Fiverr verkaufen →',
  },
  pt: {
    eyebrow: 'Marketplace freelance',
    title: 'Transforme suas habilidades em renda no Fiverr',
    body: 'O Fiverr é a forma mais rápida de começar a vender serviços tech para clientes do mundo todo. Crie um gig em minutos, defina seus preços e seja pago por código, automação, design e trabalho com IA.',
    cta: 'Comece a vender no Fiverr →',
  },
  it: {
    eyebrow: 'Marketplace freelance',
    title: 'Trasforma le tue competenze in reddito su Fiverr',
    body: 'Fiverr è il modo più veloce per iniziare a vendere servizi tech a clienti di tutto il mondo. Crea un gig in pochi minuti, fissa i tuoi prezzi e fatti pagare per codice, automazione, design e lavoro con IA.',
    cta: 'Inizia a vendere su Fiverr →',
  },
  pl: {
    eyebrow: 'Marketplace dla freelancerów',
    title: 'Zamień swoje umiejętności w dochód na Fiverr',
    body: 'Fiverr to najszybszy sposób, by zacząć sprzedawać usługi tech klientom na całym świecie. Utwórz ofertę w kilka minut, ustal własne ceny i otrzymuj zapłatę za kod, automatyzację, design i pracę z AI.',
    cta: 'Zacznij sprzedawać na Fiverr →',
  },
};

export function FiverrCTA({ locale = 'en' }: { locale?: Locale }) {
  const copy = COPY[locale];
  const url = AFFILIATE_MAP.fiverr.url;
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
