export interface SkillEntry {
  slug: string;
  name: string;
  category: 'language' | 'framework' | 'cloud' | 'data' | 'devops' | 'ai' | 'mobile' | 'web3';
  aliases: string[];
  blurb: string;
  bodyEn: string;
}

export const SKILLS: SkillEntry[] = [
  {
    slug: 'react',
    name: 'React',
    category: 'framework',
    aliases: ['react.js', 'reactjs', 'react native'],
    blurb: 'The dominant front-end library on remote engineering postings.',
    bodyEn:
      'React still leads the front-end stack on remote job postings in 2026. Roughly two thirds of remote front-end roles ask for React experience, with Next.js explicitly named in about one in three. Senior salary bands cluster between 130 and 190 thousand USD for fully remote positions at US-headquartered companies, and 70 to 110 thousand EUR at EU-based employers.',
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    category: 'language',
    aliases: ['ts'],
    blurb: 'Default language for new web and Node services on remote teams.',
    bodyEn:
      'TypeScript is now the baseline for new web services in remote-first companies. Listings that mention TypeScript as required pay on average 8 to 12 percent above their JavaScript-only equivalents at the same seniority. Strong typing fits async, distributed teams: it reduces context-loss cost between reviewers.',
  },
  {
    slug: 'javascript',
    name: 'JavaScript',
    category: 'language',
    aliases: ['js', 'es6'],
    blurb: 'The universal web language, still strongest on broad front-end and Node postings.',
    bodyEn:
      'JavaScript remains the most commonly tagged language on remote engineering postings. Most of these listings now expect TypeScript familiarity in practice, but JavaScript proficiency is the door.',
  },
  {
    slug: 'python',
    name: 'Python',
    category: 'language',
    aliases: ['py'],
    blurb: 'The dominant language for remote data, ML, and backend roles.',
    bodyEn:
      'Python tops the remote postings list when filtering for data engineering, machine learning and backend roles. ML and AI engineering roles add a substantial premium: Python-tagged ML engineer positions typically sit 30 to 50 percent above generalist Python backend bands.',
  },
  {
    slug: 'rust',
    name: 'Rust',
    category: 'language',
    aliases: [],
    blurb: 'Premium-paid systems language with growing remote demand.',
    bodyEn:
      'Rust roles are still a smaller share of total remote postings but pay among the highest bands in the index. Senior Rust positions at fintech, infrastructure and cryptography companies sit at 180 to 260 thousand USD remotely.',
  },
  {
    slug: 'go',
    name: 'Go',
    category: 'language',
    aliases: ['golang'],
    blurb: 'Backbone of remote-first infrastructure and platform engineering.',
    bodyEn:
      'Go dominates platform engineering listings at remote-first companies. If you read a remote SRE or infra posting in 2026, there is a roughly 60 percent chance it asks for Go.',
  },
  {
    slug: 'java',
    name: 'Java',
    category: 'language',
    aliases: ['jvm'],
    blurb: 'Enterprise backbone, common on remote enterprise back-end postings.',
    bodyEn:
      'Java is heavily represented in remote backend listings at enterprise-scale companies and at fintech. Spring Boot is the dominant framework on these postings.',
  },
  {
    slug: 'kotlin',
    name: 'Kotlin',
    category: 'language',
    aliases: [],
    blurb: 'Primary language for remote Android and JVM backend work.',
    bodyEn:
      'Kotlin appears on most remote Android postings and increasingly on JVM backend roles replacing legacy Java services.',
  },
  {
    slug: 'swift',
    name: 'Swift',
    category: 'mobile',
    aliases: ['ios'],
    blurb: 'Required for almost every remote iOS engineering role.',
    bodyEn:
      'Swift is required across remote iOS engineering postings. SwiftUI experience is increasingly listed as a hard requirement on new postings since 2024.',
  },
  {
    slug: 'csharp',
    name: 'C#',
    category: 'language',
    aliases: ['c#', 'dotnet', '.net'],
    blurb: 'Common on remote enterprise and game backend postings.',
    bodyEn:
      'C# remains widespread on remote enterprise backend and on game studio postings. .NET 8 and 9 features appear regularly in 2026 listings.',
  },
  {
    slug: 'ruby',
    name: 'Ruby',
    category: 'language',
    aliases: ['ruby on rails', 'rails'],
    blurb: 'Strong remote presence at established SaaS companies.',
    bodyEn:
      'Ruby and Ruby on Rails postings are concentrated at established remote-first SaaS companies. The market is smaller than five years ago but pays well at senior levels.',
  },
  {
    slug: 'php',
    name: 'PHP',
    category: 'language',
    aliases: ['laravel'],
    blurb: 'Stable demand on remote backend and Laravel postings.',
    bodyEn:
      'PHP remote demand is steady, with Laravel being the dominant framework on new listings. Symfony is common on European postings.',
  },
  {
    slug: 'nextjs',
    name: 'Next.js',
    category: 'framework',
    aliases: ['next.js', 'next js'],
    blurb: 'The default React meta-framework on remote front-end postings.',
    bodyEn:
      'Next.js is explicitly named on the majority of remote React job postings since 2023. App Router experience is now the differentiator on senior listings.',
  },
  {
    slug: 'vue',
    name: 'Vue',
    category: 'framework',
    aliases: ['vuejs', 'vue.js', 'nuxt'],
    blurb: 'Second front-end framework on remote postings, strong in EU.',
    bodyEn:
      'Vue is the second most-requested front-end framework on remote postings, with particularly strong demand at EU-based companies.',
  },
  {
    slug: 'svelte',
    name: 'Svelte',
    category: 'framework',
    aliases: ['sveltekit'],
    blurb: 'Smaller but growing remote demand at modern web teams.',
    bodyEn:
      'Svelte and SvelteKit postings remain a smaller share of remote front-end demand but grow steadily, particularly at scrappy product teams.',
  },
  {
    slug: 'angular',
    name: 'Angular',
    category: 'framework',
    aliases: [],
    blurb: 'Mature framework, common on remote enterprise front-end postings.',
    bodyEn:
      'Angular postings cluster at enterprise-scale companies and at established financial services firms with remote engineering offices.',
  },
  {
    slug: 'nodejs',
    name: 'Node.js',
    category: 'framework',
    aliases: ['node', 'node js'],
    blurb: 'Default JavaScript runtime on remote backend postings.',
    bodyEn:
      'Node.js anchors the JavaScript backend stack on remote postings. Express, Fastify and NestJS dominate the framework choices.',
  },
  {
    slug: 'django',
    name: 'Django',
    category: 'framework',
    aliases: [],
    blurb: 'Primary Python web framework on remote backend postings.',
    bodyEn:
      'Django is the most-listed Python web framework on remote backend postings, especially in fintech and content-heavy SaaS companies.',
  },
  {
    slug: 'fastapi',
    name: 'FastAPI',
    category: 'framework',
    aliases: [],
    blurb: 'Growing Python framework on modern remote backend roles.',
    bodyEn:
      'FastAPI listings have overtaken Flask on new remote Python backend postings. ML serving and lightweight API teams favor it.',
  },
  {
    slug: 'spring',
    name: 'Spring',
    category: 'framework',
    aliases: ['spring boot'],
    blurb: 'Dominant Java framework on remote backend postings.',
    bodyEn:
      'Spring and Spring Boot are explicitly named on nearly all remote Java backend listings. Microservices architectures with Spring Cloud are typical.',
  },
  {
    slug: 'aws',
    name: 'AWS',
    category: 'cloud',
    aliases: ['amazon web services'],
    blurb: 'The most-requested cloud on remote backend, devops and platform roles.',
    bodyEn:
      'AWS is the most-requested cloud across remote engineering postings. Lambda, ECS, RDS and S3 are the staples on backend listings; EKS, IAM and CloudWatch on platform and SRE listings.',
  },
  {
    slug: 'gcp',
    name: 'GCP',
    category: 'cloud',
    aliases: ['google cloud'],
    blurb: 'Second cloud on remote data, ML and infra postings.',
    bodyEn:
      'GCP appears on roughly one in three remote infra and data postings, often as a primary cloud for data warehouse-heavy stacks built on BigQuery.',
  },
  {
    slug: 'azure',
    name: 'Azure',
    category: 'cloud',
    aliases: [],
    blurb: 'Common on remote enterprise and .NET-heavy postings.',
    bodyEn:
      'Azure dominates remote postings at enterprise-grade and .NET-centric companies. Azure DevOps, App Service and AKS appear most frequently.',
  },
  {
    slug: 'kubernetes',
    name: 'Kubernetes',
    category: 'devops',
    aliases: ['k8s'],
    blurb: 'Baseline orchestration skill on remote platform and SRE roles.',
    bodyEn:
      'Kubernetes is now baseline on remote platform and SRE postings. The differentiator at senior levels is multi-cluster, multi-region operations experience.',
  },
  {
    slug: 'docker',
    name: 'Docker',
    category: 'devops',
    aliases: ['containers'],
    blurb: 'Ubiquitous container tooling on remote engineering postings.',
    bodyEn:
      'Docker is ubiquitous on remote engineering listings. Container literacy is now an entry-level expectation, not a senior differentiator.',
  },
  {
    slug: 'terraform',
    name: 'Terraform',
    category: 'devops',
    aliases: ['iac', 'opentofu'],
    blurb: 'Primary IaC tool on remote platform postings.',
    bodyEn:
      'Terraform appears on nearly all remote platform engineering postings as the infrastructure-as-code tool. OpenTofu adoption is rising on more security-conscious teams.',
  },
  {
    slug: 'ansible',
    name: 'Ansible',
    category: 'devops',
    aliases: [],
    blurb: 'Common configuration management tool on remote ops roles.',
    bodyEn:
      'Ansible appears on remote ops postings that manage long-running VM fleets and on hybrid cloud environments.',
  },
  {
    slug: 'postgres',
    name: 'PostgreSQL',
    category: 'data',
    aliases: ['postgresql', 'pg'],
    blurb: 'Default OLTP database across remote backend postings.',
    bodyEn:
      'PostgreSQL is the default OLTP database in remote postings. Knowledge of advanced features (logical replication, partial indexes, RLS) marks senior listings.',
  },
  {
    slug: 'mongodb',
    name: 'MongoDB',
    category: 'data',
    aliases: ['mongo'],
    blurb: 'Common document store on remote backend postings.',
    bodyEn:
      'MongoDB demand is steady but smaller than five years ago. New listings often pair it with caching layers and event streaming.',
  },
  {
    slug: 'mysql',
    name: 'MySQL',
    category: 'data',
    aliases: ['mariadb'],
    blurb: 'Widespread on remote backend postings at established companies.',
    bodyEn:
      'MySQL and MariaDB demand on remote postings is steady, particularly at established consumer SaaS and at content-heavy platforms.',
  },
  {
    slug: 'redis',
    name: 'Redis',
    category: 'data',
    aliases: [],
    blurb: 'Ubiquitous caching and queuing primitive on remote backend roles.',
    bodyEn:
      'Redis appears on most remote backend postings as the caching, session and lightweight queueing primitive.',
  },
  {
    slug: 'elasticsearch',
    name: 'Elasticsearch',
    category: 'data',
    aliases: ['opensearch'],
    blurb: 'Search and log analytics skill across remote backend postings.',
    bodyEn:
      'Elasticsearch and its OpenSearch fork are commonly listed on remote backend postings for search, logging and analytics workloads.',
  },
  {
    slug: 'kafka',
    name: 'Kafka',
    category: 'data',
    aliases: [],
    blurb: 'Premium event streaming skill on remote data platform postings.',
    bodyEn:
      'Kafka shows up on remote data platform and event-driven backend postings. Senior remote postings name it as a hard requirement for distributed systems roles.',
  },
  {
    slug: 'snowflake',
    name: 'Snowflake',
    category: 'data',
    aliases: [],
    blurb: 'Leading data warehouse on remote data engineering postings.',
    bodyEn:
      'Snowflake leads the remote data warehouse listings. Knowledge of cost optimization and access control patterns is the senior differentiator.',
  },
  {
    slug: 'bigquery',
    name: 'BigQuery',
    category: 'data',
    aliases: [],
    blurb: 'Default warehouse on remote GCP-anchored data teams.',
    bodyEn:
      'BigQuery anchors remote data engineering listings at GCP-centric companies. Familiarity with slot management and BI Engine is the senior signal.',
  },
  {
    slug: 'dbt',
    name: 'dbt',
    category: 'data',
    aliases: ['data build tool'],
    blurb: 'Default transformation layer on remote analytics engineering roles.',
    bodyEn:
      'dbt is now ubiquitous on remote analytics engineering postings. Most postings expect both Core and Cloud familiarity.',
  },
  {
    slug: 'spark',
    name: 'Apache Spark',
    category: 'data',
    aliases: ['pyspark'],
    blurb: 'Distributed processing skill on remote data engineering roles.',
    bodyEn:
      'Spark and PySpark remain dominant on remote data engineering postings dealing with large-scale batch and streaming pipelines.',
  },
  {
    slug: 'airflow',
    name: 'Apache Airflow',
    category: 'data',
    aliases: [],
    blurb: 'Most-listed orchestrator on remote data engineering roles.',
    bodyEn:
      'Airflow is the most-listed workflow orchestrator on remote data engineering postings. Prefect and Dagster appear on a growing minority of newer listings.',
  },
  {
    slug: 'pytorch',
    name: 'PyTorch',
    category: 'ai',
    aliases: [],
    blurb: 'Default ML framework on remote ML engineering postings.',
    bodyEn:
      'PyTorch is the dominant deep learning framework on remote ML engineering postings since 2022. Familiarity with distributed training and serving is the senior signal.',
  },
  {
    slug: 'tensorflow',
    name: 'TensorFlow',
    category: 'ai',
    aliases: [],
    blurb: 'Established ML framework on remote ML engineering postings.',
    bodyEn:
      'TensorFlow demand remains on remote ML postings, particularly at enterprise companies maintaining established production pipelines.',
  },
  {
    slug: 'llm',
    name: 'LLM Engineering',
    category: 'ai',
    aliases: ['large language model', 'gpt', 'claude', 'llama'],
    blurb: 'The fastest-growing remote AI specialty since 2023.',
    bodyEn:
      'LLM engineering listings on remote postings have grown sharply since 2023. Production experience with retrieval-augmented generation, fine-tuning and evals is the senior differentiator. Salaries on dedicated LLM engineering postings sit at 180 to 280 thousand USD remotely at well-funded companies.',
  },
  {
    slug: 'rag',
    name: 'RAG',
    category: 'ai',
    aliases: ['retrieval augmented generation'],
    blurb: 'Production retrieval skill across remote AI engineering postings.',
    bodyEn:
      'Retrieval-augmented generation experience is named on most remote AI engineering postings since 2024. Vector database familiarity and embedding choice tradeoffs are typical interview topics.',
  },
  {
    slug: 'huggingface',
    name: 'Hugging Face',
    category: 'ai',
    aliases: [],
    blurb: 'Default ML model platform on remote ML engineering postings.',
    bodyEn:
      'Hugging Face Transformers, Datasets and Hub appear on most remote ML engineering postings. Model fine-tuning experience using their stack is a common requirement.',
  },
  {
    slug: 'graphql',
    name: 'GraphQL',
    category: 'web3',
    aliases: ['apollo'],
    blurb: 'API layer skill on remote full-stack postings.',
    bodyEn:
      'GraphQL remains on a meaningful minority of remote full-stack postings. Apollo and urql are the most-named clients.',
  },
  {
    slug: 'tailwind',
    name: 'Tailwind CSS',
    category: 'framework',
    aliases: ['tailwindcss'],
    blurb: 'Default CSS framework on modern remote front-end roles.',
    bodyEn:
      'Tailwind CSS is now the default styling system on most new remote front-end postings, often paired with shadcn or other component libraries.',
  },
  {
    slug: 'redux',
    name: 'Redux',
    category: 'framework',
    aliases: ['redux toolkit'],
    blurb: 'Established React state management on remote front-end roles.',
    bodyEn:
      'Redux and Redux Toolkit appear on a meaningful share of remote React postings, particularly at established product teams maintaining mature applications.',
  },
  {
    slug: 'flutter',
    name: 'Flutter',
    category: 'mobile',
    aliases: ['dart'],
    blurb: 'Primary cross-platform mobile skill on remote mobile postings.',
    bodyEn:
      'Flutter dominates the cross-platform mobile category on remote postings, ahead of React Native at most of the newer listings since 2023.',
  },
  {
    slug: 'react-native',
    name: 'React Native',
    category: 'mobile',
    aliases: ['rn'],
    blurb: 'Established cross-platform mobile skill on remote postings.',
    bodyEn:
      'React Native remains a strong demand on remote mobile postings, particularly at companies whose web stack is React.',
  },
  {
    slug: 'unity',
    name: 'Unity',
    category: 'framework',
    aliases: [],
    blurb: 'Primary game engine on remote gameplay engineering postings.',
    bodyEn:
      'Unity remains the dominant engine on remote gameplay engineering postings at indie and mid-size studios.',
  },
  {
    slug: 'unreal',
    name: 'Unreal Engine',
    category: 'framework',
    aliases: ['ue5'],
    blurb: 'AAA-tier engine on remote gameplay engineering postings.',
    bodyEn:
      'Unreal Engine 5 listings on remote postings are smaller in count but pay among the highest bands for gameplay engineers.',
  },
  {
    slug: 'solidity',
    name: 'Solidity',
    category: 'web3',
    aliases: ['evm', 'smart contracts'],
    blurb: 'Primary smart contract language on remote crypto postings.',
    bodyEn:
      'Solidity remains the primary smart contract language on remote crypto and DeFi postings. Audit-grade experience commands the highest bands in the category.',
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'devops',
    aliases: ['infosec', 'appsec'],
    blurb: 'Premium-paid remote category with shortage of senior candidates.',
    bodyEn:
      'Remote cybersecurity postings remain underserved by candidates at senior levels. AppSec, cloud security and detection engineering are the most active sub-categories on remote postings.',
  },
  {
    slug: 'figma',
    name: 'Figma',
    category: 'framework',
    aliases: [],
    blurb: 'Universal design tool on remote product design postings.',
    bodyEn:
      'Figma is universally listed on remote product design postings. Design system maintenance experience is the senior signal.',
  },
  {
    slug: 'storybook',
    name: 'Storybook',
    category: 'framework',
    aliases: [],
    blurb: 'Common UI component documentation tool on remote front-end roles.',
    bodyEn:
      'Storybook appears on most remote front-end postings that mention a design system or component library.',
  },
  {
    slug: 'cicd',
    name: 'CI/CD',
    category: 'devops',
    aliases: ['github actions', 'gitlab ci', 'circleci', 'jenkins'],
    blurb: 'Pipeline skills required across remote engineering postings.',
    bodyEn:
      'CI/CD pipeline literacy is now a baseline expectation on remote engineering postings. GitHub Actions is the most-listed tool, with GitLab CI second.',
  },
  {
    slug: 'sql',
    name: 'SQL',
    category: 'data',
    aliases: [],
    blurb: 'Foundational data skill on remote analytics, data and backend roles.',
    bodyEn:
      'SQL remains the foundational data skill on remote postings across backend, data and analytics. Window functions and CTEs are now expected at all levels.',
  },
  {
    slug: 'machine-learning',
    name: 'Machine Learning',
    category: 'ai',
    aliases: ['ml'],
    blurb: 'Broadest AI category on remote engineering postings.',
    bodyEn:
      'Machine learning is the broadest AI tag on remote postings. Generalist ML engineering and applied ML on production systems dominate the listings.',
  },
  {
    slug: 'data-engineering',
    name: 'Data Engineering',
    category: 'data',
    aliases: [],
    blurb: 'Premium-paid remote data category with steady demand.',
    bodyEn:
      'Data engineering postings on remote listings cluster around pipeline ownership, warehouse modeling and platform reliability. Snowflake, dbt and Airflow appear together on most listings.',
  },
  {
    slug: 'prompt-engineering',
    name: 'Prompt Engineering',
    category: 'ai',
    aliases: [],
    blurb: 'Specialized AI skill peaking on remote applied AI postings.',
    bodyEn:
      'Dedicated prompt engineering postings remain a small share, with most demand absorbed into broader AI and LLM engineering roles. The skill is still explicitly named on a meaningful minority of remote AI listings.',
  },
  {
    slug: 'webgl',
    name: 'WebGL',
    category: 'framework',
    aliases: ['threejs', 'three.js'],
    blurb: 'Specialized graphics skill on remote front-end and 3D postings.',
    bodyEn:
      'WebGL and Three.js appear on a minority of remote front-end postings, with demand concentrated at 3D product configurators, design tools and game studios.',
  },
];

export const SKILL_MAP: Record<string, SkillEntry> = Object.fromEntries(
  SKILLS.map((s) => [s.slug, s]),
);

export function skillsByCategory(): Record<string, SkillEntry[]> {
  const out: Record<string, SkillEntry[]> = {};
  for (const s of SKILLS) {
    (out[s.category] ??= []).push(s);
  }
  return out;
}
