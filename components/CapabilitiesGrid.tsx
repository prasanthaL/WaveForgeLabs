"use client";

import React from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { useCardSpotlight } from "@/hooks/useMousePosition";

interface Capability {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
  glowColor: string;
}

const IconResolver = ({ name, className }: { name: string; className?: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) return <Icons.HelpCircle className={className} />;
  return <LucideIcon className={className} />;
};

const CapabilityCard: React.FC<{
  title: string;
  description: string;
  features: string[];
  iconName: string;
  glowColor: string;
  index: number;
  isFeatured?: boolean;
}> = ({ title, description, features, iconName, glowColor, index, isFeatured }) => {
  const containerRef = useCardSpotlight();

  return (
    <div
      ref={containerRef}
      style={{ "--glow-color": glowColor } as React.CSSProperties}
      className="relative rounded-2xl glass-panel overflow-hidden group glow-border-hover transition-all duration-500 hover:-translate-y-1 hover:bg-slate-900/50 h-full"
    >
      {/* Spotlight glow layer */}
      <div className="absolute inset-0 radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Decorative glow orb */}
      <div
        className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-[50px] opacity-10 group-hover:opacity-25 transition-all duration-500 pointer-events-none"
        style={{ backgroundColor: glowColor.split(",").slice(0, 3).join(",") + ", 0.5)" }}
      />

      <div className={`relative z-10 flex flex-col justify-between h-full ${isFeatured ? "p-10" : "p-8"}`}>
        <div>
          {/* Top bar with step number & icon */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#06b6d4] group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-brand-indigo group-hover:to-brand-cyan transition-all duration-300">
              <IconResolver name={iconName} className="w-6 h-6" />
            </div>
            <span className="text-5xl font-black font-mono text-white/[0.04] select-none group-hover:text-white/[0.08] transition-colors duration-500">
              0{index + 1}
            </span>
          </div>

          {/* Title */}
          <h3 className={`font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors ${isFeatured ? "text-xl sm:text-2xl" : "text-lg"}`}>
            {title}
          </h3>

          {/* Description */}
          <p className={`text-white/50 leading-relaxed mb-6 ${isFeatured ? "text-sm" : "text-xs sm:text-sm"}`}>
            {description}
          </p>
        </div>

        {/* Feature checklist */}
        <ul className={`grid gap-2.5 border-t border-white/5 pt-6 ${isFeatured ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-white/60 group-hover:text-white/80 transition-colors">
              <div className="w-4 h-4 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0">
                <Icons.Check className="w-2.5 h-2.5 text-brand-cyan" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const CapabilitiesGrid: React.FC<{ capabilities: Capability[] }> = ({ capabilities }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <motion.div 
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Row 1: Featured wide card + Image showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <motion.div className="lg:col-span-7" variants={cardVariants}>
          <CapabilityCard
            title={capabilities[0].title}
            description={capabilities[0].description}
            features={capabilities[0].features}
            iconName={capabilities[0].iconName}
            glowColor={capabilities[0].glowColor}
            index={0}
            isFeatured
          />
        </motion.div>
        <motion.div className="lg:col-span-5" variants={cardVariants}>
          <div className="relative rounded-2xl overflow-hidden border border-white/5 h-full group hover:border-white/10 transition-all duration-500 bg-slate-900/30 backdrop-blur-sm">
            <img
              src="/images/services_showcase.png"
              alt="Enterprise Dashboard Preview"
              className="w-full h-full object-cover min-h-[280px] grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[9px] font-mono tracking-widest text-green-400 uppercase">Systems Online</span>
              </div>
              <h4 className="text-sm font-bold text-white">Live Enterprise Operations</h4>
              <p className="text-[11px] text-white/40 leading-relaxed max-w-xs">Running custom cloud pipelines with 99.99% operational SLA compliance across all deployments.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Row 2: Two equal cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={cardVariants}>
          <CapabilityCard
            title={capabilities[1].title}
            description={capabilities[1].description}
            features={capabilities[1].features}
            iconName={capabilities[1].iconName}
            glowColor={capabilities[1].glowColor}
            index={1}
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <CapabilityCard
            title={capabilities[2].title}
            description={capabilities[2].description}
            features={capabilities[2].features}
            iconName={capabilities[2].iconName}
            glowColor={capabilities[2].glowColor}
            index={2}
          />
        </motion.div>
      </div>

      {/* Row 3: Two equal cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={cardVariants}>
          <CapabilityCard
            title={capabilities[3].title}
            description={capabilities[3].description}
            features={capabilities[3].features}
            iconName={capabilities[3].iconName}
            glowColor={capabilities[3].glowColor}
            index={3}
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <CapabilityCard
            title={capabilities[4].title}
            description={capabilities[4].description}
            features={capabilities[4].features}
            iconName={capabilities[4].iconName}
            glowColor={capabilities[4].glowColor}
            index={4}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CapabilitiesGrid;
