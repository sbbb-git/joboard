import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

const GUIDES: Record<string, { title: string; description: string; body: string }> = {
  'finding-a-remote-tech-job': {
    title: 'How to find a remote tech job in 2026',
    description:
      'A practical walkthrough for landing a remote engineering, data or product role from scratch.',
    body: `Remote hiring in tech has matured. The companies still posting truly distributed roles in 2026 are a smaller, more selective set than at the 2021 peak, but the bar to apply has dropped: most accept candidates from anywhere within compatible timezones.

## Where to look first
Start with aggregators that pull from company applicant tracking systems directly, not job board scrapes. The signal-to-noise ratio is far higher on listings sourced from Greenhouse, Lever or Workday than on generic boards.

## Tailoring the application
Hiring managers screen for two things on remote applications: written communication and async judgment. A short, well-structured cover letter that names the team's recent shipped work outperforms a generic CV cold-send by an order of magnitude.

## Salary expectations
Remote does not mean discounted. Companies pay either to the candidate's local market or to a fixed band; the bands at well-funded scale-ups remain within 10 to 15 percent of in-office equivalents for senior engineers.

## Timezones
The single most filtered criterion in 2026 is timezone overlap. Four hours of overlap with the company's core hub is the working minimum for engineering roles, two for individual-contributor data roles.`,
  },
  'remote-developer-salary-guide': {
    title: 'Remote developer salary guide',
    description:
      'How to read salary bands on remote job postings, and what numbers to expect by seniority.',
    body: `Most remote postings now publish a band. Reading them correctly matters more than negotiating against them.

## What the numbers mean
The published band is almost always the IC range for a single level. A posting at 150 to 190 means the company hires that level inside that range, not that you can negotiate to 250 with enough leverage.

## Seniority brackets
Junior engineers at remote-first companies cluster between 70 and 110 thousand USD. Mid-level engineers sit at 110 to 150. Senior bands run 150 to 220, with staff and principal extending to 280 and beyond at the better-funded employers.

## Equity
Equity grants on remote offers have compressed. Series B and later companies now grant 0.05 to 0.2 percent for senior engineers, vesting over four years.

## Currency
Companies pay in their headquarters' currency by default. USD-denominated offers from US-based companies are the most common, EUR-denominated from EU companies, GBP from UK. Conversion happens at the contractor or employer-of-record level.`,
  },
};

export function generateStaticParams() {
  const slugs = Object.keys(GUIDES);
  return LOCALES.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export function generateMetadata({
  params,
}: {
  params: { lang: Locale; slug: string };
}): Metadata {
  const g = GUIDES[params.slug];
  if (!g) return { title: 'Guide not found' };
  return buildMetadata({
    locale: params.lang,
    path: `guides/${params.slug}`,
    title: g.title,
    description: g.description,
  });
}

export default function GuidePage({ params }: { params: { lang: Locale; slug: string } }) {
  const g = GUIDES[params.slug];
  if (!g) notFound();
  return (
    <article className="max-w-prose mx-auto space-y-6">
      <header className="border-b border-line pb-4">
        <h1 className="text-2xl md:text-3xl font-semibold">{g.title}</h1>
        <p className="text-muted text-sm mt-2">{g.description}</p>
      </header>
      <div className="prose-body whitespace-pre-line text-[0.95rem] leading-relaxed">
        {g.body}
      </div>
    </article>
  );
}
