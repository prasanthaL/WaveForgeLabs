import React from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { NewsletterForm } from "./NewsletterForm";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-950/80 border-t border-white/5 py-12 sm:py-16 md:py-20 px-6 lg:px-12 overflow-hidden">
      {/* Decorative ambient glow highlights */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5 relative z-10">
        {/* Left Column: Brand Statement */}
        <div className="md:col-span-6 space-y-6">
          <Link href="/#home" className="flex flex-col items-center justify-center group select-none w-[130px]">
            {/* ZENTRAVO text */}
            <div className="text-base sm:text-lg font-black tracking-[0.04em] uppercase font-sans leading-none flex items-center gap-0.5">
              <span className="text-white group-hover:text-slate-200 transition-colors">ZEN</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo">TRAVO</span>
            </div>
            {/* — LABS — subtext */}
            <div className="flex items-center gap-1.5 mt-1.5 w-full justify-center">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-brand-cyan/50" />
              <span className="text-[8px] font-bold tracking-[0.35em] text-brand-cyan uppercase leading-none pl-[0.35em]">
                LABS
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-brand-cyan/50" />
            </div>
          </Link>
          <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-sm">
            We engineer high-end software solutions, intelligent AI models, and optimized cloud architectures to push the boundaries of digital capability.
          </p>
          {/* Social Icons (Hidden as per request)
          <div className="flex items-center gap-4 pt-2">
            <a href="https://github.com" aria-label="GitHub" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/55 hover:text-[#06b6d4] hover:bg-white/10 hover:border-white/10 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/55 hover:text-[#06b6d4] hover:bg-white/10 hover:border-white/10 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764.784 1.764 1.75 1.764.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/55 hover:text-[#06b6d4] hover:bg-white/10 hover:border-white/10 transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
          */}
        </div>

        {/* Middle Column: Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white/80">Navigation</h4>
          <ul className="space-y-2 text-xs font-mono text-white/45">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-[#06b6d4] transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Column: Services */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white/80">Services</h4>
          <ul className="space-y-2 text-xs font-mono text-white/45">
            <li><Link href="/#services" className="hover:text-[#06b6d4] transition-colors">Custom Software Development</Link></li>
            <li><Link href="/#services" className="hover:text-[#06b6d4] transition-colors">Mobile App Development</Link></li>
            <li><Link href="/#services" className="hover:text-[#06b6d4] transition-colors">Cloud Solutions & DevOps</Link></li>
            <li><Link href="/#services" className="hover:text-[#06b6d4] transition-colors">AI & Machine Learning</Link></li>
            <li><Link href="/#services" className="hover:text-[#06b6d4] transition-colors">IT Consulting & Architecture</Link></li>
          </ul>
        </div>

        {/* Right Column: Newsletter Subscription (Hidden as per request)
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white/80">Subscribe to Logs</h4>
          <p className="text-xs text-white/50 leading-relaxed">
            Get monthly technical briefs from the lab straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
        */}
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-4 relative z-10">
        <p>&copy; {new Date().getFullYear()} Zentravo Labs. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
