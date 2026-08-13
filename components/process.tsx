"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Compass, FileText, Cpu, Film, Zap, Rocket, ArrowRight } from "lucide-react";

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Discovery & Alignment",
      subtitle: "AUDIT & GOAL MAPPING",
      description:
        "We analyze your brand tone, media objectives, target languages, and existing production workflows to map out high-ROI automation opportunities.",
      deliverable: "Custom Strategic Roadmap",
    },
    {
      number: "02",
      icon: FileText,
      title: "Strategy & Scripting",
      subtitle: "CULTURAL LOCALIZATION",
      description:
        "Our creative directors craft localized script variations, select optimal voice profiles, and design avatar framing tailored to your target audience.",
      deliverable: "Localized Script Matrix",
    },
    {
      number: "03",
      icon: Cpu,
      title: "AI Avatar & Neural Training",
      subtitle: "EXECUTIVE CLONING",
      description:
        "Custom training of photorealistic AI avatars and voice clone models with lip-sync alignment and vocal timbre calibration.",
      deliverable: "4K Photorealistic Twin",
    },
    {
      number: "04",
      icon: Film,
      title: "Studio Finishing & FX",
      subtitle: "POST-PRODUCTION FINISHING",
      description:
        "Master audio engineering, color grading, motion graphics, and multi-stem sound design applied by top industry editors.",
      deliverable: "ProRes Studio Masters",
    },
    {
      number: "05",
      icon: Zap,
      title: "Workflow Automation",
      subtitle: "API PIPELINE INTEGRATION",
      description:
        "Deploy automated rendering pipelines connecting your CMS or media asset management system directly to our AI rendering clusters.",
      deliverable: "Autonomous Pipeline Setup",
    },
    {
      number: "06",
      icon: Rocket,
      title: "Launch, Analyze & Scale",
      subtitle: "MULTI-CHANNEL DISTRIBUTION",
      description:
        "Simultaneous multi-channel distribution across social, web, and OTT platforms with real-time performance analytics and iterative refinement.",
      deliverable: "Global Campaign Launch",
    },
  ];

  return (
    <section id="process" className="relative py-32 px-4 sm:px-6 lg:px-12 bg-[#0A0A0A] border-t border-[#27272A] studio-noise-bg">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[160px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8 pb-10 border-b border-[#27272A]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#27272A] text-[11px] font-mono uppercase tracking-widest text-[#E2E8F0] mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Systematic Execution
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#FAFAFA] tracking-tight leading-tight">
              The MotionVox Roadmap, <br />
              <span className="text-silver-gradient font-light italic">From Concept to Global Scale.</span>
            </h2>
          </div>
          <p className="text-[#A1A1AA] max-w-md text-sm sm:text-base leading-relaxed">
            A battle-tested 6-stage process designed to deliver studio-quality media in record time without template constraints.
          </p>
        </div>

        {/* Stepper Numbers Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-32 ${
                  isActive
                    ? "bg-[#FAFAFA] text-[#0A0A0A] border-[#FFFFFF] shadow-xl scale-105"
                    : "bg-[#141414] text-[#A1A1AA] border-[#27272A] hover:border-[#E2E8F0]/40 hover:text-[#FAFAFA]"
                }`}
              >
                <span className={`font-mono text-2xl font-black ${isActive ? "text-[#0A0A0A]" : "text-[#E2E8F0]"}`}>
                  {step.number}
                </span>
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider block ${isActive ? "text-[#0A0A0A]/80" : "text-[#A1A1AA]/60"}`}>
                    STAGE 0{idx + 1}
                  </span>
                  <span className={`text-xs font-bold line-clamp-1 ${isActive ? "text-[#0A0A0A]" : "text-[#FAFAFA]"}`}>
                    {step.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Featured Detail Showcase Panel */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#141414] border border-[#27272A] studio-noise-bg flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-2xl"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#1C1C1C] text-[#E2E8F0] font-mono text-xs font-bold border border-[#27272A]">
                STAGE {steps[activeStep].number} // {steps[activeStep].subtitle}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#FAFAFA] tracking-tight">
              {steps[activeStep].title}
            </h3>

            <p className="text-base text-[#A1A1AA] leading-relaxed">
              {steps[activeStep].description}
            </p>
          </div>

          <div className="w-full lg:w-auto p-6 rounded-2xl bg-[#1C1C1C] border border-[#27272A] space-y-3 min-w-[280px]">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#A1A1AA]">
              KEY STAGE DELIVERABLE
            </span>
            <div className="text-base font-bold text-[#E2E8F0] flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-[#E2E8F0]" />
              <span>{steps[activeStep].deliverable}</span>
            </div>
            <div className="pt-2 text-[10px] font-mono text-[#A1A1AA]/60 border-t border-[#27272A]">
              GUARANTEED STUDIO TIMELINE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

}
