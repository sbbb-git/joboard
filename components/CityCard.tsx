import Link from 'next/link';
import { localePath } from '@/lib/i18n';
import { flagFor } from '@/lib/flags';
import type { CityEntry } from '@/lib/cities';
import type { Locale } from '@/lib/types';

export function CityCard({ city, locale }: { city: CityEntry; locale: Locale }) {
  return (
    <Link
      href={localePath(locale, `cities/${city.slug}`)}
      className="group block rounded-2xl border border-line bg-paper shadow-soft hover-lift hover:shadow-lift hover:border-ink/20 p-5"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-2xl mb-1">{flagFor(city.country)}</div>
          <h3 className="font-semibold text-ink group-hover:text-forest transition-colors">
            {city.name}
          </h3>
          <p className="text-[11px] uppercase tracking-wider text-subtle mt-0.5">
            {city.country}
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-y-1.5 gap-x-3 text-[11px]">
        <Stat label="Cost" value={`$${city.costOfLivingUsd.toLocaleString()}`} />
        <Stat label="Internet" value={`${city.internetMbps}+ Mbps`} />
        <Stat label="TZ" value={city.timezone.split(' ')[0]} />
        {city.visa && <Stat label="Visa" value="Available" />}
      </div>
    </Link>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-subtle">{label}</div>
      <div className="text-graphite font-medium">{value}</div>
    </div>
  );
}
