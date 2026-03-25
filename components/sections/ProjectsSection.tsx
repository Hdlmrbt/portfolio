'use client';

import { motion } from 'framer-motion';
import { Github, Sparkles, Plus } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          title="What I've been building"
          subtitle="Real-world applications combining AI, data, and full-stack engineering."
        />

        {/* Empty State */}
        <motion.div
          className="relative overflow-hidden rounded-3xl border-2 border-dashed border-pink-200 bg-gradient-to-br from-pink-50 via-white to-beige-50 p-16 text-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-pink-100/50 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-beige-200/50 translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="relative z-10">
            {/* Animated icon */}
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white shadow-soft flex items-center justify-center"
              animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles size={32} className="text-pink-400" />
            </motion.div>

            <h3 className="font-display text-2xl font-semibold text-[var(--text)] mb-3">
              Projects <span className="gradient-text">Coming Soon</span>
            </h3>
            <p className="text-[var(--text-2)] text-base max-w-md mx-auto mb-8 leading-relaxed">
              This section will showcase my work once projects are published.
              Check back soon — things are being built!
            </p>

            {/* Placeholder project cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-pink-100 text-left"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-pink-100 mb-3 flex items-center justify-center">
                    <Plus size={14} className="text-pink-400" />
                  </div>
                  <div className="h-3 bg-pink-100 rounded-full mb-2 w-3/4" />
                  <div className="h-2 bg-beige-100 rounded-full mb-1 w-full" />
                  <div className="h-2 bg-beige-100 rounded-full mb-3 w-5/6" />
                  <div className="flex gap-1.5">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="h-5 w-12 bg-pink-50 rounded-full border border-pink-100" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="https://github.com/Hdlmrbt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-[var(--text)] text-white hover:opacity-80 transition-opacity"
            >
              <Github size={15} />
              Follow on GitHub
            </a>
          </div>
        </motion.div>

        {/* Teaser: upcoming projects from CV */}
        <motion.div
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            { title: 'Facial Recognition', tech: 'Python · OpenCV · VGG19', icon: '👁️' },
            { title: 'Diabetes Prediction', tech: 'Scikit-learn · Pandas',   icon: '🧬' },
            { title: 'Air Quality Monitor', tech: 'Django · OpenWeatherMap', icon: '🌿' },
            { title: 'Stock Management',    tech: 'Django · MySQL',           icon: '📦' },
          ].map((project, i) => (
            <motion.div
              key={project.title}
              className="glass border border-[var(--glass-border)] rounded-2xl p-5 hover:border-pink-200/60 transition-all duration-300 opacity-70 hover:opacity-100"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ opacity: 1, y: -3 }}
            >
              <div className="text-2xl mb-3">{project.icon}</div>
              <p className="text-sm font-semibold text-[var(--text)] mb-1">{project.title}</p>
              <p className="text-xs text-[var(--text-3)]">{project.tech}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-[10px] text-pink-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                Coming soon
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
