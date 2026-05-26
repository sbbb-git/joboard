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
    path: 'contact',
    title: 'Contact slateremote.com',
    description: 'Reach out for corrections, takedown requests, or partnership inquiries.',
  });
}

const EMAIL = 'hello@slateremote.com';

export default function ContactPage() {
  return (
    <article className="max-w-prose mx-auto space-y-6">
      <header className="border-b border-line pb-4">
        <h1 className="text-2xl md:text-3xl font-semibold">Contact</h1>
      </header>

      <section className="prose-body text-[0.95rem] leading-relaxed space-y-4">
        <p>
          The fastest way to reach us is by email:
        </p>
        <p className="text-lg">
          <a href={`mailto:${EMAIL}`} className="text-forest hover:underline">
            {EMAIL}
          </a>
        </p>

        <h2 className="text-lg font-semibold">Corrections and takedowns</h2>
        <p>
          If a listing is incorrect, outdated, or you are the employer and would like it removed,
          email us with the job URL. We process takedown requests within 48 hours.
        </p>

        <h2 className="text-lg font-semibold">Listing a job</h2>
        <p>
          slateremote.com indexes jobs from public job board APIs. To list yours, simply publish
          on any of our source sites and it appears here within 24 hours. For featured placement
          across the site, see the <a href="/en/submit" className="text-forest hover:underline">submit page</a>.
        </p>

        <h2 className="text-lg font-semibold">Partnerships</h2>
        <p>
          For partnership and integration inquiries, email us with a brief description of what
          you have in mind.
        </p>
      </section>
    </article>
  );
}
