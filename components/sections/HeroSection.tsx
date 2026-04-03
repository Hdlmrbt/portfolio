'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Download, Send, Github, Linkedin } from 'lucide-react';
import { Typewriter } from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/Button';
import { personalInfo, contact, heroStats, socialLinks } from '@/lib/data';

// Floating particle component
function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute rounded-full opacity-30"
      style={style}
      animate={{
        y:       [0, -20, 0],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat:   Infinity,
        ease:     'easeInOut',
      }}
    />
  );
}

const particles = [
  { width: 80,  height: 80,  top: '15%', left: '8%',  background: 'radial-gradient(circle, rgba(232,112,144,0.5), transparent)' },
  { width: 120, height: 120, top: '60%', left: '5%',  background: 'radial-gradient(circle, rgba(245,239,230,0.8), transparent)' },
  { width: 60,  height: 60,  top: '25%', right: '10%', background: 'radial-gradient(circle, rgba(255,177,200,0.5), transparent)' },
  { width: 90,  height: 90,  top: '70%', right: '8%',  background: 'radial-gradient(circle, rgba(212,197,178,0.7), transparent)' },
  { width: 40,  height: 40,  top: '45%', left: '15%', background: 'radial-gradient(circle, rgba(232,112,144,0.4), transparent)' },
  { width: 55,  height: 55,  top: '80%', left: '40%', background: 'radial-gradient(circle, rgba(245,239,230,0.6), transparent)' },
];

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

export function HeroSection() {
  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden mesh-bg dot-grid"
    >
      {/* Background particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={{ ...p, position: 'absolute' } as React.CSSProperties} />
      ))}

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)] opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── Left: Text content ── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants} className="inline-flex mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-pink-100 text-pink-700 border border-pink-200">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to opportunities · Morocco &amp; Remote
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-4"
            >
              <span className="text-[var(--text)]">Hi, I&apos;m </span>
              <span className="gradient-text">Houda</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-[var(--text-2)] mb-6 h-10"
            >
              <Typewriter
                words={personalInfo.roles}
                className="text-pink-600"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-[var(--text-2)] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 text-balance"
            >
              Building intelligent systems at the intersection of{' '}
              <span className="text-[var(--text)] font-medium">machine learning</span>,{' '}
              <span className="text-[var(--text)] font-medium">computer vision</span>, and{' '}
              <span className="text-[var(--text)] font-medium">full-stack development</span>.
              Currently studying at{' '}
              <span className="text-pink-600 font-medium">EMSI Rabat</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              <Button
                as="a"
                href="#contact"
                size="lg"
                icon={<Send size={16} />}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </Button>
              <motion.a
                href="/Houda_Lamrabet_CV_final.docx"
                download
                className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium rounded-full bg-transparent text-[var(--text)] border border-[var(--border)] hover:border-pink-300 hover:text-pink-600 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com/Hdlmrbt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-3)] hover:text-[var(--text)] transition-colors"
              >
                <Github size={16} />
                <span>Hdlmrbt</span>
              </a>
              <span className="w-px h-4 bg-[var(--border)]" />
              <a
                href="https://www.linkedin.com/in/houda-lamrabet-84495a262/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-3)] hover:text-[var(--text)] transition-colors"
              >
                <Linkedin size={16} />
                <span>Houda Lamrabet</span>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Avatar + Decorative ── */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Avatar with rings */}
            <div className="relative">
              {/* Outer decorative ring */}
              <motion.div
                className="absolute -inset-5 rounded-full border-2 border-dashed border-pink-200/60"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              {/* Inner pulsing ring */}
              <motion.div
                className="absolute -inset-3 rounded-full border border-pink-300/50"
                animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              {/* Avatar */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-pink-lg">
                <Image
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 640px) 208px, 256px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badge: Location */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass border border-[var(--glass-border)] rounded-2xl px-4 py-2 shadow-soft flex items-center gap-2 text-sm font-medium text-[var(--text)]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span>📍</span>
                <span>Salé, Morocco</span>
              </motion.div>

              {/* Floating badge: Status */}
              <motion.div
                className="absolute -top-4 -right-4 glass border border-[var(--glass-border)] rounded-2xl px-4 py-2 shadow-soft flex items-center gap-2 text-sm font-medium text-[var(--text)]"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>4th Year EMSI</span>
              </motion.div>
            </div>

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-4 gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass border border-[var(--glass-border)] rounded-xl p-3 text-center shadow-soft min-w-[68px]"
                >
                  <p className="font-display text-xl font-semibold gradient-text">{stat.value}</p>
                  <p className="text-[10px] text-[var(--text-3)] mt-0.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-3)] hover:text-pink-500 transition-colors"
          onClick={handleScrollDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}