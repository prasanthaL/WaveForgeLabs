import React from "react";
import * as Icons from "lucide-react";
import { FORGE_STEPS } from "@/lib/constants";

const IconResolver = ({ name, className }: { name: string; className?: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) return <Icons.HelpCircle className={className} />;
  return <LucideIcon className={className} />;
};

export const Process: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-24 bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-indigo/5 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* About Us Company Overview Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-32 pb-16 border-b border-white/5">
          {/* Left text content */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/25">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse"></span>
              <p className="text-brand-indigo text-[10px] font-mono font-bold tracking-widest uppercase">
                ABOUT US
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              Forging High-Performance
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo">
                Digital Systems
              </span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              At <strong className="text-white font-bold">WaveForge Labs</strong>, we are a dynamic and results-driven software development company committed to building high-performance digital solutions for modern business needs.
            </p>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
              With over 7 years of experience, our team delivers full-stack development, mobile apps, cloud integrations, and AI-powered solutions. Whether you&apos;re a startup or an enterprise, WaveForge Labs is your partner in digital transformation.
            </p>

            {/* Key Competencies 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
              {[
                { title: "Full-Stack Development", desc: "Type-safe robust web ecosystems" },
                { title: "Mobile Application Design", desc: "Cross-platform mobile experiences" },
                { title: "Cloud Integration", desc: "Auto-scaling infrastructure & IaC" },
                { title: "AI-Powered Solutions", desc: "Cognitive systems & agent operations" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start group">
                  <div className="w-5 h-5 rounded bg-brand-indigo/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-cyan/20 transition-all duration-300">
                    <Icons.Check className="w-3.5 h-3.5 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white/90 group-hover:text-brand-cyan transition-colors duration-300">{item.title}</h4>
                    <p className="text-[10px] text-white/40 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right illustration content */}
          <div className="md:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/20 to-brand-cyan/10 rounded-2xl blur-[20px] opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-white/5 group-hover:border-white/10 transition-all duration-350 shadow-[0_0_50px_rgba(6,182,212,0.05)] bg-slate-900/30 backdrop-blur-sm p-1.5">
              <img
                src="/images/about_us_tech.png"
                alt="WaveForge Systems Architecture"
                className="w-full h-auto object-cover rounded-xl grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-slate-950/80 border border-white/5 backdrop-blur-md text-[10px] font-mono text-white/50 flex justify-between items-center">
                <span>ESTABLISHED SQUAD</span>
                <span className="text-brand-cyan font-bold">7+ YEARS EXP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
            <p className="text-brand-cyan text-[10px] font-mono font-bold tracking-widest uppercase">
              THE METHODOLOGY
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            The Forge Lifecycle
          </h2>
          <p className="text-white/50 text-xs sm:text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Our step-by-step development process is engineered to ensure seamless alignment, premium execution, and zero friction.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical line path on desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-cyan via-brand-indigo to-slate-900 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {FORGE_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.number} className={`flex flex-col md:flex-row items-center relative ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Card Block */}
                  <div className="w-full md:w-1/2 px-0 md:px-12">
                    <div className="p-8 rounded-2xl glass-panel relative group hover:bg-slate-900/40 border border-white/5 hover:border-white/10 transition-all duration-300">
                      
                      {/* Step Tag */}
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#06b6d4] uppercase">
                        {step.tag}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mt-2 mb-4 group-hover:text-brand-cyan transition-colors flex items-center gap-3">
                        <span className="md:hidden w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center">
                          <IconResolver name={step.iconName} className="w-4 h-4 text-brand-cyan" />
                        </span>
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Node Center Badge (Desktop only) */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-950 border-2 border-brand-indigo flex items-center justify-center text-white z-20 group hover:border-brand-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 hidden md:flex">
                    <IconResolver name={step.iconName} className="w-5 h-5 text-brand-cyan animate-pulse-slow" />
                  </div>

                  {/* Step Number block (Desktop only) */}
                  <div className={`w-full md:w-1/2 px-0 md:px-12 text-center md:text-left ${isEven ? "md:text-right" : ""} hidden md:block`}>
                    <span className="text-6xl sm:text-8xl font-black font-mono tracking-tighter text-white/5 select-none hover:text-white/15 transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
