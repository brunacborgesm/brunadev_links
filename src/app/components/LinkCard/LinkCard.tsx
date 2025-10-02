import Link from 'next/link';
import { VARIANTS, type Variant } from './LinkVariants';

type LinkCardProps = {
  href: string;
  title: string;
  variant: Variant;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export function LinkCard({
  href,
  title,
  variant,
  className,
  target = '_blank',
  rel = 'noopener noreferrer',
}: LinkCardProps) {
  const config = VARIANTS[variant];
  const Icon = config.Icon;

  const classes = [
    'mb-4 flex items-center justify-center gap-2 rounded-2xl',
    'bg-slate-100/70 backdrop-blur px-3 py-4 text-sm text-indigo-950 shadow-sm',
    'transition hover:bg-slate-200/70 focus:outline-none focus:ring-2 focus:ring-pink-400/50',
    className,
  ]
    .filter((v): v is string => Boolean(v))
    .join(' ');

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={config.ariaLabel || title}
      className={classes}
    >
      <Icon />
      {title}
    </Link>
  );
}
