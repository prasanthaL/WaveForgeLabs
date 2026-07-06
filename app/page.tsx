import React from "react";
import Navbar from "@/components/Navbar";
import HomeContent from "@/components/HomeContent";
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

      {/* Main landing page content inside Client Component */}
      <HomeContent searchParams={resolvedSearchParams} />

      {/* Global Footer footer */}
      <Footer />
    </div>
  );
}
export const dynamic = "force-static";
