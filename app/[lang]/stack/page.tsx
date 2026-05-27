import type { Metadata } from 'next';
import { LOCALES } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { AFFILIATES, wiseUrlForLocale, type AffiliateEntry } from '@/lib/affiliates';
import { AffiliateCard } from '@/components/AffiliateCard';

export const dynamicParams = false;
export const revalidate = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  return buildMetadata({
    locale: params.lang,
    path: 'stack',
    title: 'The remote work stack we actually use',
    description:
      'Every tool, bank, insurance, VPN and AI service the slateremote.com team uses or recommends to remote tech workers in 2026. Categorised, with our affiliate disclosure.',
  });
}

const SECTIONS: Array<{
  id: string;
  title: string;
  intro: string;
  categories: AffiliateEntry['category'][];
}> = [
  {
    id: 'money',
    title: 'Get paid from anywhere',
    intro:
      'Multi-currency accounts, business banking, and the cheapest cross-border transfers we know.',
    categories: ['banking'],
  },
  {
    id: 'health',
    title: 'Stay covered',
    intro:
      'Health insurance that follows you across borders. The only category most nomads underspend on.',
    categories: ['insurance'],
  },
  {
    id: 'privacy',
    title: 'Privacy and connectivity',
    intro:
      'Tools that keep your traffic private on hotel and coworking Wi-Fi, and unblock region-locked services.',
    categories: ['privacy'],
  },
  {
    id: 'ai',
    title: 'AI in the loop',
    intro:
      'The AI tools we run our own work on, plus voice and audio platforms for products that need them.',
    categories: ['ai', 'voice'],
  },
  {
    id: 'newsletter',
    title: 'Newsletter & email',
    intro:
      'The platforms we recommend if you want to build an audience around your remote work or product.',
    categories: ['newsletter'],
  },
  {
    id: 'productivity',
    title: 'Meetings and async work',
    intro:
      'Tools that make remote collaboration suck less. Recording, transcription, summarisation.',
    categories: ['productivity'],
  },
  {
    id: 'community',
    title: 'Community and education',
    intro:
      'For when you want to monetise what you know rather than what you build.',
    categories: ['community'],
  },
  {
    id: 'talent',
    title: 'Earn directly from your skills',
    intro:
      'Networks that pay vetted talent. Mercor is the strongest fit for AI-adjacent engineers.',
    categories: ['talent'],
  },
  {
    id: 'shopping',
    title: 'Home office and gear',
    intro:
      'Where we end up buying ergonomic chairs, monitors, microphones and cables.',
    categories: ['shopping'],
  },
  {
    id: 'investing',
    title: 'Long-horizon yield',
    intro:
      'If you have a stable remote income and want to diversify beyond your local economy.',
    categories: ['investing'],
  },
];

export default function StackPage({ params }: { params: { lang: Locale } }) {
  return (
    <div className="space-y-12">
      <header className="border-b border-line pb-6">
        <p className="text-[11px] uppercase tracking-wider text-forest font-semibold">Discover</p>
        <h1 className="font-display text-3xl md:text-5xl font-normal tracking-tighter text-ink mt-1.5 leading-tight">
          The remote stack we run on
        </h1>
        <p className="text-graphite text-base md:text-lg mt-4 max-w-prose">
          {AFFILIATES.length} tools, banks, insurances, VPNs and AI services we use ourselves or
          recommend to remote tech workers around us. Affiliate links throughout, full
          transparency on{' '}
          <a href={`/${params.lang}/disclosure`} className="text-forest underline">
            the disclosure page
          </a>
          .
        </p>
      </header>

      {/* Quick category nav */}
      <nav className="flex flex-wrap gap-2">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-xs px-3 py-1.5 rounded-full border border-line bg-paper hover:border-ink hover:bg-sand transition-colors"
          >
            {s.title}
          </a>
        ))}
      </nav>

      {SECTIONS.map((s) => {
        const entries = AFFILIATES.filter((a) => s.categories.includes(a.category)).map((a) =>
          a.slug === 'wise' ? { ...a, url: wiseUrlForLocale(params.lang) } : a,
        );
        if (entries.length === 0) return null;
        return (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <div className="mb-4">
              <h2 className="font-display text-2xl md:text-3xl font-normal tracking-tighter text-ink">
                {s.title}
              </h2>
              <p className="text-sm text-muted mt-1.5 max-w-prose">{s.intro}</p>
            </div>
            <div
              className={`grid gap-3 ${entries.length >= 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'}`}
            >
              {entries.map((e) => (
                <AffiliateCard key={e.slug} entry={e} />
              ))}
            </div>
          </section>
        );
      })}

      <section className="border-t border-line pt-6 text-xs text-muted">
        <p>
          All outbound links on this page are tagged <code>rel=&quot;nofollow noopener sponsored&quot;</code>.
          We may earn a small commission if you sign up via one of them. Pricing is unchanged for
          you. See the{' '}
          <a href={`/${params.lang}/disclosure`} className="text-forest hover:underline">
            full affiliate disclosure
          </a>
          .
        </p>
      </section>
    </div>
  );
}
