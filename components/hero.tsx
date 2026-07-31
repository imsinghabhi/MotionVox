"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight, Languages, Zap, Globe, ShieldCheck } from "lucide-react";

interface HeroProps {
  onOpenDemo: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  const stats = [
    { icon: Languages, label: "Languages & Dialects", value: "130+" },
    { icon: Globe, label: "Views Delivered", value: "50M+" },
    { icon: Zap, label: "Production Speedup", value: "10x" },
    { icon: ShieldCheck, label: "Neural AI Fidelity", value: "99.8%" },
  ];

  return (
    <section className="relative min-h-screen pt-36 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden bg-mesh-grid">
      {/* 1. Full-Cover Cinematic Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: [1, 1.04, 1], opacity: 0.28 }}
          transition={{
            scale: { duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            opacity: { duration: 1.5 }
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/IMG_3249.PNG"
            alt="MotionVox Cinematic Background"
            fill
            priority
            className="object-cover object-center filter brightness-110 contrast-125"
          />
        </motion.div>

        {/* Dark Vignette & Radial Glow Overlays for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/50 to-[#050505] z-1" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#050505_85%)] z-1" />
      </div>

      {/* 2. Soft Blue Radial Glow & Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/15 rounded-full blur-[160px] pointer-events-none z-1" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/12 rounded-full blur-[120px] pointer-events-none animate-float-slow z-1" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Responsive Glass Logo Badge */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full glass-panel border border-white/20 mb-8 shadow-[0_0_30px_rgba(56,189,248,0.25)] hover:border-sky-400/50 transition-all duration-300 group cursor-pointer"
        >
          <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-white/30 group-hover:scale-110 transition-transform">
            <Image
              src="/IMG_3249.PNG"
              alt="MotionVox Emblem"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            Motion<span className="text-sky-400">Vox</span> Studio
          </span>
          <span className="h-3.5 w-[1px] bg-white/20" />
          <span className="text-xs text-sky-400 font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Dubbing & AI Avatars
          </span>
        </motion.div>

        {/* Clean Apple-style Headline */}
        <motion.h1
          initial={{ filter: "blur(12px)", opacity: 0, y: 30 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] mb-6 max-w-5xl text-center"
        >
          Refined Media Solutions, <br className="hidden sm:inline" />
          <span className="text-silver-gradient">Crafted with Expertise.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ filter: "blur(8px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-10 text-balance"
        >
          MotionVox helps scaling businesses, SaaS pioneers, and creators expand globally using hyper-realistic AI video avatars, professional multi-language dubbing, and automated media pipelines.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
        >
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto ice-glow-button px-8 py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto glass-button px-8 py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 border border-white/10 hover:border-white/30 text-zinc-200 hover:text-white transition-all"
          >
            <span>Explore Services</span>
          </a>
        </motion.div>

        {/* Central Studio Showcase / Interactive Glass Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/10 to-transparent shadow-[0_0_80px_rgba(0,0,0,0.95)] mb-16"
        >
          <div className="relative rounded-[22px] bg-zinc-950/90 border border-white/15 overflow-hidden p-6 sm:p-8 backdrop-blur-2xl">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-zinc-400">motionvox-ai-engine.v2.4</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[11px] text-sky-400 border border-sky-400/20 font-mono">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                LIVE RENDERING
              </div>
            </div>

            {/* Showcase Grid with Full Image Backgrounds */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Box 1 */}
              <div className="relative aspect-video md:aspect-auto md:h-52 rounded-xl bg-zinc-900 overflow-hidden border border-white/10 flex flex-col justify-end p-4 group">
                <Image
                  src="/IMG_3249.PNG"
                  alt="Neural Dubbing Preview"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
                <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] uppercase font-mono font-semibold tracking-wider text-sky-300 border border-sky-400/30">
                  Neural Dubbing
                </div>
                <div className="z-20">
                  <p className="text-xs font-bold text-white">Multi-Lingual Audio Stream</p>
                  <p className="text-[10px] text-zinc-300 mt-0.5">130+ Dialects • Emotion Preservation</p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="relative aspect-video md:aspect-auto md:h-52 rounded-xl bg-zinc-900 overflow-hidden border border-white/10 flex flex-col justify-end p-4 group">
                <Image
                  src="/IMG_3249.PNG"
                  alt="AI Video Avatar Preview"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
                <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] uppercase font-mono font-semibold tracking-wider text-blue-300 border border-blue-400/30">
                  AI Video Avatar
                </div>
                <div className="z-20">
                  <p className="text-xs font-bold text-white">4K Digital Twin Render</p>
                  <p className="text-[10px] text-zinc-300 mt-0.5">Micro-Expression Lip Sync</p>
                </div>
              </div>

              {/* Box 3 */}
              <div className="relative aspect-video md:aspect-auto md:h-52 rounded-xl bg-zinc-900 overflow-hidden border border-white/10 flex flex-col justify-end p-4 group">
                <Image
                  src="/IMG_3249.PNG"
                  alt="Automation Pipeline Preview"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
                <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] uppercase font-mono font-semibold tracking-wider text-teal-300 border border-teal-400/30">
                  Automation Pipeline
                </div>
                <div className="z-20">
                  <p className="text-xs font-bold text-white">Automated Post-Production</p>
                  <p className="text-[10px] text-zinc-300 mt-0.5">100+ Videos Rendered / Hour</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col items-center text-center group hover:border-sky-400/40 transition-colors"
            >
              <stat.icon className="w-5 h-5 text-sky-400 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-400 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
