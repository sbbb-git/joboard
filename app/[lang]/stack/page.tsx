import type { Metadata } from 'next';
import { LOCALES, localePath } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { AFFILIATES, wiseUrlForLocale, type AffiliateEntry } from '@/lib/affiliates';
import { AffiliateCard } from '@/components/AffiliateCard';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

type SectionCopy = { title: string; intro: string };

type Copy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  introPre: (n: number) => string;
  introLink: string;
  introPost: string;
  footerPre: string;
  footerLink: string;
  footerPost: string;
  sections: Record<string, SectionCopy>;
};

const SECTION_IDS: Array<{ id: string; categories: AffiliateEntry['category'][] }> = [
  { id: 'money', categories: ['banking'] },
  { id: 'health', categories: ['insurance'] },
  { id: 'privacy', categories: ['privacy'] },
  { id: 'ai', categories: ['ai', 'voice'] },
  { id: 'newsletter', categories: ['newsletter'] },
  { id: 'productivity', categories: ['productivity'] },
  { id: 'community', categories: ['community'] },
  { id: 'talent', categories: ['talent'] },
  { id: 'shopping', categories: ['shopping'] },
  { id: 'investing', categories: ['investing'] },
];

const COPY: Record<Locale, Copy> = {
  en: {
    metaTitle: 'The remote work stack we actually use',
    metaDescription: 'The tools, banks, insurance, VPNs and AI services the slateremote.com team actually uses in 2026, grouped by category with full affiliate disclosure.',
    eyebrow: 'Discover',
    h1: 'The remote stack we run on',
    introPre: (n) => `${n} tools, banks, insurances, VPNs and AI services we use ourselves or recommend to remote tech workers around us. Affiliate links throughout, full transparency on `,
    introLink: 'the disclosure page',
    introPost: '.',
    footerPre: 'All outbound links on this page are tagged ',
    footerLink: 'full affiliate disclosure',
    footerPost: '. We may earn a small commission if you sign up via one of them. Pricing is unchanged for you. See the ',
    sections: {
      money: { title: 'Get paid from anywhere', intro: 'Multi-currency accounts, business banking, and the cheapest cross-border transfers we know.' },
      health: { title: 'Stay covered', intro: 'Health insurance that follows you across borders. The only category most nomads underspend on.' },
      privacy: { title: 'Privacy and connectivity', intro: 'Tools that keep your traffic private on hotel and coworking Wi-Fi, and unblock region-locked services.' },
      ai: { title: 'AI in the loop', intro: 'The AI tools we run our own work on, plus voice and audio platforms for products that need them.' },
      newsletter: { title: 'Newsletter & email', intro: 'The platforms we recommend if you want to build an audience around your remote work or product.' },
      productivity: { title: 'Meetings and async work', intro: 'Tools that make remote collaboration suck less. Recording, transcription, summarisation.' },
      community: { title: 'Community and education', intro: 'For when you want to monetise what you know rather than what you build.' },
      talent: { title: 'Earn directly from your skills', intro: 'Networks that pay vetted talent. Mercor is the strongest fit for AI-adjacent engineers.' },
      shopping: { title: 'Home office and gear', intro: 'Where we end up buying ergonomic chairs, monitors, microphones and cables.' },
      investing: { title: 'Long-horizon yield', intro: 'If you have a stable remote income and want to diversify beyond your local economy.' },
    },
  },
  fr: {
    metaTitle: 'Le stack remote que nous utilisons vraiment',
    metaDescription: "Les outils, banques, assurances, VPN et services IA que l'équipe slateremote.com utilise vraiment en 2026, par catégorie, avec notre disclosure.",
    eyebrow: 'Découvrir',
    h1: 'Le stack remote qui nous fait tourner',
    introPre: (n) => `${n} outils, banques, assurances, VPN et services IA que nous utilisons nous-mêmes ou recommandons aux travailleurs tech remote autour de nous. Liens affiliés partout, transparence totale sur `,
    introLink: 'la page de disclosure',
    introPost: '.',
    footerPre: 'Tous les liens sortants de cette page sont taggés ',
    footerLink: 'disclosure complète',
    footerPost: ". Nous pouvons toucher une petite commission si vous vous inscrivez via l'un d'eux. Le prix ne change pas pour vous. Voir la ",
    sections: {
      money: { title: 'Se faire payer depuis partout', intro: 'Comptes multi-devises, banques pro et les transferts internationaux les moins chers que nous connaissons.' },
      health: { title: 'Rester couvert', intro: 'Assurances santé qui vous suivent à travers les frontières. La seule catégorie sur laquelle la plupart des nomades sous-investissent.' },
      privacy: { title: 'Privacy et connectivité', intro: 'Outils qui gardent votre trafic privé sur le Wi-Fi des hôtels et coworkings, et débloquent les services géo-restreints.' },
      ai: { title: "L'IA dans la boucle", intro: 'Les outils IA sur lesquels nous bossons, plus les plateformes voix et audio pour les produits qui en ont besoin.' },
      newsletter: { title: 'Newsletter et email', intro: 'Les plateformes que nous recommandons si vous voulez bâtir une audience autour de votre travail remote ou produit.' },
      productivity: { title: 'Réunions et travail async', intro: 'Outils qui rendent la collaboration remote moins pénible. Enregistrement, transcription, résumé.' },
      community: { title: 'Communauté et éducation', intro: 'Pour quand vous voulez monétiser ce que vous savez plutôt que ce que vous construisez.' },
      talent: { title: 'Gagner directement avec vos compétences', intro: 'Réseaux qui paient les talents vérifiés. Mercor est le meilleur match pour les ingés proches de l\'IA.' },
      shopping: { title: 'Home office et matos', intro: 'Là où on finit par acheter chaises ergonomiques, écrans, micros et câbles.' },
      investing: { title: 'Rendement long terme', intro: 'Si vous avez un revenu remote stable et voulez diversifier au-delà de votre économie locale.' },
    },
  },
  de: {
    metaTitle: 'Der Remote-Stack, den wir wirklich nutzen',
    metaDescription: 'Die Tools, Banken, Versicherungen, VPNs und KI-Dienste, die das slateremote.com-Team 2026 wirklich nutzt, nach Kategorie und mit voller Offenlegung.',
    eyebrow: 'Entdecken',
    h1: 'Der Remote-Stack, auf dem wir laufen',
    introPre: (n) => `${n} Tools, Banken, Versicherungen, VPNs und KI-Services, die wir selbst nutzen oder Remote-Tech-Workern empfehlen. Affiliate-Links überall, volle Transparenz auf `,
    introLink: 'der Offenlegungs-Seite',
    introPost: '.',
    footerPre: 'Alle ausgehenden Links auf dieser Seite sind getaggt ',
    footerLink: 'vollständige Affiliate-Offenlegung',
    footerPost: '. Wir können eine kleine Provision erhalten, wenn Sie sich über einen dieser Links anmelden. Der Preis ändert sich für Sie nicht. Siehe die ',
    sections: {
      money: { title: 'Bezahlt werden von überall', intro: 'Multi-Währungs-Konten, Geschäftsbanking und die günstigsten grenzüberschreitenden Überweisungen, die wir kennen.' },
      health: { title: 'Versichert bleiben', intro: 'Krankenversicherungen, die mit Ihnen über Grenzen reisen. Die einzige Kategorie, in der die meisten Nomaden zu wenig ausgeben.' },
      privacy: { title: 'Privacy und Konnektivität', intro: 'Tools, die Ihren Traffic im Hotel- und Coworking-WLAN privat halten und geo-blockierte Dienste freischalten.' },
      ai: { title: 'KI im Loop', intro: 'Die KI-Tools, mit denen wir arbeiten, plus Voice- und Audio-Plattformen für Produkte, die sie brauchen.' },
      newsletter: { title: 'Newsletter & E-Mail', intro: 'Die Plattformen, die wir empfehlen, wenn Sie eine Audience rund um Ihre Remote-Arbeit oder Ihr Produkt aufbauen wollen.' },
      productivity: { title: 'Meetings und asynchrone Arbeit', intro: 'Tools, die Remote-Zusammenarbeit weniger nervig machen. Aufnahme, Transkription, Zusammenfassung.' },
      community: { title: 'Community und Bildung', intro: 'Wenn Sie monetarisieren wollen, was Sie wissen, statt was Sie bauen.' },
      talent: { title: 'Direkt mit Ihren Skills verdienen', intro: 'Netzwerke, die geprüfte Talente bezahlen. Mercor passt am besten für KI-nahe Engineers.' },
      shopping: { title: 'Home Office und Gear', intro: 'Wo wir ergonomische Stühle, Monitore, Mikrofone und Kabel kaufen.' },
      investing: { title: 'Langfristige Renditen', intro: 'Wenn Sie ein stabiles Remote-Einkommen haben und über Ihre lokale Wirtschaft hinaus diversifizieren wollen.' },
    },
  },
};

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = COPY[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'stack',
    title: c.metaTitle,
    description: c.metaDescription,
  });
}

export default function StackPage({ params }: { params: { lang: Locale } }) {
  const c = COPY[params.lang];
  return (
    <div className="space-y-12">
      <header className="border-b border-line pb-6">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="font-display text-3xl md:text-5xl font-normal tracking-tighter text-ink mt-1.5 leading-tight">
          {c.h1}
        </h1>
        <p className="text-graphite text-base md:text-lg mt-4 max-w-prose">
          {c.introPre(AFFILIATES.length)}
          <a href={localePath(params.lang, 'disclosure')} className="text-forest underline">
            {c.introLink}
          </a>
          {c.introPost}
        </p>
      </header>

      <nav className="flex flex-wrap gap-2">
        {SECTION_IDS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-xs px-3 py-1.5 rounded-full border border-line bg-paper hover:border-ink hover:bg-sand transition-colors"
          >
            {c.sections[s.id].title}
          </a>
        ))}
      </nav>

      {SECTION_IDS.map((s) => {
        const sc = c.sections[s.id];
        const entries = AFFILIATES.filter((a) => s.categories.includes(a.category)).map((a) =>
          a.slug === 'wise' ? { ...a, url: wiseUrlForLocale(params.lang) } : a,
        );
        if (entries.length === 0) return null;
        return (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <div className="mb-4">
              <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">
                {sc.title}
              </h2>
              <p className="text-sm text-muted mt-1.5 max-w-prose">{sc.intro}</p>
            </div>
            <div
              className={`grid gap-3 ${entries.length >= 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'}`}
            >
              {entries.map((e) => (
                <AffiliateCard key={e.slug} entry={e} />
              ))}
            </div>
          </section>
        );
      })}

      <section className="border-t border-line pt-6 text-xs text-muted">
        <p>
          {c.footerPre}
          <code>rel=&quot;nofollow noopener sponsored&quot;</code>
          {c.footerPost}
          <a href={localePath(params.lang, 'disclosure')} className="text-forest hover:underline">
            {c.footerLink}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
