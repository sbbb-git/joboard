// Wordmark for slate•remote. Forest dot replaces the bullet separator;
// scales with text size. Use <Logo size="lg" /> on hero placements.

export function Logo({
  size = 'md',
  withMark = false,
}: {
  size?: 'sm' | 'md' | 'lg';
  withMark?: boolean;
}) {
  const text = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  }[size];
  const dot = {
    sm: 'w-1.5 h-1.5 mx-1',
    md: 'w-2 h-2 mx-1.5',
    lg: 'w-2.5 h-2.5 mx-2',
  }[size];
  return (
    <span className="inline-flex items-center font-semibold tracking-tighter text-ink">
      {withMark && (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-forest mr-2">
          <span className="w-2 h-2 rounded-full bg-bg" />
        </span>
      )}
      <span className={text}>
        slate
        <span className={`inline-block rounded-full bg-forest align-middle ${dot}`} />
        remote
      </span>
    </span>
  );
}
