import { cn } from '@/lib/utils';

type BadgeVariant = 'pink' | 'beige' | 'rose' | 'mauve' | 'outline' | 'dark';

interface BadgeProps {
  children:   React.ReactNode;
  variant?:   BadgeVariant;
  size?:      'sm' | 'md';
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  pink:    'bg-pink-100 text-pink-700 border border-pink-200',
  beige:   'bg-beige-100 text-beige-700 border border-beige-200',
  rose:    'bg-[#FFF0F0] text-[#C96070] border border-[#FFCCD0]',
  mauve:   'bg-[#F5F0FF] text-[#7B5EA7] border border-[#E0D0FF]',
  outline: 'bg-transparent text-[var(--text-2)] border border-[var(--border)]',
  dark:    'bg-[#1A1215] text-white border border-white/10',
};

const sizeStyles = {
  sm: 'px-2.5 py-0.5 text-[11px]',
  md: 'px-3.5 py-1   text-xs',
};

export function Badge({ children, variant = 'beige', size = 'md', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full whitespace-nowrap transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
