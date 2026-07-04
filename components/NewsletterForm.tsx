"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const NewsletterForm: React.FC = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex items-center relative">
      <input
        type="email"
        placeholder="Enter your email"
        required
        className="w-full bg-white/5 border border-white/5 rounded-full py-2.5 pl-4 pr-12 text-xs text-white placeholder-white/20 outline-none focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/20 transition-all font-mono"
      />
      <button
        type="submit"
        className="absolute right-1 w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center text-white hover:brightness-110 active:scale-90 transition-all cursor-pointer"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};

export default NewsletterForm;
