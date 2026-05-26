import type { Metadata } from 'next';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { AFFILIATES } from '@/lib/affiliates';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'disclosure',
    title: 'Affiliate disclosure',
    description:
      'Full list of affiliate partnerships used across slateremote.com, how we are compensated, and why these specific picks.',
  });
}

export default function DisclosurePage() {
  return (
    <article className="max-w-prose mx-auto space-y-8">
      <header className="border-b border-line pb-5">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">
          Transparency
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-normal tracking-tighter text-ink mt-1">
          Affiliate disclosure
        </h1>
        <p className="text-graphite text-base mt-3">
          Every product slateremote.com recommends is either a tool we use ourselves or one we have
          vetted carefully for the remote tech audience. Some of those product links pay us a
          commission. This page lists every commercial relationship, in full.
        </p>
      </header>

      <section className="prose-body">
        <h2>How we get paid</h2>
        <p>
          slateremote.com is free to browse, has no ads, and never charges candidates. The site
          covers its own costs (domain, hosting is free on Cloudflare Pages) through three
          channels:
        </p>
        <ul>
          <li>
            <strong>Featured job postings.</strong> Employers can pay to highlight a role across
            the site. See <a href="/en/submit">the submit page</a>.
          </li>
          <li>
            <strong>Affiliate partnerships.</strong> We earn a small commission if you sign up to
            one of the listed services through a link on this site. The full list is below.
          </li>
          <li>
            <strong>Sister sites.</strong> slateremote.com is part of a small network with
            slowmadly.com (slow-travel guides) and ai-by-job.com (AI tools by job). Each can earn
            from its own monetisation channels.
          </li>
        </ul>

        <h2>What we will not do</h2>
        <ul>
          <li>Recommend a product solely because it pays us better.</li>
          <li>Hide affiliate relationships. Every affiliate link is tagged <code>rel=&quot;sponsored&quot;</code>.</li>
          <li>Add tracking pixels beyond Cloudflare and Ahrefs analytics for our own page-view stats.</li>
          <li>Sell candidate data. We do not collect it.</li>
        </ul>

        <h2>Full list of affiliate partners</h2>
        <p>
          {AFFILIATES.length} active programs. Commission column shows what the program pays us
          per successful signup (not what you pay).
        </p>
      </section>

      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-left border-b border-line">
            <th className="py-2 pr-4 font-semibold text-ink">Partner</th>
            <th className="py-2 pr-4 font-semibold text-ink">Category</th>
            <th className="py-2 font-semibold text-ink">Our commission</th>
          </tr>
        </thead>
        <tbody>
          {AFFILIATES.map((a) => (
            <tr key={a.slug} className="border-b border-line/60">
              <td className="py-2 pr-4">
                <a
                  href={a.url}
                  target="_blank"
                  rel="nofollow noopener sponsored"
                  className="text-forest hover:underline font-medium"
                >
                  {a.name}
                </a>
              </td>
              <td className="py-2 pr-4 text-muted capitalize">{a.category}</td>
              <td className="py-2 text-muted">{a.payout}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className="prose-body">
        <h2>Question or concern?</h2>
        <p>
          If you spot a recommendation that looks off, email us via{' '}
          <a href="/en/contact">the contact page</a>. We remove partners that drift in quality.
        </p>
      </section>
    </article>
  );
}
