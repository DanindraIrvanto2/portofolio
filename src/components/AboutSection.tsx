'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Terminal, Video, Copy, Check } from 'lucide-react';

export default function AboutSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-[var(--border-color)] overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16 sm:mb-20 text-left"
      >
        <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[var(--text-secondary)] uppercase mb-3">
          Discover
        </h2>
        <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[var(--text-primary)] tracking-tight">
          About Me
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Column: Stylized Portrait Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
            {/* Watermark Behind */}
            <div className="absolute -bottom-8 -left-8 text-8xl lg:text-9xl font-black text-[var(--text-secondary)]/5 select-none pointer-events-none tracking-tighter mix-blend-multiply dark:mix-blend-screen z-0">
              DEV.
            </div>

            {/* Photo Card */}
            <div className="relative z-10 p-2.5 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-3xl shadow-2xl overflow-hidden aspect-[4/5] group hover:-translate-y-1.5 transition-all duration-500">
              <Image
                src="/images/about-danindra.jpg"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                quality={100}
                unoptimized
                className="object-cover object-[center_55%] rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio & Personal Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Who Am I */}
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 pb-3 border-b border-[var(--border-color)] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[var(--text-primary)]" />
                <span>Who Am I</span>
              </h4>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-medium">
                {personalInfo.aboutShort}
              </p>
            </div>

            {/* My Approach */}
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3 pb-3 border-b border-[var(--border-color)] flex items-center gap-2">
                <Video className="w-4 h-4 text-[var(--text-primary)]" />
                <span>My Approach</span>
              </h4>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-medium">
                {personalInfo.aboutDetail}
              </p>
            </div>
          </div>

          {/* Personal Details Grid */}
          <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
            <h4 className="text-base font-bold text-[var(--text-primary)] mb-6 border-l-4 border-[var(--text-primary)] pl-3">
              Personal Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
              {personalInfo.personalDetails.map((item, index) => {
                const isCopyable = item.label === 'Phone' || item.label === 'Email';
                const isCopied = copiedKey === item.label;

                return (
                  <div
                    key={index}
                    className="group/detail flex flex-col p-3 -m-1 rounded-xl hover:bg-[var(--thirdary)] transition-colors duration-200 relative"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs uppercase tracking-wider font-bold text-[var(--text-secondary)]">
                        {item.label}
                      </span>
                      {isCopyable && (
                        <button
                          onClick={() => handleCopy(item.label, item.value)}
                          className="opacity-0 group-hover/detail:opacity-100 transition-opacity p-1 hover:bg-[var(--text-secondary)]/15 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs flex items-center gap-1 cursor-pointer"
                          title={`Copy ${item.label}`}
                        >
                          {isCopied ? (
                            <span className="text-[10px] font-semibold text-emerald-500 flex items-center gap-0.5">
                              <Check className="w-3 h-3" /> Copied
                            </span>
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      )}
                    </div>
                    {item.isLink ? (
                      <a
                        href={item.link}
                        className="text-sm sm:text-base font-semibold text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors underline decoration-[var(--border-color)] underline-offset-4"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                        {item.value}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Infinite Running Marquee Text Banner */}
      <div className="mt-24 pt-10 border-t border-[var(--border-color)] overflow-hidden">
        <div className="relative overflow-hidden w-full select-none py-4">
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
            <span className="text-4xl sm:text-6xl font-black text-[var(--text-secondary)]/20 uppercase tracking-tight">
              DANINDRA IRVANTO
            </span>
            <span className="text-2xl text-[var(--text-secondary)]/30">/</span>
            <span className="text-4xl sm:text-6xl font-black text-[var(--text-secondary)]/20 uppercase tracking-tight">
              FULLSTACK DEVELOPER
            </span>
            <span className="text-2xl text-[var(--text-secondary)]/30">/</span>
            <span className="text-4xl sm:text-6xl font-black text-[var(--text-secondary)]/20 uppercase tracking-tight">
              BROADCAST MEDIA
            </span>
            <span className="text-2xl text-[var(--text-secondary)]/30">/</span>
            <span className="text-4xl sm:text-6xl font-black text-[var(--text-secondary)]/20 uppercase tracking-tight">
              DANINDRA IRVANTO
            </span>
            <span className="text-2xl text-[var(--text-secondary)]/30">/</span>
            <span className="text-4xl sm:text-6xl font-black text-[var(--text-secondary)]/20 uppercase tracking-tight">
              FULLSTACK DEVELOPER
            </span>
            <span className="text-2xl text-[var(--text-secondary)]/30">/</span>
            <span className="text-4xl sm:text-6xl font-black text-[var(--text-secondary)]/20 uppercase tracking-tight">
              BROADCAST MEDIA
            </span>
            <span className="text-2xl text-[var(--text-secondary)]/30">/</span>
            <span className="text-4xl sm:text-6xl font-black text-[var(--text-secondary)]/20 uppercase tracking-tight">
              DANINDRA IRVANTO
            </span>
            <span className="text-2xl text-[var(--text-secondary)]/30">/</span>
            <span className="text-4xl sm:text-6xl font-black text-[var(--text-secondary)]/20 uppercase tracking-tight">
              FULLSTACK DEVELOPER
            </span>
            <span className="text-2xl text-[var(--text-secondary)]/30">/</span>
            <span className="text-4xl sm:text-6xl font-black text-[var(--text-secondary)]/20 uppercase tracking-tight">
              BROADCAST MEDIA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
