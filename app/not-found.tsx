"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Sparkles, ArrowLeft, Newspaper, Calendar } from "lucide-react";
import { useDemoModal } from "@/components/providers/demo-provider";

export default function NotFoundPage() {
  const { openDemo } = useDemoModal();

  return (
    <main className="relative flex flex-col flex-1 min-h-screen bg-[#0A0A0A] text-[#FAFAFA] overflow-x-hidden">
      <Navbar />

      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full my-auto text-center space-y-8">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none transform-gpu" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#27272A] text-[#E2E8F0] text-xs font-mono font-medium">
          <Sparkles className="w-3.5 h-3.5" /> 404 // SIGNAL LOST
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#FAFAFA] leading-tight">
          Article or Page <br />
          <span className="text-silver-gradient font-light italic">Not Found.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#A1A1AA] max-w-xl mx-auto font-light leading-relaxed">
          The requested URL or journal post has been moved, renamed, or does not exist. Explore our latest articles or schedule a live demo session.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141414] border border-[#27272A] text-[#FAFAFA] hover:border-[#E2E8F0] text-xs font-semibold transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" /> MotionVox Home
          </Link>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C1C1C] border border-[#27272A] text-[#FAFAFA] hover:border-[#E2E8F0] text-xs font-semibold transition-all shadow-md"
          >
            <Newspaper className="w-4 h-4 text-[#E2E8F0]" /> Browse Journal
          </Link>

          <button
            onClick={openDemo}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAFAFA] hover:bg-[#FFFFFF] text-[#0A0A0A] text-xs font-semibold transition-all shadow-md cursor-pointer"
          >
            <Calendar className="w-4 h-4" /> Book a Demo
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
