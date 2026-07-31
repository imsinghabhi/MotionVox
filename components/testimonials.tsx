"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <section id="testimonials" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-black">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Client Proof
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Validated by Leaders, <br />
              <span className="text-silver-gradient">Loved by Creators.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevReview}
              className="p-3.5 rounded-full glass-button border border-white/10 hover:border-white/30 text-white"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="p-3.5 rounded-full glass-button border border-white/10 hover:border-white/30 text-white"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl overflow-hidden">
          <div className="relative rounded-[22px] bg-zinc-950 p-8 sm:p-12 border border-white/10 overflow-hidden backdrop-blur-xl">
            <Quote className="w-16 h-16 text-sky-400/15 absolute top-6 right-8 pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-1 text-sky-400 mb-6">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-sky-400" />
                ))}
              </div>

              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-3xl font-medium text-white leading-relaxed mb-8 text-balance"
              >
                &ldquo;{reviews[currentIndex].quote}&rdquo;
              </motion.p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div>
                  <h4 className="text-lg font-bold text-white">{reviews[currentIndex].author}</h4>
                  <p className="text-xs text-zinc-400">
                    {reviews[currentIndex].role} — <span className="text-sky-300">{reviews[currentIndex].company}</span>
                  </p>
                </div>

                <div className="px-4 py-2 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 font-mono text-xs font-semibold w-fit">
                  {reviews[currentIndex].metric}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
