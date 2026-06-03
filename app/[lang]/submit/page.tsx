import type { Metadata } from 'next';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

type Copy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  intro1: string;
  intro2: string;
  featuredTitle: string;
  featuredDuration: string;
  featuredBullets: string[];
  featuredCta: string;
  sponsoredTitle: string;
  sponsoredDuration: string;
  perWeek: string;
  sponsoredBullets: string[];
  sponsoredCta: string;
  howTitle: string;
  howBody: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    metaTitle: 'Submit a remote tech job · featured placement',
    metaDescription:
      'Get your job featured across slateremote.com for 30 days: front-page slot, role-page top, and city-page top placement.',
    h1: 'Submit a remote tech job',
    subtitle: 'Reach engineers, designers and product candidates across slateremote.com.',
    intro1:
      'slateremote.com pulls jobs automatically from ten public job boards. If your role is already on Remotive, RemoteOK, We Work Remotely, Arbeitnow, Himalayas, Jobicy, The Muse, Hacker News, Working Nomads or Jobspresso, it lands here within 24 hours at no cost.',
    intro2: 'For higher visibility, choose one of the placements below.',
    featuredTitle: 'Featured listing',
    featuredDuration: '30 days',
    featuredBullets: [
      'Top of the front page for 30 days',
      'Top of the matching role page',
      'Top of the matching city page when relevant',
      'Highlighted styling on every list view',
    ],
    featuredCta: 'Buy featured slot →',
    sponsoredTitle: 'Sponsored placement',
    sponsoredDuration: 'Per week',
    perWeek: '/week',
    sponsoredBullets: [
      'Pinned at the very top across all relevant pages',
      'Distinct sponsor tag',
      'Cross-language placement (en, fr, es, de, pt, it, pl)',
      'Cancellable any time',
    ],
    sponsoredCta: 'Buy sponsored slot →',
    howTitle: 'How it works',
    howBody:
      'Pay via Stripe, then send us the job URL by email. Featured placement goes live within 24 hours. We only accept legitimate remote-friendly tech positions; misleading listings are refunded and removed.',
  },
  fr: {
    metaTitle: 'Publier une offre tech remote · mise en avant',
    metaDescription:
      "Mettez votre offre en avant sur slateremote.com pendant 30 jours : en tête de la page d'accueil, en haut de la page rôle et de la page ville.",
    h1: 'Publier une offre tech remote',
    subtitle: 'Touchez des ingénieurs, designers et candidats produit partout sur slateremote.com.',
    intro1:
      "slateremote.com agrège automatiquement les offres de dix job boards publics. Si votre poste est déjà sur Remotive, RemoteOK, We Work Remotely, Arbeitnow, Himalayas, Jobicy, The Muse, Hacker News, Working Nomads ou Jobspresso, il apparaît ici sous 24 h, gratuitement.",
    intro2: 'Pour plus de visibilité, choisissez une des options ci-dessous.',
    featuredTitle: 'Annonce mise en avant',
    featuredDuration: '30 jours',
    featuredBullets: [
      "En tête de la page d'accueil pendant 30 jours",
      'En haut de la page du rôle correspondant',
      'En haut de la page ville correspondante si pertinent',
      'Style mis en valeur sur toutes les listes',
    ],
    featuredCta: 'Acheter la mise en avant →',
    sponsoredTitle: 'Placement sponsorisé',
    sponsoredDuration: 'Par semaine',
    perWeek: '/sem',
    sponsoredBullets: [
      'Épinglée tout en haut sur toutes les pages pertinentes',
      'Badge sponsor distinct',
      'Diffusion dans toutes les langues (en, fr, es, de, pt, it, pl)',
      'Annulable à tout moment',
    ],
    sponsoredCta: 'Acheter le placement sponso →',
    howTitle: 'Comment ça marche',
    howBody:
      "Paiement via Stripe, puis envoyez-nous l'URL de votre offre par email. La mise en avant est en ligne sous 24 h. Nous n'acceptons que les vraies offres tech compatibles remote ; les annonces trompeuses sont remboursées et retirées.",
  },
  es: {
    metaTitle: 'Publica un empleo tech remoto · colocación destacada',
    metaDescription:
      'Destaca tu oferta en slateremote.com durante 30 días: portada, página de rol y página de ciudad.',
    h1: 'Publica un empleo tech remoto',
    subtitle: 'Llega a ingenieros, diseñadores y candidatos de producto en slateremote.com.',
    intro1:
      'slateremote.com agrega automáticamente ofertas de diez portales públicos. Si tu puesto ya está en Remotive, RemoteOK, We Work Remotely, Arbeitnow, Himalayas, Jobicy, The Muse, Hacker News, Working Nomads o Jobspresso, aparece aquí en menos de 24 h, gratis.',
    intro2: 'Para mayor visibilidad, elige una de las opciones siguientes.',
    featuredTitle: 'Anuncio destacado',
    featuredDuration: '30 días',
    featuredBullets: [
      'Arriba de la portada durante 30 días',
      'Arriba de la página del rol correspondiente',
      'Arriba de la página de ciudad correspondiente si aplica',
      'Estilo destacado en todas las listas',
    ],
    featuredCta: 'Comprar destacado →',
    sponsoredTitle: 'Colocación patrocinada',
    sponsoredDuration: 'Por semana',
    perWeek: '/sem',
    sponsoredBullets: [
      'Fijado en lo más alto de todas las páginas relevantes',
      'Etiqueta de patrocinador distinta',
      'Distribución en todos los idiomas (en, fr, es, de, pt, it, pl)',
      'Cancelable en cualquier momento',
    ],
    sponsoredCta: 'Comprar colocación patrocinada →',
    howTitle: 'Cómo funciona',
    howBody:
      'Paga con Stripe y envíanos la URL del empleo por correo. La colocación destacada se activa en 24 h. Solo aceptamos puestos tech remote legítimos; los anuncios engañosos se reembolsan y se retiran.',
  },
  de: {
    metaTitle: 'Remote Tech Job veröffentlichen · hervorgehobene Platzierung',
    metaDescription:
      'Heben Sie Ihren Job 30 Tage lang auf slateremote.com hervor: Startseite, Rollen-Seite und Stadt-Seite ganz oben.',
    h1: 'Remote Tech Job veröffentlichen',
    subtitle: 'Erreichen Sie Engineers, Designer und Product-Kandidaten auf slateremote.com.',
    intro1:
      'slateremote.com aggregiert automatisch Jobs von zehn öffentlichen Job Boards. Wenn Ihr Job bereits auf Remotive, RemoteOK, We Work Remotely, Arbeitnow, Himalayas, Jobicy, The Muse, Hacker News, Working Nomads oder Jobspresso steht, erscheint er hier innerhalb von 24 Stunden – kostenlos.',
    intro2: 'Für mehr Sichtbarkeit wählen Sie eine der folgenden Optionen.',
    featuredTitle: 'Hervorgehobener Eintrag',
    featuredDuration: '30 Tage',
    featuredBullets: [
      '30 Tage lang oben auf der Startseite',
      'Oben auf der passenden Rollen-Seite',
      'Oben auf der passenden Stadt-Seite, wenn relevant',
      'Hervorgehobenes Styling in jeder Listenansicht',
    ],
    featuredCta: 'Hervorgehobenen Slot kaufen →',
    sponsoredTitle: 'Gesponserte Platzierung',
    sponsoredDuration: 'Pro Woche',
    perWeek: '/Woche',
    sponsoredBullets: [
      'Ganz oben auf allen relevanten Seiten angeheftet',
      'Klares Sponsor-Label',
      'Sprachübergreifende Platzierung (en, fr, es, de, pt, it, pl)',
      'Jederzeit kündbar',
    ],
    sponsoredCta: 'Gesponserten Slot kaufen →',
    howTitle: 'So funktioniert es',
    howBody:
      'Zahlen Sie per Stripe und senden Sie uns die Job-URL per E-Mail. Die Platzierung ist innerhalb von 24 Stunden live. Wir akzeptieren nur seriöse remote-freundliche Tech-Stellen; irreführende Inserate werden erstattet und entfernt.',
  },
  pt: {
    metaTitle: 'Publicar uma vaga tech remota · destaque',
    metaDescription:
      'Coloque sua vaga em destaque no slateremote.com por 30 dias: topo da página inicial, topo da página de cargo e topo da página de cidade.',
    h1: 'Publicar uma vaga tech remota',
    subtitle: 'Alcance engenheiros, designers e candidatos de produto no slateremote.com.',
    intro1:
      'O slateremote.com agrega automaticamente vagas de dez job boards públicos. Se sua vaga já estiver na Remotive, RemoteOK, We Work Remotely, Arbeitnow, Himalayas, Jobicy, The Muse, Hacker News, Working Nomads ou Jobspresso, ela aparece aqui em até 24 h, gratuitamente.',
    intro2: 'Para mais visibilidade, escolha uma das opções abaixo.',
    featuredTitle: 'Vaga em destaque',
    featuredDuration: '30 dias',
    featuredBullets: [
      'Topo da página inicial por 30 dias',
      'Topo da página de cargo correspondente',
      'Topo da página de cidade correspondente quando relevante',
      'Estilo destacado em todas as listagens',
    ],
    featuredCta: 'Comprar destaque →',
    sponsoredTitle: 'Colocação patrocinada',
    sponsoredDuration: 'Por semana',
    perWeek: '/sem',
    sponsoredBullets: [
      'Fixada no topo de todas as páginas relevantes',
      'Selo de patrocinador distinto',
      'Distribuição em todos os idiomas (en, fr, es, de, pt, it, pl)',
      'Cancelável a qualquer momento',
    ],
    sponsoredCta: 'Comprar colocação patrocinada →',
    howTitle: 'Como funciona',
    howBody:
      'Pague via Stripe e nos envie a URL da vaga por email. O destaque entra no ar em 24 h. Aceitamos apenas vagas tech remote-friendly legítimas; anúncios enganosos são reembolsados e removidos.',
  },
  it: {
    metaTitle: 'Pubblica un lavoro tech remote · posizionamento in evidenza',
    metaDescription:
      'Metti in evidenza il tuo annuncio su slateremote.com per 30 giorni: home, pagina ruolo e pagina città in cima.',
    h1: 'Pubblica un lavoro tech remote',
    subtitle: 'Raggiungi ingegneri, designer e candidati product su slateremote.com.',
    intro1:
      'slateremote.com aggrega automaticamente i lavori da dieci job board pubblici. Se la tua posizione è già su Remotive, RemoteOK, We Work Remotely, Arbeitnow, Himalayas, Jobicy, The Muse, Hacker News, Working Nomads o Jobspresso, appare qui entro 24 ore, gratuitamente.',
    intro2: 'Per più visibilità, scegli una delle opzioni qui sotto.',
    featuredTitle: 'Annuncio in evidenza',
    featuredDuration: '30 giorni',
    featuredBullets: [
      'In cima alla home per 30 giorni',
      'In cima alla pagina del ruolo corrispondente',
      'In cima alla pagina città corrispondente quando rilevante',
      'Stile evidenziato in ogni lista',
    ],
    featuredCta: 'Acquista lo slot in evidenza →',
    sponsoredTitle: 'Posizionamento sponsorizzato',
    sponsoredDuration: 'A settimana',
    perWeek: '/sett',
    sponsoredBullets: [
      'Fissato in cima a tutte le pagine rilevanti',
      'Tag sponsor distinto',
      'Distribuzione in tutte le lingue (en, fr, es, de, pt, it, pl)',
      'Cancellabile in qualsiasi momento',
    ],
    sponsoredCta: 'Acquista lo slot sponsorizzato →',
    howTitle: 'Come funziona',
    howBody:
      "Paga con Stripe e inviaci l'URL del lavoro via email. Il posizionamento è online entro 24 ore. Accettiamo solo posizioni tech remote-friendly legittime; gli annunci ingannevoli vengono rimborsati e rimossi.",
  },
  pl: {
    metaTitle: 'Opublikuj zdalną pracę tech · wyróżnione miejsce',
    metaDescription:
      'Wyróżnij swoje ogłoszenie na slateremote.com przez 30 dni: góra strony głównej, góra strony roli i góra strony miasta.',
    h1: 'Opublikuj zdalną pracę tech',
    subtitle: 'Dotrzyj do inżynierów, projektantów i kandydatów produktowych na slateremote.com.',
    intro1:
      'slateremote.com automatycznie agreguje oferty z dziesięciu publicznych portali pracy. Jeśli twoja oferta jest już na Remotive, RemoteOK, We Work Remotely, Arbeitnow, Himalayas, Jobicy, The Muse, Hacker News, Working Nomads lub Jobspresso, pojawi się tu w ciągu 24 h, za darmo.',
    intro2: 'Dla większej widoczności wybierz jedną z opcji poniżej.',
    featuredTitle: 'Wyróżnione ogłoszenie',
    featuredDuration: '30 dni',
    featuredBullets: [
      'Góra strony głównej przez 30 dni',
      'Góra strony pasującej roli',
      'Góra strony pasującego miasta, gdy istotne',
      'Wyróżniony styl na każdej liście',
    ],
    featuredCta: 'Kup wyróżnione miejsce →',
    sponsoredTitle: 'Sponsorowane miejsce',
    sponsoredDuration: 'Tygodniowo',
    perWeek: '/tydz',
    sponsoredBullets: [
      'Przypięte na samej górze wszystkich istotnych stron',
      'Wyraźna etykieta sponsora',
      'Dystrybucja we wszystkich językach (en, fr, es, de, pt, it, pl)',
      'Można anulować w dowolnym momencie',
    ],
    sponsoredCta: 'Kup sponsorowane miejsce →',
    howTitle: 'Jak to działa',
    howBody:
      'Zapłać przez Stripe, a następnie wyślij nam adres URL oferty mailem. Wyróżnienie aktywuje się w ciągu 24 h. Akceptujemy tylko prawdziwe zdalne oferty tech; mylące ogłoszenia są zwracane i usuwane.',
  },
};

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = COPY[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'submit',
    title: c.metaTitle,
    description: c.metaDescription,
  });
}

const FEATURED_30D_URL = process.env.NEXT_PUBLIC_STRIPE_FEATURED_30D || 'mailto:hello@slateremote.com?subject=Featured%20job%2049%20USD';
const SPONSORED_TOP_URL = process.env.NEXT_PUBLIC_STRIPE_SPONSORED_TOP || 'mailto:hello@slateremote.com?subject=Sponsored%20placement%2099%20USD';

export default function SubmitPage({ params }: { params: { lang: Locale } }) {
  const c = COPY[params.lang];
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="border-b border-line pb-4">
        <h1 className="text-2xl md:text-3xl font-semibold">{c.h1}</h1>
        <p className="text-muted text-sm mt-2">{c.subtitle}</p>
      </header>

      <section className="prose-body text-[0.95rem] leading-relaxed space-y-3">
        <p>{c.intro1}</p>
        <p>{c.intro2}</p>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <article className="border border-line rounded-lg p-5 bg-white">
          <h2 className="font-semibold">{c.featuredTitle}</h2>
          <p className="text-xs uppercase tracking-wider text-muted mt-1">{c.featuredDuration}</p>
          <p className="text-3xl font-semibold mt-3">$49</p>
          <ul className="text-sm text-muted mt-4 space-y-1.5">
            {c.featuredBullets.map((b) => (
              <li key={b}>· {b}</li>
            ))}
          </ul>
          <a
            href={FEATURED_30D_URL}
            className="inline-block mt-5 px-4 py-2 bg-ink text-bg rounded text-sm hover:opacity-90"
          >
            {c.featuredCta}
          </a>
        </article>

        <article className="border border-line rounded-lg p-5 bg-forestSoft">
          <h2 className="font-semibold">{c.sponsoredTitle}</h2>
          <p className="text-xs uppercase tracking-wider text-forest mt-1">{c.sponsoredDuration}</p>
          <p className="text-3xl font-semibold mt-3">$99<span className="text-base text-muted">{c.perWeek}</span></p>
          <ul className="text-sm text-muted mt-4 space-y-1.5">
            {c.sponsoredBullets.map((b) => (
              <li key={b}>· {b}</li>
            ))}
          </ul>
          <a
            href={SPONSORED_TOP_URL}
            className="inline-block mt-5 px-4 py-2 bg-ink text-bg rounded text-sm hover:opacity-90"
          >
            {c.sponsoredCta}
          </a>
        </article>
      </section>

      <section className="text-sm text-muted leading-relaxed space-y-2">
        <h2 className="text-base font-semibold text-ink">{c.howTitle}</h2>
        <p>{c.howBody}</p>
      </section>
    </div>
  );
}
