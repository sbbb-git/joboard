'use client';

import { useState } from 'react';

interface Props {
  company: string;
  companySlug: string;
  size?: number; // pixel size of the square
  className?: string;
}

function tileColors(name: string): { bg: string; fg: string } {
  const palette = [
    { bg: 'bg-forestSoft', fg: 'text-forest' },
    { bg: 'bg-terracottaSoft', fg: 'text-terracotta' },
    { bg: 'bg-amberSoft', fg: 'text-amber' },
    { bg: 'bg-sand', fg: 'text-ink' },
  ];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return palette[h % palette.length];
}

// Real company logo via Clearbit (no API key, free for our scale). Gracefully
// falls back to a deterministic colored letter tile when the domain guess fails.
export function CompanyLogo({ company, companySlug, size = 44, className = '' }: Props) {
  const [errored, setErrored] = useState(false);
  const tile = tileColors(company);
  const initial = (company.charAt(0) || '?').toUpperCase();
  // Best guess: companyslug.com. Works ~60% of the time for tech companies.
  // The onError handler swaps to the letter tile when the guess fails.
  const url = `https://logo.clearbit.com/${companySlug.replace(/-/g, '')}.com`;
  const dim = { width: size, height: size };

  if (errored) {
    return (
      <div
        style={dim}
        className={`flex-shrink-0 rounded-xl ${tile.bg} ${tile.fg} flex items-center justify-center font-bold ${className}`}
      >
        {initial}
      </div>
    );
  }

  return (
    <img
      src={url}
      alt={`${company} logo`}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setErrored(true)}
      style={dim}
      className={`flex-shrink-0 rounded-xl object-cover bg-sand ${className}`}
    />
  );
}
