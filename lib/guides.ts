export interface GuideEntry {
  slug: string;
  title: string;
  description: string;
  category: 'finding' | 'salary' | 'visa' | 'tax' | 'lifestyle' | 'career' | 'tools' | 'freelance';
  body: string;
  faqs?: Array<{ q: string; a: string }>;
  /** Optional ISO timestamp; guides with a future publishedAt are filtered
      out at build time so they appear on the next daily redeploy. */
  publishedAt?: string;
}

const ALL_GUIDES: GuideEntry[] = [
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
];

ALL_GUIDES.push(
  {
    slug: 'ai-engineer-salary-2026',
    title: 'AI engineer salary in 2026',
    description: 'Current salary bands for remote AI and ML engineers in 2026.',
    category: 'salary',
    body: `AI engineering salaries have remained at premium levels through 2026 despite broader tech market softness.

## Senior bands
Senior AI engineers at well-funded US-headquartered remote companies sit at 220 to 320 thousand USD base, with total compensation between 300 and 500 thousand including equity.

## Mid-level
Mid-level AI engineers cluster between 150 and 220 thousand USD base on remote offers. The pay gap to general backend engineering at the same seniority is 30 to 50 percent.

## LLM specialization
Dedicated LLM engineering roles command an additional 10 to 20 percent above generalist AI engineering. Production fine-tuning and inference optimization experience drive the premium.

## EU bands
European employers pay 130 to 200 thousand EUR for senior AI engineering, with the gap to US bands persistent.`,
    faqs: [
      {
        q: 'What is the median remote AI engineer salary in 2026?',
        a: 'Median total compensation across remote AI engineering postings in 2026 is approximately 195 thousand USD base for mid to senior levels at well-funded US companies.',
      },
    ],
  },
  {
    slug: 'how-to-start-on-fiverr-as-a-developer',
    title: 'How to start on Fiverr as a developer in 2026',
    description: 'A step-by-step path to launching your first tech gig on Fiverr and landing paying buyers.',
    category: 'freelance',
    body: `Fiverr remains one of the fastest ways for a developer to start earning independent income. Unlike client networks that require interviews and vetting, you can publish a gig the same day and be discoverable to buyers within hours.

## Why Fiverr works for developers
Buyers on Fiverr arrive with a specific task and a budget already in mind. For a developer this means less selling and more delivering: bug fixes, small scripts, API integrations, landing pages, automations. The platform handles payments, disputes and discovery, so you focus on the work.

## Pick one service to start
The biggest mistake new sellers make is offering everything. Start with one narrow, repeatable service you can deliver reliably, for example "I will fix bugs in your React app" or "I will build a Python automation script". Narrow gigs rank better and convert higher.

## Set up the account
Create a seller account, complete your profile fully, and verify your identity. A complete profile with a real photo and a clear description ranks ahead of half-finished ones in Fiverr search.

## Publish your first gig
Write a clear title, pick the right category, add three pricing tiers, and include a portfolio sample. Even a single strong sample lifts conversion sharply.

## First week expectations
Most sellers get their first order within one to three weeks if their gig is well-targeted and priced for entry. Treat the first few orders as reputation investments: over-deliver, earn five-star reviews, and use that momentum to raise prices.`,
    faqs: [
      {
        q: 'Do I need experience to start on Fiverr as a developer?',
        a: 'No formal experience or degree is required. You need the ability to deliver one service reliably and at least one portfolio sample to demonstrate it.',
      },
      {
        q: 'How much can a beginner developer earn on Fiverr?',
        a: 'Entry sellers commonly start at 20 to 50 USD per gig and scale to several hundred per order within a few months as reviews accumulate and prices rise.',
      },
      {
        q: 'How long until the first order?',
        a: 'A well-targeted, well-priced gig typically lands its first order within one to three weeks of publishing.',
      },
    ],
  },
  {
    slug: 'fiverr-profile-that-wins-orders',
    title: 'How to build a Fiverr profile that wins orders',
    description: 'The profile and gig elements that move buyers from browsing to ordering.',
    category: 'freelance',
    body: `Your Fiverr profile is a conversion page, not a CV. Buyers skim it in seconds and decide whether to trust you with their money. Every element should reduce risk and signal competence.

## Profile photo and tagline
Use a clear, friendly headshot. Faces convert better than logos for individual sellers. Your tagline should state the outcome you deliver, not your job title.

## Description that sells outcomes
Open with the buyer's problem, not your biography. State what you build, who it is for, and why ordering from you is low-risk. Keep it short and scannable.

## Gig titles and tags
Titles should match how buyers search: "I will build a responsive landing page in React" beats "Web development services". Use all available tags with the exact keywords buyers type.

## Pricing tiers
Offer three packages. The middle tier should be the one most buyers pick, so anchor it deliberately. The top tier exists to make the middle look reasonable and to capture high-budget buyers.

## Portfolio and proof
Add real samples to the gig gallery. Screenshots, before-and-after comparisons, and short demo videos all lift conversion. Social proof from reviews compounds over time, so prioritize early five-star ratings.

## Response time
Fiverr rewards fast responders in search and buyers notice. Enable notifications and aim to reply within an hour during your working day.`,
    faqs: [
      {
        q: 'What makes a Fiverr gig rank higher?',
        a: 'Keyword-matched titles and tags, a complete profile, fast response time, strong conversion from impressions to orders, and a steady flow of five-star reviews all push gigs up in Fiverr search.',
      },
      {
        q: 'How many gigs should I publish?',
        a: 'Start with one focused gig. Once it earns reviews, add adjacent gigs that target related buyer searches rather than spreading thin across unrelated services.',
      },
    ],
  },
  {
    slug: 'how-to-get-your-first-fiverr-order',
    title: 'How to get your first Fiverr order',
    description: 'Practical tactics to land that crucial first sale and break the zero-review barrier.',
    category: 'freelance',
    body: `The hardest order on Fiverr is the first one. Buyers favor sellers with reviews, so a new gig starts at a disadvantage. These tactics break through the cold-start problem.

## Price for entry, not for profit
Your first few orders are reputation purchases. Price slightly below the market to remove the buyer's risk, then raise prices once you have five-star reviews.

## Use Buyer Requests and Briefs
Fiverr surfaces buyer needs directly. Respond quickly with a specific, tailored offer that names the buyer's exact problem. Generic copy-paste pitches lose; specific ones win.

## Optimize for search from day one
Match your title and tags to real buyer searches. A gig nobody can find gets no orders regardless of quality.

## Promote externally
Share your gig where your target buyers already are: relevant subreddits, Discord servers, X, and developer communities. External traffic that converts also signals quality to Fiverr's algorithm.

## Over-deliver on the first orders
Deliver faster than promised, add a small extra, and communicate proactively. Early five-star reviews with positive comments are worth far more than the order value itself.

## Be responsive
Reply to messages within minutes when possible. Fast, helpful responses convert browsing buyers into paying ones and improve your search ranking.`,
    faqs: [
      {
        q: 'Why am I not getting orders on Fiverr?',
        a: 'The most common causes are poor keyword targeting, no portfolio samples, prices set too high for a zero-review seller, and slow response times. Fix targeting and pricing first.',
      },
      {
        q: 'Should I lower my prices to get the first order?',
        a: 'Yes, temporarily. Treat the first three to five orders as reputation investments priced for conversion, then raise prices as reviews accumulate.',
      },
    ],
  },
  {
    slug: 'fiverr-gig-seo-ranking-guide',
    title: 'Fiverr gig SEO: how to rank your gig in search',
    description: 'How Fiverr search works and the levers that move your gig to the first page.',
    category: 'freelance',
    body: `Most Fiverr orders come from search, so ranking is everything. Fiverr's algorithm rewards gigs that match buyer intent and then convert and deliver well.

## Keyword research
Find the exact phrases buyers type. Use Fiverr's own search autocomplete and study the titles of top-ranked gigs in your category. Target one primary keyword per gig.

## Title, tags and category
Place your primary keyword in the gig title naturally. Fill every tag slot with relevant search terms. Pick the most accurate category and subcategory, since mismatched categories suppress ranking.

## Conversion signals
Fiverr tracks how many people who view your gig actually order. A high click-to-order rate pushes your gig up. This is why strong gig images, clear pricing, and proof matter for ranking, not just for buyers.

## Delivery and review velocity
On-time delivery, low cancellation rates, and a steady stream of recent five-star reviews are major ranking factors. A burst of good reviews early can lift a new gig quickly.

## Response rate and time
Fast, consistent responses improve both ranking and conversion. Fiverr surfaces responsive sellers more often.

## Freshness and consistency
Active gigs with recent orders rank better than dormant ones. Staying online, updating gig content, and maintaining order flow all help. New gigs also get a temporary visibility boost, so launch with a plan to convert it into reviews.`,
    faqs: [
      {
        q: 'How does Fiverr decide which gigs to show first?',
        a: 'Fiverr ranks on relevance to the search, conversion rate, review quality and recency, on-time delivery, low cancellations, and seller responsiveness.',
      },
      {
        q: 'How long does it take a new Fiverr gig to rank?',
        a: 'New gigs get a short visibility boost at launch. Converting that into orders and five-star reviews within the first weeks is what sustains ranking thereafter.',
      },
    ],
  },
  {
    slug: 'sell-ai-services-on-fiverr-2026',
    title: 'How to sell AI services on Fiverr in 2026',
    description: 'The most profitable AI service categories on Fiverr and how to package them.',
    category: 'freelance',
    body: `AI services are the fastest-growing developer category on Fiverr in 2026. Buyer demand has outpaced the supply of sellers who can actually deliver, which means strong prices and steady orders for those who can.

## Chatbot and assistant builds
Custom chatbots and AI assistants for websites and support are in heavy demand from small businesses. Integrating an LLM with a knowledge base and deploying it is a high-value, repeatable gig.

## Custom GPT and prompt engineering
Buyers want tailored GPTs, prompt libraries, and workflow automations. These are quick to deliver and command good prices because most buyers cannot build them themselves.

## LLM app integration
Wiring an LLM into an existing product, adding retrieval-augmented generation, or building an internal AI tool are premium gigs. Production deployment experience separates you from the crowd.

## AI automation
Combining LLMs with automation tools to handle content, data processing, or customer workflows sells well to non-technical buyers focused on time saved.

## How to package AI gigs
Productize a specific outcome rather than selling vague AI consulting. "I will build a customer support chatbot trained on your docs" converts far better than "AI services". Offer a Basic setup, a Standard with integration, and a Premium with ongoing tuning.

## Why now
The supply of qualified AI sellers is still thin relative to demand. Sellers who establish reviews in AI categories now build a durable ranking advantage as the category grows.`,
    faqs: [
      {
        q: 'What AI services sell best on Fiverr?',
        a: 'Custom chatbots trained on a business knowledge base, custom GPT and prompt engineering, LLM app integrations, and AI automation workflows are the strongest sellers in 2026.',
      },
      {
        q: 'Do I need to be an AI expert to sell AI gigs?',
        a: 'You need practical delivery skill, not research credentials. The ability to integrate LLMs, build chatbots, and ship working automations is what buyers pay for.',
      },
    ],
  },
  {
    slug: 'appsumo-best-deals-for-developers-2026',
    title: 'The best AppSumo deals for developers in 2026',
    description: 'Which AppSumo deals genuinely help developers and remote engineers ship faster and spend less.',
    category: 'tools',
    body: `AppSumo has hundreds of SaaS deals at any time. Most are not built for developers. The ones that are can replace expensive subscriptions on tools you use every week.

## API and integration platforms
Deals on workflow automation tools (think no-code automation with API steps) sit on AppSumo regularly. For developers and side-project builders, they replace recurring Zapier or Make bills on internal workflows.

## Database and backend tooling
Lifetime deals on managed Postgres dashboards, SQL editors, and database design tools surface periodically. These are particularly useful for solo devs who do not want to operate a full DevOps stack.

## Error tracking and monitoring
Smaller alternatives to Sentry or Datadog appear on AppSumo at lifetime prices. They are not enterprise-grade but cover side projects and small SaaS deployments well.

## AI builder tools
Custom chatbot platforms, AI agent builders, and LLM workflow tools have flooded AppSumo in 2026. The good ones reduce time-to-prototype for AI features inside existing apps.

## Email and transactional sending
Lifetime deals on transactional email platforms let solo founders avoid Mailgun or SendGrid bills on early projects.

## SEO and content tools
Tools for keyword research, on-page SEO, and content briefs come to AppSumo regularly. They pay back fast for developers building content sites or marketing one-person SaaS.

## How to choose
Pick deals that map to a tool you would actually pay for monthly anyway. The savings only materialize when the lifetime deal replaces a real recurring spend, not when it adds another login to manage.`,
    faqs: [
      {
        q: 'Are AppSumo deals trustworthy for developer tooling?',
        a: 'Many are, but quality varies. Stick to deals from vendors with at least 18 months of operating history, public roadmaps, and AppSumo ratings above 4.5 stars over hundreds of reviews.',
      },
      {
        q: 'Should I buy a lifetime deal for a tool I do not yet use?',
        a: 'Generally no. Lifetime deals pay off when they replace an existing subscription you already rely on. Buying ahead of need usually means an unused license and a forgotten tool.',
      },
    ],
  },
  {
    slug: 'appsumo-vs-saas-subscription-which-saves-more',
    title: 'AppSumo vs SaaS subscription: which actually saves more',
    description: 'A clear-headed comparison of lifetime deals against recurring SaaS subscriptions for remote workers and small teams.',
    category: 'tools',
    body: `The lifetime deal vs subscription debate is mostly about time horizon and certainty. Both models can be the right choice depending on how long you plan to use a tool and how stable your need is.

## The break-even math
A lifetime deal replaces a subscription when total cost over your usage horizon is lower. A $69 deal replacing a $19 a month subscription breaks even in less than four months. Anything beyond that is pure savings.

## When subscriptions win
Subscriptions win when your need is short, uncertain, or you require strong support guarantees. Enterprise features, dedicated success managers, and uptime SLAs are usually subscription-only.

## When lifetime deals win
Lifetime deals win when the tool sits in your daily stack, the company is stable enough to ship for years, and your needs are unlikely to outgrow the tier limits. For solo founders and freelancers this hits often.

## Hidden costs to factor in
Some lifetime deals have hard caps that force you to subscribe later if you scale. Read the tier limits carefully. Also, a lifetime deal is a sunk cost: the temptation to keep using a worse tool because you paid once is real.

## The blended approach
Most remote operators end up blending: lifetime deals for the foundational stack (note-taking, automation, transactional email, simple CRM) and subscriptions for high-stakes infrastructure (hosting, payments, monitoring).

## The refund safety net
AppSumo's 60-day refund window makes the bet asymmetric. The downside on a bad deal is the time spent testing, not the money.`,
    faqs: [
      {
        q: 'How much can lifetime deals save versus subscriptions?',
        a: 'For a typical remote operator running 8 to 15 SaaS tools, swapping a third of them to well-chosen lifetime deals saves 1500 to 4000 USD per year on average, depending on tier and usage.',
      },
      {
        q: 'Do lifetime deals lock me out of new features?',
        a: 'Usually not within the same major version. Most lifetime deals include ongoing updates. Occasionally a major rebuild requires an upgrade, which is disclosed up front.',
      },
    ],
  },
  {
    slug: 'how-to-get-accepted-on-mercor',
    title: 'How to get accepted on Mercor as an AI evaluator',
    description: 'What Mercor actually screens for and how to position your profile to pass the bar in 2026.',
    category: 'freelance',
    body: `Mercor pays vetted experts to evaluate the outputs of frontier AI models. The work is async, remote, paid in USD, and the hourly rates beat almost any other remote gig if your domain is in demand. The catch is that Mercor screens hard. Most applicants do not pass.

## What Mercor evaluators actually do
You read a prompt, look at the model output, and rate it on rubrics specific to the task (correctness, faithfulness, safety, code quality, reasoning). For developers, the bulk of work is code-evaluation tasks: pairs of model completions where you judge which is better and why, often with a written justification.

## What Mercor screens for
Three things show up across most acceptance interviews:
1. Demonstrable depth in at least one technical or domain area (engineering, ML, biology, law, finance, etc.).
2. Written judgment under ambiguity (the application includes short written tasks).
3. Reliability signals (LinkedIn or GitHub profile that confirms what you claim).

## How to position your profile
List specifics rather than generalities. A profile that says "Senior Python developer with 6 years at Stripe building risk systems" converts better than "Software engineer with broad experience". For technical reviewers, GitHub history with substantial commits weighs more than degrees.

## The screening flow
You apply, complete a short written or coding screen, and if you pass you are invited to a paid trial task. Your first few tasks set your reliability rating; consistent quality unlocks more work and higher rates.

## Typical timeline
The full path from application to first paid task usually runs two to four weeks. Domain-scarce profiles (legal expertise, advanced math, niche programming languages) get screened faster.

## What disqualifies fast
Generic AI-assisted application copy is the fastest disqualifier. Mercor screens for human judgment; submitting LLM-rewritten answers signals exactly the opposite.`,
    faqs: [
      {
        q: 'Is Mercor open to applicants worldwide?',
        a: 'Yes. Mercor recruits globally. Payouts are in USD via standard international transfer methods.',
      },
      {
        q: 'How long until I see my first paid task on Mercor?',
        a: 'Most accepted experts get their first paid task within one to two weeks of finishing the screening. Domain-scarce profiles can be faster.',
      },
      {
        q: 'Do I need a PhD to apply to Mercor?',
        a: 'No. Mercor recruits across many domains, including software engineering. Demonstrable practical expertise matters more than credentials for most tracks.',
      },
    ],
  },
  {
    slug: 'how-much-does-mercor-pay-in-2026',
    title: 'How much does Mercor actually pay AI evaluators in 2026',
    description: 'Realistic hourly rates on Mercor for developers and domain experts, what drives the range, and how the rate climbs over time.',
    category: 'freelance',
    body: `Mercor pays per hour of evaluation work. The published range is 30 to 100 USD/hour, but actual earnings depend on your domain, your quality rating, and how much work you can sustain.

## The realistic starting range
New evaluators in software engineering and general technical tracks typically start at 30 to 45 USD per hour. Domain-scarce tracks (advanced math, biology, law) start higher, often 50 to 80 USD.

## What moves the rate up
Three drivers compound:
1. Quality consistency. Mercor weights the inter-rater agreement and the depth of your written justifications. High agreement plus thorough explanations push the rate upward over time.
2. Task complexity. Longer, more nuanced evaluations (multi-turn agent traces, code reasoning chains) pay more per hour than short pairwise comparisons.
3. Specialisation. Once you are tagged in a high-demand niche (LLM agent evaluation, formal proofs, legal reasoning), the rate jumps because supply is thinner.

## Volume
Volume is bursty. Some weeks have many task batches; others are quiet. Expect 5 to 20 hours per week as a realistic sustainable range while keeping a day job. A few experts in scarce domains go to 30+ hours.

## Annualised
A consistent 10 hours/week at 50 USD/hour is roughly 26,000 USD per year of side income. At 60 USD/hour for 20 hours/week, you hit around 60,000 USD per year, which can rival a full-time engineering job for some markets.

## When Mercor is not worth it
If your day job pays more than 100 USD per hour all-in (top-tier US engineering compensation), Mercor side income probably is not worth your evening hours. The math works best for mid-rate engineers, contractors between gigs, or experts in scarce domains.

## Payout speed
Standard payout cycles are weekly to bi-weekly. International transfers via the platform's payment partner; arrival times vary by country, typically two to five business days.`,
    faqs: [
      {
        q: 'What is the average Mercor hourly rate for developers in 2026?',
        a: 'Most accepted software developers earn 35 to 60 USD per hour after the first month, with experienced or specialised profiles reaching 80 USD or more on premium tasks.',
      },
      {
        q: 'Can Mercor replace a full-time salary?',
        a: 'For mid-rate engineers in lower-cost markets, sustained 25 to 30 hours per week at 50 to 70 USD per hour can match or exceed a local full-time salary. Most evaluators treat it as a complement, not a replacement.',
      },
    ],
  },
  {
    slug: 'mercor-vs-scale-vs-surge-ai',
    title: 'Mercor vs Scale AI vs Surge AI: which pays AI evaluators more',
    description: 'A practical comparison of the three biggest AI-evaluation platforms for developers and domain experts in 2026.',
    category: 'freelance',
    body: `Three platforms dominate paid AI evaluation in 2026: Mercor, Scale AI (via its Outlier and Remotasks brands), and Surge AI. They overlap in client base but differ on rate, task type, vetting bar, and reliability of work supply.

## Mercor
Vetted, expert-led, weekly rates often 30 to 100 USD/hour for software and technical tracks. Application bar is high; once accepted, the work tends to be deeper and longer-form. Best fit for experienced developers and domain experts who value rate over volume.

## Scale AI (Outlier/Remotasks)
Broader, more volume-oriented. Rates are lower on average (15 to 40 USD/hour for most tracks, premium domains higher). Lower entry bar makes it accessible quickly. Best fit if you want immediate volume and steady weekly hours, less concerned with rate.

## Surge AI
Positions itself as a quality-focused platform for premium annotation and evaluation. Rates broadly comparable to Mercor for similar skill tiers. Smaller pool of work but consistent for accepted experts.

## Direct comparison

| Factor              | Mercor          | Scale AI            | Surge AI         |
|---------------------|-----------------|---------------------|------------------|
| Typical rate (dev)  | 35-80 USD/h     | 18-40 USD/h         | 35-70 USD/h      |
| Acceptance bar      | High            | Low to medium       | Medium to high   |
| Volume reliability  | Bursty          | Steady              | Bursty           |
| Task depth          | Long-form, nuanced | Short, repetitive | Mixed            |
| Time to first task  | 2-4 weeks       | 1-7 days            | 2-3 weeks        |

## How to decide
If your hourly opportunity cost is high and you can absorb bursty volume, Mercor. If you want fast onboarding and steady weekly hours at lower rate, Scale AI/Outlier. If you have a niche specialty (formal verification, advanced math, specific languages), apply to all three and let the highest-paying offers win your time.

## Stacking
Many experts run two platforms in parallel. Mercor + Scale fills gaps in volume; Mercor + Surge spreads platform risk. Avoid signing exclusivity clauses if offered.`,
    faqs: [
      {
        q: 'Which platform pays AI evaluators the most in 2026?',
        a: 'Per hour, Mercor and Surge AI tend to lead for expert and developer tracks at 35-80 USD/hour. Scale AI/Outlier pays less on average but offers more sustained volume.',
      },
      {
        q: 'Can I work on Mercor and Scale AI at the same time?',
        a: 'Yes, unless either platform asks for exclusivity for a specific project. Most evaluators stack platforms to smooth income volume.',
      },
    ],
  },
  {
    slug: 'maximize-earnings-on-mercor-as-a-developer',
    title: 'How to maximize your earnings on Mercor as a developer',
    description: 'Practical levers to push your Mercor hourly rate and weekly hours after the first month.',
    category: 'freelance',
    body: `Once you are accepted on Mercor, your effective hourly earnings depend less on your initial offer and more on the choices you make in the first three months. The same evaluator can earn double another's pay for the same nominal rate.

## Lever 1: pick the right tracks
Mercor segments work into tracks (general code review, agent trace evaluation, formal reasoning, multi-modal, etc.). Some pay materially more per hour. Volunteer for the tracks that match your strongest depth, then ask to be slotted into the most technical or specialised batch within them. The premium for specialisation compounds.

## Lever 2: deepen your written justifications
Evaluators who write detailed, specific justifications get re-invited to higher-paying batches. Three sentences of substantive reasoning beat a one-word verdict for both quality scoring and future task offers. This is the single biggest controllable lever.

## Lever 3: maintain inter-rater agreement
Mercor compares your ratings against a calibration set and other experts. Consistent agreement above the platform threshold raises your rate; falling below it caps you. Read the rubric before every batch, do not skim.

## Lever 4: respond fast on new batch invites
Batches close as they fill. Evaluators who accept invites within minutes capture the premium-paying tasks before others do. Enable notifications and treat the invites window seriously.

## Lever 5: build a specialty profile
If you can credibly tag yourself as "the LLM agent evaluator" or "the Python type-system specialist", you become first call for that niche. Specialty profiles get invitation-only batches at top of the rate range.

## Lever 6: stack hours strategically
Mercor's hourly rate does not change with volume per se, but burst weeks (when batches drop) are when premium work flows. Plan to be available in those windows even if you cut hours elsewhere.

## Lever 7: do not burn out
Quality scores tank when you fatigue. Twenty good hours per week beat thirty mediocre ones. Cap your weekly hours and protect your judgment.`,
    faqs: [
      {
        q: 'How long until my Mercor rate increases?',
        a: 'Rate adjustments usually happen after 4 to 8 weeks of consistent high-quality work, sooner if you specialise in a high-demand niche the platform is actively staffing.',
      },
      {
        q: 'Can I negotiate a higher rate on Mercor?',
        a: 'Directly, no. Rate is driven by track, specialty, and quality signals. The fastest way to a higher effective rate is to qualify for higher-paying tracks via depth of justification and specialty positioning.',
      },
    ],
  },
  {
    slug: 'mercor-tax-and-payout-guide-2026',
    title: 'Mercor payouts and taxes guide for 2026',
    description: 'How Mercor pays you, supported payment methods, and what you owe in tax as a US or EU evaluator.',
    category: 'freelance',
    body: `Mercor pays evaluators on a weekly or bi-weekly cycle, in USD, via international transfer. Understanding the payout flow and the tax classification matters before you accept the first task.

## Payout cycle
Earnings accrue per task and are batched into a payout run. Most evaluators see funds initiated within a week of task completion, arriving in their account within two to five business days after that. International evaluators may see additional bank-level delays.

## Payout methods
Mercor partners with international transfer providers. In practice, evaluators receive USD into a local bank account using a routing partner, or via a multi-currency account such as Wise or Payoneer. Wise tends to land cheapest for non-US recipients because the FX spread is tighter than most bank conversions.

## US tax treatment
US-based evaluators are independent contractors. Earnings are reported on a 1099-NEC if you cross the IRS threshold. Self-employment tax (15.3 percent) applies in addition to federal and state income tax. Set aside roughly 30 percent of gross by default; refine to actual liability with your accountant.

## EU tax treatment
For EU evaluators, Mercor income is foreign-source self-employment income. Most jurisdictions require you to register as self-employed (auto-entrepreneur, freiberufler, partita IVA, etc.) and declare gross USD revenue converted at the date of receipt. Local social charges and VAT thresholds vary by country and by activity classification.

## Tools that help
A multi-currency account (Wise) for receipt, a basic accounting tool (QuickBooks self-employed, Indy in France, Holvi in Germany) for monthly reconciliation, and an annual session with a local accountant covers most setups.

## What Mercor does not withhold
Mercor does not withhold US or EU taxes on your behalf. The full payment lands in your account; the tax obligation sits entirely with you. Plan cash flow accordingly: spending the full payout each month leaves you short at year end.`,
    faqs: [
      {
        q: 'How does Mercor pay non-US evaluators?',
        a: 'Mercor pays via international transfer in USD. Most non-US evaluators receive payouts into a multi-currency account such as Wise or Payoneer to minimise FX fees.',
      },
      {
        q: 'Do I need to be self-employed to work on Mercor in the EU?',
        a: 'Yes, in most EU countries you must register as self-employed before invoicing for evaluator work. Local thresholds and statuses vary; check with a local accountant.',
      },
      {
        q: 'How much should I set aside for tax on Mercor income?',
        a: 'A safe default is 30 percent of gross for US evaluators (combined federal, state and self-employment tax). For EU evaluators the rate varies widely; budget 25 to 45 percent depending on country and social charges.',
      },
    ],
  },
  {
    slug: 'mercor-side-hustle-while-working-full-time',
    title: 'Running Mercor as a side hustle while working full-time',
    description: 'How to fit Mercor evaluation work around a full-time job: hours, contracts, energy management, and the legal angle.',
    category: 'freelance',
    body: `For most evaluators, Mercor is a side hustle, not a primary income. Done well, it adds 1,000 to 4,000 USD of monthly net to a full-time engineering salary without consuming your weekends entirely. Done poorly, it burns you out in three months.

## Realistic time budget
A sustainable side hustle on Mercor runs 6 to 12 hours per week. Most evaluators spread this across two to three evening sessions of 90 minutes each, plus one weekend block. Above 15 hours per week alongside a demanding day job, quality drops and so does effective hourly rate.

## Check your employment contract first
Before accepting any paid task, read the moonlighting clause in your current employment contract. Most US tech contracts allow outside paid work as long as it does not compete with the employer and does not use the employer's time, hardware, or IP. Some contracts require written approval. EU contracts vary heavily by country and seniority. If in doubt, ask in writing before the first task.

## Stay strictly outside work time
Do not log Mercor hours during your day-job working hours, even if you have downtime. Use a different device or at minimum a different login. Most legal issues with moonlighting come from blurring the time boundary, not from the work itself.

## Pick tracks that share skills with your day job
Evaluators are most efficient when the cognitive overhead transfers. A backend engineer doing code-review evaluation reuses their day-job judgment with little context switch. A backend engineer doing legal evaluation pays a steep ramp-up cost.

## Energy management
Block specific evenings for evaluation work and protect them. Random snippets between Netflix sessions produce low-quality output and miss the deadlines that matter for rate progression.

## Tax and accounting
Side-hustle income must be reported. In the US that is Schedule C plus self-employment tax. In the EU it usually requires a self-employed registration even at low volume. Budget accordingly from month one.

## When to scale beyond side hustle
A handful of evaluators eventually leave their day job to evaluate full-time. The math works at 30-plus weekly hours in a premium-rate track. Before quitting, sustain at least 20 hours weekly for two months on Mercor alone to validate that volume and rate hold up.`,
    faqs: [
      {
        q: 'Is Mercor side-hustle income legal while employed full-time?',
        a: 'Yes in most jurisdictions, subject to your employment contract. Most US and EU tech contracts allow non-competing outside work; some require written notice. Read your clause and ask in writing if unsure.',
      },
      {
        q: 'How many hours per week can I realistically do on Mercor alongside a day job?',
        a: 'Six to twelve hours per week is the sustainable range without quality drop. Above fifteen, evaluator quality and effective hourly rate typically decline.',
      },
    ],
  },
  // ─── Scheduled publication: June 4-7, 2026 ────────────────────────────
  {
    slug: 'fiverr-gig-conversion-optimisation-2026',
    title: 'Fiverr gig conversion optimisation: lift orders without raising traffic',
    description: 'The handful of changes that move impressions to orders on Fiverr gigs in 2026.',
    category: 'freelance',
    publishedAt: '2026-06-04T03:00:00Z',
    body: `Most sellers chase more impressions when their actual problem is conversion. A gig with 1,000 impressions and a 1 percent click-to-order rate earns less than the same gig at 500 impressions and 3 percent. Improving conversion is faster and cheaper than fighting for more visibility.

## The five levers that move conversion
1. Gig image. Buyers decide whether to click in under a second. A clear screenshot of the outcome plus a 4-word benefit header beats a stylised logo or a generic stock image. Test two images side by side and keep the winner.
2. Title clarity. Lead with the deliverable, not your job title. "I will fix bugs in your React app within 24 hours" converts faster than "Experienced full-stack developer for hire".
3. Tier anchoring. Most buyers pick the middle tier. Design Basic, Standard, Premium so Standard is the obvious choice. Set Basic narrow enough that it self-disqualifies for serious buyers, and Premium high enough to make Standard look like a bargain.
4. First two lines of the description. Buyers scan these before scrolling. State the buyer's problem, then your specific solution, in plain English. No throat-clearing.
5. Reviews recency. Five recent five-star reviews lift conversion more than fifty old ones. Active sellers cycle small orders to keep review freshness high.

## Track the right metric
The dashboard shows impressions, clicks and orders. The number to optimise is order-to-impression rate. Fiverr's algorithm rewards this directly and so does your bank account.

## What does not move conversion
- Longer descriptions
- More gig packages on the same listing
- Higher visual polish without clearer messaging
- Adding video without a strong opening 5 seconds`,
    faqs: [
      {
        q: 'What is a good conversion rate on a Fiverr gig in 2026?',
        a: 'A click-to-order rate above 2 percent on developer gigs is healthy. Top sellers in narrow niches sustain 4 to 6 percent.',
      },
      {
        q: 'Should I lower prices to lift conversion on Fiverr?',
        a: 'Only as a beginner with no reviews. Once you have a base of five-star reviews, raise prices and let the lower-budget buyers go elsewhere.',
      },
    ],
  },
  {
    slug: 'remote-work-tax-residency-strategies-2026',
    title: 'Remote work tax residency strategies for 2026',
    description: 'How tax residency works for remote tech workers in 2026 and the strategies that hold up legally.',
    category: 'tax',
    publishedAt: '2026-06-06T03:00:00Z',
    body: `Tax residency for remote workers in 2026 is less flexible than it was during the early pandemic years. Most jurisdictions tightened rules; aggressive strategies that worked in 2021 now trigger audits. The strategies that still work are conservative and well-documented.

## What determines tax residency
Most countries use a combination of physical presence (typically 183 days per year) and centre-of-life criteria (family, primary residence, economic ties). You can be tax resident in a country you spent only 60 days in if your centre of life is there.

## Strategy 1: clean break to a low-tax country
Establish full residency in a country with favourable tax treatment for remote workers (Portugal NHR, Cyprus non-dom, UAE, Georgia HNWI program). Requires actually moving: real lease, local bank, family registered there. Half-measures trigger your old country to claim you back.

## Strategy 2: structured nomadism with declared base
Nomad in a structured way while maintaining one declared tax residency. Stay under the trigger thresholds in transit countries (usually 183 days). Keep clear documentation: flight records, lease history, work-location log. This works if your home country has a territorial tax regime or low rates.

## Strategy 3: employer-of-record routing
Use an EOR service to be formally employed in the country whose tax regime you want. You contract with the EOR, the EOR employs you locally, your client pays the EOR. Clean and well-documented but reduces take-home by 15 to 30 percent due to EOR fees and local social charges.

## What does not work in 2026
Claiming residency in a country you barely visit. Maintaining a Delaware LLC while living in France and never declaring the income. Multiple-country residency claims that contradict each other. Tax authorities now exchange information aggressively; double-residency conflicts get spotted.

## Get professional advice
Tax residency at this complexity always warrants a one-time consultation with a cross-border tax accountant before making moves. A few hundred euros up front prevents five-figure surprises later.`,
    faqs: [
      {
        q: 'What is the safest tax residency for a remote tech worker in 2026?',
        a: 'Cleanly establishing residency in a single country with a favourable regime (Portugal NHR, Cyprus non-dom, UAE) and actually living there 183+ days is the safest. Half-measures trigger disputes.',
      },
      {
        q: 'Can I be a tax resident of no country?',
        a: 'Technically possible but extremely risky. Without a clear residency, your previous country usually retains the claim. Stateless tax residency is mostly a fiction.',
      },
    ],
  },
  {
    slug: 'niche-fiverr-gigs-that-still-pay-in-2026',
    title: 'Niche Fiverr gigs that still pay well in 2026',
    description: 'Underserved Fiverr gig categories where developers can still command strong rates with low competition.',
    category: 'freelance',
    publishedAt: '2026-06-06T03:00:00Z',
    body: `Generic Fiverr categories (build a landing page, fix a WordPress site) have saturated. Specific niches still have thin supply and command strong rates. The opportunity in 2026 is depth, not breadth.

## AI integration into existing apps
Buyers want LLM features in their existing product but most cannot ship them. Niche gigs around RAG implementation, custom OpenAI/Anthropic integration, and AI moderation pipelines sit at 300 to 1,500 USD per project with low competition.

## Stripe and payment edge cases
Setting up Stripe for SaaS billing has commoditised. Edge cases have not. Specific gigs around Stripe Tax compliance, subscription migrations, dunning workflows, and multi-currency settlement still pay 200 to 800 USD per scope.

## Database migrations
Migrating from MySQL to Postgres, from Firebase to Supabase, from MongoDB to Postgres. Each migration has gotchas. Sellers with specific migration experience command 500 to 2,500 USD per project.

## API documentation and SDK
Companies have APIs but no documentation that converts developers into users. Gigs around writing API docs, generating SDKs from OpenAPI specs, and producing API quickstarts pay 300 to 1,500 USD.

## Webhook reliability and queue setup
Setting up reliable webhook processing with retry queues, idempotency and observability. Niche but consistently in demand. 200 to 800 USD per setup.

## Cloud cost optimisation
AWS / GCP / Azure bill reviews and right-sizing audits. Companies routinely overspend by 30 to 60 percent. A solid audit gig pays 500 to 1,500 USD and can lead to ongoing consulting.

## What makes a niche work
- A specific buyer problem you can name
- A clear scope you can deliver in days, not weeks
- A repeatable process so you scale earnings without scaling hours
- One or two reference samples in your portfolio`,
    faqs: [
      {
        q: 'Which Fiverr niche is least competitive for developers in 2026?',
        a: 'Stripe edge-case work, RAG implementation, and database migrations have noticeably thinner supply than generic web-build gigs.',
      },
      {
        q: 'Can I start in a niche with no portfolio?',
        a: 'You need at least one demonstrable example. Build one for free on your own product or an open-source project; the demo is the credential.',
      },
    ],
  },
  {
    slug: 'wise-borderless-account-explained-2026',
    title: 'Wise multi-currency account explained for remote workers in 2026',
    description: 'How the Wise multi-currency account actually works for remote workers, freelancers and digital nomads.',
    category: 'freelance',
    publishedAt: '2026-06-07T03:00:00Z',
    body: `The Wise multi-currency account is the most-used banking layer in the remote-worker stack. It is also the most misunderstood. Here is what it actually is, what it is not, and when to use it.

## What it is
A holding account with local routing details in multiple currencies. You can receive money as if you had a domestic account in each of those currencies. You can hold balances in each currency. You can convert at the mid-market rate with a small fee.

## What it is not
A bank account, in the traditional sense. Balances are held with regulated electronic-money institutions, not as bank deposits. Coverage under deposit-insurance schemes varies by jurisdiction; in most cases the protection is different from a high-street bank account.

## How it earns its place in the stack
1. Receive client payments in their home currency without FX cut
2. Hold balances across currencies until convenient to convert
3. Convert at mid-market FX with a small transparent fee, instead of the 2-4 percent hidden spread typical banks take
4. Spend with a debit card in 40+ currencies without FX markup on the spend

## What it costs
Account is free. Receiving local payments is free. Converting incurs a transparent fee, typically 0.4 to 0.7 percent. Card spending in the home currency is free; in foreign currency uses mid-market FX with no markup.

## Where it fails
- Not suitable for parking large sums (no meaningful interest)
- Not a long-term substitute for a real local bank account in your residency country (lender history, mortgage relationships, regulatory norms)
- Limited cheque support in countries that still rely on it (rare but exists)
- Customer support is async and slower than a high-street bank for serious issues

## The pattern that works
Use Wise as the receiving layer between clients and your real bank account. Convert and sweep to your home-currency bank monthly. Keep small working balances in the currencies you spend in. Move savings elsewhere.

## Alternatives if Wise does not fit
- Revolut Business (similar feature set, EU-focused)
- Mercury (US-founders only, true bank account)
- Payoneer (alternative for clients refusing Wise)`,
    faqs: [
      {
        q: 'Is Wise a real bank account?',
        a: 'No. Wise is a regulated electronic-money institution. Functionally it acts like a multi-currency account, but the legal status and deposit protection differ from a high-street bank.',
      },
      {
        q: 'Can I use Wise as my only bank account?',
        a: 'For most remote workers, no. Use Wise as the cross-border receiving and FX layer and a domestic bank in your residency country for tax, mortgage, and long-term banking relationships.',
      },
    ],
  },
  // ─── Scheduled release: 30 guides, one per day from June 8 to July 7, 2026
  {
    slug: 'safetywing-real-claim-process-2026',
    title: 'SafetyWing claim process in 2026: what to expect',
    description: 'What submitting a SafetyWing claim actually looks like, how long it takes, and what to keep on file.',
    category: 'visa',
    publishedAt: '2026-06-10T03:00:00Z',
    body: `Most nomad-insurance reviews skip the part that matters: what happens when you actually claim. Here is the realistic SafetyWing claim experience in 2026.

## The claim flow
Log in, open the relevant policy, click "Submit a claim". Upload supporting documents (receipts, medical reports, prescriptions). Fill the standard form (date, location, brief description). Submit and track status in the dashboard.

## What documents you need
Original itemised receipts in local currency. Medical report from the treating physician, English or translated. Prescription details if applicable. Date of incident and treatment clearly visible. Proof of payment.

## Processing time
Simple claims under 500 USD: 5-10 business days. Complex or extra-documentation claims: 2-4 weeks. Inpatient or evacuation: handled through their 24/7 emergency line, often paid directly to the provider.

## What gets denied
Pre-existing conditions (limited exceptions). Treatment in your home country beyond the 30-day annual cap. Elective procedures (cosmetic, fertility, most non-emergency dental). Excluded activities. Documentation in a non-English language without translation.

## How to avoid friction
Photograph receipts the day you get them. Get the medical report in English at point of care. Submit within 30 days. Track expenses per trip in a single shared folder.

## What surprises first-time claimants
The standard plan reimburses you (pay first, get reimbursed). For inpatient stays, the provider can be billed directly but you must call the emergency line first.`,
    faqs: [
      {
        q: 'How long does a SafetyWing claim take?',
        a: 'Simple under-500-USD claims resolve in 5-10 business days. More complex claims take 2-4 weeks. Inpatient cases go through the 24/7 emergency line and are often paid direct to the provider.',
      },
      {
        q: 'What is the most common reason a claim is denied?',
        a: 'Pre-existing condition disputes and missing English documentation. Both addressable: full disclosure on signup and English receipts at point of care.',
      },
    ],
  },
  {
    slug: 'wise-vs-payoneer-for-developers',
    title: 'Wise vs Payoneer for freelance developers in 2026',
    description: 'Two of the most-used international payment platforms compared on the criteria that matter for freelance developers.',
    category: 'freelance',
    publishedAt: '2026-06-13T03:00:00Z',
    body: `Wise and Payoneer dominate cross-border payment for freelance developers. They look similar but the cost structure and feature set diverge in ways that matter at scale.

## Wise: built for transparency
Real mid-market FX rate. Local routing details in 8+ currencies. Fee taken visibly on conversion only (0.4 to 0.7 percent typical). Debit card spends at FX with no markup. Best fit when you receive payments and convert frequently.

## Payoneer: built for marketplaces
Standard fee on marketplace payouts (Upwork, Fiverr, Amazon, etc.). Less FX transparency, with rates usually 1 to 2 percent off mid-market. Local US receiving account for non-US sellers. Best fit when the marketplace partners with Payoneer.

## Side by side

| Factor | Wise | Payoneer |
|---|---|---|
| FX spread | 0.4-0.7% | 1-2% |
| Local routing currencies | USD, EUR, GBP, AUD, NZD, etc. | USD primarily |
| Marketplace integration | Direct withdrawal | Native on many |
| Debit card | Mid-market, no markup | 1-2% markup |
| Monthly fee | None | None on receive |

## When to use Payoneer
If your marketplace (Fiverr, Upwork) offers Payoneer as a payout option, the integration is usually smoother than withdrawing to Wise. The FX cost is the tradeoff.

## When to use Wise
For direct invoicing of clients, holding multiple currencies, spending abroad with a debit card. The FX savings compound at scale.

## The stack that works
Many freelance developers run both: Payoneer for marketplace payouts that integrate natively, Wise for direct client invoicing and FX management.`,
    faqs: [
      {
        q: 'Which is cheaper for receiving USD as an EU freelancer?',
        a: 'Wise. The mid-market FX with a small flat fee beats Payoneer by 1-2 percent of the transaction.',
      },
      {
        q: 'Can I link Payoneer payouts directly into Wise?',
        a: 'Not directly. You can transfer Payoneer to a US bank account and then to Wise, but the FX cost eats most of the benefit.',
      },
    ],
  },
  {
    slug: 'mercor-application-timeline-2026',
    title: 'Mercor application timeline 2026: realistic expectations',
    description: 'From application to first paid task, how long the Mercor onboarding actually takes in 2026.',
    category: 'freelance',
    publishedAt: '2026-06-14T03:00:00Z',
    body: `Mercor onboarding is faster than most expect for accepted candidates and slower than most hope for the rest. The realistic 2026 timeline is below.

## Day 0: submit application
A few personal details, declared expertise, optional LinkedIn or GitHub link. 20 minutes.

## Day 1-3: initial automated screen
Mercor processes the application algorithmically. Candidates with clear demonstrable expertise in declared areas get fast-tracked; the rest get a longer screening test.

## Day 3-7: written screening test
Domain-specific exercises (code-quality comparisons, reasoning prompts, written justifications). 45 to 90 minutes.

## Day 7-14: review
A combination of LLM grading and human review on the borderline cases. Most accepted candidates hear back within this window.

## Day 14-21: paid trial task
First paid task at the entry rate for the track. Performance here sets your initial reputation score.

## Day 21-30: regular task flow opens
Sustained quality on the trial task opens regular task invitations. Rate adjustments start happening 4 to 8 weeks in based on quality signals.

## What stalls the timeline
Generic LLM-rewritten application essays. Mismatched track applications (technical depth in field X but applied to field Y). Missing the response window on the written screen.

## What accelerates
Domain-scarce specialisation (formal math, OCaml, specific legal jurisdictions, medical credentials). Clear public proof of depth (GitHub commits, technical writing, conference talks).`,
    faqs: [
      {
        q: 'How long from Mercor application to first paid task?',
        a: 'For accepted candidates, 14 to 21 days on average. Domain-scarce profiles can be faster.',
      },
      {
        q: 'What stalls a Mercor application?',
        a: 'LLM-assisted essays, mismatched track applications, and missing the screening-test window are the top three reasons.',
      },
    ],
  },
  {
    slug: 'claude-prompt-patterns-for-developers',
    title: 'Claude prompt patterns developers actually use',
    description: 'The handful of prompt patterns that consistently produce useful output when using Claude for development work.',
    category: 'tools',
    body: `Most prompt-engineering content is generic. The patterns that work for developers using Claude in actual project work are narrower and concrete.

## Pattern 1: anchor with constraints
Start every prompt with the constraints (stack, language version, framework, deployment target). Without them, Claude defaults to mainstream choices that may not fit your stack.

## Pattern 2: ask for adversarial review
"Here is a function. List five ways this can fail under concurrent load." Adversarial framing produces better edge-case discovery than open-ended review.

## Pattern 3: compare two designs
"I am choosing between approach A (...) and approach B (...). What are the tradeoffs at 100x scale?" Comparison framing forces explicit reasoning instead of vague suggestions.

## Pattern 4: stepwise reasoning before code
"Before writing code, list the steps and the edge cases you will handle. Then write the code." Forcing the plan first cuts iteration cycles.

## Pattern 5: post-mortem of your own work
"Here is a bug that took me 2 hours to find. What signals could I have noticed faster?" Turns past pain into transferable habits.

## What rarely works
Asking for "best practices" unscoped. Asking for "production-ready" code without testing it. Trusting the first answer for anything security-sensitive. Asking Claude to generate large amounts of unsupervised code.

## Workflow integration
Most experienced developers integrate Claude through one of: terminal CLI, IDE assistant, dedicated chat. Pick one and use it consistently; switching between three is friction.`,
    faqs: [
      {
        q: 'Should I use Claude for all my development work?',
        a: 'No. Use it where it shortens iteration: review, scaffolding, documentation, edge-case discovery. Avoid it for architectural decisions and security-sensitive code.',
      },
      {
        q: 'How long does it take to get good at prompting Claude for dev work?',
        a: 'A week of consistent use to learn the patterns above. Beyond that, marginal improvements come from your own iteration loop, not from prompt tricks.',
      },
    ],
  },
  {
    slug: 'fiverr-buyer-objections-handling-guide',
    title: 'Handling common Fiverr buyer objections that kill orders',
    description: 'The five buyer objections that come up most on developer gigs in 2026 and the replies that close the order.',
    category: 'freelance',
    body: `Most lost Fiverr orders die in the messaging step, not at the gig page. Five buyer objections come up repeatedly on developer gigs. Knowing how to handle each closes more orders without lowering rate.

## Objection 1: "Can you do it cheaper?"
Reply: "I price by scope. If we trim X, the Standard tier covers it. Otherwise the price reflects the work this needs done correctly."

## Objection 2: "Can you do it faster?"
Reply: "Standard delivery is X days. Express delivery is available as an extra at Y USD because it requires me to reshuffle other commitments."

## Objection 3: "Other sellers offer this at half the price"
Reply: "There are cheaper options. Mine includes (specific deliverable they do not). If those matter for your case, I am the right pick; if not, the cheaper seller is fine."

## Objection 4: "Can you guarantee X?"
Reply: "I deliver to the scope we agreed. If something does not match the brief I revise at no extra cost. I cannot guarantee outcomes that depend on (specific external dependency)."

## Objection 5: "Can we discuss this on WhatsApp/Discord/email?"
Reply: "Fiverr requires all communication on platform. Happy to continue the conversation here." Off-platform contact violates terms of service; refusing politely protects your account.

## What kills more orders than any objection
Slow responses (over 30 minutes). Generic "Hi, thanks for reaching out" openings. Promising a quote and not following through. Asking the same scope question twice.

## When to walk away
If the buyer\\'s communication style suggests scope creep, midnight messages, or unreasonable expectations, decline politely. A bad order with a cancellation hurts your seller level more than a missed order.`,
    faqs: [
      {
        q: 'Should I match a cheaper competitor on Fiverr?',
        a: 'Rarely. Buyers who pick on price alone churn fast and leave one-star reviews. Compete on speed, clarity and demonstrable competence instead.',
      },
      {
        q: 'What if a Fiverr buyer insists on off-platform contact?',
        a: 'Politely decline. Fiverr terms forbid it and your account can be suspended for accepting. Most buyers accept the boundary when stated calmly.',
      },
    ],
  },
  {
    slug: 'mercor-evaluator-quality-rubrics-explained',
    title: 'How Mercor scores evaluator quality, explained',
    description: 'The signals Mercor uses to rate evaluator quality and what to do with each one to climb the rate ladder.',
    category: 'freelance',
    body: `Mercor pays evaluators differently based on a quality score that combines several signals. Understanding each lets you optimise where it matters and ignore the noise.

## Signal 1: inter-rater agreement
On calibration sets where ground truth exists or where multiple evaluators rate the same artefact, your agreement rate is measured. Above the threshold (typically high 80s to low 90s percent on most tracks) you advance; below it your rate caps.

## Signal 2: justification depth
A rating without explanation gets the minimum credit even if correct. A rating with specific, falsifiable reasoning ("the second response misses the off-by-one error on line 14") gets full credit and unlocks higher-paying batches.

## Signal 3: response speed within reasonable limits
Faster acceptance and completion of task invitations is rewarded. Sustained speed beyond ~24 hours per task average can be a red flag for over-rushing; the system optimises for quality, not pure speed.

## Signal 4: task completion rate
The percentage of accepted tasks you actually complete. Declining tasks after accepting damages the rate; not accepting in the first place is neutral.

## Signal 5: review feedback from human reviewers
Periodically a human reviews your evaluations and notes patterns. Constructive criticism applied in subsequent work raises your score.

## What to do
Read every rubric carefully before the first batch in a new track. Write justifications as if a human reviewer will read them (because one will). Accept only tasks you can complete cleanly within the deadline. Treat the first 10 to 20 tasks in any new track as the calibration window.

## What gets you removed
Sustained inter-rater agreement below threshold across multiple tracks. Justifications that read as LLM-generated. Accepting and abandoning tasks repeatedly.`,
    faqs: [
      {
        q: 'How does Mercor weight evaluator quality?',
        a: 'A composite of inter-rater agreement, justification depth, completion rate and human review feedback. Inter-rater agreement and justification depth are the two heaviest signals.',
      },
      {
        q: 'Can I improve my Mercor rate without doing more hours?',
        a: 'Yes. Higher justification depth and consistent rubric adherence raise the rate without volume change. Quality compounds; quantity alone does not.',
      },
    ],
  },
  {
    slug: 'safetywing-pre-existing-conditions-guide',
    title: 'SafetyWing and pre-existing conditions: what is covered',
    description: 'How SafetyWing handles pre-existing conditions in 2026 and what to disclose at signup.',
    category: 'visa',
    body: `Pre-existing conditions are the most-misunderstood part of nomad insurance. The SafetyWing 2026 policy treats them specifically; understanding the rules avoids surprise denials.

## What counts as pre-existing
Any medical condition that existed, was diagnosed, treated, or experienced symptoms in the period before the policy started. The lookback window is typically 2 years for chronic conditions, shorter for acute ones.

## What is excluded
Treatment, medication, follow-up care, and any complications directly related to a pre-existing condition. This is the default exclusion.

## What is covered (acute-onset exception)
Unexpected, sudden emergencies of a pre-existing condition can be covered up to a specific cap, even though the condition itself is excluded. Example: a person with stable diabetes can be covered for an unexpected hyperglycaemic emergency that requires hospital care, even though routine diabetes management is excluded.

## What to disclose at signup
Everything. The SafetyWing signup form asks about specific conditions. Disclosing fully is the cheapest insurance against later denials. Non-disclosure that surfaces at claim time results in immediate denial and potential cancellation.

## Conditions specifically handled in 2026
COVID and respiratory: covered as acute under standard rules.
Mental health: limited coverage, country-dependent.
Pregnancy: limited to specific complications, with most pregnancy care excluded for nomads.
Sports injuries: covered unless from an excluded activity (extreme sports, combat sports without rider).

## How to plan
If you have a chronic condition that needs ongoing care, SafetyWing alone is insufficient. Layer it with a home-country policy or a specialist expat policy that covers your condition specifically.`,
    faqs: [
      {
        q: 'Will SafetyWing cover treatment for a known pre-existing condition?',
        a: 'Generally no for routine care. Acute, sudden emergencies of pre-existing conditions may be covered up to a specific cap. Routine management of the condition is excluded.',
      },
      {
        q: 'Should I disclose all conditions when signing up for SafetyWing?',
        a: 'Yes. Non-disclosure that surfaces at claim time is an immediate denial reason and can result in policy cancellation. Disclosure does not raise the price; the policy is flat.',
      },
    ],
  },
  {
    slug: 'mercor-vs-tortoise-eval-platforms',
    title: 'Mercor vs Tortoise vs Outlier: AI evaluation platforms compared',
    description: 'Three growing AI evaluation platforms compared on acceptance bar, hourly rate and task supply.',
    category: 'freelance',
    body: `The AI evaluation market has expanded beyond Mercor and Scale in 2026. Three platforms account for most expert paid evaluation work: Mercor, Tortoise, and Outlier (Scale AI brand).

## Mercor
High vetting bar. Rates 30 to 100 USD/h for software and technical tracks. Long-form tasks with depth. Best for experienced specialists who value rate over volume.

## Tortoise
Newer entrant focused on premium tracks (formal reasoning, advanced math, scientific evaluation). Smaller pool of work but high acceptance rate for genuinely scarce profiles. Rates 50 to 150 USD/h for premium tracks.

## Outlier (Scale AI)
Larger volume, lower acceptance bar. Rates typically 18 to 45 USD/h. Steady weekly volume. Best for evaluators wanting predictable hours over rate.

## Side by side

| Factor | Mercor | Tortoise | Outlier |
|---|---|---|---|
| Typical rate (dev) | 35-80 USD/h | 50-150 USD/h | 18-45 USD/h |
| Acceptance bar | High | Very high (niche-dependent) | Low-medium |
| Volume reliability | Bursty | Bursty | Steady |
| Task complexity | Long-form | Premium-niche | Mixed |
| Best for | Specialists | Scarce-domain experts | Volume seekers |

## Stacking
Many evaluators run two or three platforms in parallel. Mercor and Tortoise for rate, Outlier for filling gaps. Exclusivity is rare; check before signing.

## What is changing in 2026
Premium domains (formal verification, advanced math, specific legal) command higher rates everywhere as AI labs push reasoning capabilities. Generic code-review tracks have softened. The gap between top and entry rate is widening.`,
    faqs: [
      {
        q: 'Which platform pays AI evaluators the most in 2026?',
        a: 'Tortoise leads on premium niches; Mercor leads for mainstream technical tracks. Outlier pays less per hour but offers more sustained volume.',
      },
      {
        q: 'Can I work on multiple AI evaluation platforms at once?',
        a: 'Yes. Exclusivity is rare. Most experienced evaluators stack at least two platforms to balance rate and volume.',
      },
    ],
  },
  {
    slug: 'fiverr-pro-application-checklist-2026',
    title: 'Fiverr Pro application checklist for 2026',
    description: 'The portfolio, profile, and proof points that pass the Fiverr Pro review in 2026.',
    category: 'freelance',
    body: `Fiverr Pro is the curated, manually-vetted tier for high-end sellers. The 2026 application bar is higher than at launch; preparing properly is worth the upfront work.

## What Fiverr Pro is
A separate tier with stricter quality review. Pro sellers get higher visibility, premium pricing, and access to enterprise buyers. Listings are reviewed manually by Fiverr staff, not algorithmically.

## What they screen for
Demonstrable expert-level work in the offered category. Professional presentation (portfolio, bio, samples). Track record of client outcomes, ideally with named brands or substantial projects. English written communication at native or near-native level.

## Application materials
1. Updated profile with high-quality photo
2. 3-5 portfolio samples that prove expert-level capability
3. Bio that names specific companies, projects, or technologies you have shipped
4. Existing Fiverr track record (most successful applicants have 50+ five-star reviews on standard tier first)
5. References or external verification (LinkedIn, GitHub, conference talks)

## What disqualifies
Self-promotional fluff in the bio. Portfolio samples that look like personal projects rather than client work. Inconsistent quality across samples. No external proof of expertise outside of Fiverr.

## Approval timeline
4 to 8 weeks from submission to decision in 2026. Approval rates are roughly 20-30 percent of applications.

## What changes after approval
Pro sellers list under separate URLs with the Pro badge. Buyer pool shifts to higher-budget clients. Pricing typically 2-5x the seller\\'s standard tier. Pro-only message templates and order management.

## Re-application
If rejected, you can re-apply after 6 months. Use the gap to strengthen the specific signals the rejection letter cites.`,
    faqs: [
      {
        q: 'What is the Fiverr Pro acceptance rate?',
        a: 'Roughly 20 to 30 percent of applications in 2026. The bar is real; most rejections trace to insufficient external proof of expertise or thin portfolios.',
      },
      {
        q: 'How long does Fiverr Pro approval take?',
        a: '4 to 8 weeks from submission to decision in 2026, with manual review by Fiverr staff.',
      },
    ],
  },
  {
    slug: 'how-to-receive-stripe-payouts-as-non-us',
    title: 'Receiving Stripe payouts as a non-US developer in 2026',
    description: 'How non-US developers can accept Stripe payouts and what the alternatives are in 2026.',
    category: 'freelance',
    body: `Stripe processes most online developer payments globally but the payout side differs by country. Non-US developers in 2026 have a few clean paths.

## Where Stripe operates directly
50+ countries including all EU member states, UK, Canada, Australia, New Zealand, Singapore, Japan. Direct local payouts in local currency.

## Where Stripe Atlas helps
Founders in countries Stripe does not support locally can incorporate a US LLC via Stripe Atlas. Atlas opens a US bank account, registers the LLC, and connects Stripe directly to it. Payouts land in the US account; you transfer to your home country via Wise or similar.

## Cost considerations
Atlas costs around 500 USD upfront plus annual state filing fees (50-300 USD depending on state). Profitable above a few thousand USD in annual revenue; not worth it for tiny side projects.

## Alternative: Stripe via marketplace
If you sell through a marketplace (Gumroad, Lemon Squeezy, Paddle), the marketplace acts as Merchant of Record. You receive payouts in your local currency without operating Stripe directly. Higher per-transaction cost; less operational overhead.

## What Stripe replaces
Stripe + Wise removes most of the legacy "merchant account" pain. PayPal becomes optional rather than required. Local card-acquirer relationships are no longer necessary for most volumes.

## Reporting and tax
Stripe issues 1099-K equivalents per jurisdiction. Track gross payout volume against your tax filing currency. Multi-currency accounts simplify the reconciliation.

## The clean stack
Stripe (direct or via Atlas) → multi-currency account (Wise) → local bank for daily spend. Sweep monthly. Reconcile once a year with an accountant.`,
    faqs: [
      {
        q: 'Do I need a US LLC to use Stripe as a non-US developer?',
        a: 'Only if your country is not supported by Stripe directly. 50+ countries support local payouts. Stripe Atlas handles the rest at 500 USD setup.',
      },
      {
        q: 'How fast does Stripe pay out non-US developers?',
        a: 'Standard payout cadence is 2 to 7 business days after each batch settles. Faster instant-payout options are available in some countries for a small fee.',
      },
    ],
  },
  {
    slug: 'remote-tech-interview-loop-2026-changes',
    title: 'Remote tech interview loops in 2026: what changed',
    description: 'The current shape of remote technical interviews in 2026 and how the changes affect preparation.',
    category: 'finding',
    body: `Remote technical interview loops have settled into a specific shape in 2026 that differs meaningfully from 2022-2023. The changes affect how to prepare and what to expect.

## The typical loop in 2026
1. Recruiter screen (30 min)
2. Hiring manager call (45-60 min)
3. Technical screen, often pairing on real code (60-90 min)
4. System design or domain-specific round (60-90 min)
5. Team values / culture round (45 min)

Total: 5-6 hours over 2-3 weeks for senior roles. Junior loops have shrunk to 3-4 rounds at most companies.

## What is new
- Pairing screens have replaced leetcode-style puzzles at most remote-first companies
- AI usage during the technical screen is now explicitly disclosed up front; some companies allow it, some forbid it, almost none ignore it
- Take-home assignments are shorter (1-3 hours, not 8+) due to backlash
- Async-friendly loops emerging at fully distributed companies (recorded answers to written prompts)

## What is the same
Hiring manager call as the most decision-weight conversation. Team fit round as the disqualification trap. Recruiter screen as the salary expectations gate.

## How to prepare in 2026
- Specifically rehearse pairing-screen muscle: working code with someone watching, talking through tradeoffs, accepting feedback in real time
- Be clear up front about AI usage; ask whether tools like Claude or Copilot are allowed during the technical
- Have one strong system-design example ready that demonstrates the specific scale and complexity of the role
- Know your salary number before the recruiter call; never disclose first

## What stalls offers
Mismatched salary expectations surfacing late. Inconsistent answers across rounds. Asking only logistics questions; never asking substantive questions about the team or product. Generic culture-round answers.`,
    faqs: [
      {
        q: 'Can I use AI during a remote technical interview in 2026?',
        a: 'Depends entirely on the company. Most explicitly state their policy at the start. Ask if not stated; assuming wrong is worse than asking.',
      },
      {
        q: 'How long is a typical senior remote tech interview loop in 2026?',
        a: '5 to 6 hours of contact time spread over 2 to 3 weeks. Loops longer than 8 hours are uncommon and a yellow flag on the hiring process.',
      },
    ],
  },
  // ─── World Cup 2026 topical cluster (immediate release, no publishedAt)
  // ─── World Cup 2026 USA-focused cluster (immediate release)
);

// Build-time filter: any guide with a future publishedAt is hidden from
// this build. The daily scrape-and-deploy cron picks them up on the day
// their publishedAt timestamp passes.
const BUILD_NOW = Date.now();
export const GUIDES: GuideEntry[] = ALL_GUIDES.filter(
  (g) => !g.publishedAt || new Date(g.publishedAt).getTime() <= BUILD_NOW,
);

export const GUIDE_MAP: Record<string, GuideEntry> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g]),
);
