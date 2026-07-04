"use client";

import React from "react";
import { ArrowUpRight, Shield, Cpu, Activity, Info } from "lucide-react";
import { PORTFOLIO_PRODUCTS } from "@/lib/constants";

// Simulated systems for portfolio - avoids using generic placeholders
const AegisDashboardSim = () => (
  <div className="w-full h-44 bg-slate-950 border-b border-white/5 relative p-4 flex flex-col justify-between overflow-hidden select-none font-mono text-[9px]">
    {/* Grid lines */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />
    
    <div className="relative z-10 flex items-center justify-between text-white/50 border-b border-white/5 pb-2">
      <div className="flex items-center gap-1.5">
        <Shield className="w-3.5 h-3.5 text-[#06b6d4] animate-pulse" />
        <span className="font-bold tracking-widest text-[#06b6d4]">AEGIS_SEC_SHIELD</span>
      </div>
      <span className="text-[8px] bg-red-500/10 border border-red-500/20 text-red-400 px-1 rounded animate-pulse">THREAT_ACTIVE</span>
    </div>

    {/* Simulating node coordinates */}
    <div className="relative z-10 grid grid-cols-4 gap-2 text-white/40 my-3">
      <div className="bg-white/5 p-1.5 rounded border border-white/5">
        <div className="text-white/30 text-[7px]">IPS_ADDR</div>
        <div className="text-white font-semibold">10.244.18.2</div>
      </div>
      <div className="bg-white/5 p-1.5 rounded border border-white/5">
        <div className="text-white/30 text-[7px]">CPU_LOAD</div>
        <div className="text-emerald-400 font-semibold animate-pulse">4.21%</div>
      </div>
      <div className="bg-white/5 p-1.5 rounded border border-white/5">
        <div className="text-white/30 text-[7px]">SYS_PORT</div>
        <div className="text-white font-semibold">443/TLS</div>
      </div>
      <div className="bg-white/5 p-1.5 rounded border border-white/5">
        <div className="text-white/30 text-[7px]">MEM_USE</div>
        <div className="text-white font-semibold">1.42 GB</div>
      </div>
    </div>

    {/* Simulated SVG Threat Waveform */}
    <div className="relative z-10 flex-1 w-full flex items-end">
      <svg className="w-full h-8 text-[#06b6d4]/40" viewBox="0 0 300 40" preserveAspectRatio="none">
        <path
          d="M0,35 Q30,20 60,35 T120,10 T180,30 T240,15 L300,40 L300,40 Z"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="1.5"
          className="animate-pulse"
        />
        <path
          d="M0,35 Q30,20 60,35 T120,10 T180,30 T240,15 L300,40 L300,40 Z"
          fill="url(#aegis-grad)"
          opacity="0.1"
        />
        <defs>
          <linearGradient id="aegis-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);

const NeuralDashboardSim = () => (
  <div className="w-full h-44 bg-slate-950 border-b border-white/5 relative p-4 flex flex-col justify-between overflow-hidden select-none font-mono text-[9px]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />
    
    <div className="relative z-10 flex items-center justify-between text-white/50 border-b border-white/5 pb-2">
      <div className="flex items-center gap-1.5">
        <Cpu className="w-3.5 h-3.5 text-[#6366f1]" />
        <span className="font-bold tracking-widest text-[#6366f1]">NEURAL_CORE_V4</span>
      </div>
      <span className="text-[8px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-1 rounded">SYS_ONLINE</span>
    </div>

    {/* Simulating query dialogue logs */}
    <div className="relative z-10 flex-1 flex flex-col justify-center gap-2 text-[8px] text-white/60 my-2">
      <div className="flex gap-2">
        <span className="text-white/30">[PROMPT]:</span>
        <span className="text-indigo-200">How to optimize vector search indexing?</span>
      </div>
      <div className="flex gap-2 border-l-2 border-[#6366f1]/40 pl-2">
        <span className="text-[#6366f1]">[AGENT]:</span>
        <span className="text-white/80 line-clamp-2">Index optimized. Enabled HNSW index using cosine metric. System response time lowered to 4.2ms.</span>
      </div>
    </div>

    {/* Small blinking grid nodes */}
    <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-2 text-white/40">
      <span>LATENCY: 4.2ms</span>
      <span>ACCURACY: 99.4%</span>
    </div>
  </div>
);

const WaveFlowDashboardSim = () => (
  <div className="w-full h-44 bg-slate-950 border-b border-white/5 relative p-4 flex flex-col justify-between overflow-hidden select-none font-mono text-[9px]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />
    
    <div className="relative z-10 flex items-center justify-between text-white/50 border-b border-white/5 pb-2">
      <div className="flex items-center gap-1.5">
        <Activity className="w-3.5 h-3.5 text-[#ec4899]" />
        <span className="font-bold tracking-widest text-[#ec4899]">WAVEFLOW_MEDIA</span>
      </div>
      <span className="text-[8px] bg-pink-500/10 border border-pink-500/20 text-pink-400 px-1 rounded animate-pulse">STREAMING</span>
    </div>

    {/* Simulating dynamic canvas bars representing streams */}
    <div className="relative z-10 flex-1 flex items-end justify-center gap-1.5 my-3 h-12">
      {[40, 75, 20, 95, 60, 45, 80, 55, 30, 90, 65, 50, 85].map((val, idx) => (
        <div
          key={idx}
          className="w-1.5 rounded-full bg-gradient-to-t from-brand-indigo to-pink-500 transition-all duration-300"
          style={{
            height: `${val}%`,
            animation: `float 2.5s ease-in-out infinite`,
            animationDelay: `${idx * 0.1}s`,
          }}
        />
      ))}
    </div>

    <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-2 text-white/40">
      <span>FPS: 60.00</span>
      <span>BITRATE: 4.8 Mbps</span>
    </div>
  </div>
);

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="relative w-full py-24 bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse"></span>
              <p className="text-brand-indigo text-[10px] font-mono font-bold tracking-widest uppercase">
                THE LABS PORTFOLIO
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              Featured Software Products
            </h2>
          </div>
          <p className="text-white/50 text-xs sm:text-sm max-w-sm leading-relaxed md:text-right">
            A small window into our active digital labs. These products are currently running in production, processing mission-critical operations.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_PRODUCTS.map((prod, index) => (
            <div
              key={prod.title}
              className="rounded-2xl glass-panel overflow-hidden border border-white/5 hover:border-white/10 group flex flex-col justify-between hover:bg-slate-900/30 transition-all duration-300"
            >
              <div>
                {/* Dynamic dashboard graphics depending on index */}
                {index === 0 && <AegisDashboardSim />}
                {index === 1 && <NeuralDashboardSim />}
                {index === 2 && <WaveFlowDashboardSim />}

                {/* Card Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-brand-cyan uppercase">
                        {prod.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 group-hover:text-brand-cyan transition-colors">
                        {prod.title}
                      </h3>
                    </div>
                    <a href={prod.link} className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                    {prod.description}
                  </p>
                </div>
              </div>

              {/* Bottom Metrics Details */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-white/40 mb-3">
                  <Info className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>KEY METRIC: <strong className="text-white/80">{prod.metric}</strong></span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {prod.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[9px] font-mono font-bold text-white/50 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Portfolio;
