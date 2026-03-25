'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Star, GitFork, Code2, Users, BookOpen, TrendingUp, Zap } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import type { GitHubStats } from '@/types';
import { getTopLanguages } from '@/lib/github';

interface DashboardSectionProps {
  stats: GitHubStats;
}

const insightCards = [
  {
    icon:    '🧠',
    title:   'Engineering Profile',
    value:   'AI-First Builder',
    desc:    'Combines ML expertise with full-stack capability — rare and highly sought-after.',
    color:   'from-pink-50 to-pink-100/50',
    border:  'border-pink-200/60',
  },
  {
    icon:    '📊',
    title:   'Primary Domain',
    value:   'Data Science & AI',
    desc:    'Deep roots in Python, TensorFlow, Scikit-learn, and data pipeline engineering.',
    color:   'from-beige-50 to-beige-100/50',
    border:  'border-beige-200/60',
  },
  {
    icon:    '⚡',
    title:   'Superpower',
    value:   'Systems Thinking',
    desc:    'Rare dual expertise in both network infrastructure and machine learning systems.',
    color:   'from-[#FFF0F5] to-pink-50/50',
    border:  'border-pink-100/60',
  },
  {
    icon:    '🎯',
    title:   'Career Trajectory',
    value:   'ML Engineer / Data Scientist',
    desc:    'On track for senior roles in AI/ML engineering at top-tier organizations.',
    color:   'from-beige-50 to-[#FFF5FF]/50',
    border:  'border-beige-100/60',
  },
];

function StatCard({
  icon,
  label,
  value,
  sub,
  delay = 0,
}: {
  icon:    React.ReactNode;
  label:   string;
  value:   string | number;
  sub?:    string;
  delay?:  number;
}) {
  return (
    <motion.div
      className="glass border border-[var(--glass-border)] rounded-2xl p-5 hover:border-pink-200/60 hover:shadow-glass-hover transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center mb-3">
        {icon}
      </div>
      <p className="font-display text-2xl font-semibold gradient-text mb-0.5">{value}</p>
      <p className="text-sm font-medium text-[var(--text)]">{label}</p>
      {sub && <p className="text-xs text-[var(--text-3)] mt-0.5">{sub}</p>}
    </motion.div>
  );
}

export function DashboardSection({ stats }: DashboardSectionProps) {
  const topLangs   = getTopLanguages(stats.repos);
  const totalStars = stats.repos.reduce((s, r) => s + r.stars, 0);
  const totalForks = stats.repos.reduce((s, r) => s + r.forks, 0);

  const joinYear   = new Date(stats.createdAt).getFullYear();

  return (
    <section id="dashboard" className="section-padding mesh-bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Dashboard"
          title="My GitHub insights"
          subtitle="A data-driven view of my engineering activity and profile."
        />

        {/* Profile banner */}
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1A1215] via-[#2A1820] to-[#1A1215] p-8 md:p-10 mb-10 text-white"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative gradient blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-beige-400/10 blur-3xl" />

          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-pink-400/30 flex-shrink-0">
              <Image
                src={stats.avatarUrl}
                alt={stats.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold mb-1">{stats.name}</h3>
              <a
                href={`https://github.com/${stats.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-pink-300 hover:text-pink-200 transition-colors mb-3"
              >
                <Github size={13} />
                @{stats.username}
              </a>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
                <span className="text-white/60">
                  <span className="text-white font-semibold">{stats.publicRepos}</span> repos
                </span>
                <span className="text-white/60">
                  <span className="text-white font-semibold">{stats.followers}</span> followers
                </span>
                <span className="text-white/60">
                  On GitHub since <span className="text-white font-semibold">{joinYear}</span>
                </span>
              </div>
            </div>

            {/* GitHub stats image (right side) */}
            <div className="ml-auto hidden lg:block">
              <div className="text-xs text-white/40 text-right mb-1">Activity Overview</div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 flex gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-pink-400">{stats.publicRepos}</p>
                  <p className="text-xs text-white/40">Repositories</p>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-beige-400">{totalStars}</p>
                  <p className="text-xs text-white/40">Stars Earned</p>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-pink-300">{totalForks}</p>
                  <p className="text-xs text-white/40">Forks</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <StatCard icon={<BookOpen size={18} className="text-pink-600" />} label="Public Repos"   value={stats.publicRepos} sub="On GitHub" delay={0} />
          <StatCard icon={<Star    size={18} className="text-pink-600" />} label="Total Stars"    value={totalStars}         sub="Across all repos" delay={0.08} />
          <StatCard icon={<GitFork size={18} className="text-pink-600" />} label="Total Forks"    value={totalForks}         sub="Community impact" delay={0.16} />
          <StatCard icon={<Users   size={18} className="text-pink-600" />} label="Following"      value={stats.following}    sub="Developers tracked" delay={0.24} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Repositories list */}
          <GlassCard>
            <h3 className="text-sm font-semibold text-[var(--text)] mb-5 flex items-center gap-2">
              <Code2 size={14} className="text-pink-500" />
              Repositories
            </h3>
            {stats.repos.length === 0 ? (
              <p className="text-sm text-[var(--text-3)] text-center py-8">No public repos yet.</p>
            ) : (
              <div className="space-y-3">
                {stats.repos.map((repo, i) => (
                  <motion.a
                    key={repo.id}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between gap-3 p-3 rounded-xl hover:bg-pink-50/60 transition-colors group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[var(--text)] group-hover:text-pink-600 transition-colors truncate">
                        {repo.name}
                      </p>
                      <p className="text-xs text-[var(--text-3)] mt-0.5 line-clamp-1">
                        {repo.description ?? 'No description'}
                      </p>
                      {repo.language && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-[var(--text-3)] mt-1.5">
                          <span className="w-2 h-2 rounded-full bg-orange-400" />
                          {repo.language}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0 text-xs text-[var(--text-3)]">
                      <span className="flex items-center gap-1"><Star size={10} /> {repo.stars}</span>
                      <span className="flex items-center gap-1"><GitFork size={10} /> {repo.forks}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </GlassCard>

          {/* Languages + Profile badge */}
          <div className="flex flex-col gap-6">
            {/* Language distribution */}
            <GlassCard>
              <h3 className="text-sm font-semibold text-[var(--text)] mb-4 flex items-center gap-2">
                <TrendingUp size={14} className="text-pink-500" />
                Language Distribution
              </h3>
              {topLangs.length === 0 ? (
                <div className="space-y-3">
                  {/* Manually show known languages from skill set */}
                  {[
                    { language: 'Python',     count: 4, color: '#3776AB' },
                    { language: 'JavaScript', count: 3, color: '#F7DF1E' },
                    { language: 'HTML/CSS',   count: 2, color: '#E34F26' },
                    { language: 'SQL',        count: 2, color: '#336791' },
                  ].map((lang, i) => (
                    <motion.div
                      key={lang.language}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="flex items-center gap-2 font-medium text-[var(--text)]">
                          <span className="w-2 h-2 rounded-full" style={{ background: lang.color }} />
                          {lang.language}
                        </span>
                        <span className="text-[var(--text-3)]">{lang.count * 25}%</span>
                      </div>
                      <div className="h-1.5 bg-beige-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: lang.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.count * 25}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {topLangs.map((lang, i) => (
                    <motion.div
                      key={lang.language}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="flex items-center gap-2 font-medium text-[var(--text)]">
                          <span className="w-2 h-2 rounded-full" style={{ background: lang.color }} />
                          {lang.language}
                        </span>
                        <span className="text-[var(--text-3)]">{lang.count}</span>
                      </div>
                      <div className="h-1.5 bg-beige-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: lang.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(lang.count / topLangs[0].count) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </GlassCard>

            {/* Engineering profile card */}
            <motion.div
              className="flex-1 rounded-2xl bg-gradient-to-br from-[#1A1215] to-[#2D1525] p-6 text-white relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-pink-500/15 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={16} className="text-pink-400" />
                  <span className="text-xs font-semibold tracking-wider text-pink-300 uppercase">AI Profile Insight</span>
                </div>
                <p className="font-display text-xl font-semibold mb-2">
                  AI-First <span className="text-pink-400">Engineer</span>
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  Combines deep ML knowledge with full-stack and network expertise — a T-shaped engineer built for the AI era.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Machine Learning', 'Computer Vision', 'Full-Stack', 'IoT/Sensors'].map((tag) => (
                    <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-pink-500/15 text-pink-300 border border-pink-400/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* AI insight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {insightCards.map((card, i) => (
            <motion.div
              key={card.title}
              className={`rounded-2xl border p-5 bg-gradient-to-br ${card.color} ${card.border} hover:shadow-glass-hover transition-all duration-300 hover:-translate-y-1`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-2xl mb-3">{card.icon}</div>
              <p className="text-xs text-[var(--text-3)] font-semibold tracking-wide uppercase mb-1">{card.title}</p>
              <p className="text-sm font-semibold text-[var(--text)] mb-2">{card.value}</p>
              <p className="text-xs text-[var(--text-3)] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
