import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces
        bg: '#fbfaf7',
        paper: '#ffffff',
        sand: '#f3f1ea',
        // Text
        ink: '#0c0d12',
        graphite: '#3a3a45',
        muted: '#6b6b75',
        subtle: '#9a9aa3',
        // Lines
        line: '#e5e2d8',
        lineSoft: '#efedde',
        // Brand
        forest: '#0a5d3f',
        forestDark: '#063a27',
        forestSoft: '#d5e8e0',
        // Accent
        terracotta: '#d97757',
        terracottaSoft: '#f7e6db',
        // Yellow for salary highlights
        amber: '#b7892f',
        amberSoft: '#f4ead0',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Inter', 'sans-serif'],
        display: ['ui-sans-serif', 'system-ui', '-apple-system', 'Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(12,13,18,0.04), 0 4px 16px rgba(12,13,18,0.05)',
        lift: '0 2px 4px rgba(12,13,18,0.06), 0 14px 36px rgba(12,13,18,0.10)',
        ring: 'inset 0 0 0 1px rgba(12,13,18,0.06)',
        ringForest: 'inset 0 0 0 1px rgba(10,93,63,0.18)',
      },
      backgroundImage: {
        'mesh': 'radial-gradient(at 18% 22%, rgba(10,93,63,0.10) 0px, transparent 50%), radial-gradient(at 82% 18%, rgba(217,119,87,0.10) 0px, transparent 45%), radial-gradient(at 50% 95%, rgba(183,137,47,0.08) 0px, transparent 50%)',
        'mesh-soft': 'radial-gradient(at 0% 0%, rgba(10,93,63,0.06) 0px, transparent 40%), radial-gradient(at 100% 0%, rgba(217,119,87,0.06) 0px, transparent 40%)',
      },
      animation: {
        fadein: 'fadein 320ms ease-out both',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
