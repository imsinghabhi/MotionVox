"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Send, CheckCircle2, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

interface ContactSectionProps {
  onOpenDemo: () => void;
}

export function ContactSection({ onOpenDemo }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Professional Dubbing",
    budget: "$5,000 - $15,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Direct Call out */}
          <div className="flex flex-col justify-between h-full space-y-8">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#27272A] text-xs font-semibold uppercase tracking-wider text-[#E2E8F0] mb-4">
                  <Sparkles className="w-3.5 h-3.5" /> Start the Conversation
                </div>
                <h2 className="text-4xl sm:text-6xl font-extrabold text-[#FAFAFA] tracking-tight leading-tight">
                  Ready to Scale Your <br />
                  <span className="text-silver-gradient">Media Footprint?</span>
                </h2>
              </div>

              <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed max-w-lg">
                Book a live 1-on-1 demo or submit your project details. We turn media production bottlenecks into scalable growth engines.
              </p>

              {/* Quick Stats / Guarantees */}
              <div className="space-y-4 pt-4 border-t border-[#27272A]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#1C1C1C] text-[#E2E8F0] border border-[#27272A]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#FAFAFA] block">24-Hour Proposal Guarantee</span>
                    <span className="text-xs text-[#A1A1AA]">Our studio team reviews all submissions within 1 business day.</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#1C1C1C] text-[#E2E8F0] border border-[#27272A]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#FAFAFA] block">Direct Studio Email</span>
                    <a href="mailto:hello@motionvox.in" className="text-xs text-[#E2E8F0] hover:underline">
                      hello@motionvox.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#1C1C1C] text-[#E2E8F0] border border-[#27272A]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#FAFAFA] block">Global Production Network</span>
                    <span className="text-xs text-[#A1A1AA]">Delhi • Mumbai • San Francisco • Singapore</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Demo Trigger Card */}
            <div className="p-6 rounded-3xl bg-[#141414] border border-[#27272A] flex items-center justify-between gap-4 shadow-lg studio-noise-bg mt-auto">
              <div>
                <span className="text-xs font-mono text-[#E2E8F0] font-semibold uppercase tracking-wider block mb-1">
                  Prefer a Live Walkthrough?
                </span>
                <span className="text-sm font-bold text-[#FAFAFA] block">
                  Schedule an interactive 1-on-1 demo call.
                </span>
              </div>
              <button
                onClick={onOpenDemo}
                className="px-5 py-3 rounded-full font-semibold text-xs shrink-0 flex items-center gap-2 cursor-pointer bg-[#FAFAFA] hover:bg-[#FFFFFF] text-[#0A0A0A] transition-colors shadow-md"
              >
                <span>Book Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Studio Form */}
          <div className="relative rounded-3xl bg-[#141414] border border-[#27272A] studio-noise-bg p-8 sm:p-10 shadow-2xl flex flex-col justify-between h-full">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1C1C1C] border border-[#27272A] text-[#E2E8F0] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#FAFAFA]">Proposal Request Received!</h3>
                  <p className="text-sm text-[#A1A1AA] max-w-sm mx-auto">
                    Thank you, <span className="text-[#FAFAFA] font-semibold">{formData.name}</span>. Our executive studio team will contact you at <span className="text-[#E2E8F0]">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#1C1C1C] border border-[#27272A] text-xs font-semibold text-[#FAFAFA] hover:border-[#E2E8F0] transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-[#FAFAFA] mb-2">Request Custom Proposal</h3>

                  <div>
                    <label className="block text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-[#27272A] text-[#FAFAFA] placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#E2E8F0] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-[#27272A] text-[#FAFAFA] placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#E2E8F0] transition-colors text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mb-2">
                        Primary Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-[#27272A] text-[#FAFAFA] focus:outline-none focus:border-[#E2E8F0] transition-colors text-sm"
                      >
                        <option value="Professional Dubbing">Professional Dubbing</option>
                        <option value="AI Video Avatars">AI Video Avatars</option>
                        <option value="Multimedia Production">Multimedia Production</option>
                        <option value="Influencer Marketing">Influencer Marketing</option>
                        <option value="Custom Websites">Custom Websites</option>
                        <option value="Workflow Automation">Workflow Automation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-[#27272A] text-[#FAFAFA] focus:outline-none focus:border-[#E2E8F0] transition-colors text-sm"
                      >
                        <option value="< $5,000">&lt; $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000 - $50,000">$15,000 - $50,000</option>
                        <option value="$50,000+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mb-2">
                      Project Details & Timeline
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your objectives, volume, or specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-[#27272A] text-[#FAFAFA] placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#E2E8F0] transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#FAFAFA] hover:bg-[#FFFFFF] text-[#0A0A0A] font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Proposal Request</span>
                  </button>
                </form>
              )}
          </div>
        </div>
      </div>
    </section>
  );

}
