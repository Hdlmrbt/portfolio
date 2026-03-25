'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { skillCategories } from '@/lib/data';
import type { SkillCategory } from '@/types';

const colorMap = {
  pink:  { bg: 'bg-pink-100',   text: 'text-pink-700',   bar: 'from-pink-400 to-pink-600',   active: 'border-pink-300 bg-pink-50' },
  beige: { bg: 'bg-beige-100',  text: 'text-beige-700',  bar: 'from-beige-400 to-beige-600',  active: 'border-beige-300 bg-beige-50' },
  rose:  { bg: 'bg-[#FFF0F0]',  text: 'text-[#C96070]',  bar: 'from-[#F08090] to-[#C96070]',  active: 'border-[#FFCCD0] bg-[#FFF5F5]' },
  mauve: { bg: 'bg-[#F5F0FF]',  text: 'text-[#7B5EA7]',  bar: 'from-[#A080CC] to-[#7B5EA7]',  active: 'border-[#D0C0FF] bg-[#FAF5FF]' },
};

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-[var(--text)] font-medium group-hover:text-pink-600 transition-colors">{name}</span>
        <span className="text-xs text-[var(--text-3)] font-mono">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className={`skill-bar-fill bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: index * 0.06 + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </motion.div>
  );
}

function CategoryCard({ category, isActive, onClick }: {
  category:   SkillCategory;
  isActive:   boolean;
  onClick:    () => void;
}) {
  const colors = colorMap[category.color];
  const avgLevel = Math.round(category.skills.reduce((s, k) => s + k.level, 0) / category.skills.length);

  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 ${
        isActive
          ? `${colors.active} border-opacity-100`
          : 'border-transparent bg-white/50 hover:bg-white/80'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-sm font-semibold ${colors.text}`}>{category.title}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colors.bg} ${colors.text}`}>
          {category.skills.length} skills
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-beige-200 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r rounded-full ${colors.bar}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${avgLevel}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>
        <span className="text-xs text-[var(--text-3)] font-mono w-8">{avgLevel}%</span>
      </div>
    </motion.button>
  );
}

export function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = skillCategories[activeIndex];
  const colors = colorMap[active.color];

  return (
    <section id="skills" className="section-padding bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title="My technical toolkit"
          subtitle="From machine learning to network architecture — a broad skill set with deep expertise."
        />

        <div className="grid lg:grid-cols-[320px,1fr] gap-8">

          {/* Category selector */}
          <div className="flex lg:flex-col gap-3">
            {skillCategories.map((cat, i) => (
              <CategoryCard
                key={cat.title}
                category={cat}
                isActive={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          {/* Skill bars panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className={`text-lg font-semibold ${colors.text}`}>{active.title}</h3>
                    <p className="text-xs text-[var(--text-3)] mt-0.5">{active.skills.length} technologies</p>
                  </div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors.bg}`}>
                    <span className="text-lg">
                      {active.color === 'pink'  ? '🧠' :
                       active.color === 'beige' ? '💻' :
                       active.color === 'rose'  ? '🌐' : '⚡'}
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {active.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={colors.bar}
                      index={i}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* All technologies tag cloud */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--text-3)] mb-5">
            All Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((s) => ({
                name:  s.name,
                color: cat.color,
              }))
            ).map((s, i) => {
              const c = colorMap[s.color as keyof typeof colorMap];
              return (
                <motion.span
                  key={`${s.name}-${i}`}
                  className={`text-xs px-3 py-1.5 rounded-full border font-medium ${c.bg} ${c.text} border-current border-opacity-20`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.015 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  {s.name}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
