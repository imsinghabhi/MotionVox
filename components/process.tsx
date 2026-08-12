"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Compass, FileText, Cpu, Film, Zap, Rocket } from "lucide-react";

export function Process() {
  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Discovery & Alignment",
      description:
        "We analyze your brand tone, media objectives, target languages, and existing production workflows to map out high-ROI automation opportunities.",
    },
    {
      number: "02",
      icon: FileText,
      title: "Strategy & Scripting",
      description:
        "Our creative directors craft localized script variations, select optimal voice profiles, and design avatar framing tailored to your audience.",
    },
    {
      number: "03",
      icon: Cpu,
      title: "AI Avatar & Neural Training",
      description:
        "Custom training of photorealistic AI avatars and voice clone models with lip-sync alignment and vocal timbre calibration.",
    },
    {
      number: "04",
      icon: Film,
      title: "Studio Production & Editing",
      description:
        "Master audio engineering, color grading, motion graphics, and multi-stem sound design applied by top industry editors.",
    },
    {
      number: "05",
      icon: Zap,
      title: "Workflow Automation",
      description:
        "Deploy automated rendering pipelines connecting your CMS or media asset management system directly to our AI rendering clusters.",
    },
    {
      number: "06",
      icon: Rocket,
      title: "Launch, Analyze & Scale",
      description:
        "Simultaneous multi-channel distribution across social, web, and OTT platforms with real-time performance analytics and iterative refinement.",
    },
  ];

  return (
    <section id="process" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#181715] border-t border-[#34312B] overflow-hidden">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A46B]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#201F1C] border border-[#34312B] text-xs font-semibold uppercase tracking-wider text-[#C8A46B] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Seamless Execution
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F3F0E8] tracking-tight leading-tight mb-6">
            The MotionVox Roadmap, <br />
            <span className="text-silver-gradient">From Concept to Scale.</span>
          </h2>
          <p className="text-[#A8A39A] text-sm sm:text-base">
            A battle-tested 6-stage process designed to deliver studio-quality media in record time.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-[#201F1C] p-8 rounded-3xl border border-[#34312B] hover:border-[#C8A46B]/50 flex flex-col justify-between transition-all duration-300 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-extrabold text-[#C8A46B]/40 group-hover:text-[#C8A46B] transition-colors">
                      {step.number}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-[#181715] border border-[#34312B] text-[#C8A46B] group-hover:scale-110 group-hover:bg-[#C8A46B] group-hover:text-[#11100E] transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#F3F0E8] mb-3 group-hover:text-[#C8A46B] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8A39A] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#34312B] flex items-center justify-between text-[10px] font-mono text-[#A8A39A]/60">
                  <span>STAGE // {step.number}</span>
                  <span className="text-[#C8A46B]/90 uppercase">VERIFIED PIPELINE</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
