import React from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { NewsletterForm } from "./NewsletterForm";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#02050c] border-t border-white/5 pt-16 pb-8 px-6 lg:px-12 relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5 relative z-10">
        {/* Left Column: Brand Statement */}
        <div className="md:col-span-4 space-y-6">
          <a href="#home" className="flex flex-col items-center justify-center group select-none w-[130px]">
            {/* WAVEFORGE text */}
            <div className="text-base sm:text-lg font-black tracking-[0.04em] uppercase font-sans leading-none flex items-center gap-0.5">
              <span className="text-white group-hover:text-slate-200 transition-colors">WAVE</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo">FORGE</span>
            </div>
            {/* — LABS — subtext */}
            <div className="flex items-center gap-1.5 mt-1.5 w-full justify-center">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-brand-cyan/50" />
              <span className="text-[8px] font-bold tracking-[0.35em] text-brand-cyan uppercase leading-none pl-[0.35em]">
                LABS
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-brand-cyan/50" />
            </div>
          </a>
          <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-sm">
            We forge high-end software solutions, intelligent AI models, and optimized cloud architectures to push the boundaries of digital capability.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-2">
            <a href="https://github.com" aria-label="GitHub" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/55 hover:text-[#06b6d4] hover:bg-white/10 hover:border-white/10 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/55 hover:text-[#06b6d4] hover:bg-white/10 hover:border-white/10 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764.784 1.764 1.75 1.764.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/55 hover:text-[#06b6d4] hover:bg-white/10 hover:border-white/10 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white/80">Navigation</h4>
          <ul className="space-y-2 text-xs font-mono text-white/45">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-[#06b6d4] transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Column: Services */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white/80">Services</h4>
          <ul className="space-y-2 text-xs font-mono text-white/45">
            <li><a href="#services" className="hover:text-[#06b6d4] transition-colors">Custom Software Development</a></li>
            <li><a href="#services" className="hover:text-[#06b6d4] transition-colors">Mobile App Development</a></li>
            <li><a href="#services" className="hover:text-[#06b6d4] transition-colors">Cloud Solutions & DevOps</a></li>
            <li><a href="#services" className="hover:text-[#06b6d4] transition-colors">AI & Machine Learning</a></li>
            <li><a href="#services" className="hover:text-[#06b6d4] transition-colors">IT Consulting & Architecture</a></li>
          </ul>
        </div>

        {/* Right Column: Newsletter Subscription */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white/80">Subscribe to Logs</h4>
          <p className="text-xs text-white/50 leading-relaxed">
            Get monthly technical briefs from the forge straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-4 relative z-10">
        <p>&copy; {new Date().getFullYear()} WaveForge Labs. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
