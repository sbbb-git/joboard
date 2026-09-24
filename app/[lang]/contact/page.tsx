import type { Metadata } from 'next';
import { LOCALES, localePath } from '@/lib/i18n';
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
  fastestPre: string;
  h2Takedowns: string;
  bodyTakedowns: string;
  h2Listing: string;
  bodyListingPre: string;
  bodyListingLink: string;
  bodyListingPost: string;
  h2Partnerships: string;
  bodyPartnerships: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    metaTitle: 'Contact slateremote.com: corrections and takedowns',
    metaDescription: 'Email slateremote.com about an inaccurate or expired listing, an employer takedown request handled within 48 hours, or a partnership and integration idea.',
    h1: 'Contact',
    fastestPre: 'The fastest way to reach us is by email:',
    h2Takedowns: 'Corrections and takedowns',
    bodyTakedowns: 'If a listing is incorrect, outdated, or you are the employer and would like it removed, email us with the job URL. We process takedown requests within 48 hours.',
    h2Listing: 'Listing a job',
    bodyListingPre: 'slateremote.com indexes jobs from public job board APIs. To list yours, simply publish on any of our source sites and it appears here within 24 hours. For featured placement across the site, see the',
    bodyListingLink: 'submit page',
    bodyListingPost: '.',
    h2Partnerships: 'Partnerships',
    bodyPartnerships: 'For partnership and integration inquiries, email us with a brief description of what you have in mind.',
  },
  fr: {
    metaTitle: 'Contacter slateremote.com : corrections et retraits',
    metaDescription: "Écrivez à slateremote.com pour une annonce inexacte ou périmée, une demande de retrait employeur traitée sous 48 heures, ou un projet de partenariat.",
    h1: 'Contact',
    fastestPre: 'Le plus rapide pour nous joindre, c\'est par email :',
    h2Takedowns: 'Corrections et retraits',
    bodyTakedowns: "Si une annonce est inexacte, périmée, ou si vous êtes l'employeur et souhaitez son retrait, envoyez-nous l'URL de l'offre par email. Les demandes de retrait sont traitées sous 48 h.",
    h2Listing: 'Publier une offre',
    bodyListingPre: 'slateremote.com indexe les offres depuis des APIs publiques. Pour publier la vôtre, postez simplement sur l\'un de nos sites sources et elle apparaît ici sous 24 h. Pour une mise en avant payante, voir la',
    bodyListingLink: 'page publication',
    bodyListingPost: '.',
    h2Partnerships: 'Partenariats',
    bodyPartnerships: "Pour partenariats et intégrations, envoyez-nous un email avec une brève description de ce que vous avez en tête.",
  },
  de: {
    metaTitle: 'Kontakt slateremote.com: Korrekturen und Löschungen',
    metaDescription: 'Schreiben Sie uns zu einem falschen oder abgelaufenen Inserat, zu einer Löschanfrage, die wir binnen 48 Stunden bearbeiten, oder zu einer Partnerschaft.',
    h1: 'Kontakt',
    fastestPre: 'Am schnellsten erreichen Sie uns per E-Mail:',
    h2Takedowns: 'Korrekturen und Löschungen',
    bodyTakedowns: 'Wenn ein Inserat falsch oder veraltet ist, oder Sie der Arbeitgeber sind und es entfernen lassen möchten, senden Sie uns die Job-URL per E-Mail. Löschanfragen bearbeiten wir innerhalb von 48 Stunden.',
    h2Listing: 'Job veröffentlichen',
    bodyListingPre: 'slateremote.com indexiert Jobs aus öffentlichen Job-Board-APIs. Um Ihren zu listen, veröffentlichen Sie ihn einfach auf einer unserer Quellseiten und er erscheint innerhalb von 24 Stunden hier. Für hervorgehobene Platzierung siehe die',
    bodyListingLink: 'Veröffentlichungs-Seite',
    bodyListingPost: '.',
    h2Partnerships: 'Partnerschaften',
    bodyPartnerships: 'Für Partnerschafts- und Integrationsanfragen schicken Sie uns eine kurze Beschreibung Ihres Anliegens per E-Mail.',
  },
};

const EMAIL = 'hello@slateremote.com';

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = COPY[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'contact',
    title: c.metaTitle,
    description: c.metaDescription,
  });
}

export default function ContactPage({ params }: { params: { lang: Locale } }) {
  const c = COPY[params.lang];
  return (
    <article className="max-w-prose mx-auto space-y-6">
      <header className="border-b border-line pb-4">
        <h1 className="text-2xl md:text-3xl font-semibold">{c.h1}</h1>
      </header>

      <section className="prose-body text-[0.95rem] leading-relaxed space-y-4">
        <p>{c.fastestPre}</p>
        <p className="text-lg">
          <a href={`mailto:${EMAIL}`} className="text-forest hover:underline">
            {EMAIL}
          </a>
        </p>

        <h2 className="text-lg font-semibold">{c.h2Takedowns}</h2>
        <p>{c.bodyTakedowns}</p>

        <h2 className="text-lg font-semibold">{c.h2Listing}</h2>
        <p>
          {c.bodyListingPre}{' '}
          <a href={localePath(params.lang, 'submit')} className="text-forest hover:underline">
            {c.bodyListingLink}
          </a>
          {c.bodyListingPost}
        </p>

        <h2 className="text-lg font-semibold">{c.h2Partnerships}</h2>
        <p>{c.bodyPartnerships}</p>
      </section>
    </article>
  );
}
