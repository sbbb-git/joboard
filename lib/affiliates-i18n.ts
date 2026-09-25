import type { Locale } from './types';

export type AffiliateCopy = {
  badge: string;
  disclaimer: string;
  essentialsTitle: string;
  essentialsIntro: (city?: string) => string;
  bankingTitle: string;
  bankingIntro: (context?: string) => string;
  toolsTitle: string;
  toolsIntro: string;
  earnTitle: string;
  earnIntro: string;
};

export const AFFILIATE_COPY: Record<Locale, AffiliateCopy> = {
  en: {
    badge: 'Affiliate · disclosure below',
    disclaimer:
      'We may earn a small commission if you sign up via these links. Pricing and features are unchanged.',
    essentialsTitle: 'Essentials for working from anywhere',
    essentialsIntro: (city) =>
      city
        ? `Two things to sort before you start working from ${city}: health insurance that follows you, and a VPN that handles public Wi-Fi.`
        : 'Two things to sort when you work from anywhere: portable insurance and a reliable VPN.',
    bankingTitle: 'Banking for remote workers',
    bankingIntro: (ctx) =>
      ctx
        ? `Multi-currency tools that work well if you are moving to or earning from ${ctx}.`
        : 'Multi-currency tools for receiving payments across borders.',
    toolsTitle: 'Tools remote workers actually use',
    toolsIntro:
      'Software we run our own stack on, plus the better picks we recommend to remote engineers around us.',
    earnTitle: 'Earn with AI (or build with it)',
    earnIntro:
      'Two options if AI is in the loop: get paid by Mercor to evaluate model outputs, or work alongside Claude on your own product.',
  },
  fr: {
    badge: 'Affilié · divulgation ci-dessous',
    disclaimer:
      'Nous pouvons percevoir une petite commission si vous vous inscrivez via ces liens. Les prix et fonctionnalités restent inchangés.',
    essentialsTitle: "L'essentiel pour travailler de partout",
    essentialsIntro: (city) =>
      city
        ? `Deux choses à régler avant de commencer à travailler depuis ${city} : une assurance santé qui vous suit et un VPN pour le Wi-Fi public.`
        : 'Deux choses à régler quand vous travaillez de partout : une assurance portable et un VPN fiable.',
    bankingTitle: 'Banque pour travailleurs remote',
    bankingIntro: (ctx) =>
      ctx
        ? `Des outils multi-devises pratiques si vous déménagez vers ${ctx} ou y gagnez votre vie.`
        : "Des outils multi-devises pour recevoir des paiements à l'international.",
    toolsTitle: 'Les outils que les remote utilisent vraiment',
    toolsIntro:
      'Les logiciels qui font tourner notre propre stack, plus les meilleurs choix que nous recommandons aux ingénieurs remote.',
    earnTitle: "Gagner avec l'IA (ou construire avec)",
    earnIntro:
      "Deux options si l'IA entre en jeu : être payé par Mercor pour évaluer des sorties de modèles, ou travailler avec Claude sur votre propre produit.",
  },
  de: {
    badge: 'Affiliate · Offenlegung unten',
    disclaimer:
      'Wir erhalten möglicherweise eine kleine Provision, wenn du dich über diese Links anmeldest. Preise und Funktionen bleiben unverändert.',
    essentialsTitle: 'Das Wichtigste fürs Arbeiten von überall',
    essentialsIntro: (city) =>
      city
        ? `Zwei Dinge solltest du regeln, bevor du von ${city} aus arbeitest: eine Krankenversicherung, die mitreist, und ein VPN für öffentliches WLAN.`
        : 'Zwei Dinge, die du regeln solltest, wenn du von überall arbeitest: eine mobile Versicherung und ein zuverlässiges VPN.',
    bankingTitle: 'Banking für Remote-Arbeiter',
    bankingIntro: (ctx) =>
      ctx
        ? `Multi-Währungs-Tools, die gut funktionieren, wenn du nach ${ctx} ziehst oder dort verdienst.`
        : 'Multi-Währungs-Tools für grenzüberschreitende Zahlungen.',
    toolsTitle: 'Tools, die Remote-Arbeiter wirklich nutzen',
    toolsIntro:
      'Software, mit der wir unseren eigenen Stack betreiben, plus die besseren Empfehlungen für Remote-Ingenieure.',
    earnTitle: 'Mit KI verdienen (oder damit bauen)',
    earnIntro:
      'Zwei Optionen, wenn KI im Spiel ist: lass dich von Mercor fürs Bewerten von Modellausgaben bezahlen oder arbeite mit Claude an deinem eigenen Produkt.',
  },
};
