import type { Metadata } from 'next';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { TrustBlock } from '@/components/TrustBlock';

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
      'Get your job featured across slateremote.com for 30 days: front-page slot, role-page top and city-page top placement. Published in English, French and German.',
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
  de: {
    metaTitle: 'Remote Tech Job veröffentlichen · hervorgehobene Platzierung',
    metaDescription:
      'Heben Sie Ihre Stelle 30 Tage lang auf slateremote.com hervor: Startseite, oberste Position auf Rollen- und Stadtseite. Veröffentlicht auf Englisch, Französisch und Deutsch.',
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

      <TrustBlock locale={params.lang} />

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
