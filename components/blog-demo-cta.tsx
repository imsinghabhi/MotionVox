"use client";

import React from "react";
import { Sparkles, Calendar } from "lucide-react";
import { useDemoModal } from "@/components/providers/demo-provider";

export function BlogDemoCTA() {
  const { openDemo } = useDemoModal();

  return (
    <div className="p-8 rounded-3xl bg-[#141414] border border-[#27272A] text-center space-y-4 shadow-xl studio-noise-bg">
      <div className="inline-flex items-center gap-1.5 text-xs text-[#E2E8F0] font-mono">
        <Sparkles className="w-4 h-4" /> Ready to Automate Your Video Production?
      </div>
      <h3 className="text-2xl font-bold text-[#FAFAFA]">
        Scale Your Media Production with MotionVox
      </h3>
      <p className="text-sm text-[#A1A1AA] max-w-xl mx-auto">
        Our neural dubbing and photorealistic video avatar workflows help industry leaders produce Studio-grade media content in any language.
      </p>
      <div>
        <button
          onClick={openDemo}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAFAFA] hover:bg-[#FFFFFF] text-[#0A0A0A] font-semibold text-sm transition-all hover:scale-105 shadow-md cursor-pointer"
        >
          <Calendar className="w-4 h-4" /> Book a Demo Call
        </button>
      </div>
    </div>
  );
}
