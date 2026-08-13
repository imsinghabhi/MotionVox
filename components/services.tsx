"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  Bot,
  Film,
  Users,
  Code2,
  Workflow,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  Plus,
  Minus,
  Sliders,
} from "lucide-react";

interface ServiceItem {
  id: string;
  num: string;
  icon: React.ElementType;
  title: string;
  category: string;
  description: string;
  features: string[];
  specs: {
    turnaround: string;
    languages?: string;
    deliverable: string;
    idealFor: string;
  };
}

export function Services() {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);
  const [activeRowId, setActiveRowId] = useState<string>("dubbing");

  const servicesList: ServiceItem[] = [
    {
      id: "dubbing",
      num: "01",
      icon: Mic,
      category: "Localization & Voice",
      title: "Professional Neural Dubbing",
      description:
        "Global neural voice dubbing preserving original actor emotion, vocal timbre, and natural lip synchronization in 130+ languages.",
      features: [
        "Vocal Tone & Emotion Preservation",
        "AI Lip-Sync Fine-Tuning",
        "Native Cultural Nuance Adaptation",
        "Studio Multi-Track Audio Master",
      ],
      specs: {
        turnaround: "24-48 Hours",
        languages: "130+ Global Dialects",
        deliverable: "Multi-Stems Audio & Sync Video",
        idealFor: "OTT Platforms, YouTube Creators, Film Studios",
      },
    },
    {
      id: "avatars",
      num: "02",
      icon: Bot,
      category: "Digital Twins",
      title: "AI Video Avatars & Digital Twins",
      description:
        "Custom, photorealistic AI video avatars trained on key executives or brand presenters for instant, script-to-video content generation.",
      features: [
        "4K Studio Quality Rendering",
        "Micro-Expression Facial Animations",
        "Script-to-Video Automated Pipeline",
        "Personalized Scale Communications",
      ],
      specs: {
        turnaround: "Real-time / Instant Render",
        deliverable: "4K MP4 / ProRes Video",
        idealFor: "SaaS Product Demos, Training, Enterprise Sales",
      },
    },
    {
      id: "production",
      num: "03",
      icon: Film,
      category: "Cinematic Creative",
      title: "Multimedia Production & Finishing",
      description:
        "High-end post-production, motion graphic design, color grading, and sound architecture that turns raw footage into blockbuster stories.",
      features: [
        "Custom 3D & 2D Motion Graphics",
        "Color Grading & HDR Finishing",
        "Spatial Audio & Sound Design",
        "High-Converting Commercial Edits",
      ],
      specs: {
        turnaround: "3-5 Business Days",
        deliverable: "ProRes Master & Social Ratios",
        idealFor: "D2C Ad Campaigns, Commercials, Product Launches",
      },
    },
    {
      id: "influencer",
      num: "04",
      icon: Users,
      category: "Viral Creator Network",
      title: "Influencer Campaign Engine",
      description:
        "Data-driven creator match-making and end-to-end campaign execution across YouTube, Instagram, and TikTok to fuel organic hyper-growth.",
      features: [
        "Creator Sourcing & Vetting",
        "UGC Performance Creative Engine",
        "Rights Management & Scripting",
        "Real-Time Campaign ROI Tracking",
      ],
      specs: {
        turnaround: "Turnkey Campaign Execution",
        deliverable: "10+ UGC Assets & Campaign Report",
        idealFor: "E-Commerce Brands, Mobile Apps, Consumer Tech",
      },
    },
    {
      id: "web",
      num: "05",
      icon: Code2,
      category: "Full-Fledged Web Platforms",
      title: "Full-Fledged Web Apps & Custom ERP Systems",
      description:
        "We engineer complex, end-to-end web platforms, custom ERP software, CRM portals, enterprise SaaS dashboards, and high-converting Awwwards-caliber digital applications built with Next.js and robust cloud architecture.",
      features: [
        "Custom Enterprise ERP & CRM Software",
        "Full-Fledged SaaS & Web Application Architecture",
        "Awwwards-Grade Motion & Interactive UI Design",
        "Real-Time Database, API & Role-Based Security",
      ],
      specs: {
        turnaround: "1-3 Weeks",
        deliverable: "Full-Stack Next.js / Node Codebase & Cloud Deploy",
        idealFor: "Enterprise Corporations, Scaling SaaS, ERP Buyers, Media Houses",
      },
    },
    {
      id: "automation",
      num: "06",
      icon: Workflow,
      category: "Studio Engineering",
      title: "Workflow & Cloud Pipeline Automation",
      description:
        "Custom AI pipeline integration connecting scripts, voiceover engines, auto-captioning, and social distribution without human bottlenecks.",
      features: [
        "Autonomous Content Pipelines",
        "AI Batch Video Processing",
        "Automated Subtitle & Asset Export",
        "Custom API & Zapier/Make Bridges",
      ],
      specs: {
        turnaround: "Custom Integration",
        deliverable: "Complete Studio API Setup",
        idealFor: "Media Houses, High-Volume Content Teams",
      },
    },
  ];

  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-12 bg-[#0A0A0A] border-t border-[#27272A] studio-noise-bg">
      {/* Dynamic Background Ambient Accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[140px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8 pb-12 border-b border-[#27272A]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#27272A] text-[11px] font-mono uppercase tracking-widest text-[#E2E8F0] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#E2E8F0]" /> Studio Capabilities
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#FAFAFA] tracking-tight leading-[1.05]">
              Core Services & <br />
              <span className="text-silver-gradient font-light italic">Engineered Solutions.</span>
            </h2>
          </div>
          <div className="max-w-md space-y-4">
            <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
              Discarding generic templates for bespoke studio craftsmanship. Explore our interactive capability suite designed for high-scale media execution.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-[#E2E8F0]">
              <span className="w-2 h-2 rounded-full bg-[#E2E8F0] animate-ping" />
              <span>SELECT ANY ROW TO EXPLORE FULL SPECS</span>
            </div>
          </div>
        </div>

        {/* Awwwards Interactive Editorial Accordion / Row List */}
        <div className="divide-y divide-[#27272A] border-y border-[#27272A]">
          {servicesList.map((service) => {
            const Icon = service.icon;
            const isOpen = activeRowId === service.id;

            return (
              <div
                key={service.id}
                className={`group transition-all duration-500 cursor-pointer ${
                  isOpen ? "bg-[#141414]/90 py-8 px-4 sm:px-8" : "hover:bg-[#141414]/40 py-7 px-4 sm:px-6"
                }`}
                onClick={() => setActiveRowId(isOpen ? "" : service.id)}
              >
                {/* Main Visible Summary Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left Index & Title */}
                  <div className="flex items-center gap-6 sm:gap-8 flex-1">
                    <span
                      className={`font-mono text-xl sm:text-2xl font-bold transition-colors ${
                        isOpen ? "text-[#E2E8F0]" : "text-[#A1A1AA]/40 group-hover:text-[#E2E8F0]"
                      }`}
                    >
                      {service.num}
                    </span>

                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2.5 rounded-xl border transition-all ${
                          isOpen
                            ? "bg-[#FAFAFA] text-[#0A0A0A] border-[#FFFFFF]"
                            : "bg-[#1C1C1C] text-[#A1A1AA] border-[#27272A] group-hover:text-[#FAFAFA] group-hover:border-[#E2E8F0]/40"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3
                        className={`text-xl sm:text-3xl font-extrabold tracking-tight transition-colors ${
                          isOpen ? "text-[#FAFAFA]" : "text-[#FAFAFA]/80 group-hover:text-[#FAFAFA]"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right Category Badge & Expand Toggle */}
                  <div className="flex items-center justify-between md:justify-end gap-6">
                    <span className="text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[#1C1C1C] border border-[#27272A] text-[#A1A1AA]">
                      {service.category}
                    </span>

                    <span className="hidden sm:inline-block text-xs font-mono text-[#E2E8F0]">
                      {service.specs.turnaround}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        isOpen
                          ? "bg-[#FAFAFA] text-[#0A0A0A] rotate-45"
                          : "bg-[#1C1C1C] text-[#A1A1AA] group-hover:bg-[#27272A] group-hover:text-[#FAFAFA]"
                      }`}
                    >
                      <Plus className="w-5 h-5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Smooth Expanded Editorial Detail Panel */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 mt-6 border-t border-[#27272A] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column: Narrative & Key Features */}
                        <div className="lg:col-span-7 space-y-6">
                          <p className="text-base text-[#A1A1AA] leading-relaxed font-normal">
                            {service.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {service.features.map((feat, fIdx) => (
                              <div
                                key={fIdx}
                                className="flex items-center gap-3 text-xs sm:text-sm text-[#FAFAFA] p-3 rounded-xl bg-[#1C1C1C]/60 border border-[#27272A]"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#E2E8F0] shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Column: Spec Highlights & Action Button */}
                        <div className="lg:col-span-5 bg-[#1C1C1C] p-6 rounded-2xl border border-[#27272A] space-y-4">
                          <div className="flex items-center justify-between border-b border-[#27272A] pb-3">
                            <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                              Deliverables
                            </span>
                            <span className="text-xs font-semibold text-[#FAFAFA]">
                              {service.specs.deliverable}
                            </span>
                          </div>

                          <div className="flex items-center justify-between border-b border-[#27272A] pb-3">
                            <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                              Turnaround Time
                            </span>
                            <span className="text-xs font-semibold text-[#E2E8F0]">
                              {service.specs.turnaround}
                            </span>
                          </div>

                          {service.specs.languages && (
                            <div className="flex items-center justify-between border-b border-[#27272A] pb-3">
                              <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                                Language Dialects
                              </span>
                              <span className="text-xs font-semibold text-[#FAFAFA]">
                                {service.specs.languages}
                              </span>
                            </div>
                          )}

                          <div className="pt-2 flex items-center gap-3">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedServiceModal(service);
                              }}
                              className="w-full py-3 px-4 rounded-xl bg-[#FAFAFA] hover:bg-[#FFFFFF] text-[#0A0A0A] font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                            >
                              <Sliders className="w-4 h-4" />
                              <span>Inspect Technical Specs</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Specification Drawer Modal */}
      <AnimatePresence>
        {selectedServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-xl rounded-3xl bg-[#141414] border border-[#27272A] shadow-2xl overflow-hidden my-auto max-h-[85vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="absolute top-5 right-5 z-30 p-2 rounded-full bg-[#1C1C1C] text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A] transition-colors border border-[#27272A]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div
                data-lenis-prevent="true"
                className="w-full h-full overflow-y-auto p-6 sm:p-8 pr-5 sm:pr-7 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#27272A] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#E2E8F0]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-[#1C1C1C] border border-[#27272A] text-[#E2E8F0]">
                    <selectedServiceModal.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-[#E2E8F0]">
                      {selectedServiceModal.category}
                    </span>
                    <h3 className="text-2xl font-bold text-[#FAFAFA]">
                      {selectedServiceModal.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {selectedServiceModal.description}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#A1A1AA] border-b border-[#27272A] pb-2">
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="p-3 rounded-xl bg-[#1C1C1C] border border-[#27272A]">
                      <span className="text-[#A1A1AA] block mb-1">Turnaround Time</span>
                      <span className="font-semibold text-[#FAFAFA]">
                        {selectedServiceModal.specs.turnaround}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#1C1C1C] border border-[#27272A]">
                      <span className="text-[#A1A1AA] block mb-1">Deliverables</span>
                      <span className="font-semibold text-[#FAFAFA]">
                        {selectedServiceModal.specs.deliverable}
                      </span>
                    </div>
                    {selectedServiceModal.specs.languages && (
                      <div className="p-3 rounded-xl bg-[#1C1C1C] border border-[#27272A]">
                        <span className="text-[#A1A1AA] block mb-1">Language Coverage</span>
                        <span className="font-semibold text-[#FAFAFA]">
                          {selectedServiceModal.specs.languages}
                        </span>
                      </div>
                    )}
                    <div className="p-3 rounded-xl bg-[#1C1C1C] border border-[#27272A]">
                      <span className="text-[#A1A1AA] block mb-1">Target Audience</span>
                      <span className="font-semibold text-[#FAFAFA]">
                        {selectedServiceModal.specs.idealFor}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="#contact"
                    onClick={() => setSelectedServiceModal(null)}
                    className="flex-1 py-3.5 rounded-full bg-[#FAFAFA] hover:bg-[#FFFFFF] text-[#0A0A0A] font-semibold text-xs text-center flex items-center justify-center gap-2 transition-colors shadow-md"
                  >
                    <span>Request Custom Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
