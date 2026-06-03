import type { Locale } from '@/lib/types';

interface Faq {
  q: string;
  a: string;
}

const FAQS_BY_LOCALE: Record<Locale, { heading: string; eyebrow: string; faqs: Faq[] }> = {
  en: {
    eyebrow: 'FAQ',
    heading: 'Frequently asked questions',
    faqs: [
      { q: 'How often is the index updated?', a: 'Every day at 04:00 UTC. A scheduled job pulls fresh listings from ten public job board APIs, dedupes them, removes spam and expired entries, and rebuilds the site.' },
      { q: 'Where do the jobs come from?', a: 'Ten public sources: Remotive, Remote OK, Arbeitnow, We Work Remotely, Himalayas, Jobicy, The Muse, Hacker News "Who is hiring", Working Nomads and Jobspresso. We only pull from documented public APIs.' },
      { q: 'Is it free to browse?', a: 'Yes. Browsing every job, salary page, city profile and guide is free, with no signup required. Employers can pay for featured placement; candidates never pay.' },
      { q: 'How do you compute the salary numbers?', a: 'Live from postings that publish a salary range. Each posting contributes the midpoint of its band. Percentile values come from the sorted distribution. Currency conversion is not applied; each currency is computed in isolation.' },
      { q: 'How do I apply to a job?', a: "Every listing links directly to the employer's own application page. We do not collect applications, do not intermediate, and never sell your data." },
      { q: 'Can I get email alerts when matching jobs are posted?', a: 'Newsletter signup is live for weekly digests. Granular per-criteria email alerts (specific role, country, salary minimum) are in the roadmap.' },
      { q: 'How do I post a job?', a: 'If your job is already listed on any of the ten source boards, it lands here automatically within 24 hours at no cost. For featured placement, see the Post a job page.' },
    ],
  },
  fr: {
    eyebrow: 'FAQ',
    heading: 'Questions fréquentes',
    faqs: [
      { q: "À quelle fréquence l'index est-il mis à jour ?", a: 'Tous les jours à 04:00 UTC. Un job planifié récupère les nouvelles offres depuis dix APIs publiques, déduplique, retire spam et entrées expirées, et reconstruit le site.' },
      { q: "D'où viennent les offres ?", a: 'Dix sources publiques : Remotive, Remote OK, Arbeitnow, We Work Remotely, Himalayas, Jobicy, The Muse, Hacker News "Who is hiring", Working Nomads et Jobspresso. Uniquement depuis des APIs publiques documentées.' },
      { q: 'Est-ce gratuit ?', a: "Oui. Parcourir les offres, les pages salaires, les profils de villes et les guides est gratuit, sans inscription. Les employeurs peuvent payer pour une mise en avant ; les candidats ne paient jamais." },
      { q: 'Comment calculez-vous les salaires ?', a: 'En direct depuis les annonces qui publient une fourchette. Chaque annonce contribue le milieu de sa fourchette. Les percentiles viennent de la distribution triée. Aucune conversion de devise ; chaque devise est calculée isolément.' },
      { q: 'Comment postuler à une offre ?', a: "Chaque annonce renvoie directement vers la page de candidature de l'employeur. Nous ne collectons pas les candidatures, n'intermédions pas, et ne vendons jamais vos données." },
      { q: 'Puis-je recevoir des alertes email ?', a: "L'inscription newsletter est en ligne pour des digests hebdomadaires. Les alertes par critère (rôle, pays, salaire mini) sont dans la roadmap." },
      { q: 'Comment publier une offre ?', a: 'Si votre offre est déjà listée sur un des dix job boards sources, elle apparaît ici sous 24 h sans frais. Pour une mise en avant payante, voir la page Publier une offre.' },
    ],
  },
  es: {
    eyebrow: 'FAQ',
    heading: 'Preguntas frecuentes',
    faqs: [
      { q: '¿Con qué frecuencia se actualiza el índice?', a: 'Todos los días a las 04:00 UTC. Un job programado tira ofertas frescas desde diez APIs públicas, deduplica, retira spam y entradas vencidas, y reconstruye el sitio.' },
      { q: '¿De dónde vienen las ofertas?', a: 'Diez fuentes públicas: Remotive, Remote OK, Arbeitnow, We Work Remotely, Himalayas, Jobicy, The Muse, Hacker News "Who is hiring", Working Nomads y Jobspresso. Solo desde APIs públicas documentadas.' },
      { q: '¿Es gratis navegar?', a: 'Sí. Navegar cada vacante, página de salario, perfil de ciudad y guía es gratis, sin registro. Los empleadores pueden pagar por colocación destacada; los candidatos nunca pagan.' },
      { q: '¿Cómo calculan los salarios?', a: 'En vivo desde anuncios que publican un rango. Cada anuncio contribuye el punto medio de su banda. Percentiles desde la distribución ordenada. Sin conversión de moneda; cada moneda se calcula aislada.' },
      { q: '¿Cómo aplico a un empleo?', a: 'Cada listado enlaza directamente a la página de aplicación del empleador. No recolectamos aplicaciones, no intermediamos, y nunca vendemos tus datos.' },
      { q: '¿Puedo recibir alertas por email?', a: 'El newsletter está vivo para digests semanales. Alertas granulares por criterio (rol, país, salario mínimo) están en la roadmap.' },
      { q: '¿Cómo publico una oferta?', a: 'Si tu oferta ya está listada en uno de los diez boards fuente, aparece aquí en 24 h sin coste. Para colocación destacada, ve a la página Publicar oferta.' },
    ],
  },
  de: {
    eyebrow: 'FAQ',
    heading: 'Häufige Fragen',
    faqs: [
      { q: 'Wie oft wird der Index aktualisiert?', a: 'Jeden Tag um 04:00 UTC. Ein geplanter Job zieht frische Listings aus zehn öffentlichen APIs, dedupliziert, entfernt Spam und abgelaufene Einträge und baut die Site neu.' },
      { q: 'Woher kommen die Jobs?', a: 'Zehn öffentliche Quellen: Remotive, Remote OK, Arbeitnow, We Work Remotely, Himalayas, Jobicy, The Muse, Hacker News "Who is hiring", Working Nomads und Jobspresso. Nur aus dokumentierten öffentlichen APIs.' },
      { q: 'Ist die Nutzung kostenlos?', a: 'Ja. Jeden Job, jede Gehaltsseite, jedes Stadtprofil und jeden Guide zu durchsuchen ist kostenlos, ohne Anmeldung. Arbeitgeber können für hervorgehobene Platzierung zahlen; Kandidaten zahlen nie.' },
      { q: 'Wie werden die Gehaltszahlen berechnet?', a: 'Live aus Anzeigen, die eine Gehaltsspanne veröffentlichen. Jede Anzeige steuert den Mittelpunkt ihrer Spanne bei. Perzentile aus der sortierten Verteilung. Keine Währungsumrechnung; jede Währung wird isoliert berechnet.' },
      { q: 'Wie bewerbe ich mich?', a: 'Jedes Listing verlinkt direkt zur Bewerbungsseite des Arbeitgebers. Wir sammeln keine Bewerbungen, vermitteln nicht und verkaufen Ihre Daten nie.' },
      { q: 'Kann ich E-Mail-Benachrichtigungen erhalten?', a: 'Newsletter-Anmeldung ist live für wöchentliche Digests. Granulare Kriterien-Alerts (spezifische Rolle, Land, Mindestgehalt) sind in der Roadmap.' },
      { q: 'Wie poste ich einen Job?', a: 'Wenn Ihr Job bereits auf einem der zehn Quellen-Boards gelistet ist, erscheint er hier automatisch in 24 h kostenlos. Für hervorgehobene Platzierung siehe die Job-posten-Seite.' },
    ],
  },
  pt: {
    eyebrow: 'FAQ',
    heading: 'Perguntas frequentes',
    faqs: [
      { q: 'Com que frequência o índice é atualizado?', a: 'Todos os dias às 04:00 UTC. Um job agendado puxa anúncios frescos de dez APIs públicas, deduplica, remove spam e entradas vencidas, e reconstrói o site.' },
      { q: 'De onde vêm as vagas?', a: 'Dez fontes públicas: Remotive, Remote OK, Arbeitnow, We Work Remotely, Himalayas, Jobicy, The Muse, Hacker News "Who is hiring", Working Nomads e Jobspresso. Apenas de APIs públicas documentadas.' },
      { q: 'É gratuito navegar?', a: 'Sim. Navegar cada vaga, página de salário, perfil de cidade e guia é grátis, sem cadastro. Empregadores podem pagar por destaque; candidatos nunca pagam.' },
      { q: 'Como vocês calculam os salários?', a: 'Ao vivo de anúncios que publicam uma faixa. Cada anúncio contribui com o ponto médio de sua faixa. Percentis vêm da distribuição ordenada. Sem conversão de moeda; cada moeda é calculada isoladamente.' },
      { q: 'Como me candidato a uma vaga?', a: 'Cada listagem liga direto à página de candidatura do empregador. Não coletamos candidaturas, não intermediamos, e nunca vendemos seus dados.' },
      { q: 'Posso receber alertas por email?', a: 'Inscrição na newsletter está ativa para digests semanais. Alertas granulares por critério (cargo, país, salário mínimo) estão na roadmap.' },
      { q: 'Como publico uma vaga?', a: 'Se sua vaga já está listada em um dos dez boards fonte, aparece aqui em 24 h sem custo. Para destaque pago, veja a página Publicar vaga.' },
    ],
  },
  it: {
    eyebrow: 'FAQ',
    heading: 'Domande frequenti',
    faqs: [
      { q: "Quanto spesso viene aggiornato l'indice?", a: "Ogni giorno alle 04:00 UTC. Un job pianificato preleva nuovi annunci da dieci API pubbliche, deduplica, rimuove spam e voci scadute, e ricostruisce il sito." },
      { q: 'Da dove vengono i lavori?', a: 'Dieci fonti pubbliche: Remotive, Remote OK, Arbeitnow, We Work Remotely, Himalayas, Jobicy, The Muse, Hacker News "Who is hiring", Working Nomads e Jobspresso. Solo da API pubbliche documentate.' },
      { q: 'È gratuito navigare?', a: 'Sì. Sfogliare ogni annuncio, pagina di stipendi, profilo città e guida è gratuito, senza registrazione. I datori di lavoro possono pagare per visibilità; i candidati non pagano mai.' },
      { q: 'Come calcolate gli stipendi?', a: 'In tempo reale dagli annunci che pubblicano una fascia. Ogni annuncio contribuisce con il punto medio della sua fascia. I percentili dalla distribuzione ordinata. Nessuna conversione valuta; ogni valuta è calcolata isolatamente.' },
      { q: 'Come mi candido a un lavoro?', a: 'Ogni annuncio rimanda direttamente alla pagina di candidatura del datore di lavoro. Non raccogliamo candidature, non intermediamo, e non vendiamo mai i tuoi dati.' },
      { q: 'Posso ricevere avvisi via email?', a: "L'iscrizione alla newsletter è attiva per digest settimanali. Avvisi granulari per criterio (ruolo specifico, paese, stipendio minimo) sono in roadmap." },
      { q: 'Come pubblico un lavoro?', a: 'Se il tuo lavoro è già su una delle dieci board sorgente, appare qui automaticamente entro 24 h gratis. Per visibilità in evidenza, vedi la pagina Pubblica un lavoro.' },
    ],
  },
  pl: {
    eyebrow: 'FAQ',
    heading: 'Często zadawane pytania',
    faqs: [
      { q: 'Jak często aktualizowany jest indeks?', a: 'Każdego dnia o 04:00 UTC. Zaplanowany job pobiera świeże ogłoszenia z dziesięciu publicznych API, deduplikuje, usuwa spam i wygasłe wpisy, i przebudowuje stronę.' },
      { q: 'Skąd pochodzą oferty?', a: 'Dziesięć publicznych źródeł: Remotive, Remote OK, Arbeitnow, We Work Remotely, Himalayas, Jobicy, The Muse, Hacker News "Who is hiring", Working Nomads i Jobspresso. Tylko z udokumentowanych publicznych API.' },
      { q: 'Czy przeglądanie jest darmowe?', a: 'Tak. Przeglądanie każdej oferty, strony wynagrodzeń, profilu miasta i poradnika jest darmowe, bez rejestracji. Pracodawcy mogą zapłacić za wyróżnienie; kandydaci nigdy nie płacą.' },
      { q: 'Jak obliczacie liczby wynagrodzeń?', a: 'Na żywo z ogłoszeń, które publikują widełki. Każde ogłoszenie wnosi punkt środkowy swoich widełek. Wartości percentyli z posortowanego rozkładu. Konwersja walut nie jest stosowana; każda waluta jest obliczana osobno.' },
      { q: 'Jak aplikuję na ofertę?', a: 'Każda oferta linkuje bezpośrednio do strony aplikacji pracodawcy. Nie zbieramy aplikacji, nie pośredniczymy, i nigdy nie sprzedajemy twoich danych.' },
      { q: 'Czy mogę dostawać alerty mailowe?', a: 'Zapis do newslettera działa dla cotygodniowych digestów. Szczegółowe alerty po kryterium (konkretna rola, kraj, minimum płacowe) są w roadmapie.' },
      { q: 'Jak opublikować ofertę?', a: 'Jeśli twoja oferta jest już wymieniona na jednym z dziesięciu źródeł, pojawia się tu automatycznie w 24 h za darmo. Dla płatnego wyróżnienia zobacz stronę Opublikuj ofertę.' },
    ],
  },
};

export function HomeFaq({ locale = 'en' }: { locale?: Locale }) {
  const c = FAQS_BY_LOCALE[locale];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-5">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink mt-1">
          {c.heading}
        </h2>
      </div>
      <div className="space-y-3">
        {c.faqs.map((f, i) => (
          <details
            key={i}
            className="group rounded-xl border border-line bg-paper shadow-soft open:shadow-lift transition"
          >
            <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4 font-semibold text-ink">
              <span>{f.q}</span>
              <span className="flex-shrink-0 w-5 h-5 rounded-full border border-line flex items-center justify-center text-[11px] text-muted group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="px-5 pb-4 text-sm text-graphite leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
