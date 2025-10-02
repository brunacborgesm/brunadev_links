import React from 'react';
import Link from 'next/link';
import { VARIANTS, type Variant } from './LinkVariants';

type LinkCardProps = {
  href: string;
  title: string;
  variant: Variant;
  className?: string;
  target?: '_self' | '_blank';
};

export function LinkCard({
  href,
  title,
  variant,
  className,
  target = '_blank',
}: LinkCardProps) {
  const config = VARIANTS[variant];
  const Icon = config.Icon;

  return (
    <Link
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      aria-label={config.ariaLabel || title}
      className="no-underline"
    >
      <div
        className={
          [
            'mb-4 flex items-center justify-center gap-2 rounded-2xl',
            'bg-slate-100/70 backdrop-blur px-3 py-4 text-sm text-indigo-950 shadow-sm',
            'transition hover:bg-slate-200/70',
            (config as any).className ?? '',
            className ?? '',
          ].join(' ')
        }
      >
        <Icon />
        {title}
      </div>
    </Link>
  );
}
