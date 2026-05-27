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
    metaTitle: 'Contact slateremote.com',
    metaDescription: 'Reach out for corrections, takedown requests, or partnership inquiries.',
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
    metaTitle: 'Contacter slateremote.com',
    metaDescription: 'Contactez-nous pour corrections, retraits ou partenariats.',
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
  es: {
    metaTitle: 'Contacto slateremote.com',
    metaDescription: 'Contáctanos para correcciones, retiradas o consultas de partnership.',
    h1: 'Contacto',
    fastestPre: 'La forma más rápida de contactarnos es por email:',
    h2Takedowns: 'Correcciones y retiradas',
    bodyTakedowns: 'Si una oferta es incorrecta, está caducada, o eres el empleador y quieres retirarla, envíanos un email con la URL del puesto. Procesamos retiradas en 48 horas.',
    h2Listing: 'Publicar una oferta',
    bodyListingPre: 'slateremote.com indexa empleos desde APIs públicas. Para publicar el tuyo, simplemente publícalo en cualquiera de nuestros sitios fuente y aparece aquí en 24 horas. Para colocación destacada, ve a la',
    bodyListingLink: 'página de publicación',
    bodyListingPost: '.',
    h2Partnerships: 'Partnerships',
    bodyPartnerships: 'Para partnerships e integraciones, envíanos un email con una descripción breve de lo que tienes en mente.',
  },
  de: {
    metaTitle: 'Kontakt slateremote.com',
    metaDescription: 'Schreiben Sie uns für Korrekturen, Löschanfragen oder Partnerschaftsanfragen.',
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
  pt: {
    metaTitle: 'Contato slateremote.com',
    metaDescription: 'Fale conosco para correções, pedidos de remoção ou parcerias.',
    h1: 'Contato',
    fastestPre: 'A forma mais rápida de nos contatar é por email:',
    h2Takedowns: 'Correções e remoções',
    bodyTakedowns: 'Se um anúncio está incorreto, vencido, ou você é o empregador e quer retirá-lo, nos envie a URL da vaga por email. Processamos pedidos de remoção em 48 horas.',
    h2Listing: 'Publicar uma vaga',
    bodyListingPre: 'slateremote.com indexa vagas de APIs públicas. Para publicar a sua, basta postar em um dos nossos sites de origem e ela aparece aqui em 24 horas. Para destaque pago, veja a',
    bodyListingLink: 'página de publicação',
    bodyListingPost: '.',
    h2Partnerships: 'Parcerias',
    bodyPartnerships: 'Para parcerias e integrações, nos envie um email com uma breve descrição do que você tem em mente.',
  },
  it: {
    metaTitle: 'Contatto slateremote.com',
    metaDescription: 'Contattaci per correzioni, richieste di rimozione o partnership.',
    h1: 'Contatto',
    fastestPre: 'Il modo più veloce per contattarci è via email:',
    h2Takedowns: 'Correzioni e rimozioni',
    bodyTakedowns: "Se un annuncio è scorretto, scaduto, o sei il datore di lavoro e vuoi rimuoverlo, inviaci un'email con l'URL dell'offerta. Processiamo le richieste di rimozione entro 48 ore.",
    h2Listing: 'Pubblicare un annuncio',
    bodyListingPre: 'slateremote.com indicizza lavori da API pubbliche. Per pubblicare il tuo, posta semplicemente su uno dei nostri siti sorgente e apparirà qui entro 24 ore. Per posizionamento in evidenza a pagamento, vedi la',
    bodyListingLink: 'pagina di pubblicazione',
    bodyListingPost: '.',
    h2Partnerships: 'Partnership',
    bodyPartnerships: 'Per partnership e integrazioni, inviaci un\'email con una breve descrizione di cosa hai in mente.',
  },
  pl: {
    metaTitle: 'Kontakt slateremote.com',
    metaDescription: 'Skontaktuj się w sprawie poprawek, usunięć lub partnerstwa.',
    h1: 'Kontakt',
    fastestPre: 'Najszybszy sposób kontaktu to email:',
    h2Takedowns: 'Poprawki i usunięcia',
    bodyTakedowns: 'Jeśli ogłoszenie jest niepoprawne, nieaktualne, lub jesteś pracodawcą i chcesz je usunąć, wyślij nam URL oferty mailem. Wnioski o usunięcie rozpatrujemy w ciągu 48 godzin.',
    h2Listing: 'Publikacja oferty',
    bodyListingPre: 'slateremote.com indeksuje oferty z publicznych API portali pracy. Aby opublikować swoją, po prostu wystaw na jednej z naszych stron źródłowych, a pojawi się tu w ciągu 24 godzin. Dla płatnego wyróżnienia zobacz',
    bodyListingLink: 'stronę publikacji',
    bodyListingPost: '.',
    h2Partnerships: 'Partnerstwa',
    bodyPartnerships: 'W sprawie partnerstw i integracji wyślij nam email z krótkim opisem tego, co masz na myśli.',
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
