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
    slug: 'java',
    name: 'Java',
    category: 'language',
    aliases: ['jvm'],
    blurb: 'Enterprise backbone, common on remote enterprise back-end postings.',
    bodyEn:
      'Java is heavily represented in remote backend listings at enterprise-scale companies and at fintech. Spring Boot is the dominant framework on these postings.',
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
    slug: 'aws',
    name: 'AWS',
    category: 'cloud',
    aliases: ['amazon web services'],
    blurb: 'The most-requested cloud on remote backend, devops and platform roles.',
    bodyEn:
      'AWS is the most-requested cloud across remote engineering postings. Lambda, ECS, RDS and S3 are the staples on backend listings; EKS, IAM and CloudWatch on platform and SRE listings.',
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
