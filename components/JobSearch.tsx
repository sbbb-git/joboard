'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { flagFor } from '@/lib/flags';
import { ROLES, type Locale, type Role, type Seniority } from '@/lib/types';

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

function relativeDate(iso: string): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days < 1) return 'today';
  if (days === 1) return '1d';
  if (days < 30) return `${days}d`;
  const m = Math.floor(days / 30);
  return `${m}mo`;
}

function tileColors(name: string): { bg: string; fg: string } {
  const palette = [
    { bg: 'bg-forestSoft', fg: 'text-forest' },
    { bg: 'bg-terracottaSoft', fg: 'text-terracotta' },
    { bg: 'bg-amberSoft', fg: 'text-amber' },
    { bg: 'bg-sand', fg: 'text-ink' },
  ];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return palette[h % palette.length];
}

export function JobSearch({ locale }: { locale: Locale }) {
  const [data, setData] = useState<IndexFile | null>(null);
  const [loading, setLoading] = useState(true);

  // Filters
  const [q, setQ] = useState('');
  const [role, setRole] = useState<Role | ''>('');
  const [country, setCountry] = useState('');
  const [seniority, setSeniority] = useState<Seniority | ''>('');
  const [employment, setEmployment] = useState('');
  const [minSalary, setMinSalary] = useState(0);
  const [shown, setShown] = useState(PAGE_SIZE);

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
    return () => {
      cancelled = true;
    };
  }, []);

  // Reset pagination when filters change
  useEffect(() => {
    setShown(PAGE_SIZE);
  }, [q, role, country, seniority, employment, minSalary]);

  const countries = useMemo(() => {
    if (!data) return [] as string[];
    const set = new Set<string>();
    for (const j of data.jobs) if (j.lc) set.add(j.lc);
    return Array.from(set).sort();
  }, [data]);

  const filtered = useMemo(() => {
    if (!data) return [] as SlimJob[];
    const qLower = q.trim().toLowerCase();
    return data.jobs.filter((j) => {
      if (role && j.r !== role) return false;
      if (country && j.lc !== country) return false;
      if (seniority && j.s !== seniority) return false;
      if (employment && j.e !== employment) return false;
      if (minSalary > 0) {
        const max = j.sx || j.sn || 0;
        if (max < minSalary) return false;
      }
      if (qLower) {
        const hay = `${j.t} ${j.c} ${j.d} ${j.tg.join(' ')}`.toLowerCase();
        if (!hay.includes(qLower)) return false;
      }
      return true;
    });
  }, [data, q, role, country, seniority, employment, minSalary]);

  const reset = () => {
    setQ('');
    setRole('');
    setCountry('');
    setSeniority('');
    setEmployment('');
    setMinSalary(0);
  };

  const active = q || role || country || seniority || employment || minSalary > 0;

  return (
    <div className="space-y-5">
      {/* Search bar */}
      <div className="relative">
        <svg viewBox="0 0 24 24" fill="none" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-subtle">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by title, company, skill, keyword…"
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-line bg-paper text-sm placeholder:text-subtle focus:outline-none focus:border-ink shadow-soft"
        />
      </div>

      {/* Filters */}
      <div className="rounded-xl border border-line bg-paper p-4 shadow-soft">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <Select label="Role" value={role} onChange={(v) => setRole(v as Role | '')}>
            <option value="">Any role</option>
            {ROLES.map((r) => (
              <option key={r} value={r} className="capitalize">
                {r.replace('-', ' ')}
              </option>
            ))}
          </Select>
          <Select label="Country" value={country} onChange={setCountry}>
            <option value="">Any country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
          <Select label="Seniority" value={seniority} onChange={(v) => setSeniority(v as Seniority | '')}>
            <option value="">Any level</option>
            {SENIORITIES.map((s) => (
              <option key={s} value={s} className="capitalize">
                {s}
              </option>
            ))}
          </Select>
          <Select label="Type" value={employment} onChange={setEmployment}>
            <option value="">Any type</option>
            <option value="FULL_TIME">Full-time</option>
            <option value="CONTRACTOR">Contract / Freelance</option>
            <option value="PART_TIME">Part-time</option>
            <option value="INTERN">Intern</option>
          </Select>
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-subtle font-semibold mb-1">
              Min salary
            </label>
            <select
              value={minSalary}
              onChange={(e) => setMinSalary(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg border border-line bg-bg text-sm focus:outline-none focus:border-ink"
            >
              <option value={0}>Any</option>
              <option value={50000}>50k+</option>
              <option value={80000}>80k+</option>
              <option value={120000}>120k+</option>
              <option value={150000}>150k+</option>
              <option value={200000}>200k+</option>
            </select>
          </div>
        </div>
        {active && (
          <button
            onClick={reset}
            className="mt-3 text-xs font-medium text-forest hover:underline"
          >
            Reset all filters
          </button>
        )}
      </div>

      {/* Results count */}
      <div className="flex items-baseline justify-between flex-wrap gap-2">
        <p className="text-sm text-muted">
          {loading ? (
            'Loading jobs…'
          ) : (
            <>
              <span className="font-semibold text-ink">{filtered.length.toLocaleString()}</span>
              {' '}
              {filtered.length === 1 ? 'job matches' : 'jobs match'}
              {data ? ` out of ${data.count.toLocaleString()}` : ''}
            </>
          )}
        </p>
      </div>

      {/* Results */}
      {!loading && filtered.length === 0 && (
        <div className="rounded-xl border border-line bg-paper p-10 text-center">
          <p className="text-sm text-muted">No jobs match these filters right now.</p>
          {active && (
            <button
              onClick={reset}
              className="mt-3 text-sm font-medium text-forest hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>
      )}

      <div className="grid gap-3 md:grid-cols-2">
        {filtered.slice(0, shown).map((j) => (
          <SlimJobCard key={j.i} job={j} locale={locale} />
        ))}
      </div>

      {shown < filtered.length && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setShown((s) => s + PAGE_SIZE)}
            className="px-5 py-2.5 bg-paper border border-line rounded-full text-sm font-medium hover:border-ink"
          >
            Show {Math.min(PAGE_SIZE, filtered.length - shown)} more
          </button>
        </div>
      )}
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-wider text-subtle font-semibold mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg border border-line bg-bg text-sm focus:outline-none focus:border-ink"
      >
        {children}
      </select>
    </div>
  );
}

function SlimJobCard({ job, locale }: { job: SlimJob; locale: Locale }) {
  const salary =
    job.sn || job.sx
      ? `${job.cu ?? 'USD'} ${Math.round((job.sn || 0) / 1000)}${
          job.sx ? '–' + Math.round(job.sx / 1000) + 'k' : 'k+'
        }`
      : null;
  const flag = flagFor(job.lc);
  const initial = job.c.charAt(0).toUpperCase();
  const tile = tileColors(job.c);
  return (
    <Link
      href={`/${locale}/job/${job.i}`}
      className="group block rounded-2xl bg-paper border border-line shadow-soft hover-lift hover:shadow-lift hover:border-ink/20 p-4"
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex-shrink-0 w-11 h-11 rounded-xl ${tile.bg} ${tile.fg} flex items-center justify-center text-base font-bold`}
        >
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[15px] font-semibold text-ink leading-snug line-clamp-2 group-hover:text-forest transition-colors">
              {job.t}
            </h3>
            <span className="flex-shrink-0 text-[11px] text-subtle whitespace-nowrap pt-0.5">
              {relativeDate(job.p)}
            </span>
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
