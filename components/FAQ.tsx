import React from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/constants";

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

        {/* FAQs Accordion List using native details/summary */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-xl border border-white/5 bg-[#0b0f19]/65 transition-all duration-300 open:bg-slate-900/35 open:border-brand-indigo/50 overflow-hidden"
            >
              <summary className="w-full flex items-center justify-between text-left p-6 outline-none cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none">
                <span className="text-sm sm:text-base font-semibold text-white/90 group-open:text-white pr-4">
                  {faq.question}
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/60 transition-all group-open:text-brand-cyan group-open:rotate-90 group-open:border-brand-cyan/20 group-open:bg-brand-cyan/5">
                  <Plus className="w-4 h-4 block group-open:hidden" />
                  <Minus className="w-4 h-4 hidden group-open:block" />
                </div>
              </summary>
              <div className="border-t border-white/5 p-6 text-xs sm:text-sm text-white/55 leading-relaxed bg-[#02050c]/30">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};
export default FAQ;
