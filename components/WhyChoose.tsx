import React from "react";
import { WhyChooseGrid } from "./WhyChooseGrid";

interface ValueProposition {
  id: string;
  title: string;
  description: string;
  iconName: string;
  glowColor: string;
}

const VALUES: ValueProposition[] = [
  {
    id: "talent",
    title: "Senior Engineering Talent",
    description: "We deploy dedicated senior engineers who write clean, test-driven code, ensuring zero-compromise product delivery and system reliability.",
    iconName: "Award",
    glowColor: "rgba(6, 182, 212, 0.15)", // Cyan
  },
  {
    id: "transparency",
    title: "Agile Speed & Transparency",
    description: "Active bi-weekly sprints with continuous staging builds, day-to-day progress logs, and complete codebase visibility at all times.",
    iconName: "Zap",
    glowColor: "rgba(99, 102, 241, 0.15)", // Indigo
  },
  {
    id: "ownership",
    title: "100% IP & Code Ownership",
    description: "Secure handover of all repositories, database schemas, design assets, and cloud deployment pipelines straight to your company accounts.",
    iconName: "ShieldCheck",
    glowColor: "rgba(168, 85, 247, 0.15)", // Purple
  },
  {
    id: "sla-support",
    title: "Post-Launch SLA Support",
    description: "Robust post-deployment agreements including active security updates, database tune-ups, cloud scaling audits, and continuous features.",
    iconName: "Clock",
    glowColor: "rgba(236, 72, 153, 0.15)", // Pink
  },
];

export const WhyChoose: React.FC = () => {
  return (
    <section id="why-choose" className="relative w-full py-24 bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse"></span>
              <p className="text-brand-indigo text-[10px] font-mono font-bold tracking-widest uppercase">
                THE DIFFERENCE
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo">
                WaveForge Labs
              </span>
            </h2>
          </div>
          <p className="text-white/50 text-xs sm:text-sm max-w-sm leading-relaxed md:text-right">
            We are dedicated to building high-performance systems with clear alignment, absolute transparency, and clean engineering.
          </p>
        </div>

        {/* Client Grid component */}
        <WhyChooseGrid values={VALUES} />
      </div>
    </section>
  );
};

export default WhyChoose;
