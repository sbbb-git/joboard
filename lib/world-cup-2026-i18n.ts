import type { Locale } from './types';

export type CityPageCopy = {
  // Hub page strings
  hubMetaTitle: string;
  hubMetaDescription: string;
  hubEyebrow: string;
  hubH1: string;
  hubIntro: string;
  hubCitiesHeading: string;
  hubUsHeading: string;
  hubCaHeading: string;
  hubMxHeading: string;

  // City page strings
  cityMetaTitle: (city: string) => string;
  cityMetaDescription: (city: string) => string;
  cityEyebrow: string;
  cityH1: (city: string) => string;
  cityIntro: (city: string, country: string, stadium: string, matches: number) => string;
  factsHeading: string;
  factStadium: string;
  factCapacity: string;
  factMatches: string;
  factTimezone: string;
  factCurrency: string;
  factInternet: string;
  factCostIndex: string;
  costLabels: [string, string, string, string, string];
  remoteWorkHeading: string;
  remoteWorkBody: (city: string, mbps: number, neighbourhoods: string) => string;
  neighbourhoodsHeading: string;
  moneyHeading: string;
  moneyBody: (currency: string) => string;
  insuranceHeading: string;
  insuranceBody: (country: string) => string;
  ptoHeading: string;
  ptoBody: string;
  relatedHeading: string;
  related: { slug: string; title: string }[];
  backToHub: string;
};

const RELATED_GUIDES = [
  { slug: 'world-cup-2026-remote-work-from-host-cities', en: 'Working remote from a 2026 World Cup host city' },
  { slug: 'world-cup-2026-travel-insurance-multi-country', en: 'Travel insurance across USA, Canada, Mexico' },
  { slug: 'world-cup-2026-multi-currency-spending-usa-canada-mexico', en: 'Spending in USD, CAD, MXN during the World Cup' },
  { slug: 'world-cup-2026-remote-developer-time-off-strategies', en: 'Time off and async strategies for the World Cup' },
];

export const WC_COPY: Record<Locale, CityPageCopy> = {
  en: {
    hubMetaTitle: '2026 FIFA World Cup host city guide for remote workers',
    hubMetaDescription:
      'Practical guides to each of the 16 2026 World Cup host cities across USA, Canada and Mexico, written for remote tech workers attending matches.',
    hubEyebrow: '2026 World Cup',
    hubH1: '2026 World Cup host city guide for remote workers',
    hubIntro:
      'Sixteen host cities across the United States, Canada and Mexico stage the 2026 FIFA World Cup. The guides below cover the practical setup for remote tech workers attending matches: stadium, base neighbourhoods, internet, money and time-off planning per city.',
    hubCitiesHeading: 'Host cities',
    hubUsHeading: 'United States (11 cities)',
    hubCaHeading: 'Canada (2 cities)',
    hubMxHeading: 'Mexico (3 cities)',

    cityMetaTitle: (city) => `2026 World Cup in ${city}: remote work, stay and money guide`,
    cityMetaDescription: (city) =>
      `Working remote and attending the 2026 World Cup in ${city}: stadium, base neighbourhoods, internet, multi-currency spend and travel-insurance picks.`,
    cityEyebrow: '2026 World Cup host city',
    cityH1: (city) => `2026 World Cup in ${city}`,
    cityIntro: (city, country, stadium, matches) =>
      `${city} (${country}) hosts ${matches} 2026 World Cup matches at ${stadium}. For remote workers attending the tournament, the practical setup is below.`,
    factsHeading: 'Key facts',
    factStadium: 'Stadium',
    factCapacity: 'Capacity',
    factMatches: 'Matches hosted',
    factTimezone: 'Timezone',
    factCurrency: 'Currency',
    factInternet: 'Median internet',
    factCostIndex: 'Cost during tournament',
    costLabels: ['Cheapest', 'Cheap', 'Mid', 'Pricey', 'Priciest'],
    remoteWorkHeading: 'Remote work setup',
    remoteWorkBody: (city, mbps, neighbourhoods) =>
      `Median fixed-line internet around ${mbps} Mbps. For continuous remote work during the tournament, base in ${neighbourhoods} where coworking and reliable connectivity concentrate. Tether to your phone via a local SIM as backup; hotel WiFi is unreliable during peak fan periods.`,
    neighbourhoodsHeading: 'Best base neighbourhoods',
    moneyHeading: 'Money',
    moneyBody: (currency) =>
      `${currency} is the local currency. A multi-currency account (Wise) lets you spend at mid-market FX without the 2 to 4 percent markup most retail cards charge. Decline DCC (Dynamic Currency Conversion) at every merchant; pay in local currency and your card converts at the real rate.`,
    insuranceHeading: 'Travel insurance',
    insuranceBody: (country) =>
      `Make sure your insurance covers ${country} on the standard plan. SafetyWing and Genki both cover the host country at the standard tier; check the inpatient cap (especially relevant in the United States where bills run high). Activation is fast and coverage starts same-day.`,
    ptoHeading: 'Time off planning',
    ptoBody:
      'Submit your PTO request more than 4 weeks ahead with concrete handover commitments. Async working around match times is sustainable for a week, not longer. Block your team’s shared calendar so colleagues are not blindsided.',
    relatedHeading: 'Related guides',
    related: RELATED_GUIDES.map((r) => ({ slug: r.slug, title: r.en })),
    backToHub: 'All host cities →',
  },
  fr: {
    hubMetaTitle: 'Coupe du Monde 2026 : guide des villes hôtes pour travailleurs remote',
    hubMetaDescription:
      'Guides pratiques sur les 16 villes hôtes de la Coupe du Monde 2026 aux États-Unis, Canada et Mexique, pour les travailleurs tech remote qui assistent aux matchs.',
    hubEyebrow: 'Coupe du Monde 2026',
    hubH1: 'Villes hôtes de la Coupe du Monde 2026 : guide pour travailleurs remote',
    hubIntro:
      'Seize villes hôtes aux États-Unis, au Canada et au Mexique accueillent la Coupe du Monde FIFA 2026. Les guides ci-dessous couvrent le setup pratique pour les travailleurs tech remote qui assistent aux matchs : stade, quartiers de base, internet, argent et planification des congés par ville.',
    hubCitiesHeading: 'Villes hôtes',
    hubUsHeading: 'États-Unis (11 villes)',
    hubCaHeading: 'Canada (2 villes)',
    hubMxHeading: 'Mexique (3 villes)',

    cityMetaTitle: (city) => `Coupe du Monde 2026 à ${city} : travail remote, séjour et argent`,
    cityMetaDescription: (city) =>
      `Travailler en remote et assister à la Coupe du Monde 2026 à ${city} : stade, quartiers de base, internet, dépenses multi-devises et assurance voyage.`,
    cityEyebrow: 'Ville hôte Coupe du Monde 2026',
    cityH1: (city) => `Coupe du Monde 2026 à ${city}`,
    cityIntro: (city, country, stadium, matches) =>
      `${city} (${country}) accueille ${matches} matchs de la Coupe du Monde 2026 au ${stadium}. Pour les travailleurs remote qui assistent au tournoi, le setup pratique est ci-dessous.`,
    factsHeading: 'Infos clés',
    factStadium: 'Stade',
    factCapacity: 'Capacité',
    factMatches: 'Matchs accueillis',
    factTimezone: 'Fuseau horaire',
    factCurrency: 'Devise',
    factInternet: 'Internet médian',
    factCostIndex: 'Coût pendant le tournoi',
    costLabels: ['Le moins cher', 'Bon marché', 'Moyen', 'Cher', 'Le plus cher'],
    remoteWorkHeading: 'Setup remote',
    remoteWorkBody: (city, mbps, neighbourhoods) =>
      `Internet fixe médian autour de ${mbps} Mbps. Pour un travail remote continu pendant le tournoi, installez-vous à ${neighbourhoods} où le coworking et la connectivité fiable se concentrent. Partagez la connexion de votre téléphone via une SIM locale en backup ; le WiFi hôtel est peu fiable en période de fans.`,
    neighbourhoodsHeading: 'Meilleurs quartiers de base',
    moneyHeading: 'Argent',
    moneyBody: (currency) =>
      `${currency} est la devise locale. Un compte multi-devises (Wise) permet de dépenser au taux interbancaire sans la marge de 2 à 4 pour cent que prennent la plupart des cartes. Refusez le DCC (conversion dynamique) chez chaque marchand ; payez en devise locale et votre carte convertit au vrai taux.`,
    insuranceHeading: 'Assurance voyage',
    insuranceBody: (country) =>
      `Vérifiez que votre assurance couvre ${country} sur le plan standard. SafetyWing et Genki couvrent toutes deux le pays hôte au tier standard ; vérifiez le plafond d’hospitalisation (particulièrement crucial aux États-Unis où les factures grimpent vite). Activation rapide, couverture le jour même.`,
    ptoHeading: 'Planification des congés',
    ptoBody:
      'Soumettez votre demande de congé plus de 4 semaines à l’avance avec un plan de passation concret. Travailler en async autour des matchs est tenable une semaine, pas plus. Bloquez le calendrier partagé de votre équipe pour ne pas surprendre les collègues.',
    relatedHeading: 'Guides liés',
    related: [
      { slug: 'world-cup-2026-remote-work-from-host-cities', title: 'Travailler remote depuis une ville hôte de la Coupe du Monde 2026' },
      { slug: 'world-cup-2026-travel-insurance-multi-country', title: 'Assurance voyage USA / Canada / Mexique' },
      { slug: 'world-cup-2026-multi-currency-spending-usa-canada-mexico', title: 'Dépenser en USD, CAD, MXN pendant la Coupe du Monde' },
      { slug: 'world-cup-2026-remote-developer-time-off-strategies', title: 'Stratégies de congés et async pour la Coupe du Monde' },
    ],
    backToHub: 'Toutes les villes hôtes →',
  },
  es: {
    hubMetaTitle: 'Copa del Mundo 2026: guía de ciudades sede para trabajadores remotos',
    hubMetaDescription:
      'Guías prácticas de las 16 ciudades sede del Mundial 2026 en EE. UU., Canadá y México, para trabajadores tech remotos que asisten a los partidos.',
    hubEyebrow: 'Mundial 2026',
    hubH1: 'Ciudades sede del Mundial 2026: guía para trabajadores remotos',
    hubIntro:
      'Dieciséis ciudades sede en Estados Unidos, Canadá y México albergan la Copa del Mundo FIFA 2026. Las guías de abajo cubren el setup práctico para trabajadores tech remotos: estadio, barrios para basarse, internet, dinero y planificación de tiempo libre por ciudad.',
    hubCitiesHeading: 'Ciudades sede',
    hubUsHeading: 'Estados Unidos (11 ciudades)',
    hubCaHeading: 'Canadá (2 ciudades)',
    hubMxHeading: 'México (3 ciudades)',

    cityMetaTitle: (city) => `Mundial 2026 en ${city}: trabajo remoto, estancia y dinero`,
    cityMetaDescription: (city) =>
      `Trabajar en remoto y asistir al Mundial 2026 en ${city}: estadio, barrios para basarse, internet, gasto multidivisa y seguro de viaje.`,
    cityEyebrow: 'Ciudad sede Mundial 2026',
    cityH1: (city) => `Mundial 2026 en ${city}`,
    cityIntro: (city, country, stadium, matches) =>
      `${city} (${country}) acoge ${matches} partidos del Mundial 2026 en ${stadium}. Para trabajadores remotos que asistan al torneo, el setup práctico está abajo.`,
    factsHeading: 'Datos clave',
    factStadium: 'Estadio',
    factCapacity: 'Capacidad',
    factMatches: 'Partidos albergados',
    factTimezone: 'Zona horaria',
    factCurrency: 'Divisa',
    factInternet: 'Internet mediano',
    factCostIndex: 'Coste durante el torneo',
    costLabels: ['Más barato', 'Barato', 'Medio', 'Caro', 'Más caro'],
    remoteWorkHeading: 'Setup remoto',
    remoteWorkBody: (city, mbps, neighbourhoods) =>
      `Internet fijo mediano alrededor de ${mbps} Mbps. Para trabajo remoto continuo durante el torneo, básate en ${neighbourhoods} donde se concentran el coworking y la conectividad confiable. Conecta el móvil con SIM local como backup; el WiFi de hotel es poco fiable en picos de aficionados.`,
    neighbourhoodsHeading: 'Mejores barrios para basarse',
    moneyHeading: 'Dinero',
    moneyBody: (currency) =>
      `${currency} es la divisa local. Una cuenta multidivisa (Wise) permite gastar al cambio interbancario sin el 2 al 4 por ciento que cobran la mayoría de tarjetas minoristas. Rechaza el DCC (conversión dinámica) en cada comercio; paga en divisa local y tu tarjeta convierte al tipo real.`,
    insuranceHeading: 'Seguro de viaje',
    insuranceBody: (country) =>
      `Asegúrate de que tu seguro cubra ${country} en el plan estándar. SafetyWing y Genki cubren el país sede en el tier estándar; revisa el tope de hospitalización (especialmente importante en EE. UU. donde las facturas suben rápido). Activación rápida, cobertura el mismo día.`,
    ptoHeading: 'Planificación de tiempo libre',
    ptoBody:
      'Envía tu solicitud de tiempo libre con más de 4 semanas de antelación y un plan de traspaso concreto. Trabajar async alrededor de los partidos es sostenible una semana, no más. Bloquea el calendario compartido del equipo para no sorprender a los compañeros.',
    relatedHeading: 'Guías relacionadas',
    related: [
      { slug: 'world-cup-2026-remote-work-from-host-cities', title: 'Trabajar remoto desde una ciudad sede del Mundial 2026' },
      { slug: 'world-cup-2026-travel-insurance-multi-country', title: 'Seguro de viaje EE. UU., Canadá y México' },
      { slug: 'world-cup-2026-multi-currency-spending-usa-canada-mexico', title: 'Gastar en USD, CAD, MXN durante el Mundial' },
      { slug: 'world-cup-2026-remote-developer-time-off-strategies', title: 'Estrategias de tiempo libre y async para el Mundial' },
    ],
    backToHub: 'Todas las ciudades sede →',
  },
  de: {
    hubMetaTitle: 'WM 2026: Gastgeberstädte-Guide für Remote-Worker',
    hubMetaDescription:
      'Praktische Guides zu allen 16 Gastgeberstädten der FIFA WM 2026 in USA, Kanada und Mexiko, geschrieben für Remote-Tech-Worker, die zu Spielen reisen.',
    hubEyebrow: 'WM 2026',
    hubH1: 'WM-2026-Gastgeberstädte: Guide für Remote-Worker',
    hubIntro:
      'Sechzehn Gastgeberstädte in den USA, Kanada und Mexiko richten die FIFA WM 2026 aus. Die Guides unten decken das praktische Setup für Remote-Tech-Worker ab, die Spiele besuchen: Stadion, Wohnviertel, Internet, Geld und Urlaubsplanung pro Stadt.',
    hubCitiesHeading: 'Gastgeberstädte',
    hubUsHeading: 'USA (11 Städte)',
    hubCaHeading: 'Kanada (2 Städte)',
    hubMxHeading: 'Mexiko (3 Städte)',

    cityMetaTitle: (city) => `WM 2026 in ${city}: Remote-Work, Unterkunft und Geld`,
    cityMetaDescription: (city) =>
      `Remote arbeiten und die WM 2026 in ${city} erleben: Stadion, Wohnviertel, Internet, Multi-Währungs-Ausgaben und Reiseversicherung.`,
    cityEyebrow: 'WM-2026-Gastgeberstadt',
    cityH1: (city) => `WM 2026 in ${city}`,
    cityIntro: (city, country, stadium, matches) =>
      `${city} (${country}) richtet ${matches} WM-2026-Spiele im ${stadium} aus. Für Remote-Worker, die das Turnier besuchen, hier das praktische Setup.`,
    factsHeading: 'Eckdaten',
    factStadium: 'Stadion',
    factCapacity: 'Kapazität',
    factMatches: 'Ausgerichtete Spiele',
    factTimezone: 'Zeitzone',
    factCurrency: 'Währung',
    factInternet: 'Mittleres Internet',
    factCostIndex: 'Kosten während des Turniers',
    costLabels: ['Am günstigsten', 'Günstig', 'Mittel', 'Teuer', 'Am teuersten'],
    remoteWorkHeading: 'Remote-Setup',
    remoteWorkBody: (city, mbps, neighbourhoods) =>
      `Mittlere Festnetzgeschwindigkeit rund ${mbps} Mbps. Für durchgehendes Remote-Arbeiten während des Turniers basiere dich in ${neighbourhoods}, wo Coworking und zuverlässige Konnektivität konzentriert sind. Smartphone-Tethering mit lokaler SIM als Backup; Hotel-WLAN ist während Fan-Hochzeiten unzuverlässig.`,
    neighbourhoodsHeading: 'Beste Wohnviertel',
    moneyHeading: 'Geld',
    moneyBody: (currency) =>
      `${currency} ist die Landeswährung. Ein Multi-Währungs-Konto (Wise) ermöglicht Ausgaben zum Interbanken-Kurs ohne den 2- bis 4-prozentigen Aufschlag, den die meisten Karten nehmen. Lehne DCC (Dynamic Currency Conversion) bei jedem Händler ab; zahle in Landeswährung, deine Karte konvertiert zum echten Kurs.`,
    insuranceHeading: 'Reiseversicherung',
    insuranceBody: (country) =>
      `Stelle sicher, dass deine Versicherung ${country} im Standardtarif abdeckt. SafetyWing und Genki decken das Gastgeberland im Standardtarif ab; prüfe den stationären Höchstbetrag (besonders relevant in den USA, wo Rechnungen schnell hoch sind). Schnelle Aktivierung, Schutz am gleichen Tag.`,
    ptoHeading: 'Urlaubsplanung',
    ptoBody:
      'Reiche deinen Urlaubsantrag mehr als 4 Wochen im Voraus mit konkreten Übergabe-Commitments ein. Async arbeiten um die Spielzeiten herum ist eine Woche tragbar, nicht länger. Blockiere den geteilten Kalender des Teams, damit Kollegen nicht überrascht werden.',
    relatedHeading: 'Verwandte Guides',
    related: [
      { slug: 'world-cup-2026-remote-work-from-host-cities', title: 'Remote arbeiten aus einer WM-2026-Gastgeberstadt' },
      { slug: 'world-cup-2026-travel-insurance-multi-country', title: 'Reiseversicherung USA, Kanada, Mexiko' },
      { slug: 'world-cup-2026-multi-currency-spending-usa-canada-mexico', title: 'Ausgeben in USD, CAD, MXN während der WM' },
      { slug: 'world-cup-2026-remote-developer-time-off-strategies', title: 'Urlaubs- und Async-Strategien für die WM' },
    ],
    backToHub: 'Alle Gastgeberstädte →',
  },
  pt: {
    hubMetaTitle: 'Copa do Mundo 2026: guia das cidades-sede para trabalhadores remotos',
    hubMetaDescription:
      'Guias práticos das 16 cidades-sede da Copa do Mundo 2026 nos EUA, Canadá e México, escritos para trabalhadores tech remotos que vão a jogos.',
    hubEyebrow: 'Copa do Mundo 2026',
    hubH1: 'Cidades-sede da Copa do Mundo 2026: guia para trabalhadores remotos',
    hubIntro:
      'Dezesseis cidades-sede nos Estados Unidos, Canadá e México recebem a Copa do Mundo FIFA 2026. Os guias abaixo cobrem o setup prático para trabalhadores tech remotos: estádio, bairros para se basear, internet, dinheiro e planejamento de folga por cidade.',
    hubCitiesHeading: 'Cidades-sede',
    hubUsHeading: 'Estados Unidos (11 cidades)',
    hubCaHeading: 'Canadá (2 cidades)',
    hubMxHeading: 'México (3 cidades)',

    cityMetaTitle: (city) => `Copa do Mundo 2026 em ${city}: trabalho remoto, estadia e dinheiro`,
    cityMetaDescription: (city) =>
      `Trabalhar remoto e assistir à Copa do Mundo 2026 em ${city}: estádio, bairros para se basear, internet, gasto multimoeda e seguro viagem.`,
    cityEyebrow: 'Cidade-sede da Copa do Mundo 2026',
    cityH1: (city) => `Copa do Mundo 2026 em ${city}`,
    cityIntro: (city, country, stadium, matches) =>
      `${city} (${country}) recebe ${matches} jogos da Copa do Mundo 2026 no ${stadium}. Para trabalhadores remotos que vão ao torneio, o setup prático está abaixo.`,
    factsHeading: 'Dados-chave',
    factStadium: 'Estádio',
    factCapacity: 'Capacidade',
    factMatches: 'Jogos recebidos',
    factTimezone: 'Fuso horário',
    factCurrency: 'Moeda',
    factInternet: 'Internet mediana',
    factCostIndex: 'Custo durante o torneio',
    costLabels: ['Mais barato', 'Barato', 'Médio', 'Caro', 'Mais caro'],
    remoteWorkHeading: 'Setup remoto',
    remoteWorkBody: (city, mbps, neighbourhoods) =>
      `Internet fixa mediana cerca de ${mbps} Mbps. Para trabalho remoto contínuo durante o torneio, base-se em ${neighbourhoods}, onde coworking e conectividade confiável se concentram. Faça tether do celular com SIM local como backup; WiFi de hotel é pouco confiável em picos de torcedores.`,
    neighbourhoodsHeading: 'Melhores bairros para se basear',
    moneyHeading: 'Dinheiro',
    moneyBody: (currency) =>
      `${currency} é a moeda local. Uma conta multimoeda (Wise) permite gastar na taxa interbancária sem o markup de 2 a 4 por cento que a maioria dos cartões cobra. Recuse o DCC (conversão dinâmica) em todo comerciante; pague em moeda local e seu cartão converte na taxa real.`,
    insuranceHeading: 'Seguro viagem',
    insuranceBody: (country) =>
      `Confirme que seu seguro cobre ${country} no plano padrão. SafetyWing e Genki cobrem o país-sede no plano padrão; verifique o teto de internação (especialmente importante nos EUA onde contas sobem rápido). Ativação rápida, cobertura no mesmo dia.`,
    ptoHeading: 'Planejamento de folga',
    ptoBody:
      'Envie seu pedido de folga com mais de 4 semanas de antecedência e um plano de transferência concreto. Trabalhar async em volta dos jogos é sustentável por uma semana, não mais. Bloqueie o calendário compartilhado do time para não surpreender colegas.',
    relatedHeading: 'Guias relacionados',
    related: [
      { slug: 'world-cup-2026-remote-work-from-host-cities', title: 'Trabalhar remoto de uma cidade-sede da Copa do Mundo 2026' },
      { slug: 'world-cup-2026-travel-insurance-multi-country', title: 'Seguro viagem EUA, Canadá, México' },
      { slug: 'world-cup-2026-multi-currency-spending-usa-canada-mexico', title: 'Gastar em USD, CAD, MXN durante a Copa do Mundo' },
      { slug: 'world-cup-2026-remote-developer-time-off-strategies', title: 'Estratégias de folga e async para a Copa do Mundo' },
    ],
    backToHub: 'Todas as cidades-sede →',
  },
  it: {
    hubMetaTitle: 'Mondiali 2026: guida città ospitanti per lavoratori remote',
    hubMetaDescription:
      'Guide pratiche alle 16 città ospitanti dei Mondiali 2026 in USA, Canada e Messico, scritte per lavoratori tech remote che vanno alle partite.',
    hubEyebrow: 'Mondiali 2026',
    hubH1: 'Città ospitanti Mondiali 2026: guida per lavoratori remote',
    hubIntro:
      'Sedici città ospitanti negli Stati Uniti, Canada e Messico ospitano i Mondiali FIFA 2026. Le guide sotto coprono il setup pratico per lavoratori tech remote che vanno alle partite: stadio, quartieri base, internet, denaro e pianificazione ferie per città.',
    hubCitiesHeading: 'Città ospitanti',
    hubUsHeading: 'Stati Uniti (11 città)',
    hubCaHeading: 'Canada (2 città)',
    hubMxHeading: 'Messico (3 città)',

    cityMetaTitle: (city) => `Mondiali 2026 a ${city}: lavoro remote, soggiorno e denaro`,
    cityMetaDescription: (city) =>
      `Lavorare in remote e assistere ai Mondiali 2026 a ${city}: stadio, quartieri base, internet, spesa multi-valuta e assicurazione viaggio.`,
    cityEyebrow: 'Città ospitante Mondiali 2026',
    cityH1: (city) => `Mondiali 2026 a ${city}`,
    cityIntro: (city, country, stadium, matches) =>
      `${city} (${country}) ospita ${matches} partite dei Mondiali 2026 allo ${stadium}. Per lavoratori remote che vanno al torneo, il setup pratico è sotto.`,
    factsHeading: 'Dati chiave',
    factStadium: 'Stadio',
    factCapacity: 'Capienza',
    factMatches: 'Partite ospitate',
    factTimezone: 'Fuso orario',
    factCurrency: 'Valuta',
    factInternet: 'Internet mediano',
    factCostIndex: 'Costo durante il torneo',
    costLabels: ['Più economico', 'Economico', 'Medio', 'Costoso', 'Più costoso'],
    remoteWorkHeading: 'Setup remote',
    remoteWorkBody: (city, mbps, neighbourhoods) =>
      `Internet fisso mediano intorno ai ${mbps} Mbps. Per lavoro remote continuo durante il torneo, basati a ${neighbourhoods} dove si concentrano coworking e connettività affidabile. Tethering dal telefono con SIM locale come backup; il WiFi degli hotel è inaffidabile nei picchi di tifosi.`,
    neighbourhoodsHeading: 'Migliori quartieri base',
    moneyHeading: 'Denaro',
    moneyBody: (currency) =>
      `${currency} è la valuta locale. Un conto multi-valuta (Wise) permette di spendere al tasso interbancario senza il ricarico del 2 al 4 per cento delle carte retail. Rifiuta il DCC (conversione dinamica) presso ogni esercente; paga in valuta locale e la tua carta converte al tasso reale.`,
    insuranceHeading: 'Assicurazione viaggio',
    insuranceBody: (country) =>
      `Verifica che la tua assicurazione copra ${country} sul piano standard. SafetyWing e Genki coprono il paese ospitante al piano standard; controlla il massimale di degenza (particolarmente rilevante negli USA dove i conti salgono velocemente). Attivazione rapida, copertura lo stesso giorno.`,
    ptoHeading: 'Pianificazione ferie',
    ptoBody:
      'Invia la richiesta ferie con più di 4 settimane di anticipo e un piano di passaggio concreto. Lavorare async attorno agli orari delle partite è sostenibile per una settimana, non oltre. Blocca il calendario condiviso del team per non sorprendere i colleghi.',
    relatedHeading: 'Guide correlate',
    related: [
      { slug: 'world-cup-2026-remote-work-from-host-cities', title: 'Lavorare remote da una città ospitante dei Mondiali 2026' },
      { slug: 'world-cup-2026-travel-insurance-multi-country', title: 'Assicurazione viaggio USA, Canada, Messico' },
      { slug: 'world-cup-2026-multi-currency-spending-usa-canada-mexico', title: 'Spendere in USD, CAD, MXN durante i Mondiali' },
      { slug: 'world-cup-2026-remote-developer-time-off-strategies', title: 'Strategie ferie e async per i Mondiali' },
    ],
    backToHub: 'Tutte le città ospitanti →',
  },
  pl: {
    hubMetaTitle: 'Mistrzostwa Świata 2026: przewodnik po miastach-gospodarzach dla pracowników zdalnych',
    hubMetaDescription:
      'Praktyczne przewodniki po 16 miastach-gospodarzach MŚ 2026 w USA, Kanadzie i Meksyku, pisane dla zdalnych pracowników tech jadących na mecze.',
    hubEyebrow: 'Mistrzostwa Świata 2026',
    hubH1: 'Miasta-gospodarze MŚ 2026: przewodnik dla zdalnych pracowników',
    hubIntro:
      'Szesnaście miast-gospodarzy w Stanach Zjednoczonych, Kanadzie i Meksyku gości Mistrzostwa Świata FIFA 2026. Poniższe przewodniki obejmują praktyczny setup dla zdalnych pracowników tech jadących na mecze: stadion, dzielnice bazy, internet, pieniądze i planowanie urlopu w każdym mieście.',
    hubCitiesHeading: 'Miasta-gospodarze',
    hubUsHeading: 'USA (11 miast)',
    hubCaHeading: 'Kanada (2 miasta)',
    hubMxHeading: 'Meksyk (3 miasta)',

    cityMetaTitle: (city) => `MŚ 2026 w ${city}: praca zdalna, pobyt i pieniądze`,
    cityMetaDescription: (city) =>
      `Pracować zdalnie i być na MŚ 2026 w ${city}: stadion, dzielnice bazy, internet, wydatki w kilku walutach i ubezpieczenie podróżne.`,
    cityEyebrow: 'Miasto-gospodarz MŚ 2026',
    cityH1: (city) => `MŚ 2026 w ${city}`,
    cityIntro: (city, country, stadium, matches) =>
      `${city} (${country}) gości ${matches} meczów MŚ 2026 na ${stadium}. Dla zdalnych pracowników jadących na turniej praktyczny setup poniżej.`,
    factsHeading: 'Kluczowe dane',
    factStadium: 'Stadion',
    factCapacity: 'Pojemność',
    factMatches: 'Goszczone mecze',
    factTimezone: 'Strefa czasowa',
    factCurrency: 'Waluta',
    factInternet: 'Mediana internetu',
    factCostIndex: 'Koszt podczas turnieju',
    costLabels: ['Najtaniej', 'Tanio', 'Średnio', 'Drogo', 'Najdrożej'],
    remoteWorkHeading: 'Setup zdalny',
    remoteWorkBody: (city, mbps, neighbourhoods) =>
      `Mediana internetu stacjonarnego około ${mbps} Mbps. Dla ciągłej pracy zdalnej podczas turnieju zatrzymaj się w ${neighbourhoods}, gdzie skupia się coworking i niezawodna łączność. Tethering z telefonu z lokalną SIM jako backup; hotelowe WiFi jest niepewne w szczytowych chwilach kibicowskich.`,
    neighbourhoodsHeading: 'Najlepsze dzielnice bazy',
    moneyHeading: 'Pieniądze',
    moneyBody: (currency) =>
      `${currency} to lokalna waluta. Konto wielowalutowe (Wise) pozwala wydawać po kursie międzybankowym bez 2 do 4 procent narzutu, który pobiera większość kart detalicznych. Odmawiaj DCC (dynamicznej konwersji walut) u każdego sprzedawcy; płać w lokalnej walucie, a karta przeliczy po realnym kursie.`,
    insuranceHeading: 'Ubezpieczenie podróżne',
    insuranceBody: (country) =>
      `Upewnij się, że twoje ubezpieczenie pokrywa ${country} w standardowym planie. SafetyWing i Genki pokrywają kraj-gospodarza w standardzie; sprawdź limit szpitalny (szczególnie istotny w USA, gdzie rachunki rosną szybko). Szybka aktywacja, ochrona od tego samego dnia.`,
    ptoHeading: 'Planowanie urlopu',
    ptoBody:
      'Złóż wniosek o urlop z ponad 4-tygodniowym wyprzedzeniem z konkretnym planem przekazania zadań. Praca async wokół godzin meczów jest do utrzymania przez tydzień, nie dłużej. Zablokuj wspólny kalendarz zespołu, żeby nie zaskoczyć kolegów.',
    relatedHeading: 'Powiązane poradniki',
    related: [
      { slug: 'world-cup-2026-remote-work-from-host-cities', title: 'Praca zdalna z miasta-gospodarza MŚ 2026' },
      { slug: 'world-cup-2026-travel-insurance-multi-country', title: 'Ubezpieczenie podróżne USA, Kanada, Meksyk' },
      { slug: 'world-cup-2026-multi-currency-spending-usa-canada-mexico', title: 'Wydawanie w USD, CAD, MXN podczas MŚ' },
      { slug: 'world-cup-2026-remote-developer-time-off-strategies', title: 'Strategie urlopowe i async na MŚ' },
    ],
    backToHub: 'Wszystkie miasta-gospodarze →',
  },
};
