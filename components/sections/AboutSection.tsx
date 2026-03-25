'use client';

import { motion } from 'framer-motion';
import { Brain, Code2, Network, Globe } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { aboutNarrative, aboutStats, education, languages } from '@/lib/data';
import { stagger } from '@/lib/utils';

const valueIcons = [Brain, Code2, Network];

const langLevelWidth: Record<string, number> = {
  C2: 100, C1: 85, B2: 70, B1: 55, A2: 40,
};

export function AboutSection() {
  return (
    <section id="about" className="section-padding mesh-bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="About Me"
          title="Where data meets design"
          subtitle="Engineering student turned ML practitioner — building systems that think."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Narrative ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7 }}
          >
            {/* Intro */}
            <p className="text-base md:text-lg text-[var(--text-2)] leading-relaxed mb-5 font-medium text-[var(--text)]">
              {aboutNarrative.intro}
            </p>

            {/* Body */}
            {aboutNarrative.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-[var(--text-2)] leading-relaxed mb-4 text-sm md:text-base">
                {para}
              </p>
            ))}

            {/* Values */}
            <div className="mt-8 flex flex-col gap-3">
              {aboutNarrative.values.map((v, i) => {
                const Icon = valueIcons[i];
                return (
                  <motion.div
                    key={v.label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/60 border border-[var(--glass-border)] hover:border-pink-200/60 transition-colors"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-pink-100 flex items-center justify-center">
                      <Icon size={16} className="text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text)] mb-0.5">{v.label}</p>
                      <p className="text-xs text-[var(--text-3)]">{v.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Right: Stats + Education + Languages ── */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass border border-[var(--glass-border)] rounded-2xl p-5 hover:border-pink-200/60 hover:shadow-glass-hover transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                >
                  <p className="font-display text-3xl font-semibold gradient-text mb-1">{stat.value}</p>
                  <p className="text-xs text-[var(--text-3)] leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Education card */}
            <GlassCard>
              <h3 className="text-sm font-semibold text-[var(--text)] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-gradient-to-b from-pink-400 to-beige-400" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.id}
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex flex-col items-center gap-1 pt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-pink-400 flex-shrink-0" />
                      {i < education.length - 1 && <div className="w-px flex-1 bg-beige-300 min-h-[20px]" />}
                    </div>
                    <div className="pb-2">
                      <p className="text-sm font-medium text-[var(--text)]">{edu.degree}</p>
                      <p className="text-xs text-pink-600 font-medium mt-0.5">{edu.institution}</p>
                      <p className="text-xs text-[var(--text-3)] mt-0.5">{edu.period} · {edu.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            {/* Languages */}
            <GlassCard>
              <h3 className="text-sm font-semibold text-[var(--text)] mb-4 flex items-center gap-2">
                <Globe size={14} className="text-pink-500" />
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang, i) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-[var(--text)]">{lang.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[var(--text-3)]">{lang.label}</span>
                        <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">{lang.level}</span>
                      </div>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${langLevelWidth[lang.level] ?? 50}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15 + 0.2, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
