"use client";

import React, { useState } from "react";
import { Check, Calculator as CalcIcon } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import { Button } from "./Button";

export const Calculator: React.FC = () => {
  // Calculator selection states
  const [projectType, setProjectType] = useState("web");
  const [projectSize, setProjectSize] = useState("medium");
  const [timeline, setTimeline] = useState("standard");
  const [customFeatures, setCustomFeatures] = useState<string[]>([]);

  // Base pricing configurations
  const basePrices: Record<string, number> = {
    web: 8000,
    mobile: 10000,
    ai: 12000,
    cloud: 6000,
    full: 16000,
  };

  const sizeMultipliers: Record<string, number> = {
    small: 1.0,
    medium: 1.6,
    enterprise: 2.5,
  };

  const timelineMultipliers: Record<string, number> = {
    urgent: 1.3,
    standard: 1.0,
    flexible: 0.9,
  };

  const featureAddons = [
    { id: "db", label: "Custom Database Architecture", price: 1500 },
    { id: "auth", label: "Multi-role Auth & Security", price: 1000 },
    { id: "analytics", label: "Data Analytics & Dashboard", price: 2000 },
    { id: "payments", label: "Subscription & Payments Flow", price: 1200 },
  ];

  // Calculate overall estimation
  const calculateTotal = () => {
    const base = basePrices[projectType] || 8000;
    const sizeMult = sizeMultipliers[projectSize] || 1.6;
    const timeMult = timelineMultipliers[timeline] || 1.0;
    
    let addonsTotal = 0;
    customFeatures.forEach((fid) => {
      const found = featureAddons.find((f) => f.id === fid);
      if (found) addonsTotal += found.price;
    });

    return Math.round((base * sizeMult * timeMult) + addonsTotal);
  };

  const handleFeatureToggle = (fid: string) => {
    if (customFeatures.includes(fid)) {
      setCustomFeatures(customFeatures.filter((id) => id !== fid));
    } else {
      setCustomFeatures([...customFeatures, fid]);
    }
  };

  const formattedEstimate = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(calculateTotal());

  return (
    <section id="calculator" className="relative w-full py-24 bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-indigo/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse"></span>
            <p className="text-brand-indigo text-[10px] font-mono font-bold tracking-widest uppercase">
              ENGAGEMENT & ESTIMATOR
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Plans & Project Calculator
          </h2>
          <p className="text-white/50 text-xs sm:text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Get an instant estimate for your digital product, or browse our standardized bi-weekly development sprint engagements.
          </p>
        </div>

        {/* Outer Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left: Project Estimator Form Widget */}
          <div className="lg:col-span-7 bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-2 border-b border-white/5 pb-4 mb-6">
              <CalcIcon className="w-5 h-5 text-brand-cyan" />
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">PROJECT ESTIMATOR</h3>
            </div>

            <div className="space-y-6">
              {/* Category 1: Project Type */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold text-white/55 uppercase tracking-wider block">
                  1. Project Classification
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { id: "web", label: "Web Application" },
                    { id: "mobile", label: "Mobile App" },
                    { id: "ai", label: "AI Agent / LLM" },
                    { id: "cloud", label: "Cloud & DevOps" },
                    { id: "full", label: "Full Tech Suite" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setProjectType(item.id)}
                      className={`py-3 px-4 rounded-xl border text-center transition-all duration-300 cursor-pointer ${projectType === item.id ? "bg-brand-cyan/10 border-brand-cyan text-brand-cyan shadow-[0_0_10px_rgba(6,182,212,0.1)]" : "bg-white/5 border-white/5 hover:border-white/10 text-white/60 hover:text-white"}`}
                    >
                      <span className="text-xs font-semibold block">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category 2: Scale & Complexity */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold text-white/55 uppercase tracking-wider block">
                  2. System Scale & Complexity
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "small", label: "MVP / Startup", desc: "Base features" },
                    { id: "medium", label: "Scale / Growth", desc: "Robust API" },
                    { id: "enterprise", label: "Enterprise", desc: "High-Scale" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setProjectSize(item.id)}
                      className={`py-3 px-4 rounded-xl border text-center transition-all duration-300 cursor-pointer ${projectSize === item.id ? "bg-brand-indigo/10 border-brand-indigo text-brand-indigo shadow-[0_0_10px_rgba(99,102,241,0.1)]" : "bg-white/5 border-white/5 hover:border-white/10 text-white/60 hover:text-white"}`}
                    >
                      <span className="text-xs font-semibold block">{item.label}</span>
                      <span className="text-[9px] text-white/40 block mt-0.5">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category 3: Timeline speed */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold text-white/55 uppercase tracking-wider block">
                  3. Delivery Timeline
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "flexible", label: "Flexible", desc: "4+ Months" },
                    { id: "standard", label: "Standard", desc: "2-3 Months" },
                    { id: "urgent", label: "Urgent Sprints", desc: "< 1 Month" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setTimeline(item.id)}
                      className={`py-3 px-4 rounded-xl border text-center transition-all duration-300 cursor-pointer ${timeline === item.id ? "bg-purple-500/10 border-purple-500 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.1)]" : "bg-white/5 border-white/5 hover:border-white/10 text-white/60 hover:text-white"}`}
                    >
                      <span className="text-xs font-semibold block">{item.label}</span>
                      <span className="text-[9px] text-white/40 block mt-0.5">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category 4: Addons Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-mono font-bold text-white/55 uppercase tracking-wider block">
                  4. Core Addon Integrations
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featureAddons.map((addon) => {
                    const isChecked = customFeatures.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => handleFeatureToggle(addon.id)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${isChecked ? "bg-white/10 border-white/20 text-white" : "bg-white/5 border-white/5 hover:border-white/10 text-white/60"}`}
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${isChecked ? "bg-brand-cyan border-brand-cyan" : "border-white/20 bg-transparent"}`}>
                          {isChecked && <Check className="w-3 h-3 text-slate-950 stroke-[3px]" />}
                        </div>
                        <div className="flex-1">
                          <span className="text-[11px] font-semibold block leading-tight">{addon.label}</span>
                          <span className="text-[9px] text-brand-cyan font-mono block mt-0.5">+${addon.price.toLocaleString()}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Total Estimation breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-brand-cyan/5 blur-[50px] pointer-events-none" />
            
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold text-white/40 uppercase tracking-widest block">YOUR ESTIMATED RANGE</span>
              
              <div className="py-6 border-y border-white/5 flex flex-col justify-center items-center text-center">
                <p className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tighter">
                  {formattedEstimate}
                </p>
                <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase mt-2">
                  *Rough baseline development cost
                </span>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold text-white/70 uppercase">Estimation Includes:</h4>
                <ul className="space-y-2.5 text-xs text-white/55">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>Clean code built with Next.js, React, and TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>Responsive visual optimization for desktop & mobile</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>Standard load deployment to vercel edge architecture</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <a href="#contact">
                <Button variant="cyan" className="w-full justify-center">
                  Lock Estimate & Send Brief
                </Button>
              </a>
            </div>
          </div>

        </div>

        {/* Sprint pricing plans cards - inspired by Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${plan.popular ? "bg-[#0b0f19] border-2 border-brand-indigo/80 shadow-[0_0_30px_rgba(99,102,241,0.15)] md:-translate-y-2" : "bg-[#0b0f19]/60 border border-white/5"}`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-brand-indigo text-white font-mono text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-widest select-none">
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-[#06b6d4] uppercase font-bold">{plan.name}</h4>
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tighter">{plan.price}</span>
                    <span className="text-xs text-white/40 lowercase font-mono">/{plan.period}</span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed mt-4">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 pt-6 border-t border-white/5 text-xs text-white/70">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a href="#contact">
                  <Button variant={plan.popular ? "primary" : "secondary"} className="w-full justify-center text-xs">
                    {plan.cta}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Calculator;
