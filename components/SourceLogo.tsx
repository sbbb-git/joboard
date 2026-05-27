// Tiny favicon for each of the 8 job board sources we aggregate from.
// Uses Google S2 favicons (free, reliable, always returns something).

const DOMAINS: Record<string, string> = {
  remotive: 'remotive.com',
  remoteok: 'remoteok.com',
  arbeitnow: 'arbeitnow.com',
  weworkremotely: 'weworkremotely.com',
  himalayas: 'himalayas.app',
  jobicy: 'jobicy.com',
  themuse: 'themuse.com',
  hackernews: 'news.ycombinator.com',
  workingnomads: 'workingnomads.com',
  jobspresso: 'jobspresso.co',
};

const LABELS: Record<string, string> = {
  remotive: 'Remotive',
  remoteok: 'Remote OK',
  arbeitnow: 'Arbeitnow',
  weworkremotely: 'We Work Remotely',
  himalayas: 'Himalayas',
  jobicy: 'Jobicy',
  themuse: 'The Muse',
  hackernews: 'Hacker News',
  workingnomads: 'Working Nomads',
  jobspresso: 'Jobspresso',
};

export function SourceLogo({
  source,
  size = 16,
  showLabel = false,
}: {
  source: string;
  size?: number;
  showLabel?: boolean;
}) {
  const domain = DOMAINS[source] ?? `${source}.com`;
  const label = LABELS[source] ?? source;
  const url = `https://www.google.com/s2/favicons?domain=${domain}&sz=${Math.max(size * 2, 32)}`;
  return (
    <span className="inline-flex items-center gap-1.5">
      <img
        src={url}
        alt={`${label} logo`}
        loading="lazy"
        referrerPolicy="no-referrer"
        width={size}
        height={size}
        className="rounded-sm flex-shrink-0"
        style={{ width: size, height: size }}
      />
      {showLabel && <span className="text-xs text-muted">{label}</span>}
    </span>
  );
}
