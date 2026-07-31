"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes MotionVox different from traditional agencies or pure AI tools?",
      answer:
        "Pure AI tools produce mechanical, emotionless output; traditional agencies are slow and expensive. MotionVox operates a hybrid model: we combine proprietary neural AI engines (dubbing, avatars, auto-captions) with veteran creative directors, audio engineers, and native voice directors to deliver studio-quality media at 10x speed.",
    },
    {
      question: "How natural is your multi-language dubbing and lip-sync accuracy?",
      answer:
        "Our neural models match original voice pitch, emotional timbre, and cadence across 130+ languages. We apply AI lip-sync refinement to align facial movements with translated audio, ensuring viewer immersion with zero uncanny valley effect.",
    },
    {
      question: "Can we create custom AI video avatars for our executive team or presenters?",
      answer:
        "Yes! With a simple 5-minute video recording session, we create high-fidelity 4K digital avatars. Once trained, your team can generate unlimited videos in any language simply by inputting a text script.",
    },
    {
      question: "What is the typical turnaround time for a media project?",
      answer:
        "Neural dubbing & video avatar renders are typically completed within 24 to 48 hours. Custom web development and end-to-end studio workflow automation take between 1 to 2 weeks.",
    },
    {
      question: "How do you protect executive voice rights, privacy, and proprietary media?",
      answer:
        "We prioritize enterprise privacy. All assets, voice models, and scripts are protected under strict bilateral NDAs. We train isolated models in encrypted environments with zero public data sharing.",
    },
    {
      question: "How does pricing work for MotionVox services?",
      answer:
        "We offer flexible project-based pricing for custom web & production projects, as well as monthly studio retainer packages for high-volume creator channels and OTT platforms requiring ongoing dubbing and automation.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Got Questions?
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Everything you need to know about our dubbing, AI avatars, web engineering, and media workflows.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-white text-base sm:text-lg hover:text-sky-300 transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div className="p-2 rounded-full bg-white/5 text-sky-400 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-zinc-400 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
