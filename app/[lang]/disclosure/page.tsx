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
    metaTitle: 'Affiliate disclosure and how we get paid',
    metaDescription: 'Every affiliate partnership behind slateremote.com, what each program pays us per signup, the three revenue channels we use, and what we refuse to do.',
    eyebrow: 'Transparency',
    h1: 'Affiliate disclosure',
    intro: 'Every product slateremote.com recommends is either a tool we use ourselves or one we have vetted carefully for the remote tech audience. Some of those product links pay us a commission. This page lists every commercial relationship, in full.',
    h2Paid: 'How we get paid',
    bodyPaid: 'slateremote.com is free to browse, has no ads, and never charges candidates. The site covers its own costs (domain, hosting is free on Cloudflare Pages) through two channels:',
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
    metaTitle: 'Divulgation des affiliations et rémunération',
    metaDescription: "Tous les partenariats affiliés derrière slateremote.com, ce que chaque programme nous paie par inscription, nos trois canaux de revenus et nos limites.",
    eyebrow: 'Transparence',
    h1: 'Divulgation des affiliations',
    intro: "Chaque produit recommandé par slateremote.com est soit un outil que nous utilisons nous-mêmes, soit un service que nous avons soigneusement examiné pour l'audience tech remote. Certains de ces liens nous rémunèrent. Cette page liste toutes les relations commerciales, intégralement.",
    h2Paid: 'Comment nous sommes payés',
    bodyPaid: "slateremote.com est gratuit, sans pub, et ne facture jamais les candidats. Le site couvre ses coûts (le domaine, l'hébergement est gratuit sur Cloudflare Pages) via deux canaux :",
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
  de: {
    metaTitle: 'Affiliate-Offenlegung und unsere Vergütung',
    metaDescription: 'Alle Affiliate-Partnerschaften hinter slateremote.com, was jedes Programm uns pro Anmeldung zahlt, unsere drei Einnahmekanäle und was wir nicht tun.',
    eyebrow: 'Transparenz',
    h1: 'Affiliate-Offenlegung',
    intro: 'Jedes Produkt, das slateremote.com empfiehlt, ist entweder ein Tool, das wir selbst nutzen, oder ein Dienst, den wir sorgfältig für die Remote-Tech-Audience geprüft haben. Einige dieser Produktlinks zahlen uns eine Provision. Diese Seite listet jede kommerzielle Beziehung vollständig auf.',
    h2Paid: 'Wie wir bezahlt werden',
    bodyPaid: 'slateremote.com ist kostenlos nutzbar, hat keine Werbung und berechnet Kandidaten nie etwas. Die Seite deckt ihre Kosten (Domain, Hosting ist kostenlos auf Cloudflare Pages) über zwei Kanäle:',
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
