'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Play } from 'lucide-react';

const filterTabs = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web & Apps' },
  { id: 'broadcast', label: 'Broadcast & Media' },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'web') return item.category === 'web' || item.category === 'fullstack';
    if (activeTab === 'broadcast') return item.category === 'broadcast';
    return true;
  });

  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-[var(--border-color)]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[var(--text-secondary)] uppercase mb-3">
            Selected Works
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[var(--text-primary)] tracking-tight">
            Featured Projects
          </h3>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl backdrop-blur-md">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 cursor-pointer z-10 ${
                  isActive
                    ? 'text-[var(--background)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-[var(--text-primary)] rounded-xl shadow-md -z-10"
                  />
                )}
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col justify-between bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--text-primary)]/40 rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative w-full aspect-[16/10] bg-zinc-950 overflow-hidden border-b border-[var(--border-color)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-300" />

                  {/* Category Pill Overlay */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-black/75 text-white backdrop-blur-md border border-white/10 shadow-xs">
                      {project.category === 'broadcast' ? 'Broadcast & Talent' : project.category === 'fullstack' ? 'Fullstack' : 'Web App'}
                    </span>
                  </div>

                  {project.category === 'broadcast' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/35 backdrop-blur-[2px]">
                      <div className="p-3 rounded-full bg-white text-black shadow-xl scale-90 group-hover:scale-100 transition-transform">
                        <Play className="w-4 h-4 fill-black translate-x-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <h4 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:opacity-85 transition-opacity tracking-tight line-clamp-1">
                      {project.title}
                    </h4>
                    <div className="p-1 rounded-lg bg-[var(--thirdary)] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors shrink-0 mt-0.5">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium leading-relaxed line-clamp-2 min-h-[38px]">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tech Stack Pills at Bottom */}
              <div className="px-6 pb-6 pt-3">
                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-[var(--border-color)]">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[var(--thirdary)] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-16 px-6 text-center rounded-3xl bg-[var(--card-bg)] border border-dashed border-[var(--border-color)]">
            <p className="text-sm font-semibold text-[var(--text-secondary)]">
              Daftar project sedang disiapkan / diperbarui.
            </p>
          </div>
        )}
      </motion.div>

      {/* Project Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
