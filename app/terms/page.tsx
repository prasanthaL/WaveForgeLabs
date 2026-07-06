import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Zentravo Labs",
  description: "Review the Terms of Service governing client engagements, code delivery, and digital solutions provided by Zentravo Labs.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-brand-cyan selection:text-slate-950">
      {/* Navigation Bar */}
      <Navbar />

      {/* Decorative Glow Highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-indigo/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 blur-[130px] pointer-events-none" />

      {/* Main Content Layout */}
      <main className="relative z-10 pt-40 pb-24 px-6 lg:px-12 max-w-4xl mx-auto">
        <article className="space-y-12">
          
          {/* Header section */}
          <div className="space-y-4 text-center md:text-left border-b border-white/5 pb-8 animate-blur-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/25">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse"></span>
              <p className="text-brand-indigo text-[10px] font-mono font-bold tracking-widest uppercase">
                TERMS & AGREEMENTS
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Terms of Service
            </h1>
            <p className="text-xs sm:text-sm text-white/40 font-mono">
              Last Updated: July 6, 2026
            </p>
          </div>

          {/* Quick Summary Glass Panel */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/5 space-y-4 bg-slate-900/20 backdrop-blur-md animate-fade-up">
            <h2 className="text-sm font-bold font-mono text-brand-cyan uppercase tracking-wider">
              Service Summary
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              These terms outline client rights, codebase ownership, payment milestones, and limitations governing custom software projects executed by Zentravo Labs. By initiating a project inquiry or signing a service contract, you agree to these terms.
            </p>
          </div>

          {/* Detailed Terms Text */}
          <div className="space-y-8 text-white/70 leading-relaxed text-sm sm:text-base animate-fade-up">
            
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide font-mono flex items-center gap-2">
                <span className="text-brand-cyan">1.</span> Acceptance of Terms
              </h2>
              <p>
                By accessing this website or contracting Zentravo Labs for engineering projects, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide font-mono flex items-center gap-2">
                <span className="text-brand-cyan">2.</span> Scope of Services
              </h2>
              <p>
                Zentravo Labs provides professional full-stack development, mobile application engineering, cloud infrastructure design, and cognitive AI model configurations. Project specifics, features, timelines, and deliverables are governed by individual client Statement of Work (SOW) documents signed separately.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide font-mono flex items-center gap-2">
                <span className="text-brand-cyan">3.</span> Intellectual Property & Code Ownership
              </h2>
              <p>
                Unless stated otherwise in an SOW contract:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-white/60">
                <li>Upon complete clearance of final invoices, the Client owns 100% of the custom source code, databases, design assets, and deployment keys built specifically for them.</li>
                <li>Zentravo Labs retains rights to standard foundational templates, open-source libraries, or proprietary utilities created prior to the engagement.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide font-mono flex items-center gap-2">
                <span className="text-brand-cyan">4.</span> Payments, Milestones & Billing
              </h2>
              <p>
                Clients agree to follow the agreed-upon sprint or milestone payment schedule outlined in their respective project contracts. Custom software builds require upfront deposit clearances prior to repository creation. Late payments may result in active build delays or server deployment suspensions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide font-mono flex items-center gap-2">
                <span className="text-brand-cyan">5.</span> Support & SLA Guarantees
              </h2>
              <p>
                All post-launch support, security maintenance, cloud optimization check-ups, and feature adjustments are governed by individual Service Level Agreements (SLA). We guarantee 12-hour responses for active project maintenance requests during business hours.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide font-mono flex items-center gap-2">
                <span className="text-brand-cyan">6.</span> Limitation of Liability
              </h2>
              <p>
                In no event shall Zentravo Labs be held liable for any secondary, indirect, or consequential damages resulting from platform uptime drops, data leaks on hosting providers, or software dependencies beyond our direct codebase control.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide font-mono flex items-center gap-2">
                <span className="text-brand-cyan">7.</span> Governing Law
              </h2>
              <p>
                These terms shall be governed by, and interpreted in accordance with, the laws of the Province of Ontario and the federal laws of Canada.
              </p>
            </section>

          </div>
        </article>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
