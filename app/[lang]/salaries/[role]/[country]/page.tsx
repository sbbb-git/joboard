import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { allJobs, salaryStatsByCountry, hasCountrySalaryData } from '@/lib/jobs';
import { ROLES, type Locale, type Role } from '@/lib/types';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata, breadcrumbJsonLd, absoluteUrl } from '@/lib/seo';
import { roleLabel, countryLabel } from '@/lib/labels';

export const dynamicParams = false;
export const revalidate = false;

const TOP_COUNTRIES = [
  'united-states',
  'united-kingdom',
  'germany',
  'france',
  'spain',
  'portugal',
  'netherlands',
  'canada',
  'mexico',
  'brazil',
  'india',
  'australia',
];

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    ROLES.flatMap((role) => TOP_COUNTRIES.map((country) => ({ lang, role, country }))),
  );
}

type CountrySalaryCopy = {
  metaTitle: (role: string, country: string) => string;
  metaDescription: (role: string, country: string) => string;
  computedFrom: (n: number) => string;
  basedOn: (currency: string, n: number) => string;
  noData: (role: string, country: string) => string;
  seeGlobalPre: string;
  seeGlobalLink: (role: string) => string;
  seeGlobalPost: string;
  methodology: string;
  methodologyBody: (country: string) => string;
  p25: string;
  median: string;
  average: string;
  p75: string;
  salariesCrumb: string;
};

const CS_I18N: Record<Locale, CountrySalaryCopy> = {
  en: {
    metaTitle: (r, c) => `Remote ${r} salaries in ${c}`,
    metaDescription: (r, c) => `Median and percentile salary ranges for remote ${r} roles hiring candidates based in ${c}, computed from the salary bands published on current listings.`,
    computedFrom: (n) => `Computed live from ${n} ${n === 1 ? 'listing' : 'listings'} in our index.`,
    basedOn: (cur, n) => `${cur} · based on ${n} listings`,
    noData: (r, c) => `No listing targeting candidates in ${c} has published a salary band for remote ${r} roles yet. This page fills in automatically as the index grows.`,
    seeGlobalPre: 'In the meantime, the ',
    seeGlobalLink: (r) => `global ${r} salary page`,
    seeGlobalPost: ' shows broader benchmark numbers across all countries.',
    methodology: 'Methodology',
    methodologyBody: (c) => `Numbers come from listings in our index that publish a salary band and target candidates based in ${c}. Each listing contributes the midpoint of its band; percentiles come from the sorted distribution of those midpoints.`,
    p25: '25th pct', median: 'Median', average: 'Average', p75: '75th pct',
    salariesCrumb: 'Salaries',
  },
  fr: {
    metaTitle: (r, c) => `Salaires remote ${r} en ${c}`,
    metaDescription: (r, c) => `Fourchettes salariales médianes et percentiles pour les postes remote ${r} recrutant en ${c}, calculées depuis les fourchettes publiées sur les offres actives.`,
    computedFrom: (n) => `Calculé en direct depuis ${n} offre${n === 1 ? '' : 's'} de notre index.`,
    basedOn: (cur, n) => `${cur} · basé sur ${n} offres`,
    noData: (r, c) => `Aucune offre visant des candidats en ${c} n'a encore publié de fourchette salariale pour les postes remote ${r}. Cette page se remplit automatiquement quand l'index grandit.`,
    seeGlobalPre: 'En attendant, la ',
    seeGlobalLink: (r) => `page des salaires ${r} tous pays`,
    seeGlobalPost: ' donne des repères plus larges.',
    methodology: 'Méthodologie',
    methodologyBody: (c) => `Les chiffres viennent des offres de notre index qui publient une fourchette salariale et visent des candidats en ${c}. Chaque offre compte pour le point médian de sa fourchette ; les percentiles viennent de la distribution triée de ces points.`,
    p25: '25e pct', median: 'Médiane', average: 'Moyenne', p75: '75e pct',
    salariesCrumb: 'Salaires',
  },
  es: {
    metaTitle: (r, c) => `Salarios remotos de ${r} en ${c}`,
    metaDescription: (r, c) => `Rangos salariales medianos y percentiles para puestos remotos de ${r} que contratan en ${c}, calculados desde las bandas publicadas en las ofertas activas.`,
    computedFrom: (n) => `Calculado en vivo desde ${n} oferta${n === 1 ? '' : 's'} de nuestro índice.`,
    basedOn: (cur, n) => `${cur} · basado en ${n} ofertas`,
    noData: (r, c) => `Ninguna oferta dirigida a candidatos en ${c} ha publicado todavía una banda salarial para puestos remotos de ${r}. Esta página se completa sola según crece el índice.`,
    seeGlobalPre: 'Mientras tanto, la ',
    seeGlobalLink: (r) => `página de salarios de ${r} a nivel global`,
    seeGlobalPost: ' muestra referencias más amplias.',
    methodology: 'Metodología',
    methodologyBody: (c) => `Los números vienen de ofertas de nuestro índice que publican una banda salarial y se dirigen a candidatos en ${c}. Cada oferta aporta el punto medio de su banda; los percentiles salen de la distribución ordenada.`,
    p25: 'pct 25', median: 'Mediana', average: 'Media', p75: 'pct 75',
    salariesCrumb: 'Salarios',
  },
  de: {
    metaTitle: (r, c) => `Remote-Gehälter für ${r} in ${c}`,
    metaDescription: (r, c) => `Median- und Perzentil-Gehaltsspannen für Remote-Stellen als ${r} mit Kandidaten in ${c}, berechnet aus den veröffentlichten Spannen aktueller Anzeigen.`,
    computedFrom: (n) => `Live berechnet aus ${n} Anzeige${n === 1 ? '' : 'n'} in unserem Index.`,
    basedOn: (cur, n) => `${cur} · basierend auf ${n} Anzeigen`,
    noData: (r, c) => `Noch keine Anzeige für Kandidaten in ${c} hat eine Gehaltsspanne für Remote-Stellen als ${r} veröffentlicht. Diese Seite füllt sich automatisch, sobald der Index wächst.`,
    seeGlobalPre: 'In der Zwischenzeit zeigt die ',
    seeGlobalLink: (r) => `globale Gehaltsseite für ${r}`,
    seeGlobalPost: ' breitere Vergleichswerte.',
    methodology: 'Methodik',
    methodologyBody: (c) => `Die Zahlen stammen aus Anzeigen unseres Index, die eine Gehaltsspanne veröffentlichen und Kandidaten in ${c} ansprechen. Jede Anzeige zählt mit dem Mittelwert ihrer Spanne; Perzentile aus der sortierten Verteilung.`,
    p25: '25. Perz.', median: 'Median', average: 'Durchschnitt', p75: '75. Perz.',
    salariesCrumb: 'Gehälter',
  },
  pt: {
    metaTitle: (r, c) => `Salários remotos de ${r} em ${c}`,
    metaDescription: (r, c) => `Faixas salariais medianas e percentis para vagas remotas de ${r} que contratam em ${c}, calculadas a partir das faixas publicadas nas vagas ativas.`,
    computedFrom: (n) => `Calculado ao vivo a partir de ${n} vaga${n === 1 ? '' : 's'} do nosso índice.`,
    basedOn: (cur, n) => `${cur} · com base em ${n} vagas`,
    noData: (r, c) => `Nenhuma vaga dirigida a candidatos em ${c} publicou ainda uma faixa salarial para vagas remotas de ${r}. Esta página preenche-se sozinha à medida que o índice cresce.`,
    seeGlobalPre: 'Entretanto, a ',
    seeGlobalLink: (r) => `página global de salários de ${r}`,
    seeGlobalPost: ' mostra referências mais amplas.',
    methodology: 'Metodologia',
    methodologyBody: (c) => `Os números vêm de vagas do nosso índice que publicam uma faixa salarial e visam candidatos em ${c}. Cada vaga contribui com o ponto médio da sua faixa; os percentis vêm da distribuição ordenada.`,
    p25: 'pct 25', median: 'Mediana', average: 'Média', p75: 'pct 75',
    salariesCrumb: 'Salários',
  },
  it: {
    metaTitle: (r, c) => `Stipendi remote per ${r} in ${c}`,
    metaDescription: (r, c) => `Fasce di stipendio mediane e percentili per posizioni remote da ${r} che assumono in ${c}, calcolate dalle fasce pubblicate sulle offerte attive.`,
    computedFrom: (n) => `Calcolato in tempo reale da ${n} offert${n === 1 ? 'a' : 'e'} nel nostro indice.`,
    basedOn: (cur, n) => `${cur} · basato su ${n} offerte`,
    noData: (r, c) => `Nessuna offerta rivolta a candidati in ${c} ha ancora pubblicato una fascia di stipendio per posizioni remote da ${r}. Questa pagina si popola da sola man mano che l'indice cresce.`,
    seeGlobalPre: 'Nel frattempo, la ',
    seeGlobalLink: (r) => `pagina globale degli stipendi per ${r}`,
    seeGlobalPost: ' mostra riferimenti più ampi.',
    methodology: 'Metodologia',
    methodologyBody: (c) => `I numeri vengono dalle offerte del nostro indice che pubblicano una fascia di stipendio e si rivolgono a candidati in ${c}. Ogni offerta conta per il punto medio della fascia; i percentili dalla distribuzione ordinata.`,
    p25: '25° perc.', median: 'Mediana', average: 'Media', p75: '75° perc.',
    salariesCrumb: 'Stipendi',
  },
  pl: {
    metaTitle: (r, c) => `Zdalne wynagrodzenia: ${r} w ${c}`,
    metaDescription: (r, c) => `Mediany i percentyle widełek płacowych dla zdalnych ról ${r} rekrutujących w ${c}, liczone z widełek publikowanych w aktywnych ofertach.`,
    computedFrom: (n) => `Liczone na żywo z ${n} ofert w naszym indeksie.`,
    basedOn: (cur, n) => `${cur} · na podstawie ${n} ofert`,
    noData: (r, c) => `Żadna oferta skierowana do kandydatów w ${c} nie opublikowała jeszcze widełek płacowych dla zdalnych ról ${r}. Ta strona wypełni się sama, gdy indeks urośnie.`,
    seeGlobalPre: 'W międzyczasie ',
    seeGlobalLink: (r) => `globalna strona wynagrodzeń dla ${r}`,
    seeGlobalPost: ' pokazuje szersze punkty odniesienia.',
    methodology: 'Metodologia',
    methodologyBody: (c) => `Liczby pochodzą z ofert w naszym indeksie, które publikują widełki płacowe i kierują się do kandydatów w ${c}. Każda oferta wnosi punkt środkowy swoich widełek; percentyle z posortowanego rozkładu.`,
    p25: '25. perc.', median: 'Mediana', average: 'Średnia', p75: '75. perc.',
    salariesCrumb: 'Wynagrodzenia',
  },
};

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; role: string; country: string };
}): Metadata {
  const role = roleLabel(params.lang, params.role);
  const country = countryLabel(params.country);
  const c = CS_I18N[params.lang];
  return buildMetadata({
    locale: params.lang,
    path: `salaries/${params.role}/${params.country}`,
    title: c.metaTitle(role, country),
    description: c.metaDescription(role, country),
    // Without a single published salary band there is nothing here a search
    // result could usefully show, so keep it out of the index until there is.
    index: hasCountrySalaryData(params.role as Role, params.country),
  });
}

export default function SalaryByCountry({
  params,
}: {
  params: { lang: Locale; role: string; country: string };
}) {
  if (!ROLES.includes(params.role as Role)) notFound();
  const role = params.role as Role;
  const country = countryLabel(params.country);
  const roleName = roleLabel(params.lang, params.role);
  const c = CS_I18N[params.lang];
  const results = salaryStatsByCountry(role, params.country);
  const target = params.country.replace(/-/g, ' ').toLowerCase();
  const jobCount = allJobs().filter(
    (j) => j.role === role && j.locationCountry?.toLowerCase() === target,
  ).length;

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', url: absoluteUrl(`/${params.lang}`) },
    { name: c.salariesCrumb, url: absoluteUrl(`/${params.lang}/salaries/${role}`) },
    {
      name: country,
      url: absoluteUrl(`/${params.lang}/salaries/${role}/${params.country}`),
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <header className="border-b border-line pb-4">
        <h1 className="text-2xl md:text-3xl font-semibold">{c.metaTitle(roleName, country)}</h1>
        <p className="text-muted text-sm mt-2">{c.computedFrom(jobCount)}</p>
      </header>

      {results.length === 0 ? (
        <section className="text-sm text-muted leading-relaxed space-y-3">
          <p>{c.noData(roleName, country)}</p>
          <p>
            {c.seeGlobalPre}
            <Link href={`/${params.lang}/salaries/${role}`} className="text-forest hover:underline">
              {c.seeGlobalLink(roleName)}
            </Link>
            {c.seeGlobalPost}
          </p>
        </section>
      ) : (
        results.map((r) => (
          <section key={r.currency}>
            <h2 className="text-lg font-semibold mb-3">{c.basedOn(r.currency, r.count)}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: c.p25, value: r.p25 },
                { label: c.median, value: r.median },
                { label: c.average, value: r.avg },
                { label: c.p75, value: r.p75 },
              ].map((stat) => (
                <div key={stat.label} className="border border-line rounded p-3">
                  <div className="text-xs text-muted">{stat.label}</div>
                  <div className="text-lg font-semibold mt-1">
                    {r.currency} {Math.round(stat.value).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))
      )}

      <section className="text-sm text-muted leading-relaxed">
        <h2 className="text-base font-semibold text-ink mb-2">{c.methodology}</h2>
        <p>{c.methodologyBody(country)}</p>
      </section>
    </div>
  );
}
