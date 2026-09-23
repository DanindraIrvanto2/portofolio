'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { mediaShowcaseData } from '../data/portfolioData';
import { MediaShowcaseItem } from '../types/portfolio';
import { Play, X } from 'lucide-react';

export default function CreativeReelSection() {
  const [activeMedia, setActiveMedia] = useState<MediaShowcaseItem | null>(null);

  return (
    <section
      id="showreel"
      className="w-full max-w-7xl mx-auto py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-[var(--border-color)]"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[var(--text-secondary)] uppercase mb-3">
            Creative &amp; Broadcast
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[var(--text-primary)] tracking-tight">
            Media Talent &amp; Showreel
          </h3>
        </motion.div>

        <p className="max-w-md text-sm text-[var(--text-secondary)] font-medium">
          Dokumentasi peran sebagai talent video promosi, host acara, serta operasional siaran broadcast di industri media.
        </p>
      </div>

      {/* Media Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {mediaShowcaseData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            onClick={() => setActiveMedia(item)}
            className="group flex flex-col bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--text-primary)]/40 rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="relative w-full aspect-video bg-zinc-950 overflow-hidden">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 rounded-full bg-white/90 text-black shadow-2xl scale-90 group-hover:scale-110 transition-all duration-300">
                  <Play className="w-5 h-5 fill-black translate-x-0.5" />
                </div>
              </div>

              {/* Tag Year */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/70 text-white backdrop-blur-md border border-white/10">
                  {item.year}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <span className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider block mb-1">
                  {item.role}
                </span>
                <h4 className="text-lg font-bold text-[var(--text-primary)] group-hover:opacity-80 transition-opacity tracking-tight mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  {item.clientOrOrg}
                </span>
                <span className="text-xs font-bold text-[var(--text-primary)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Watch Reel →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveMedia(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-2xl bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setActiveMedia(null)}
                aria-label="Close"
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-zinc-950 border border-[var(--border-color)]">
                <Image
                  src={activeMedia.thumbnail}
                  alt={activeMedia.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 text-center">
                  <div className="p-4 rounded-full bg-white text-black mb-3 shadow-xl">
                    <Play className="w-6 h-6 fill-black translate-x-0.5" />
                  </div>
                  <p className="text-white font-bold text-base sm:text-lg">
                    {activeMedia.title}
                  </p>
                  <span className="text-zinc-300 text-xs font-semibold mt-1">
                    Role: {activeMedia.role}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                {activeMedia.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                {activeMedia.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
                <span className="text-xs text-[var(--text-secondary)]">
                  Affiliation: <strong>{activeMedia.clientOrOrg}</strong>
                </span>
                <button
                  onClick={() => setActiveMedia(null)}
                  className="px-5 py-2 rounded-xl bg-[var(--text-primary)] text-[var(--background)] text-xs font-bold hover:opacity-90 transition-opacity"
                >
                  Close Showcase
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
