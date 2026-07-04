"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Play, Server, Cpu, ShieldCheck } from "lucide-react";
import { Button } from "./Button";
import { CLIENT_LOGOS } from "@/lib/constants";

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class for the wave simulation
    class WaveParticle {
      x: number;
      baseY: number;
      y: number;
      angle: number;
      speed: number;
      amplitude: number;
      size: number;
      color: string;

      constructor(x: number, baseY: number, index: number) {
        this.x = x;
        this.baseY = baseY;
        this.y = baseY;
        this.angle = index * 0.08;
        this.speed = 0.015 + Math.random() * 0.01;
        this.amplitude = 15 + Math.random() * 35;
        this.size = Math.random() * 1.5 + 0.5;

        const colors = [
          "rgba(6, 182, 212, 0.2)",  // Cyan
          "rgba(99, 102, 241, 0.25)", // Indigo
          "rgba(168, 85, 247, 0.15)", // Purple
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(mouseX: number, mouseY: number) {
        this.angle += this.speed;

        // Calculate standard wave height
        let waveHeight = Math.sin(this.angle) * this.amplitude;

        // Interaction with mouse
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          // Displace particle away from mouse slightly
          waveHeight -= (dy / dist) * force * 50;
        }

        this.y = this.baseY + waveHeight;
      }

      draw(c: CanvasRenderingContext2D) {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
      }
    }

    // Set up particles in multiple wave layers
    const particles: WaveParticle[] = [];
    const density = 6; // px between particles
    const layers = [
      { yRatio: 0.45, amp: 20 },
      { yRatio: 0.55, amp: 30 },
      { yRatio: 0.65, amp: 25 },
    ];

    layers.forEach((layer) => {
      const baseY = height * layer.yRatio;
      for (let x = 0; x < width; x += density) {
        particles.push(new WaveParticle(x, baseY, x / density));
      }
    });

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const animate = () => {
      ctx.fillStyle = "rgba(3, 7, 18, 0.08)"; // Leave trace trails for liquid wave feeling
      ctx.fillRect(0, 0, width, height);

      // Draw horizontal grid lines behind particles
      ctx.strokeStyle = "rgba(255, 255, 255, 0.01)";
      ctx.lineWidth = 1;
      const step = 80;
      for (let i = 0; i < height; i += step) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
      }

      particles.forEach((p) => {
        p.update(mouse.x, mouse.y);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-slate-950 flex flex-col justify-between pt-32 pb-12 overflow-hidden"
    >
      {/* Background Interactive Wave Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none"
      />

      {/* Decorative Gradient Overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-indigo/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-center items-center text-center max-w-5xl mt-12 md:mt-20">

        {/* Glow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md animate-blur-reveal">
          <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse"></span>
          <p className="text-[#06b6d4] text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase">
            NOW LEADING THE DIGITAL FORGE
          </p>
        </div>

        {/* Cinematic Typography Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl tracking-tight leading-[1.05] text-white/95 font-sans font-black uppercase select-none animate-blur-reveal">
          Forging the Digital
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-indigo-300 to-brand-indigo mt-1">
            Wave of Tomorrow
          </span>
        </h1>

        {/* Italic Serif Highlight */}
        <p className="text-white/60 text-sm sm:text-lg md:text-xl font-display italic mt-6 max-w-2xl animate-fade-up animation-delay-200">
          We combine code craftsmanship and cognitive intelligence to build premium software systems for global brands.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 animate-fade-up animation-delay-400">
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

        {/* Grid Stats Counters - inspired by Image 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 pt-16 mt-16 border-t border-white/5 w-full max-w-4xl animate-fade-up animation-delay-600">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-brand-cyan mb-1">
              <Server className="w-4 h-4" />
              <span className="text-xs font-mono tracking-wider text-white/40 uppercase">Products Forged</span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">45+</p>
          </div>

          <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-white/5 py-4 sm:py-0">
            <div className="flex items-center gap-2 text-brand-indigo mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-mono tracking-wider text-white/40 uppercase">AI Systems Deployed</span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">18</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-[#ec4899] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-mono tracking-wider text-white/40 uppercase">System Uptime</span>
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">99.99%</p>
          </div>
        </div>
      </div>

      {/* Brand Logos Footer strip - inspired by Image 1, 2, 5 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 mt-12 sm:mt-16 pt-6 border-t border-white/5">
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
