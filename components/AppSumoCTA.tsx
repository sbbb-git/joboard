import { AFFILIATE_MAP } from '@/lib/affiliates';
import type { Locale } from '@/lib/types';

type AppSumoCopy = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
};

const COPY: Record<Locale, AppSumoCopy> = {
  en: {
    eyebrow: 'Lifetime SaaS deals',
    title: 'Save thousands on the tools you already need',
    body: 'AppSumo aggregates lifetime deals on SaaS, AI tools, marketing platforms and dev utilities. Pay once, keep access forever, and skip recurring subscriptions on the software remote teams actually use.',
    cta: 'See current AppSumo deals →',
  },
  fr: {
    eyebrow: 'Offres SaaS à vie',
    title: 'Économisez des milliers sur les outils dont vous avez déjà besoin',
    body: 'AppSumo regroupe des deals à vie sur les SaaS, outils IA, plateformes marketing et utilitaires dev. Vous payez une fois, gardez l\'accès pour toujours, et évitez les abonnements récurrents sur les logiciels que les équipes remote utilisent vraiment.',
    cta: 'Voir les deals AppSumo en cours →',
  },
  de: {
    eyebrow: 'Lifetime-SaaS-Deals',
    title: 'Spare Tausende bei den Tools, die du ohnehin brauchst',
    body: 'AppSumo bündelt Lifetime-Deals für SaaS, KI-Tools, Marketing-Plattformen und Dev-Utilities. Einmal zahlen, dauerhaft nutzen, und die wiederkehrenden Abos für Software sparen, die Remote-Teams wirklich verwenden.',
    cta: 'Aktuelle AppSumo-Deals ansehen →',
  },
};

export function AppSumoCTA({ locale = 'en' }: { locale?: Locale }) {
  const copy = COPY[locale];
  const url = AFFILIATE_MAP.appsumo.url;
  return (
    <section className="rounded-2xl border border-line shadow-soft p-6 relative overflow-hidden bg-gradient-to-br from-amberSoft to-paper">
      <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-amber/15" />
      <div className="relative">
        <p className="text-[10px] uppercase tracking-wider text-amber font-bold">{copy.eyebrow}</p>
        <h2 className="font-display text-xl md:text-2xl font-normal tracking-tighter text-ink mt-2">
          {copy.title}
        </h2>
        <p className="text-sm text-graphite mt-2 max-w-prose">{copy.body}</p>
        <a
          href={url}
          target="_blank"
          rel="nofollow noopener sponsored"
          className="inline-flex items-center mt-4 px-5 py-2.5 bg-amber text-bg rounded-full text-sm font-semibold hover:bg-ink transition-colors"
        >
          {copy.cta}
        </a>
      </div>
    </section>
  );
}
