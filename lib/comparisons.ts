export interface ComparisonEntry {
  slug: string;
  title: string;
  description: string;
  leftLabel: string;
  rightLabel: string;
  body: string;
}

export const COMPARISONS: ComparisonEntry[] = [
  {
    slug: 'remote-vs-hybrid',
    title: 'Remote vs hybrid work in tech',
    description: 'The differences that matter when choosing between fully remote and hybrid roles.',
    leftLabel: 'Fully remote',
    rightLabel: 'Hybrid (1-3 days office)',
    body: `## Geographic flexibility
Fully remote roles allow choosing any compatible-timezone city. Hybrid roles tie residence to commuting distance.

## Compensation
Fully remote bands at well-funded companies sit within 10 to 15 percent of in-office equivalents. Hybrid roles typically match in-office bands.

## Career velocity
Hybrid roles still produce faster promotion velocity at most companies, though the gap has narrowed since 2022. The mechanism is informal visibility rather than explicit policy.

## Team integration
Hybrid teams reach informal alignment faster. Fully remote teams require deliberate process to match this.

## Choice in 2026
The choice now depends less on availability (both are abundant) and more on lifestyle and career stage preferences.`,
  },
  {
    slug: 'remote-vs-onsite',
    title: 'Remote vs onsite tech jobs',
    description: 'The trade-offs between fully remote and fully onsite tech employment.',
    leftLabel: 'Fully remote',
    rightLabel: 'Fully onsite',
    body: `## Geographic flexibility
Remote removes the geographic constraint entirely. Onsite locks residence to commute distance.

## Compensation
At equivalent companies and seniority, onsite bands run slightly higher (typically 5 to 15 percent). The gap has narrowed since 2022.

## Career development
Onsite roles still confer mentorship and informal learning advantages, particularly early-career. The gap is smallest at remote-mature companies.

## Lifestyle
Remote removes commute time. Onsite provides structural separation between work and home.`,
  },
  {
    slug: 'freelance-vs-fulltime',
    title: 'Freelance vs full-time remote tech work',
    description: 'How the freelance and full-time tracks differ for remote tech workers.',
    leftLabel: 'Freelance / contract',
    rightLabel: 'Full-time employed',
    body: `## Income
Freelance day rates are typically 1.5 to 2x the equivalent annual full-time rate divided by working days. Variance is much higher.

## Benefits
Full-time roles include health insurance, retirement and equity. These narrow the apparent income gap materially.

## Project depth
Full-time roles allow deeper ownership of long-running systems. Freelance roles tend toward shorter scoped engagements.

## Tax
Freelance allows business expense deductions but typically pays more in social charges.

## Time to first contract vs first job
Freelance contracts can convert faster initially but compound more slowly. Full-time roles compound career capital faster at established employers.`,
  },
  {
    slug: 'us-vs-eu-remote-tech-companies',
    title: 'US vs EU remote tech companies',
    description:
      'How US-headquartered and EU-headquartered remote tech employers compare on compensation, culture, and operations.',
    leftLabel: 'US-headquartered',
    rightLabel: 'EU-headquartered',
    body: `## Compensation
US-headquartered remote tech employers pay higher cash bands at equivalent seniority, typically 30 to 60 percent above EU equivalents in raw dollars.

## Benefits
EU employers provide more statutory benefits (paid vacation, healthcare, parental leave) that narrow the total compensation gap meaningfully.

## Vacation
US companies typically offer 15 to 25 days; EU companies 25 to 35 days plus statutory holidays.

## Work culture
US remote-first companies often run faster cadences with longer working hours. EU companies typically enforce stricter working hours norms.

## Timezone fit
US employers generally hire candidates with at least 4 hours of US timezone overlap; EU employers more flexible on candidate timezone.`,
  },
  {
    slug: 'junior-vs-senior-remote-jobs',
    title: 'Junior vs senior remote tech jobs',
    description: 'How remote hiring differs by experience level in 2026.',
    leftLabel: 'Junior remote',
    rightLabel: 'Senior remote',
    body: `## Availability
Senior remote roles outnumber junior remote roles substantially. Most fully remote teams hire juniors only when they have a structured mentorship program.

## Compensation
Junior remote roles cluster at 70 to 110 thousand USD. Senior at 150 to 220. Staff and principal at 220 to 320.

## Hiring bar
Junior remote hiring places more weight on portfolio quality and async communication, since onboarding investment is higher.

## Path
Many remote engineers start their careers onsite or hybrid, then transition to fully remote at mid-level.`,
  },
  {
    slug: 'react-vs-vue-jobs',
    title: 'React vs Vue remote job market',
    description: 'How React and Vue compare on remote tech postings in 2026.',
    leftLabel: 'React',
    rightLabel: 'Vue',
    body: `## Volume
React listings outnumber Vue listings on remote postings by roughly 4 to 1.

## Geographic distribution
Vue has stronger relative representation on EU postings, particularly in Germany, Netherlands and France.

## Salary
At equivalent seniority and company size, salary bands are similar.

## Career mobility
React fluency provides more job options. Vue fluency is highly valued at the smaller pool of teams using it.`,
  },
  {
    slug: 'python-vs-go-backend',
    title: 'Python vs Go for remote backend work',
    description: 'How Python and Go compare on remote backend postings in 2026.',
    leftLabel: 'Python',
    rightLabel: 'Go',
    body: `## Volume
Python backend listings outnumber Go listings by roughly 3 to 1.

## Domain
Python dominates data, ML and content-heavy backends. Go dominates platform engineering, infrastructure and high-throughput services.

## Salary
Go listings pay a modest premium (roughly 10 to 15 percent at senior levels) reflecting smaller talent pool and higher complexity domains.

## Learning curve
Go has a flatter learning curve to production-readiness. Python has a flatter learning curve to first hire.`,
  },
  {
    slug: 'startup-vs-bigtech-remote',
    title: 'Startup vs big tech remote engineering',
    description: 'How startup and large-company remote engineering differ in 2026.',
    leftLabel: 'Startup',
    rightLabel: 'Big tech',
    body: `## Compensation
Big tech still pays higher cash and clearer equity at senior levels. Startups pay variable cash with higher upside (and higher variance) equity.

## Scope
Startup engineers ship across the stack with more autonomy. Big tech engineers go deeper on narrower problems.

## Career velocity
Startup roles can produce faster level-up through scope expansion. Big tech offers more structured progression.

## Stability
Big tech offers materially more income and employment stability.

## Remote culture
Many big tech companies have moved to hybrid since 2023. Most truly remote-first companies are at the startup to scale-up size.`,
  },
  {
    slug: 'aws-vs-gcp-remote-jobs',
    title: 'AWS vs GCP remote job demand',
    description: 'Comparing the major cloud platforms by remote hiring demand in 2026.',
    leftLabel: 'AWS',
    rightLabel: 'GCP',
    body: `## Volume
AWS appears on roughly 60 percent of remote backend and platform postings. GCP on roughly 30 percent. Postings naming both are common.

## Domain
GCP has stronger relative representation in data engineering and ML postings, driven by BigQuery and Vertex AI adoption.

## Salary
Equivalent cloud certifications carry similar weight. AWS Solutions Architect Professional and GCP Professional Cloud Architect both register as senior signals.`,
  },
  {
    slug: 'snowflake-vs-bigquery',
    title: 'Snowflake vs BigQuery for remote data engineers',
    description: 'How the leading cloud data warehouses split on remote data engineering postings.',
    leftLabel: 'Snowflake',
    rightLabel: 'BigQuery',
    body: `## Volume
Snowflake leads Snowflake-or-BigQuery listings on remote postings by a slight margin. Many listings name both.

## Stack alignment
Snowflake postings cluster at AWS-anchored stacks. BigQuery dominates GCP-anchored stacks.

## Skills
dbt experience is universal across both. SQL window function fluency is universal.

## Salary
Equivalent at senior data engineering levels.`,
  },
  {
    slug: 'employer-of-record-vs-direct',
    title: 'Employer of record vs direct employment for remote tech workers',
    description: 'When to use an employer of record service versus direct employment.',
    leftLabel: 'Employer of record',
    rightLabel: 'Direct employment',
    body: `## Use case
EOR services let foreign companies employ workers in countries where they have no legal entity. Direct employment requires the employer to have local presence.

## Cost
EOR adds a per-employee monthly fee, typically 400 to 900 USD. Borne by the employer in most cases.

## Tax and social charges
EOR handles local payroll, tax withholding and social contributions. The worker receives clean local payslips.

## Benefits
EOR-employed workers receive statutory local benefits. Equity and stock options are harder to structure through EOR.

## Choice
Direct employment is cleaner where the employer has local presence. EOR is the standard solution for international remote hires at smaller companies.`,
  },
  {
    slug: 'in-house-vs-agency-remote',
    title: 'In-house vs agency remote tech roles',
    description: 'How agency and in-house remote engineering compare.',
    leftLabel: 'In-house product team',
    rightLabel: 'Agency or consultancy',
    body: `## Project variety
Agency engineers see more projects per year. In-house engineers see deeper engagement with fewer systems.

## Compensation
In-house product teams typically pay 10 to 20 percent more for equivalent seniority. Agencies pay variable amounts including utilization bonuses.

## Career capital
In-house ownership of long-running systems compounds more clearly into senior engineering credentials. Agency variety compounds into a different skill set centered on adapting to constraints quickly.

## Remote fit
Both can work fully remote. Agencies have been earlier and more thorough adopters of remote-first operations at most established names.`,
  },
  {
    slug: 'lisbon-vs-barcelona-remote',
    title: 'Lisbon vs Barcelona for remote tech workers',
    description: 'How the two leading Mediterranean remote tech hubs actually compare.',
    leftLabel: 'Lisbon',
    rightLabel: 'Barcelona',
    body: `## Visa
Portugal D8 and Spain DNV are roughly equivalent in friction. Portugal’s longer-term tax pathway is more clearly defined post-NHR reforms.

## Cost of living
Lisbon central rents have risen sharply since 2022, partially closing the gap with Barcelona. Barcelona remains 10 to 20 percent more expensive for equivalent apartments.

## Tech ecosystem
Lisbon’s ecosystem has grown faster since 2020. Barcelona retains a larger local employer base but a smaller share of remote-first companies.

## Lifestyle
Lisbon: smaller, more walkable, English-friendly. Barcelona: bigger, more international, more nightlife and culture.

## Choice
For a first move to Mediterranean remote life: Lisbon. For a base with more depth and Spanish exposure: Barcelona.`,
  },
  {
    slug: 'portugal-vs-spain-nomad-visa',
    title: 'Portugal D8 vs Spain Digital Nomad Visa',
    description: 'Side-by-side comparison of the two leading EU nomad visa programs.',
    leftLabel: 'Portugal D8',
    rightLabel: 'Spain DNV',
    body: `## Income threshold
Portugal: ~3 280 EUR/month. Spain: ~2 760 EUR/month.

## Tax regime
Portugal’s NHR successor offers preferential treatment for specific high-value activities including most software engineering. Spain’s Beckham Law extension caps Spanish-source income at 24 percent flat for six years.

## Processing time
Portugal: 60 to 90 days from consulate to arrival. Spain: 20 days for in-country applications.

## Path to permanent residency
Portugal: 5 years to permanent, 5 years to citizenship. Spain: 5 years to permanent, 10 years to citizenship.

## Family
Both allow dependents. Spain processes spouse applications slightly faster in 2026.`,
  },
  {
    slug: 'lisbon-vs-mexico-city-remote',
    title: 'Lisbon vs Mexico City for remote tech workers',
    description: 'European versus Latin American remote tech hub: timezone is the deciding factor.',
    leftLabel: 'Lisbon',
    rightLabel: 'Mexico City',
    body: `## Timezone overlap with US employers
Lisbon: 3 to 4 hours of US East Coast overlap. Mexico City: 9 hours of full overlap with US Central.

## Cost of living
Mexico City is roughly 25 percent cheaper than Lisbon for equivalent neighborhoods (Roma/Condesa vs Principe Real).

## Lifestyle
Lisbon: European city scale, ocean nearby, very walkable. Mexico City: massive metro, food scene unmatched, urban density different from European norms.

## Visa
Portugal D8 vs Mexico Temporary Resident. Both are straightforward for engineers with stable remote income.

## Choice
US employers + lower cost: Mexico City. EU employers or eventual EU residency: Lisbon.`,
  },
  {
    slug: 'bali-vs-chiang-mai-remote',
    title: 'Bali vs Chiang Mai for remote tech workers',
    description: 'The two longest-running Southeast Asian remote work hubs compared.',
    leftLabel: 'Bali',
    rightLabel: 'Chiang Mai',
    body: `## Lifestyle
Bali: beach plus jungle, larger and louder community, more partying. Chiang Mai: smaller city, mountains, slower pace, more long-term residents.

## Cost
Chiang Mai is roughly 30 percent cheaper than Bali on like-for-like accommodations and food.

## Visa
Indonesia: B211a visit visa, Second Home Visa for longer. Thailand: DTV (Destination Thailand Visa) since 2024, valid 5 years multi-entry.

## Internet
Bali Canggu: 100 to 300 Mbps depending on neighborhood. Chiang Mai: consistent 150 to 200 Mbps citywide.

## Community
Bali has more nomad coliving infrastructure. Chiang Mai has a longer-established and more stable community.

## Choice
Younger or shorter-term: Bali. Longer-term or quieter: Chiang Mai.`,
  },
];

export const COMPARISON_MAP: Record<string, ComparisonEntry> = Object.fromEntries(
  COMPARISONS.map((c) => [c.slug, c]),
);
