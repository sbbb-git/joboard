import type { JobNormalized } from '../types';
import { detectRole, detectSeniority, normalizeLocation, slugify, stripHtml } from '../normalize';
import { jobHash } from '../dedupe';

interface BraintrustEmployer {
  id: number;
  name: string;
}

interface BraintrustSkill {
  id: number;
  name: string;
}

interface BraintrustLocation {
  location: string;
}

interface BraintrustJob {
  id: number;
  title: string;
  employer: BraintrustEmployer;
  budget_minimum_usd: string | null;
  budget_maximum_usd: string | null;
  payment_type: 'hourly' | 'fixed' | string;
  main_skills: BraintrustSkill[];
  job_skills?: number[];
  created: string;
  deadline: string | null;
  contract_type: 'short' | 'long' | string;
  expected_hours_per_week: number | null;
  locations: BraintrustLocation[];
  role?: { name: string };
  job_type?: string;
}

interface BraintrustResponse {
  count: number;
  next: string | null;
  results: BraintrustJob[];
}

const ENDPOINT = 'https://app.usebraintrust.com/api/jobs';
const MAX_PAGES = 10; // hard cap so a runaway pagination cannot hang the build

export async function scrapeBraintrust(): Promise<JobNormalized[]> {
  const jobs: JobNormalized[] = [];
  let url: string | null = ENDPOINT;
  let pages = 0;
  while (url && pages < MAX_PAGES) {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'slateremote.com-bot/1.0 (+https://slateremote.com)',
        accept: 'application/json',
      },
      next: { revalidate: 0 },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Braintrust HTTP ${res.status}`);
    const data = (await res.json()) as BraintrustResponse;
    for (const j of data.results) jobs.push(mapJob(j));
    // Force https in case the API hands back http for the next pointer
    url = data.next ? data.next.replace(/^http:/, 'https:') : null;
    pages += 1;
  }
  return jobs;
}

function mapJob(j: BraintrustJob): JobNormalized {
  // Braintrust posts are remote-first; locations describe candidate eligibility.
  const primaryLoc = j.locations[0]?.location ?? 'Remote';
  const loc = normalizeLocation(primaryLoc);
  const skillNames = (j.main_skills ?? []).map((s) => s.name);
  const description = stripHtml(
    [
      `${j.title} at ${j.employer.name}.`,
      j.role?.name ? `Role: ${j.role.name}.` : '',
      skillNames.length ? `Skills: ${skillNames.join(', ')}.` : '',
      j.expected_hours_per_week ? `Expected hours per week: ${j.expected_hours_per_week}.` : '',
      j.locations.length ? `Eligible from: ${j.locations.map((l) => l.location).join(', ')}.` : '',
      'Apply directly on Braintrust.',
    ]
      .filter(Boolean)
      .join('\n\n'),
  );
  const postedAt = j.created;
  const expiresAt = j.deadline ?? new Date(Date.now() + 60 * 86_400_000).toISOString();

  // Braintrust pays in USD and posts mostly hourly or fixed; treat any priced
  // listing as contractor work because that is what the platform actually is.
  const employmentType: JobNormalized['employmentType'] = 'CONTRACTOR';

  const min = j.budget_minimum_usd ? Number(j.budget_minimum_usd) : undefined;
  const max = j.budget_maximum_usd ? Number(j.budget_maximum_usd) : undefined;

  // Hourly rates need to be annualised so the salary range fields are
  // comparable to the rest of the index (all annual figures).
  const annualise = (v: number | undefined) =>
    v == null ? undefined : j.payment_type === 'hourly' ? Math.round(v * 2000) : v;

  return {
    id: jobHash({ title: j.title, company: j.employer.name, location: loc.location }),
    title: j.title,
    company: j.employer.name,
    companySlug: slugify(j.employer.name),
    location: loc.location,
    locationCountry: loc.country,
    role: detectRole(j.title, skillNames),
    seniority: detectSeniority(j.title),
    remote: 'full',
    employmentType,
    salaryMin: annualise(min),
    salaryMax: annualise(max),
    currency: 'USD',
    url: `https://app.usebraintrust.com/jobs/${j.id}/`,
    source: 'braintrust',
    postedAt,
    expiresAt,
    description,
    tags: skillNames,
  };
}
