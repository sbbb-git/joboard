import type { Locale } from './types';

// French and German copy for the affiliate cards (AffiliateCard). The entries
// in lib/affiliates.ts only carry English, and the cards rendered it verbatim
// on /fr and /de guide pages: 128 card instances in English text. Keyed by
// affiliate slug; anything missing falls back to the English entry.
export const AFFILIATE_LOCALE: Record<string, Partial<Record<Exclude<Locale, 'en'>, { blurb: string; cta: string }>>> = {
  aweber: {
    fr: { blurb: "Plateforme d'emailing éprouvée, avec une excellente délivrabilité. Gratuite jusqu'à 500 abonnés, cookie de 365 jours.", cta: 'Essayer AWeber' },
    de: { blurb: 'Bewährte E-Mail-Marketing-Plattform mit starker Zustellbarkeit. Kostenlos bis 500 Abonnenten, 365-Tage-Cookie.', cta: 'AWeber testen' },
  },
  beehiiv: {
    fr: { blurb: 'La plateforme que nous utilisons pour notre propre newsletter. Pensée pour monétiser l’écriture, sans abonnement sur l’offre de départ.', cta: 'Lancer une newsletter' },
    de: { blurb: 'Die Plattform, die wir für unseren eigenen Newsletter nutzen. Gebaut für monetarisiertes Schreiben, ohne Monatsgebühr im Einstiegstarif.', cta: 'Newsletter starten' },
  },
  braintrust: {
    fr: { blurb: 'Réseau de freelances tech haut de gamme. Créez votre profil une fois, recevez des missions de clients vérifiés.', cta: 'Rejoindre Braintrust' },
    de: { blurb: 'Netzwerk für erstklassige Freelance-Engineers. Einmal Profil anlegen, passende geprüfte Kundenprojekte erhalten.', cta: 'Braintrust beitreten' },
  },
  claude: {
    fr: { blurb: 'Le LLM que nous utilisons pour préparer et rédiger nos guides. Très bon sur les longs documents, le code et le raisonnement.', cta: 'Essayer Claude' },
    de: { blurb: 'Das LLM, mit dem wir unsere Guides recherchieren und schreiben. Stark bei langen Dokumenten, Code und sorgfältigem Denken.', cta: 'Claude testen' },
  },
  fireflies: {
    fr: { blurb: 'Enregistre, transcrit et résume chaque réunion automatiquement. Idéal en asynchrone : sautez l’appel, lisez le résumé.', cta: 'Essai gratuit' },
    de: { blurb: 'Nimmt jedes Meeting automatisch auf, transkribiert und fasst es zusammen. Ideal asynchron: Call auslassen, Zusammenfassung lesen.', cta: 'Kostenlos testen' },
  },
  fiverr: {
    fr: { blurb: 'La plus grande place de marché de services tech en freelance. Publiez un gig, trouvez des clients partout dans le monde, facturez code, automatisation et IA.', cta: 'Vendre sur Fiverr' },
    de: { blurb: 'Der größte Marktplatz für Freelance-Tech-Services. Gig einstellen, weltweit Kunden finden, für Code, Automatisierung und KI bezahlt werden.', cta: 'Auf Fiverr verkaufen' },
  },
  mercor: {
    fr: { blurb: 'Soyez payé pour évaluer les réponses de modèles d’IA. Les experts sélectionnés gagnent 30 à 100 $ de l’heure sur des prompts, du code et du raisonnement.', cta: 'Postuler chez Mercor' },
    de: { blurb: 'Bezahlt KI-Modellantworten bewerten. Geprüfte Fachleute verdienen 30 bis 100 $ pro Stunde mit Prompts, Code und Reasoning.', cta: 'Bei Mercor bewerben' },
  },
  nordvpn: {
    fr: { blurb: 'VPN premium avec plus de 6 000 serveurs. Utile sur le Wi-Fi public des coworkings et pour accéder aux outils restreints par pays.', cta: 'Obtenir NordVPN' },
    de: { blurb: 'Premium-VPN mit über 6.000 Servern weltweit. Nützlich im öffentlichen Coworking-WLAN und für länderbeschränkte Tools.', cta: 'NordVPN holen' },
  },
  revolut: {
    fr: { blurb: 'Compte tout-en-un basé en Europe : change de devises, cartes virtuelles, coffres d’épargne. Adapté aux travailleurs remote résidant dans l’UE.', cta: 'Ouvrir un compte gratuit' },
    de: { blurb: 'All-in-one-Konto aus der EU: Währungstausch, virtuelle Karten, Sparkassen. Passt gut zu Remote-Workern mit Wohnsitz in der EU.', cta: 'Kostenloses Konto eröffnen' },
  },
  safetywing: {
    fr: { blurb: 'Assurance santé et voyage conçue pour les nomades. Un abonnement qui vous suit de pays en pays, dans plus de 180 pays.', cta: 'Se faire couvrir' },
    de: { blurb: 'Kranken- und Reiseversicherung für Nomaden. Ein Abo, das grenzüberschreitend mitkommt, in über 180 Ländern.', cta: 'Versichern lassen' },
  },
  skool: {
    fr: { blurb: 'Animez une communauté payante avec cours, événements et classement intégrés. Utilisé par de nombreux formateurs tech en remote.', cta: 'Créer une communauté' },
    de: { blurb: 'Bezahlte Community mit integrierten Kursen, Events und Rangliste betreiben. Genutzt von vielen Remote-Tech-Trainern.', cta: 'Community starten' },
  },
  wise: {
    fr: { blurb: 'Le vrai taux de change et des IBAN dans plus de 8 devises. Le compte de référence pour être payé en USD ou en EUR depuis n’importe où.', cta: 'Ouvrir un compte gratuit' },
    de: { blurb: 'Echter Wechselkurs und IBANs in über 8 Währungen. Das Standardkonto, um von überall in USD oder EUR bezahlt zu werden.', cta: 'Kostenloses Konto eröffnen' },
  },
  qonto: {
    fr: { blurb: 'Banque pro pour freelances et startups dans l’UE. Justificatifs, gestion des dépenses, comptabilité intégrée.', cta: 'Ouvrir un compte pro' },
    de: { blurb: 'Geschäftskonto für Freelancer und Startups in der EU. Belege, Ausgabenverwaltung, integrierte Buchhaltung.', cta: 'Geschäftskonto eröffnen' },
  },
};

const CATEGORY_LABELS: Record<Exclude<Locale, 'en'>, Record<string, string>> = {
  fr: { banking: 'banque', insurance: 'assurance', privacy: 'vie privée', newsletter: 'newsletter', productivity: 'productivité', ai: 'IA', community: 'communauté', talent: 'talent', voice: 'voix', shopping: 'équipement', investing: 'investissement', mobility: 'mobilité', travel: 'voyage', misc: 'divers' },
  de: { banking: 'Banking', insurance: 'Versicherung', privacy: 'Privatsphäre', newsletter: 'Newsletter', productivity: 'Produktivität', ai: 'KI', community: 'Community', talent: 'Talent', voice: 'Stimme', shopping: 'Ausstattung', investing: 'Investieren', mobility: 'Mobilität', travel: 'Reisen', misc: 'Sonstiges' },
};

export function affiliateCopy(entry: { slug: string; blurb: string; cta: string; category: string }, locale: Locale) {
  if (locale === 'en') return { blurb: entry.blurb, cta: entry.cta, category: entry.category };
  const t = AFFILIATE_LOCALE[entry.slug]?.[locale];
  return {
    blurb: t?.blurb ?? entry.blurb,
    cta: t?.cta ?? entry.cta,
    category: CATEGORY_LABELS[locale][entry.category] ?? entry.category,
  };
}
