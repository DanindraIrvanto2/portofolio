import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Headset } from 'lucide-react';
import {
  Html5Icon,
  Css3Icon,
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  NextjsIcon,
  NodejsIcon,
  ExpressIcon,
  PostgresIcon,
  PrismaIcon,
  TailwindIcon,
  GitIcon,
  VsCodeIcon,
  CapCutIcon,
  PremiereIcon,
  CanvaIcon,
} from '@/components/Icons';

const tools = [
  { name: 'HTML5', short: 'HTML', icon: Html5Icon },
  { name: 'CSS3', short: 'CSS', icon: Css3Icon },
  { name: 'JavaScript', short: 'JS', icon: JavascriptIcon },
  { name: 'TypeScript', short: 'TS', icon: TypescriptIcon },
  { name: 'React.js', short: 'React', icon: ReactIcon },
  { name: 'Next.js', short: 'Next', icon: NextjsIcon },
  { name: 'Node.js', short: 'Node', icon: NodejsIcon },
  { name: 'Express.js', short: 'Express', icon: ExpressIcon },
  { name: 'PostgreSQL', short: 'PG', icon: PostgresIcon },
  { name: 'Prisma', short: 'Prisma', icon: PrismaIcon },
  { name: 'Tailwind', short: 'Tailwind', icon: TailwindIcon },
  { name: 'Git', short: 'Git', icon: GitIcon },
  { name: 'VS Code', short: 'VS Code', icon: VsCodeIcon },
  { name: 'CapCut', short: 'CapCut', icon: CapCutIcon },
  { name: 'Premiere', short: 'Premiere', icon: PremiereIcon },
  { name: 'Canva', short: 'Canva', icon: CanvaIcon },
];

const capabilityCards = [
  {
    number: '01',
    category: 'IT, WEB DEVELOPMENT & QA',
    icon: Code2,
    description: 'Building and testing functional digital systems, from database-driven web applications to responsive fullstack platforms, with a focus on reliability, clean code, and practical problem-solving.',
    tags: [
      'Web Development',
      'Fullstack Architecture',
      'System Testing',
      'Bug Identification',
      'System Analysis',
      'Database Management',
      'MySQL',
      'PostgreSQL',
      'PHP / Node.js',
      'Next.js',
      'React.js',
      'TypeScript',
      'HTML',
      'CSS',
      'JavaScript',
      'RESTful APIs'
    ]
  },
  {
    number: '02',
    category: 'VA & DIGITAL OPERATIONS',
    icon: Headset,
    description: 'Supporting teams with organized data, documentation, research, and digital workflows while helping keep day-to-day operations accurate and efficient.',
    tags: [
      'Data Entry',
      'Data Validation',
      'Document Management',
      'Online Research',
      'Administrative Support',
      'Google Workspace',
      'Social Media Management',
      'Content Optimization'
    ]
  }
];

export default function TechStackSection() {
  return (
    <section
      id="what-i-can-do"
      className="w-full max-w-7xl mx-auto pt-28 pb-32 px-6 sm:px-8 lg:px-12 border-t border-[var(--border-color)] scroll-mt-20"
    >
      {/* Backward compatible anchor */}
      <div id="techstack" className="relative -top-28" />

      {/* Main Container Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        
        {/* Left Column: Heading, Subtitle & 4x4 Tool Tiles */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-start pt-2"
        >
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[var(--text-secondary)] uppercase mb-3 block">
            MY CAPABILITIES
          </span>

          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] tracking-tight mb-5">
            What I Can Do
          </h3>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium leading-relaxed mb-8 max-w-md">
            I combine technical, problem-solving, and digital skills to build reliable systems, create engaging visual stories, and support efficient digital workflows.
          </p>

          {/* 4x4 Tool Squircles Grid with Brand Logos */}
          <div className="grid grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-[340px]">
            {tools.map((tool, idx) => {
              const ToolIcon = tool.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-2.5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-[var(--text-primary)]/40 hover:bg-[var(--thirdary)]/60 hover:-translate-y-1 transition-all duration-200 shadow-xs aspect-square cursor-default"
                  title={tool.name}
                >
                  <div className="w-6 h-6 flex items-center justify-center text-[var(--text-primary)] group-hover:scale-110 transition-transform mb-1.5">
                    <ToolIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] tracking-tight truncate max-w-[62px] text-center transition-colors">
                    {tool.short}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Numbered Capability Cards (01 & 02) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 items-stretch">
          {capabilityCards.map((card, idx) => {
            const IconComp = card.icon;

            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xs hover:shadow-xl hover:border-[var(--text-primary)]/30 transition-all duration-300"
              >
                <div>
                  {/* Top Header: Number on Left, Category on Right */}
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <span className="text-4xl sm:text-5xl font-light text-[var(--text-primary)] tracking-tighter leading-none">
                      {card.number}
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--text-secondary)] uppercase text-right max-w-[140px] leading-tight pt-1">
                      {card.category}
                    </span>
                  </div>

                  {/* Center Outline Icon */}
                  <div className="my-6 flex justify-center">
                    <div className="p-3.5 rounded-2xl bg-[var(--thirdary)] border border-[var(--border-color)] text-[var(--text-primary)]">
                      <IconComp className="w-7 h-7 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 pt-5 border-t border-[var(--border-color)]">
                  {card.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[var(--thirdary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
