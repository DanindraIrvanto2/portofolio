'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiencesData } from '../data/portfolioData';
import { Calendar, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-[var(--border-color)]"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 sm:mb-20 text-left"
      >
        <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[var(--text-secondary)] uppercase mb-3">
          Career Path
        </h2>
        <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[var(--text-primary)] tracking-tight">
          Work Experience
        </h3>
      </motion.div>

      {/* Focus-Dim Experience List (exact ryhar.my.id interactive style) */}
      <div className="relative group/list flex flex-col gap-4">
        {experiencesData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group/item relative grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 -mx-4 sm:-mx-6 rounded-2xl transition-all duration-500 hover:!opacity-100 group-hover/list:opacity-40 hover:bg-[var(--text-secondary)]/5 hover:shadow-lg border border-transparent hover:border-[var(--border-color)] cursor-default"
          >
            {/* Timeline Column */}
            <div className="lg:col-span-3 flex flex-col items-start pt-1">
              <span className="text-xs font-bold tracking-widest text-[var(--text-secondary)] uppercase mb-2">
                {exp.period}
              </span>
              {exp.location && (
                <span className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)]">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
              )}
            </div>

            {/* Details Column */}
            <div className="lg:col-span-9 flex flex-col">
              <h4 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-1 group-hover/item:text-[var(--text-primary)] transition-colors">
                {exp.role}
              </h4>
              <h5 className="text-sm font-bold text-[var(--text-secondary)] tracking-wide uppercase mb-4">
                {exp.company}
              </h5>

              <p className="text-base text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {exp.highlights.map((item, hIndex) => (
                  <li
                    key={hIndex}
                    className="text-sm text-[var(--text-secondary)] flex items-start gap-2"
                  >
                    <span className="text-[var(--text-primary)] font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-bold bg-[var(--background)] md:bg-[var(--thirdary)] text-[var(--text-primary)] px-3 py-1.5 rounded-lg border border-[var(--border-color)] uppercase tracking-wider group-hover/item:bg-[var(--background)] transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
