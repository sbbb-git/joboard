import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
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
    default: 'slateremote.com · Remote tech jobs, refreshed daily',
    template: '%s · slateremote.com',
  },
  description:
    'A curated index of remote engineering, data, design and product jobs, aggregated from eight public job board APIs and refreshed every day.',
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

const CF_ANALYTICS_TOKEN =
  process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN ?? 'c936ca5662e240edb31f83de853086de';
const AHREFS_KEY = process.env.NEXT_PUBLIC_AHREFS_KEY ?? 'UHRiRpUtDUeXqcHIFhdjcA';
const GA_ID = 'G-E3GBH13T19';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <head>
        <link rel="preconnect" href="https://logo.clearbit.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://logo.clearbit.com" />
        <link rel="preconnect" href="https://static.cloudflareinsights.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-bg text-ink antialiased font-sans">
        {children}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
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
