"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Brain, Globe2, Zap, Shield, Activity, Radio, Cpu } from "lucide-react";

export function WhyUs() {
  const pillars = [
    {
      num: "01",
      icon: Brain,
      title: "Human Artistry Meets Neural AI",
      subtitle: "EMOTIONAL FIDELITY // NEURAL SYNTHESIS",
      description:
        "Pure AI lacks emotion; pure manual production lacks speed. MotionVox merges elite human creative directors, audio engineers, and translators with state-of-the-art neural engines to guarantee flawless execution.",
      stat: "100%",
      statLabel: "Human Supervised Quality",
      visualWidget: "audio-wave",
    },
    {
      num: "02",
      icon: Globe2,
      title: "130+ Dialects & Cultural Accuracy",
      subtitle: "GLOBAL NATIVE LOCALIZATION",
      description:
        "Reach international markets seamlessly. Our dubbing and avatar models retain local colloquialism, vocal timbre, and lip-sync accuracy across Asian, European, Middle Eastern, and Latin American dialects.",
      stat: "130+",
      statLabel: "Languages & Regional Accents",
      visualWidget: "dialect-matrix",
    },
    {
      num: "03",
      icon: Zap,
      title: "10x Production Acceleration",
      subtitle: "HIGH-THROUGHPUT MEDIA RENDERING",
      description:
        "Eliminate studio scheduling bottlenecks. Generate hundreds of localized ad variations, course modules, or product walkthroughs in a fraction of traditional timeline.",
      stat: "10x",
      statLabel: "Faster Time to Market",
      visualWidget: "throughput-meter",
    },
    {
      num: "04",
      icon: Shield,
      title: "Enterprise-Grade Voice Security & NDA",
      subtitle: "AIR-GAPPED DATA & PRIVACY SECURITY",
      description:
        "Your voice actors, executive avatars, and confidential media assets are protected under strict NDA, watermarking, and zero data-retention AI model isolation.",
      stat: "SOC2",
      statLabel: "Zero-Retention Privacy Standard",
      visualWidget: "security-seal",
    },
  ];

  return (
    <section id="why-us" className="relative py-32 px-4 sm:px-6 lg:px-12 bg-[#0A0A0A] border-t border-[#27272A] studio-noise-bg overflow-hidden">
      {/* Subtle Glow Orb */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8 pb-10 border-b border-[#27272A]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#27272A] text-[11px] font-mono uppercase tracking-widest text-[#E2E8F0] mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Studio Differentiators
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#FAFAFA] tracking-tight leading-tight">
              Designed for Impact, <br />
              <span className="text-silver-gradient font-light italic">Engineered for Exponential Scale.</span>
            </h2>
          </div>
          <p className="text-[#A1A1AA] max-w-md text-sm sm:text-base leading-relaxed">
            We don&apos;t just render media; we build sustainable digital leverage for ambitious SaaS teams, global creators, and enterprise studios.
          </p>
        </div>

        {/* Storytelling Editorial Matrix */}
        <div className="space-y-24">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-16 border-b border-[#27272A]`}
              >
                {/* Text Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl font-bold text-[#E2E8F0]">
                      {pillar.num}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#A1A1AA]">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-extrabold text-[#FAFAFA] tracking-tight leading-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-4 flex items-center gap-8">
                    <div>
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#FAFAFA] tracking-tight">
                        {pillar.stat}
                      </span>
                      <span className="block text-xs font-mono text-[#A1A1AA] mt-1">
                        {pillar.statLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Micro Visual Widget Column */}
                <div className={`lg:col-span-6 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="relative rounded-3xl p-8 bg-[#141414] border border-[#27272A] shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between">
                    {/* Header bar of visualizer */}
                    <div className="flex items-center justify-between border-b border-[#27272A] pb-4 z-10">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#E2E8F0]">
                        <Radio className="w-4 h-4 animate-pulse" />
                        <span>LIVE ENGINE STATS</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#A1A1AA]">
                        LATENCY // 14MS
                      </span>
                    </div>

                    {/* Interactive Animated Widget Graphic */}
                    <div className="my-8 z-10">
                      {pillar.visualWidget === "audio-wave" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                            <span>NEURAL AUDIO TIMBRE SYNTH</span>
                            <span className="text-[#E2E8F0]">99.8% MATCH</span>
                          </div>
                          <div className="h-16 flex items-center gap-1.5 justify-center">
                            {[40, 70, 30, 90, 60, 100, 45, 80, 50, 95, 35, 75, 65, 85, 40].map((h, i) => (
                              <motion.div
                                key={i}
                                animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.5}%`] }}
                                transition={{
                                  duration: 1.2,
                                  repeat: Infinity,
                                  delay: i * 0.08,
                                  ease: "easeInOut",
                                }}
                                className="w-2 rounded-full bg-[#FAFAFA]"
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {pillar.visualWidget === "dialect-matrix" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                            <span>GLOBAL DIALECT MAP</span>
                            <span className="text-[#E2E8F0]">130 ACTIVE REGIONS</span>
                          </div>
                          <div className="grid grid-cols-4 gap-2">
                            {["EN-US", "ES-MX", "HI-IN", "FR-FR", "DE-DE", "JA-JP", "AR-SA", "PT-BR"].map((code, cIdx) => (
                              <div key={cIdx} className="p-2.5 rounded-xl bg-[#1C1C1C] border border-[#27272A] text-center font-mono text-xs text-[#FAFAFA] flex items-center justify-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FAFAFA]" />
                                <span>{code}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {pillar.visualWidget === "throughput-meter" && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                            <span>AUTOMATED BATCH RENDERING</span>
                            <span className="text-[#E2E8F0]">100 VIDEOS / HR</span>
                          </div>
                          <div className="w-full bg-[#1C1C1C] h-3 rounded-full overflow-hidden p-0.5 border border-[#27272A]">
                            <motion.div
                              animate={{ width: ["15%", "85%", "100%"] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                              className="h-full bg-gradient-to-r from-[#E2E8F0] to-[#FFFFFF] rounded-full"
                            />
                          </div>
                          <div className="flex justify-between text-[10px] font-mono text-[#A1A1AA]">
                            <span>RAW INGEST</span>
                            <span>NEURAL SYNC</span>
                            <span>PRORES READY</span>
                          </div>
                        </div>
                      )}

                      {pillar.visualWidget === "security-seal" && (
                        <div className="p-4 rounded-2xl bg-[#1C1C1C] border border-[#27272A] flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Shield className="w-8 h-8 text-[#E2E8F0]" />
                            <div>
                              <h4 className="text-xs font-mono font-bold text-[#FAFAFA]">SOC2 TYPE II CERTIFIED</h4>
                              <p className="text-[10px] font-mono text-[#A1A1AA]">Zero Data Retention Engine</p>
                            </div>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-[#27272A] text-[#FAFAFA] text-[10px] font-mono font-bold">
                            ENCRYPTED
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Bottom Status strip */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#A1A1AA]/60 pt-3 border-t border-[#27272A] z-10">
                      <span>PILLAR MATRIX // {pillar.num}</span>
                      <span>MOTIONVOX CLOUD ENGINE</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );

}
