"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Play,
  TrendingUp,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Project {
  id: string;
  num: string;
  category: "Dubbing" | "AI Avatars" | "Web & Automation" | "UGC Ads";
  title: string;
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  metric: string;
  tag: string;
}

export function FeaturedWork() {
  const [activeTab, setActiveTab] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: "agriniri-transformation",
      num: "01",
      category: "Web & Automation",
      title: "Agriniri Custom Enterprise ERP & Web Platform",
      client: "AGRINIRI AGRITECH",
      summary: "Full-fledged ERP software system, inventory tracking dashboard, interactive buyer portal, and automated multilingual video onboarding.",
      challenge: "Legacy web presence failed to convert corporate enterprise buyers and lacked centralized real-time supply chain management.",
      solution: "Engineered a full-fledged Next.js enterprise ERP platform with role-based auth, real-time analytics, and integrated AI explainer avatars.",
      outcome: "Elevated enterprise lead conversions by 310% and streamlined supply chain operations.",
      metric: "310X ERP Lead Growth",
      tag: "Full ERP & Web App",
    },
    {
      id: "influencer-campaign",
      num: "02",
      category: "UGC Ads",
      title: "Synchronized Global Creator Campaign Engine",
      client: "GLOBAL D2C CONSUMER ELECTRONICS",
      summary: "Coordinated 25+ top-tier tech creators for a synchronized global product launch across TikTok and YouTube.",
      challenge: "Sourcing, vetting, and scripting creators manually across 5 regions was prone to delays.",
      solution: "Leveraged MotionVox Creator Network with automated rights agreements and standardized video briefs.",
      outcome: "Generated 5.2M organic views and 14,000 direct sales in the launch week.",
      metric: "5.2M Impressions",
      tag: "Creator Campaign",
    },
    {
      id: "stage-dubbing",
      num: "03",
      category: "Dubbing",
      title: "Stage OTT Multi-Language Neural Dubbing",
      client: "STAGE OTT PLATFORM",
      summary: "Scaled regional Indian entertainment catalogue into 10+ global & national dialects with preserved vocal emotion.",
      challenge: "Manual dubbing per series required $45,000+ per season and 6 weeks of actor scheduling.",
      solution: "Deployed MotionVox Neural Voice Synthesis with lip-sync alignment and master stem mastering.",
      outcome: "Reduced dubbing turnaround to 72 hours while lowering localization costs by 68%.",
      metric: "+420% Retention",
      tag: "OTT Localization",
    },
    {
      id: "youtube-automation",
      num: "04",
      category: "Web & Automation",
      title: "YouTube Creator Channel Automation Engine",
      client: "TOP 10M SUBSCRIBER CREATOR",
      summary: "Automated end-to-end post-production, auto-captioning, motion graphic overlays, and multi-format shorts distribution.",
      challenge: "High video editing workload limited output to 1 video per week despite high audience demand.",
      solution: "Engineered automated cloud rendering pipeline with custom Adobe Premiere & DaVinci API bridges.",
      outcome: "Expanded output to 5 long-form videos and 20 Shorts weekly with zero quality degradation.",
      metric: "18.5M Organic Views",
      tag: "Post-Production",
    },
    {
      id: "ugc-performance",
      num: "05",
      category: "UGC Ads",
      title: "D2C High-Converting Performance Ad Matrix",
      client: "SAAS & SKINCARE BRAND",
      summary: "Rapid production of 50+ localized UGC ad variations powered by AI avatars and real creators.",
      challenge: "Ad creative fatigue on Meta & TikTok required refreshing ad hooks every 3 days.",
      solution: "Created modular video script matrix with automated AI avatar voice variations and dynamic captions.",
      outcome: "Lowered Customer Acquisition Cost (CAC) by 42% across Meta and TikTok ads.",
      metric: "-42% CAC Drop",
      tag: "Performance Ads",
    },
    {
      id: "realestate-ads",
      num: "06",
      category: "AI Avatars",
      title: "Real Estate Cinematic 3D & AI Presenters",
      client: "LUXURY REALTY GROUP",
      summary: "Interactive virtual property walkthroughs hosted by multilingual executive AI avatars.",
      challenge: "High cost of international video shoots for luxury overseas real estate clients.",
      solution: "Rendered 3D architectural tours paired with photorealistic AI avatar concierges in 6 languages.",
      outcome: "Closed $12M+ in remote international pre-sales without requiring physical property visits.",
      metric: "$12M Remote Sales",
      tag: "AI Avatar Concierge",
    },
  ];

  const categories = ["ALL", "Dubbing", "AI Avatars", "Web & Automation", "UGC Ads"];

  const filteredProjects =
    activeTab === "ALL"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeTab.toLowerCase());

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % filteredProjects.length);
    scrollToSlide((activeSlideIndex + 1) % filteredProjects.length);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    scrollToSlide((activeSlideIndex - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.children[0]?.clientWidth || 550;
      carouselRef.current.scrollTo({
        left: index * (slideWidth + 24),
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="featured-work" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#0A0A0A] border-t border-[#27272A] studio-noise-bg overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-white/5 rounded-full blur-[200px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header & Navigation Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#27272A] text-[11px] font-mono uppercase tracking-widest text-[#E2E8F0] mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Studio Portfolio Showcase
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#FAFAFA] tracking-tight leading-[1.08]">
              Selected Case <br />
              Studies, <br />
              <span className="text-silver-gradient font-light italic">Quantifiable Business Impact.</span>
            </h2>
          </div>

          {/* Right Controls: Filter Pills & Slide Arrows */}
          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#141414] border border-[#27272A] overflow-x-auto no-scrollbar shadow-inner">
              {categories.map((cat) => {
                const isActive = activeTab.toLowerCase() === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveTab(cat);
                      setActiveSlideIndex(0);
                      scrollToSlide(0);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-[#FAFAFA] text-[#0A0A0A] font-bold shadow-lg scale-[1.02]"
                        : "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#1C1C1C]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Slider Navigation Arrow Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handlePrevSlide}
                className="w-10 h-10 rounded-full bg-[#141414] border border-[#27272A] text-[#FAFAFA] hover:text-[#FFFFFF] hover:border-[#E2E8F0] transition-all flex items-center justify-center cursor-pointer shadow-lg active:scale-95"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSlide}
                className="w-10 h-10 rounded-full bg-[#141414] border border-[#27272A] text-[#FAFAFA] hover:text-[#FFFFFF] hover:border-[#E2E8F0] transition-all flex items-center justify-center cursor-pointer shadow-lg active:scale-95"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 2-Card Visible Side-By-Side Horizontal Carousel */}
        <div
          ref={carouselRef}
          className="flex items-stretch gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-2"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="snap-start shrink-0 w-full md:w-[calc(50%-12px)] rounded-3xl bg-[#141414] border border-[#27272A] hover:border-[#E2E8F0]/60 transition-all duration-500 studio-noise-bg p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] group"
            >
              {/* Media Reel Container with Live Playback */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#1C1C1C] flex items-center justify-center p-6 border border-[#27272A] mb-5">
                <video
                  src="/hero-video.mp4"
                  poster="/hero-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.85] contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent z-10" />

                {/* Floating Metric Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#0A0A0A]/85 border border-[#E2E8F0]/40 text-[#E2E8F0] text-[11px] font-mono font-bold tracking-wider backdrop-blur-md shadow-md">
                  {project.metric}
                </div>

                <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-[#0A0A0A]/85 border border-[#27272A] text-[#A1A1AA] text-[10px] font-mono uppercase tracking-widest backdrop-blur-md">
                  CASE // {project.num}
                </div>

                {/* Play Button Trigger */}
                <div className="z-20 text-center flex flex-col items-center">
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="w-14 h-14 rounded-full bg-[#FAFAFA] text-[#0A0A0A] flex items-center justify-center shadow-[0_0_25px_rgba(255,255,255,0.3)] cursor-pointer group-hover:scale-110 transition-transform mb-1.5"
                  >
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <span className="text-[9px] font-mono text-[#FAFAFA] tracking-widest uppercase font-semibold drop-shadow-md">
                    INSPECT CASE STUDY
                  </span>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="space-y-3 px-1 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#E2E8F0] font-bold">
                      {project.client}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#1C1C1C] border border-[#27272A] text-[#A1A1AA]">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#FAFAFA] leading-tight mb-2 group-hover:text-[#FFFFFF] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3.5 mt-4 rounded-full bg-[#1C1C1C] hover:bg-[#FAFAFA] text-[#FAFAFA] hover:text-[#0A0A0A] border border-[#27272A] hover:border-[#FFFFFF] text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md group/btn"
                >
                  <span>Inspect Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Progress Bar */}
        <div className="mt-8 pt-6 border-t border-[#27272A] flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
          <span>
            SHOWING 0{activeSlideIndex + 1} OF 0{filteredProjects.length} CASE STUDIES
          </span>
          <div className="w-48 bg-[#141414] h-1.5 rounded-full overflow-hidden border border-[#27272A]">
            <div
              className="bg-[#FAFAFA] h-full transition-all duration-300 rounded-full"
              style={{
                width: `${((activeSlideIndex + 1) / filteredProjects.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A0A0A]/90 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#141414] border border-[#27272A] shadow-2xl overflow-hidden my-auto max-h-[85vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-30 p-2 rounded-full bg-[#1C1C1C] text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A] transition-colors border border-[#27272A]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div
                data-lenis-prevent="true"
                className="w-full h-full overflow-y-auto p-6 sm:p-8 pr-5 sm:pr-7 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#27272A] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#E2E8F0]"
              >
                <div className="mb-6 pr-6">
                  <span className="px-3 py-1 rounded-full bg-[#1C1C1C] border border-[#27272A] text-[#E2E8F0] text-xs font-mono">
                    {selectedProject.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FAFAFA] mt-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-[#A1A1AA]/70 mt-1">
                    Client: {selectedProject.client}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#1C1C1C] border border-[#27272A] flex items-center justify-between mb-8">
                  <div>
                    <span className="text-xs text-[#E2E8F0] font-medium block">Key Impact Metric</span>
                    <span className="text-2xl font-extrabold text-[#FAFAFA]">
                      {selectedProject.metric}
                    </span>
                  </div>
                  <TrendingUp className="w-8 h-8 text-[#E2E8F0]" />
                </div>

                <div className="space-y-6 mb-8 text-sm">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2 font-semibold">
                      The Challenge
                    </h4>
                    <p className="text-[#FAFAFA] leading-relaxed p-4 rounded-xl bg-[#1C1C1C] border border-[#27272A]">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2 font-semibold">
                      The MotionVox Solution
                    </h4>
                    <p className="text-[#FAFAFA] leading-relaxed p-4 rounded-xl bg-[#1C1C1C] border border-[#27272A]">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2 font-semibold">
                      Business Outcome
                    </h4>
                    <p className="text-[#FAFAFA] leading-relaxed p-4 rounded-xl bg-[#1C1C1C] border border-[#27272A]">
                      {selectedProject.outcome}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-3.5 rounded-full bg-[#FAFAFA] hover:bg-[#FFFFFF] text-[#0A0A0A] font-semibold text-xs text-center cursor-pointer transition-colors shadow-md"
                >
                  Close Breakdown
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
