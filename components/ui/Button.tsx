'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   ButtonVariant;
  size?:      'sm' | 'md' | 'lg';
  icon?:      React.ReactNode;
  iconRight?: React.ReactNode;
  loading?:   boolean;
  as?:        'button' | 'a';
  href?:      string;
  target?:    string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:  'bg-pink-500 text-white hover:bg-pink-600 shadow-pink hover:shadow-pink-lg',
  secondary: 'bg-beige-200 text-[var(--text)] hover:bg-beige-300',
  ghost:    'bg-transparent text-[var(--text-2)] hover:bg-pink-50 hover:text-pink-600',
  outline:  'bg-transparent text-[var(--text)] border border-[var(--border)] hover:border-pink-300 hover:text-pink-600',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-2.5 text-sm gap-2',
  lg: 'px-8 py-3.5 text-base gap-2.5',
};

export function Button({
  children,
  variant   = 'primary',
  size      = 'md',
  icon,
  iconRight,
  loading   = false,
  className,
  as        = 'button',
  href,
  target,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const content = (
    <>
      {loading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" />
        </svg>
      ) : icon}
      {children}
      {iconRight}
    </>
  );

  if (as === 'a' && href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {content}
    </motion.button>
  );
}
