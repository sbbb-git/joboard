import Link from 'next/link';
import type { Metadata } from 'next';
import { LOCALES } from '@/lib/i18n';
import { SITE_URL, hreflangAlternates } from '@/lib/seo';

// This route used to call redirect('/en'). Next's static export cannot
// perform a server redirect, so the export emitted an error shell
// (<html id="__next_error__">) with no canonical and no content, and Search
// Console shows Google indexed it. The domain root is where every external
// link and every direct visit lands, so it cannot be an error page.
//
// Instead: a real static page that consolidates to /en via canonical and
// sends visitors there immediately, while still rendering a usable language
// list for anyone the refresh does not move, and for crawlers.
export const dynamic = 'force-static';

const LOCALE_NAMES: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
};

export const metadata: Metadata = {
  title: 'slateremote.com · Remote tech jobs, refreshed weekly',
  description:
    'Remote engineering, data, design and product jobs aggregated from public job board APIs and refreshed every week, in English, French and German. Free to browse, no signup.',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: hreflangAlternates(''),
  },
  // The locale homepages are the pages meant to rank; this one only forwards.
  robots: { index: false, follow: true },
};

export default function RootIndex() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/en" />
      <main className="mx-auto max-w-2xl px-5 py-16 space-y-6">
        <h1 className="font-display text-3xl tracking-tighter text-ink">slateremote.com</h1>
        <p className="text-graphite">
          Remote tech jobs, refreshed weekly. Choose a language to continue.
        </p>
        <ul className="flex flex-wrap gap-2">
          {LOCALES.map((l) => (
            <li key={l}>
              <Link
                href={`/${l}`}
                hrefLang={l}
                className="inline-block px-4 py-2 rounded-full border border-line bg-paper text-graphite hover:border-ink hover:text-ink"
              >
                {LOCALE_NAMES[l] ?? l}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
