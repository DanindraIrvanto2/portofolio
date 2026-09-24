'use client';

import React, { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import TechStackSection from '@/components/TechStackSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MouseSpotlight from '@/components/MouseSpotlight';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  // Reset scroll to top and clear hash on reload/load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      window.scrollTo(0, 0);
    }
  }, []);

  // Sync dark mode class on HTML document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      {/* Aesthetic Loading Screen (RyHar & TikTok Reference) */}
      {isLoading && (
        <Preloader
          onComplete={() => {
            setIsLoading(false);
            if (typeof window !== 'undefined') {
              window.scrollTo(0, 0);
            }
          }}
        />
      )}

      {/* Ambient Mouse Spotlight Glow */}
      <MouseSpotlight />

      <div
        className={`min-h-screen flex flex-col transition-opacity duration-700 ${
          isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Navigation Bar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main Content Sections */}
        <main className="flex-1 w-full">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <TechStackSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll To Top Interactive Widget */}
        <ScrollToTop />
      </div>
    </>
  );
}
