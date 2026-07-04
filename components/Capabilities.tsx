import React from "react";
import { CAPABILITIES } from "@/lib/constants";
import { CapabilitiesGrid } from "./CapabilitiesGrid";

export const Capabilities: React.FC = () => {
  return (
    <section id="services" className="relative w-full py-24 bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
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
        </div>

        {/* Client Grid component */}
        <CapabilitiesGrid capabilities={CAPABILITIES} />

      </div>
    </section>
  );
};
export default Capabilities;
