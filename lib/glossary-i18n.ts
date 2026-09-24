import type { Locale } from './types';

type Field = { term?: string; short?: string; long?: string };

export const GLOSSARY_TRANSLATIONS: Record<string, Partial<Record<Locale, Field>>> = {
  async: {
    fr: { term: 'Async (communication asynchrone)', short: 'Communiquer sans attendre de réponse en temps réel.', long: "Mode de travail par défaut des équipes remote matures. Décisions écrites, discussions étalées sur plusieurs heures, calls vidéo réservés au synchrone irréductible." },
    de: { term: 'Async (asynchrone Kommunikation)', short: 'Kommunizieren ohne Echtzeit-Antworten zu erwarten.', long: 'Standard-Arbeitsmuster reifer Remote-Teams. Entscheidungen schriftlich, Diskussionen über Stunden statt Minuten, Video-Calls reserviert für unverzichtbar synchrone Arbeit.' },
  },
  rto: {
    fr: { term: 'RTO (Return To Office)', short: 'Politique corporate ramenant les employés au bureau.', long: "La plupart des grands employeurs tech US ont annoncé un RTO entre 2022 et 2024, typiquement trois jours par semaine sur site. La plupart des entreprises remote-first ne l'ont pas fait." },
    de: { term: 'RTO (Return To Office)', short: 'Unternehmensrichtlinie zur Rückkehr ins Büro.', long: 'Die meisten großen US-Tech-Arbeitgeber kündigten zwischen 2022 und 2024 RTO an, typischerweise drei Tage pro Woche vor Ort. Die meisten Remote-First-Unternehmen nicht.' },
  },
  wfh: {
    fr: { term: 'WFH (Work From Home)', short: "Travailler à distance depuis chez soi.", long: 'Souvent utilisé comme synonyme de remote, mais WFH exclut techniquement les setups de remote en voyage (digital nomads).' },
    de: { term: 'WFH (Work From Home)', short: 'Remote-Arbeit aus dem Wohnumfeld.', long: 'Wird oft synonym mit Remote verwendet, schließt aber technisch reisebasiertes Remote-Arbeiten (Digital Nomads) aus.' },
  },
  'remote-first': {
    fr: { term: 'Remote-first', short: 'Entreprise où le remote est le mode opératoire par défaut.', long: 'Distinct de remote-friendly : les entreprises remote-first conçoivent processus, outils et culture autour du travail distribué. Documentation obligatoire, réunions exceptionnelles, embauche agnostique à la géographie.' },
    de: { term: 'Remote-first', short: 'Unternehmen, in dem Remote der Standard-Betriebsmodus ist.', long: 'Verschieden von Remote-friendly: Remote-first-Unternehmen entwerfen Prozesse, Tools und Kultur um verteilte Arbeit. Dokumentation ist verpflichtend, Meetings sind die Ausnahme, Einstellungen geografieagnostisch.' },
  },
  'remote-friendly': {
    fr: { term: 'Remote-friendly', short: 'Entreprise qui autorise le remote mais reste bureau par défaut.', long: 'Beaucoup d\'entreprises remote-friendly offrent une expérience remote moins bonne que les remote-first, parce que culture et outils privilégient encore les présents au bureau.' },
    de: { term: 'Remote-friendly', short: 'Unternehmen, das Remote erlaubt, aber standardmäßig Büro bevorzugt.', long: 'Viele Remote-friendly-Unternehmen bieten eine schlechtere Remote-Erfahrung als Remote-first-Peers, weil Kultur und Tools weiterhin die Anwesenden im Büro bevorzugen.' },
  },
  hybrid: {
    fr: { term: 'Travail hybride', short: 'Mix de jours remote et au bureau.', long: 'Typiquement un à trois jours au bureau par semaine. Le pattern dominant chez la plupart des grands employeurs tech en 2026 hors scale-ups remote-first.' },
    de: { term: 'Hybrid-Arbeit', short: 'Mischung aus Remote- und Bürotagen.', long: 'Typischerweise ein bis drei Tage pro Woche im Büro. Das dominante Muster bei den meisten großen Tech-Arbeitgebern in 2026 außerhalb von Remote-First-Scale-ups.' },
  },
  'distributed-team': {
    fr: { term: 'Équipe distribuée', short: 'Équipe dont les membres vivent dans plusieurs villes ou pays.', long: 'Distribué est plus large que remote : une équipe distribuée peut avoir plusieurs bureaux physiques dans différentes régions, tandis qu\'une équipe remote typiquement n\'a aucun bureau du tout.' },
    de: { term: 'Verteiltes Team', short: 'Team, dessen Mitglieder in mehreren Städten oder Ländern leben.', long: 'Verteilt ist weiter als Remote: ein verteiltes Team kann mehrere physische Büros in verschiedenen Regionen haben, während ein Remote-Team typischerweise gar kein Büro hat.' },
  },
  'timezone-overlap': {
    fr: { term: 'Overlap de fuseaux horaires', short: 'Heures où deux coéquipiers distribués travaillent en même temps.', long: "Le critère le plus filtré sur les annonces d'ingé remote en 2026. Quatre heures d'overlap sont le minimum pour les rôles à dominante synchrone ; deux heures suffisent pour le travail IC en deep work." },
    de: { term: 'Zeitzonen-Überschneidung', short: 'Stunden, in denen zwei verteilte Teammitglieder beide arbeiten.', long: 'Das am stärksten gefilterte Kriterium bei Remote-Engineering-Stellen 2026. Vier Stunden Überschneidung sind das Arbeitsminimum für synchron-lastige Rollen; zwei Stunden reichen für IC-Tiefenarbeit.' },
  },
  eor: {
    fr: { term: 'EOR (Employer of Record)', short: 'Tiers qui emploie légalement un travailleur pour le compte d\'une entreprise étrangère.', long: 'Solution courante quand une boîte US veut embaucher un résident UE. L\'EOR (Deel, Remote.com, Oyster) gère paie locale, taxe et compliance. Coûte typiquement 400 à 900 USD/mois/employé à l\'employeur.' },
    de: { term: 'EOR (Employer of Record)', short: 'Dritter, der einen Mitarbeiter rechtlich im Auftrag eines ausländischen Unternehmens beschäftigt.', long: 'Gängige Lösung, wenn ein US-Unternehmen einen EU-Einwohner einstellen will. Der EOR (Deel, Remote.com, Oyster) übernimmt lokale Gehaltsabrechnung, Steuer und Compliance. Kostet den Arbeitgeber typischerweise 400 bis 900 USD/Monat/Mitarbeiter.' },
  },
  ic: {
    fr: { term: 'IC (Individual Contributor)', short: 'Ingé qui code, par opposition à un manager.', long: 'La piste IC s\'étend typiquement de junior à senior, staff, principal et distinguished. Beaucoup d\'entreprises remote-first privilégient des échelles IC fortes plutôt qu\'une progression management.' },
    de: { term: 'IC (Individual Contributor)', short: 'Engineer, der baut, im Unterschied zum Manager.', long: 'Der IC-Pfad reicht typischerweise von Junior über Senior, Staff, Principal bis Distinguished. Viele Remote-first-Unternehmen bevorzugen starke IC-Leitern statt Management-Progression.' },
  },
  pip: {
    fr: { term: 'PIP (Performance Improvement Plan)', short: 'Procédure formelle documentée de sous-performance.', long: 'Typiquement 30 à 90 jours. En contexte remote, précède presque toujours un licenciement. Traité comme un préavis de licenciement chez la plupart des employeurs US.' },
    de: { term: 'PIP (Performance Improvement Plan)', short: 'Formaler dokumentierter Prozess bei Minderleistung.', long: 'Üblicherweise 30 bis 90 Tage. Im Remote-Kontext geht es fast immer einer Kündigung voraus. Bei den meisten US-Arbeitgebern als Kündigungsankündigung behandelt.' },
  },
  rsu: {
    fr: { term: 'RSU (Restricted Stock Unit)', short: 'Actions accordées dans la rémunération, qui vestent dans le temps.', long: 'Véhicule equity standard dans les boîtes tech cotées. Veste typiquement sur 4 ans avec un cliff d\'un an. Taxé en revenu ordinaire au vest dans la plupart des juridictions.' },
    de: { term: 'RSU (Restricted Stock Unit)', short: 'Aktien als Vergütungsbestandteil, die über Zeit vesten.', long: 'Standard-Equity-Instrument bei börsennotierten Tech-Unternehmen. Vestet typischerweise über 4 Jahre mit einem 1-Jahres-Cliff. Wird in den meisten Jurisdiktionen beim Vest als ordentliches Einkommen besteuert.' },
  },
  esop: {
    fr: { term: 'ESOP (Employee Stock Ownership Plan)', short: 'Pool d\'actions de l\'entreprise réservé aux employés.', long: 'Dans les boîtes privées, les stock options sont accordées depuis le pool ESOP. Il représente typiquement 10 à 20 % des actions de la boîte dans les startups bien structurées.' },
    de: { term: 'ESOP (Employee Stock Ownership Plan)', short: 'Aktienpool für Mitarbeiter reserviert.', long: 'Bei privaten Unternehmen werden Stock Options aus dem ESOP-Pool gewährt. Liegt bei gut strukturierten Startups typischerweise zwischen 10 und 20 Prozent der Unternehmensanteile.' },
  },
  dnv: {
    fr: { term: 'DNV (Digital Nomad Visa)', short: 'Catégorie de visa spécifiquement pour les travailleurs remote employés à l\'étranger.', long: "Environ 50 pays avaient un DNV dédié d'ici 2026. Portugal D8, Espagne DNV, Grèce DNV, Estonie DNV et Mexique Temporary Resident sont les plus utilisés par les travailleurs tech." },
    de: { term: 'DNV (Digital Nomad Visa)', short: 'Visumskategorie speziell für im Ausland beschäftigte Remote-Worker.', long: 'Rund 50 Länder hatten bis 2026 ein dediziertes DNV. Portugal D8, Spanien DNV, Griechenland DNV, Estland DNV und Mexikos Temporary Resident sind die meistgenutzten bei Tech-Workern.' },
  },
  'geo-arbitrage': {
    fr: { term: 'Géo-arbitrage', short: 'Gagner dans une devise à haut revenu tout en dépensant dans un lieu à faible coût.', long: 'Pratique courante chez les travailleurs remote qui gagnent en USD ou EUR tout en vivant dans des régions à coût bas. Vrai créateur de richesse sur plusieurs années, mais crée de la complexité de compliance (résidence fiscale, charges sociales).' },
    de: { term: 'Geo-Arbitrage', short: 'In einer Hochlohn-Währung verdienen und an einem günstigen Standort ausgeben.', long: 'Verbreitete Praxis unter Remote-Workern, die in USD oder EUR verdienen und in kostengünstigeren Regionen leben. Echter Vermögensaufbauer über Mehrjahres-Horizonte, schafft aber Compliance-Komplexität (Steuersitz, Sozialabgaben).' },
  },
  'permanent-establishment': {
    fr: { term: 'Établissement permanent', short: "Concept fiscal qui considère qu'une entreprise a une présence imposable dans un pays.", long: "Risque pour les employeurs de remote workers : si un employé exerce des fonctions commerciales centrales dans un pays où l'entreprise n'a pas d'entité, le fisc peut déclarer un établissement permanent. Les EOR existent principalement pour éviter ça." },
    de: { term: 'Betriebsstätte', short: 'Steuerkonzept, bei dem ein Unternehmen als steuerlich präsent in einem Land gilt.', long: 'Risiko für Arbeitgeber von Remote-Workern: Wenn ein Mitarbeiter Kerngeschäftsfunktionen in einem Land ausübt, in dem das Unternehmen keine Entität hat, können Steuerbehörden eine Betriebsstätte feststellen. EOR-Dienste existieren hauptsächlich, um dies zu vermeiden.' },
  },
  'right-to-disconnect': {
    fr: { term: 'Droit à la déconnexion', short: 'Protection légale contre les communications de travail hors heures de travail.', long: "Adopté en France, Portugal, Espagne, Italie, Australie et Ontario. Exige généralement des employeurs qu'ils respectent les heures non travaillées et formalisent par écrit les attentes en termes d'horaires." },
    de: { term: 'Recht auf Nichterreichbarkeit', short: 'Rechtlicher Schutz vor arbeitsbezogener Kommunikation außerhalb der Arbeitszeit.', long: 'In Frankreich, Portugal, Spanien, Italien, Australien und Ontario erlassen. Verlangt von Arbeitgebern in der Regel, die Freizeit der Mitarbeiter zu respektieren und Arbeitszeiterwartungen schriftlich zu formalisieren.' },
  },
  okr: {
    fr: { term: 'OKR (Objectives and Key Results)', short: 'Framework de définition d\'objectifs pour des outputs mesurables.', long: 'Framework dominant de définition d\'objectifs dans les boîtes tech remote. Cadence trimestrielle avec trois à cinq objectifs, chacun déclinés en key results mesurables.' },
    de: { term: 'OKR (Objectives and Key Results)', short: 'Zielsetzungs-Framework für messbare Team-Outputs.', long: 'Dominantes Zielsetzungs-Framework bei Remote-Tech-Unternehmen. Vierteljährliche Kadenz mit drei bis fünf Objectives, jeweils heruntergebrochen in messbare Key Results.' },
  },
  standup: {
    fr: { term: 'Standup', short: 'Sync récurrente d\'équipe, typiquement quotidienne.', long: 'Les équipes remote font généralement des standups async écrits dans un canal partagé. Les standups vidéo sync persistent mais ont perdu du terrain depuis 2022.' },
    de: { term: 'Standup', short: 'Wiederkehrender Team-Sync, üblicherweise täglich.', long: 'Remote-Teams führen typischerweise asynchrone schriftliche Standups in einem geteilten Kanal durch. Synchrone Video-Standups bestehen weiter, haben aber seit 2022 an Boden verloren.' },
  },
  sprint: {
    fr: { term: 'Sprint', short: 'Cycle de dev cadré dans le temps, typiquement deux semaines.', long: 'Les équipes remote font souvent des sprints de deux semaines avec planification au début et rétrospective à la fin. La planification de sprint async a émergé comme alternative viable au meeting sync traditionnel.' },
    de: { term: 'Sprint', short: 'Zeitlich begrenzter Entwicklungszyklus, üblicherweise zwei Wochen.', long: 'Remote-Teams führen oft zweiwöchige Sprints mit Planung am Anfang und Retrospektive am Ende durch. Asynchrone Sprint-Planung hat sich als brauchbare Alternative zum traditionellen synchronen Meeting etabliert.' },
  },
  retro: {
    fr: { term: 'Rétrospective', short: 'Revue d\'équipe de ce qui a marché et ce qui n\'a pas marché.', long: 'Typiquement à la fin de chaque sprint. Les équipes remote font souvent des retros async via des documents collaboratifs comme Miro ou des docs partagés, avec revue sync uniquement des items de discussion.' },
    de: { term: 'Retrospektive', short: 'Team-Review, was funktionierte und was nicht.', long: 'Typischerweise am Ende jedes Sprints. Remote-Teams führen oft asynchrone Retros über kollaborative Dokumente wie Miro oder geteilte Docs durch, mit synchroner Review nur der Diskussionspunkte.' },
  },
  ats: {
    fr: { term: 'ATS (Applicant Tracking System)', short: 'Logiciel utilisé par les boîtes pour gérer leurs pipelines de candidats.', long: "Greenhouse, Lever et Workday dominent. Les annonces sur la plupart des sites carrières d'entreprises sont propulsées par un ATS. Les agrégateurs comme slateremote.com tirent depuis ces APIs ATS." },
    de: { term: 'ATS (Applicant Tracking System)', short: 'Software, mit der Unternehmen Kandidaten-Pipelines verwalten.', long: 'Greenhouse, Lever und Workday dominieren. Die Stellenanzeigen auf den meisten Unternehmens-Karriereseiten werden von einem ATS angetrieben. Aggregatoren wie slateremote.com ziehen Daten aus diesen ATS-APIs.' },
  },
  severance: {
    fr: { term: 'Indemnités de départ', short: "Versement effectué quand un employé est licencié sans cause.", long: "Varie énormément : l'emploi at-will US ne fournit aucune indemnité statutaire ; la plupart des pays UE imposent au moins 1 mois par année de service. Négocier les indemnités à la signature est rare mais à forte valeur pour les seniors." },
    de: { term: 'Abfindung', short: 'Zahlung bei Kündigung ohne Grund.', long: 'Variiert enorm: At-will-Beschäftigung in den USA sieht keine gesetzliche Abfindung vor; die meisten EU-Länder schreiben mindestens 1 Monat pro Dienstjahr vor. Abfindungen bei Vertragsunterzeichnung zu verhandeln ist selten, aber bei Senior-Positionen sehr wertvoll.' },
  },
  'notice-period': {
    fr: { term: 'Préavis', short: 'Avertissement obligatoire avant démission ou licenciement.', long: 'Deux semaines est le standard chez les employeurs US. La plupart des juridictions UE imposent un à trois mois. Les préavis sont négociables à la signature dans beaucoup de pays.' },
    de: { term: 'Kündigungsfrist', short: 'Verpflichtende Vorankündigung vor Kündigung.', long: 'Zwei Wochen ist Standard bei US-Arbeitgebern. Die meisten EU-Jurisdiktionen schreiben ein bis drei Monate vor. Kündigungsfristen sind bei Vertragsunterzeichnung in vielen Ländern verhandelbar.' },
  },
  'non-compete': {
    fr: { term: 'Clause de non-concurrence', short: "Clause empêchant un employé de rejoindre des concurrents pendant une période après son départ.", long: 'Interdite en Californie et dans plusieurs pays UE. Applicable mais limitée dans la plupart des États US. De plus en plus rare et faiblement applicable dans la tech en 2026.' },
    de: { term: 'Wettbewerbsverbot', short: 'Klausel, die einen Mitarbeiter daran hindert, nach dem Ausscheiden zu Wettbewerbern zu wechseln.', long: 'In Kalifornien und vielen EU-Ländern verboten. In den meisten US-Bundesstaaten durchsetzbar, aber begrenzt. In der Tech-Branche 2026 zunehmend selten und schwach durchsetzbar.' },
  },
  nda: {
    fr: { term: 'NDA (accord de confidentialité)', short: "Obligation de confidentialité sur les informations de l'entreprise.", long: 'Universel chez les employeurs tech. Les NDAs couvrant le contenu des entretiens (pendant le recrutement) sont courants et juridiquement applicables.' },
    de: { term: 'NDA (Geheimhaltungsvereinbarung)', short: 'Vertraulichkeitsverpflichtung über Unternehmensinformationen.', long: 'Universell bei Tech-Arbeitgebern. NDAs, die Interviewinhalte (während des Einstellungsprozesses) abdecken, sind häufig und rechtlich durchsetzbar.' },
  },
  'founding-engineer': {
    fr: { term: 'Founding engineer', short: 'Premier ingé d\'une startup, typiquement employés 1 à 10.', long: "Implique une equity significativement plus élevée (0,5 à 2 % typiquement) et un scope plus large que les embauches suivantes. La plupart des rôles de founding engineer ne sont pas strictement remote même chez les startups remote-friendly." },
    de: { term: 'Founding Engineer', short: 'Frühe Engineering-Einstellung in einem Startup, typisch Mitarbeiter 1 bis 10.', long: 'Impliziert signifikant höheres Equity (0,5 bis 2 Prozent typischerweise) und breiteren Umfang als spätere Einstellungen. Die meisten Founding-Engineer-Rollen sind selbst bei Remote-friendly-Startups nicht strikt remote.' },
  },
  'staff-engineer': {
    fr: { term: 'Staff engineer', short: 'Niveau IC senior au-dessus de senior, en dessous de principal.', long: "Environ 8 à 12 ans d'expérience équivalents. Les fourchettes de rému se situent entre 220 et 320 mille USD chez les employeurs remote bien financés. Scope d'influence technique significatif au-delà du code individuel." },
    de: { term: 'Staff Engineer', short: 'Senior-IC-Level oberhalb von Senior Engineer, unterhalb von Principal.', long: 'Etwa 8 bis 12 Jahre Erfahrungs-Äquivalent. Vergütungsbänder zwischen 220 und 320 Tausend USD bei gut finanzierten Remote-Arbeitgebern. Bedeutender Scope an technischem Einfluss über individuellen Code hinaus.' },
  },
  'principal-engineer': {
    fr: { term: 'Principal engineer', short: 'Niveau IC senior au-dessus de staff.', long: "Environ 12 à 20 ans d'expérience équivalents. Couvre souvent plusieurs équipes. Fourchettes de rému entre 280 et 450 mille USD chez les employeurs remote bien financés." },
    de: { term: 'Principal Engineer', short: 'Senior-IC-Level oberhalb von Staff.', long: 'Etwa 12 bis 20 Jahre Erfahrungs-Äquivalent. Erstreckt sich oft über mehrere Teams. Vergütungsbänder zwischen 280 und 450 Tausend USD bei gut finanzierten Remote-Arbeitgebern.' },
  },
  'ten-x': {
    fr: { term: 'Ingé 10x', short: 'Cliché d\'un ingé perçu comme 10 fois plus productif que la médiane.', long: 'Largement discrédité comme concept. La réalité est que l\'efficacité en ingénierie dépend du contexte, de la familiarité avec le codebase et de la dynamique d\'équipe bien plus que d\'héroïsme individuel.' },
    de: { term: '10x Engineer', short: 'Klischee eines Engineers, der zehnmal produktiver wirkt als der Median.', long: 'Als Konzept weitgehend diskreditiert. Die Realität: Engineering-Effektivität hängt weit mehr von Kontext, Codebase-Vertrautheit und Teamdynamik ab als von individuellen Heldentaten.' },
  },
  burnout: {
    fr: { term: 'Burnout', short: 'Stress professionnel chronique mal géré.', long: "En contexte remote, le burnout se manifeste souvent comme isolement plutôt que comme surcharge. La combinaison manque de séparation entre travail et maison + signaux sociaux réduits est le driver le plus commun." },
    de: { term: 'Burnout', short: 'Chronischer beruflicher Stress, der nicht erfolgreich bewältigt wurde.', long: 'Im Remote-Kontext manifestiert sich Burnout oft eher als Isolation denn als Überarbeitung. Die Kombination aus mangelnder Trennung zwischen Arbeit und Zuhause plus reduzierten sozialen Signalen ist der häufigste Treiber.' },
  },
  layoff: {
    fr: { term: 'Licenciement économique', short: 'Licenciement non basé sur la performance individuelle.', long: 'Les layoffs tech ont atteint un pic pluriannuel entre 2023 et 2024 et se sont stabilisés en 2026. Les indemnités chez les grands employeurs vont typiquement de 2 à 6 mois de salaire de base plus accélération du vesting.' },
    de: { term: 'Layoff', short: 'Kündigung, die nicht auf individueller Leistung basiert.', long: 'Tech-Layoffs erreichten zwischen 2023 und 2024 einen mehrjährigen Höhepunkt und stabilisierten sich bis 2026. Abfindungspakete bei großen Arbeitgebern betragen typischerweise 2 bis 6 Monate Grundgehalt plus beschleunigtes Equity-Vesting.' },
  },
  pto: {
    fr: { term: 'PTO (Paid Time Off)', short: 'Banque de jours de congé payé.', long: 'La norme US est de 15 à 25 jours. Les minimums statutaires UE vont de 20 à 30 jours plus les jours fériés. La plupart des entreprises remote-first proposent un "PTO illimité" qui en pratique tend plus vers la norme US que la norme UE.' },
    de: { term: 'PTO (Paid Time Off)', short: 'Konto bezahlter Urlaubstage.', long: 'US-Norm sind 15 bis 25 Tage. EU-Mindeststandards reichen von 20 bis 30 Tagen plus Feiertage. Die meisten Remote-first-Unternehmen bieten "unbegrenztes PTO", das in der Praxis näher an der US-Norm als an der EU-Norm liegt.' },
  },
  cv: {
    fr: { term: 'CV vs Resume', short: 'Conventions différentes pour le document de candidature.', long: 'Le Resume est la norme US/Canada : une page, parfois deux. Le CV est la norme UE/UK : plus long, plus détaillé. Pour les candidatures remote à des boîtes US, partez sur la convention Resume.' },
    de: { term: 'CV vs Resume', short: 'Unterschiedliche Konventionen für Bewerbungsunterlagen.', long: 'Resume ist die US/Kanada-Norm: eine Seite, manchmal zwei. CV ist die EU/UK-Norm: länger, detaillierter. Für Remote-Bewerbungen bei US-Unternehmen standardmäßig die US-Resume-Konvention nutzen.' },
  },
  't-shape': {
    fr: { term: 'Ingé en T', short: 'Connaissance large sur de nombreux sujets plus expertise profonde sur un.', long: 'Le profil dominant que les équipes d\'ingénierie remote valorisent : largeur pour communiquer à travers les frontières plus profondeur pour livrer dans un domaine.' },
    de: { term: 'T-Shape Engineer', short: 'Breites Wissen über viele Bereiche plus tiefe Expertise in einem.', long: 'Das dominante Profil, das Remote-Engineering-Teams schätzen: Breite, um über Grenzen hinweg zu kommunizieren, plus Tiefe, um in einem Bereich zu liefern.' },
  },
  mvp: {
    fr: { term: 'MVP (Minimum Viable Product)', short: 'Plus petite version d\'un produit qui apporte de la valeur aux utilisateurs.', long: 'Utilisé largement. En pratique, la plupart des MVPs sortent avec plus de scope que le terme ne l\'implique. L\'usage valable est de contraindre le scope tôt dans un projet.' },
    de: { term: 'MVP (Minimum Viable Product)', short: 'Kleinste Version eines Produkts, die Nutzern Wert liefert.', long: 'Wird locker verwendet. In der Praxis kommen die meisten "MVPs" mit mehr Umfang heraus, als der Begriff impliziert. Der wertvolle Einsatz besteht darin, den Umfang früh in einem Projekt zu begrenzen.' },
  },
  tdd: {
    fr: { term: 'TDD (Test-Driven Development)', short: 'Écrire les tests avant le code.', long: 'Moins dogmatique qu\'il y a dix ans. La plupart des ingés seniors pratiquent le test-first sélectivement, en particulier pour la logique complexe ou les interfaces externes.' },
    de: { term: 'TDD (Test-Driven Development)', short: 'Tests vor Code schreiben.', long: 'Weniger dogmatisch als vor einem Jahrzehnt. Die meisten Senior-Engineers praktizieren Test-First selektiv, insbesondere für komplexe Logik oder externe Schnittstellen.' },
  },
  'ci-cd': {
    fr: { term: 'CI/CD (intégration et déploiement continus)', short: 'Pipelines automatisés de build, test et déploiement.', long: 'Attendu de manière universelle sur les rôles d\'ingé remote. GitHub Actions est l\'outil le plus listé, GitLab CI en second.' },
    de: { term: 'CI/CD (Continuous Integration / Continuous Deployment)', short: 'Automatisierte Build-, Test- und Deployment-Pipelines.', long: 'Universelle Erwartung bei Remote-Engineering-Rollen. GitHub Actions ist das am häufigsten gelistete Tool, GitLab CI an zweiter Stelle.' },
  },
  slowmad: {
    fr: { term: 'Slowmad / Slowmadism', short: 'Lifestyle digital nomad avec des séjours plus longs dans chaque lieu.', long: 'Réaction contre le fast nomadism (changer de ville toutes les quelques semaines). Les slowmads passent 3 à 12 mois par lieu, s\'intègrent plus localement et rapportent un meilleur bien-être à long terme.' },
    de: { term: 'Slowmad / Slowmadism', short: 'Digital-Nomad-Lifestyle mit längeren Aufenthalten an jedem Ort.', long: 'Gegenreaktion zum schnellen Nomadismus (Städtewechsel alle paar Wochen). Slowmads verbringen 3 bis 12 Monate pro Standort, integrieren sich stärker lokal und berichten von besserem langfristigen Wohlbefinden.' },
  },
  coworking: {
    fr: { term: 'Espace de coworking', short: 'Espace de travail partagé ouvert à des non-employés d\'une seule entreprise.', long: 'WeWork, Selina, Outsite et de nombreux acteurs locaux dominent. Les pass journaliers coûtent typiquement 15 à 35 USD ; les abonnements mensuels 200 à 500. La plupart des travailleurs remote alternent maison et coworking dans la semaine.' },
    de: { term: 'Coworking Space', short: 'Geteilter Arbeitsraum offen für Nicht-Mitarbeiter eines einzelnen Unternehmens.', long: 'WeWork, Selina, Outsite und viele lokale Anbieter dominieren. Tagespässe kosten typischerweise 15 bis 35 USD, monatliche Mitgliedschaften 200 bis 500. Die meisten Remote-Worker teilen die Woche zwischen Zuhause und Coworking auf.' },
  },
};

export function tGlossary(slug: string, locale: Locale, field: 'term' | 'short' | 'long', fallback: string): string {
  return GLOSSARY_TRANSLATIONS[slug]?.[locale]?.[field] ?? fallback;
}
