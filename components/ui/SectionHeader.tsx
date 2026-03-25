'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow:    string;
  title:      string;
  subtitle?:  string;
  center?:    boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center    = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-14 ${center ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6 }}
    >
      {/* Eyebrow */}
      <motion.span
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-pink-500 mb-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <span className="w-8 h-px bg-pink-400" />
        {eyebrow}
        <span className="w-8 h-px bg-pink-400" />
      </motion.span>

      {/* Title */}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--text)] leading-tight mb-4">
        {title.split(' ').map((word, i) => {
          const isAccent = i === Math.floor(title.split(' ').length / 2);
          return (
            <span key={i} className={isAccent ? 'gradient-text' : ''}>
              {word}{' '}
            </span>
          );
        })}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-[var(--text-2)] text-base md:text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
