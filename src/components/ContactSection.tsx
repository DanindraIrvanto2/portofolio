'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Copy, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('danindrairvanto07@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactLinks = [
    {
      number: '01',
      label: 'EMAIL',
      value: 'danindrairvanto07@gmail.com',
      href: 'mailto:danindrairvanto07@gmail.com',
      icon: Mail,
      isEmail: true,
    },
    {
      number: '02',
      label: 'GITHUB',
      value: 'github.com/DanindraIrvanto2',
      href: 'https://github.com/DanindraIrvanto2',
      icon: GithubIcon,
      isExternal: true,
    },
    {
      number: '03',
      label: 'LINKEDIN',
      value: 'linkedin.com/in/danindra-irvan',
      href: 'https://www.linkedin.com/in/danindra-irvan',
      icon: LinkedinIcon,
      isExternal: true,
    },
    {
      number: '04',
      label: 'INSTAGRAM',
      value: 'instagram.com/danindrairvan',
      href: 'https://www.instagram.com/danindrairvan/',
      icon: InstagramIcon,
      isExternal: true,
    },
  ];

  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto pt-24 pb-32 px-6 sm:px-8 lg:px-12 border-t border-[var(--border-color)] scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading, Statement, Bio & Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col items-start pt-2"
        >
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[var(--text-secondary)] uppercase mb-4 block">
            GET IN TOUCH
          </span>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[var(--text-primary)] tracking-tight leading-[0.95] mb-8">
            LET&apos;S<br />
            WORK<br />
            TOGETHER
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
            Looking for the next problem worth solving.
          </h3>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium leading-relaxed max-w-lg mb-10">
            I&apos;m open to opportunities where I can contribute to fullstack web development, software engineering, digital workflows, and broadcast operations.
          </p>

          <a
            href={personalInfo.cvUrl}
            download="Danindra_Irvanto_CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--text-primary)] text-[var(--background)] font-bold text-xs uppercase tracking-widest hover:opacity-90 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 shadow-md cursor-pointer"
          >
            <span>DOWNLOAD RESUME →</span>
          </a>
        </motion.div>

        {/* Right Column: Stacked Contact Cards & Big Send Message Button */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-6 flex flex-col gap-4 w-full"
        >
          {contactLinks.map((item) => {
            const IconComp = item.icon;

            return (
              <a
                key={item.number}
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="group relative flex items-center justify-between p-6 sm:p-7 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--text-primary)]/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                {/* Left Side: Icon in Squircle + Label & Value */}
                <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                  <div className="p-3.5 rounded-2xl bg-[var(--thirdary)] border border-[var(--border-color)] text-[var(--text-primary)] group-hover:scale-105 transition-transform shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--text-secondary)] uppercase">
                      {item.label}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[var(--text-primary)] tracking-tight truncate mt-0.5 group-hover:text-[var(--text-primary)]">
                      {item.value}
                    </span>
                  </div>
                </div>

                {/* Right Side: Number & Action Icon */}
                <div className="flex flex-col items-end justify-between self-stretch shrink-0 pl-3">
                  <span className="text-xs font-mono font-medium text-[var(--text-secondary)]">
                    {item.number}
                  </span>

                  {item.isEmail ? (
                    <button
                      onClick={handleCopyEmail}
                      className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-1 rounded-lg transition-colors cursor-pointer"
                      title="Copy Email"
                      aria-label="Copy Email Address"
                    >
                      {copied ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  )}
                </div>
              </a>
            );
          })}

          {/* Big Action Button: CHAT ON WHATSAPP → */}
          <a
            href={personalInfo.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2 flex items-center justify-center gap-2 py-5 rounded-full border border-[var(--text-primary)] bg-[var(--card-bg)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)] text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
          >
            <span>CHAT ON WHATSAPP →</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
