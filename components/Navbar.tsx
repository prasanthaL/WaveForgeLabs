import React from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { Button } from "./Button";

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Header Strip - static and clean */}
      <div className="hidden md:flex w-full bg-slate-950/80 border-b border-white/5 py-2 px-6 lg:px-12 items-center justify-between text-xs text-white/50 h-9">
        <div className="flex items-center gap-6">
          <a href="tel:+14375527590" className="flex items-center gap-1.5 hover:text-[#06b6d4] transition-colors">
            <Phone className="w-3 h-3 text-[#06b6d4]" />
            <span>+1 (437) 552-7590</span>
          </a>
          <a href="mailto:waveforgelabs@gmail.com" className="flex items-center gap-1.5 hover:text-[#06b6d4] transition-colors">
            <Mail className="w-3 h-3 text-[#06b6d4]" />
            <span>waveforgelabs@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#06b6d4]" />
            <span>Canada</span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="w-full py-4 bg-slate-950/85 backdrop-blur-md border-b border-white/5 shadow-lg relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo - WaveForge Labs */}
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

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono tracking-widest text-white/70 hover:text-white uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button variant="cyan" size="sm">
                Inquire Now
              </Button>
            </a>
          </div>

          {/* Pure CSS Checkbox Mobile Toggle Hack */}
          <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />

          {/* Menu triggers */}
          <label
            htmlFor="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white cursor-pointer relative z-50 peer-checked:[&>.menu-icon]:hidden peer-checked:[&>.close-icon]:block"
          >
            <Menu className="w-5 h-5 menu-icon block" />
            <X className="w-5 h-5 close-icon hidden" />
          </label>

          {/* Mobile Dropdown Menu - toggled by checkbox state */}
          <div
            className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 border-b border-white/5 backdrop-blur-xl transition-all duration-300 overflow-hidden max-h-0 opacity-0 border-b-0 peer-checked:max-h-[400px] peer-checked:opacity-100 peer-checked:border-b"
          >
            <div className="flex flex-col gap-5 p-6 font-mono text-center">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs tracking-widest text-white/70 hover:text-white uppercase py-1.5 transition-colors border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact">
                <Button variant="cyan" size="sm" className="w-full mt-2">
                  Inquire Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
