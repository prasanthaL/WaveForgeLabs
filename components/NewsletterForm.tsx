"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 rounded-full py-2.5 px-4 animate-blur-reveal">
        <Check className="w-4 h-4 shrink-0" />
        <span>Subscribed successfully!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center relative">
      <input
        type="email"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className="w-full bg-white/5 border border-white/5 rounded-full py-2.5 pl-4 pr-12 text-xs text-white placeholder-white/20 outline-none focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/20 transition-all font-mono disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="absolute right-1 w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center text-white hover:brightness-110 active:scale-90 transition-all cursor-pointer disabled:opacity-50"
        aria-label="Subscribe to newsletter"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};
