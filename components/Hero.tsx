"use client";

import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { WaveformBackground } from "./WaveformBackground";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-slate-950 flex flex-col justify-center pt-32 pb-12 overflow-hidden"
    >
      {/* Premium static grid line pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Decorative Gradient Overlays / Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-brand-indigo/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-cyan/5 blur-[130px] pointer-events-none" />

      {/* Animated Waveform Visualizer Background */}
      <WaveformBackground />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center items-center text-center mt-8 sm:mt-12">
        
        {/* Glow Badge */}
        <motion.div
          initial={{ filter: "blur(8px)", opacity: 0, y: 15 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse"></span>
          <p className="text-[#06b6d4] text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase">
            LEADING THE DIGITAL FRONTIER
          </p>
        </motion.div>

        {/* Cinematic Typography Heading */}
        <motion.h1
          initial={{ filter: "blur(12px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white/95 font-sans font-black uppercase select-none"
        >
          Engineering the Digital
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-indigo-300 to-brand-indigo mt-1">
            Horizon of Tomorrow
          </span>
        </motion.h1>

        {/* Highlight Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-white/60 text-xs sm:text-sm md:text-lg lg:text-xl font-display italic mt-4 sm:mt-6 max-w-2xl px-2"
        >
          We combine code craftsmanship and cognitive intelligence to build premium software systems for global brands.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10"
        >
          <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button variant="cyan" size="md" className="gap-2 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all">
              Start Project Inquiry
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.a>
          
          <motion.a
            href="#services"
            className="flex items-center gap-2 group hover:text-[#06b6d4] transition-colors"
            whileHover={{ x: 4 }}
          >
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#06b6d4] group-hover:border-[#06b6d4] transition-all duration-300">
              <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
            </div>
            <span className="text-xs font-mono font-bold text-white/80 group-hover:text-[#06b6d4] transition-colors uppercase tracking-wider">
              Explore Services
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

