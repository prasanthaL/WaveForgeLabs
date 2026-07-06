import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Zentravo Labs",
  description: "Learn how Zentravo Labs collects, uses, and safeguards your data and personal information in compliance with global standards.",
};

export default function PrivacyPage() {
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
                LEGAL POLICIES
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-white/40 font-mono">
              Last Updated: July 6, 2026
            </p>
          </div>

          {/* Quick Summary Glass Panel */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/5 space-y-4 bg-slate-900/20 backdrop-blur-md animate-fade-up">
            <h2 className="text-sm font-bold font-mono text-brand-cyan uppercase tracking-wider">
              Privacy Summary
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              At Zentravo Labs, your privacy is a priority. We collect only essential information required to offer our services, communicate project status, and optimize website experiences. We never sell your personal data.
            </p>
          </div>

          {/* Detailed Policy Text */}
          <div className="space-y-8 text-white/70 leading-relaxed text-sm sm:text-base animate-fade-up">
            
            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide font-mono flex items-center gap-2">
                <span className="text-brand-cyan">1.</span> Information We Collect
              </h2>
              <p>
                We may collect data that you provide to us directly through contact forms, emails, and direct consultations. This information includes:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-white/60">
                <li>Personal details (Name, company name, professional email address).</li>
                <li>Project scopes, technical requests, and related communication logs.</li>
                <li>Usage statistics and technical metadata collected via web analytic trackers.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide font-mono flex items-center gap-2">
                <span className="text-brand-cyan">2.</span> How We Use Your Data
              </h2>
              <p>
                Zentravo Labs uses collected information for standard operational and improvement purposes:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-white/60">
                <li>To evaluate project assessments and respond to development requests.</li>
                <li>To execute service agreements, build pipelines, and deliver database infrastructures.</li>
                <li>To analyze website statistics and diagnostic bugs to enhance overall rendering speed and performance.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide font-mono flex items-center gap-2">
                <span className="text-brand-cyan">3.</span> Sharing & Disclosures
              </h2>
              <p>
                We do not sell, rent, or distribute personal information to third parties. We may disclose data only under the following exceptions:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-white/60">
                <li><strong>With Consent:</strong> When you authorize sharing for joint integrations or third-party cloud hosting setups.</li>
                <li><strong>Service Providers:</strong> Under strict NDA agreements, with verified sub-contractors or tool operators assisting in operations.</li>
                <li><strong>Legal Requirements:</strong> If compelled by local or federal law enforcement authorities inside Canada or valid international jurisdictions.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide font-mono flex items-center gap-2">
                <span className="text-brand-cyan">4.</span> Security & Storage
              </h2>
              <p>
                All data is encrypted both in transit (SSL/TLS) and at rest. We follow strict administrative and technical policies to ensure database nodes and code repositories remain safe from unauthorized access.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide font-mono flex items-center gap-2">
                <span className="text-brand-cyan">5.</span> Your Choices & Rights
              </h2>
              <p>
                Depending on your local regulations (including GDPR, CCPA, or PIPEDA), you have rights regarding your information:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-white/60">
                <li>Right to access, edit, or delete stored personal details.</li>
                <li>Right to object or restrict processing of communication logs.</li>
              </ul>
              <p>
                To request data retrieval or deletion, contact our privacy officer at <a href="mailto:waveforgelabs@gmail.com" className="text-brand-cyan hover:underline">waveforgelabs@gmail.com</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide font-mono flex items-center gap-2">
                <span className="text-brand-cyan">6.</span> Policy Updates
              </h2>
              <p>
                We may revise this policy occasionally. Any changes will be posted on this page with an updated timestamp.
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
