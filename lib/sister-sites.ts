export interface SisterSite {
  name: string;
  domain: string;
  url: string;
  tagline: string;
}

export const SISTER_NOMAD: SisterSite = {
  name: 'Slowmadly',
  domain: 'slowmadly.com',
  url: 'https://slowmadly.com',
  tagline: 'Country guides for nomads who stay a while.',
};

export const SISTER_AI: SisterSite = {
  name: 'AI by Job',
  domain: 'ai-by-job.com',
  url: 'https://ai-by-job.com',
  tagline: 'The best AI tools for every job, in 7 languages.',
};

// Map a city/country to a likely slowmadly.com path. Falls back to root.
export function slowmadlyCountryUrl(country: string | undefined | null): string {
  if (!country) return SISTER_NOMAD.url;
  const slug = country.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `${SISTER_NOMAD.url}/${slug}`;
}

// Map a role to a likely ai-by-job.com path. Falls back to root.
export function aiByJobRoleUrl(role: string | undefined | null): string {
  if (!role) return SISTER_AI.url;
  const slug = role.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `${SISTER_AI.url}/en/jobs/${slug}`;
}
