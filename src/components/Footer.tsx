'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 border-t border-[var(--border-color)]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#home"
            className="text-xl font-black text-[var(--text-primary)] tracking-tight hover:opacity-80 transition-opacity"
          >
            Danindra<span className="text-[var(--text-secondary)]">.</span>
          </a>
          <p className="text-xs text-[var(--text-secondary)] mt-1 font-medium">
            Bridging Software Engineering &amp; Broadcast Media Production
          </p>
        </div>


        {/* Right Scroll-to-top & copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Danindra Irvanto. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all hover:-translate-y-1 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
