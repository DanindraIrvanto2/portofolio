'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code2, Radio, Video, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-20 md:pb-32 overflow-hidden"
    >
      {/* Background ambient lighting (Monochrome / Neutral) */}
      <div className="absolute top-20 left-1/4 -z-10 w-96 h-96 bg-[var(--text-primary)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left text column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-[var(--text-primary)] leading-[1.1]">
            {personalInfo.headline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">
              {personalInfo.nickname}
            </span>
          </h1>

          {/* Typewriter text */}
          <div className="min-h-[44px] sm:min-h-[48px] flex items-center gap-1.5 mt-3 mb-4">
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {displayText}
            </span>
            <span className="animate-cursor text-2xl lg:text-3xl font-light text-[var(--text-secondary)]">|</span>
          </div>

          {/* Bio paragraph */}
          <p className="max-w-2xl text-base sm:text-lg text-[var(--text-secondary)] font-medium leading-relaxed mt-2 mb-8">
            {personalInfo.aboutShort}
          </p>

          {/* Action buttons (Exact ryhar style) */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="cursor-pointer text-sm sm:text-base font-bold bg-[var(--text-primary)] hover:opacity-90 text-[var(--background)] px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300"
            >
              <span>Explore Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={personalInfo.cvUrl}
              download="Danindra_Irvanto_CV.pdf"
              className="cursor-pointer text-sm sm:text-base font-bold border-2 border-[var(--border-color)] hover:border-[var(--text-primary)] bg-[var(--card-bg)] text-[var(--text-primary)] px-8 py-4 rounded-xl flex items-center justify-center gap-3 backdrop-blur-md hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 shadow-xs"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Social connect icons */}
          <div className="mt-10 pt-6 border-t border-[var(--border-color)] w-full">
            <span className="text-xs uppercase tracking-widest font-bold text-[var(--text-secondary)] mb-4 block">
              Connect
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 border border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-all duration-300 hover:-translate-y-1 shadow-xs"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 border border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-all duration-300 hover:-translate-y-1 shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 border border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-all duration-300 hover:-translate-y-1 shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.email}
                aria-label="Email"
                className="p-3 border border-[var(--border-color)] rounded-xl bg-[var(--card-bg)] text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)] transition-all duration-300 hover:-translate-y-1 shadow-xs"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right avatar column with floating badges */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0"
        >
          {/* Avatar frame */}
          <div className="relative w-64 sm:w-80 md:w-96 aspect-square rounded-full p-2.5 bg-[var(--card-bg)] border border-[var(--border-color)] shadow-2xl">
            <div className="relative w-full h-full rounded-full overflow-hidden border border-[var(--border-color)]">
              <Image
                src="/images/danindra-hd.png"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                priority
                quality={100}
                unoptimized
                className="object-cover object-[62%_20%] scale-100 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Floating Badges */}
          <div className="absolute -bottom-6 -left-4 sm:-left-8 z-20 flex flex-col gap-2.5">
            {/* Badge 1: Fullstack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="floating flex items-center gap-3 bg-[var(--card-bg)]/90 backdrop-blur-xl border border-[var(--border-color)] py-2.5 px-4 rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-[var(--text-primary)] text-[var(--background)] p-2 rounded-xl">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] whitespace-nowrap">
                Fullstack Web Developer
              </span>
            </motion.div>

            {/* Badge 2: Broadcast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="floating flex items-center gap-3 bg-[var(--card-bg)]/90 backdrop-blur-xl border border-[var(--border-color)] py-2.5 px-4 rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="bg-[var(--text-primary)] text-[var(--background)] p-2 rounded-xl">
                <Radio className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] whitespace-nowrap">
                Broadcast Media
              </span>
            </motion.div>

            {/* Badge 3: Video Talent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="floating flex items-center gap-3 bg-[var(--card-bg)]/90 backdrop-blur-xl border border-[var(--border-color)] py-2.5 px-4 rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: '3s' }}
            >
              <div className="bg-[var(--text-primary)] text-[var(--background)] p-2 rounded-xl">
                <Video className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] whitespace-nowrap">
                Promotional Video Talent
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
