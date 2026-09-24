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
