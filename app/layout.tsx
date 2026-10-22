import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Consent } from '@/components/Consent';
import { Instrument_Serif, Inter } from 'next/font/google';
import './globals.css';

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#fafaf8',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://slateremote.com'),
  title: {
    default: 'slateremote.com · Guides for remote tech workers',
    // Page titles are used verbatim. A ' · slateremote.com' suffix here added
    // 18 chars to every title on the site and pushed ~1,000 of them past the
    // ~60-char point where Google truncates in the SERP. The domain already
    // shows on its own line in the result, so the suffix bought nothing.
    template: '%s',
  },
  description:
    'Practical guides for remote tech workers: earning on talent platforms, getting paid across borders, travel insurance and the tools worth using.',
  applicationName: 'slateremote.com',
  formatDetection: { telephone: false, email: false, address: false },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.png'],
  },
};

// `||`, not `??`: the deploy workflow passes NEXT_PUBLIC_CF_ANALYTICS_TOKEN
// from a repository secret, and an unset secret arrives as an empty string.
// With `??` that empty string won, the beacon was never rendered, and
// Cloudflare Web Analytics recorded nothing for this site in production.
const CF_ANALYTICS_TOKEN =
  process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN || 'c936ca5662e240edb31f83de853086de';
const AHREFS_KEY = process.env.NEXT_PUBLIC_AHREFS_KEY || 'UHRiRpUtDUeXqcHIFhdjcA';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <head>
        <link rel="preconnect" href="https://static.cloudflareinsights.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-bg text-ink antialiased font-sans">
        {children}
        {/* GA4 sets cookies, so it only loads once the reader accepts. */}
        <Consent />
        {CF_ANALYTICS_TOKEN && (
          <Script
            strategy="afterInteractive"
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${CF_ANALYTICS_TOKEN}"}`}
          />
        )}
        {AHREFS_KEY && (
          <Script
            strategy="afterInteractive"
            src="https://analytics.ahrefs.com/analytics.js"
            data-key={AHREFS_KEY}
          />
        )}
      </body>
    </html>
  );
}
