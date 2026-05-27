import type { Metadata } from 'next';
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
    path: 'submit',
    title: 'Submit a remote tech job · featured placement',
    description:
      'Get your job featured across slateremote.com for 30 days: front-page slot, role-page top, and city-page top placement.',
  });
}

// Replace these with the Stripe Payment Link URLs once created on Stripe:
const FEATURED_30D_URL = process.env.NEXT_PUBLIC_STRIPE_FEATURED_30D || 'mailto:hello@slateremote.com?subject=Featured%20job%2049%20USD';
const SPONSORED_TOP_URL = process.env.NEXT_PUBLIC_STRIPE_SPONSORED_TOP || 'mailto:hello@slateremote.com?subject=Sponsored%20placement%2099%20USD';

export default function SubmitPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="border-b border-line pb-4">
        <h1 className="text-2xl md:text-3xl font-semibold">Submit a remote tech job</h1>
        <p className="text-muted text-sm mt-2">
          Reach engineers, designers and product candidates across slateremote.com.
        </p>
      </header>

      <section className="prose-body text-[0.95rem] leading-relaxed space-y-3">
        <p>
          slateremote.com pulls jobs automatically from eight public job boards. If your role is
          already on Remotive, RemoteOK, We Work Remotely, Arbeitnow, Himalayas, Jobicy, The Muse
          or Hacker News &quot;Who is hiring&quot;, it lands here within 24 hours at no cost.
        </p>
        <p>
          For higher visibility, choose one of the placements below.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <article className="border border-line rounded-lg p-5 bg-white">
          <h2 className="font-semibold">Featured listing</h2>
          <p className="text-xs uppercase tracking-wider text-muted mt-1">30 days</p>
          <p className="text-3xl font-semibold mt-3">$49</p>
          <ul className="text-sm text-muted mt-4 space-y-1.5">
            <li>· Top of the front page for 30 days</li>
            <li>· Top of the matching role page</li>
            <li>· Top of the matching city page when relevant</li>
            <li>· Highlighted styling on every list view</li>
          </ul>
          <a
            href={FEATURED_30D_URL}
            className="inline-block mt-5 px-4 py-2 bg-ink text-bg rounded text-sm hover:opacity-90"
          >
            Buy featured slot →
          </a>
        </article>

        <article className="border border-line rounded-lg p-5 bg-forestSoft">
          <h2 className="font-semibold">Sponsored placement</h2>
          <p className="text-xs uppercase tracking-wider text-forest mt-1">Per week</p>
          <p className="text-3xl font-semibold mt-3">$99<span className="text-base text-muted">/week</span></p>
          <ul className="text-sm text-muted mt-4 space-y-1.5">
            <li>· Pinned at the very top across all relevant pages</li>
            <li>· Distinct sponsor tag</li>
            <li>· Cross-language placement (en, fr, es, de, pt, it, pl)</li>
            <li>· Cancellable any time</li>
          </ul>
          <a
            href={SPONSORED_TOP_URL}
            className="inline-block mt-5 px-4 py-2 bg-ink text-bg rounded text-sm hover:opacity-90"
          >
            Buy sponsored slot →
          </a>
        </article>
      </section>

      <section className="text-sm text-muted leading-relaxed space-y-2">
        <h2 className="text-base font-semibold text-ink">How it works</h2>
        <p>
          Pay via Stripe, then send us the job URL by email. Featured placement goes live within
          24 hours. We only accept legitimate remote-friendly tech positions; misleading listings
          are refunded and removed.
        </p>
      </section>
    </div>
  );
}
