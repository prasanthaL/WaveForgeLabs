"use client";

import React from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { useCardSpotlight } from "@/hooks/useMousePosition";

interface ValueProposition {
  id: string;
  title: string;
  description: string;
  iconName: string;
  glowColor: string;
}

const IconResolver: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) return <Icons.Sparkles className={className} />;
  return <LucideIcon className={className} />;
};

const ValueCard: React.FC<{ val: ValueProposition }> = ({ val }) => {
  const containerRef = useCardSpotlight();

  return (
    <div
      ref={containerRef}
      style={{ "--glow-color": val.glowColor } as React.CSSProperties}
      className="relative rounded-2xl glass-panel p-8 overflow-hidden group glow-border-hover transition-all duration-500 hover:-translate-y-1 hover:bg-slate-900/50 h-full"
    >
      {/* Spotlight glow layer inside card */}
      <div className="absolute inset-0 radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Decorative colored glow ball */}
      <div
        className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-[40px] opacity-10 group-hover:opacity-20 transition-all duration-500 pointer-events-none"
        style={{ backgroundColor: val.glowColor.split(",").slice(0, 3).join(",") + ", 0.4)" }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Card Icon */}
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-brand-indigo group-hover:to-brand-cyan transition-all duration-300 mb-6">
            <IconResolver name={val.iconName} className="w-6 h-6 animate-pulse-slow" />
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
    </div>
  );
};

export const WhyChooseGrid: React.FC<{ values: ValueProposition[] }> = ({ values }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {values.map((val) => (
        <motion.div key={val.id} variants={cardVariants}>
          <ValueCard val={val} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default WhyChooseGrid;
