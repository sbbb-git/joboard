import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';

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
  alternates: {
    types: {
      'application/rss+xml': [{ url: '/feed.xml', title: 'slateremote.com jobs feed' }],
    },
  },
  manifest: '/manifest.json',
};

const CF_ANALYTICS_TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream text-ink antialiased font-sans">
        {children}
        {CF_ANALYTICS_TOKEN && (
          <Script
            strategy="afterInteractive"
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${CF_ANALYTICS_TOKEN}"}`}
          />
        )}
      </body>
    </html>
  );
}
