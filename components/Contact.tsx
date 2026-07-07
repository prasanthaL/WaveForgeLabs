"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, Send, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { sendEmail } from "@/app/actions/sendEmail";

export const Contact: React.FC<{ searchParams?: { [key: string]: string | undefined } }> = ({ searchParams }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(searchParams?.submitted === "true");
  const [contactName, setContactName] = useState(searchParams?.name || "there");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    setContactName(name || "there");

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-slate-950 px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brand-indigo/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
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
            Tell us about your project idea. Our senior architect reviews all messages within 12 business hours and provides a free technical assessment.
          </p>
        </motion.div>

        {/* Form & Info Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <motion.h3
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-lg font-bold text-white uppercase tracking-wider font-mono"
              >
                Contact Information
              </motion.h3>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                Have a project in mind, or want to explore digital capabilities? Let&apos;s connect. Drop a message, call us, or visit our office.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="space-y-4 pt-4"
              >
                {/* Email Card */}
                <motion.a
                  href="mailto:waveforgelabs@gmail.com"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/20 hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-white/40 uppercase tracking-wider">Email Us</h4>
                    <p className="text-sm font-semibold text-white mt-1 group-hover:text-brand-cyan transition-colors">zentravolabs@gmail.com</p>
                  </div>
                </motion.a>

                {/* Phone Card */}
                <motion.a
                  href="tel:+14375527590"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/20 hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-white/40 uppercase tracking-wider">Call Us</h4>
                    <p className="text-sm font-semibold text-white mt-1 group-hover:text-brand-cyan transition-colors">+1 (437) 552-7590</p>
                  </div>
                </motion.a>

                {/* Office Address Card */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-white/40 uppercase tracking-wider">Headquarters</h4>
                    <p className="text-sm font-semibold text-white mt-1">Toronto, Ontario, Canada</p>
                    <p className="text-xs text-white/50 leading-relaxed mt-1 hidden">100 King Street West, Suite 5700, M5X 1C7</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Hours / SLA Notice */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-5 rounded-2xl bg-brand-indigo/5 border border-brand-indigo/10 flex gap-4 items-center mt-6"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-indigo/10 flex items-center justify-center text-brand-indigo shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[10px] font-mono font-bold text-brand-indigo uppercase tracking-wider">Review Guarantee</h4>
                <p className="text-xs text-white/70 leading-relaxed mt-0.5">Architects review all project messages within 12 business hours.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Project Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0b0f19]/70 border border-white/5 rounded-3xl p-8 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-center h-full">
              {/* Decorative corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-brand-cyan/5 blur-[60px] pointer-events-none" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center space-y-6 py-12 animate-blur-reveal">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/15 border border-brand-cyan flex items-center justify-center text-brand-cyan shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans uppercase">Message Received!</h3>
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed max-w-sm mt-3">
                      Thank you, {contactName}. Our engineering team has received your message. We&apos;ll respond within 12 business hours.
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage(null);
                    }}
                  >
                    Submit Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form header */}
                  <div className="pb-4 border-b border-white/5">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                      <Send className="w-4 h-4 text-brand-cyan" />
                      Send Message
                    </h3>
                    <p className="text-[10px] text-white/30 mt-1 font-mono">Fill in all fields for a detailed assessment</p>
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shrink-0"></span>
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <div className="space-y-2">
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
                  </div>

                  <div className="space-y-2">
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest block">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. jdoe@company.com"
                        className="w-full bg-white/5 border border-white/5 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-white/20 outline-none focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/20 transition-all font-mono"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest block">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your project idea, core features, target audience, and any specific technology requirements..."
                      className="w-full bg-white/5 border border-white/5 rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-white/20 outline-none focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/20 transition-all font-mono resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    variant="cyan"
                    className="w-full justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <Send className={`w-4 h-4 ${isSubmitting ? "animate-pulse" : ""}`} />
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
