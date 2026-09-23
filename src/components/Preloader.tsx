'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 700);
        }, 250);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -40,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-[var(--background)] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Subtle Ambient Radial Glow (Monochrome) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[var(--text-primary)]/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Center Brand Name */}
          <div className="relative overflow-hidden h-16 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tighter"
            >
              Danindra<span className="text-[var(--text-secondary)]">.</span>
            </motion.div>
          </div>

          {/* Subtitle PORTFOLIO LOADING */}
          <div className="relative overflow-hidden h-8 mt-2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-bold tracking-[0.3em] uppercase text-[var(--text-secondary)]"
            >
              PORTFOLIO LOADING
            </motion.div>
          </div>

          {/* Progress Bar Container */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 w-48 md:w-64 h-[2px] bg-[var(--text-secondary)]/20 rounded-full overflow-hidden relative"
          >
            <motion.div
              className="absolute inset-y-0 left-0 h-full bg-[var(--text-primary)] rounded-full origin-left"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
