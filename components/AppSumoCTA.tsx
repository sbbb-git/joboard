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
  es: {
    eyebrow: 'Ofertas SaaS de por vida',
    title: 'Ahorra miles en las herramientas que ya necesitas',
    body: 'AppSumo agrega ofertas de por vida en SaaS, herramientas IA, plataformas de marketing y utilidades dev. Pagas una vez, conservas el acceso para siempre, y te ahorras las suscripciones recurrentes en el software que los equipos remotos usan de verdad.',
    cta: 'Ver las ofertas AppSumo actuales →',
  },
  de: {
    eyebrow: 'Lifetime-SaaS-Deals',
    title: 'Spare Tausende bei den Tools, die du ohnehin brauchst',
    body: 'AppSumo bündelt Lifetime-Deals für SaaS, KI-Tools, Marketing-Plattformen und Dev-Utilities. Einmal zahlen, dauerhaft nutzen, und die wiederkehrenden Abos für Software sparen, die Remote-Teams wirklich verwenden.',
    cta: 'Aktuelle AppSumo-Deals ansehen →',
  },
  pt: {
    eyebrow: 'Ofertas SaaS vitalícias',
    title: 'Economize milhares nas ferramentas que você já precisa',
    body: 'O AppSumo reúne ofertas vitalícias em SaaS, ferramentas de IA, plataformas de marketing e utilitários dev. Você paga uma vez, mantém o acesso para sempre e evita as assinaturas recorrentes nos softwares que times remotos realmente usam.',
    cta: 'Ver as ofertas atuais do AppSumo →',
  },
  it: {
    eyebrow: 'Offerte SaaS a vita',
    title: 'Risparmia migliaia sugli strumenti che già ti servono',
    body: 'AppSumo aggrega offerte a vita su SaaS, strumenti IA, piattaforme di marketing e utility dev. Paghi una volta, mantieni l\'accesso per sempre, ed eviti gli abbonamenti ricorrenti sui software che i team remote usano davvero.',
    cta: 'Vedi le offerte AppSumo attuali →',
  },
  pl: {
    eyebrow: 'Dożywotnie oferty SaaS',
    title: 'Zaoszczędź tysiące na narzędziach, których i tak potrzebujesz',
    body: 'AppSumo gromadzi dożywotnie oferty na SaaS, narzędzia AI, platformy marketingowe i narzędzia dev. Płacisz raz, zachowujesz dostęp na zawsze i unikasz cyklicznych subskrypcji na oprogramowanie, którego naprawdę używają zdalne zespoły.',
    cta: 'Zobacz aktualne oferty AppSumo →',
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
