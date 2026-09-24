// Cut from seven locales to three in 2026-09. Search Console showed 87.5% of
// queries in English and 10.6% in German, with zero queries in Polish or
// Italian, yet /pl/ and /it/ pages drew 32% of impressions: Google Jobs was
// picking one of seven identical URLs per posting and sending English-language
// searchers to Polish and Italian chrome (0 clicks on 218 /pl/ impressions).
// French is kept for the owner's market and partner network. The removed
// locales 301 to /en via public/_redirects.
export type Locale = 'en' | 'fr' | 'de';
export const LOCALES: Locale[] = ['en', 'fr', 'de'];
export const DEFAULT_LOCALE: Locale = 'en';

export type Seniority = 'junior' | 'mid' | 'senior' | 'lead';
export type RemoteType = 'full' | 'hybrid' | 'onsite';
export type EmploymentType = 'FULL_TIME' | 'CONTRACTOR' | 'PART_TIME' | 'INTERN';

export type Role =
  | 'developer'
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'mobile'
  | 'data'
  | 'ml-ai'
  | 'devops'
  | 'security'
  | 'qa'
  | 'product'
  | 'design';

export const ROLES: Role[] = [
  'developer',
  'frontend',
  'backend',
  'fullstack',
  'mobile',
  'data',
  'ml-ai',
  'devops',
  'security',
  'qa',
  'product',
  'design',
];

export interface JobNormalized {
  id: string;
  title: string;
  company: string;
  companySlug: string;
  location: string;
  locationCountry?: string;
  role: Role;
  seniority: Seniority;
  remote: RemoteType;
  employmentType: EmploymentType;
  salaryMin?: number;
  salaryMax?: number;
  currency?: string;
  url: string;
  source: string;
  postedAt: string;
  expiresAt: string;
  description: string;
  tags?: string[];
}

export interface JobsFile {
  generatedAt: string;
  count: number;
  jobs: JobNormalized[];
}
