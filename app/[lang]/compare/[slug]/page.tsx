import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { COMPARISONS, COMPARISON_MAP } from '@/lib/comparisons';
import { tComparison } from '@/lib/comparisons-i18n';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => COMPARISONS.map((c) => ({ lang, slug: c.slug })));
}

// Search-result descriptions, kept between 140 and 160 characters. The short
// strings in lib/comparisons.ts stay in place as the on-page subtitle.
const META_DESCRIPTIONS: Record<string, Record<Locale, string>> = {
  'remote-vs-hybrid': {
    en: 'Fully remote versus hybrid tech roles compared on geographic freedom, pay bands, promotion speed and team integration, and how to pick in 2026.',
    fr: "Remote total ou hybride dans la tech : liberté géographique, fourchettes de salaire, vitesse de promotion et intégration d'équipe comparées pour 2026.",
    es: 'Remoto total frente a híbrido en tech: libertad geográfica, bandas salariales, velocidad de promoción e integración de equipo comparadas para 2026.',
    de: 'Voll remote oder hybrid in der Tech-Branche: geografische Freiheit, Gehaltsbänder, Beförderungstempo und Teamintegration im Vergleich für 2026.',
    pt: 'Totalmente remoto ou híbrido em tech: liberdade geográfica, faixas salariais, velocidade de promoção e integração de equipe comparadas para 2026.',
    it: 'Full remote o ibrido nel tech: libertà geografica, fasce salariali, velocità di promozione e integrazione del team a confronto per scegliere nel 2026.',
    pl: 'Pełny remote czy hybryda w tech: swoboda geograficzna, widełki płac, tempo awansu i integracja zespołu porównane, by wybrać właściwie w 2026 roku.',
  },
  'remote-vs-onsite': {
    en: 'Fully remote against fully onsite tech jobs: the 5 to 15 percent pay gap, mentorship and career development, commute time and work-life separation.',
    fr: "Remote total contre présentiel total dans la tech : écart de salaire de 5 à 15 %, mentorat et progression, temps de trajet et séparation vie-travail.",
    es: 'Remoto total frente a presencial total en tech: la brecha salarial del 5 al 15 %, mentoría y desarrollo, tiempo de trayecto y separación vida-trabajo.',
    de: 'Voll remote gegen voll vor Ort in der Tech: Gehaltslücke von 5 bis 15 Prozent, Mentoring und Entwicklung, Pendelzeit und Trennung von Arbeit und Zuhause.',
    pt: 'Totalmente remoto contra totalmente presencial em tech: diferença salarial de 5 a 15%, mentoria e evolução, tempo de trajeto e separação vida-trabalho.',
    it: 'Full remote contro full in sede nel tech: divario salariale del 5-15%, mentoring e crescita, tempo di pendolarismo e separazione tra lavoro e casa.',
    pl: 'Pełny remote kontra praca stacjonarna w tech: różnica płac 5-15%, mentoring i rozwój, czas dojazdów oraz oddzielenie pracy od życia prywatnego.',
  },
  'freelance-vs-fulltime': {
    en: 'Freelance day rates against a full-time remote salary: benefits, equity, tax treatment, project depth and how each track compounds over a career.',
    fr: "TJM freelance contre salaire remote à plein temps : avantages, equity, fiscalité, profondeur des projets et capitalisation de carrière sur chaque voie.",
    es: 'Tarifa diaria freelance frente a salario remoto a tiempo completo: beneficios, equity, fiscalidad, profundidad de proyectos y capital de carrera.',
    de: 'Freelance-Tagessätze gegen Remote-Festgehalt: Benefits, Equity, Steuern und Sozialabgaben, Projekttiefe und wie sich beide Wege über Jahre aufbauen.',
    pt: 'Diária de freelancer contra salário remoto em tempo integral: benefícios, equity, impostos, profundidade dos projetos e acúmulo de capital de carreira.',
    it: 'Tariffa giornaliera freelance contro stipendio remote full-time: benefit, equity, tasse, profondità dei progetti e capitale di carriera accumulato.',
    pl: 'Stawka dzienna freelancera kontra etat zdalny: benefity, equity, podatki i składki, głębokość projektów oraz to, jak każda ścieżka buduje karierę.',
  },
  'us-vs-eu-remote-tech-companies': {
    en: 'US and EU remote tech employers compared on cash bands, statutory benefits, vacation days, working hours culture and the timezone overlap expected.',
    fr: "Employeurs tech remote US et UE comparés : salaires en cash, avantages légaux, jours de congés, culture horaire et chevauchement de fuseau exigé.",
    es: 'Empleadores tech remotos de EE. UU. y la UE comparados: salario en efectivo, beneficios legales, vacaciones, cultura horaria y solapamiento de husos.',
    de: 'US- und EU-Remote-Tech-Arbeitgeber im Vergleich: Cash-Gehälter, gesetzliche Leistungen, Urlaubstage, Arbeitszeitkultur und erwartete Zeitzonen.',
    pt: 'Empregadores tech remotos dos EUA e da UE comparados: salário em dinheiro, benefícios legais, férias, cultura de horários e sobreposição de fuso.',
    it: 'Datori di lavoro tech remote USA e UE a confronto: retribuzione in contanti, benefit di legge, ferie, cultura degli orari e sovrapposizione di fuso.',
    pl: 'Amerykańscy i unijni pracodawcy remote tech: wynagrodzenie gotówkowe, świadczenia ustawowe, urlop, kultura godzin pracy i wymagane nakładanie stref.',
  },
  'junior-vs-senior-remote-jobs': {
    en: 'How remote hiring changes with seniority: role availability, salary bands from junior to principal, what the hiring bar tests, and the usual path in.',
    fr: "Ce qui change avec la séniorité en remote : disponibilité des postes, fourchettes du junior au principal, critères d'embauche et parcours habituel.",
    es: 'Qué cambia con la seniority en remoto: disponibilidad de puestos, bandas salariales de junior a principal, criterios de contratación y ruta habitual.',
    de: 'Was sich mit der Seniorität bei Remote-Jobs ändert: Stellenangebot, Gehaltsbänder von Junior bis Principal, Einstellungskriterien und typischer Weg.',
    pt: 'O que muda com a senioridade em vagas remotas: oferta de posições, faixas salariais de junior a principal, critérios de contratação e caminho comum.',
    it: 'Cosa cambia con la seniority nel remote: disponibilità di ruoli, fasce salariali da junior a principal, criteri di selezione e percorso più comune.',
    pl: 'Co zmienia się wraz z doświadczeniem w pracy zdalnej: dostępność ról, widełki od juniora do principala, kryteria rekrutacji i typowa ścieżka wejścia.',
  },
  'react-vs-vue-jobs': {
    en: 'React outnumbers Vue on remote postings about four to one. Where Vue holds ground in the EU, how salary bands compare and what job mobility looks like.',
    fr: "React devance Vue d'environ quatre pour un sur les offres remote. Où Vue résiste en Europe, comparaison des salaires et de la mobilité professionnelle.",
    es: 'React supera a Vue unas cuatro a uno en ofertas remotas. Dónde Vue mantiene terreno en la UE, comparación de bandas salariales y de movilidad laboral.',
    de: 'React liegt bei Remote-Stellen etwa vier zu eins vor Vue. Wo Vue in der EU stark bleibt, wie die Gehaltsbänder aussehen und wie mobil beide Profile sind.',
    pt: 'React supera Vue em cerca de quatro para um nas vagas remotas. Onde Vue resiste na UE, como as faixas salariais comparam e qual a mobilidade de cada um.',
    it: 'React supera Vue di circa quattro a uno negli annunci remote. Dove Vue tiene in Europa, come si confrontano le fasce salariali e la mobilità di carriera.',
    pl: 'React przewyższa Vue w zdalnych ofertach mniej więcej cztery do jednego. Gdzie Vue trzyma się w UE, jak wypadają widełki płac i mobilność zawodowa.',
  },
  'python-vs-go-backend': {
    en: 'Python leads Go about three to one on remote backend postings, but Go pays a 10 to 15 percent senior premium. Domains, salary and learning curve compared.',
    fr: "Python devance Go d'environ trois pour un sur le backend remote, mais Go paie 10 à 15 % de plus en senior. Domaines, salaires et courbe d'apprentissage.",
    es: 'Python supera a Go unas tres a uno en backend remoto, pero Go paga un 10-15 % más en senior. Dominios, salarios y curva de aprendizaje comparados.',
    de: 'Python liegt beim Remote-Backend etwa drei zu eins vor Go, doch Go zahlt senior 10 bis 15 Prozent mehr. Domänen, Gehalt und Lernkurve im Vergleich.',
    pt: 'Python lidera Go cerca de três para um no backend remoto, mas Go paga 10 a 15% a mais em senior. Domínios, salários e curva de aprendizado comparados.',
    it: 'Python supera Go di circa tre a uno nel backend remote, ma Go paga il 10-15% in più da senior. Domini, stipendi e curva di apprendimento a confronto.',
    pl: 'Python wyprzedza Go mniej więcej trzy do jednego w zdalnym backendzie, ale Go płaci 10-15% więcej seniorom. Domeny, płace i krzywa nauki w porównaniu.',
  },
  'startup-vs-bigtech-remote': {
    en: 'Startup versus big tech remote engineering: cash and equity, scope, promotion speed, stability, and which side is still genuinely remote-first in 2026.',
    fr: "Startup contre big tech en remote : cash et equity, périmètre du rôle, vitesse de progression, stabilité, et qui reste vraiment remote-first en 2026.",
    es: 'Startup frente a big tech en remoto: cash y equity, alcance del rol, velocidad de progresión, estabilidad y quién sigue siendo remote-first en 2026.',
    de: 'Startup gegen Big Tech im Remote-Engineering: Cash und Equity, Aufgabenbreite, Aufstiegstempo, Stabilität und wer 2026 noch echt remote-first ist.',
    pt: 'Startup contra big tech em engenharia remota: cash e equity, amplitude de escopo, velocidade de progressão, estabilidade e quem segue remote-first.',
    it: "Startup contro big tech nell'ingegneria remote: cash ed equity, ampiezza dello scope, velocità di crescita, stabilità e chi è ancora remote-first.",
    pl: 'Startup kontra big tech w zdalnej inżynierii: gotówka i equity, zakres zadań, tempo awansu, stabilność i kto naprawdę pozostał remote-first w 2026.',
  },
  'aws-vs-gcp-remote-jobs': {
    en: 'AWS appears on about 60 percent of remote backend and platform postings, GCP on 30. Where GCP leads in data and ML, and how the certifications compare.',
    fr: "AWS apparaît sur environ 60 % des offres backend et platform remote, GCP sur 30 %. Où GCP domine en data et ML, et ce que valent les certifications.",
    es: 'AWS aparece en cerca del 60 % de las ofertas remotas de backend y plataforma, GCP en el 30 %. Dónde lidera GCP en data y ML, y qué valen los certificados.',
    de: 'AWS steht in rund 60 Prozent der Remote-Backend- und Platform-Anzeigen, GCP in 30. Wo GCP bei Data und ML führt und was die Zertifikate wirklich wiegen.',
    pt: 'AWS aparece em cerca de 60% das vagas remotas de backend e plataforma, GCP em 30%. Onde a GCP lidera em data e ML, e quanto valem as certificações.',
    it: 'AWS compare in circa il 60% degli annunci remote backend e platform, GCP nel 30%. Dove GCP guida su data e ML e quanto pesano le certificazioni.',
    pl: 'AWS pojawia się w około 60% zdalnych ofert backend i platform, GCP w 30%. Gdzie GCP prowadzi w data i ML oraz ile realnie ważą certyfikaty obu chmur.',
  },
  'snowflake-vs-bigquery': {
    en: 'Snowflake and BigQuery on remote data engineering postings: which stacks each one anchors, why dbt and SQL show up in both, and how salary bands line up.',
    fr: "Snowflake et BigQuery sur les offres data engineering remote : à quels stacks chacun s'adosse, pourquoi dbt et SQL sont partout, et les salaires comparés.",
    es: 'Snowflake y BigQuery en ofertas remotas de data engineering: a qué stacks se ancla cada uno, por qué dbt y SQL aparecen siempre y cómo van los salarios.',
    de: 'Snowflake und BigQuery in Remote-Data-Engineering-Anzeigen: welche Stacks jeweils dahinterstehen, warum dbt und SQL überall auftauchen, plus Gehälter.',
    pt: 'Snowflake e BigQuery em vagas remotas de data engineering: a que stacks cada um se ancora, por que dbt e SQL aparecem sempre e como ficam os salários.',
    it: 'Snowflake e BigQuery negli annunci remote di data engineering: a quali stack si ancorano, perché dbt e SQL ricorrono sempre e come stanno gli stipendi.',
    pl: 'Snowflake i BigQuery w zdalnych ofertach data engineering: do jakich stacków pasują, dlaczego dbt i SQL są wszędzie i jak wyglądają widełki płac.',
  },
  'employer-of-record-vs-direct': {
    en: 'When an employer of record beats direct employment for an international remote hire: the monthly fee, payroll and social charges, benefits and equity.',
    fr: "Quand l'employer of record vaut mieux qu'un contrat direct pour une embauche remote internationale : frais mensuels, paie et charges, avantages, equity.",
    es: 'Cuándo conviene un employer of record frente al contrato directo en una contratación remota internacional: cuota mensual, nómina y cargas, y equity.',
    de: 'Wann ein Employer of Record die Direktanstellung schlägt: monatliche Gebühr, lokale Lohnabrechnung und Sozialabgaben, Benefits und Grenzen bei Equity.',
    pt: 'Quando um employer of record vence a contratação direta em uma contratação remota internacional: taxa mensal, folha e encargos, benefícios e equity.',
    it: "Quando un employer of record batte l'assunzione diretta per un hire remote internazionale: costo mensile, payroll e contributi, benefit ed equity.",
    pl: 'Kiedy employer of record wygrywa z zatrudnieniem bezpośrednim przy międzynarodowej rekrutacji zdalnej: opłata, płace i składki, benefity oraz equity.',
  },
  'in-house-vs-agency-remote': {
    en: 'In-house product teams against agencies for remote engineers: project variety, a 10 to 20 percent pay gap, and the career capital each one builds.',
    fr: "Équipe produit interne contre agence pour les ingénieurs remote : variété des projets, écart de salaire de 10 à 20 %, et le capital de carrière bâti.",
    es: 'Equipo de producto interno frente a agencia para ingenieros remotos: variedad de proyectos, brecha salarial del 10 al 20 % y el capital de carrera.',
    de: 'Internes Produktteam gegen Agentur für Remote-Engineers: Projektvielfalt, Gehaltsunterschied von 10 bis 20 Prozent und das aufgebaute Karrierekapital.',
    pt: 'Time de produto interno contra agência para engenheiros remotos: variedade de projetos, diferença salarial de 10 a 20% e o capital de carreira gerado.',
    it: 'Team di prodotto interno contro agenzia per ingegneri remote: varietà dei progetti, divario salariale del 10-20% e il capitale di carriera costruito.',
    pl: 'Wewnętrzny zespół produktowy kontra agencja dla zdalnych inżynierów: różnorodność projektów, różnica płac 10-20% i budowany kapitał zawodowy.',
  },
  'lisbon-vs-barcelona-remote': {
    en: 'Lisbon and Barcelona side by side for remote tech workers: visa friction, rent levels, the shape of each tech scene, and daily life in both cities.',
    fr: "Lisbonne et Barcelone côte à côte pour les travailleurs tech remote : friction visa, niveau des loyers, écosystème tech et vie quotidienne sur place.",
    es: 'Lisboa y Barcelona lado a lado para trabajadores tech remotos: fricción del visado, nivel de alquileres, ecosistema tech y vida diaria en cada ciudad.',
    de: 'Lissabon und Barcelona im direkten Vergleich für Remote-Tech-Worker: Visum-Aufwand, Mietniveau, Größe der Tech-Szene und Alltag in beiden Städten.',
    pt: 'Lisboa e Barcelona lado a lado para quem trabalha remoto em tech: atrito do visto, nível dos aluguéis, ecossistema tech e vida diária em cada cidade.',
    it: 'Lisbona e Barcellona a confronto per chi lavora in remoto nel tech: attrito del visto, livello degli affitti, ecosistema tech e vita quotidiana.',
    pl: 'Lizbona i Barcelona w bezpośrednim porównaniu dla zdalnych pracowników tech: wizy, poziom czynszów, wielkość sceny tech i codzienne życie w obu.',
  },
  'portugal-vs-spain-nomad-visa': {
    en: 'Portugal D8 against the Spain digital nomad visa: income thresholds, tax regimes, processing times, residency and citizenship timelines, family rules.',
    fr: "Le D8 portugais face au visa nomade espagnol : seuils de revenus, régimes fiscaux, délais de traitement, chemins vers la résidence et règles familiales.",
    es: 'El D8 portugués frente al visado de nómada digital español: umbrales de ingresos, régimen fiscal, plazos, camino a residencia y reglas para la familia.',
    de: 'Portugals D8 gegen Spaniens Digital-Nomad-Visum: Einkommensgrenzen, Steuerregime, Bearbeitungszeiten, Wege zu Aufenthalt und Einbürgerung, Familie.',
    pt: 'O D8 português frente ao visto de nômade digital espanhol: limites de renda, regimes fiscais, prazos, caminho até a residência e regras para a família.',
    it: 'Il D8 portoghese contro il visto nomade digitale spagnolo: soglie di reddito, regimi fiscali, tempi, percorso verso la residenza e regole familiari.',
    pl: 'Portugalskie D8 kontra hiszpańska wiza dla nomadów: progi dochodowe, reżimy podatkowe, czas rozpatrywania, droga do rezydentury i zasady dla rodziny.',
  },
  'lisbon-vs-mexico-city-remote': {
    en: 'Lisbon or Mexico City for remote tech work: US timezone overlap is the deciding factor, alongside rent levels, visa options and how each city feels.',
    fr: "Lisbonne ou Mexico pour le travail tech remote : le chevauchement horaire avec les US décide, avec le coût des loyers, les visas et la vie quotidienne.",
    es: 'Lisboa o Ciudad de México para trabajo tech remoto: el solapamiento horario con EE. UU. decide, junto al coste del alquiler, los visados y la vida.',
    de: 'Lissabon oder Mexiko-Stadt für Remote-Tech-Arbeit: die Zeitzonenüberlappung mit den USA entscheidet, dazu Mieten, Visa-Optionen und der Alltag.',
    pt: 'Lisboa ou Cidade do México para trabalho tech remoto: a sobreposição de fuso com os EUA decide, junto com aluguéis, opções de visto e a vida diária.',
    it: "Lisbona o Città del Messico per il lavoro tech remote: decide la sovrapposizione di fuso con gli USA, poi affitti, opzioni di visto e vita quotidiana.",
    pl: 'Lizbona czy Meksyk dla zdalnej pracy w tech: decyduje nakładanie się stref czasowych z USA, a dalej czynsze, opcje wizowe i codzienne życie w mieście.',
  },
  'bali-vs-chiang-mai-remote': {
    en: 'Bali against Chiang Mai for remote tech workers: cost of living, the Indonesian and Thai visa routes, internet speeds, and how the communities differ.',
    fr: "Bali face à Chiang Mai pour les travailleurs tech remote : coût de la vie, visas indonésien et thaïlandais, débits internet et différences de communauté.",
    es: 'Bali frente a Chiang Mai para trabajadores tech remotos: coste de vida, rutas de visado indonesia y tailandesa, velocidad de internet y comunidades.',
    de: 'Bali gegen Chiang Mai für Remote-Tech-Worker: Lebenshaltungskosten, die Visa-Wege in Indonesien und Thailand, Internetgeschwindigkeit und Community.',
    pt: 'Bali contra Chiang Mai para quem trabalha remoto em tech: custo de vida, rotas de visto da Indonésia e da Tailândia, velocidade de internet e comunidade.',
    it: 'Bali contro Chiang Mai per chi lavora in remoto nel tech: costo della vita, vie del visto indonesiano e thailandese, velocità di rete e comunità.',
    pl: 'Bali kontra Chiang Mai dla zdalnych pracowników tech: koszty życia, wizy indonezyjska i tajska, prędkość internetu oraz różnice między społecznościami.',
  },
};

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; slug: string };
}): Metadata {
  const c = COMPARISON_MAP[params.slug];
  if (!c) return { title: 'Comparison not found' };
  return buildMetadata({
    locale: params.lang,
    path: `compare/${params.slug}`,
    title: tComparison(c.slug, params.lang, 'title', c.title),
    description:
      META_DESCRIPTIONS[c.slug]?.[params.lang] ??
      tComparison(c.slug, params.lang, 'description', c.description),
  });
}

export default function ComparisonPage({ params }: { params: { lang: Locale; slug: string } }) {
  const c = COMPARISON_MAP[params.slug];
  if (!c) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', url: absoluteUrl(`/${params.lang}`) },
    { name: 'Compare', url: absoluteUrl(`/${params.lang}/compare`) },
    { name: tComparison(c.slug, params.lang, 'title', c.title), url: absoluteUrl(`/${params.lang}/compare/${c.slug}`) },
  ]);

  const others = COMPARISONS.filter((x) => x.slug !== c.slug).slice(0, 6);

  return (
    <article className="max-w-prose mx-auto space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <header className="border-b border-line pb-4">
        <h1 className="text-2xl md:text-3xl font-semibold">{tComparison(c.slug, params.lang, 'title', c.title)}</h1>
        <p className="text-muted text-sm mt-2">{tComparison(c.slug, params.lang, 'description', c.description)}</p>
      </header>
      <div className="grid grid-cols-2 gap-3">
        <div className="border border-line rounded p-3 bg-forestSoft">
          <p className="text-xs uppercase tracking-wider text-forest">Option A</p>
          <p className="text-sm font-medium mt-1">{c.leftLabel}</p>
        </div>
        <div className="border border-line rounded p-3 bg-bg">
          <p className="text-xs uppercase tracking-wider text-muted">Option B</p>
          <p className="text-sm font-medium mt-1">{c.rightLabel}</p>
        </div>
      </div>
      <div className="prose-body whitespace-pre-line text-[0.95rem] leading-relaxed">{c.body}</div>

      <section className="border-t border-line pt-6">
        <h2 className="text-lg font-semibold mb-3">More comparisons</h2>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/${params.lang}/compare/${o.slug}`}
                className="block border border-line rounded p-3 hover:border-ink"
              >
                {o.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
