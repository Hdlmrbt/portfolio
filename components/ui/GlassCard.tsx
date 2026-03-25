'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children:   React.ReactNode;
  className?: string;
  hover?:     boolean;
  padding?:   'sm' | 'md' | 'lg' | 'none';
  onClick?:   () => void;
}

const paddingStyles = {
  none: '',
  sm:   'p-4',
  md:   'p-6',
  lg:   'p-8',
};

export function GlassCard({
  children,
  className,
  hover   = true,
  padding = 'md',
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'glass rounded-2xl border border-[var(--glass-border)] shadow-glass',
        hover && 'hover:shadow-glass-hover hover:border-pink-200/50 transition-all duration-300',
        onClick && 'cursor-pointer',
        paddingStyles[padding],
        className,
      )}
      whileHover={hover ? { y: -3, scale: 1.005 } : undefined}
      onClick={onClick}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
