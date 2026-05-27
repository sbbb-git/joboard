import { cityImage } from '@/lib/city-images';
import { flagFor } from '@/lib/flags';

interface Props {
  slug: string;
  name: string;
  country: string;
  blurb?: string;
}

// Full-width hero banner for a city detail page.
export function CityHero({ slug, name, country, blurb }: Props) {
  const src = cityImage(slug);
  return (
    <div className="relative -mt-2 mb-2 rounded-2xl overflow-hidden border border-line shadow-soft">
      <img
        src={src}
        alt={`${name}, ${country}`}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="w-full h-56 md:h-72 lg:h-80 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 text-bg">
        <p className="text-[11px] uppercase tracking-wider opacity-80">
          {flagFor(country)} {country}
        </p>
        <h1 className="font-display text-3xl md:text-5xl font-normal tracking-tighter mt-1 leading-tight">
          {name}
        </h1>
        {blurb && (
          <p className="text-sm md:text-base opacity-90 mt-2 max-w-prose">{blurb}</p>
        )}
      </div>
    </div>
  );
}

// Small image strip used inside compact CityCard
export function CityThumb({ slug, name, country }: { slug: string; name: string; country: string }) {
  return (
    <div className="relative rounded-xl overflow-hidden h-32">
      <img
        src={cityImage(slug)}
        alt={`${name}, ${country}`}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
      <div className="absolute bottom-2 left-3 right-3 text-bg">
        <div className="text-[11px] opacity-80">{flagFor(country)} {country}</div>
        <div className="font-semibold text-base leading-tight">{name}</div>
      </div>
    </div>
  );
}
