import React from "react";
import { TechnologiesGrid } from "./TechnologiesGrid";

export const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="relative w-full py-24 bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-indigo/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
              <p className="text-brand-cyan text-[10px] font-mono font-bold tracking-widest uppercase">
                THE STACK
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              Technologies We
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo">
                Forge With
              </span>
            </h2>
          </div>
          <p className="text-white/50 text-xs sm:text-sm max-w-sm leading-relaxed md:text-right">
            We operate at the leading edge of modern engineering. Our technologies are selected for maximum performance, security, and developer velocity.
          </p>
        </div>

        {/* Client Grid component */}
        <TechnologiesGrid />
      </div>
    </section>
  );
};

export default Technologies;
