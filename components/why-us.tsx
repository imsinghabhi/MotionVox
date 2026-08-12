"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Brain, Cpu, Zap, Shield, Globe2, Layers } from "lucide-react";

export function WhyUs() {
  const pillars = [
    {
      icon: Brain,
      title: "Human Artistry Meets Neural AI",
      subtitle: "The Perfect Blend of Emotion & Automation",
      description:
        "Pure AI lacks emotion; pure manual production lacks speed. MotionVox merges elite human creative directors, audio engineers, and translators with state-of-the-art neural engines to guarantee flawless execution.",
      stat: "100%",
      statLabel: "Human Supervised Quality",
    },
    {
      icon: Globe2,
      title: "130+ Languages & Native Nuances",
      subtitle: "Localized for Global Cultural Resonance",
      description:
        "Reach international markets seamlessly. Our dubbing and avatar models retain local colloquialism, vocal timbre, and lip-sync accuracy across Asian, European, Middle Eastern, and Latin American dialects.",
      stat: "130+",
      statLabel: "Languages Supported",
    },
    {
      icon: Zap,
      title: "10x Faster Turnaround & Scalability",
      subtitle: "From Weeks of Editing to Hours",
      description:
        "Eliminate studio scheduling bottlenecks. Generate hundreds of localized ad variations, course modules, or product walkthroughs in a fraction of traditional timeline.",
      stat: "10x",
      statLabel: "Production Acceleration",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Privacy & Rights",
      subtitle: "Uncompromising Voice & Identity Security",
      description:
        "Your voice actors, executive avatars, and confidential media assets are protected under strict NDA, watermarking, and zero data-retention AI model isolation.",
      stat: "SOC2",
      statLabel: "Security Compliant Pipeline",
    },
  ];

  return (
    <section id="why-us" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#181715] border-t border-[#34312B] overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#C8A46B]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#201F1C] border border-[#34312B] text-xs font-semibold uppercase tracking-wider text-[#C8A46B] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Why MotionVox
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F3F0E8] tracking-tight leading-tight mb-6">
            Designed for Impact, <br />
            <span className="text-silver-gradient">Engineered for Scale.</span>
          </h2>
          <p className="text-[#A8A39A] text-sm sm:text-base leading-relaxed">
            We don&apos;t just render media; we build sustainable digital leverage for ambitious SaaS teams, global creators, and enterprise studios.
          </p>
        </div>

        {/* Alternating Storytelling Layouts */}
        <div className="space-y-16 lg:space-y-24">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center justify-between gap-12 lg:gap-16`}
              >
                {/* Content Block */}
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A46B]/10 border border-[#C8A46B]/30 text-[#C8A46B] text-xs font-mono">
                    <Icon className="w-4 h-4" />
                    <span>{pillar.subtitle}</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#F3F0E8] tracking-tight leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-[#A8A39A] text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-4 flex items-center gap-6 border-t border-[#34312B]">
                    <div>
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#F3F0E8] tracking-tight">
                        {pillar.stat}
                      </span>
                      <span className="block text-xs text-[#A8A39A]/70 font-medium mt-0.5">
                        {pillar.statLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visual Showcase Card */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-3xl p-1 bg-[#201F1C] border border-[#34312B] shadow-2xl overflow-hidden group">
                    <div className="relative rounded-[22px] bg-[#181715] p-8 min-h-[280px] sm:min-h-[320px] flex flex-col justify-between overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8A46B]/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

                      <div className="flex items-center justify-between z-10">
                        <div className="p-4 rounded-2xl bg-[#201F1C] border border-[#34312B] text-[#C8A46B]">
                          <Icon className="w-8 h-8" />
                        </div>
                        <span className="font-mono text-xs text-[#A8A39A]/60 uppercase tracking-widest">
                          PILLAR // 0{idx + 1}
                        </span>
                      </div>

                      <div className="z-10 mt-12">
                        <div className="p-4 rounded-xl bg-[#201F1C] border border-[#34312B] space-y-2">
                          <div className="flex items-center justify-between text-xs text-[#A8A39A] font-mono">
                            <span>SYSTEM_STATUS</span>
                            <span className="text-[#C8A46B] font-semibold">OPTIMAL</span>
                          </div>
                          <div className="h-1.5 w-full bg-[#34312B] rounded-full overflow-hidden">
                            <div className="h-full bg-[#C8A46B] rounded-full w-4/5 animate-pulse" />
                          </div>
                        </div>
                      </div>
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
