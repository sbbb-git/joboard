import { readJobs } from '@/lib/jobs';
import { t } from '@/lib/i18n';
import type { Locale } from '@/lib/types';

export function Footer({ locale }: { locale: Locale }) {
  const meta = readJobs();
  const refreshed = new Date(meta.generatedAt).toISOString().slice(0, 10);
  return (
    <footer className="border-t border-line bg-cream mt-16">
      <div className="mx-auto max-w-6xl px-5 py-8 text-xs text-muted flex flex-wrap items-center justify-between gap-3">
        <span>{t(locale, 'footer.disclaimer')}</span>
        <span>
          {t(locale, 'footer.refreshed')}: {refreshed} · {meta.count} jobs
        </span>
      </div>
    </footer>
  );
}
