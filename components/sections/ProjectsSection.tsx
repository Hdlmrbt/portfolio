'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useEffect, useState } from 'react';
import { fetchGitHubStats } from '@/lib/github';

// 🔥 PROJETS MANUELS (COMPLETS)
const manualProjects = [
  {
    id: 'media-asset',
    name: 'Media Asset Management System',
    description:
      'Modern archive system replacing Excel with a web platform, featuring real-time dashboard and audio-to-text processing with metadata management.',
    tech: 'Django · Python · Audio Processing · Data Management',
    link: '#',
  },
  {
    id: 'stock-management',
    name: 'Stock Management Application',
    description:
      'Inventory platform with order tracking, supplier interface, and real-time stock monitoring with restocking alerts.',
    tech: 'Django · Python · MySQL',
    link: '#',
  },
  {
    id: 'facial-recognition',
    name: 'Facial Recognition Access Control',
    description:
      'Real-time face recognition system using CNN (VGG19) with transfer learning for secure access control and identity verification.',
    tech: 'Python · OpenCV · TensorFlow · VGG19',
    link: '#',
  },
  {
    id: 'diabetes-prediction',
    name: 'Diabetes Prediction (Machine Learning)',
    description:
      'EDA and full preprocessing on Pima dataset with comparison of Logistic Regression, Balanced Logistic Regression, and Random Forest models.',
    tech: 'Python · Pandas · Scikit-learn · NumPy',
    link: '#',
  },
];

export function ProjectsSection() {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await fetchGitHubStats();
      setRepos(data.repos);
    }
    load();
  }, []);

  // 🔥 MERGE MANUAL + GITHUB
  const allProjects = [
    ...manualProjects,
    ...repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'No description available',
      tech: repo.language || 'Tech not specified',
      link: repo.url,
    })),
  ];

  return (
    <section id="projects" className="section-padding bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          title="What I've been building"
          subtitle="Real-world applications combining AI, data, and full-stack engineering."
        />

        {/* CONDITION */}
        {allProjects.length === 0 ? (
          <motion.div
            className="rounded-3xl border-2 border-dashed border-pink-200 p-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-3">
              Projects Coming Soon
            </h3>
            <p className="text-gray-500 mb-6">
              My projects will appear here once available.
            </p>

            <a
              href="https://github.com/Hdlmrbt"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-black text-white"
            >
              <Github size={16} />
              View GitHub
            </a>
          </motion.div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, i) => (
              <motion.div
                key={project.id}
                className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-semibold text-lg mb-2">
                  {project.name}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  {project.description}
                </p>

                <div className="text-xs text-gray-400 mb-4">
                  {project.tech}
                </div>

                {/* 🔥 Badge projet privé */}
                {project.link === '#' && (
                  <span className="text-xs text-orange-400 block mb-2">
                    Private Project
                  </span>
                )}

                <a
                  href={project.link}
                  target="_blank"
                  className="text-sm text-pink-500 hover:underline"
                >
                  {project.link === '#' ? 'Not Public' : 'View Project →'}
                </a>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center text-sm text-gray-400">
          More projects coming soon...
        </div>
      </div>
    </section>
  );
}