import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#fafaf8',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://remotedev.work'),
  title: {
    default: 'remotedev.work · Remote tech jobs, refreshed daily',
    template: '%s · remotedev.work',
  },
  description:
    'A curated index of remote engineering, data, design and product jobs, aggregated from eight public job board APIs and refreshed every day.',
  applicationName: 'remotedev.work',
  formatDetection: { telephone: false, email: false, address: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream text-ink antialiased font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
