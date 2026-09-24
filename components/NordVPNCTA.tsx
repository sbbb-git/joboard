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
  de: {
    eyebrow: 'Privacy für Remote',
    title: 'Sichere öffentliches WLAN und entsperre regionsbeschränkte Tools mit NordVPN',
    body: '6.000+ Server weltweit, schnell genug um Code aus jedem Café oder Coworking zu pushen. Nutze es in jedem öffentlichen Netzwerk und für regionsbeschränkte Dev-Tools, Zahlungsportale und APIs ohne Verbindungsabbrüche.',
    cta: 'NordVPN holen →',
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
