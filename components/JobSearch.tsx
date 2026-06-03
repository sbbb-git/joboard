'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { flagFor } from '@/lib/flags';
import { ROLES, type Locale, type Role, type Seniority } from '@/lib/types';
import { CompanyLogo } from './CompanyLogo';

type SearchStrings = {
  searchPlaceholder: string;
  clearSearch: string;
  today: string;
  pastWeek: string;
  pastMonth: string;
  fullTime: string;
  contract: string;
  partTime: string;
  intern: string;
  withSalary: string;
  allFilters: string;
  filtering: string;
  reset: string;
  resetAll: string;
  resetFilters: string;
  loading: string;
  job: string;
  jobs: string;
  of: string;
  noMatches: string;
  noMatchesBody: string;
  showMore: (n: number) => string;
  showCount: (n: number, label: string) => string;
  close: string;
  groupRole: string;
  groupCountry: string;
  groupSeniority: string;
  groupType: string;
  groupMinSalary: string;
  groupPostedWithin: string;
  groupOther: string;
  any: string;
  anyCountry: string;
  countriesRepresented: (n: number) => string;
  anytime: string;
  past24h: string;
  threeDays: string;
  oneWeek: string;
  twoWeeks: string;
  oneMonth: string;
  onlyWithSalary: string;
  newest: string;
  salaryDesc: string;
  salaryAsc: string;
  pastNd: (n: number) => string;
  todayRel: string;
};

const STR: Record<Locale, SearchStrings> = {
  en: {
    searchPlaceholder: 'Search role, company, skill…', clearSearch: 'Clear search',
    today: 'Today', pastWeek: 'Past week', pastMonth: 'Past month',
    fullTime: 'Full-time', contract: 'Contract', partTime: 'Part-time', intern: 'Intern',
    withSalary: 'With salary', allFilters: 'All filters', filtering: 'Filtering',
    reset: 'Reset', resetAll: 'Reset all', resetFilters: 'Reset filters',
    loading: 'Loading…', job: 'job', jobs: 'jobs', of: 'of',
    noMatches: 'No matches', noMatchesBody: 'Try removing a filter or two. New jobs land every day at 04:00 UTC.',
    showMore: (n) => `Show ${n} more`, showCount: (n, l) => `Show ${n.toLocaleString()} ${l}`,
    close: 'Close',
    groupRole: 'Role', groupCountry: 'Country', groupSeniority: 'Seniority', groupType: 'Type',
    groupMinSalary: 'Minimum salary', groupPostedWithin: 'Posted within', groupOther: 'Other',
    any: 'Any', anyCountry: 'Any country',
    countriesRepresented: (n) => `${n} represented`,
    anytime: 'Anytime', past24h: 'Past 24h', threeDays: '3 days', oneWeek: '1 week', twoWeeks: '2 weeks', oneMonth: '1 month',
    onlyWithSalary: 'Only jobs with published salary',
    newest: 'Newest', salaryDesc: 'Salary ↓', salaryAsc: 'Salary ↑',
    pastNd: (n) => `Past ${n}d`, todayRel: 'today',
  },
  fr: {
    searchPlaceholder: 'Rechercher rôle, entreprise, skill…', clearSearch: 'Effacer la recherche',
    today: "Aujourd'hui", pastWeek: '7 derniers jours', pastMonth: '30 derniers jours',
    fullTime: 'Temps plein', contract: 'Freelance', partTime: 'Temps partiel', intern: 'Stage',
    withSalary: 'Avec salaire', allFilters: 'Tous les filtres', filtering: 'Filtres actifs',
    reset: 'Effacer', resetAll: 'Tout effacer', resetFilters: 'Effacer les filtres',
    loading: 'Chargement…', job: 'offre', jobs: 'offres', of: 'sur',
    noMatches: 'Aucun résultat', noMatchesBody: "Essayez de retirer un filtre. De nouvelles offres arrivent chaque jour à 04:00 UTC.",
    showMore: (n) => `Afficher ${n} de plus`, showCount: (n, l) => `Afficher ${n.toLocaleString()} ${l}`,
    close: 'Fermer',
    groupRole: 'Rôle', groupCountry: 'Pays', groupSeniority: 'Niveau', groupType: 'Type',
    groupMinSalary: 'Salaire minimum', groupPostedWithin: 'Publié depuis', groupOther: 'Autre',
    any: 'Tous', anyCountry: 'Tous les pays',
    countriesRepresented: (n) => `${n} représentés`,
    anytime: 'À tout moment', past24h: '24h', threeDays: '3 jours', oneWeek: '1 semaine', twoWeeks: '2 semaines', oneMonth: '1 mois',
    onlyWithSalary: 'Uniquement avec salaire publié',
    newest: 'Plus récents', salaryDesc: 'Salaire ↓', salaryAsc: 'Salaire ↑',
    pastNd: (n) => `${n}j`, todayRel: "auj.",
  },
  es: {
    searchPlaceholder: 'Buscar rol, empresa, skill…', clearSearch: 'Limpiar búsqueda',
    today: 'Hoy', pastWeek: 'Última semana', pastMonth: 'Último mes',
    fullTime: 'Tiempo completo', contract: 'Freelance', partTime: 'Medio tiempo', intern: 'Prácticas',
    withSalary: 'Con salario', allFilters: 'Todos los filtros', filtering: 'Filtros activos',
    reset: 'Limpiar', resetAll: 'Limpiar todo', resetFilters: 'Limpiar filtros',
    loading: 'Cargando…', job: 'empleo', jobs: 'empleos', of: 'de',
    noMatches: 'Sin resultados', noMatchesBody: 'Intenta quitar un filtro. Nuevas vacantes llegan cada día a las 04:00 UTC.',
    showMore: (n) => `Mostrar ${n} más`, showCount: (n, l) => `Mostrar ${n.toLocaleString()} ${l}`,
    close: 'Cerrar',
    groupRole: 'Rol', groupCountry: 'País', groupSeniority: 'Nivel', groupType: 'Tipo',
    groupMinSalary: 'Salario mínimo', groupPostedWithin: 'Publicado en', groupOther: 'Otro',
    any: 'Cualquiera', anyCountry: 'Cualquier país',
    countriesRepresented: (n) => `${n} representados`,
    anytime: 'Cualquier momento', past24h: '24h', threeDays: '3 días', oneWeek: '1 semana', twoWeeks: '2 semanas', oneMonth: '1 mes',
    onlyWithSalary: 'Solo empleos con salario publicado',
    newest: 'Recientes', salaryDesc: 'Salario ↓', salaryAsc: 'Salario ↑',
    pastNd: (n) => `${n}d`, todayRel: 'hoy',
  },
  de: {
    searchPlaceholder: 'Rolle, Firma, Skill suchen…', clearSearch: 'Suche löschen',
    today: 'Heute', pastWeek: 'Letzte Woche', pastMonth: 'Letzter Monat',
    fullTime: 'Vollzeit', contract: 'Freelance', partTime: 'Teilzeit', intern: 'Praktikum',
    withSalary: 'Mit Gehalt', allFilters: 'Alle Filter', filtering: 'Aktive Filter',
    reset: 'Zurücksetzen', resetAll: 'Alle zurücksetzen', resetFilters: 'Filter zurücksetzen',
    loading: 'Lädt…', job: 'Job', jobs: 'Jobs', of: 'von',
    noMatches: 'Keine Treffer', noMatchesBody: 'Versuchen Sie, einen Filter zu entfernen. Neue Jobs kommen täglich um 04:00 UTC.',
    showMore: (n) => `${n} weitere anzeigen`, showCount: (n, l) => `${n.toLocaleString()} ${l} anzeigen`,
    close: 'Schließen',
    groupRole: 'Rolle', groupCountry: 'Land', groupSeniority: 'Level', groupType: 'Typ',
    groupMinSalary: 'Mindestgehalt', groupPostedWithin: 'Veröffentlicht in', groupOther: 'Sonstiges',
    any: 'Alle', anyCountry: 'Alle Länder',
    countriesRepresented: (n) => `${n} vertreten`,
    anytime: 'Jederzeit', past24h: '24h', threeDays: '3 Tage', oneWeek: '1 Woche', twoWeeks: '2 Wochen', oneMonth: '1 Monat',
    onlyWithSalary: 'Nur Jobs mit veröffentlichtem Gehalt',
    newest: 'Neueste', salaryDesc: 'Gehalt ↓', salaryAsc: 'Gehalt ↑',
    pastNd: (n) => `${n}T`, todayRel: 'heute',
  },
  pt: {
    searchPlaceholder: 'Buscar cargo, empresa, skill…', clearSearch: 'Limpar busca',
    today: 'Hoje', pastWeek: 'Última semana', pastMonth: 'Último mês',
    fullTime: 'Tempo integral', contract: 'Freelance', partTime: 'Meio período', intern: 'Estágio',
    withSalary: 'Com salário', allFilters: 'Todos os filtros', filtering: 'Filtros ativos',
    reset: 'Limpar', resetAll: 'Limpar tudo', resetFilters: 'Limpar filtros',
    loading: 'Carregando…', job: 'vaga', jobs: 'vagas', of: 'de',
    noMatches: 'Sem resultados', noMatchesBody: 'Tente remover um filtro. Novas vagas chegam todo dia às 04:00 UTC.',
    showMore: (n) => `Mostrar mais ${n}`, showCount: (n, l) => `Mostrar ${n.toLocaleString()} ${l}`,
    close: 'Fechar',
    groupRole: 'Cargo', groupCountry: 'País', groupSeniority: 'Senioridade', groupType: 'Tipo',
    groupMinSalary: 'Salário mínimo', groupPostedWithin: 'Publicada em', groupOther: 'Outro',
    any: 'Qualquer', anyCountry: 'Qualquer país',
    countriesRepresented: (n) => `${n} representados`,
    anytime: 'Qualquer momento', past24h: '24h', threeDays: '3 dias', oneWeek: '1 semana', twoWeeks: '2 semanas', oneMonth: '1 mês',
    onlyWithSalary: 'Apenas vagas com salário publicado',
    newest: 'Recentes', salaryDesc: 'Salário ↓', salaryAsc: 'Salário ↑',
    pastNd: (n) => `${n}d`, todayRel: 'hoje',
  },
  it: {
    searchPlaceholder: 'Cerca ruolo, azienda, skill…', clearSearch: 'Pulisci ricerca',
    today: 'Oggi', pastWeek: 'Ultima settimana', pastMonth: 'Ultimo mese',
    fullTime: 'Tempo pieno', contract: 'Freelance', partTime: 'Part-time', intern: 'Stage',
    withSalary: 'Con stipendio', allFilters: 'Tutti i filtri', filtering: 'Filtri attivi',
    reset: 'Resetta', resetAll: 'Resetta tutto', resetFilters: 'Resetta filtri',
    loading: 'Caricamento…', job: 'lavoro', jobs: 'lavori', of: 'di',
    noMatches: 'Nessun risultato', noMatchesBody: 'Prova a rimuovere un filtro. Nuovi annunci arrivano ogni giorno alle 04:00 UTC.',
    showMore: (n) => `Mostra altri ${n}`, showCount: (n, l) => `Mostra ${n.toLocaleString()} ${l}`,
    close: 'Chiudi',
    groupRole: 'Ruolo', groupCountry: 'Paese', groupSeniority: 'Seniority', groupType: 'Tipo',
    groupMinSalary: 'Stipendio minimo', groupPostedWithin: 'Pubblicato in', groupOther: 'Altro',
    any: 'Qualunque', anyCountry: 'Qualunque paese',
    countriesRepresented: (n) => `${n} rappresentati`,
    anytime: 'In qualsiasi momento', past24h: '24h', threeDays: '3 giorni', oneWeek: '1 settimana', twoWeeks: '2 settimane', oneMonth: '1 mese',
    onlyWithSalary: 'Solo lavori con stipendio pubblicato',
    newest: 'Più recenti', salaryDesc: 'Stipendio ↓', salaryAsc: 'Stipendio ↑',
    pastNd: (n) => `${n}g`, todayRel: 'oggi',
  },
  pl: {
    searchPlaceholder: 'Szukaj roli, firmy, skilla…', clearSearch: 'Wyczyść wyszukiwanie',
    today: 'Dziś', pastWeek: 'Ostatni tydzień', pastMonth: 'Ostatni miesiąc',
    fullTime: 'Pełny etat', contract: 'Kontrakt', partTime: 'Pół etatu', intern: 'Staż',
    withSalary: 'Z wynagrodzeniem', allFilters: 'Wszystkie filtry', filtering: 'Aktywne filtry',
    reset: 'Wyczyść', resetAll: 'Wyczyść wszystko', resetFilters: 'Wyczyść filtry',
    loading: 'Ładowanie…', job: 'oferta', jobs: 'ofert', of: 'z',
    noMatches: 'Brak wyników', noMatchesBody: 'Spróbuj usunąć filtr. Nowe oferty pojawiają się codziennie o 04:00 UTC.',
    showMore: (n) => `Pokaż więcej (${n})`, showCount: (n, l) => `Pokaż ${n.toLocaleString()} ${l}`,
    close: 'Zamknij',
    groupRole: 'Rola', groupCountry: 'Kraj', groupSeniority: 'Senioritet', groupType: 'Typ',
    groupMinSalary: 'Min. wynagrodzenie', groupPostedWithin: 'Opublikowano w', groupOther: 'Inne',
    any: 'Dowolny', anyCountry: 'Dowolny kraj',
    countriesRepresented: (n) => `${n} reprezentowanych`,
    anytime: 'Kiedykolwiek', past24h: '24h', threeDays: '3 dni', oneWeek: '1 tydzień', twoWeeks: '2 tygodnie', oneMonth: '1 miesiąc',
    onlyWithSalary: 'Tylko oferty z opublikowanym wynagrodzeniem',
    newest: 'Najnowsze', salaryDesc: 'Wynagrodzenie ↓', salaryAsc: 'Wynagrodzenie ↑',
    pastNd: (n) => `${n}d`, todayRel: 'dziś',
  },
};

interface SlimJob {
  i: string; t: string; c: string; cs: string; l: string; lc: string | null;
  r: Role; s: Seniority; e: string;
  sn: number | null; sx: number | null; cu: string | null;
  p: string; tg: string[]; d: string;
}

interface IndexFile {
  generatedAt: string;
  count: number;
  jobs: SlimJob[];
}

const SENIORITIES: Seniority[] = ['junior', 'mid', 'senior', 'lead'];
const PAGE_SIZE = 30;

type Sort = 'recent' | 'salary-high' | 'salary-low';

function relativeDate(iso: string, t: SearchStrings): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days < 1) return t.todayRel;
  if (days === 1) return t.pastNd(1);
  if (days < 30) return t.pastNd(days);
  return `${Math.floor(days / 30)}mo`;
}

export function JobSearch({ locale }: { locale: Locale }) {
  const t = STR[locale];
  const [data, setData] = useState<IndexFile | null>(null);
  const [loading, setLoading] = useState(true);

  const [q, setQ] = useState('');
  const [role, setRole] = useState<Role | ''>('');
  const [country, setCountry] = useState('');
  const [seniority, setSeniority] = useState<Seniority | ''>('');
  const [employment, setEmployment] = useState('');
  const [minSalary, setMinSalary] = useState(0);
  const [postedWithin, setPostedWithin] = useState(0);
  const [salaryOnly, setSalaryOnly] = useState(false);
  const [sort, setSort] = useState<Sort>('recent');
  const [shown, setShown] = useState(PAGE_SIZE);
  const [allOpen, setAllOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('/search-index.json')
      .then((r) => r.json())
      .then((d: IndexFile) => {
        if (!cancelled) {
          setData(d);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    setShown(PAGE_SIZE);
  }, [q, role, country, seniority, employment, minSalary, postedWithin, salaryOnly, sort]);

  // Lock body scroll when modal-style drawer is open on mobile
  useEffect(() => {
    if (allOpen) document.documentElement.style.overflow = 'hidden';
    else document.documentElement.style.overflow = '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [allOpen]);

  const countries = useMemo(() => {
    if (!data) return [] as string[];
    const set = new Set<string>();
    for (const j of data.jobs) if (j.lc) set.add(j.lc);
    return Array.from(set).sort();
  }, [data]);

  const filtered = useMemo(() => {
    if (!data) return [] as SlimJob[];
    const qLower = q.trim().toLowerCase();
    const cutoff = postedWithin > 0 ? Date.now() - postedWithin * 86_400_000 : 0;
    const result = data.jobs.filter((j) => {
      if (role && j.r !== role) return false;
      if (country && j.lc !== country) return false;
      if (seniority && j.s !== seniority) return false;
      if (employment && j.e !== employment) return false;
      if (salaryOnly && !j.sn && !j.sx) return false;
      if (minSalary > 0) {
        const max = j.sx || j.sn || 0;
        if (max < minSalary) return false;
      }
      if (cutoff > 0 && new Date(j.p).getTime() < cutoff) return false;
      if (qLower) {
        const hay = `${j.t} ${j.c} ${j.d} ${j.tg.join(' ')}`.toLowerCase();
        if (!hay.includes(qLower)) return false;
      }
      return true;
    });
    if (sort !== 'recent') {
      const sign = sort === 'salary-high' ? -1 : 1;
      result.sort((a, b) => sign * ((b.sx || b.sn || 0) - (a.sx || a.sn || 0)));
    } else {
      result.sort((a, b) => new Date(b.p).getTime() - new Date(a.p).getTime());
    }
    return result;
  }, [data, q, role, country, seniority, employment, minSalary, postedWithin, salaryOnly, sort]);

  const reset = () => {
    setQ(''); setRole(''); setCountry(''); setSeniority(''); setEmployment('');
    setMinSalary(0); setPostedWithin(0); setSalaryOnly(false);
  };

  const activeChips: Array<{ label: string; clear: () => void }> = [];
  if (q) activeChips.push({ label: `"${q.slice(0, 24)}"`, clear: () => setQ('') });
  if (role) activeChips.push({ label: role.replace('-', ' '), clear: () => setRole('') });
  if (country) activeChips.push({ label: `${flagFor(country)} ${country}`, clear: () => setCountry('') });
  if (seniority) activeChips.push({ label: cap(seniority), clear: () => setSeniority('') });
  if (employment) activeChips.push({ label: empLabel(employment, t), clear: () => setEmployment('') });
  if (minSalary > 0) activeChips.push({ label: `$${minSalary / 1000}k+`, clear: () => setMinSalary(0) });
  if (postedWithin > 0) activeChips.push({
    label: postedWithin === 1 ? t.past24h : postedWithin === 7 ? t.pastWeek : t.pastNd(postedWithin),
    clear: () => setPostedWithin(0),
  });
  if (salaryOnly) activeChips.push({ label: t.withSalary, clear: () => setSalaryOnly(false) });

  // Count of advanced filters currently active (excluding quick chips already exposed)
  const advancedActive = [role, country, seniority].filter(Boolean).length;

  return (
    <div className="space-y-4">
      {/* Toolbar — sticky right below the site header */}
      <div className="sticky top-16 sm:top-[68px] z-30 -mx-4 sm:mx-0 px-4 sm:px-0">
        <div className="bg-bg/95 backdrop-blur-md py-3 sm:py-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative flex-1 min-w-0">
              <svg viewBox="0 0 24 24" fill="none" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-subtle pointer-events-none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M21 21l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full h-11 pl-10 pr-9 rounded-full border border-line bg-paper text-sm placeholder:text-subtle focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/5 transition-shadow"
              />
              {q && (
                <button
                  onClick={() => setQ('')}
                  aria-label={t.clearSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full hover:bg-sand flex items-center justify-center text-subtle hover:text-ink"
                >
                  ×
                </button>
              )}
            </div>
            <SortMenu value={sort} onChange={setSort} t={t} />
          </div>
        </div>
      </div>

      {/* Quick chips */}
      <div className="flex items-center gap-2 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 scrollbar-hide">
        <FilterChip active={postedWithin === 1} onClick={() => setPostedWithin(postedWithin === 1 ? 0 : 1)} icon={<DotIcon />}>
          {t.today}
        </FilterChip>
        <FilterChip active={postedWithin === 7} onClick={() => setPostedWithin(postedWithin === 7 ? 0 : 7)}>
          {t.pastWeek}
        </FilterChip>
        <FilterChip active={postedWithin === 30} onClick={() => setPostedWithin(postedWithin === 30 ? 0 : 30)}>
          {t.pastMonth}
        </FilterChip>
        <Divider />
        <FilterChip active={employment === 'FULL_TIME'} onClick={() => setEmployment(employment === 'FULL_TIME' ? '' : 'FULL_TIME')}>
          {t.fullTime}
        </FilterChip>
        <FilterChip active={employment === 'CONTRACTOR'} onClick={() => setEmployment(employment === 'CONTRACTOR' ? '' : 'CONTRACTOR')}>
          {t.contract}
        </FilterChip>
        <FilterChip active={employment === 'PART_TIME'} onClick={() => setEmployment(employment === 'PART_TIME' ? '' : 'PART_TIME')}>
          {t.partTime}
        </FilterChip>
        <Divider />
        <FilterChip active={salaryOnly} onClick={() => setSalaryOnly((s) => !s)} icon={<DollarIcon />}>
          {t.withSalary}
        </FilterChip>
        <FilterChip active={minSalary === 100000} onClick={() => setMinSalary(minSalary === 100000 ? 0 : 100000)}>
          $100k+
        </FilterChip>
        <FilterChip active={minSalary === 150000} onClick={() => setMinSalary(minSalary === 150000 ? 0 : 150000)}>
          $150k+
        </FilterChip>
        <Divider />
        <button
          type="button"
          onClick={() => setAllOpen(true)}
          className="flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border-2 border-ink/15 bg-paper text-xs font-semibold text-ink hover:border-ink transition-colors whitespace-nowrap"
        >
          <SlidersIcon />
          {t.allFilters}
          {advancedActive > 0 && (
            <span className="ml-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-ink text-bg text-[10px] font-bold">
              {advancedActive}
            </span>
          )}
        </button>
      </div>

      {/* Active filters bar */}
      {activeChips.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap text-sm">
          <span className="text-[11px] uppercase tracking-wider text-subtle font-semibold">{t.filtering}</span>
          {activeChips.map((c, i) => (
            <button
              key={i}
              onClick={c.clear}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-forest text-bg hover:bg-ink transition-colors"
            >
              {c.label}
              <span className="text-bg/70 hover:text-bg">×</span>
            </button>
          ))}
          <button onClick={reset} className="text-xs font-medium text-muted hover:text-ink underline underline-offset-2 ml-1">
            {t.reset}
          </button>
        </div>
      )}

      {/* Result count */}
      <div className="flex items-baseline justify-between pt-2">
        <p className="text-sm">
          {loading ? (
            <span className="text-subtle">{t.loading}</span>
          ) : (
            <>
              <span className="font-display text-2xl font-normal text-ink stat-num">{filtered.length.toLocaleString()}</span>
              <span className="text-muted ml-2">
                {filtered.length === 1 ? t.job : t.jobs}
                {data ? ` ${t.of} ${data.count.toLocaleString()}` : ''}
              </span>
            </>
          )}
        </p>
      </div>

      {/* Results */}
      {!loading && filtered.length === 0 && (
        <div className="rounded-2xl border border-line bg-paper p-12 text-center">
          <div className="inline-flex w-12 h-12 rounded-full bg-sand items-center justify-center mb-3">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-subtle">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-base font-semibold text-ink">{t.noMatches}</p>
          <p className="text-sm text-muted mt-1.5 max-w-sm mx-auto">{t.noMatchesBody}</p>
          {activeChips.length > 0 && (
            <button onClick={reset} className="mt-4 px-4 py-2 bg-ink text-bg rounded-full text-sm font-medium hover:bg-forest">
              {t.resetFilters}
            </button>
          )}
        </div>
      )}

      {loading && (
        <div className="grid gap-3 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-line bg-paper p-4 animate-pulse">
              <div className="flex gap-3">
                <div className="w-11 h-11 rounded-xl bg-sand" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-sand rounded w-3/4" />
                  <div className="h-3 bg-sand/70 rounded w-1/2" />
                  <div className="flex gap-1.5 pt-1">
                    <div className="h-5 w-16 bg-sand rounded-full" />
                    <div className="h-5 w-12 bg-sand rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid gap-3 md:grid-cols-2">
        {filtered.slice(0, shown).map((j) => (
          <SlimJobCard key={j.i} job={j} locale={locale} t={t} />
        ))}
      </div>

      {shown < filtered.length && (
        <div className="flex justify-center pt-6">
          <button
            onClick={() => setShown((s) => s + PAGE_SIZE)}
            className="px-6 py-3 bg-paper border border-line rounded-full text-sm font-semibold hover:border-ink shadow-soft hover:shadow-lift transition"
          >
            {t.showMore(Math.min(PAGE_SIZE, filtered.length - shown))}
          </button>
        </div>
      )}

      {/* All-filters drawer */}
      {allOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center" role="dialog" aria-modal="true">
          <button
            aria-label={t.close}
            onClick={() => setAllOpen(false)}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          />
          <div className="relative w-full sm:max-w-lg bg-bg sm:rounded-2xl rounded-t-2xl border border-line shadow-lift max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-line">
              <h3 className="font-display text-xl font-normal tracking-tighter text-ink">{t.allFilters}</h3>
              <button onClick={() => setAllOpen(false)} aria-label={t.close} className="w-11 h-11 sm:w-9 sm:h-9 rounded-full hover:bg-sand flex items-center justify-center text-muted text-lg">
                ×
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
              <FilterGroup title={t.groupRole}>
                <RadioGrid
                  options={[{ value: '', label: t.any }, ...ROLES.map((r) => ({ value: r, label: r.replace('-', ' ') }))]}
                  value={role}
                  onChange={(v) => setRole(v as Role | '')}
                />
              </FilterGroup>
              <FilterGroup title={t.groupCountry} subtitle={t.countriesRepresented(countries.length)}>
                <NativeSelect value={country} onChange={setCountry}>
                  <option value="">{t.anyCountry}</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </NativeSelect>
              </FilterGroup>
              <FilterGroup title={t.groupSeniority}>
                <RadioGrid
                  options={[
                    { value: '', label: t.any },
                    ...SENIORITIES.map((s) => ({ value: s, label: cap(s) })),
                  ]}
                  value={seniority}
                  onChange={(v) => setSeniority(v as Seniority | '')}
                />
              </FilterGroup>
              <FilterGroup title={t.groupType}>
                <RadioGrid
                  options={[
                    { value: '', label: t.any },
                    { value: 'FULL_TIME', label: t.fullTime },
                    { value: 'CONTRACTOR', label: t.contract },
                    { value: 'PART_TIME', label: t.partTime },
                    { value: 'INTERN', label: t.intern },
                  ]}
                  value={employment}
                  onChange={setEmployment}
                />
              </FilterGroup>
              <FilterGroup title={t.groupMinSalary}>
                <RadioGrid
                  options={[
                    { value: '0', label: t.any },
                    { value: '50000', label: '$50k+' },
                    { value: '80000', label: '$80k+' },
                    { value: '100000', label: '$100k+' },
                    { value: '120000', label: '$120k+' },
                    { value: '150000', label: '$150k+' },
                    { value: '200000', label: '$200k+' },
                  ]}
                  value={String(minSalary)}
                  onChange={(v) => setMinSalary(Number(v))}
                />
              </FilterGroup>
              <FilterGroup title={t.groupPostedWithin}>
                <RadioGrid
                  options={[
                    { value: '0', label: t.anytime },
                    { value: '1', label: t.past24h },
                    { value: '3', label: t.threeDays },
                    { value: '7', label: t.oneWeek },
                    { value: '14', label: t.twoWeeks },
                    { value: '30', label: t.oneMonth },
                  ]}
                  value={String(postedWithin)}
                  onChange={(v) => setPostedWithin(Number(v))}
                />
              </FilterGroup>
              <FilterGroup title={t.groupOther}>
                <label className="flex items-center justify-between gap-3 p-3 rounded-lg border border-line cursor-pointer hover:border-ink">
                  <span className="text-sm text-ink">{t.onlyWithSalary}</span>
                  <input
                    type="checkbox"
                    checked={salaryOnly}
                    onChange={(e) => setSalaryOnly(e.target.checked)}
                    className="w-4 h-4 accent-forest"
                  />
                </label>
              </FilterGroup>
            </div>
            <div className="px-5 py-4 border-t border-line bg-bg flex items-center justify-between gap-3">
              <button onClick={reset} className="text-sm text-muted hover:text-ink font-medium">
                {t.resetAll}
              </button>
              <button
                onClick={() => setAllOpen(false)}
                className="px-5 py-2.5 bg-ink text-bg rounded-full text-sm font-semibold hover:bg-forest transition-colors"
              >
                {t.showCount(filtered.length, filtered.length === 1 ? t.job : t.jobs)}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────

function FilterChip({
  active,
  onClick,
  children,
  icon,
}: {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
        active
          ? 'bg-ink text-bg border-ink'
          : 'bg-paper text-graphite border-line hover:border-ink hover:text-ink'
      }`}
    >
      {icon}
      {children}
    </button>
  );
}

function Divider() {
  return <span className="flex-shrink-0 w-px h-5 bg-line mx-0.5" />;
}

function SortMenu({ value, onChange, t }: { value: Sort; onChange: (v: Sort) => void; t: SearchStrings }) {
  return (
    <div className="relative flex-shrink-0">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Sort)}
        aria-label={t.newest}
        className="appearance-none h-11 pl-3.5 pr-9 rounded-full border border-line bg-paper text-xs font-medium text-ink focus:outline-none focus:border-ink cursor-pointer hover:border-ink/40 transition"
      >
        <option value="recent">{t.newest}</option>
        <option value="salary-high">{t.salaryDesc}</option>
        <option value="salary-low">{t.salaryAsc}</option>
      </select>
      <svg viewBox="0 0 14 14" width="12" height="12" className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function FilterGroup({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2.5">
        <h4 className="text-[11px] uppercase tracking-wider text-subtle font-semibold">{title}</h4>
        {subtitle && <span className="text-[10px] text-subtle">{subtitle}</span>}
      </div>
      {children}
    </div>
  );
}

function RadioGrid({
  options,
  value,
  onChange,
}: {
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((o) => (
        <button
          key={o.value || 'any'}
          type="button"
          onClick={() => onChange(o.value)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors capitalize ${
            value === o.value
              ? 'bg-ink text-bg border-ink'
              : 'bg-paper text-graphite border-line hover:border-ink hover:text-ink'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function NativeSelect({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-full h-10 px-3.5 pr-10 rounded-lg border border-line bg-paper text-sm text-ink focus:outline-none focus:border-ink cursor-pointer"
      >
        {children}
      </select>
      <svg viewBox="0 0 14 14" width="12" height="12" className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function DotIcon() {
  return <span className="inline-block w-1.5 h-1.5 rounded-full bg-current" />;
}

function DollarIcon() {
  return (
    <svg viewBox="0 0 14 14" width="11" height="11" fill="none">
      <text x="7" y="11" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor">$</text>
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M2 4h6M11 4h1M2 10h2M7 10h5" />
      <circle cx="9.5" cy="4" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="5.5" cy="10" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function empLabel(value: string, t: SearchStrings): string {
  switch (value) {
    case 'FULL_TIME': return t.fullTime;
    case 'CONTRACTOR': return t.contract;
    case 'PART_TIME': return t.partTime;
    case 'INTERN': return t.intern;
    default: return value;
  }
}

function SlimJobCard({ job, locale, t }: { job: SlimJob; locale: Locale; t: SearchStrings }) {
  const salary =
    job.sn || job.sx
      ? `${job.cu ?? 'USD'} ${Math.round((job.sn || 0) / 1000)}${
          job.sx ? '–' + Math.round(job.sx / 1000) + 'k' : 'k+'
        }`
      : null;
  const flag = flagFor(job.lc);
  return (
    <Link
      href={`/${locale}/job/${job.i}`}
      className="group block rounded-2xl bg-paper border border-line shadow-soft hover-lift hover:shadow-lift hover:border-ink/20 p-4"
    >
      <div className="flex items-start gap-3">
        <CompanyLogo company={job.c} companySlug={job.cs} role={job.r} size={44} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[15px] font-semibold text-ink leading-snug line-clamp-2 group-hover:text-forest transition-colors">
              {job.t}
            </h3>
            <span className="flex-shrink-0 text-[11px] text-subtle whitespace-nowrap pt-0.5">{relativeDate(job.p, t)}</span>
          </div>
          <p className="text-[13px] mt-1">
            <span className="font-medium text-graphite">{job.c}</span>
            <span className="text-subtle"> · {flag} {job.l}</span>
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
            <span className="px-2 py-0.5 rounded-full font-medium capitalize bg-forestSoft text-forest">
              {job.r.replace('-', ' ')}
            </span>
            <span className="px-2 py-0.5 rounded-full font-medium capitalize bg-sand text-graphite border border-line">
              {job.s}
            </span>
            {salary && (
              <span className="px-2 py-0.5 rounded-full font-medium bg-amberSoft text-amber">
                {salary}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
