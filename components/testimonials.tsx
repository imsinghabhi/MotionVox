"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      quote:
        "MotionVox revolutionized our OTT localization workflow. We dubbed 12 full original series into 8 regional languages in under two weeks with neural voice fidelity that blew our executive team away.",
      author: "Vikram Sharma",
      role: "Head of Content & Localization",
      company: "STAGE OTT Network",
      metric: "12 Series Dubbed",
      rating: 5,
    },
    {
      quote:
        "The custom AI avatars MotionVox built for our executive team transformed how we ship video documentation and product updates. Production time dropped from 3 days to literally 15 minutes.",
      author: "Elena Rostova",
      role: "VP of Product Marketing",
      company: "SaaS Enterprise Cloud",
      metric: "95% Speed Boost",
      rating: 5,
    },
    {
      quote:
        "Our YouTube channel went from 1.2M to 10M subscribers thanks to MotionVox’s automated post-production and Shorts editing. Their team understands pacing and retention better than any agency we’ve worked with.",
      author: "Marcus Chen",
      role: "Lead Creator & Producer",
      company: "TechUnboxed Media",
      metric: "10M Subscribers",
      rating: 5,
    },
    {
      quote:
        "MotionVox redesigned our digital platform from scratch and integrated automated explainer videos. Our demo booking conversion rate tripled in the first 30 days. Worth every single dollar.",
      author: "Rajesh Agrawal",
      role: "Chief Executive Officer",
      company: "Agriniri Solutions",
      metric: "3x Conversion Rate",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="relative py-32 px-4 sm:px-6 lg:px-12 bg-[#0A0A0A] border-t border-[#27272A] studio-noise-bg">
      {/* Background glow */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-white/5 rounded-full blur-[160px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6 pb-8 border-b border-[#27272A]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#27272A] text-[11px] font-mono uppercase tracking-widest text-[#E2E8F0] mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Client Proof & Endorsements
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#FAFAFA] tracking-tight leading-tight">
              Validated by Leaders, <br />
              <span className="text-silver-gradient font-light italic">Loved by Global Creators.</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevReview}
              className="p-4 rounded-full bg-[#141414] border border-[#27272A] hover:border-[#E2E8F0] hover:text-[#FFFFFF] text-[#FAFAFA] transition-all cursor-pointer shadow-lg"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="p-4 rounded-full bg-[#141414] border border-[#27272A] hover:border-[#E2E8F0] hover:text-[#FFFFFF] text-[#FAFAFA] transition-all cursor-pointer shadow-lg"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Editorial Quote Showcase */}
        <div className="relative py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Star Rating Badge Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#27272A]">
                <div className="flex items-center gap-1 text-[#FAFAFA]">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FAFAFA] text-[#FAFAFA]" />
                  ))}
                </div>
                <span className="text-[11px] font-mono font-bold text-[#FAFAFA] pl-1 border-l border-[#27272A]">
                  5.0 VERIFIED RATING
                </span>
              </div>

              <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-light text-[#FAFAFA] leading-tight tracking-tight max-w-5xl">
                &ldquo;{reviews[currentIndex].quote}&rdquo;
              </blockquote>

              <div className="pt-8 border-t border-[#27272A] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-bold text-[#FAFAFA]">
                    {reviews[currentIndex].author}
                  </h4>
                  <p className="text-xs font-mono text-[#A1A1AA] mt-1">
                    {reviews[currentIndex].role} —{" "}
                    <span className="text-[#E2E8F0]">{reviews[currentIndex].company}</span>
                  </p>
                </div>

                <div className="px-5 py-2.5 rounded-full bg-[#1C1C1C] border border-[#27272A] text-[#FAFAFA] font-mono text-xs font-bold w-fit">
                  RESULT: {reviews[currentIndex].metric}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );

}
