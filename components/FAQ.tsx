import React from "react";
import { FAQS } from "@/lib/constants";
import { FAQItem } from "./FAQItem";

export const FAQ: React.FC = () => {
  return (
    <section id="faqs" className="relative w-full py-24 bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Background glow highlights */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse"></span>
            <p className="text-brand-indigo text-[10px] font-mono font-bold tracking-widest uppercase">
              FAQ
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Frequently Asked
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo">Questions</span>
          </h2>
          <p className="text-white/50 text-xs sm:text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Common questions regarding our engineering workflow, tools, database structures, and pricing contracts.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};
export default FAQ;
