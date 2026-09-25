import type { Locale } from './types';

type Field = { title?: string; description?: string };

// Guide titles + descriptions translated for SEO. Bodies remain English (canonical),
// signalled via hreflang. Falls back to English when a locale is missing.
export const GUIDE_TRANSLATIONS: Record<string, Partial<Record<Locale, Field>>> = {
  'remote-developer-salary-guide': {
    fr: { title: 'Guide des salaires développeur remote pour 2026', description: 'Comment lire les fourchettes salariales sur les offres remote et quels chiffres attendre par séniorité.' },
    de: { title: 'Gehaltsguide für Remote-Entwickler 2026', description: 'Wie man Gehaltsbänder auf Remote-Stellen liest und welche Zahlen man je nach Seniorität erwarten kann.' },
  },
  'digital-nomad-visa-georgia': {
    fr: { title: 'Géorgie : séjour sans visa d\'un an pour travailleurs remote', description: 'Comment les travailleurs tech remote utilisent la politique sans visa géorgienne et le statut Entrepreneur Individuel.' },
    de: { title: 'Georgien: einjähriger visafreier Aufenthalt für Remote-Worker', description: 'Wie Remote-Tech-Worker die georgische visafreie Politik und den Individual-Entrepreneur-Status nutzen.' },
  },
  'best-laptops-for-remote-developers': {
    fr: { title: 'Meilleurs laptops pour développeurs remote en 2026', description: 'Une comparaison pratique des choix de laptops qui servent vraiment les ingés remote.' },
    de: { title: 'Beste Laptops für Remote-Entwickler 2026', description: 'Ein praktischer Vergleich der Laptop-Optionen, die Remote-Engineers wirklich dienen.' },
  },
  'best-countries-for-remote-tech-workers': {
    fr: { title: 'Meilleurs pays pour les travailleurs tech remote en 2026', description: 'Une comparaison pratique des top destinations selon visa, taxe, coût et infrastructure.' },
    de: { title: 'Beste Länder für Remote-Tech-Worker 2026', description: 'Ein praktischer Vergleich der Top-Destinationen nach Visa, Steuer, Kosten und Infrastruktur.' },
  },
  'ai-engineer-salary-2026': {
    fr: { title: 'Salaire AI engineer en 2026', description: 'Fourchettes salariales actuelles pour les AI et ML engineers remote en 2026.' },
    de: { title: 'AI-Engineer-Gehalt 2026', description: 'Aktuelle Gehaltsbänder für Remote-AI- und ML-Engineers 2026.' },
  },
  'how-to-start-on-fiverr-as-a-developer': {
    fr: { title: 'Comment démarrer sur Fiverr en tant que développeur en 2026', description: 'Un parcours étape par étape pour lancer votre premier gig tech sur Fiverr et décrocher des acheteurs payants.' },
    de: { title: 'Wie man 2026 als Entwickler auf Fiverr startet', description: 'Ein Schritt-für-Schritt-Weg, um deinen ersten Tech-Gig auf Fiverr zu starten und zahlende Käufer zu gewinnen.' },
  },
  'fiverr-profile-that-wins-orders': {
    fr: { title: 'Comment créer un profil Fiverr qui décroche des commandes', description: 'Les éléments de profil et de gig qui font passer les acheteurs de la navigation à la commande.' },
    de: { title: 'Wie man ein Fiverr-Profil erstellt, das Aufträge gewinnt', description: 'Die Profil- und Gig-Elemente, die Käufer vom Stöbern zur Bestellung bewegen.' },
  },
  'how-to-get-your-first-fiverr-order': {
    fr: { title: 'Comment obtenir votre première commande Fiverr', description: 'Des tactiques pratiques pour décrocher cette première vente cruciale et briser la barrière du zéro avis.' },
    de: { title: 'Wie man seinen ersten Fiverr-Auftrag bekommt', description: 'Praktische Taktiken, um den entscheidenden ersten Verkauf zu landen und die Null-Bewertungen-Hürde zu durchbrechen.' },
  },
  'fiverr-gig-seo-ranking-guide': {
    fr: { title: 'SEO des gigs Fiverr : comment classer votre gig dans la recherche', description: 'Comment fonctionne la recherche Fiverr et les leviers qui hissent votre gig en première page.' },
    de: { title: 'Fiverr-Gig-SEO: wie du deinen Gig in der Suche platzierst', description: 'Wie die Fiverr-Suche funktioniert und welche Hebel deinen Gig auf die erste Seite bringen.' },
  },
  'sell-ai-services-on-fiverr-2026': {
    fr: { title: 'Comment vendre des services AI sur Fiverr en 2026', description: 'Les catégories de services AI les plus rentables sur Fiverr et comment les packager.' },
    de: { title: 'Wie man 2026 AI-Services auf Fiverr verkauft', description: 'Die profitabelsten AI-Service-Kategorien auf Fiverr und wie man sie verpackt.' },
  },
  'appsumo-best-deals-for-developers-2026': {
    fr: { title: "Les meilleurs deals AppSumo pour les développeurs en 2026", description: "Quels deals AppSumo aident vraiment les développeurs et ingénieurs en remote à livrer plus vite et dépenser moins." },
    de: { title: "Die besten AppSumo Deals für Entwickler 2026", description: "Welche AppSumo Deals Entwicklern und Remote-Ingenieuren wirklich helfen, schneller zu liefern und weniger auszugeben." },
  },
  'appsumo-vs-saas-subscription-which-saves-more': {
    fr: { title: "AppSumo vs abonnement SaaS : lequel fait vraiment économiser plus", description: "Une comparaison claire entre les deals à vie et les abonnements SaaS récurrents pour les travailleurs en remote et les petites équipes." },
    de: { title: "AppSumo vs SaaS-Abo: Was spart wirklich mehr Geld", description: "Ein klarer Vergleich zwischen Lifetime Deals und wiederkehrenden SaaS-Abos für Remote-Worker und kleine Teams." },
  },
  'how-to-get-accepted-on-mercor': {
    fr: { title: "Comment être accepté sur Mercor en tant qu'évaluateur AI", description: "Ce que Mercor évalue réellement et comment positionner votre profil pour passer la barre en 2026." },
    de: { title: "Wie man als AI-Evaluator bei Mercor angenommen wird", description: "Worauf Mercor wirklich prüft und wie Sie Ihr Profil positionieren, um die Hürde 2026 zu nehmen." },
  },
  'how-much-does-mercor-pay-in-2026': {
    fr: { title: "Combien Mercor paie réellement les évaluateurs AI en 2026", description: "Tarifs horaires réalistes sur Mercor pour développeurs et experts de domaine, ce qui détermine la fourchette et comment le tarif évolue dans le temps." },
    de: { title: "Wie viel zahlt Mercor AI-Evaluatoren wirklich im Jahr 2026", description: "Realistische Stundensätze bei Mercor für Entwickler und Fachexperten, was die Spanne bestimmt und wie der Satz mit der Zeit steigt." },
  },
  'mercor-vs-scale-vs-surge-ai': {
    fr: { title: "Mercor vs Scale AI vs Surge AI : qui paie le plus les évaluateurs AI", description: "Une comparaison pratique des trois plus grandes plateformes d'évaluation AI pour développeurs et experts de domaine en 2026." },
    de: { title: "Mercor vs Scale AI vs Surge AI: Wer zahlt AI-Evaluatoren mehr", description: "Ein praktischer Vergleich der drei größten AI-Evaluierungsplattformen für Entwickler und Fachexperten im Jahr 2026." },
  },
  'maximize-earnings-on-mercor-as-a-developer': {
    fr: { title: "Comment maximiser vos revenus sur Mercor en tant que développeur", description: "Leviers pratiques pour augmenter votre tarif horaire et vos heures hebdomadaires sur Mercor après le premier mois." },
    de: { title: "Wie Sie als Entwickler Ihre Einnahmen bei Mercor maximieren", description: "Praktische Hebel, um Ihren Stundensatz und Ihre Wochenstunden bei Mercor nach dem ersten Monat zu steigern." },
  },
  'mercor-tax-and-payout-guide-2026': {
    fr: { title: "Guide des paiements et impôts Mercor pour 2026", description: "Comment Mercor vous paie, les méthodes de paiement acceptées et ce que vous devez en impôts en tant qu'évaluateur aux États-Unis ou dans l'UE." },
    de: { title: "Mercor Auszahlungen und Steuern: Leitfaden für 2026", description: "Wie Mercor Sie bezahlt, welche Zahlungsmethoden unterstützt werden und welche Steuern Sie als Evaluator in den USA oder der EU schulden." },
  },
  'mercor-side-hustle-while-working-full-time': {
    fr: { title: "Faire de Mercor une activité secondaire en gardant son emploi à temps plein", description: "Comment intégrer le travail d'évaluation Mercor à un emploi à temps plein : heures, contrats, gestion de l'énergie et aspects juridiques." },
    de: { title: "Mercor als Nebenjob neben einer Vollzeitstelle betreiben", description: "Wie Sie Mercor-Evaluierungsarbeit neben einem Vollzeitjob unterbringen: Stunden, Verträge, Energiemanagement und die rechtliche Seite." },
  },
  'fiverr-gig-conversion-optimisation-2026': {
    fr: { title: "Optimisation de la conversion des gigs Fiverr : augmenter les commandes sans plus de trafic", description: "Les quelques changements qui transforment les impressions en commandes sur les gigs Fiverr en 2026." },
    de: { title: "Fiverr-Gig-Conversion-Optimierung: mehr Bestellungen ohne mehr Traffic", description: "Die wenigen Änderungen, die 2026 Impressionen in Bestellungen auf Fiverr-Gigs verwandeln." },
  },
  'remote-work-tax-residency-strategies-2026': {
    fr: { title: "Stratégies de résidence fiscale pour le travail remote en 2026", description: "Comment fonctionne la résidence fiscale pour les travailleurs tech remote en 2026 et les stratégies qui tiennent juridiquement." },
    de: { title: "Strategien zur steuerlichen Ansässigkeit für Remote-Arbeit 2026", description: "Wie steuerliche Ansässigkeit für Remote-Tech-Arbeiter 2026 funktioniert und welche Strategien rechtlich Bestand haben." },
  },
  'niche-fiverr-gigs-that-still-pay-in-2026': {
    fr: { title: "Gigs Fiverr de niche qui paient encore bien en 2026", description: "Catégories de gigs Fiverr sous-servies où les développeurs peuvent encore obtenir des tarifs élevés avec peu de concurrence." },
    de: { title: "Nischen-Fiverr-Gigs, die 2026 noch gut bezahlen", description: "Unterversorgte Fiverr-Gig-Kategorien, in denen Entwickler 2026 noch starke Sätze bei geringer Konkurrenz erzielen können." },
  },
  'wise-borderless-account-explained-2026': {
    fr: { title: "Le compte multi-devises Wise expliqué pour les travailleurs remote en 2026", description: "Comment fonctionne réellement le compte multi-devises Wise pour les travailleurs remote, freelances et nomades digitaux." },
    de: { title: "Das Wise Multi-Currency-Konto erklärt für Remote-Arbeiter 2026", description: "Wie das Wise Multi-Currency-Konto für Remote-Arbeiter, Freelancer und digitale Nomaden tatsächlich funktioniert." },
  },
  'safetywing-real-claim-process-2026': {
    fr: { title: "Le processus de claim SafetyWing en 2026: à quoi s'attendre", description: "À quoi ressemble vraiment le dépôt d'un claim SafetyWing, combien de temps cela prend et quels documents conserver." },
    de: { title: "Der SafetyWing-Claim-Prozess 2026: was zu erwarten ist", description: "Wie das Einreichen eines SafetyWing-Claims tatsächlich abläuft, wie lange es dauert und welche Unterlagen man aufbewahren sollte." },
  },
  'wise-vs-payoneer-for-developers': {
    fr: { title: "Wise vs Payoneer pour les développeurs freelance en 2026", description: "Deux des plateformes de paiement internationales les plus utilisées comparées sur les critères qui comptent pour les développeurs freelance." },
    de: { title: "Wise vs Payoneer für Freelance-Entwickler 2026", description: "Zwei der meistgenutzten internationalen Zahlungsplattformen verglichen anhand der Kriterien, die für Freelance-Entwickler zählen." },
  },
  'mercor-application-timeline-2026': {
    fr: { title: "Timeline de candidature Mercor 2026: attentes réalistes", description: "De la candidature à la première tâche payée, combien de temps prend réellement l'onboarding Mercor en 2026." },
    de: { title: "Mercor-Bewerbungs-Timeline 2026: realistische Erwartungen", description: "Von der Bewerbung bis zur ersten bezahlten Aufgabe, wie lange das Mercor-Onboarding 2026 wirklich dauert." },
  },
  'claude-prompt-patterns-for-developers': {
    fr: { title: "Les patterns de prompt Claude que les développeurs utilisent vraiment", description: "Les quelques patterns de prompt qui produisent systématiquement des résultats utiles quand on utilise Claude pour du dev." },
    de: { title: "Claude-Prompt-Patterns, die Entwickler wirklich nutzen", description: "Die wenigen Prompt-Patterns, die beim Einsatz von Claude in der Entwicklung konsistent brauchbare Ergebnisse liefern." },
  },
  'fiverr-buyer-objections-handling-guide': {
    fr: { title: "Gérer les objections d'acheteurs Fiverr qui tuent les commandes", description: "Les cinq objections d'acheteurs les plus fréquentes sur les gigs de développeur en 2026 et les réponses qui closent la commande." },
    de: { title: "Häufige Fiverr-Käufer-Einwände abfangen, die Aufträge killen", description: "Die fünf Käufer-Einwände, die 2026 auf Entwickler-Gigs am häufigsten auftauchen, und die Antworten, die den Auftrag abschließen." },
  },
  'mercor-evaluator-quality-rubrics-explained': {
    fr: { title: "Comment Mercor note la qualité des évaluateurs, expliqué", description: "Les signaux que Mercor utilise pour noter la qualité des évaluateurs et comment agir sur chacun pour grimper l'échelle de rémunération." },
    de: { title: "Wie Mercor die Qualität von Evaluatoren bewertet, erklärt", description: "Die Signale, mit denen Mercor die Evaluator-Qualität bewertet, und was man mit jedem einzelnen tun kann, um die Vergütungsstufen hochzuklettern." },
  },
  'safetywing-pre-existing-conditions-guide': {
    fr: { title: "SafetyWing et les conditions préexistantes: ce qui est couvert", description: "Comment SafetyWing gère les conditions préexistantes en 2026 et ce qu'il faut déclarer à la souscription." },
    de: { title: "SafetyWing und Vorerkrankungen: was abgedeckt ist", description: "Wie SafetyWing 2026 mit Vorerkrankungen umgeht und was man bei Vertragsabschluss angeben muss." },
  },
  'mercor-vs-tortoise-eval-platforms': {
    fr: { title: "Mercor vs Tortoise vs Outlier: plateformes d'évaluation AI comparées", description: "Trois plateformes d'évaluation AI en croissance comparées sur le seuil d'acceptation, le tarif horaire et l'offre de tâches." },
    de: { title: "Mercor vs Tortoise vs Outlier: KI-Evaluierungsplattformen im Vergleich", description: "Drei wachsende KI-Evaluierungsplattformen verglichen anhand Annahmeschwelle, Stundensatz und Aufgabenangebot." },
  },
  'fiverr-pro-application-checklist-2026': {
    fr: { title: "Checklist de candidature Fiverr Pro pour 2026", description: "Le portfolio, le profil et les preuves qui font passer la revue Fiverr Pro en 2026." },
    de: { title: "Fiverr-Pro-Bewerbungs-Checkliste für 2026", description: "Portfolio, Profil und Belege, die 2026 das Fiverr-Pro-Review bestehen." },
  },
  'how-to-receive-stripe-payouts-as-non-us': {
    fr: { title: "Recevoir des paiements Stripe en tant que développeur non-US en 2026", description: "Comment les développeurs non-US peuvent accepter des paiements Stripe et quelles sont les alternatives en 2026." },
    de: { title: "Stripe-Auszahlungen als Nicht-US-Entwickler 2026 erhalten", description: "Wie Nicht-US-Entwickler Stripe-Auszahlungen annehmen können und welche Alternativen es 2026 gibt." },
  },
  'remote-tech-interview-loop-2026-changes': {
    fr: { title: "Les loops d'entretien tech remote en 2026: ce qui a changé", description: "La forme actuelle des entretiens techniques remote en 2026 et comment ces changements affectent la préparation." },
    de: { title: "Remote-Tech-Interview-Loops 2026: was sich verändert hat", description: "Die aktuelle Form von Remote-Tech-Interviews 2026 und wie die Veränderungen die Vorbereitung beeinflussen." },
  },
};

export function tGuide(slug: string, locale: Locale, field: 'title' | 'description', fallback: string): string {
  return GUIDE_TRANSLATIONS[slug]?.[locale]?.[field] ?? fallback;
}
