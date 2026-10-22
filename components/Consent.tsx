'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Google Analytics 4 sets cookies (_ga, _ga_*), which under the ePrivacy
// rules the CNIL enforces need the reader's prior consent. It used to load on
// every page unconditionally. It now loads only after an explicit "Accept",
// and refusing must be as easy as accepting, so both buttons sit side by side.
// Cloudflare Web Analytics and Ahrefs Web Analytics are cookieless and stay
// outside this gate.
//
// The choice is kept in localStorage, and the footer's "Cookies" link
// (CONSENT_RESET_EVENT) reopens the banner so consent can be withdrawn.

const GA_ID = 'G-E3GBH13T19';
const KEY = 'sr-consent-v1';
export const CONSENT_RESET_EVENT = 'sr-consent-reset';

type Choice = 'granted' | 'denied' | null;

const COPY = {
  en: {
    text: 'We use Google Analytics cookies to see which guides are read. Nothing is set unless you accept.',
    accept: 'Accept',
    refuse: 'Refuse',
  },
  fr: {
    text: 'Nous utilisons des cookies Google Analytics pour savoir quels guides sont lus. Rien n’est déposé sans votre accord.',
    accept: 'Accepter',
    refuse: 'Refuser',
  },
  de: {
    text: 'Wir nutzen Google-Analytics-Cookies, um zu sehen, welche Guides gelesen werden. Ohne Ihre Zustimmung wird nichts gesetzt.',
    accept: 'Akzeptieren',
    refuse: 'Ablehnen',
  },
} as const;

function read(): Choice {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function Consent() {
  const pathname = usePathname() || '/';
  const lang = (pathname.split('/')[1] || 'en').replace(/\.html$/, '') as keyof typeof COPY;
  const c = COPY[lang] ?? COPY.en;
  // undefined until mounted, so the static HTML never contains the banner or
  // the GA scripts and there is no flash for readers who already chose.
  const [choice, setChoice] = useState<Choice | undefined>(undefined);

  useEffect(() => {
    setChoice(read());
    const reopen = () => {
      try {
        window.localStorage.removeItem(KEY);
      } catch {}
      // Withdrawing consent: drop the GA cookies already set on this domain.
      document.cookie.split(';').forEach((ck) => {
        const name = ck.split('=')[0].trim();
        if (name === '_ga' || name.startsWith('_ga_')) {
          document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname}`;
          document.cookie = `${name}=; Max-Age=0; path=/`;
        }
      });
      setChoice(null);
    };
    window.addEventListener(CONSENT_RESET_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_RESET_EVENT, reopen);
  }, []);

  const decide = (v: 'granted' | 'denied') => {
    try {
      window.localStorage.setItem(KEY, v);
    } catch {}
    setChoice(v);
  };

  return (
    <>
      {choice === 'granted' && (
        <>
          <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      )}
      {choice === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookies"
          className="fixed bottom-3 inset-x-3 sm:left-auto sm:right-4 sm:max-w-md z-50 rounded-2xl border border-line bg-paper shadow-lift p-4"
        >
          <p className="text-sm text-graphite leading-relaxed">{c.text}</p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => decide('denied')}
              className="flex-1 px-4 py-2 rounded-full border border-line text-sm text-ink hover:border-ink"
            >
              {c.refuse}
            </button>
            <button
              type="button"
              onClick={() => decide('granted')}
              className="flex-1 px-4 py-2 rounded-full border border-line text-sm text-ink hover:border-ink"
            >
              {c.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function ConsentLink({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(CONSENT_RESET_EVENT))}
      className="text-xs text-muted hover:text-ink transition-colors"
    >
      {label}
    </button>
  );
}
