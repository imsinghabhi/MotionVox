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
} from "lucide-react";

interface ServiceItem {
  id: string;
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
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const servicesList: ServiceItem[] = [
    {
      id: "dubbing",
      icon: Mic,
      category: "Localization & Voice",
      title: "Professional Dubbing",
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
      icon: Bot,
      category: "Digital Twins",
      title: "AI Video Avatars",
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
      icon: Film,
      category: "Cinematic Creative",
      title: "Multimedia Production",
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
      icon: Users,
      category: "Viral Creator Network",
      title: "Influencer Marketing",
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
      icon: Code2,
      category: "Digital Platforms",
      title: "Custom Websites & Portfolios",
      description:
        "Ultra-high-converting, Awwwards-caliber digital platforms, interactive portfolios, and web apps built with Next.js and custom motion design.",
      features: [
        "Awwwards-Grade Glassmorphism",
        "Sub-Second Page Load Optimization",
        "Interactive 3D & Micro-Animations",
        "Enterprise SEO Schema Architecture",
      ],
      specs: {
        turnaround: "1-2 Weeks",
        deliverable: "Next.js Codebase & Vercel Deploy",
        idealFor: "SaaS Startups, Agencies, High-Ticket Services",
      },
    },
    {
      id: "automation",
      icon: Workflow,
      category: "Studio Engineering",
      title: "Workflow Automation",
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
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#11100E]">
      {/* Background glow orb */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#C8A46B]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181715] border border-[#34312B] text-xs font-semibold uppercase tracking-wider text-[#C8A46B] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A46B]" /> Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F3F0E8] tracking-tight leading-tight">
              Crafted Media Services, <br />
              <span className="text-silver-gradient">Powered by Innovation.</span>
            </h2>
          </div>
          <p className="text-[#A8A39A] max-w-md text-sm sm:text-base leading-relaxed">
            From neural multi-language dubbing to photorealistic AI avatars, we combine human artistry with cutting-edge automation to scale your media output.
          </p>
        </div>

        {/* 6-Card Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-[#201F1C] p-8 rounded-3xl border border-[#34312B] hover:border-[#C8A46B]/50 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 shadow-lg"
                onClick={() => setSelectedService(service)}
              >
                {/* Background Hover Shimmer */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C8A46B]/10 rounded-full blur-2xl group-hover:bg-[#C8A46B]/20 group-hover:scale-150 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-[#181715] border border-[#34312B] text-[#C8A46B] group-hover:bg-[#C8A46B] group-hover:text-[#11100E] group-hover:border-[#C8A46B] transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8A39A]/70 group-hover:text-[#A8A39A] transition-colors">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#F3F0E8] mb-3 group-hover:text-[#C8A46B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8A39A] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 border-t border-[#34312B] pt-5 mb-6">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#F3F0E8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A46B] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-medium text-[#C8A46B] group-hover:underline flex items-center gap-1">
                    View Specs
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#181715] flex items-center justify-center text-[#A8A39A] group-hover:text-[#11100E] group-hover:bg-[#C8A46B] group-hover:scale-110 transition-all border border-[#34312B]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Specification Drawer Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#11100E]/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-xl rounded-3xl bg-[#181715] border border-[#34312B] shadow-2xl overflow-hidden my-auto max-h-[85vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 z-30 p-2 rounded-full bg-[#201F1C] text-[#A8A39A] hover:text-[#F3F0E8] hover:bg-[#34312B] transition-colors border border-[#34312B]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div
                data-lenis-prevent="true"
                className="w-full h-full overflow-y-auto p-6 sm:p-8 pr-5 sm:pr-7 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#34312B] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#C8A46B]"
              >

              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-[#C8A46B]/10 border border-[#C8A46B]/30 text-[#C8A46B]">
                  <selectedService.icon className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#C8A46B]">
                    {selectedService.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[#F3F0E8]">{selectedService.title}</h3>
                </div>
              </div>

              <p className="text-sm text-[#A8A39A] leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#A8A39A] border-b border-[#34312B] pb-2">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3 rounded-xl bg-[#201F1C] border border-[#34312B]">
                    <span className="text-[#A8A39A] block mb-1">Turnaround Time</span>
                    <span className="font-semibold text-[#F3F0E8]">{selectedService.specs.turnaround}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#201F1C] border border-[#34312B]">
                    <span className="text-[#A8A39A] block mb-1">Deliverables</span>
                    <span className="font-semibold text-[#F3F0E8]">{selectedService.specs.deliverable}</span>
                  </div>
                  {selectedService.specs.languages && (
                    <div className="p-3 rounded-xl bg-[#201F1C] border border-[#34312B]">
                      <span className="text-[#A8A39A] block mb-1">Language Coverage</span>
                      <span className="font-semibold text-[#F3F0E8]">{selectedService.specs.languages}</span>
                    </div>
                  )}
                  <div className="p-3 rounded-xl bg-[#201F1C] border border-[#34312B]">
                    <span className="text-[#A8A39A] block mb-1">Target Audience</span>
                    <span className="font-semibold text-[#F3F0E8]">{selectedService.specs.idealFor}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-3.5 rounded-full bg-[#C8A46B] hover:bg-[#D8B982] text-[#11100E] font-semibold text-xs text-center flex items-center justify-center gap-2 transition-colors shadow-md"
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
