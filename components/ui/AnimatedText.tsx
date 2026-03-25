'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  words:        string[];
  className?:   string;
  speed?:       number; // ms per char
  pauseTime?:   number; // ms to hold full word
}

export function Typewriter({
  words,
  className = '',
  speed     = 65,
  pauseTime = 1800,
}: TypewriterProps) {
  const [wordIndex,  setWordIndex]  = useState(0);
  const [charIndex,  setCharIndex]  = useState(0);
  const [deleting,   setDeleting]   = useState(false);
  const [displayed,  setDisplayed]  = useState('');

  useEffect(() => {
    const word = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= word.length) {
      setDisplayed(word.slice(0, charIndex));
      timeout = setTimeout(
        () => setCharIndex((i) => i + 1),
        charIndex === word.length ? pauseTime : speed,
      );
    } else if (!deleting && charIndex > word.length) {
      setDeleting(true);
      timeout = setTimeout(() => setCharIndex((i) => i - 1), speed * 0.5);
    } else if (deleting && charIndex >= 0) {
      setDisplayed(word.slice(0, charIndex));
      if (charIndex === 0) {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        timeout = setTimeout(() => setCharIndex((i) => i - 1), speed * 0.5);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pauseTime]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-blink border-r-[2px] border-current ml-[1px]">&nbsp;</span>
    </span>
  );
}

// ─── Animated heading that reveals word by word ──────────────────────────

interface RevealTextProps {
  text:       string;
  className?: string;
  delay?:     number;
  once?:      boolean;
}

export function RevealText({ text, className = '', delay = 0, once = true }: RevealTextProps) {
  const words = text.split(' ');
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: delay },
    },
  };
  const word = {
    hidden: { y: '110%', opacity: 0 },
    show:   { y: '0%',  opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-10%' }}
    >
      {words.map((w, i) => (
        <span key={i} className="overflow-hidden inline-block leading-tight">
          <motion.span className="inline-block" variants={word}>
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

// ─── Counter that animates to target number ──────────────────────────────

interface CounterProps {
  to:         number;
  suffix?:    string;
  duration?:  number;
  className?: string;
}

export function Counter({ to, suffix = '', duration = 1.5, className = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  return (
    <motion.span
      className={className}
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true, margin: '-20%' }}
    >
      <motion.span
        animate={started ? { opacity: [0, 1] } : {}}
        onAnimationComplete={() => {
          if (!started) return;
          const step = to / (duration * 60);
          const interval = setInterval(() => {
            setCount((c) => {
              if (c + step >= to) {
                clearInterval(interval);
                return to;
              }
              return c + step;
            });
          }, 1000 / 60);
        }}
      >
        {Math.round(count)}{suffix}
      </motion.span>
    </motion.span>
  );
}
