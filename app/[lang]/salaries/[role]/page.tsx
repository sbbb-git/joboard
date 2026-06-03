import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { salaryStats } from '@/lib/jobs';
import { ROLES, type Locale, type Role } from '@/lib/types';
import { LOCALES, t } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = false;
export const revalidate = false;

type SalaryCopy = {
  metaTitle: (role: string) => string;
  metaDescription: (role: string) => string;
  h1: (role: string) => string;
  subtitle: string;
  noData: (role: string) => string;
  basedOn: (n: number) => string;
  howCalculated: string;
  methodology: string;
  p25: string;
  median: string;
  average: string;
  p75: string;
};

const SALARY_I18N: Record<Locale, SalaryCopy> = {
  en: {
    metaTitle: (r) => `Remote ${r} salaries`,
    metaDescription: (r) =>
      `Median, average and percentile salary ranges for remote ${r} roles, computed from current job listings.`,
    h1: (r) => `Remote ${r} salaries`,
    subtitle: 'Computed live from open listings in our index.',
    noData: (r) =>
      `Not enough salary data for ${r} yet. Check back as the index grows.`,
    basedOn: (n) => `based on ${n} listings`,
    howCalculated: 'How this is calculated',
    methodology:
      'We average the min and max of each posting that publishes a salary range. Percentile values come from the sorted distribution of those midpoints. Listings without a salary are excluded. Currency conversion is not applied; each currency is computed in isolation.',
    p25: '25th pct',
    median: 'Median',
    average: 'Average',
    p75: '75th pct',
  },
  fr: {
    metaTitle: (r) => `Salaires remote ${r}`,
    metaDescription: (r) =>
      `Fourchettes salariales médianes et percentiles pour les postes remote ${r}, calculées depuis les offres d'emploi actuelles.`,
    h1: (r) => `Salaires remote ${r}`,
    subtitle: "Calculé en direct depuis les offres actives de notre index.",
    noData: (r) =>
      `Pas assez de données salariales pour ${r} pour l'instant. Revenez quand l'index grandit.`,
    basedOn: (n) => `basé sur ${n} offres`,
    howCalculated: 'Comment c\'est calculé',
    methodology:
      "Nous calculons la moyenne du min et du max de chaque offre qui publie une fourchette salariale. Les valeurs percentiles viennent de la distribution triée de ces points médians. Les offres sans salaire sont exclues. La conversion de devise n'est pas appliquée ; chaque devise est calculée isolément.",
    p25: '25e pct',
    median: 'Médiane',
    average: 'Moyenne',
    p75: '75e pct',
  },
  es: {
    metaTitle: (r) => `Salarios remote ${r}`,
    metaDescription: (r) =>
      `Rangos salariales medianos y percentiles para puestos remote ${r}, calculados desde las ofertas de empleo actuales.`,
    h1: (r) => `Salarios remote ${r}`,
    subtitle: 'Calculado en vivo desde las ofertas activas de nuestro índice.',
    noData: (r) =>
      `Aún no hay suficientes datos salariales para ${r}. Vuelve cuando el índice crezca.`,
    basedOn: (n) => `basado en ${n} ofertas`,
    howCalculated: 'Cómo se calcula',
    methodology:
      'Promediamos el mínimo y máximo de cada oferta que publica una banda salarial. Los valores percentiles provienen de la distribución ordenada de esos puntos medios. Las ofertas sin salario se excluyen. No se aplica conversión de divisas; cada divisa se calcula de forma aislada.',
    p25: 'Percentil 25',
    median: 'Mediana',
    average: 'Promedio',
    p75: 'Percentil 75',
  },
  de: {
    metaTitle: (r) => `Remote-${r}-Gehälter`,
    metaDescription: (r) =>
      `Median-, Durchschnitts- und Perzentil-Gehaltsspannen für Remote-${r}-Stellen, berechnet aus aktuellen Stellenausschreibungen.`,
    h1: (r) => `Remote-${r}-Gehälter`,
    subtitle: 'Live aus offenen Stellen in unserem Index berechnet.',
    noData: (r) =>
      `Noch nicht genug Gehaltsdaten für ${r}. Schau wieder vorbei, wenn der Index wächst.`,
    basedOn: (n) => `basierend auf ${n} Stellen`,
    howCalculated: 'Wie wird das berechnet',
    methodology:
      'Wir berechnen den Durchschnitt aus Minimum und Maximum jeder Stelle, die eine Gehaltsspanne veröffentlicht. Perzentilwerte kommen aus der sortierten Verteilung dieser Mittelpunkte. Stellen ohne Gehalt werden ausgeschlossen. Währungsumrechnung wird nicht angewendet; jede Währung wird isoliert berechnet.',
    p25: '25. Pzt.',
    median: 'Median',
    average: 'Durchschnitt',
    p75: '75. Pzt.',
  },
  pt: {
    metaTitle: (r) => `Salários remote ${r}`,
    metaDescription: (r) =>
      `Faixas salariais medianas e percentis para vagas remote ${r}, calculadas a partir das ofertas de emprego atuais.`,
    h1: (r) => `Salários remote ${r}`,
    subtitle: 'Calculado ao vivo das vagas abertas no nosso índice.',
    noData: (r) =>
      `Ainda não há dados salariais suficientes para ${r}. Volte quando o índice crescer.`,
    basedOn: (n) => `baseado em ${n} vagas`,
    howCalculated: 'Como é calculado',
    methodology:
      'Fazemos a média do mínimo e máximo de cada vaga que publica uma faixa salarial. Os valores de percentil vêm da distribuição ordenada desses pontos médios. Vagas sem salário são excluídas. Conversão de moeda não é aplicada; cada moeda é calculada isoladamente.',
    p25: 'Percentil 25',
    median: 'Mediana',
    average: 'Média',
    p75: 'Percentil 75',
  },
  it: {
    metaTitle: (r) => `Stipendi remote ${r}`,
    metaDescription: (r) =>
      `Fasce di stipendio mediane e percentili per ruoli remote ${r}, calcolate dalle offerte di lavoro attuali.`,
    h1: (r) => `Stipendi remote ${r}`,
    subtitle: "Calcolato in tempo reale dalle offerte aperte nel nostro indice.",
    noData: (r) =>
      `Non ci sono ancora abbastanza dati sugli stipendi per ${r}. Ricontrolla quando l'indice crescerà.`,
    basedOn: (n) => `basato su ${n} offerte`,
    howCalculated: 'Come viene calcolato',
    methodology:
      "Facciamo la media del minimo e massimo di ogni offerta che pubblica una fascia salariale. I valori percentili provengono dalla distribuzione ordinata di quei punti medi. Le offerte senza stipendio sono escluse. La conversione valutaria non viene applicata; ogni valuta è calcolata in isolamento.",
    p25: '25° pct',
    median: 'Mediana',
    average: 'Media',
    p75: '75° pct',
  },
  pl: {
    metaTitle: (r) => `Wynagrodzenia zdalne ${r}`,
    metaDescription: (r) =>
      `Mediany, średnie i percentyle widełek wynagrodzeń dla zdalnych stanowisk ${r}, obliczone z aktualnych ofert pracy.`,
    h1: (r) => `Wynagrodzenia zdalne ${r}`,
    subtitle: 'Obliczone na żywo z aktywnych ofert w naszym indeksie.',
    noData: (r) =>
      `Jeszcze za mało danych o wynagrodzeniach dla ${r}. Wróć, gdy indeks urośnie.`,
    basedOn: (n) => `na podstawie ${n} ofert`,
    howCalculated: 'Jak to jest obliczane',
    methodology:
      'Uśredniamy minimum i maksimum każdej oferty, która publikuje widełki wynagrodzenia. Wartości percentylowe pochodzą z posortowanego rozkładu tych punktów środkowych. Oferty bez wynagrodzenia są wykluczone. Konwersja walut nie jest stosowana; każda waluta jest obliczana oddzielnie.',
    p25: '25. percentyl',
    median: 'Mediana',
    average: 'Średnia',
    p75: '75. percentyl',
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
  const c = SALARY_I18N[params.lang];
  const role = params.role.replace('-', ' ');
  return buildMetadata({
    locale: params.lang,
    path: `salaries/${params.role}`,
    title: c.metaTitle(role),
    description: c.metaDescription(role),
  });
}

export default function SalaryPage({ params }: { params: { lang: Locale; role: string } }) {
  if (!ROLES.includes(params.role as Role)) notFound();
  const role = params.role as Role;
  const c = SALARY_I18N[params.lang];
  const roleLabel = role.replace('-', ' ');
  const usd = salaryStats(role, 'USD');
  const eur = salaryStats(role, 'EUR');
  return (
    <div className="space-y-8 max-w-2xl">
      <header>
        <h1 className="text-2xl font-semibold capitalize">
          {c.h1(roleLabel)}
        </h1>
        <p className="text-muted text-sm mt-1">{c.subtitle}</p>
      </header>

      {usd && (
        <SalaryTable currency="USD" stats={usd} locale={params.lang} c={c} />
      )}
      {eur && (
        <SalaryTable currency="EUR" stats={eur} locale={params.lang} c={c} />
      )}
      {!usd && !eur && (
        <p className="text-muted text-sm">{c.noData(roleLabel)}</p>
      )}

      <section className="text-sm text-muted leading-relaxed">
        <h2 className="text-base font-semibold text-ink mb-2">{c.howCalculated}</h2>
        <p>
          {c.methodology} {t(params.lang, 'footer.refreshed')} daily.
        </p>
      </section>
    </div>
  );
}

function SalaryTable({
  currency,
  stats,
  locale,
  c,
}: {
  currency: string;
  stats: NonNullable<ReturnType<typeof salaryStats>>;
  locale: Locale;
  c: SalaryCopy;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">
        {currency} · {c.basedOn(stats.count)}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: c.p25, value: stats.p25 },
          { label: c.median, value: stats.median },
          { label: c.average, value: stats.avg },
          { label: c.p75, value: stats.p75 },
        ].map((s) => (
          <div key={s.label} className="border border-line rounded p-3">
            <div className="text-xs text-muted">{s.label}</div>
            <div className="text-lg font-semibold mt-1">
              {currency} {Math.round(s.value).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted mt-2">{t(locale, 'label.updated')}</p>
    </section>
  );
}
