import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Technologies from "@/components/Technologies";
// import Portfolio from "@/components/Portfolio";
// import Calculator from "@/components/Calculator";
// import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-brand-cyan selection:text-slate-950">
      {/* Navigation Header bar */}
      <Navbar />

      <main>
        {/* Hero Segment */}
        <Hero />

        {/* Methodology Lifecycle Timeline - About */}
        <Process />

        {/* Services & Capabilities grid - Services */}
        <Capabilities />

        {/* Technologies showcase */}
        <Technologies />

        {/* Why Choose WaveForge Labs Section */}
        <WhyChoose />

        {/* Portfolio Products Dashboard (Hidden for now) */}
        {/* <Portfolio /> */}

        {/* Engagement pricing & project calculator (Hidden for now) */}
        {/* <Calculator /> */}

        {/* Client Reviews carousel slider (Hidden for now) */}
        {/* <Testimonials /> */}

        {/* FAQ Accordion lists */}
        <FAQ />

        {/* Project Contact form briefs - Contact */}
        <Contact searchParams={resolvedSearchParams} />
      </main>

      {/* Global Footer footer */}
      <Footer />
    </div>
  );
}
export const dynamic = "force-static";
