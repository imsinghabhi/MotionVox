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
    <section id="process" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-white/5 overflow-hidden">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Seamless Execution
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            The MotionVox Roadmap, <br />
            <span className="text-silver-gradient">From Concept to Scale.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
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
                className="group relative glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-extrabold text-sky-400/40 group-hover:text-sky-400 transition-colors">
                      {step.number}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-sky-400 group-hover:scale-110 group-hover:bg-sky-400 group-hover:text-black transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-600">
                  <span>STAGE // {step.number}</span>
                  <span className="text-sky-400/80 uppercase">VERIFIED PIPELINE</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
