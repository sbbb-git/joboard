import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { JobCard } from '@/components/JobCard';
import { jobsByRole } from '@/lib/jobs';
import { ROLES, type Locale, type Role } from '@/lib/types';
import { LOCALES, t } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { roleLabel } from '@/lib/labels';
import { NomadCTA } from '@/components/NomadCTA';
import { AiToolsCTA } from '@/components/AiToolsCTA';
import { EarnWithAi } from '@/components/EarnWithAi';

export const dynamicParams = false;
export const revalidate = false;

const AI_ROLES = new Set<Role>(['ml-ai', 'data']);

type RoleCopy = {
  // The role label itself is already localised by roleLabel(); these only
  // supply the wording around it, which used to be English on all 7 locales.
  metaTitle: (role: string) => string;
  metaDescription: (role: string) => string;
  eyebrow: string;
  h1: (role: string) => string;
  openPositions: (n: number) => string;
};

const ROLE_I18N: Record<Locale, RoleCopy> = {
  en: {
    metaTitle: (r) => `Remote ${r} jobs, updated daily`,
    metaDescription: (r) =>
      `Browse open remote ${r} positions aggregated from public job board APIs. Filter by seniority, salary and timezone. Updated daily, free.`,
    eyebrow: 'Role',
    h1: (r) => `Remote ${r} jobs`,
    openPositions: (n) => `${n} open position${n === 1 ? '' : 's'}`,
  },
  fr: {
    metaTitle: (r) => `Offres d'emploi ${r} en remote`,
    metaDescription: (r) =>
      `Parcourez les offres remote de ${r} agrégées depuis les APIs publiques des job boards. Filtrez par niveau, salaire et fuseau horaire.`,
    eyebrow: 'Rôle',
    h1: (r) => `Offres ${r} en remote`,
    openPositions: (n) => `${n} poste${n === 1 ? '' : 's'} ouvert${n === 1 ? '' : 's'}`,
  },
  es: {
    metaTitle: (r) => `Empleos remotos de ${r}, al día`,
    metaDescription: (r) =>
      `Explora puestos remotos de ${r} agregados desde las APIs públicas de portales de empleo. Filtra por nivel, salario y franja horaria. Actualizado a diario.`,
    eyebrow: 'Rol',
    h1: (r) => `Empleos remotos de ${r}`,
    openPositions: (n) => `${n} puesto${n === 1 ? '' : 's'} abierto${n === 1 ? '' : 's'}`,
  },
  de: {
    metaTitle: (r) => `Remote-Jobs als ${r}, täglich neu`,
    metaDescription: (r) =>
      `Offene Remote-Stellen als ${r}, aggregiert aus öffentlichen Job-Board-APIs. Filtere nach Level, Gehalt und Zeitzone. Täglich aktualisiert.`,
    eyebrow: 'Rolle',
    h1: (r) => `Remote-Jobs als ${r}`,
    openPositions: (n) => `${n} offene Stelle${n === 1 ? '' : 'n'}`,
  },
  pt: {
    metaTitle: (r) => `Vagas remotas de ${r}, todo dia`,
    metaDescription: (r) =>
      `Veja as vagas remotas de ${r} agregadas das APIs públicas dos job boards. Filtre por senioridade, salário e fuso horário. Todo dia.`,
    eyebrow: 'Cargo',
    h1: (r) => `Vagas remotas de ${r}`,
    openPositions: (n) => `${n} vaga${n === 1 ? '' : 's'} aberta${n === 1 ? '' : 's'}`,
  },
  it: {
    metaTitle: (r) => `Offerte di lavoro remote per ${r}`,
    metaDescription: (r) =>
      `Sfoglia tutte le posizioni remote per ${r} aggregate dalle API pubbliche dei job board. Filtra per livello, stipendio, sede e fuso orario.`,
    eyebrow: 'Ruolo',
    h1: (r) => `Lavoro remote per ${r}`,
    openPositions: (n) =>
      `${n} posizione${n === 1 ? '' : 'i'} apert${n === 1 ? 'a' : 'e'}`,
  },
  pl: {
    metaTitle: (r) => `Praca zdalna: ${r}, aktualne oferty`,
    metaDescription: (r) =>
      `Przeglądaj aktualne zdalne oferty dla ${r} zebrane z publicznych API job boardów. Filtruj po poziomie, wynagrodzeniu i strefie czasowej.`,
    eyebrow: 'Rola',
    h1: (r) => `Praca zdalna: ${r}`,
    openPositions: (n) => `${n} otwart${n === 1 ? 'a oferta' : 'ych ofert'}`,
  },
};

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => ROLES.map((role) => ({ lang, role })));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; role: string };
}): Metadata {
  const role = roleLabel(params.lang, params.role);
  const c = ROLE_I18N[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: `jobs/${params.role}`,
    title: c.metaTitle(role),
    description: c.metaDescription(role),
  });
}

export default function RolePage({ params }: { params: { lang: Locale; role: string } }) {
  if (!ROLES.includes(params.role as Role)) notFound();
  const role = params.role as Role;
  const jobs = jobsByRole(role);
  const label = roleLabel(params.lang, role);
  const c = ROLE_I18N[params.lang];
  return (
    <div className="space-y-8">
      <header className="border-b border-line pb-5">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">{c.eyebrow}</p>
        <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1">
          {c.h1(label)}
        </h1>
        <p className="text-graphite text-sm mt-2">{c.openPositions(jobs.length)}</p>
      </header>

      {jobs.length === 0 ? (
        <p className="text-muted text-sm">{t(params.lang, 'list.empty')}</p>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {jobs.slice(0, 60).map((j) => (
            <JobCard key={j.id} job={j} locale={params.lang} />
          ))}
        </div>
      )}

      <NomadCTA context={{ type: 'role', label }}  locale={params.lang} />
      {AI_ROLES.has(role) && (
        <>
          <AiToolsCTA context={{ type: 'role', label }}  locale={params.lang} />
          <EarnWithAi locale={params.lang} />
        </>
      )}
    </div>
  );
}
