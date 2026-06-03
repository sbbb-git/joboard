import type { Metadata } from 'next';
import Link from 'next/link';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

type Copy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  h2What: string;
  bodyWhat: string;
  h2Sources: string;
  bodySourcesIntro: string;
  sources: string[];
  h2Updates: string;
  bodyUpdates: string;
  h2Salaries: string;
  bodySalaries: string;
  h2Applying: string;
  bodyApplying: string;
  h2Contact: string;
  bodyContactPre: string;
  bodyContactLink: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    metaTitle: 'About slateremote.com',
    metaDescription: 'How slateremote.com is built, what data it aggregates, and how the index is kept fresh.',
    h1: 'About slateremote.com',
    subtitle: 'A curated index of remote tech jobs, aggregated from public job board APIs.',
    h2What: 'What this is',
    bodyWhat: 'slateremote.com is an aggregator of remote engineering, data, design, and product job postings. Every listing in our index is pulled from a public, documented job board API. We do not scrape websites without permission, do not republish proprietary content, and do not modify employer copy.',
    h2Sources: 'Sources',
    bodySourcesIntro: 'The index is built from ten sources:',
    sources: [
      'Remotive · public API',
      'Remote OK · public API',
      'Arbeitnow · public API',
      'We Work Remotely · public RSS feeds',
      'Himalayas · public API',
      'Jobicy · public API',
      'The Muse · public API',
      'Hacker News "Who is hiring" · public Algolia API',
      'Working Nomads · public API',
      'Jobspresso · public RSS feeds',
    ],
    h2Updates: 'How often it updates',
    bodyUpdates: 'A scheduled job runs once a day at 04:00 UTC. It pulls fresh listings from all ten sources, deduplicates them, removes spam and expired entries, and commits the result. A new build deploys automatically after each commit.',
    h2Salaries: 'Salary numbers',
    bodySalaries: 'Salary pages compute median, average and percentile bands live from the postings that publish a salary range. Currency conversion is not applied; each currency is reported in isolation. Pages with too few data points display the global benchmark instead.',
    h2Applying: 'Applying',
    bodyApplying: "Every job links directly to the employer's application page. We do not collect applications. We do not intermediate communication between candidates and employers.",
    h2Contact: 'Contact',
    bodyContactPre: 'For corrections, takedown requests, or general questions, see the',
    bodyContactLink: 'contact page',
  },
  fr: {
    metaTitle: 'À propos de slateremote.com',
    metaDescription: "Comment slateremote.com est construit, quelles données il agrège, et comment l'index reste à jour.",
    h1: 'À propos de slateremote.com',
    subtitle: 'Un index curé des offres tech remote, agrégé depuis les APIs publiques des job boards.',
    h2What: 'De quoi il s\'agit',
    bodyWhat: "slateremote.com agrège des offres remote en ingénierie, data, design et produit. Chaque annonce de notre index provient d'une API publique et documentée. Nous ne scrapons pas de sites sans permission, nous ne republions pas de contenu propriétaire, et nous ne modifions pas le texte des employeurs.",
    h2Sources: 'Sources',
    bodySourcesIntro: "L'index est construit à partir de dix sources :",
    sources: [
      'Remotive · API publique',
      'Remote OK · API publique',
      'Arbeitnow · API publique',
      'We Work Remotely · flux RSS publics',
      'Himalayas · API publique',
      'Jobicy · API publique',
      'The Muse · API publique',
      'Hacker News "Who is hiring" · API Algolia publique',
      'Working Nomads · API publique',
      'Jobspresso · flux RSS publics',
    ],
    h2Updates: 'Fréquence de mise à jour',
    bodyUpdates: "Un job planifié tourne une fois par jour à 04:00 UTC. Il récupère les annonces fraîches des dix sources, les déduplique, supprime spam et entrées expirées, et commit le résultat. Un nouveau build se déploie automatiquement après chaque commit.",
    h2Salaries: 'Données salariales',
    bodySalaries: "Les pages salaires calculent médiane, moyenne et percentiles en direct depuis les annonces qui publient une fourchette. Aucune conversion de devise n'est appliquée ; chaque devise est rapportée isolément. Les pages avec trop peu de points affichent le benchmark global à la place.",
    h2Applying: 'Postuler',
    bodyApplying: "Chaque offre renvoie directement vers la page de candidature de l'employeur. Nous ne collectons pas les candidatures et n'intermédions pas la communication entre candidats et employeurs.",
    h2Contact: 'Contact',
    bodyContactPre: 'Pour corrections, demandes de retrait ou questions générales, voyez la',
    bodyContactLink: 'page contact',
  },
  es: {
    metaTitle: 'Acerca de slateremote.com',
    metaDescription: 'Cómo se construye slateremote.com, qué datos agrega y cómo se mantiene fresco el índice.',
    h1: 'Acerca de slateremote.com',
    subtitle: 'Un índice curado de empleos tech remotos, agregado desde APIs públicas de portales de empleo.',
    h2What: 'Qué es esto',
    bodyWhat: 'slateremote.com agrega ofertas remotas de ingeniería, datos, diseño y producto. Cada listado de nuestro índice viene de una API pública y documentada. No scrapeamos sitios sin permiso, no republicamos contenido propietario y no modificamos el texto del empleador.',
    h2Sources: 'Fuentes',
    bodySourcesIntro: 'El índice se construye con diez fuentes:',
    sources: [
      'Remotive · API pública',
      'Remote OK · API pública',
      'Arbeitnow · API pública',
      'We Work Remotely · feeds RSS públicos',
      'Himalayas · API pública',
      'Jobicy · API pública',
      'The Muse · API pública',
      'Hacker News "Who is hiring" · API pública Algolia',
      'Working Nomads · API pública',
      'Jobspresso · feeds RSS públicos',
    ],
    h2Updates: 'Frecuencia de actualización',
    bodyUpdates: 'Un job programado corre una vez al día a las 04:00 UTC. Trae anuncios frescos de las diez fuentes, deduplica, elimina spam y entradas expiradas, y commitea el resultado. Un nuevo build se despliega automáticamente tras cada commit.',
    h2Salaries: 'Datos salariales',
    bodySalaries: 'Las páginas de salarios calculan mediana, media y percentiles en vivo desde las ofertas que publican un rango. No se aplica conversión de moneda; cada moneda se reporta por separado. Las páginas con pocos puntos muestran el benchmark global.',
    h2Applying: 'Aplicar',
    bodyApplying: 'Cada oferta enlaza directo a la página de aplicación del empleador. No recogemos aplicaciones ni intermediamos la comunicación entre candidatos y empleadores.',
    h2Contact: 'Contacto',
    bodyContactPre: 'Para correcciones, retiradas o preguntas generales, ve a la',
    bodyContactLink: 'página de contacto',
  },
  de: {
    metaTitle: 'Über slateremote.com',
    metaDescription: 'Wie slateremote.com aufgebaut ist, welche Daten aggregiert werden und wie der Index aktuell bleibt.',
    h1: 'Über slateremote.com',
    subtitle: 'Ein kuratierter Index für Remote-Tech-Jobs, aggregiert aus öffentlichen Job-Board-APIs.',
    h2What: 'Was das ist',
    bodyWhat: 'slateremote.com aggregiert Remote-Stellen in Engineering, Data, Design und Product. Jedes Listing in unserem Index stammt aus einer öffentlichen, dokumentierten Job-Board-API. Wir scrapen keine Websites ohne Erlaubnis, veröffentlichen keinen proprietären Content erneut und ändern keinen Arbeitgeber-Text.',
    h2Sources: 'Quellen',
    bodySourcesIntro: 'Der Index wird aus zehn Quellen gebaut:',
    sources: [
      'Remotive · öffentliche API',
      'Remote OK · öffentliche API',
      'Arbeitnow · öffentliche API',
      'We Work Remotely · öffentliche RSS-Feeds',
      'Himalayas · öffentliche API',
      'Jobicy · öffentliche API',
      'The Muse · öffentliche API',
      'Hacker News "Who is hiring" · öffentliche Algolia API',
      'Working Nomads · öffentliche API',
      'Jobspresso · öffentliche RSS-Feeds',
    ],
    h2Updates: 'Wie oft aktualisiert wird',
    bodyUpdates: 'Ein geplanter Job läuft einmal täglich um 04:00 UTC. Er holt frische Listings aus allen zehn Quellen, dedupliziert, entfernt Spam und abgelaufene Einträge und committet das Ergebnis. Ein neuer Build wird nach jedem Commit automatisch deployed.',
    h2Salaries: 'Gehaltszahlen',
    bodySalaries: 'Gehaltsseiten berechnen Median, Durchschnitt und Perzentile live aus den Inseraten, die eine Gehaltsspanne veröffentlichen. Es wird keine Währungsumrechnung angewandt; jede Währung wird isoliert berichtet. Seiten mit zu wenig Datenpunkten zeigen stattdessen den globalen Benchmark.',
    h2Applying: 'Bewerben',
    bodyApplying: 'Jeder Job verlinkt direkt auf die Bewerbungsseite des Arbeitgebers. Wir sammeln keine Bewerbungen und vermitteln keine Kommunikation zwischen Kandidaten und Arbeitgebern.',
    h2Contact: 'Kontakt',
    bodyContactPre: 'Für Korrekturen, Löschanfragen oder allgemeine Fragen siehe die',
    bodyContactLink: 'Kontaktseite',
  },
  pt: {
    metaTitle: 'Sobre o slateremote.com',
    metaDescription: 'Como o slateremote.com é construído, que dados agrega e como o índice se mantém atualizado.',
    h1: 'Sobre o slateremote.com',
    subtitle: 'Um índice curado de vagas tech remotas, agregado de APIs públicas de portais de emprego.',
    h2What: 'O que é isso',
    bodyWhat: 'slateremote.com agrega vagas remotas em engenharia, dados, design e produto. Cada anúncio do nosso índice vem de uma API pública e documentada. Não fazemos scraping sem permissão, não republicamos conteúdo proprietário e não modificamos o texto do empregador.',
    h2Sources: 'Fontes',
    bodySourcesIntro: 'O índice é construído a partir de dez fontes:',
    sources: [
      'Remotive · API pública',
      'Remote OK · API pública',
      'Arbeitnow · API pública',
      'We Work Remotely · feeds RSS públicos',
      'Himalayas · API pública',
      'Jobicy · API pública',
      'The Muse · API pública',
      'Hacker News "Who is hiring" · API pública Algolia',
      'Working Nomads · API pública',
      'Jobspresso · feeds RSS públicos',
    ],
    h2Updates: 'Frequência de atualização',
    bodyUpdates: 'Um job agendado roda uma vez por dia às 04:00 UTC. Busca anúncios frescos das dez fontes, deduplica, remove spam e entradas expiradas, e commita o resultado. Um novo build sobe automaticamente após cada commit.',
    h2Salaries: 'Dados salariais',
    bodySalaries: 'As páginas de salário calculam mediana, média e percentis ao vivo a partir das vagas que publicam uma faixa. Conversão de moeda não é aplicada; cada moeda é reportada isoladamente. Páginas com poucos dados mostram o benchmark global.',
    h2Applying: 'Candidatura',
    bodyApplying: 'Cada vaga liga direto à página de candidatura do empregador. Não coletamos candidaturas nem intermediamos a comunicação entre candidatos e empregadores.',
    h2Contact: 'Contato',
    bodyContactPre: 'Para correções, pedidos de remoção ou perguntas gerais, veja a',
    bodyContactLink: 'página de contato',
  },
  it: {
    metaTitle: 'Su slateremote.com',
    metaDescription: 'Come è costruito slateremote.com, quali dati aggrega e come mantiene fresco l\'indice.',
    h1: 'Su slateremote.com',
    subtitle: 'Un indice curato di lavori tech remote, aggregato dalle API pubbliche delle job board.',
    h2What: 'Cos\'è',
    bodyWhat: 'slateremote.com aggrega offerte remote in ingegneria, dati, design e prodotto. Ogni annuncio nel nostro indice viene da un\'API pubblica e documentata. Non facciamo scraping senza permesso, non ripubblichiamo contenuto proprietario e non modifichiamo il testo del datore di lavoro.',
    h2Sources: 'Fonti',
    bodySourcesIntro: 'L\'indice è costruito da dieci fonti:',
    sources: [
      'Remotive · API pubblica',
      'Remote OK · API pubblica',
      'Arbeitnow · API pubblica',
      'We Work Remotely · feed RSS pubblici',
      'Himalayas · API pubblica',
      'Jobicy · API pubblica',
      'The Muse · API pubblica',
      'Hacker News "Who is hiring" · API pubblica Algolia',
      'Working Nomads · API pubblica',
      'Jobspresso · feed RSS pubblici',
    ],
    h2Updates: 'Frequenza di aggiornamento',
    bodyUpdates: 'Un job pianificato gira una volta al giorno alle 04:00 UTC. Recupera annunci freschi dalle dieci fonti, deduplica, rimuove spam e voci scadute, e committa il risultato. Un nuovo build viene deployato automaticamente dopo ogni commit.',
    h2Salaries: 'Dati salariali',
    bodySalaries: 'Le pagine sui salari calcolano mediana, media e percentili dal vivo dagli annunci che pubblicano una fascia. Non viene applicata conversione di valuta; ogni valuta è riportata isolatamente. Le pagine con pochi punti mostrano il benchmark globale.',
    h2Applying: 'Candidarsi',
    bodyApplying: 'Ogni lavoro rimanda direttamente alla pagina di candidatura del datore di lavoro. Non raccogliamo candidature né intermediamo la comunicazione tra candidati e datori di lavoro.',
    h2Contact: 'Contatto',
    bodyContactPre: 'Per correzioni, richieste di rimozione o domande generali, vedi la',
    bodyContactLink: 'pagina contatti',
  },
  pl: {
    metaTitle: 'O slateremote.com',
    metaDescription: 'Jak zbudowany jest slateremote.com, jakie dane agreguje i jak utrzymuje świeży indeks.',
    h1: 'O slateremote.com',
    subtitle: 'Wyselekcjonowany indeks zdalnych ofert tech, agregowany z publicznych API portali pracy.',
    h2What: 'Czym to jest',
    bodyWhat: 'slateremote.com agreguje zdalne oferty w inżynierii, danych, designie i produktach. Każde ogłoszenie w naszym indeksie pochodzi z publicznego, udokumentowanego API portalu pracy. Nie scrapujemy stron bez pozwolenia, nie republikujemy treści zastrzeżonych i nie modyfikujemy tekstu pracodawcy.',
    h2Sources: 'Źródła',
    bodySourcesIntro: 'Indeks zbudowany jest z dziesięciu źródeł:',
    sources: [
      'Remotive · publiczne API',
      'Remote OK · publiczne API',
      'Arbeitnow · publiczne API',
      'We Work Remotely · publiczne kanały RSS',
      'Himalayas · publiczne API',
      'Jobicy · publiczne API',
      'The Muse · publiczne API',
      'Hacker News "Who is hiring" · publiczne API Algolia',
      'Working Nomads · publiczne API',
      'Jobspresso · publiczne kanały RSS',
    ],
    h2Updates: 'Częstotliwość aktualizacji',
    bodyUpdates: 'Zaplanowany job uruchamia się raz dziennie o 04:00 UTC. Pobiera świeże ogłoszenia z dziesięciu źródeł, deduplikuje je, usuwa spam i wygasłe wpisy, i commitnie wynik. Nowy build wdraża się automatycznie po każdym commitcie.',
    h2Salaries: 'Dane o wynagrodzeniach',
    bodySalaries: 'Strony wynagrodzeń liczą medianę, średnią i percentyle na żywo z ofert, które publikują widełki. Konwersja walut nie jest stosowana; każda waluta jest raportowana osobno. Strony z niewieloma punktami pokazują globalny benchmark.',
    h2Applying: 'Aplikowanie',
    bodyApplying: 'Każda oferta linkuje bezpośrednio do strony aplikacji pracodawcy. Nie zbieramy aplikacji i nie pośredniczymy w komunikacji między kandydatami a pracodawcami.',
    h2Contact: 'Kontakt',
    bodyContactPre: 'Dla poprawek, wniosków o usunięcie lub ogólnych pytań, zobacz',
    bodyContactLink: 'stronę kontaktu',
  },
};

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = COPY[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'about',
    title: c.metaTitle,
    description: c.metaDescription,
  });
}

export default function AboutPage({ params }: { params: { lang: Locale } }) {
  const c = COPY[params.lang];
  return (
    <article className="max-w-prose mx-auto space-y-6">
      <header className="border-b border-line pb-4">
        <h1 className="text-2xl md:text-3xl font-semibold">{c.h1}</h1>
        <p className="text-muted text-sm mt-2">{c.subtitle}</p>
      </header>

      <section className="prose-body text-[0.95rem] leading-relaxed space-y-4">
        <h2 className="text-lg font-semibold">{c.h2What}</h2>
        <p>{c.bodyWhat}</p>

        <h2 className="text-lg font-semibold">{c.h2Sources}</h2>
        <p>{c.bodySourcesIntro}</p>
        <ul>
          {c.sources.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold">{c.h2Updates}</h2>
        <p>{c.bodyUpdates}</p>

        <h2 className="text-lg font-semibold">{c.h2Salaries}</h2>
        <p>{c.bodySalaries}</p>

        <h2 className="text-lg font-semibold">{c.h2Applying}</h2>
        <p>{c.bodyApplying}</p>

        <h2 className="text-lg font-semibold">{c.h2Contact}</h2>
        <p>
          {c.bodyContactPre}{' '}
          <Link href={`/${params.lang}/contact`} className="text-forest hover:underline">
            {c.bodyContactLink}
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
