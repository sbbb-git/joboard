export interface GuideEntry {
  slug: string;
  title: string;
  description: string;
  category: 'finding' | 'salary' | 'visa' | 'tax' | 'lifestyle' | 'career' | 'tools';
  body: string;
  faqs?: Array<{ q: string; a: string }>;
}

export const GUIDES: GuideEntry[] = [
  {
    slug: 'finding-a-remote-tech-job',
    title: 'How to find a remote tech job in 2026',
    description:
      'A practical walkthrough for landing a remote engineering, data or product role from scratch.',
    category: 'finding',
    body: `Remote hiring in tech has matured. The companies still posting truly distributed roles in 2026 are a smaller, more selective set than at the 2021 peak, but the bar to apply has dropped: most accept candidates from anywhere within compatible timezones.

## Where to look first
Start with aggregators that pull from company applicant tracking systems directly. The signal-to-noise ratio is far higher on listings sourced from Greenhouse, Lever or Workday than on generic job boards. The eight APIs powering this site cover the largest portion of that catalog.

## Tailoring the application
Hiring managers screen for two things on remote applications: written communication and async judgment. A short, well-structured cover letter that names the team's recent shipped work outperforms a generic CV cold-send by an order of magnitude.

## Salary expectations
Remote does not mean discounted. Companies pay either to the candidate's local market or to a fixed band; the bands at well-funded scale-ups remain within 10 to 15 percent of in-office equivalents for senior engineers.

## Timezones
The single most filtered criterion in 2026 is timezone overlap. Four hours of overlap with the company's core hub is the working minimum for engineering roles, two for individual-contributor data roles.

## Interview preparation
Remote interview loops have stabilized at four to six rounds. Expect a recruiter screen, a hiring manager call, two to three technical rounds, and a final values or team-fit round. Coding screens have moved away from leetcode-style puzzles toward pairing sessions on realistic problems.

## Closing the offer
The compensation conversation on remote roles requires more research than in-office. Ask for the band before disclosing your target, and verify whether the offer is location-adjusted.`,
    faqs: [
      {
        q: 'How long does a remote tech job search take in 2026?',
        a: 'Median time to offer for an experienced engineer running a focused search is six to ten weeks. Senior and staff-level searches can extend to four months given longer interview loops.',
      },
      {
        q: 'Do remote tech jobs pay less than in-office equivalents?',
        a: 'At well-funded scale-ups, fully remote bands sit within 10 to 15 percent of in-office equivalents at the same seniority. Some companies still apply geographic discounts; many do not.',
      },
      {
        q: 'Is a portfolio required for remote engineering jobs?',
        a: 'Not strictly required, but a public GitHub profile with at least one substantial project lifts response rate measurably, particularly for mid-level applications.',
      },
    ],
  },
  {
    slug: 'remote-developer-salary-guide',
    title: 'Remote developer salary guide for 2026',
    description:
      'How to read salary bands on remote job postings, and what numbers to expect by seniority.',
    category: 'salary',
    body: `Most remote postings now publish a band. Reading them correctly matters more than negotiating against them.

## What the numbers mean
The published band is almost always the IC range for a single level. A posting at 150 to 190 means the company hires that level inside that range, not that you can negotiate to 250 with enough leverage.

## Seniority brackets
Junior engineers at remote-first companies cluster between 70 and 110 thousand USD. Mid-level engineers sit at 110 to 150. Senior bands run 150 to 220, with staff and principal extending to 280 and beyond at the better-funded employers.

## Equity
Equity grants on remote offers have compressed. Series B and later companies now grant 0.05 to 0.2 percent for senior engineers, vesting over four years.

## Currency
Companies pay in their headquarters' currency by default. USD-denominated offers from US-based companies are the most common, EUR-denominated from EU companies, GBP from UK. Conversion happens at the contractor or employer-of-record level.

## Location adjustment
Roughly half of remote-first US companies still apply some geographic adjustment. Tiers are typically grouped: tier 1 cities (SF, NYC) at 100 percent, tier 2 (Austin, Seattle, Boston) at 90 to 95, tier 3 (most other US metros) at 80 to 90.`,
  },
  {
    slug: 'how-to-become-a-remote-developer',
    title: 'How to become a remote developer',
    description: 'A roadmap from first line of code to first remote engineering offer.',
    category: 'career',
    body: `Becoming a remote-employable developer is a different path than becoming a developer in general. The skills the market rewards on remote postings emphasize written communication and async ownership in addition to technical depth.

## Foundation
Spend the first six to twelve months on one ecosystem deeply rather than sampling many. The fastest-converting paths to remote employment in 2026 are full-stack JavaScript or TypeScript (with React and Node), Python with Django or FastAPI for backend, or Go for platform-leaning roles.

## Building portfolio
Three substantial projects deployed publicly beat ten tutorial completions. Each should solve a real problem, have clear documentation, and demonstrate testing and deployment practice.

## Open source
Even three accepted pull requests to a recognized open-source project change the texture of an application materially.

## First job vs first remote job
The fastest path to a first remote job is often a non-remote first job. Six to twelve months in any engineering environment delivers the unstated requirement most remote postings encode: prior production experience.`,
  },
  {
    slug: 'how-to-become-a-data-engineer',
    title: 'How to become a remote data engineer',
    description: 'The skills and path that map to remote data engineering postings in 2026.',
    category: 'career',
    body: `Remote data engineering postings have stabilized around a clear skill stack. The path to employment is shorter than for ML engineering because the role intersects with established analytics and platform engineering work that has existed for years.

## Core skills
SQL fluency at an advanced level (window functions, CTEs, query optimization). Python for pipeline scripting and orchestration. One major cloud (AWS, GCP or Azure) and one warehouse (Snowflake or BigQuery on most postings). dbt for transformation. Airflow or Dagster for orchestration.

## Distinguishing skills
Data modeling experience, particularly dimensional modeling and slowly changing dimensions, is the senior signal. Cost optimization on cloud warehouses is rapidly rising in importance.

## Path
Many remote data engineers come from analytics or backend backgrounds. Demonstrating production pipeline ownership, even on a single significant project, accelerates the transition.`,
  },
  {
    slug: 'how-to-become-an-ml-engineer',
    title: 'How to become a remote ML engineer',
    description: 'The path into remote ML engineering in 2026.',
    category: 'career',
    body: `Remote ML engineering postings have narrowed in skill expectation since 2023. Most postings expect production deployment experience, not research credentials.

## Core skills
Python and PyTorch are baseline. Production deployment knowledge (containerization, model serving, monitoring) matters more than the research depth that dominated earlier hiring rounds.

## LLM specialization
Listings in LLM engineering have grown sharply. Familiarity with retrieval-augmented generation, evaluation frameworks, fine-tuning workflows and inference optimization separates LLM engineering applications from generalist ML applications.

## Path
A meaningful share of remote ML engineering applicants in 2026 came from software engineering rather than data science backgrounds. The reverse is also common but requires demonstrating production software depth.`,
  },
  {
    slug: 'how-to-become-a-devops-engineer',
    title: 'How to become a remote DevOps or SRE',
    description: 'The skill set and path into remote platform and reliability engineering.',
    category: 'career',
    body: `Remote DevOps and SRE postings cluster around a clear technical stack and a smaller number of philosophical concerns (incident response culture, on-call rotation health, automation discipline).

## Technical stack
Kubernetes and one major cloud (AWS most common, GCP and Azure both meaningful). Terraform for infrastructure-as-code. CI/CD pipeline experience (GitHub Actions most listed). Observability tooling (Prometheus, Grafana, Datadog).

## Programming
Go is the most-listed language on remote SRE postings, followed by Python.

## Path
The most common path is from backend engineering through platform team membership. Pure operations backgrounds increasingly require a substantial software engineering component to compete for remote senior listings.`,
  },
  {
    slug: 'how-to-become-a-frontend-developer',
    title: 'How to become a remote front-end developer',
    description: 'The current state of the remote front-end labor market and how to enter it.',
    category: 'career',
    body: `Remote front-end postings remain the largest single hiring category in remote tech. The path is well-documented but competitive at the junior level.

## Core stack
TypeScript, React, Next.js, Tailwind. CSS fundamentals at a level above what most boot-camp curricula deliver. Accessibility familiarity is now an explicit requirement on most senior listings.

## Differentiators
Design system contribution and Storybook authorship. Performance optimization track record. Direct collaboration experience with designers.

## Path
Substantial public deployments beat tutorial completions for both response rate and interview performance.`,
  },
  {
    slug: 'how-to-become-a-backend-developer',
    title: 'How to become a remote backend developer',
    description: 'The remote backend market in 2026 and the skill path to enter it.',
    category: 'career',
    body: `Remote backend postings are large in volume but more fragmented across language ecosystems than front-end. Picking a single ecosystem and depth-first specialization is the working strategy.

## Stacks
TypeScript with Node or NestJS. Python with FastAPI or Django. Go for platform-leaning backends. Java with Spring for enterprise. Each ecosystem has enough remote listings to sustain a career.

## Skills beyond the framework
Database design at a level beyond ORM usage. Distributed systems literacy. API design and versioning practice. Observability and on-call experience.

## Path
A first non-remote backend job for one to two years remains the fastest converter to a senior remote backend role.`,
  },
  {
    slug: 'how-to-become-a-fullstack-developer',
    title: 'How to become a remote full-stack developer',
    description: 'The remote full-stack path in 2026.',
    category: 'career',
    body: `Full-stack remains the most common posting category at smaller remote-first companies. The role demands breadth, and the hiring market rewards demonstrated end-to-end ownership.

## Core skills
React or one major front-end framework. Node, Python or Go on the backend. SQL. One major cloud. Comfortable shipping a feature from spec to deployment without help.

## What employers look for
Full ownership stories, not feature lists. Senior full-stack postings select for breadth of ownership over deep specialization in any single layer.`,
  },
  {
    slug: 'how-to-become-a-mobile-developer',
    title: 'How to become a remote mobile developer',
    description: 'The remote mobile engineering path in 2026.',
    category: 'career',
    body: `Remote mobile postings split into native iOS, native Android, and cross-platform. Each has a distinct hiring market.

## Native iOS
Swift and SwiftUI. UIKit familiarity for legacy maintenance. Combine or async/await for concurrency.

## Native Android
Kotlin with Jetpack Compose. Coroutines for concurrency. Material 3 fluency.

## Cross-platform
Flutter dominates new cross-platform listings since 2023. React Native remains strong at companies with React web stacks.

## App store experience
Demonstrated app store publication is the strongest single signal on a mobile application.`,
  },
  {
    slug: 'how-to-become-a-product-manager',
    title: 'How to become a remote product manager',
    description: 'The path into remote PM roles in 2026.',
    category: 'career',
    body: `Remote PM hiring is selective, with most postings requiring prior PM experience. The conversion path from engineering or design backgrounds is well-trodden.

## Core skills
Customer interview practice. Roadmap and prioritization frameworks. Async written communication at a level above most engineering and design roles.

## Senior signal
Track record of shipping. Demonstrated business outcomes tied to product decisions.

## Path
Most successful first-PM transitions in 2026 came from senior engineering or senior design roles at the same company.`,
  },
  {
    slug: 'how-to-become-a-designer',
    title: 'How to become a remote product designer',
    description: 'The remote product design path in 2026.',
    category: 'career',
    body: `Remote design postings concentrate on product design rather than visual or brand design. Figma fluency is universally expected.

## Core skills
Figma at an advanced level (auto-layout, variants, design tokens). Prototyping fluency. Design system experience. User research practice.

## Senior signal
Design system ownership. Cross-functional partnership skills. Track record of measurable product outcomes.`,
  },
  {
    slug: 'digital-nomad-visa-portugal',
    title: 'Portugal D8 Digital Nomad Visa for tech workers',
    description:
      'Complete guide to the Portuguese D8 visa for remote tech workers in 2026.',
    category: 'visa',
    body: `Portugal's D8 visa, launched in late 2022, is the most-used digital nomad pathway for remote tech workers in Europe.

## Eligibility
Proof of remote work for a non-Portuguese employer or as a freelancer. Minimum monthly income of around four times the Portuguese minimum wage (approximately 3 280 EUR in 2026).

## Application
Apply at the Portuguese consulate in your country of residence. Processing typically takes 60 to 90 days.

## Tax implications
The NHR (Non-Habitual Resident) tax regime was substantially reformed in 2024. New applicants now fall under a narrower successor program that still offers preferential treatment for specific high-value activities including most software engineering work.

## After arrival
The visa converts to a residence permit upon arrival. Renewal cycles run two years initially, then three.`,
    faqs: [
      {
        q: 'What is the minimum income for the D8 visa?',
        a: 'As of 2026, applicants must demonstrate monthly income of approximately four times the Portuguese minimum wage, roughly 3 280 EUR per month.',
      },
      {
        q: 'Can a freelance contractor qualify for the D8?',
        a: 'Yes. Freelance contracts with non-Portuguese clients qualify, with appropriate documentation of recurring income.',
      },
    ],
  },
  {
    slug: 'digital-nomad-visa-spain',
    title: 'Spain Digital Nomad Visa for tech workers',
    description:
      'How to apply for the Spanish Digital Nomad Visa as a remote tech worker.',
    category: 'visa',
    body: `Spain's Digital Nomad Visa launched in January 2023 under the Startup Law. It has become one of the most popular European nomad pathways.

## Eligibility
Remote work for a foreign employer that has operated for at least one year, or freelance work for foreign clients (foreign income must be at least 80 percent of total). Minimum income of around 200 percent of the Spanish minimum wage.

## Tax benefits
Holders can opt into a reduced 24 percent flat tax on Spanish-source income up to 600 000 EUR for the first six years (the Beckham Law extension for nomads).

## Application
Apply from inside Spain on a tourist entry or from a Spanish consulate abroad. Approval typically arrives within 20 days for in-country applications.

## Family
Spouses and dependents can be included in the same application.`,
  },
  {
    slug: 'digital-nomad-visa-germany',
    title: 'Germany freelance and Blue Card pathways',
    description: 'The two main routes into Germany for remote tech workers.',
    category: 'visa',
    body: `Germany does not have a dedicated digital nomad visa as of 2026. Two adjacent pathways serve remote tech workers.

## Freiberufler visa
For self-employed engineers. Requires demonstrating client demand in Germany, German bank account, and registered tax presence.

## Blue Card
For employed engineers with a job offer from a German company. Faster processing and a 21-month path to permanent residency if German language requirements are met.

## Tax
Germany taxes worldwide income for residents. The progressive rate reaches 42 percent at modest income levels by US standards, plus solidarity surcharge and health insurance contributions.`,
  },
  {
    slug: 'digital-nomad-visa-mexico',
    title: 'Mexico Temporary Resident visa for remote workers',
    description: 'How US-timezone remote workers use Mexico Temporary Resident status.',
    category: 'visa',
    body: `Mexico does not have a branded digital nomad visa, but the Temporary Resident visa serves the same purpose and is widely used by US-based remote tech workers.

## Eligibility
Demonstrate monthly income above approximately 4 500 USD or savings of approximately 75 000 USD. Both must be sustained over the preceding six to twelve months on bank statements.

## Process
Apply at a Mexican consulate outside Mexico. Approval typically within two to four weeks. Within 30 days of arrival, exchange for the residency card.

## Tax
The Temporary Resident visa does not by itself create tax residency. Tax residency requires spending more than 183 days per year in Mexico.`,
  },
  {
    slug: 'digital-nomad-visa-georgia',
    title: 'Georgia one-year visa-free stay for remote workers',
    description:
      'How remote tech workers use the Georgian visa-free policy and Individual Entrepreneur status.',
    category: 'visa',
    body: `Georgia offers visa-free entry of up to one year for citizens of around 100 countries, including most EU and US passports. This has made Tbilisi a long-standing remote tech base.

## Individual Entrepreneur status
Registering as an Individual Entrepreneur with Small Business Status qualifies most freelance income for a 1 percent tax rate on turnover up to 500 000 GEL per year.

## Banking
Local bank account opening is straightforward for visa-free residents with proof of address.`,
  },
  {
    slug: 'remote-work-taxes-eu',
    title: 'Remote work taxes for EU-resident tech workers',
    description: 'How EU tax residency interacts with foreign remote employment.',
    category: 'tax',
    body: `EU tax residency is determined country by country but most member states apply similar tests centered on the 183-day rule and the location of permanent home and personal interests.

## Employment from a non-EU company
If the employer has no EU presence, the worker typically must register as either self-employed or use an employer-of-record service. The employer-of-record approach simplifies social charges but reduces net.

## Social security
EU/EEA bilateral agreements coordinate social security across borders. The A1 certificate documents which country's system the worker contributes to.

## Special regimes
Several EU countries (Spain, Italy, Portugal in narrower form) offer reduced tax regimes for inbound remote workers. These can materially reduce effective tax for the first five to ten years of residency.`,
  },
  {
    slug: 'remote-work-taxes-us',
    title: 'Remote work taxes for US-resident tech workers',
    description: 'State and federal considerations for US-based remote tech workers.',
    category: 'tax',
    body: `US federal tax treats remote work like any other employment: the W-2 income lands in the same bucket regardless of work location.

## State tax
The complication is state tax. Working remotely from a state different from the employer's location may create tax obligations in both, depending on each state's nexus rules.

## Convenience of the employer rule
A handful of states (New York, Pennsylvania, Delaware) apply the convenience of the employer rule, taxing remote workers as if they worked at the employer's location. This can produce double taxation that requires credit claims to resolve.

## Foreign-resident US citizens
US citizens working remotely from abroad still owe US tax on worldwide income. The Foreign Earned Income Exclusion (around 130 000 USD in 2026) and Foreign Tax Credit reduce double taxation.`,
  },
  {
    slug: 'remote-work-equipment-deduction',
    title: 'Remote work equipment expenses and deductions',
    description: 'How freelance and employed remote workers can structure equipment expenses.',
    category: 'tax',
    body: `Equipment treatment depends on employment structure.

## W-2 employees in the US
Federal home office and unreimbursed employee expense deductions remain unavailable through 2025 under the TCJA. Some states (California, New York) allow them. Most remote-friendly employers reimburse equipment directly.

## Self-employed and freelance
Equipment is deductible as a business expense. Computers and monitors typically depreciate over five years or qualify for Section 179 immediate expensing depending on jurisdiction.

## EU
Most EU jurisdictions allow either employer reimbursement or self-employed deduction with similar rules.`,
  },
  {
    slug: 'remote-work-timezone-strategies',
    title: 'Remote work timezone strategies that actually work',
    description:
      'Practical patterns for engineers working across substantial timezone differences.',
    category: 'lifestyle',
    body: `Successful remote engineering across timezones is less about tools than scheduling discipline.

## The four-hour overlap rule
Four hours of overlap with the team's core timezone is the working minimum for engineering roles. Two hours works for ICs operating largely async; under that, productivity and team integration degrade measurably.

## Anchor meetings
Two or three weekly anchor meetings at the overlap window absorb almost all synchronous needs at most well-functioning remote teams.

## Async documentation
Decisions made in synchronous meetings should be written down within 24 hours. This single discipline accounts for most of the difference between remote teams that work and those that grind.

## Calendar boundaries
Hard-stop calendar boundaries are easier to defend than soft preferences. Most remote-mature teams accept declined meetings without negotiation.`,
  },
  {
    slug: 'remote-work-home-office-setup',
    title: 'Home office setup for remote tech workers',
    description: 'What actually matters versus what does not in a home office setup.',
    category: 'lifestyle',
    body: `Diminishing returns set in earlier than most spending guides suggest.

## What matters most
Comfortable chair (the single highest-leverage spend). Monitor at eye level. Camera at eye level. Microphone close to mouth. Stable broadband.

## What matters second
Quiet room or sound treatment. Climate control. Adjustable desk if you alternate sitting and standing.

## What matters less than people think
Multiple monitors past the second. Mechanical keyboards. RGB peripherals. High-end webcams beyond mid-tier 1080p.`,
  },
  {
    slug: 'remote-work-async-communication',
    title: 'Async communication patterns for remote tech teams',
    description: 'The async patterns that distinguish productive remote teams.',
    category: 'lifestyle',
    body: `Async communication is a learned skill at both the individual and team level.

## Writing first
Default to a written artifact before scheduling a meeting. Most decisions can be made without a meeting if the writeup is clear.

## Decision documents
A short decision document with context, options, recommendation and decision converges discussions that would otherwise drift across chat for days.

## Status, not standup
A short written status posted at the start of the day replaces most standups without measurable productivity loss.

## Response time expectations
Setting team norms on response time windows (e.g. same-day for chat, 24 hours for review requests) reduces the constant interruption tax of always-on chat.`,
  },
  {
    slug: 'best-laptops-for-remote-developers',
    title: 'Best laptops for remote developers in 2026',
    description:
      'A practical comparison of the laptop choices that actually serve remote engineers.',
    category: 'tools',
    body: `Laptop choice for remote engineers depends on stack and travel pattern more than benchmark specs.

## Macbook Pro 14 M4 Pro
The default for most front-end, full-stack and product engineers in 2026. Battery life, build quality and ARM-native developer tooling have stabilized.

## Macbook Air M4
The fastest path to a competent remote development setup. Suitable for most web and scripting work. Falls short for heavy local builds or local LLM inference.

## Framework Laptop 13
The strongest Linux-native choice for engineers who want repairability and Linux-first tooling.

## Lenovo Thinkpad X1 Carbon
The most-recommended business laptop for engineers using Windows or dual-booting Linux.

## Dell XPS 14
A capable Windows-first machine, common at enterprise employers that issue corporate Windows fleets.`,
  },
  {
    slug: 'best-tools-for-remote-developers',
    title: 'Software tools every remote developer ends up using',
    description: 'The tooling that has become near-default across remote engineering teams.',
    category: 'tools',
    body: `Tooling convergence has narrowed in 2026. Most successful remote engineering teams settle on a small, predictable set.

## Editor
VS Code or Cursor for AI-assisted workflows. JetBrains IDEs at enterprise teams and for JVM and Python.

## Terminal
Warp, iTerm2, or Ghostty. Tmux for persistent multi-pane sessions.

## Notes
Obsidian, Notion or Logseq. The shared team brain in many remote-first teams sits in Notion.

## Communication
Slack remains dominant. Discord at smaller dev-tools companies. Zoom and Google Meet for synchronous calls.

## Version control
Git via GitHub for the majority of remote engineering teams.`,
  },
  {
    slug: 'best-countries-for-remote-tech-workers',
    title: 'Best countries for remote tech workers in 2026',
    description:
      'A practical comparison of the top destinations based on visa, tax, cost and infrastructure.',
    category: 'lifestyle',
    body: `Country choice for a remote tech worker is rarely a single-variable optimization. The leading destinations each trade differently along visa friction, tax burden, cost of living, internet quality and lifestyle factors.

## Portugal
Best for EU residence path with a credible long-term tax pathway. Lisbon and Porto offer real tech ecosystems.

## Spain
Best for the Beckham Law tax extension and Mediterranean lifestyle. Madrid and Barcelona have the deepest local tech markets.

## Mexico
Best for US-timezone alignment at substantially lower cost. Temporary Resident path is straightforward.

## Estonia
Best for fully digital business setup. E-Residency simplifies invoicing global clients.

## Georgia
Best for tax minimization and low friction entry. One-year visa-free, 1 percent tax on small business turnover.

## United Arab Emirates
Best for tax-free environment at high cost of living. Remote Work Visa simplifies longer stays.

## Thailand
Best for low cost of living at modest visa friction. The 2024 DTV visa simplifies longer stays.`,
  },
  {
    slug: 'remote-job-cover-letter-templates',
    title: 'Remote job cover letter templates that actually work',
    description: 'Cover letter patterns that lift response rates on remote tech postings.',
    category: 'finding',
    body: `Generic cover letters lift application volume but not response rate. The patterns that move response rate are short, specific and tied to demonstrable work.

## Structure
Open with one sentence on why this company. One paragraph on relevant shipped work with a measurable outcome. One paragraph on the specific role and what you would tackle first. Close with availability and a link to a portfolio.

## Length
Under 200 words. Recruiters scan, not read.

## What to avoid
Generic enthusiasm language. Restating the resume. Claims of unique fit without specifics.

## Customization minimum
Naming the company's recent product launch, blog post or hiring announcement signals attention without requiring deep insider knowledge.`,
  },
  {
    slug: 'remote-tech-interview-preparation',
    title: 'Remote tech interview preparation in 2026',
    description: 'How remote interview loops have stabilized and what to prepare for.',
    category: 'finding',
    body: `Remote tech interview loops have converged on a four to six round pattern.

## Round 1: Recruiter screen
30 minutes. Confirm fit on basics: salary expectations, location, work authorization.

## Round 2: Hiring manager
45 minutes. Conversational. Past projects, motivations, and the specific role.

## Round 3 to 5: Technical
Mix of system design, coding, and team-specific deep dives. Live coding has shifted toward pairing-style problems rather than leetcode puzzles at most well-run remote teams.

## Round 6: Final
Often called values, culture or executive. Increasingly a check on async judgment and written communication for fully remote roles.`,
  },
  {
    slug: 'remote-job-salary-negotiation',
    title: 'Remote job salary negotiation playbook',
    description: 'How to negotiate a remote tech offer in 2026.',
    category: 'salary',
    body: `Salary negotiation on remote offers requires different preparation than in-office offers.

## Anchor research
Use posted bands across comparable companies. The eight APIs powering this site cover the bulk of published bands.

## Location disclosure
Some companies adjust offers based on location. Disclose only when asked, and verify whether the offer is location-adjusted before counter-offering.

## Total comp
Equity grant value at private companies is highly uncertain. Discount accordingly when comparing offers across funding stages.

## Counter pattern
Counter once, with specific reasoning, and accept the second offer if it is materially above your minimum. Multiple counters at the same level tend to harden the recruiter rather than move the offer.`,
  },
  {
    slug: 'freelance-vs-employee-remote',
    title: 'Freelance vs employee for remote tech workers',
    description: 'The trade-offs between contracting and employment for remote engineers.',
    category: 'career',
    body: `The freelance versus employee decision has shifted in 2026 toward a more even split, after employee dominance through 2018-2022 and contractor dominance in 2023.

## Income
Freelance day rates have stabilized at around 1.5 to 2 times the equivalent employed annual rate divided by working days. Senior contract rates remain higher relative to full-time at companies that previously over-relied on contractors.

## Stability
Employment provides income smoothing. Freelance income has materially higher variance.

## Benefits
Employer-paid health insurance, retirement contributions and equity make total compensation closer than the headline numbers suggest.

## Tax
Freelance allows more expense deductions but typically pays more in social charges.

## Tooling and process
Some teams will not allow contractors access to certain systems or decisions. This can materially affect career development.`,
  },
  {
    slug: 'remote-work-mental-health',
    title: 'Mental health practices for remote tech workers',
    description: 'What actually helps sustain remote engineering work over multi-year horizons.',
    category: 'lifestyle',
    body: `Remote work isolates by default. The people who sustain it over five or ten years tend to share a small set of practices.

## Daily structure
A consistent start time and a hard end time. Lunch eaten away from the desk.

## Physical movement
Daily walks or workouts at fixed times.

## Social anchors
Recurring in-person interactions outside work, scheduled with the same priority as meetings.

## Quarterly travel or office time
Most remote-mature teams now budget for periodic team gatherings. Engineers who sustain remote work tend to take advantage of these.`,
  },
];

export const GUIDE_MAP: Record<string, GuideEntry> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);
