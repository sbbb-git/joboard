import { AFFILIATE_MAP } from '@/lib/affiliates';
import type { Locale } from '@/lib/types';

// Site-wide partner band shown at the foot of every page (inserted via
// the Footer component). Picks two partners per page based on a stable
// hash of the path so the same page always shows the same pair but the
// overall site spreads the inventory evenly.

type Partner = {
  slug: keyof typeof AFFILIATE_MAP | string;
  name: string;
  blurb: Record<Locale, string>;
  cta: Record<Locale, string>;
};

type Copy = {
  eyebrow: string;
  disclosure: string;
};

const COPY: Record<Locale, Copy> = {
  en: { eyebrow: 'Partners we use', disclosure: 'Affiliate. See full disclosure' },
  fr: { eyebrow: 'Partenaires que nous utilisons', disclosure: 'Affilié. Voir la divulgation complète' },
  es: { eyebrow: 'Partners que usamos', disclosure: 'Afiliado. Ver divulgación completa' },
  de: { eyebrow: 'Partner, die wir nutzen', disclosure: 'Affiliate. Vollständige Offenlegung' },
  pt: { eyebrow: 'Parceiros que usamos', disclosure: 'Afiliado. Ver divulgação completa' },
  it: { eyebrow: 'Partner che usiamo', disclosure: 'Affiliato. Vedi divulgazione completa' },
  pl: { eyebrow: 'Partnerzy, których używamy', disclosure: 'Afiliacja. Pełna informacja' },
};

const PARTNERS: Partner[] = [
  {
    slug: 'fireflies',
    name: 'Fireflies',
    blurb: {
      en: 'Records and summarises every meeting. Skip the call, read the summary.',
      fr: 'Enregistre et résume chaque meeting. Sautez la réunion, lisez le résumé.',
      es: 'Graba y resume cada reunión. Sáltate la llamada, lee el resumen.',
      de: 'Zeichnet jedes Meeting auf und fasst es zusammen. Spar dir den Call.',
      pt: 'Grava e resume cada reunião. Pule a call, leia o resumo.',
      it: 'Registra e riassume ogni meeting. Salta la call, leggi il riassunto.',
      pl: 'Nagrywa i podsumowuje każde spotkanie. Pomiń call, przeczytaj podsumowanie.',
    },
    cta: {
      en: 'Try free →',
      fr: 'Essayer gratuitement →',
      es: 'Probar gratis →',
      de: 'Kostenlos testen →',
      pt: 'Testar grátis →',
      it: 'Provare gratis →',
      pl: 'Wypróbuj za darmo →',
    },
  },
  {
    slug: 'claude',
    name: 'Claude',
    blurb: {
      en: 'The LLM we use to draft content and debug scrapers.',
      fr: "Le LLM que nous utilisons pour rédiger et déboguer.",
      es: 'El LLM que usamos para redactar y depurar.',
      de: 'Der LLM, den wir zum Schreiben und Debuggen nutzen.',
      pt: 'O LLM que usamos para redigir e depurar.',
      it: "L'LLM che usiamo per scrivere e debuggare.",
      pl: 'LLM, którego używamy do pisania i debugowania.',
    },
    cta: {
      en: 'Try Claude →',
      fr: 'Essayer Claude →',
      es: 'Probar Claude →',
      de: 'Claude testen →',
      pt: 'Testar Claude →',
      it: 'Provare Claude →',
      pl: 'Wypróbuj Claude →',
    },
  },
  {
    slug: 'skool',
    name: 'Skool',
    blurb: {
      en: 'Run a paid community with courses, events and a leaderboard.',
      fr: 'Lance une communauté payante : cours, events, leaderboard.',
      es: 'Lanza una comunidad de pago: cursos, eventos, leaderboard.',
      de: 'Starte eine Paid-Community mit Kursen, Events und Leaderboard.',
      pt: 'Lance uma comunidade paga: cursos, eventos, leaderboard.',
      it: 'Lancia una community a pagamento: corsi, eventi, leaderboard.',
      pl: 'Uruchom płatną społeczność: kursy, wydarzenia, ranking.',
    },
    cta: {
      en: 'Start a community →',
      fr: 'Lancer une communauté →',
      es: 'Empezar una comunidad →',
      de: 'Community starten →',
      pt: 'Começar uma comunidade →',
      it: 'Avviare una community →',
      pl: 'Uruchom społeczność →',
    },
  },
  {
    slug: 'aweber',
    name: 'AWeber',
    blurb: {
      en: 'Established email marketing with strong deliverability. Free up to 500.',
      fr: 'Email marketing établi, forte délivrabilité. Gratuit jusqu\'à 500.',
      es: 'Email marketing establecido, alta entregabilidad. Gratis hasta 500.',
      de: 'Etabliertes E-Mail-Marketing mit guter Zustellrate. Gratis bis 500.',
      pt: 'Email marketing estabelecido, alta entregabilidade. Grátis até 500.',
      it: 'Email marketing affermato, alta deliverability. Gratis fino a 500.',
      pl: 'Sprawdzony email marketing, wysoka dostarczalność. Darmowo do 500.',
    },
    cta: {
      en: 'Try AWeber →',
      fr: 'Essayer AWeber →',
      es: 'Probar AWeber →',
      de: 'AWeber testen →',
      pt: 'Testar AWeber →',
      it: 'Provare AWeber →',
      pl: 'Wypróbuj AWeber →',
    },
  },
  {
    slug: 'safetywing',
    name: 'SafetyWing',
    blurb: {
      en: 'Health insurance for nomads. 180+ countries, monthly billing.',
      fr: 'Assurance santé pour nomades. 180+ pays, facturation mensuelle.',
      es: 'Seguro de salud para nómadas. 180+ países, mensual.',
      de: 'Krankenversicherung für Nomaden. 180+ Länder, monatlich.',
      pt: 'Seguro de saúde para nômades. 180+ países, mensal.',
      it: 'Assicurazione sanitaria per nomadi. 180+ paesi, mensile.',
      pl: 'Ubezpieczenie zdrowotne dla nomadów. 180+ krajów, miesięcznie.',
    },
    cta: {
      en: 'Get covered →',
      fr: 'Souscrire →',
      es: 'Contratar →',
      de: 'Versichern →',
      pt: 'Contratar →',
      it: 'Attivare →',
      pl: 'Wykup →',
    },
  },
  {
    slug: 'nordvpn',
    name: 'NordVPN',
    blurb: {
      en: 'VPN with 6,000+ servers. Public Wi-Fi safety + geo-unlocking.',
      fr: 'VPN avec 6 000+ serveurs. Sécurité Wi-Fi public + déblocage géo.',
      es: 'VPN con 6 000+ servidores. Seguridad Wi-Fi público + geo-desbloqueo.',
      de: 'VPN mit 6.000+ Servern. Öffentliches-WLAN-Schutz + Geo-Unlock.',
      pt: 'VPN com 6.000+ servidores. Segurança Wi-Fi público + geo-unlock.',
      it: 'VPN con 6.000+ server. Sicurezza Wi-Fi pubblico + geo-unlock.',
      pl: 'VPN z 6000+ serwerów. Bezpieczeństwo publicznego Wi-Fi + geo-unlock.',
    },
    cta: {
      en: 'Get NordVPN →',
      fr: 'Obtenir NordVPN →',
      es: 'Conseguir NordVPN →',
      de: 'NordVPN holen →',
      pt: 'Pegar NordVPN →',
      it: 'Ottenere NordVPN →',
      pl: 'Pobrać NordVPN →',
    },
  },
];

// Simple deterministic 32-bit hash from a string (FNV-1a variant)
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function PartnerBand({ locale, path }: { locale: Locale; path?: string }) {
  const n = PARTNERS.length;
  if (n === 0) return null;
  const seed = hash((path ?? '') + locale);
  const i = ((seed % n) + n) % n;
  // Offset 1..n-1 so j is always different from i, both in [0, n-1]
  const offset = 1 + (Math.floor(seed / n) % Math.max(1, n - 1));
  const j = (i + offset) % n;
  const picks = [PARTNERS[i], PARTNERS[j]].filter((p): p is Partner => Boolean(p));
  if (picks.length === 0) return null;
  const c = COPY[locale];
  return (
    <aside className="border-t border-line/60 bg-paper/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 py-6">
        <div className="flex items-baseline justify-between gap-3 flex-wrap mb-4">
          <p className="text-[10px] uppercase tracking-wider text-subtle font-semibold">
            {c.eyebrow}
          </p>
          <a
            href={`/${locale}/disclosure`}
            className="text-[10px] uppercase tracking-wider text-subtle hover:text-ink"
          >
            {c.disclosure}
          </a>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {picks.map((p) => {
            const entry = AFFILIATE_MAP[p.slug];
            if (!entry) return null;
            return (
              <a
                key={p.slug}
                href={entry.url}
                target="_blank"
                rel="nofollow noopener sponsored"
                className="block rounded-xl border border-line bg-bg hover:border-ink hover-lift p-4"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-semibold text-ink text-sm">{p.name}</p>
                  <span className="text-[10px] uppercase tracking-wider text-subtle">
                    {entry.category}
                  </span>
                </div>
                <p className="text-xs text-muted mt-1.5 leading-relaxed line-clamp-2">
                  {p.blurb[locale]}
                </p>
                <p className="text-xs font-semibold text-forest mt-2">{p.cta[locale]}</p>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
