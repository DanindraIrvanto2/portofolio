'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Play, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-3xl bg-[var(--card-bg)] backdrop-blur-2xl border border-[var(--border-color)] rounded-3xl shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Image Banner */}
          <div className="relative w-full h-64 sm:h-80 bg-zinc-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 750px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent" />
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-lg bg-[var(--thirdary)] text-[var(--text-primary)]">
                {project.category.toUpperCase()}
              </span>
              {project.metrics && (
                <span className="text-xs font-medium px-3 py-1 rounded-lg bg-[var(--thirdary)] text-[var(--text-secondary)] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {project.metrics}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight mb-3">
              {project.title}
            </h3>

            {project.roleDescription && (
              <p className="text-sm font-semibold text-[var(--text-secondary)] mb-4">
                Role: {project.roleDescription}
              </p>
            )}

            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
              {project.longDescription || project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-3">
                Technologies &amp; Key Disciplines
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-[var(--thirdary)] text-[var(--text-primary)] border border-[var(--border-color)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3.5 pt-6 border-t border-[var(--border-color)]">
              {project.additionalLinks && project.additionalLinks.length > 0 ? (
                project.additionalLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--background)] font-bold text-sm shadow-md hover:opacity-90 transition-all"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ))
              ) : (
                project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--text-primary)] text-[var(--background)] font-bold text-sm shadow-md hover:opacity-90 transition-all"
                  >
                    <span>{project.category === 'broadcast' ? 'Watch on Instagram Reel' : 'Live Preview'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-primary)] hover:border-[var(--text-primary)] font-bold text-sm transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
