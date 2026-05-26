'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'slateremote.bookmarks';

function readBookmarks(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeBookmarks(ids: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // ignore storage failures
  }
}

export function BookmarkButton({
  id,
  variant = 'full',
}: {
  id: string;
  variant?: 'full' | 'icon';
}) {
  const [saved, setSaved] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSaved(readBookmarks().includes(id));
  }, [id]);

  function toggle() {
    const current = readBookmarks();
    const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
    writeBookmarks(next);
    setSaved(next.includes(id));
  }

  // Avoid SSR hydration flicker by not rendering anything until mounted
  if (!mounted) {
    if (variant === 'icon') {
      return <span aria-hidden="true" className="inline-block w-9 h-9 rounded-full border border-line bg-paper" />;
    }
    return (
      <span aria-hidden="true" className="inline-block h-9 w-[105px] rounded-full border border-line bg-paper" />
    );
  }

  if (variant === 'icon') {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-pressed={saved}
        aria-label={saved ? 'Remove bookmark' : 'Save job'}
        className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${
          saved
            ? 'bg-terracottaSoft text-terracotta border-terracotta'
            : 'bg-paper border-line hover:border-ink'
        }`}
      >
        <Heart filled={saved} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={saved}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
        saved
          ? 'bg-terracottaSoft text-terracotta border-terracotta'
          : 'bg-paper text-ink border-line hover:border-ink'
      }`}
    >
      <Heart filled={saved} />
      {saved ? 'Saved' : 'Save job'}
    </button>
  );
}

function Heart({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
