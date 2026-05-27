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
    metaDescription: 'Every tool, bank, insurance, VPN and AI service the slateremote.com team uses or recommends to remote tech workers in 2026. Categorised, with our affiliate disclosure.',
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
    metaDescription: "Tous les outils, banques, assurances, VPN et services IA que l'équipe slateremote.com utilise ou recommande aux travailleurs tech remote en 2026. Catégorisé, avec notre disclosure d'affiliation.",
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
  es: {
    metaTitle: 'El stack remoto que de verdad usamos',
    metaDescription: 'Cada herramienta, banco, seguro, VPN y servicio IA que el equipo slateremote.com usa o recomienda a trabajadores tech remotos en 2026. Categorizado, con nuestra disclosure de afiliados.',
    eyebrow: 'Descubre',
    h1: 'El stack remoto sobre el que funcionamos',
    introPre: (n) => `${n} herramientas, bancos, seguros, VPN y servicios IA que usamos o recomendamos a trabajadores tech remotos. Enlaces de afiliado en todo el sitio, transparencia total en `,
    introLink: 'la página de disclosure',
    introPost: '.',
    footerPre: 'Todos los enlaces salientes de esta página están etiquetados ',
    footerLink: 'disclosure completa de afiliados',
    footerPost: '. Podemos recibir una pequeña comisión si te registras vía uno de ellos. El precio no cambia para ti. Ver la ',
    sections: {
      money: { title: 'Cobra desde cualquier sitio', intro: 'Cuentas multi-divisa, banca de negocios y las transferencias internacionales más baratas que conocemos.' },
      health: { title: 'Mantente cubierto', intro: 'Seguros médicos que te siguen a través de fronteras. La única categoría en la que la mayoría de nómadas invierte poco.' },
      privacy: { title: 'Privacidad y conectividad', intro: 'Herramientas que mantienen tu tráfico privado en Wi-Fi de hoteles y coworking, y desbloquean servicios geo-restringidos.' },
      ai: { title: 'IA en el bucle', intro: 'Las herramientas IA con las que trabajamos, más plataformas de voz y audio para productos que las necesitan.' },
      newsletter: { title: 'Newsletter y email', intro: 'Plataformas que recomendamos si quieres construir audiencia alrededor de tu trabajo remoto o producto.' },
      productivity: { title: 'Reuniones y trabajo async', intro: 'Herramientas que hacen la colaboración remota menos dolorosa. Grabación, transcripción, resumen.' },
      community: { title: 'Comunidad y educación', intro: 'Para cuando quieres monetizar lo que sabes en vez de lo que construyes.' },
      talent: { title: 'Gana directamente con tus skills', intro: 'Redes que pagan a talento verificado. Mercor es el mejor encaje para ingenieros cercanos a IA.' },
      shopping: { title: 'Home office y gear', intro: 'Donde acabamos comprando sillas ergonómicas, monitores, micros y cables.' },
      investing: { title: 'Rendimiento a largo plazo', intro: 'Si tienes ingreso remoto estable y quieres diversificar más allá de tu economía local.' },
    },
  },
  de: {
    metaTitle: 'Der Remote-Stack, den wir wirklich nutzen',
    metaDescription: 'Jedes Tool, jede Bank, Versicherung, VPN und KI-Service, das das slateremote.com-Team nutzt oder Remote-Tech-Workern 2026 empfiehlt. Kategorisiert, mit unserer Affiliate-Offenlegung.',
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
  pt: {
    metaTitle: 'O stack remoto que realmente usamos',
    metaDescription: 'Cada ferramenta, banco, seguro, VPN e serviço IA que a equipe slateremote.com usa ou recomenda para trabalhadores tech remotos em 2026. Categorizado, com nossa divulgação de afiliados.',
    eyebrow: 'Descubra',
    h1: 'O stack remoto sobre o qual rodamos',
    introPre: (n) => `${n} ferramentas, bancos, seguros, VPNs e serviços IA que usamos ou recomendamos a trabalhadores tech remotos ao nosso redor. Links de afiliado em todo o site, transparência total em `,
    introLink: 'a página de divulgação',
    introPost: '.',
    footerPre: 'Todos os links de saída desta página são marcados ',
    footerLink: 'divulgação completa de afiliados',
    footerPost: '. Podemos receber uma pequena comissão se você se inscrever via um deles. O preço não muda para você. Veja a ',
    sections: {
      money: { title: 'Seja pago de qualquer lugar', intro: 'Contas multi-moeda, banking empresarial e as transferências internacionais mais baratas que conhecemos.' },
      health: { title: 'Fique coberto', intro: 'Seguros saúde que te seguem entre fronteiras. A única categoria em que a maioria dos nômades gasta de menos.' },
      privacy: { title: 'Privacidade e conectividade', intro: 'Ferramentas que mantêm seu tráfego privado em Wi-Fi de hotel e coworking, e desbloqueiam serviços com restrição regional.' },
      ai: { title: 'IA no loop', intro: 'As ferramentas IA com que rodamos nosso próprio trabalho, mais plataformas de voz e áudio para produtos que precisam delas.' },
      newsletter: { title: 'Newsletter e email', intro: 'As plataformas que recomendamos se você quer construir audiência em torno do seu trabalho remoto ou produto.' },
      productivity: { title: 'Reuniões e trabalho async', intro: 'Ferramentas que tornam a colaboração remota menos sofrida. Gravação, transcrição, sumarização.' },
      community: { title: 'Comunidade e educação', intro: 'Para quando você quer monetizar o que sabe em vez do que constrói.' },
      talent: { title: 'Ganhe direto com suas skills', intro: 'Redes que pagam talentos verificados. Mercor é o melhor fit para engenheiros próximos de IA.' },
      shopping: { title: 'Home office e equipamento', intro: 'Onde acabamos comprando cadeiras ergonômicas, monitores, microfones e cabos.' },
      investing: { title: 'Rendimento de longo prazo', intro: 'Se você tem renda remota estável e quer diversificar além da sua economia local.' },
    },
  },
  it: {
    metaTitle: 'Lo stack remote che usiamo davvero',
    metaDescription: 'Ogni strumento, banca, assicurazione, VPN e servizio IA che il team slateremote.com usa o raccomanda ai lavoratori tech remote nel 2026. Categorizzato, con la nostra divulgazione affiliati.',
    eyebrow: 'Scopri',
    h1: 'Lo stack remote su cui giriamo',
    introPre: (n) => `${n} strumenti, banche, assicurazioni, VPN e servizi IA che usiamo o raccomandiamo ai lavoratori tech remote attorno a noi. Link affiliati ovunque, trasparenza totale su `,
    introLink: 'la pagina di divulgazione',
    introPost: '.',
    footerPre: 'Tutti i link in uscita di questa pagina sono taggati ',
    footerLink: 'divulgazione completa affiliati',
    footerPost: '. Possiamo ricevere una piccola commissione se ti iscrivi tramite uno di essi. Il prezzo non cambia per te. Vedi la ',
    sections: {
      money: { title: 'Farsi pagare da ovunque', intro: 'Conti multi-valuta, banking business e i bonifici internazionali più economici che conosciamo.' },
      health: { title: 'Restare coperti', intro: 'Assicurazioni sanitarie che ti seguono attraverso le frontiere. L\'unica categoria su cui la maggior parte dei nomadi sotto-investe.' },
      privacy: { title: 'Privacy e connettività', intro: 'Strumenti che tengono il tuo traffico privato su Wi-Fi di hotel e coworking, e sbloccano servizi geo-bloccati.' },
      ai: { title: 'IA nel loop', intro: 'Gli strumenti IA con cui lavoriamo, più piattaforme voice e audio per i prodotti che ne hanno bisogno.' },
      newsletter: { title: 'Newsletter ed email', intro: 'Le piattaforme che raccomandiamo se vuoi costruire un\'audience attorno al tuo lavoro remote o prodotto.' },
      productivity: { title: 'Meeting e lavoro async', intro: 'Strumenti che rendono la collaborazione remote meno fastidiosa. Registrazione, trascrizione, sintesi.' },
      community: { title: 'Community ed educazione', intro: 'Per quando vuoi monetizzare ciò che sai invece di ciò che costruisci.' },
      talent: { title: 'Guadagnare direttamente con le tue skill', intro: 'Network che pagano talento verificato. Mercor è il migliore fit per ingegneri vicini all\'IA.' },
      shopping: { title: 'Home office e attrezzatura', intro: 'Dove finiamo per comprare sedie ergonomiche, monitor, microfoni e cavi.' },
      investing: { title: 'Rendimento a lungo termine', intro: 'Se hai un reddito remote stabile e vuoi diversificare oltre la tua economia locale.' },
    },
  },
  pl: {
    metaTitle: 'Zdalny stack, którego naprawdę używamy',
    metaDescription: 'Każde narzędzie, bank, ubezpieczenie, VPN i usługa AI, której zespół slateremote.com używa lub poleca zdalnym pracownikom tech w 2026. Skategoryzowane, z naszą deklaracją afiliacji.',
    eyebrow: 'Odkryj',
    h1: 'Zdalny stack, na którym jedziemy',
    introPre: (n) => `${n} narzędzi, banków, ubezpieczeń, VPN i usług AI, których używamy lub polecamy zdalnym pracownikom tech wokół nas. Linki afiliacyjne wszędzie, pełna przejrzystość na `,
    introLink: 'stronie deklaracji',
    introPost: '.',
    footerPre: 'Wszystkie linki wychodzące na tej stronie są oznaczone ',
    footerLink: 'pełna deklaracja afiliacji',
    footerPost: '. Możemy otrzymać małą prowizję, jeśli zarejestrujesz się przez jeden z nich. Cena nie zmienia się dla ciebie. Zobacz ',
    sections: {
      money: { title: 'Otrzymuj zapłatę z każdego miejsca', intro: 'Konta wielowalutowe, bankowość biznesowa i najtańsze przelewy międzynarodowe, jakie znamy.' },
      health: { title: 'Bądź ubezpieczony', intro: 'Ubezpieczenia zdrowotne, które podążają z tobą przez granice. Jedyna kategoria, na której większość nomadów oszczędza za bardzo.' },
      privacy: { title: 'Prywatność i łączność', intro: 'Narzędzia, które chronią twój ruch w Wi-Fi hoteli i coworków i odblokowują usługi z ograniczeniami regionalnymi.' },
      ai: { title: 'AI w pętli', intro: 'Narzędzia AI, na których wykonujemy naszą pracę, plus platformy głosowe i audio dla produktów, które ich potrzebują.' },
      newsletter: { title: 'Newsletter i email', intro: 'Platformy, które polecamy, jeśli chcesz zbudować publiczność wokół swojej zdalnej pracy lub produktu.' },
      productivity: { title: 'Spotkania i praca asynchroniczna', intro: 'Narzędzia, które sprawiają, że współpraca zdalna mniej boli. Nagrywanie, transkrypcja, podsumowanie.' },
      community: { title: 'Społeczność i edukacja', intro: 'Gdy chcesz monetyzować to, co wiesz, zamiast tego, co budujesz.' },
      talent: { title: 'Zarabiaj bezpośrednio na swoich umiejętnościach', intro: 'Sieci, które płacą zweryfikowanym talentom. Mercor pasuje najlepiej dla inżynierów blisko AI.' },
      shopping: { title: 'Domowe biuro i sprzęt', intro: 'Gdzie kończymy kupując ergonomiczne krzesła, monitory, mikrofony i kable.' },
      investing: { title: 'Długoterminowe zyski', intro: 'Jeśli masz stabilny zdalny dochód i chcesz dywersyfikować poza lokalną gospodarką.' },
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
