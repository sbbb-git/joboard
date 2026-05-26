import type { Metadata } from 'next';
import Link from 'next/link';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'about',
    title: 'About slateremote.com',
    description:
      'How slateremote.com is built, what data it aggregates, and how the index is kept fresh.',
  });
}

export default function AboutPage({ params }: { params: { lang: Locale } }) {
  return (
    <article className="max-w-prose mx-auto space-y-6">
      <header className="border-b border-line pb-4">
        <h1 className="text-2xl md:text-3xl font-semibold">About slateremote.com</h1>
        <p className="text-muted text-sm mt-2">
          A curated index of remote tech jobs, aggregated from public job board APIs.
        </p>
      </header>

      <section className="prose-body text-[0.95rem] leading-relaxed space-y-4">
        <h2 className="text-lg font-semibold">What this is</h2>
        <p>
          slateremote.com is an aggregator of remote engineering, data, design, and product job
          postings. Every listing in our index is pulled from a public, documented job board API.
          We do not scrape websites without permission, do not republish proprietary content, and
          do not modify employer copy.
        </p>

        <h2 className="text-lg font-semibold">Sources</h2>
        <p>The index is built from eight sources:</p>
        <ul>
          <li>Remotive · public API</li>
          <li>Remote OK · public API</li>
          <li>Arbeitnow · public API</li>
          <li>We Work Remotely · public RSS feeds</li>
          <li>Himalayas · public API</li>
          <li>Jobicy · public API</li>
          <li>The Muse · public API</li>
          <li>Hacker News &quot;Who is hiring&quot; · public Algolia API</li>
        </ul>

        <h2 className="text-lg font-semibold">How often it updates</h2>
        <p>
          A scheduled job runs once a day at 04:00 UTC. It pulls fresh listings from all eight
          sources, deduplicates them, removes spam and expired entries, and commits the result.
          A new build deploys automatically after each commit.
        </p>

        <h2 className="text-lg font-semibold">Salary numbers</h2>
        <p>
          Salary pages compute median, average and percentile bands live from the postings that
          publish a salary range. Currency conversion is not applied; each currency is reported
          in isolation. Pages with too few data points display the global benchmark instead.
        </p>

        <h2 className="text-lg font-semibold">Applying</h2>
        <p>
          Every job links directly to the employer&apos;s application page. We do not collect
          applications. We do not intermediate communication between candidates and employers.
        </p>

        <h2 className="text-lg font-semibold">Contact</h2>
        <p>
          For corrections, takedown requests, or general questions, see the{' '}
          <Link href={`/${params.lang}/contact`} className="text-accent hover:underline">
            contact page
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
