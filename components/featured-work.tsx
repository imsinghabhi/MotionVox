"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, Play, Eye, TrendingUp, X, Check } from "lucide-react";

interface Project {
  id: string;
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
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "stage-dubbing",
      category: "Dubbing",
      title: "Stage OTT Multi-Language Neural Dubbing",
      client: "STAGE OTT Platform",
      summary: "Scaled regional Indian entertainment catalogue into 10+ global & national dialects with preserved vocal emotion.",
      challenge: "Manual dubbing per series required $45,000+ per season and 6 weeks of actor scheduling.",
      solution: "Deployed MotionVox Neural Voice Synthesis with lip-sync alignment and master stem mastering.",
      outcome: "Reduced dubbing turnaround to 72 hours while lowering localization costs by 68%.",
      metric: "+420% Subscriber Retention",
      tag: "OTT Localization",
    },
    {
      id: "youtube-automation",
      category: "Web & Automation",
      title: "YouTube Creator Channel Automation",
      client: "Top 10M Subscriber Creator",
      summary: "Automated end-to-end post-production, auto-captioning, motion graphic overlays, and multi-format shorts distribution.",
      challenge: "High video editing workload limited output to 1 video per week despite high audience demand.",
      solution: "Engineered automated cloud rendering pipeline with custom Adobe Premiere & DaVinci API bridges.",
      outcome: "Expanded output to 5 long-form videos and 20 Shorts weekly with zero quality degradation.",
      metric: "18.5M Organic Views",
      tag: "Post-Production Automation",
    },
    {
      id: "agriniri-transformation",
      category: "Web & Automation",
      title: "Agriniri Digital Transformation",
      client: "Agriniri Agritech",
      summary: "Complete web platform overhaul, interactive product demo engine, and automated multilingual video onboarding.",
      challenge: "Legacy web presence failed to convert corporate enterprise buyers and lacked mobile engagement.",
      solution: "Built Next.js 16 dark-mode web portal integrated with custom AI avatar product explainers.",
      outcome: "Elevated enterprise demo requests by 310% within 45 days of launch.",
      metric: "310% Lead Conversion",
      tag: "Web App & AI Explainer",
    },
    {
      id: "influencer-campaign",
      category: "UGC Ads",
      title: "Influencer Campaign Engine",
      client: "Global D2C Consumer Electronics",
      summary: "Coordinated 25+ top-tier tech creators for a synchronized global product launch across TikTok and YouTube.",
      challenge: "Sourcing, vetting, and scripting creators manually across 5 regions was prone to delays.",
      solution: "Leveraged MotionVox Creator Network with automated rights agreements and standardized video briefs.",
      outcome: "Generated 5.2M organic views and 14,000 direct sales in the launch week.",
      metric: "5.2M Impressions",
      tag: "Creator Campaign",
    },
    {
      id: "ugc-performance",
      category: "UGC Ads",
      title: "D2C High-Converting Performance Ad Engine",
      client: "SaaS & Skincare Brand",
      summary: "Rapid production of 50+ localized UGC ad variations powered by AI avatars and real creators.",
      challenge: "Ad creative fatigue on Meta & TikTok required refreshing ad hooks every 3 days.",
      solution: "Created modular video script matrix with automated AI avatar voice variations and dynamic captions.",
      outcome: "Lowered Customer Acquisition Cost (CAC) by 42% across Meta and TikTok ads.",
      metric: "-42% CAC Drop",
      tag: "Performance Ads",
    },
    {
      id: "realestate-ads",
      category: "AI Avatars",
      title: "Real Estate Cinematic 3D & AI Presenters",
      client: "Luxury Realty Group",
      summary: "Interactive virtual property walkthroughs hosted by multilingual executive AI avatars.",
      challenge: "High cost of international video shoots for luxury overseas real estate clients.",
      solution: "Rendered 3D architectural tours paired with photorealistic AI avatar concierges in 6 languages.",
      outcome: "Closed $12M+ in remote international pre-sales without requiring physical property visits.",
      metric: "$12M Remote Sales",
      tag: "AI Avatar Concierge",
    },
  ];

  const categories = ["All", "Dubbing", "AI Avatars", "Web & Automation", "UGC Ads"];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="featured-work" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#11100E]">
      {/* Glow background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C8A46B]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181715] border border-[#34312B] text-xs font-semibold uppercase tracking-wider text-[#C8A46B] mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Featured Work
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F3F0E8] tracking-tight leading-tight">
              Selected Case Studies, <br />
              <span className="text-silver-gradient">Proven Results.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#181715] border border-[#34312B]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === cat
                    ? "bg-[#C8A46B] text-[#11100E] shadow-md"
                    : "text-[#A8A39A] hover:text-[#F3F0E8] hover:bg-[#201F1C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative bg-[#201F1C] rounded-3xl border border-[#34312B] hover:border-[#C8A46B]/50 overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 shadow-lg"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Banner Preview */}
              <div className="relative aspect-[16/10] bg-[#181715] overflow-hidden flex items-center justify-center p-6 border-b border-[#34312B]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#201F1C] via-[#201F1C]/40 to-transparent z-10" />
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#11100E]/80 backdrop-blur-md text-[10px] uppercase font-mono font-semibold tracking-wider text-[#C8A46B] border border-[#C8A46B]/30">
                  {project.tag}
                </div>
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#C8A46B]/15 text-[#C8A46B] text-[10px] font-mono font-semibold border border-[#C8A46B]/30">
                  {project.metric}
                </div>

                <div className="z-20 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#201F1C]/90 border border-[#34312B] flex items-center justify-center mx-auto mb-2 text-[#F3F0E8] group-hover:scale-110 group-hover:bg-[#C8A46B] group-hover:text-[#11100E] transition-all">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <span className="text-[11px] text-[#A8A39A] font-mono">CLICK TO INSPECT CASE STUDY</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A8A39A]/70 font-mono">
                    {project.client}
                  </span>
                  <h3 className="text-lg font-bold text-[#F3F0E8] mt-1 mb-2 group-hover:text-[#C8A46B] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#A8A39A] line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#34312B] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#C8A46B] flex items-center gap-1">
                    Read Breakdown
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#A8A39A] group-hover:text-[#F3F0E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#11100E]/90 backdrop-blur-lg">
            {/* Outer Rounded Container clipped strictly with rounded-3xl overflow-hidden */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#181715] border border-[#34312B] shadow-2xl overflow-hidden my-auto max-h-[85vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-30 p-2 rounded-full bg-[#201F1C] text-[#A8A39A] hover:text-[#F3F0E8] hover:bg-[#34312B] transition-colors border border-[#34312B]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Inner Scrollable Container with data-lenis-prevent and internal right padding for scrollbar */}
              <div
                data-lenis-prevent="true"
                className="w-full h-full overflow-y-auto p-6 sm:p-8 pr-5 sm:pr-7 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#34312B] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#C8A46B]"
              >
                <div className="mb-6 pr-6">
                  <span className="px-3 py-1 rounded-full bg-[#C8A46B]/10 border border-[#C8A46B]/30 text-[#C8A46B] text-xs font-mono">
                    {selectedProject.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F3F0E8] mt-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-[#A8A39A]/70 mt-1">Client: {selectedProject.client}</p>
                </div>

                {/* Key Metric Banner */}
                <div className="p-4 rounded-2xl bg-[#C8A46B]/10 border border-[#C8A46B]/30 flex items-center justify-between mb-8">
                  <div>
                    <span className="text-xs text-[#C8A46B] font-medium block">Key Impact Metric</span>
                    <span className="text-2xl font-extrabold text-[#F3F0E8]">{selectedProject.metric}</span>
                  </div>
                  <TrendingUp className="w-8 h-8 text-[#C8A46B]" />
                </div>

                {/* Challenge & Solution Grid */}
                <div className="space-y-6 mb-8 text-sm">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#A8A39A] mb-2 font-semibold">
                      The Challenge
                    </h4>
                    <p className="text-[#F3F0E8] leading-relaxed p-4 rounded-xl bg-[#201F1C] border border-[#34312B]">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#A8A39A] mb-2 font-semibold">
                      The MotionVox Solution
                    </h4>
                    <p className="text-[#F3F0E8] leading-relaxed p-4 rounded-xl bg-[#201F1C] border border-[#34312B]">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#A8A39A] mb-2 font-semibold">
                      Business Outcome
                    </h4>
                    <p className="text-[#F3F0E8] leading-relaxed p-4 rounded-xl bg-[#201F1C] border border-[#34312B]">
                      {selectedProject.outcome}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-3.5 rounded-full bg-[#C8A46B] hover:bg-[#D8B982] text-[#11100E] font-semibold text-xs text-center cursor-pointer transition-colors shadow-md"
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
