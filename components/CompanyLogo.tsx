'use client';

import { useState } from 'react';
import type { Role } from '@/lib/types';

interface Props {
  company: string;
  companySlug: string;
  role?: Role;
  size?: number; // pixel size of the square
  className?: string;
}

function gradient(name: string): string {
  const grads = [
    'from-forestSoft to-amberSoft',
    'from-terracottaSoft to-amberSoft',
    'from-forestSoft to-terracottaSoft',
    'from-amberSoft to-sand',
    'from-sand to-terracottaSoft',
    'from-forestSoft to-sand',
  ];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return grads[h % grads.length];
}

const ROLE_EMOJI: Record<string, string> = {
  developer: '👩‍💻',
  frontend: '🎨',
  backend: '🛠️',
  fullstack: '🧩',
  mobile: '📱',
  data: '📊',
  'ml-ai': '✨',
  devops: '🔧',
  security: '🔒',
  qa: '🧪',
  product: '🧭',
  design: '🖌️',
};

// Real company logo via Clearbit (no API key). Gracefully falls back to a
// deterministic gradient tile with a role-themed emoji when the domain
// guess fails — much nicer than a single random letter.
export function CompanyLogo({ company, companySlug, role, size = 44, className = '' }: Props) {
  const [errored, setErrored] = useState(false);
  const url = `https://logo.clearbit.com/${companySlug.replace(/-/g, '')}.com`;
  const dim = { width: size, height: size };
  const emoji = role ? ROLE_EMOJI[role] ?? '·' : '·';
  const fontSize = Math.max(16, Math.round(size * 0.5));

  if (errored) {
    return (
      <div
        style={dim}
        className={`flex-shrink-0 rounded-xl bg-gradient-to-br ${gradient(company)} flex items-center justify-center ${className}`}
        aria-hidden={!role}
        aria-label={role ? `${role} role` : undefined}
      >
        <span style={{ fontSize }} className="leading-none select-none">
          {emoji}
        </span>
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
