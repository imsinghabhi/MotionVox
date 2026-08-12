"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function TrustedBy() {
  const partners = [
    { name: "STAGE OTT", desc: "Regional Streaming Platform" },
    { name: "AGRINIRI", desc: "Digital Transformation" },
    { name: "YOUTUBE CREATOR NETWORK", desc: "10M+ Subscriber Channels" },
    { name: "D2C GLOBAL MEDIA", desc: "E-Commerce Performance Ads" },
    { name: "ENTERPRISE SAAS", desc: "Automated Product Demos" },
    { name: "PRODUCTIONS CO", desc: "Cinematic Post-House" },
    { name: "GLOBAL INFLUENCER LAB", desc: "Creator Campaign Engine" },
  ];

  return (
    <section className="relative py-14 border-y border-[#34312B]/40 bg-[#181715] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A8A39A] flex items-center justify-center gap-2">
          <Sparkles className="w-3 h-3 text-[#C8A46B]" />
          <span>Trusted by Leading Studios, SaaS Brands & Global Creators</span>
        </p>
      </div>

      {/* Fade Gradients on left and right */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#181715] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#181715] to-transparent z-10 pointer-events-none" />

      {/* Infinite Marquee Container */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 transform-gpu">
          {[...partners, ...partners].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer group"
            >
              <div className="h-2 w-2 rounded-full bg-[#C8A46B]/40 group-hover:bg-[#C8A46B] group-hover:shadow-[0_0_10px_rgba(200,164,107,0.6)] transition-all" />
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold tracking-wider text-[#A8A39A] group-hover:text-[#F3F0E8] font-mono transition-colors">
                  {item.name}
                </span>
                <span className="text-[10px] text-[#A8A39A]/70 group-hover:text-[#A8A39A]">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
