import type { Metadata } from 'next';
import { JobSearch } from '@/components/JobSearch';
import { allJobs } from '@/lib/jobs';
import { t } from '@/lib/i18n';
import { buildMetadata, itemListJsonLd, absoluteUrl } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

type JobsCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: (n: string) => string;
};

const COPY: Record<Locale, JobsCopy> = {
  en: {
    metaTitle: 'Search remote tech jobs',
    metaDescription:
      'Filter every active remote tech job in our index by role, country, seniority, employment type, and salary. Updated daily.',
    eyebrow: 'Search',
    intro: (n) =>
      `${n} active remote tech jobs. Filter by role, country, level, contract type and salary, all in the browser. No signup needed.`,
  },
  fr: {
    metaTitle: 'Rechercher des offres tech remote',
    metaDescription:
      'Filtrez toutes les offres tech remote actives de notre index par rôle, pays, niveau, type de contrat et salaire. Mis à jour chaque jour.',
    eyebrow: 'Recherche',
    intro: (n) =>
      `${n} offres tech remote actives. Filtrez par rôle, pays, niveau, type de contrat et salaire, le tout dans le navigateur. Sans inscription.`,
  },
  es: {
    metaTitle: 'Buscar empleos tech remotos',
    metaDescription:
      'Filtra cada empleo tech remoto activo de nuestro índice por rol, país, nivel, tipo de empleo y salario. Actualizado cada día.',
    eyebrow: 'Búsqueda',
    intro: (n) =>
      `${n} empleos tech remotos activos. Filtra por rol, país, nivel, tipo de contrato y salario, todo en el navegador. Sin registro.`,
  },
  de: {
    metaTitle: 'Remote-Tech-Jobs suchen',
    metaDescription:
      'Filtere jeden aktiven Remote-Tech-Job in unserem Index nach Rolle, Land, Level, Anstellungsart und Gehalt. Täglich aktualisiert.',
    eyebrow: 'Suche',
    intro: (n) =>
      `${n} aktive Remote-Tech-Jobs. Filtere nach Rolle, Land, Level, Vertragsart und Gehalt, alles im Browser. Keine Anmeldung nötig.`,
  },
  pt: {
    metaTitle: 'Buscar vagas tech remotas',
    metaDescription:
      'Filtre cada vaga tech remota ativa do nosso índice por cargo, país, nível, tipo de contratação e salário. Atualizado todo dia.',
    eyebrow: 'Busca',
    intro: (n) =>
      `${n} vagas tech remotas ativas. Filtre por cargo, país, nível, tipo de contrato e salário, tudo no navegador. Sem cadastro.`,
  },
  it: {
    metaTitle: 'Cerca lavori tech remote',
    metaDescription:
      'Filtra ogni lavoro tech remote attivo nel nostro indice per ruolo, paese, livello, tipo di contratto e stipendio. Aggiornato ogni giorno.',
    eyebrow: 'Ricerca',
    intro: (n) =>
      `${n} lavori tech remote attivi. Filtra per ruolo, paese, livello, tipo di contratto e stipendio, tutto nel browser. Nessuna registrazione.`,
  },
  pl: {
    metaTitle: 'Szukaj zdalnych ofert tech',
    metaDescription:
      'Filtruj każdą aktywną zdalną ofertę tech w naszym indeksie według roli, kraju, poziomu, typu zatrudnienia i wynagrodzenia. Aktualizowane codziennie.',
    eyebrow: 'Szukaj',
    intro: (n) =>
      `${n} aktywnych zdalnych ofert tech. Filtruj według roli, kraju, poziomu, typu umowy i wynagrodzenia, wszystko w przeglądarce. Bez rejestracji.`,
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
    </div>
  );
}
