export type Locale = 'en' | 'fr' | 'es' | 'de';
export const LOCALES: Locale[] = ['en', 'fr', 'es', 'de'];
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
