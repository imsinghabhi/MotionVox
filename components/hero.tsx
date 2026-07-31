"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Languages,
  Zap,
  Globe,
  ShieldCheck,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroProps {
  onOpenDemo: () => void;
}

interface ReelCard {
  id: number;
  headline: string;
  sub: string;
  category: string;
}

export function Hero({ onOpenDemo }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [activeReelIndex, setActiveReelIndex] = useState(2); // Center slide by default
  const [isShrunk, setIsShrunk] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoMediaRef = useRef<HTMLVideoElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const sideCardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const videoAsset = "/hf_20260731_191844_c49d7a90-efc6-4f52-a979-ad7abeb1ea6e.mp4";

  const reels: ReelCard[] = [
    {
      id: 0,
      headline: "Neural Voice Dubbing",
      sub: "130+ Dialects & Preserved Emotion",
      category: "Localization",
    },
    {
      id: 1,
      headline: "AI Video Avatars",
      sub: "4K Photorealistic Digital Twins",
      category: "Avatars",
    },
    {
      id: 2,
      headline: "Refined Media Solutions",
      sub: "Crafted with Expertise",
      category: "Core Studio",
    },
    {
      id: 3,
      headline: "Workflow Automation",
      sub: "100+ Videos Rendered / Hour",
      category: "Automation",
    },
    {
      id: 4,
      headline: "Creator Campaign Engine",
      sub: "Viral UGC & Performance Growth",
      category: "Influencer",
    },
  ];

  const stats = [
    { icon: Languages, label: "Languages & Dialects", value: "130+" },
    { icon: Globe, label: "Views Delivered", value: "50M+" },
    { icon: Zap, label: "Production Speedup", value: "10x" },
    { icon: ShieldCheck, label: "Neural AI Fidelity", value: "99.8%" },
  ];

  const toggleMute = () => {
    if (videoMediaRef.current) {
      videoMediaRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2200",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.progress > 0.15) {
              setIsShrunk(true);
            } else {
              setIsShrunk(false);
            }
          },
        },
      });

      // 1. Shrink the main video container from 100vw x 100vh to centered card
      tl.to(
        videoWrapperRef.current,
        {
          width: isMobile ? "92vw" : "68vw",
          height: isMobile ? "50vh" : "62vh",
          borderRadius: isMobile ? "24px" : "36px",
          boxShadow: "0 30px 90px rgba(0, 0, 0, 0.95), 0 0 40px rgba(56, 189, 248, 0.25)",
          borderWidth: "1px",
          borderColor: "rgba(255, 255, 255, 0.25)",
          ease: "power2.inOut",
          duration: 1,
        },
        0
      );

      // 2. Fade out subtitle & CTA buttons as hero shrinks
      tl.to(
        textContainerRef.current,
        {
          opacity: 0,
          y: -30,
          ease: "power2.inOut",
          duration: 0.6,
        },
        0
      );

      // 3. Reveal horizontal carousel side cards sliding in from left & right
      tl.fromTo(
        sideCardsRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          duration: 0.8,
        },
        0.4
      );

      // 4. Reveal bottom statistics strip
      tl.fromTo(
        statsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.6,
        },
        0.8
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleNextReel = () => {
    setActiveReelIndex((prev) => (prev + 1) % reels.length);
  };

  const handlePrevReel = () => {
    setActiveReelIndex((prev) => (prev - 1 + reels.length) % reels.length);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-sky-500/10 rounded-full blur-[200px] pointer-events-none z-0" />

    

      {/* 1. MAIN HERO OVERLAY TEXT (Visible before scroll shrink) */}
      <div
        ref={textContainerRef}
        className="absolute z-30 max-w-5xl px-4 text-center flex flex-col items-center pointer-events-none"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full glass-panel border border-white/20 mb-6 shadow-[0_0_35px_rgba(56,189,248,0.3)]">
          <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-white/30">
            <Image
              src="/IMG_3249.PNG"
              alt="MotionVox Emblem"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-white">
            Motion<span className="text-sky-400">Vox</span> Studio
          </span>
          <span className="h-3.5 w-[1px] bg-white/20" />
          <span className="text-xs text-sky-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Dubbing & AI Avatars
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] mb-6 max-w-5xl text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
          Refined Media Solutions, <br className="hidden sm:inline" />
          <span className="text-silver-gradient">Crafted with Expertise.</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-200 max-w-2xl font-normal leading-relaxed mb-8 text-balance drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          MotionVox helps scaling businesses, SaaS pioneers, and creators expand globally using hyper-realistic AI video avatars, professional multi-language dubbing, and automated media pipelines.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pointer-events-auto">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto ice-glow-button px-8 py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 group cursor-pointer shadow-[0_0_40px_rgba(56,189,248,0.5)]"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto glass-button px-8 py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-zinc-100 hover:text-white transition-all backdrop-blur-md"
          >
            <span>Explore Services</span>
          </a>
        </div>
      </div>

      {/* 2. DUBFLIX SHRINKING CENTRAL VIDEO CONTAINER */}
      <div
        ref={videoWrapperRef}
        className="relative z-10 w-full h-full overflow-hidden transition-all duration-300 flex flex-col justify-center items-center"
        style={{
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
        }}
      >
        <video
          ref={videoMediaRef}
          src={videoAsset}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter brightness-105 contrast-110"
        />

        {/* Video Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 z-10 pointer-events-none" />

        {/* Shrunk State Title Overlay inside Active Card */}
        {isShrunk && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-20 flex flex-col items-center text-center bg-gradient-to-t from-black via-black/80 to-transparent"
          >
            <span className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              {reels[activeReelIndex].category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
              {reels[activeReelIndex].headline}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1">
              {reels[activeReelIndex].sub}
            </p>
          </motion.div>
        )}
      </div>

      {/* 3. HORIZONTAL CAROUSEL SIDE REEL CARDS (Reveals on Scroll) */}
      <div
        ref={sideCardsRef}
        className="absolute inset-x-0 z-20 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 sm:px-12 pointer-events-none opacity-0"
      >
        {/* Left Side Reel Card */}
        <div
          onClick={handlePrevReel}
          className="relative w-44 sm:w-64 md:w-80 h-64 sm:h-80 rounded-3xl overflow-hidden border border-white/20 shadow-2xl pointer-events-auto cursor-pointer group hover:border-sky-400/50 transition-all hover:scale-105"
        >
          <video
            src={videoAsset}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter brightness-90 contrast-100 group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
          <div className="absolute bottom-4 left-4 z-20 text-left">
            <span className="text-[10px] uppercase font-mono text-sky-400 font-semibold block">PREVIOUS REEL</span>
            <p className="text-xs sm:text-sm font-bold text-white line-clamp-1">
              {reels[(activeReelIndex - 1 + reels.length) % reels.length].headline}
            </p>
          </div>
          <button className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white z-20 group-hover:bg-sky-500 group-hover:text-black transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side Reel Card */}
        <div
          onClick={handleNextReel}
          className="relative w-44 sm:w-64 md:w-80 h-64 sm:h-80 rounded-3xl overflow-hidden border border-white/20 shadow-2xl pointer-events-auto cursor-pointer group hover:border-sky-400/50 transition-all hover:scale-105"
        >
          <video
            src={videoAsset}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter brightness-90 contrast-100 group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
          <div className="absolute bottom-4 right-4 z-20 text-right">
            <span className="text-[10px] uppercase font-mono text-sky-400 font-semibold block">NEXT REEL</span>
            <p className="text-xs sm:text-sm font-bold text-white line-clamp-1">
              {reels[(activeReelIndex + 1) % reels.length].headline}
            </p>
          </div>
          <button className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white z-20 group-hover:bg-sky-500 group-hover:text-black transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 4. BOTTOM FLOATING STATS STRIP */}
      <div
        ref={statsRef}
        className="absolute bottom-6 inset-x-4 sm:inset-x-8 z-30 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 pointer-events-auto opacity-0"
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="glass-card p-3 sm:p-4 rounded-2xl border border-white/15 flex flex-col items-center text-center bg-black/60 backdrop-blur-xl hover:border-sky-400/50 transition-colors"
          >
            <stat.icon className="w-4 h-4 text-sky-400 mb-1" />
            <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {stat.value}
            </span>
            <span className="text-[10px] text-zinc-300 font-medium mt-0.5">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
