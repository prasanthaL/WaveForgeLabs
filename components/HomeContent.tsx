"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Process from "./Process";
import Capabilities from "./Capabilities";
import Technologies from "./Technologies";
import WhyChoose from "./WhyChoose";
import FAQ from "./FAQ";
import Contact from "./Contact";

interface HomeContentProps {
  searchParams: { [key: string]: string | undefined };
}

export const HomeContent: React.FC<HomeContentProps> = ({ searchParams }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Segment */}
      <Hero />

      {/* Methodology Lifecycle Timeline - About */}
      <Process />

      {/* Services & Capabilities grid - Services */}
      <Capabilities />

      {/* Technologies showcase */}
      <Technologies />

      {/* Why Choose Zentravo Labs Section */}
      <WhyChoose />

      {/* FAQ Accordion lists */}
      <FAQ />

      {/* Project Contact form briefs - Contact */}
      <Contact searchParams={searchParams} />
    </motion.main>
  );
};

export default HomeContent;
