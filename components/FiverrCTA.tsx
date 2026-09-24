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
  de: {
    eyebrow: 'Freelance-Marktplatz',
    title: 'Mach aus deinen Skills Einkommen auf Fiverr',
    body: 'Fiverr ist der schnellste Weg, Tech-Dienstleistungen an Kunden weltweit zu verkaufen. Erstelle in Minuten ein Gig, lege deine Preise selbst fest und werde für Code, Automatisierung, Design und KI-Arbeit bezahlt.',
    cta: 'Auf Fiverr verkaufen →',
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
