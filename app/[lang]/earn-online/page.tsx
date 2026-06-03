import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import { localePath } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { GUIDES } from '@/lib/guides';
import { tGuide } from '@/lib/guides-i18n';
import { Breadcrumb } from '@/components/Breadcrumb';
import { FiverrCTA } from '@/components/FiverrCTA';
import { AppSumoCTA } from '@/components/AppSumoCTA';
import { BeehiivCTA } from '@/components/BeehiivCTA';

export const dynamicParams = false;
export const revalidate = false;

type Copy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  freelance: { title: string; body: string };
  saasDeals: { title: string; body: string };
  newsletter: { title: string; body: string };
  remoteJobs: { title: string; body: string };
  remoteJobsCta: string;
  closingTitle: string;
  closingBody: string;
  home: string;
  readGuide: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    metaTitle: 'Earn online as a developer: the four routes that pay in 2026',
    metaDescription:
      'Four practical routes for a developer to earn online in 2026: a remote tech job, freelance services on Fiverr, lifetime SaaS deals on AppSumo, and a monetized newsletter.',
    eyebrow: 'Earn online',
    h1: 'Four routes to earn online as a developer',
    intro:
      'Remote-friendly income is more accessible than ever for technical workers. The four routes below cover the realistic options in 2026, ranked from steady cash to compounding upside.',
    remoteJobs: {
      title: 'Land a remote tech job',
      body: 'The most predictable path. We aggregate every active remote tech listing from eight public job board APIs and refresh once a day. Filter by role, country, salary and seniority, all in the browser, no signup.',
    },
    remoteJobsCta: 'Browse remote jobs →',
    freelance: {
      title: 'Sell developer services on Fiverr',
      body: 'Fiverr is the fastest way to start earning independent income with code. List one repeatable service, ship reliably, climb the level system. Read the playbook below.',
    },
    saasDeals: {
      title: 'Cut SaaS spend with AppSumo lifetime deals',
      body: 'Pay once, skip subscriptions forever on the right tools. For bootstrapped founders and solo operators the math compounds quickly. Start with the deals explainer.',
    },
    newsletter: {
      title: 'Build a tech newsletter that pays',
      body: 'Slowest to start, highest long-term ceiling. A focused tech newsletter pairs durable audience growth with several monetization streams. The five-guide cluster covers platform choice through scale.',
    },
    closingTitle: 'Pick one, then go deep',
    closingBody:
      'The mistake most operators make is sampling all four at once. Pick the route that fits your time budget and risk tolerance, commit for at least six months, and only add a second route once the first is producing.',
    home: 'Home',
    readGuide: 'Read the guide →',
  },
  fr: {
    metaTitle: "Gagner en ligne quand on est développeur : les 4 voies qui paient en 2026",
    metaDescription:
      "Quatre voies concrètes pour gagner en ligne quand on est développeur en 2026 : un job tech remote, du freelance sur Fiverr, des deals SaaS à vie sur AppSumo, et une newsletter monétisée.",
    eyebrow: 'Gagner en ligne',
    h1: 'Quatre voies pour gagner en ligne quand on est développeur',
    intro:
      "Les revenus remote n'ont jamais été aussi accessibles pour les profils tech. Les quatre voies ci-dessous couvrent les options réalistes en 2026, du cash régulier au upside qui compose dans le temps.",
    remoteJobs: {
      title: 'Décrocher un job tech remote',
      body: "La voie la plus prévisible. Nous agrégeons chaque offre tech remote active depuis les API publiques de huit job boards, mise à jour chaque jour. Filtrez par rôle, pays, salaire et niveau, dans le navigateur, sans inscription.",
    },
    remoteJobsCta: 'Parcourir les offres remote →',
    freelance: {
      title: 'Vendre vos services dev sur Fiverr',
      body: "Fiverr est le moyen le plus rapide de commencer à gagner un revenu indépendant avec du code. Lancez une offre répétable, livrez avec fiabilité, montez les niveaux. Le playbook ci-dessous détaille la mécanique.",
    },
    saasDeals: {
      title: 'Réduire les coûts SaaS avec les deals à vie AppSumo',
      body: "Payez une fois, évitez l'abonnement à vie sur les bons outils. Pour les founders bootstrap et les opérateurs solo le calcul est vite rentable. Démarrez par le guide qui explique le mécanisme.",
    },
    newsletter: {
      title: 'Lancer une newsletter tech qui paie',
      body: "La voie la plus lente au démarrage, le plus haut plafond à long terme. Une newsletter tech ciblée combine audience durable et plusieurs leviers de monétisation. Le cluster de cinq guides couvre du choix de plateforme à la scale.",
    },
    closingTitle: "Choisissez-en une, et allez en profondeur",
    closingBody:
      "L'erreur classique est de goûter aux quatre voies en même temps. Choisissez celle qui colle à votre temps disponible et à votre tolérance au risque, engagez-vous au moins six mois, et n'ajoutez la deuxième que quand la première produit.",
    home: 'Accueil',
    readGuide: 'Lire le guide →',
  },
  es: {
    metaTitle: 'Ganar en línea como desarrollador: las 4 vías que pagan en 2026',
    metaDescription:
      'Cuatro vías prácticas para ganar en línea como desarrollador en 2026: un empleo tech remoto, servicios freelance en Fiverr, deals SaaS de por vida en AppSumo y una newsletter monetizada.',
    eyebrow: 'Ganar en línea',
    h1: 'Cuatro vías para ganar en línea como desarrollador',
    intro:
      'Los ingresos remotos nunca han sido tan accesibles para los perfiles técnicos. Las cuatro vías de abajo cubren las opciones realistas en 2026, del flujo regular al upside compuesto.',
    remoteJobs: {
      title: 'Conseguir un empleo tech remoto',
      body: 'La vía más predecible. Agregamos cada oferta tech remota activa desde las APIs públicas de ocho job boards, actualizado cada día. Filtra por rol, país, salario y seniority en el navegador, sin registro.',
    },
    remoteJobsCta: 'Ver los empleos remotos →',
    freelance: {
      title: 'Vender servicios dev en Fiverr',
      body: 'Fiverr es la forma más rápida de empezar a ganar ingresos independientes con código. Publica un servicio repetible, entrega con fiabilidad y sube los niveles. El playbook lo desglosa.',
    },
    saasDeals: {
      title: 'Reducir el gasto SaaS con deals de por vida en AppSumo',
      body: 'Paga una vez, evita suscripciones para siempre en las herramientas correctas. Para founders bootstrap y operadores solo la matemática suma rápido. Empieza por la guía que explica cómo funcionan.',
    },
    newsletter: {
      title: 'Construir una newsletter tech que pague',
      body: 'Es la más lenta al inicio pero la de mayor techo a largo plazo. Una newsletter tech enfocada combina audiencia duradera con varias vías de monetización. El cluster de cinco guías cubre desde la plataforma hasta la escala.',
    },
    closingTitle: 'Elige una y profundiza',
    closingBody:
      'El error clásico es probar las cuatro a la vez. Elige la que encaje con tu tiempo y tu tolerancia al riesgo, comprométete al menos seis meses y solo añade la segunda cuando la primera produce.',
    home: 'Inicio',
    readGuide: 'Leer la guía →',
  },
  de: {
    metaTitle: 'Online verdienen als Entwickler: die 4 Wege, die 2026 zahlen',
    metaDescription:
      'Vier praktische Wege, um 2026 als Entwickler online zu verdienen: ein Remote-Tech-Job, Freelance-Services auf Fiverr, Lifetime-SaaS-Deals auf AppSumo und ein monetisierter Newsletter.',
    eyebrow: 'Online verdienen',
    h1: 'Vier Wege, um als Entwickler online zu verdienen',
    intro:
      'Remote-Einkommen war für Tech-Profile nie zugänglicher. Die vier Wege unten decken die realistischen Optionen 2026 ab, vom stetigen Cashflow bis zum kompoundierenden Upside.',
    remoteJobs: {
      title: 'Einen Remote-Tech-Job finden',
      body: 'Der berechenbarste Weg. Wir aggregieren jede aktive Remote-Tech-Stelle aus den öffentlichen APIs von acht Job Boards und aktualisieren täglich. Filtere nach Rolle, Land, Gehalt und Senioritätsstufe, alles im Browser, ohne Anmeldung.',
    },
    remoteJobsCta: 'Remote-Jobs durchstöbern →',
    freelance: {
      title: 'Entwickler-Services auf Fiverr verkaufen',
      body: 'Fiverr ist der schnellste Weg, unabhängiges Einkommen mit Code zu starten. Liste einen wiederholbaren Service, liefere zuverlässig, klettere im Level-System. Das Playbook unten erklärt es im Detail.',
    },
    saasDeals: {
      title: 'SaaS-Ausgaben mit AppSumo-Lifetime-Deals senken',
      body: 'Einmal zahlen, Abos für immer sparen, auf den richtigen Tools. Für Bootstrap-Gründer und Solo-Operatoren rechnet sich das schnell. Starte mit dem Erklär-Guide.',
    },
    newsletter: {
      title: 'Einen Tech-Newsletter aufbauen, der zahlt',
      body: 'Am langsamsten beim Start, mit der höchsten Langfrist-Decke. Ein fokussierter Tech-Newsletter verbindet nachhaltiges Audience-Wachstum mit mehreren Monetisierungs-Strömen. Das Fünf-Guide-Cluster deckt Plattformwahl bis Skalierung ab.',
    },
    closingTitle: 'Wähle einen und geh in die Tiefe',
    closingBody:
      'Der häufigste Fehler: alle vier gleichzeitig probieren. Wähle den Weg, der zu deiner Zeit und Risikotoleranz passt, halte sechs Monate durch und füge den zweiten erst hinzu, wenn der erste liefert.',
    home: 'Startseite',
    readGuide: 'Guide lesen →',
  },
  pt: {
    metaTitle: 'Ganhar online como desenvolvedor: as 4 rotas que pagam em 2026',
    metaDescription:
      'Quatro rotas práticas para um desenvolvedor ganhar online em 2026: uma vaga tech remota, serviços freelance no Fiverr, deals vitalícios de SaaS no AppSumo e uma newsletter monetizada.',
    eyebrow: 'Ganhar online',
    h1: 'Quatro rotas para ganhar online como desenvolvedor',
    intro:
      'A renda remota nunca foi tão acessível para perfis técnicos. As quatro rotas abaixo cobrem as opções realistas em 2026, do cash estável ao upside que compõe ao longo do tempo.',
    remoteJobs: {
      title: 'Conseguir uma vaga tech remota',
      body: 'A rota mais previsível. Agregamos cada vaga tech remota ativa das APIs públicas de oito job boards, atualizada todo dia. Filtre por cargo, país, salário e senioridade no navegador, sem cadastro.',
    },
    remoteJobsCta: 'Ver as vagas remotas →',
    freelance: {
      title: 'Vender serviços dev no Fiverr',
      body: 'O Fiverr é a forma mais rápida de começar a gerar renda independente com código. Publique um serviço repetível, entregue com confiabilidade e suba os níveis. O playbook detalha a mecânica.',
    },
    saasDeals: {
      title: 'Cortar gastos de SaaS com deals vitalícios do AppSumo',
      body: 'Pague uma vez, evite assinaturas para sempre nas ferramentas certas. Para founders bootstrap e operadores solo a conta compõe rápido. Comece pelo guia que explica como funcionam.',
    },
    newsletter: {
      title: 'Construir uma newsletter tech que paga',
      body: 'É a mais lenta para começar, com o teto mais alto a longo prazo. Uma newsletter tech focada combina audiência durável com várias vias de monetização. O cluster de cinco guias cobre da plataforma à escala.',
    },
    closingTitle: 'Escolha uma e vá fundo',
    closingBody:
      'O erro clássico é experimentar as quatro ao mesmo tempo. Escolha a rota que encaixa no seu tempo e tolerância a risco, comprometa-se por pelo menos seis meses e só adicione a segunda quando a primeira produz.',
    home: 'Início',
    readGuide: 'Ler o guia →',
  },
  it: {
    metaTitle: 'Guadagnare online da sviluppatore: le 4 vie che pagano nel 2026',
    metaDescription:
      'Quattro vie pratiche per guadagnare online da sviluppatore nel 2026: un lavoro tech remote, servizi freelance su Fiverr, offerte a vita su AppSumo e una newsletter monetizzata.',
    eyebrow: 'Guadagnare online',
    h1: 'Quattro vie per guadagnare online da sviluppatore',
    intro:
      'Il reddito remote non è mai stato così accessibile per i profili tech. Le quattro vie sotto coprono le opzioni realistiche nel 2026, dal cash regolare allo upside che compone nel tempo.',
    remoteJobs: {
      title: 'Trovare un lavoro tech remote',
      body: 'La via più prevedibile. Aggreghiamo ogni annuncio tech remote attivo dalle API pubbliche di otto job board, aggiornato ogni giorno. Filtra per ruolo, paese, stipendio e seniority nel browser, senza registrazione.',
    },
    remoteJobsCta: 'Sfoglia i lavori remote →',
    freelance: {
      title: 'Vendere servizi dev su Fiverr',
      body: 'Fiverr è il modo più veloce per iniziare a generare reddito indipendente con il codice. Pubblica un servizio ripetibile, consegna con affidabilità, scala il sistema dei livelli. Il playbook spiega la meccanica.',
    },
    saasDeals: {
      title: 'Ridurre la spesa SaaS con le offerte a vita di AppSumo',
      body: 'Paga una volta, evita gli abbonamenti per sempre sugli strumenti giusti. Per founder bootstrap e operatori solo i conti tornano in fretta. Inizia dalla guida che spiega come funzionano.',
    },
    newsletter: {
      title: 'Costruire una newsletter tech che paga',
      body: 'La più lenta da avviare, con il tetto più alto sul lungo termine. Una newsletter tech focalizzata unisce audience duratura a più flussi di monetizzazione. Il cluster di cinque guide copre dalla piattaforma alla scala.',
    },
    closingTitle: 'Scegline una e vai in profondità',
    closingBody:
      "L'errore classico è provarle tutte e quattro insieme. Scegli la via che si adatta al tuo tempo e alla tua tolleranza al rischio, impegnati per almeno sei mesi e aggiungi la seconda solo quando la prima produce.",
    home: 'Home',
    readGuide: 'Leggi la guida →',
  },
  pl: {
    metaTitle: 'Zarabianie online jako deweloper: 4 ścieżki, które płacą w 2026',
    metaDescription:
      'Cztery praktyczne ścieżki zarabiania online dla dewelopera w 2026: zdalna praca tech, usługi freelance na Fiverr, dożywotnie oferty SaaS na AppSumo i monetyzowany newsletter.',
    eyebrow: 'Zarabianie online',
    h1: 'Cztery ścieżki zarabiania online jako deweloper',
    intro:
      'Zdalny dochód nigdy nie był tak dostępny dla profili tech. Cztery ścieżki poniżej obejmują realistyczne opcje w 2026, od stabilnego cashflow do upside-u, który składa się w czasie.',
    remoteJobs: {
      title: 'Zdobyć zdalną pracę tech',
      body: 'Najbardziej przewidywalna ścieżka. Agregujemy każdą aktywną zdalną ofertę tech z publicznych API ośmiu job boardów i aktualizujemy codziennie. Filtruj według roli, kraju, wynagrodzenia i poziomu w przeglądarce, bez rejestracji.',
    },
    remoteJobsCta: 'Przeglądaj zdalne oferty →',
    freelance: {
      title: 'Sprzedawać usługi dev na Fiverr',
      body: 'Fiverr to najszybszy sposób, aby zacząć zarabiać niezależnie dzięki kodowi. Wystaw jedną powtarzalną usługę, dostarczaj niezawodnie i wspinaj się po systemie poziomów. Playbook poniżej rozkłada to na czynniki pierwsze.',
    },
    saasDeals: {
      title: 'Obniżyć wydatki SaaS dzięki dożywotnim ofertom AppSumo',
      body: 'Zapłać raz, omijaj subskrypcje na zawsze na właściwych narzędziach. Dla bootstrap founderów i solo operatorów rachunek szybko się składa. Zacznij od przewodnika, który wyjaśnia jak to działa.',
    },
    newsletter: {
      title: 'Zbudować newsletter tech, który płaci',
      body: 'Najwolniejsza na starcie, z najwyższym pułapem długoterminowym. Skoncentrowany newsletter tech łączy trwały wzrost audytorium z kilkoma strumieniami monetyzacji. Klaster pięciu poradników obejmuje od wyboru platformy do skali.',
    },
    closingTitle: 'Wybierz jedną i idź w głąb',
    closingBody:
      'Klasyczny błąd to próbowanie wszystkich czterech naraz. Wybierz ścieżkę pasującą do twojego czasu i tolerancji ryzyka, zaangażuj się na co najmniej sześć miesięcy i dodaj drugą dopiero gdy pierwsza zacznie produkować.',
    home: 'Strona główna',
    readGuide: 'Czytaj przewodnik →',
  },
};

// Cross-link sets per cluster
const FIVERR_HUB_SLUGS = [
  'how-to-start-on-fiverr-as-a-developer',
  'best-fiverr-gigs-for-programmers',
  'fiverr-pricing-strategy-for-developers',
  'sell-ai-services-on-fiverr-2026',
];
const APPSUMO_HUB_SLUGS = [
  'appsumo-lifetime-deals-explained',
  'appsumo-best-deals-for-developers-2026',
  'building-a-startup-stack-with-appsumo',
  'how-to-spot-quality-appsumo-deals',
];
const NEWSLETTER_HUB_SLUGS = [
  'how-to-start-a-tech-newsletter-2026',
  'how-to-monetize-a-tech-newsletter',
  'best-newsletter-platforms-for-developers',
  'tech-newsletter-growth-tactics-2026',
];

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = COPY[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'earn-online',
    title: c.metaTitle,
    description: c.metaDescription,
  });
}

export default function EarnOnlinePage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const c = COPY[locale];

  const fiverrLinks = FIVERR_HUB_SLUGS.map((s) => GUIDES.find((g) => g.slug === s)!).filter(Boolean);
  const appsumoLinks = APPSUMO_HUB_SLUGS.map((s) => GUIDES.find((g) => g.slug === s)!).filter(Boolean);
  const newsletterLinks = NEWSLETTER_HUB_SLUGS.map((s) => GUIDES.find((g) => g.slug === s)!).filter(Boolean);

  const crumbItems = [
    { label: c.home, href: localePath(locale) },
    { label: c.eyebrow },
  ];
  const crumbJsonLd = breadcrumbJsonLd([
    { name: c.home, url: absoluteUrl(`/${locale}`) },
    { name: c.eyebrow, url: absoluteUrl(`/${locale}/earn-online`) },
  ]);

  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbJsonLd) }}
      />
      <Breadcrumb items={crumbItems} />

      <header className="border-b border-line pb-6">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tighter text-ink mt-2">
          {c.h1}
        </h1>
        <p className="text-graphite text-base mt-4 max-w-prose">{c.intro}</p>
      </header>

      {/* Route 1: Remote jobs */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">
          {c.remoteJobs.title}
        </h2>
        <p className="text-graphite max-w-prose">{c.remoteJobs.body}</p>
        <Link
          href={localePath(locale, 'jobs')}
          className="inline-flex items-center px-5 py-2.5 bg-ink text-bg rounded-full text-sm font-semibold hover:bg-forest transition-colors"
        >
          {c.remoteJobsCta}
        </Link>
      </section>

      {/* Route 2: Fiverr freelance */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">
          {c.freelance.title}
        </h2>
        <p className="text-graphite max-w-prose">{c.freelance.body}</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {fiverrLinks.map((g) => (
            <li key={g.slug}>
              <Link
                href={localePath(locale, `guides/${g.slug}`)}
                className="block rounded-2xl border border-line bg-paper p-4 hover:border-ink hover-lift transition-all"
              >
                <p className="font-semibold text-ink text-sm leading-snug">
                  {tGuide(g.slug, locale, 'title', g.title)}
                </p>
                <p className="text-xs text-forest mt-1.5">{c.readGuide}</p>
              </Link>
            </li>
          ))}
        </ul>
        <FiverrCTA locale={locale} />
      </section>

      {/* Route 3: AppSumo deals */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">
          {c.saasDeals.title}
        </h2>
        <p className="text-graphite max-w-prose">{c.saasDeals.body}</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {appsumoLinks.map((g) => (
            <li key={g.slug}>
              <Link
                href={localePath(locale, `guides/${g.slug}`)}
                className="block rounded-2xl border border-line bg-paper p-4 hover:border-ink hover-lift transition-all"
              >
                <p className="font-semibold text-ink text-sm leading-snug">
                  {tGuide(g.slug, locale, 'title', g.title)}
                </p>
                <p className="text-xs text-amber mt-1.5">{c.readGuide}</p>
              </Link>
            </li>
          ))}
        </ul>
        <AppSumoCTA locale={locale} />
      </section>

      {/* Route 4: Newsletter */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">
          {c.newsletter.title}
        </h2>
        <p className="text-graphite max-w-prose">{c.newsletter.body}</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {newsletterLinks.map((g) => (
            <li key={g.slug}>
              <Link
                href={localePath(locale, `guides/${g.slug}`)}
                className="block rounded-2xl border border-line bg-paper p-4 hover:border-ink hover-lift transition-all"
              >
                <p className="font-semibold text-ink text-sm leading-snug">
                  {tGuide(g.slug, locale, 'title', g.title)}
                </p>
                <p className="text-xs text-terracotta mt-1.5">{c.readGuide}</p>
              </Link>
            </li>
          ))}
        </ul>
        <BeehiivCTA locale={locale} />
      </section>

      {/* Closing */}
      <section className="border-t border-line pt-8 max-w-prose">
        <h2 className="font-display text-2xl font-normal tracking-tighter text-ink">
          {c.closingTitle}
        </h2>
        <p className="text-graphite mt-3">{c.closingBody}</p>
      </section>
    </div>
  );
}
