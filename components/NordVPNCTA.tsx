import { AFFILIATE_MAP } from '@/lib/affiliates';
import type { Locale } from '@/lib/types';

type Copy = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    eyebrow: 'Privacy for remote work',
    title: 'Lock down public Wi-Fi and access region-locked tools with NordVPN',
    body: '6,000+ servers worldwide, fast enough to ship code from any cafe or coworking space. Use it on every public network you connect to and to access region-locked dev tools, payment portals and APIs without dropping packets.',
    cta: 'Get NordVPN →',
  },
  fr: {
    eyebrow: 'Privacy pour le remote',
    title: 'Sécurisez le Wi-Fi public et débloquez les outils géo-restreints avec NordVPN',
    body: '6 000+ serveurs dans le monde, assez rapides pour pousser du code depuis n\'importe quel café ou coworking. À utiliser sur chaque réseau public auquel vous vous connectez et pour accéder aux outils dev, portails de paiement et APIs géo-restreints sans coupure.',
    cta: 'Obtenir NordVPN →',
  },
  es: {
    eyebrow: 'Privacidad para remote',
    title: 'Asegura el Wi-Fi público y desbloquea herramientas geo-restringidas con NordVPN',
    body: '6 000+ servidores en el mundo, lo bastante rápidos para hacer push desde cualquier café o coworking. Úsalo en cada red pública a la que te conectes y para acceder a herramientas dev, portales de pago y APIs geo-restringidos sin caídas.',
    cta: 'Conseguir NordVPN →',
  },
  de: {
    eyebrow: 'Privacy für Remote',
    title: 'Sichere öffentliches WLAN und entsperre regionsbeschränkte Tools mit NordVPN',
    body: '6.000+ Server weltweit, schnell genug um Code aus jedem Café oder Coworking zu pushen. Nutze es in jedem öffentlichen Netzwerk und für regionsbeschränkte Dev-Tools, Zahlungsportale und APIs ohne Verbindungsabbrüche.',
    cta: 'NordVPN holen →',
  },
  pt: {
    eyebrow: 'Privacidade para remoto',
    title: 'Proteja o Wi-Fi público e desbloqueie ferramentas com restrição regional usando NordVPN',
    body: '6.000+ servidores no mundo, rápidos o suficiente para fazer push de qualquer café ou coworking. Use em toda rede pública que conectar e para acessar ferramentas dev, portais de pagamento e APIs com restrição regional sem quedas.',
    cta: 'Pegar NordVPN →',
  },
  it: {
    eyebrow: 'Privacy per il remote',
    title: 'Proteggi il Wi-Fi pubblico e sblocca strumenti geo-bloccati con NordVPN',
    body: '6.000+ server nel mondo, abbastanza veloci per fare push da qualunque caffè o coworking. Usalo su ogni rete pubblica e per accedere a strumenti dev, portali di pagamento e API geo-bloccati senza interruzioni.',
    cta: 'Ottenere NordVPN →',
  },
  pl: {
    eyebrow: 'Prywatność dla pracy zdalnej',
    title: 'Zabezpiecz publiczne Wi-Fi i odblokuj narzędzia z ograniczeniami regionalnymi z NordVPN',
    body: '6000+ serwerów na świecie, dość szybkich, by wypchnąć kod z dowolnej kawiarni lub coworkingu. Używaj w każdej publicznej sieci i do narzędzi dev, portali płatniczych i API z ograniczeniami regionalnymi bez przerw.',
    cta: 'Pobrać NordVPN →',
  },
};

export function NordVPNCTA({ locale = 'en' }: { locale?: Locale }) {
  const copy = COPY[locale];
  const url = AFFILIATE_MAP.nordvpn.url;
  return (
    <section className="rounded-2xl border border-line shadow-soft p-6 relative overflow-hidden bg-ink text-bg">
      <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-bg/10" />
      <div className="relative">
        <p className="text-[10px] uppercase tracking-wider text-bg/70 font-bold">{copy.eyebrow}</p>
        <h2 className="font-display text-xl md:text-2xl font-normal tracking-tighter text-bg mt-2">
          {copy.title}
        </h2>
        <p className="text-sm text-bg/80 mt-2 max-w-prose">{copy.body}</p>
        <a
          href={url}
          target="_blank"
          rel="nofollow noopener sponsored"
          className="inline-flex items-center mt-4 px-5 py-2.5 bg-bg text-ink rounded-full text-sm font-semibold hover:bg-forest hover:text-bg transition-colors"
        >
          {copy.cta}
        </a>
      </div>
    </section>
  );
}
