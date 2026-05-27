import Link from 'next/link';
import { localePath } from '@/lib/i18n';
import { flagFor } from '@/lib/flags';
import { cityImage } from '@/lib/city-images';
import type { CityEntry } from '@/lib/cities';
import type { Locale } from '@/lib/types';

export function CityCard({ city, locale }: { city: CityEntry; locale: Locale }) {
  return (
    <Link
      href={localePath(locale, `cities/${city.slug}`)}
      className="group block rounded-2xl border border-line bg-paper shadow-soft hover-lift hover:shadow-lift hover:border-ink/20 overflow-hidden"
    >
      <div className="relative h-32 overflow-hidden">
        <img
          src={cityImage(city.slug)}
          alt={`${city.name}, ${city.country}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
        <div className="absolute bottom-2 left-3 right-3 text-bg">
          <div className="text-[11px] opacity-80 mb-0.5">
            {flagFor(city.country)} {city.country}
          </div>
          <div className="font-display text-xl font-normal leading-tight">{city.name}</div>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-[11px]">
          <Stat label="Cost" value={`$${city.costOfLivingUsd.toLocaleString()}`} />
          <Stat label="Internet" value={`${city.internetMbps}+ Mbps`} />
          <Stat label="TZ" value={city.timezone.split(' ')[0]} />
          {city.visa && <Stat label="Visa" value="Available" />}
        </div>
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
