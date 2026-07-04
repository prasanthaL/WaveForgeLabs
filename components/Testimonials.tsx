"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="relative w-full py-24 bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
            <p className="text-brand-cyan text-[10px] font-mono font-bold tracking-widest uppercase">
              CLIENT TESTIMONIALS
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Loved By Tech Leaders
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-[#0b0f19]/70 border border-white/5 rounded-3xl p-8 sm:p-12 backdrop-blur-md">
          {/* Quote mark decorator */}
          <div className="absolute top-8 left-8 text-white/5 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1px] fill-white/5" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            
            {/* Stars Rating */}
            <div className="flex items-center gap-1">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-2xl text-white/90 leading-relaxed font-medium max-w-3xl italic">
              &ldquo;{activeTestimonial.quote}&rdquo;
            </blockquote>

            {/* Reviewer Details */}
            <div className="flex flex-col items-center space-y-2 pt-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-indigo to-brand-cyan flex items-center justify-center text-white font-mono font-bold text-lg shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                {activeTestimonial.author[0]}
              </div>
              <div>
                <cite className="not-italic text-sm font-bold text-white font-mono">{activeTestimonial.author}</cite>
                <p className="text-xs text-white/45 font-mono uppercase mt-0.5">{activeTestimonial.role}</p>
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5 relative z-20">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${activeIndex === idx ? "bg-brand-cyan w-6" : "bg-white/20"}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Testimonials;
