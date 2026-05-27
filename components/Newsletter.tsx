// Beehiiv-hosted newsletter capture. Set NEXT_PUBLIC_BEEHIIV_EMBED to the
// real embed URL when the publication is created. Until then the component
// gracefully falls back to a mailto subscribe.

const PLACEHOLDER = 'https://embeds.beehiiv.com/c0000000-0000-0000-0000-000000000000';
const action = process.env.NEXT_PUBLIC_BEEHIIV_EMBED || PLACEHOLDER;
const isPlaceholder = action === PLACEHOLDER;

export function Newsletter({
  variant = 'card',
}: {
  variant?: 'card' | 'inline';
}) {
  if (variant === 'inline') {
    return (
      <form
        action={isPlaceholder ? 'mailto:hello@slateremote.com' : action}
        method={isPlaceholder ? 'get' : 'post'}
        target={isPlaceholder ? '_self' : '_blank'}
        className="flex flex-wrap gap-2 items-center"
      >
        <input
          type="email"
          name={isPlaceholder ? 'subject' : 'email'}
          required
          placeholder="you@example.com"
          className="flex-1 min-w-0 px-3 py-2 rounded border border-line bg-paper text-sm focus:outline-none focus:border-ink"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-ink text-bg rounded text-sm hover:opacity-90"
        >
          Subscribe
        </button>
      </form>
    );
  }

  return (
    <section className="rounded-xl border border-line p-6 bg-gradient-to-br from-forestSoft to-terracottaSoft shadow-soft">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-5 items-center">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-ink">
            Get the freshest remote tech jobs in your inbox
          </h2>
          <p className="text-sm text-muted mt-1.5">
            One short email a week. Best new postings, salary updates, and one nomad city deep
            dive. No spam, unsubscribe anytime.
          </p>
        </div>
        <form
          action={isPlaceholder ? 'mailto:hello@slateremote.com' : action}
          method={isPlaceholder ? 'get' : 'post'}
          target={isPlaceholder ? '_self' : '_blank'}
          className="flex flex-col gap-2"
        >
          <input
            type="email"
            name={isPlaceholder ? 'subject' : 'email'}
            required
            placeholder="you@example.com"
            className="px-3 py-2.5 rounded border border-line bg-paper text-sm focus:outline-none focus:border-ink"
          />
          <button
            type="submit"
            className="px-4 py-2.5 bg-ink text-bg rounded text-sm font-medium hover:bg-forest transition"
          >
            Subscribe →
          </button>
          <p className="text-[10px] text-subtle text-center">
            {isPlaceholder ? 'Beta · we email you back manually' : 'Powered by Beehiiv'}
          </p>
        </form>
      </div>
    </section>
  );
}
