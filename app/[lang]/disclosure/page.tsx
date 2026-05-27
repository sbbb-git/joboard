import type { Metadata } from 'next';
import { LOCALES, localePath } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { AFFILIATES } from '@/lib/affiliates';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

type Copy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  h2Paid: string;
  bodyPaid: string;
  paidFeaturedPre: string;
  paidFeaturedLink: string;
  paidFeaturedPost: string;
  paidAffiliates: string;
  paidSister: string;
  h2WillNot: string;
  willNot: string[];
  h2List: string;
  bodyList: (n: number) => string;
  thPartner: string;
  thCategory: string;
  thCommission: string;
  h2Question: string;
  bodyQuestionPre: string;
  bodyQuestionLink: string;
  bodyQuestionPost: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    metaTitle: 'Affiliate disclosure',
    metaDescription: 'Full list of affiliate partnerships used across slateremote.com, how we are compensated, and why these specific picks.',
    eyebrow: 'Transparency',
    h1: 'Affiliate disclosure',
    intro: 'Every product slateremote.com recommends is either a tool we use ourselves or one we have vetted carefully for the remote tech audience. Some of those product links pay us a commission. This page lists every commercial relationship, in full.',
    h2Paid: 'How we get paid',
    bodyPaid: 'slateremote.com is free to browse, has no ads, and never charges candidates. The site covers its own costs (domain, hosting is free on Cloudflare Pages) through three channels:',
    paidFeaturedPre: 'Featured job postings. Employers can pay to highlight a role across the site. See',
    paidFeaturedLink: 'the submit page',
    paidFeaturedPost: '.',
    paidAffiliates: 'Affiliate partnerships. We earn a small commission if you sign up to one of the listed services through a link on this site. The full list is below.',
    paidSister: 'Sister sites. slateremote.com is part of a small network with slowmadly.com (slow-travel guides) and ai-by-job.com (AI tools by job). Each can earn from its own monetisation channels.',
    h2WillNot: 'What we will not do',
    willNot: [
      'Recommend a product solely because it pays us better.',
      'Hide affiliate relationships. Every affiliate link is tagged rel="sponsored".',
      'Add tracking pixels beyond Cloudflare and Ahrefs analytics for our own page-view stats.',
      'Sell candidate data. We do not collect it.',
    ],
    h2List: 'Full list of affiliate partners',
    bodyList: (n) => `${n} active programs. Commission column shows what the program pays us per successful signup (not what you pay).`,
    thPartner: 'Partner',
    thCategory: 'Category',
    thCommission: 'Our commission',
    h2Question: 'Question or concern?',
    bodyQuestionPre: 'If you spot a recommendation that looks off, email us via',
    bodyQuestionLink: 'the contact page',
    bodyQuestionPost: '. We remove partners that drift in quality.',
  },
  fr: {
    metaTitle: 'Divulgation des affiliations',
    metaDescription: 'Liste complète des partenariats affiliés utilisés sur slateremote.com, comment nous sommes rémunérés, et pourquoi ces choix.',
    eyebrow: 'Transparence',
    h1: 'Divulgation des affiliations',
    intro: "Chaque produit recommandé par slateremote.com est soit un outil que nous utilisons nous-mêmes, soit un service que nous avons soigneusement examiné pour l'audience tech remote. Certains de ces liens nous rémunèrent. Cette page liste toutes les relations commerciales, intégralement.",
    h2Paid: 'Comment nous sommes payés',
    bodyPaid: "slateremote.com est gratuit, sans pub, et ne facture jamais les candidats. Le site couvre ses coûts (le domaine, l'hébergement est gratuit sur Cloudflare Pages) via trois canaux :",
    paidFeaturedPre: "Annonces mises en avant. Les employeurs peuvent payer pour mettre une offre en avant sur le site. Voir",
    paidFeaturedLink: 'la page publication',
    paidFeaturedPost: '.',
    paidAffiliates: 'Partenariats affiliés. Nous touchons une petite commission si vous vous inscrivez à un des services listés via un lien du site. La liste complète est ci-dessous.',
    paidSister: 'Sites jumeaux. slateremote.com fait partie d\'un petit réseau avec slowmadly.com (guides de slow-travel) et ai-by-job.com (outils IA par métier). Chacun a ses propres canaux de monétisation.',
    h2WillNot: 'Ce que nous ne ferons pas',
    willNot: [
      'Recommander un produit uniquement parce qu\'il nous paye mieux.',
      'Cacher les relations d\'affiliation. Chaque lien affilié est tagué rel="sponsored".',
      'Ajouter des pixels de tracking au-delà des analytics Cloudflare et Ahrefs pour nos propres stats de pages vues.',
      'Vendre des données candidat. Nous n\'en collectons pas.',
    ],
    h2List: 'Liste complète des partenaires affiliés',
    bodyList: (n) => `${n} programmes actifs. La colonne commission indique ce que le programme nous paye par inscription validée (pas ce que vous payez).`,
    thPartner: 'Partenaire',
    thCategory: 'Catégorie',
    thCommission: 'Notre commission',
    h2Question: 'Question ou réserve ?',
    bodyQuestionPre: 'Si vous repérez une recommandation qui paraît douteuse, contactez-nous via',
    bodyQuestionLink: 'la page contact',
    bodyQuestionPost: '. Nous retirons les partenaires dont la qualité baisse.',
  },
  es: {
    metaTitle: 'Divulgación de afiliados',
    metaDescription: 'Lista completa de partnerships de afiliados usados en slateremote.com, cómo nos pagan y por qué estas elecciones.',
    eyebrow: 'Transparencia',
    h1: 'Divulgación de afiliados',
    intro: 'Cada producto que slateremote.com recomienda es o una herramienta que usamos o un servicio que hemos evaluado cuidadosamente para la audiencia tech remota. Algunos de esos enlaces nos pagan comisión. Esta página lista cada relación comercial, completa.',
    h2Paid: 'Cómo nos pagan',
    bodyPaid: 'slateremote.com es gratis para navegar, no tiene anuncios y nunca cobra a candidatos. El sitio cubre sus costes (dominio, el hosting es gratis en Cloudflare Pages) por tres canales:',
    paidFeaturedPre: 'Empleos destacados. Los empleadores pueden pagar para destacar un puesto en el sitio. Ver',
    paidFeaturedLink: 'la página de publicación',
    paidFeaturedPost: '.',
    paidAffiliates: 'Partnerships de afiliados. Recibimos una pequeña comisión si te suscribes a uno de los servicios listados vía un enlace de este sitio. Lista completa abajo.',
    paidSister: 'Sitios hermanos. slateremote.com forma parte de una pequeña red con slowmadly.com (guías slow-travel) y ai-by-job.com (herramientas IA por puesto). Cada uno tiene sus canales de monetización.',
    h2WillNot: 'Lo que no haremos',
    willNot: [
      'Recomendar un producto solo porque nos paga mejor.',
      'Ocultar relaciones de afiliación. Cada enlace afiliado lleva rel="sponsored".',
      'Añadir píxeles de tracking más allá de analytics Cloudflare y Ahrefs para nuestras propias stats de páginas vistas.',
      'Vender datos de candidato. No los recolectamos.',
    ],
    h2List: 'Lista completa de partners de afiliados',
    bodyList: (n) => `${n} programas activos. La columna comisión muestra lo que el programa nos paga por registro válido (no lo que tú pagas).`,
    thPartner: 'Partner',
    thCategory: 'Categoría',
    thCommission: 'Nuestra comisión',
    h2Question: '¿Pregunta o duda?',
    bodyQuestionPre: 'Si ves una recomendación que parece dudosa, contáctanos vía',
    bodyQuestionLink: 'la página de contacto',
    bodyQuestionPost: '. Retiramos partners que pierden calidad.',
  },
  de: {
    metaTitle: 'Affiliate-Offenlegung',
    metaDescription: 'Vollständige Liste der Affiliate-Partnerschaften auf slateremote.com, wie wir vergütet werden und warum diese Auswahl.',
    eyebrow: 'Transparenz',
    h1: 'Affiliate-Offenlegung',
    intro: 'Jedes Produkt, das slateremote.com empfiehlt, ist entweder ein Tool, das wir selbst nutzen, oder ein Dienst, den wir sorgfältig für die Remote-Tech-Audience geprüft haben. Einige dieser Produktlinks zahlen uns eine Provision. Diese Seite listet jede kommerzielle Beziehung vollständig auf.',
    h2Paid: 'Wie wir bezahlt werden',
    bodyPaid: 'slateremote.com ist kostenlos nutzbar, hat keine Werbung und berechnet Kandidaten nie etwas. Die Seite deckt ihre Kosten (Domain, Hosting ist kostenlos auf Cloudflare Pages) über drei Kanäle:',
    paidFeaturedPre: 'Hervorgehobene Stellenanzeigen. Arbeitgeber können zahlen, um eine Stelle auf der Seite hervorzuheben. Siehe',
    paidFeaturedLink: 'die Veröffentlichungs-Seite',
    paidFeaturedPost: '.',
    paidAffiliates: 'Affiliate-Partnerschaften. Wir erhalten eine kleine Provision, wenn Sie sich über einen Link dieser Seite bei einem der gelisteten Dienste anmelden. Die vollständige Liste finden Sie unten.',
    paidSister: 'Schwesterseiten. slateremote.com ist Teil eines kleinen Netzwerks mit slowmadly.com (Slow-Travel-Guides) und ai-by-job.com (AI-Tools nach Job). Jede Seite kann über eigene Monetarisierungskanäle verdienen.',
    h2WillNot: 'Was wir nicht tun werden',
    willNot: [
      'Ein Produkt nur empfehlen, weil es uns besser bezahlt.',
      'Affiliate-Beziehungen verstecken. Jeder Affiliate-Link ist mit rel="sponsored" markiert.',
      'Tracking-Pixel über Cloudflare- und Ahrefs-Analytics hinaus für unsere eigenen Page-View-Statistiken hinzufügen.',
      'Kandidatendaten verkaufen. Wir sammeln keine.',
    ],
    h2List: 'Vollständige Liste der Affiliate-Partner',
    bodyList: (n) => `${n} aktive Programme. Die Provisionsspalte zeigt, was das Programm uns pro erfolgreicher Anmeldung zahlt (nicht, was Sie zahlen).`,
    thPartner: 'Partner',
    thCategory: 'Kategorie',
    thCommission: 'Unsere Provision',
    h2Question: 'Frage oder Bedenken?',
    bodyQuestionPre: 'Wenn Ihnen eine Empfehlung komisch vorkommt, schreiben Sie uns über',
    bodyQuestionLink: 'die Kontaktseite',
    bodyQuestionPost: '. Wir entfernen Partner, deren Qualität nachlässt.',
  },
  pt: {
    metaTitle: 'Divulgação de afiliados',
    metaDescription: 'Lista completa das parcerias de afiliados usadas no slateremote.com, como somos compensados e por que essas escolhas.',
    eyebrow: 'Transparência',
    h1: 'Divulgação de afiliados',
    intro: 'Cada produto que o slateremote.com recomenda é uma ferramenta que usamos ou um serviço que avaliamos cuidadosamente para a audiência tech remota. Alguns desses links nos pagam comissão. Esta página lista toda relação comercial, por completo.',
    h2Paid: 'Como somos pagos',
    bodyPaid: 'slateremote.com é gratuito para navegar, não tem anúncios e nunca cobra de candidatos. O site cobre seus custos (domínio, hospedagem é grátis no Cloudflare Pages) por três canais:',
    paidFeaturedPre: 'Vagas em destaque. Empregadores podem pagar para destacar uma vaga no site. Veja',
    paidFeaturedLink: 'a página de publicação',
    paidFeaturedPost: '.',
    paidAffiliates: 'Parcerias de afiliados. Ganhamos uma pequena comissão se você se cadastrar em um dos serviços listados via um link deste site. A lista completa está abaixo.',
    paidSister: 'Sites irmãos. slateremote.com faz parte de uma pequena rede com slowmadly.com (guias de slow-travel) e ai-by-job.com (ferramentas IA por cargo). Cada um pode ter seus canais de monetização.',
    h2WillNot: 'O que não faremos',
    willNot: [
      'Recomendar um produto só porque nos paga melhor.',
      'Esconder relações de afiliado. Cada link de afiliado é marcado com rel="sponsored".',
      'Adicionar pixels de tracking além das analytics Cloudflare e Ahrefs para nossas próprias stats de page-view.',
      'Vender dados de candidato. Não os coletamos.',
    ],
    h2List: 'Lista completa de parceiros afiliados',
    bodyList: (n) => `${n} programas ativos. A coluna comissão mostra o que o programa nos paga por cadastro válido (não o que você paga).`,
    thPartner: 'Parceiro',
    thCategory: 'Categoria',
    thCommission: 'Nossa comissão',
    h2Question: 'Dúvida ou preocupação?',
    bodyQuestionPre: 'Se você ver uma recomendação que pareça suspeita, nos contate via',
    bodyQuestionLink: 'a página de contato',
    bodyQuestionPost: '. Removemos parceiros que perdem qualidade.',
  },
  it: {
    metaTitle: 'Divulgazione affiliati',
    metaDescription: 'Lista completa delle partnership di affiliazione su slateremote.com, come veniamo pagati e perché queste scelte.',
    eyebrow: 'Trasparenza',
    h1: 'Divulgazione affiliati',
    intro: 'Ogni prodotto raccomandato da slateremote.com è uno strumento che usiamo o un servizio che abbiamo valutato attentamente per l\'audience tech remote. Alcuni di questi link ci pagano una commissione. Questa pagina elenca ogni relazione commerciale, per intero.',
    h2Paid: 'Come veniamo pagati',
    bodyPaid: 'slateremote.com è gratuito da navigare, non ha pubblicità e non addebita mai i candidati. Il sito copre i suoi costi (dominio, l\'hosting è gratis su Cloudflare Pages) tramite tre canali:',
    paidFeaturedPre: 'Annunci in evidenza. I datori di lavoro possono pagare per evidenziare un ruolo sul sito. Vedi',
    paidFeaturedLink: 'la pagina di pubblicazione',
    paidFeaturedPost: '.',
    paidAffiliates: 'Partnership di affiliazione. Riceviamo una piccola commissione se ti iscrivi a uno dei servizi elencati tramite un link di questo sito. La lista completa è qui sotto.',
    paidSister: 'Siti gemelli. slateremote.com fa parte di una piccola rete con slowmadly.com (guide slow-travel) e ai-by-job.com (strumenti IA per lavoro). Ognuno ha i propri canali di monetizzazione.',
    h2WillNot: 'Cosa non faremo',
    willNot: [
      'Raccomandare un prodotto solo perché ci paga di più.',
      'Nascondere relazioni di affiliazione. Ogni link affiliato è taggato rel="sponsored".',
      'Aggiungere pixel di tracking oltre alle analytics Cloudflare e Ahrefs per le nostre statistiche di page-view.',
      'Vendere dati dei candidati. Non li raccogliamo.',
    ],
    h2List: 'Lista completa dei partner affiliati',
    bodyList: (n) => `${n} programmi attivi. La colonna commissione mostra quanto il programma ci paga per iscrizione valida (non quanto paghi tu).`,
    thPartner: 'Partner',
    thCategory: 'Categoria',
    thCommission: 'La nostra commissione',
    h2Question: 'Domanda o dubbio?',
    bodyQuestionPre: 'Se vedi una raccomandazione che sembra sospetta, contattaci via',
    bodyQuestionLink: 'la pagina contatti',
    bodyQuestionPost: '. Rimuoviamo i partner la cui qualità cala.',
  },
  pl: {
    metaTitle: 'Ujawnienie afiliacji',
    metaDescription: 'Pełna lista partnerstw afiliacyjnych używanych na slateremote.com, jak jesteśmy wynagradzani i dlaczego te wybory.',
    eyebrow: 'Przejrzystość',
    h1: 'Ujawnienie afiliacji',
    intro: 'Każdy produkt, który slateremote.com poleca, to albo narzędzie, którego sami używamy, albo usługa, którą starannie sprawdziliśmy dla zdalnej publiczności tech. Niektóre z tych linków produktowych płacą nam prowizję. Ta strona wymienia każdą relację komercyjną w całości.',
    h2Paid: 'Jak nam płacą',
    bodyPaid: 'slateremote.com jest darmowy w przeglądaniu, nie ma reklam i nigdy nie pobiera opłat od kandydatów. Strona pokrywa swoje koszty (domena, hosting jest darmowy na Cloudflare Pages) przez trzy kanały:',
    paidFeaturedPre: 'Wyróżnione oferty. Pracodawcy mogą zapłacić, by wyróżnić ofertę na stronie. Zobacz',
    paidFeaturedLink: 'stronę publikacji',
    paidFeaturedPost: '.',
    paidAffiliates: 'Partnerstwa afiliacyjne. Otrzymujemy małą prowizję, jeśli zapiszesz się do jednej z wymienionych usług przez link na tej stronie. Pełna lista poniżej.',
    paidSister: 'Strony siostrzane. slateremote.com jest częścią małej sieci z slowmadly.com (poradniki slow-travel) i ai-by-job.com (narzędzia AI według zawodu). Każda może zarabiać z własnych kanałów monetyzacji.',
    h2WillNot: 'Czego nie zrobimy',
    willNot: [
      'Polecać produktu tylko dlatego, że lepiej nam płaci.',
      'Ukrywać relacji afiliacyjnych. Każdy link afiliacyjny ma rel="sponsored".',
      'Dodawać pikseli śledzących poza analityką Cloudflare i Ahrefs dla naszych własnych statystyk wyświetleń.',
      'Sprzedawać danych kandydata. Nie zbieramy ich.',
    ],
    h2List: 'Pełna lista partnerów afiliacyjnych',
    bodyList: (n) => `${n} aktywnych programów. Kolumna prowizji pokazuje, ile program płaci nam za udaną rejestrację (nie ile ty płacisz).`,
    thPartner: 'Partner',
    thCategory: 'Kategoria',
    thCommission: 'Nasza prowizja',
    h2Question: 'Pytanie lub wątpliwość?',
    bodyQuestionPre: 'Jeśli zauważysz rekomendację, która wygląda dziwnie, napisz do nas przez',
    bodyQuestionLink: 'stronę kontaktu',
    bodyQuestionPost: '. Usuwamy partnerów, których jakość spada.',
  },
};

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = COPY[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'disclosure',
    title: c.metaTitle,
    description: c.metaDescription,
  });
}

export default function DisclosurePage({ params }: { params: { lang: Locale } }) {
  const c = COPY[params.lang];
  return (
    <article className="max-w-prose mx-auto space-y-8">
      <header className="border-b border-line pb-5">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1">{c.h1}</h1>
        <p className="text-graphite text-base mt-3">{c.intro}</p>
      </header>

      <section className="prose-body">
        <h2>{c.h2Paid}</h2>
        <p>{c.bodyPaid}</p>
        <ul>
          <li>
            <strong>{c.paidFeaturedPre}</strong>{' '}
            <a href={localePath(params.lang, 'submit')}>{c.paidFeaturedLink}</a>
            {c.paidFeaturedPost}
          </li>
          <li>{c.paidAffiliates}</li>
          <li>{c.paidSister}</li>
        </ul>

        <h2>{c.h2WillNot}</h2>
        <ul>
          {c.willNot.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>

        <h2>{c.h2List}</h2>
        <p>{c.bodyList(AFFILIATES.length)}</p>
      </section>

      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-left border-b border-line">
            <th className="py-2 pr-4 font-semibold text-ink">{c.thPartner}</th>
            <th className="py-2 pr-4 font-semibold text-ink">{c.thCategory}</th>
            <th className="py-2 font-semibold text-ink">{c.thCommission}</th>
          </tr>
        </thead>
        <tbody>
          {AFFILIATES.map((a) => (
            <tr key={a.slug} className="border-b border-line/60">
              <td className="py-2 pr-4">
                <a
                  href={a.url}
                  target="_blank"
                  rel="nofollow noopener sponsored"
                  className="text-forest hover:underline font-medium"
                >
                  {a.name}
                </a>
              </td>
              <td className="py-2 pr-4 text-muted capitalize">{a.category}</td>
              <td className="py-2 text-muted">{a.payout}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className="prose-body">
        <h2>{c.h2Question}</h2>
        <p>
          {c.bodyQuestionPre}{' '}
          <a href={localePath(params.lang, 'contact')}>{c.bodyQuestionLink}</a>
          {c.bodyQuestionPost}
        </p>
      </section>
    </article>
  );
}
