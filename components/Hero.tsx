import React from "react";
import { ArrowRight, Play, Server, Cpu, ShieldCheck } from "lucide-react";
import { Button } from "./Button";
import { CLIENT_LOGOS } from "@/lib/constants";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-slate-950 flex flex-col justify-between pt-32 pb-12 overflow-hidden"
    >
      {/* Premium static grid line pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Decorative Gradient Overlays / Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-brand-indigo/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-cyan/5 blur-[130px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 flex-1 flex flex-col justify-center items-center text-center mt-8 sm:mt-12 md:mt-20">
        
        {/* Glow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md animate-blur-reveal">
          <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse"></span>
          <p className="text-[#06b6d4] text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase">
            NOW LEADING THE DIGITAL FORGE
          </p>
        </div>

        {/* Cinematic Typography Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white/95 font-sans font-black uppercase select-none animate-blur-reveal">
          Forging the Digital
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-indigo-300 to-brand-indigo mt-1">
            Wave of Tomorrow
          </span>
        </h1>

        {/* Highlight Description */}
        <p className="text-white/60 text-xs sm:text-sm md:text-lg lg:text-xl font-display italic mt-4 sm:mt-6 max-w-2xl px-2 animate-fade-up animation-delay-200">
          We combine code craftsmanship and cognitive intelligence to build premium software systems for global brands.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10 animate-fade-up animation-delay-400">
          <a href="#contact">
            <Button variant="cyan" size="md" className="gap-2">
              Start Project Inquiry
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a href="#services" className="flex items-center gap-2 group hover:text-[#06b6d4] transition-colors">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#06b6d4] group-hover:border-[#06b6d4] transition-all duration-300">
              <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
            </div>
            <span className="text-xs font-mono font-bold text-white/80 group-hover:text-[#06b6d4] transition-colors uppercase tracking-wider">
              Explore Services
            </span>
          </a>
        </div>

        {/* Grid Stats Counters */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 pt-10 sm:pt-16 mt-10 sm:mt-16 border-t border-white/5 w-full max-w-4xl animate-fade-up animation-delay-600">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-brand-cyan mb-1">
              <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-[9px] sm:text-xs font-mono tracking-wider text-white/40 uppercase">Products Forged</span>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">45+</p>
          </div>
          
          <div className="flex flex-col items-center border-x border-white/5 px-2 sm:px-0">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-brand-indigo mb-1">
              <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-[9px] sm:text-xs font-mono tracking-wider text-white/40 uppercase">AI Systems</span>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">18</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[#ec4899] mb-1">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="text-[9px] sm:text-xs font-mono tracking-wider text-white/40 uppercase">Uptime</span>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">99.99%</p>
          </div>
        </div>
      </div>

      {/* Brand Logos Footer strip */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-8 sm:mt-12 md:mt-16 pt-6 border-t border-white/5">
        <div className="flex flex-wrap items-center justify-between gap-6 opacity-45">
          <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">TRUSTED PARTNER OF</span>
          <div className="flex flex-wrap items-center gap-8 sm:gap-16">
            {CLIENT_LOGOS.map((logo) => (
              <span
                key={logo.name}
                className="text-white text-sm font-bold tracking-widest font-mono select-none hover:text-[#06b6d4] hover:opacity-100 transition-all duration-300"
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
