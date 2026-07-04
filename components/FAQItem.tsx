"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const FAQItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-xl border transition-all duration-300 ${isOpen ? "bg-slate-900/35 border-brand-indigo/50 shadow-[0_0_15px_rgba(99,102,241,0.05)]" : "bg-[#0b0f19]/65 border-white/5"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left p-6 outline-none cursor-pointer"
      >
        <span className="text-sm sm:text-base font-semibold text-white/90 group-hover:text-white pr-4">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/60 transition-all ${isOpen ? "text-brand-cyan rotate-90 border-brand-cyan/20 bg-brand-cyan/5" : ""}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <div
        className={`transition-all duration-350 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] border-t border-white/5 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <p className="p-6 text-xs sm:text-sm text-white/55 leading-relaxed bg-[#02050c]/30">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
