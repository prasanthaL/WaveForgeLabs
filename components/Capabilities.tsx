"use client";

import React from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { CAPABILITIES } from "@/lib/constants";

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
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeInOut" } }}
      style={{ "--glow-color": glowColor } as React.CSSProperties}
      className="relative rounded-2xl glass-panel overflow-hidden group glow-border-hover transition-all duration-500 hover:bg-slate-900/50 h-full"
    >
      {/* CSS-driven glow effect on hover instead of mouse hook */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--glow-color),transparent_70%)] opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

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
            <motion.li
              key={i}
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
              whileHover={{ x: 2, color: "#ffffff" }}
              className="flex items-center gap-2 text-xs transition-colors"
            >
              <div className="w-4 h-4 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0">
                <Icons.Check className="w-2.5 h-2.5 text-brand-cyan" />
              </div>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export const Capabilities: React.FC = () => {
  return (
    <section id="services" className="relative w-full py-24 bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
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
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse"></span>
            <p className="text-brand-indigo text-[10px] font-mono font-bold tracking-widest uppercase">
              CAPABILITIES
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            We Forge Exceptional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo mt-1">
              Digital Capabilities
            </span>
          </h2>
          <p className="text-white/50 text-xs sm:text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Our expert squad combines robust systems architecture with cognitive intelligence, providing end-to-end execution of your product goals.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
          className="space-y-6"
        >
          {/* Row 1: Featured wide card + Image showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <CapabilityCard
                title={CAPABILITIES[0].title}
                description={CAPABILITIES[0].description}
                features={CAPABILITIES[0].features}
                iconName={CAPABILITIES[0].iconName}
                glowColor={CAPABILITIES[0].glowColor}
                index={0}
                isFeatured
              />
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeInOut" } }}
              className="lg:col-span-5"
            >
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
            <div>
              <CapabilityCard
                title={CAPABILITIES[1].title}
                description={CAPABILITIES[1].description}
                features={CAPABILITIES[1].features}
                iconName={CAPABILITIES[1].iconName}
                glowColor={CAPABILITIES[1].glowColor}
                index={1}
              />
            </div>
            <div>
              <CapabilityCard
                title={CAPABILITIES[2].title}
                description={CAPABILITIES[2].description}
                features={CAPABILITIES[2].features}
                iconName={CAPABILITIES[2].iconName}
                glowColor={CAPABILITIES[2].glowColor}
                index={2}
              />
            </div>
          </div>

          {/* Row 3: Two equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <CapabilityCard
                title={CAPABILITIES[3].title}
                description={CAPABILITIES[3].description}
                features={CAPABILITIES[3].features}
                iconName={CAPABILITIES[3].iconName}
                glowColor={CAPABILITIES[3].glowColor}
                index={3}
              />
            </div>
            <div>
              <CapabilityCard
                title={CAPABILITIES[4].title}
                description={CAPABILITIES[4].description}
                features={CAPABILITIES[4].features}
                iconName={CAPABILITIES[4].iconName}
                glowColor={CAPABILITIES[4].glowColor}
                index={4}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default Capabilities;
