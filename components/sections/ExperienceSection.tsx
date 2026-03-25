'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { experiences, education } from '@/lib/data';

function ExperienceCard({
  exp,
  side,
  index,
}: {
  exp:   typeof experiences[0];
  side:  'left' | 'right';
  index: number;
}) {
  return (
    <div className={`relative flex ${side === 'right' ? 'flex-row-reverse' : 'flex-row'} md:flex-row items-start gap-4 md:gap-8`}>
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
        <motion.div
          className="w-4 h-4 rounded-full bg-pink-400 border-4 border-white shadow-pink"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, type: 'spring', stiffness: 400 }}
        />
        {exp.current && (
          <motion.div
            className="absolute inset-0 rounded-full bg-pink-300"
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        className={`flex-1 ${side === 'left' ? 'md:pr-[calc(50%+2.5rem)]' : 'md:pl-[calc(50%+2.5rem)]'}`}
        initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="glass border border-[var(--glass-border)] rounded-2xl p-6 hover:border-pink-200/60 hover:shadow-glass-hover transition-all duration-300 hover:-translate-y-1">
          {/* Header */}
          <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {exp.current && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-base font-semibold text-[var(--text)]">{exp.role}</h3>
              <p className="text-sm font-medium text-pink-600 mt-0.5">{exp.company}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-beige-100 flex items-center justify-center flex-shrink-0">
              <Briefcase size={16} className="text-beige-600" />
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--text-3)] mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {exp.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={11} />
              {exp.location}
            </span>
          </div>

          {/* Bullets */}
          <ul className="space-y-2 mb-4">
            {exp.description.map((desc, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0 mt-1.5" />
                {desc}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {exp.tags.map((tag) => (
              <Badge key={tag} variant="pink" size="sm">{tag}</Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding mesh-bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Professional journey"
          subtitle="Three internships across web development, data systems, and network engineering."
        />

        {/* Experience Timeline */}
        <div className="relative mb-16">
          {/* Vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-px bg-gradient-to-b from-pink-300 via-beige-400 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                side={i % 2 === 0 ? 'left' : 'right'}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Education section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-7">
            <GraduationCap size={20} className="text-pink-500" />
            <h3 className="text-lg font-semibold text-[var(--text)]">Education</h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                className="glass border border-[var(--glass-border)] rounded-2xl p-5 hover:border-pink-200/60 hover:shadow-glass-hover transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div className="w-8 h-8 rounded-lg bg-beige-100 flex items-center justify-center mb-3">
                  <GraduationCap size={14} className="text-beige-600" />
                </div>
                <p className="text-sm font-semibold text-[var(--text)] leading-snug mb-1">{edu.degree}</p>
                <p className="text-xs font-medium text-pink-600 mb-1">{edu.institution}</p>
                <p className="text-xs text-[var(--text-3)]">{edu.period} · {edu.location}</p>
                {edu.description && (
                  <p className="text-xs text-[var(--text-3)] mt-2 leading-relaxed">{edu.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
