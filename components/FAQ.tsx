"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/constants";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative w-full py-24 bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Background glow highlights */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
        </motion.div>

        {/* FAQs Accordion List using custom Framer Motion collapsible panels */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="space-y-4"
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "bg-slate-900/35 border-brand-indigo/50" : "bg-[#0b0f19]/65 border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left p-6 outline-none cursor-pointer select-none bg-transparent"
                >
                  <span className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${isOpen ? "text-white" : "text-white/90"}`}>
                    {faq.question}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors duration-300 ${
                      isOpen
                        ? "text-brand-cyan border-brand-cyan/20 bg-brand-cyan/5"
                        : "text-white/60 bg-white/5 border-white/5"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/5 p-6 text-xs sm:text-sm text-white/55 leading-relaxed bg-[#02050c]/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
export default FAQ;
