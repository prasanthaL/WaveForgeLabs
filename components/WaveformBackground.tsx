"use client";

import React, { useState, useEffect } from "react";

export const WaveformBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const barsCount = 90;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return empty placeholder container matching server-side HTML structure to prevent hydration mismatch
    return <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[280px] pointer-events-none z-[5]" />;
  }

  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[280px] flex items-center justify-center gap-[3px] sm:gap-[4px] pointer-events-none z-[5] opacity-60 px-4 overflow-hidden select-none scale-75 sm:scale-100">
      <style>{`
        @keyframes hero-wave-pulse {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(0.35);
          }
        }
        .hero-wave-bar {
          transform-origin: center;
        }
      `}</style>
      
      {Array.from({ length: barsCount }).map((_, i) => {
        const progress = i / (barsCount - 1);
        
        // Envelope makes it taper off at the ends
        const envelope = Math.sin(progress * Math.PI);
        
        // Multi-frequency wave pattern for organic audio feel
        const wave1 = Math.sin(progress * Math.PI * 3);
        const wave2 = Math.sin(progress * Math.PI * 6) * 0.4;
        const wave3 = Math.cos(progress * Math.PI * 12) * 0.15;
        
        // Taller height of the bars to extend beyond the text block (max ~245px)
        const baseHeight = 30 + envelope * (50 + (wave1 + wave2 + wave3) * 110);
        
        // Interpolate colors: Cyan -> Indigo -> Purple
        let r, g, b;
        if (progress < 0.5) {
          const t = progress * 2;
          r = Math.round(6 + (99 - 6) * t);
          g = Math.round(182 + (102 - 182) * t);
          b = Math.round(212 + (241 - 212) * t);
        } else {
          const t = (progress - 0.5) * 2;
          r = Math.round(99 + (168 - 99) * t);
          g = Math.round(102 + (85 - 102) * t);
          b = Math.round(241 + (247 - 241) * t);
        }
        const rgbString = `${r}, ${g}, ${b}`;
        
        // Randomize speed/durations slightly for a more natural look
        const duration = 2.5 + (i % 5) * 0.3; 
        const delay = i * 0.035;

        return (
          <div
            key={i}
            className="hero-wave-bar w-[2.5px] sm:w-[4px] rounded-full transition-all duration-300"
            style={{
              height: `${baseHeight}px`,
              background: `linear-gradient(to bottom, rgba(${rgbString}, 0.05) 0%, rgba(${rgbString}, 1) 50%, rgba(${rgbString}, 0.05) 100%)`,
              boxShadow: `0 0 10px rgba(${rgbString}, 0.35)`,
              animation: `hero-wave-pulse ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default WaveformBackground;
