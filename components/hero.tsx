"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Languages,
  Zap,
  Globe,
  ShieldCheck,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
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
  const viewportRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoMediaRef = useRef<HTMLVideoElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const shrunkOverlayRef = useRef<HTMLDivElement>(null);

  const videoAsset = "/hero-video.mp4";
  const posterAsset = "/hero-poster.jpg";

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

  

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const scrollEnd = isMobile ? "+=70%" : isTablet ? "+=110%" : "+=150%";

      // Master scroll-driven timeline pinned to the viewport
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: scrollEnd, // Responsive scroll distance for mobile & tablet
          pin: true,
          pinSpacing: true,
          anticipatePin: 1, // Eliminates pin jump on touch devices when scrolling up
          scrub: isMobile ? 0.2 : 0.4,
          fastScrollEnd: true,
          preventOverlaps: true,
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

      // Target video card shrink dimensions based on device size
      const targetWidth = isMobile ? "88vw" : isTablet ? "70vw" : "58vw";
      const targetHeight = isMobile ? "36vh" : isTablet ? "46vh" : "54vh";
      const sideCardXOffset = isMobile ? 15 : isTablet ? 50 : 120;

      // ---------------------------------------------------------------------
      // PHASE 1 (0.00 -> 0.25): Hero Starts Shrinking
      // ---------------------------------------------------------------------
      // 1a. Hero main text overlay dissolves out smoothly
      tl.to(
        textContainerRef.current,
        {
          opacity: 0,
          y: -30,
          scale: 0.97,
          ease: "none",
          duration: 0.25,
        },
        0
      );

      // 1b. Main hero video container scales down smoothly from 100vw/100vh to card dimensions
      tl.to(
        videoWrapperRef.current,
        {
          width: targetWidth,
          height: targetHeight,
          borderRadius: isMobile ? "20px" : "32px",
          boxShadow: "0 30px 90px rgba(0, 0, 0, 0.95)",
          borderColor: "rgba(39, 39, 42, 1)",
          ease: "none",
          duration: 0.50,
        },
        0
      );

      // 1c. Inner card title overlay (for shrunk state) fades in on central video card
      if (shrunkOverlayRef.current) {
        tl.to(
          shrunkOverlayRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "none",
            duration: 0.25,
          },
          0.20
        );
      }

      // ---------------------------------------------------------------------
      // PHASE 2 (0.25 -> 0.55): Carousel Cards Reveal & Slide In
      // ---------------------------------------------------------------------
      // Left Card: PREVIOUS REEL
      if (leftCardRef.current) {
        tl.to(
          leftCardRef.current,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            ease: "none",
            duration: 0.30,
          },
          0.25
        );
      }

      // Right Card: NEXT REEL
      if (rightCardRef.current) {
        tl.to(
          rightCardRef.current,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            ease: "none",
            duration: 0.30,
          },
          0.25
        );
      }

      // ---------------------------------------------------------------------
      // PHASE 3 (0.55 -> 0.75): Carousel Completely Established & Visible
      // ---------------------------------------------------------------------

      // ---------------------------------------------------------------------
      // PHASE 4 (0.75 -> 0.90): Statistics Section Reveal
      // ---------------------------------------------------------------------
      if (statsRef.current) {
        tl.to(
          statsRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "none",
            duration: 0.15,
          },
          0.75
        );
      }

      // ---------------------------------------------------------------------
      // PHASE 5 (0.90 -> 1.00): Exit Hero / Complete Sequence & Unpin
      // ---------------------------------------------------------------------
      tl.to({}, { duration: 0.10 }, 0.90);
    }, containerRef);

    // Refresh ScrollTrigger after DOM renders fully
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  const prevIndex = (activeReelIndex - 1 + reels.length) % reels.length;
  const nextIndex = (activeReelIndex + 1) % reels.length;

  const handleNextReel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveReelIndex((prev) => (prev + 1) % reels.length);
  };

  const handlePrevReel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveReelIndex((prev) => (prev - 1 + reels.length) % reels.length);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#0A0A0A] z-10"
      style={{ height: "100vh" }}
    >
      {/* Viewport container fixed/pinned during scroll */}
      <div
        ref={viewportRef}
        className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[#0A0A0A] transform-gpu"
      >
        {/* Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none z-0 transform-gpu" />

        {/* 1. INITIAL HERO OVERLAY TEXT (Phase 1) */}
        <div
          ref={textContainerRef}
          className="absolute z-40 max-w-6xl w-full px-6 sm:px-8 lg:px-10 pt-20 sm:pt-24 md:pt-24 text-left flex flex-col items-start will-change-[transform,opacity] pointer-events-auto"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FAFAFA] leading-[1.08] mb-4 max-w-3xl text-left drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            Refined Media Solutions, <br className="hidden sm:inline" />
            <span className="text-silver-gradient">Crafted with Expertise.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#A1A1AA] max-w-xl font-normal leading-relaxed mb-6 text-left drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            MotionVox builds full-fledged web applications, custom ERP systems, SaaS platforms, hyper-realistic AI video avatars, and automated multi-language dubbing pipelines for ambitious global brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 w-full sm:w-auto relative z-50 pointer-events-auto">
            <button
              type="button"
              onClick={() => {
                onOpenDemo();
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 group cursor-pointer bg-[#FAFAFA] hover:bg-[#FFFFFF] text-[#0A0A0A] shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("services");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-[#27272A] bg-[#1C1C1C] hover:bg-[#27272A] hover:border-[#E2E8F0]/40 text-[#FAFAFA] transition-all cursor-pointer"
            >
              <span>Explore Services</span>
            </a>
          </div>
        </div>

        {/* 2. CENTRAL VIDEO CONTAINER (Shrinks on scroll) */}
        <div
          ref={videoWrapperRef}
          className="relative z-20 w-full h-full overflow-hidden flex flex-col justify-center items-center transform-gpu border border-transparent shadow-none"
          style={{
            width: "100vw",
            height: "100vh",
            borderRadius: "0px",
          }}
        >
          <video
            ref={videoMediaRef}
            src={videoAsset}
            poster={posterAsset}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover filter brightness-105 contrast-110"
          />

          {/* Video Overlay Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/30 to-[#0A0A0A]/50 z-10 pointer-events-none" />

          {/* Shrunk State Title Overlay inside Central Video Card */}
          <div
            ref={shrunkOverlayRef}
            className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 z-20 flex flex-col items-center text-center bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none opacity-0"
          >
            <span className="px-3 py-1 rounded-full bg-[#1C1C1C] border border-[#27272A] text-[#E2E8F0] text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider mb-1.5 sm:mb-2">
              {reels[activeReelIndex].category}
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#FAFAFA] tracking-tight drop-shadow-md">
              {reels[activeReelIndex].headline}
            </h2>
            <p className="text-[11px] sm:text-xs md:text-sm text-[#A1A1AA] mt-1 max-w-md">
              {reels[activeReelIndex].sub}
            </p>
          </div>
        </div>

        {/* 3. CAROUSEL SIDE CARDS (Phase 2 & 3 - Slide & Fade In) */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-between px-2 sm:px-6 md:px-12 pointer-events-none w-full max-w-7xl mx-auto">
          {/* Left Card: PREVIOUS REEL */}
          <div
            ref={leftCardRef}
            onClick={handlePrevReel}
            className="relative w-28 sm:w-52 md:w-64 lg:w-76 h-40 sm:h-64 md:h-72 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#27272A] bg-[#141414]/90 backdrop-blur-md shadow-2xl pointer-events-auto cursor-pointer group hover:border-[#E2E8F0]/40 transition-all hover:scale-105 flex flex-col justify-between p-3 sm:p-5 md:p-6 opacity-0"
          >
            {/* Background Video */}
            <video
              src={videoAsset}
              poster={posterAsset}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] contrast-110 z-0 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/60 to-[#0A0A0A]/40 z-5" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[9px] sm:text-[10px] uppercase font-mono text-[#E2E8F0] font-semibold tracking-wider line-clamp-1">
                {reels[prevIndex].category}
              </span>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1C1C1C]/80 border border-[#27272A] flex items-center justify-center text-[#E2E8F0] group-hover:bg-[#FAFAFA] group-hover:text-[#0A0A0A] transition-colors shrink-0 backdrop-blur-sm">
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>

            <div className="relative z-10 text-left space-y-0.5 sm:space-y-1">
              <span className="text-[9px] sm:text-[10px] uppercase font-mono text-[#A1A1AA]/70 font-semibold block">
                PREVIOUS REEL
              </span>
              <h4 className="text-xs sm:text-base font-bold text-[#FAFAFA] group-hover:text-[#FFFFFF] transition-colors line-clamp-1 sm:line-clamp-2 drop-shadow-md">
                {reels[prevIndex].headline}
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#A1A1AA] line-clamp-1 hidden sm:block drop-shadow">
                {reels[prevIndex].sub}
              </p>
            </div>
          </div>

          {/* Right Card: NEXT REEL */}
          <div
            ref={rightCardRef}
            onClick={handleNextReel}
            className="relative w-28 sm:w-52 md:w-64 lg:w-76 h-40 sm:h-64 md:h-72 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#27272A] bg-[#141414]/90 backdrop-blur-md shadow-2xl pointer-events-auto cursor-pointer group hover:border-[#E2E8F0]/40 transition-all hover:scale-105 flex flex-col justify-between p-3 sm:p-5 md:p-6 opacity-0"
          >
            {/* Background Video */}
            <video
              src={videoAsset}
              poster={posterAsset}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] contrast-110 z-0 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/60 to-[#0A0A0A]/40 z-5" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[9px] sm:text-[10px] uppercase font-mono text-[#E2E8F0] font-semibold tracking-wider line-clamp-1">
                {reels[nextIndex].category}
              </span>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1C1C1C]/80 border border-[#27272A] flex items-center justify-center text-[#E2E8F0] group-hover:bg-[#FAFAFA] group-hover:text-[#0A0A0A] transition-colors shrink-0 backdrop-blur-sm">
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>

            <div className="relative z-10 text-right space-y-0.5 sm:space-y-1">
              <span className="text-[9px] sm:text-[10px] uppercase font-mono text-[#E2E8F0] font-semibold block">
                NEXT REEL
              </span>
              <h4 className="text-xs sm:text-base font-bold text-[#FAFAFA] group-hover:text-[#FFFFFF] transition-colors line-clamp-1 sm:line-clamp-2 drop-shadow-md">
                {reels[nextIndex].headline}
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#A1A1AA] line-clamp-1 hidden sm:block drop-shadow">
                {reels[nextIndex].sub}
              </p>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM FLOATING STATS STRIP (Phase 4 - Reveals after carousel) */}
        <div
          ref={statsRef}
          className="absolute bottom-4 sm:bottom-8 inset-x-4 sm:inset-x-8 z-30 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 pointer-events-auto opacity-0"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="px-4 py-3 rounded-full border border-[#27272A] flex items-center justify-center gap-3 bg-[#141414]/95 backdrop-blur-xl hover:border-[#E2E8F0]/50 transition-all shadow-xl"
            >
              <stat.icon className="w-4 h-4 text-[#E2E8F0] shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-sm sm:text-base font-extrabold text-[#FAFAFA] tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-[9px] font-mono text-[#A1A1AA] uppercase tracking-wider mt-0.5">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

