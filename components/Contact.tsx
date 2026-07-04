import React from "react";
import { Mail, Phone, MapPin, CheckCircle, Send, ShieldCheck, Database, Award, Clock, ArrowRight } from "lucide-react";
import { Button } from "./Button";

export const Contact: React.FC<{ searchParams?: { [key: string]: string | undefined } }> = ({ searchParams }) => {
  const submitted = searchParams?.submitted === "true";
  const contactName = searchParams?.name || "there";

  return (
    <section id="contact" className="relative w-full py-24 bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brand-indigo/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/25 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse"></span>
            <p className="text-brand-indigo text-[10px] font-mono font-bold tracking-widest uppercase">
              HAVE QUESTIONS
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Start Your Software
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo mt-1">
              Development Journey
            </span>
          </h2>
          <p className="text-white/50 text-xs sm:text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Tell us about your project idea. Our senior architect reviews all inquiries within 12 business hours and provides a free technical assessment.
          </p>
        </div>

        {/* Form & Info Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Quick Contact Info & Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">Why Partner With Us?</h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: ShieldCheck,
                    color: "text-brand-cyan",
                    bg: "bg-brand-cyan/10",
                    title: "Full IP & Code Ownership",
                    desc: "You own 100% of the source code, database schemas, and deployment pipelines we build.",
                  },
                  {
                    icon: Database,
                    color: "text-brand-indigo",
                    bg: "bg-brand-indigo/10",
                    title: "Elastic Team Delivery",
                    desc: "Scale your sprint velocity up or down dynamically depending on project requirements.",
                  },
                  {
                    icon: Award,
                    color: "text-pink-400",
                    bg: "bg-pink-500/10",
                    title: "Security-First Architecture",
                    desc: "All systems are security audited, penetration tested, and load-tested for global scale.",
                  },
                  {
                    icon: Clock,
                    color: "text-amber-400",
                    bg: "bg-amber-500/10",
                    title: "12-Hour Response Guarantee",
                    desc: "Every inquiry is reviewed by a senior architect within 12 business hours, guaranteed.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300 group animate-blur-reveal">
                    <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center ${item.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">{item.title}</h4>
                      <p className="text-xs text-white/50 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              <h4 className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Direct Contact</h4>
              <div className="space-y-3">
                <a href="mailto:hello@waveforgelabs.com" className="flex items-center gap-3 text-xs sm:text-sm text-white/60 hover:text-brand-cyan transition-colors group">
                  <Mail className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" />
                  <span>hello@waveforgelabs.com</span>
                  <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="tel:+14375527590" className="flex items-center gap-3 text-xs sm:text-sm text-white/60 hover:text-brand-cyan transition-colors group">
                  <Phone className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" />
                  <span>+1 (437) 552-7590</span>
                  <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white/60">
                  <MapPin className="w-4 h-4 text-brand-cyan" />
                  <span>Canada</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b0f19]/70 border border-white/5 rounded-3xl p-8 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-center h-full">
              {/* Decorative corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-brand-cyan/5 blur-[60px] pointer-events-none" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center space-y-6 py-12 animate-blur-reveal">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/15 border border-brand-cyan flex items-center justify-center text-brand-cyan shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans uppercase">Inquiry Received!</h3>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed max-w-sm mt-3">
                      Thank you, {contactName}. Our engineering team has received your inquiry. We&apos;ll respond within 12 business hours.
                    </p>
                  </div>
                  <a href="?#contact">
                    <Button variant="secondary" size="sm">
                      Submit Another Inquiry
                    </Button>
                  </a>
                </div>
              ) : (
                <form action="?#contact" method="GET" className="space-y-6">
                  <input type="hidden" name="submitted" value="true" />
                  {/* Form header */}
                  <div className="pb-4 border-b border-white/5">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                      <Send className="w-4 h-4 text-brand-cyan" />
                      Project Inquiry Form
                    </h3>
                    <p className="text-[10px] text-white/30 mt-1 font-mono">All fields marked are required for accurate assessment</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest block">Contact Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. John Doe"
                        className="w-full bg-white/5 border border-white/5 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-white/20 outline-none focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/20 transition-all font-mono"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest block">Company Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. jdoe@company.com"
                        className="w-full bg-white/5 border border-white/5 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-white/20 outline-none focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/20 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest block">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="e.g. WaveForge Inc."
                        className="w-full bg-white/5 border border-white/5 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-white/20 outline-none focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/20 transition-all font-mono"
                      />
                    </div>
                    {/* Budget Dropdown */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest block">Estimated Budget</label>
                      <select
                        name="budget"
                        className="w-full bg-[#0b0f19] border border-white/5 rounded-xl py-3 px-4 text-xs sm:text-sm text-white/70 outline-none focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/20 transition-all font-mono appearance-none cursor-pointer"
                      >
                        <option value="< $10,000">&lt; $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest block">Project Details</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Describe your project idea, core features, target audience, and any specific technology requirements..."
                      className="w-full bg-white/5 border border-white/5 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-white/20 outline-none focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/20 transition-all font-mono resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    variant="cyan"
                    className="w-full justify-center gap-2"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
