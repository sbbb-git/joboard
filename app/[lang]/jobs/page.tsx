import type { Metadata } from 'next';
import Link from 'next/link';
import { JobSearch } from '@/components/JobSearch';
import { allJobs } from '@/lib/jobs';
import { t, localePath } from '@/lib/i18n';
import { buildMetadata, itemListJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

type JobsCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: (n: string) => string;
  recentHeading: string;
  recentIntro: string;
};

const COPY: Record<Locale, JobsCopy> = {
  en: {
    metaTitle: 'Search remote tech jobs',
    metaDescription:
      'Filter every active remote tech job in our index by role, country, seniority, employment type, and salary. Updated weekly.',
    eyebrow: 'Search',
    intro: (n) =>
      `${n} active remote tech jobs. Filter by role, country, level, contract type and salary, all in the browser. No signup needed.`,
    recentHeading: 'Latest remote tech jobs',
    recentIntro: 'The most recently posted roles in the index. Use the filters above to search all of them.',
  },
  fr: {
    metaTitle: 'Rechercher des offres tech remote',
    metaDescription:
      'Filtrez toutes les offres tech remote actives de notre index par rôle, pays, niveau, type de contrat et salaire. Mis à jour chaque semaine.',
    eyebrow: 'Recherche',
    intro: (n) =>
      `${n} offres tech remote actives. Filtrez par rôle, pays, niveau, type de contrat et salaire, le tout dans le navigateur. Sans inscription.`,
    recentHeading: 'Dernières offres tech remote',
    recentIntro: "Les postes les plus récemment publiés dans l'index. Utilisez les filtres ci-dessus pour tout chercher.",
  },
  de: {
    metaTitle: 'Remote-Tech-Jobs suchen',
    metaDescription:
      'Filtere jeden aktiven Remote-Tech-Job in unserem Index nach Rolle, Land, Level, Anstellungsart und Gehalt. Wöchentlich aktualisiert.',
    eyebrow: 'Suche',
    intro: (n) =>
      `${n} aktive Remote-Tech-Jobs. Filtere nach Rolle, Land, Level, Vertragsart und Gehalt, alles im Browser. Keine Anmeldung nötig.`,
    recentHeading: 'Neueste Remote-Tech-Jobs',
    recentIntro: 'Die zuletzt veröffentlichten Stellen im Index. Nutzen Sie die Filter oben, um alle zu durchsuchen.',
  },
};

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const c = COPY[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: 'jobs',
    title: c.metaTitle,
    description: c.metaDescription,
  });
}

export default function JobsList({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const c = COPY[locale];
  const all = allJobs();
  // Every active posting, not just the most recent. This is the one page that
  // links them all, so capping it orphans whatever falls past the cap: at 200,
  // 51 postings per locale were reachable only through their single-opening
  // company page, and those pages are no longer built. Job pages carry ~90% of
  // search impressions, so none can be left without an inbound link.
  const recent = [...all].sort((a, b) => Date.parse(b.postedAt) - Date.parse(a.postedAt));
  const itemList = itemListJsonLd(
    all.slice(0, 30).map((j) => ({
      name: `${j.title} at ${j.company}`,
      url: absoluteUrl(`/${locale}/job/${j.id}`),
    })),
  );
  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <header className="border-b border-line pb-5">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1">
          {t(locale, 'nav.jobs')}
        </h1>
        <p className="text-graphite text-base mt-3 max-w-prose">
          {c.intro(all.length.toLocaleString())}
        </p>
      </header>
      <JobSearch locale={locale} />

      <section className="border-t border-line pt-8">
        <h2 className="text-lg font-semibold text-ink">{c.recentHeading}</h2>
        <p className="text-sm text-muted mt-1 max-w-prose">{c.recentIntro}</p>
        <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
          {recent.map((j) => (
            <li key={j.id} className="text-sm">
              <Link
                href={localePath(locale, `job/${j.id}`)}
                className="text-graphite hover:text-ink hover:underline"
              >
                {j.title}
              </Link>{' '}
              <span className="text-muted">· {j.company}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
