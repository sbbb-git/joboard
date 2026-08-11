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
      'Filter every active remote tech job in our index by role, country, seniority, employment type, and salary. Updated daily.',
    eyebrow: 'Search',
    intro: (n) =>
      `${n} active remote tech jobs. Filter by role, country, level, contract type and salary, all in the browser. No signup needed.`,
    recentHeading: 'Latest remote tech jobs',
    recentIntro: 'The most recently posted roles in the index. Use the filters above to search all of them.',
  },
  fr: {
    metaTitle: 'Rechercher des offres tech remote',
    metaDescription:
      'Filtrez toutes les offres tech remote actives de notre index par rôle, pays, niveau, type de contrat et salaire. Mis à jour chaque jour.',
    eyebrow: 'Recherche',
    intro: (n) =>
      `${n} offres tech remote actives. Filtrez par rôle, pays, niveau, type de contrat et salaire, le tout dans le navigateur. Sans inscription.`,
    recentHeading: 'Dernières offres tech remote',
    recentIntro: "Les postes les plus récemment publiés dans l'index. Utilisez les filtres ci-dessus pour tout chercher.",
  },
  es: {
    metaTitle: 'Buscar empleos tech remotos',
    metaDescription:
      'Filtra cada empleo tech remoto activo de nuestro índice por rol, país, nivel, tipo de empleo y salario. Actualizado cada día.',
    eyebrow: 'Búsqueda',
    intro: (n) =>
      `${n} empleos tech remotos activos. Filtra por rol, país, nivel, tipo de contrato y salario, todo en el navegador. Sin registro.`,
    recentHeading: 'Últimos empleos tech remotos',
    recentIntro: 'Los puestos publicados más recientemente en el índice. Usa los filtros de arriba para buscarlos todos.',
  },
  de: {
    metaTitle: 'Remote-Tech-Jobs suchen',
    metaDescription:
      'Filtere jeden aktiven Remote-Tech-Job in unserem Index nach Rolle, Land, Level, Anstellungsart und Gehalt. Täglich aktualisiert.',
    eyebrow: 'Suche',
    intro: (n) =>
      `${n} aktive Remote-Tech-Jobs. Filtere nach Rolle, Land, Level, Vertragsart und Gehalt, alles im Browser. Keine Anmeldung nötig.`,
    recentHeading: 'Neueste Remote-Tech-Jobs',
    recentIntro: 'Die zuletzt veröffentlichten Stellen im Index. Nutzen Sie die Filter oben, um alle zu durchsuchen.',
  },
  pt: {
    metaTitle: 'Buscar vagas tech remotas',
    metaDescription:
      'Filtre cada vaga tech remota ativa do nosso índice por cargo, país, nível, tipo de contratação e salário. Atualizado todo dia.',
    eyebrow: 'Busca',
    intro: (n) =>
      `${n} vagas tech remotas ativas. Filtre por cargo, país, nível, tipo de contrato e salário, tudo no navegador. Sem cadastro.`,
    recentHeading: 'Vagas tech remotas mais recentes',
    recentIntro: 'As vagas publicadas mais recentemente no índice. Use os filtros acima para buscar todas.',
  },
  it: {
    metaTitle: 'Cerca lavori tech remote',
    metaDescription:
      'Filtra ogni lavoro tech remote attivo nel nostro indice per ruolo, paese, livello, tipo di contratto e stipendio. Aggiornato ogni giorno.',
    eyebrow: 'Ricerca',
    intro: (n) =>
      `${n} lavori tech remote attivi. Filtra per ruolo, paese, livello, tipo di contratto e stipendio, tutto nel browser. Nessuna registrazione.`,
    recentHeading: 'Ultimi lavori tech remote',
    recentIntro: "Le posizioni pubblicate più di recente nell'indice. Usa i filtri sopra per cercarle tutte.",
  },
  pl: {
    metaTitle: 'Szukaj zdalnych ofert tech',
    metaDescription:
      'Filtruj każdą aktywną zdalną ofertę tech w naszym indeksie według roli, kraju, poziomu, typu zatrudnienia i wynagrodzenia. Aktualizowane codziennie.',
    eyebrow: 'Szukaj',
    intro: (n) =>
      `${n} aktywnych zdalnych ofert tech. Filtruj według roli, kraju, poziomu, typu umowy i wynagrodzenia, wszystko w przeglądarce. Bez rejestracji.`,
    recentHeading: 'Najnowsze zdalne oferty tech',
    recentIntro: 'Ostatnio opublikowane oferty w indeksie. Użyj filtrów powyżej, aby przeszukać wszystkie.',
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
  const recent = [...all]
    .sort((a, b) => Date.parse(b.postedAt) - Date.parse(a.postedAt))
    .slice(0, 200);
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
