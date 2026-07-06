"use client";

import React from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

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

const IconResolver: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) return <Icons.Sparkles className={className} />;
  return <LucideIcon className={className} />;
};

const ValueCard: React.FC<{ val: ValueProposition }> = ({ val }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeInOut" } }}
      style={{ "--glow-color": val.glowColor } as React.CSSProperties}
      className="relative rounded-2xl glass-panel p-8 overflow-hidden group glow-border-hover transition-all duration-500 hover:bg-slate-900/50 h-full"
    >
      {/* CSS-driven glow effect on hover */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--glow-color),transparent_70%)] opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

      {/* Decorative colored glow ball */}
      <div
        className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-[40px] opacity-10 group-hover:opacity-20 transition-all duration-500 pointer-events-none"
        style={{ backgroundColor: val.glowColor.split(",").slice(0, 3).join(",") + ", 0.4)" }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Card Icon */}
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-brand-indigo group-hover:to-brand-cyan transition-all duration-300 mb-6">
            <IconResolver name={val.iconName} className="w-6 h-6" />
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
            {val.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
            {val.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const WhyChoose: React.FC = () => {
  return (
    <section id="why-choose" className="relative w-full py-24 bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
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
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {VALUES.map((val) => (
            <div key={val.id}>
              <ValueCard val={val} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
