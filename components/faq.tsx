"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Plus, ArrowUpRight } from "lucide-react";

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
      question: "Do you engineer full-fledged web applications, ERP software, and SaaS portals?",
      answer:
        "Absolutely. MotionVox engineers end-to-end full-fledged web platforms, custom ERP systems, CRM portals, enterprise SaaS dashboards, and complex digital platforms using Next.js, Node.js, and real-time database architecture—combined with Awwwards-caliber motion design and integrated AI explainer avatars.",
    },
    {
      question: "What is the typical turnaround time for a media or web project?",
      answer:
        "Neural dubbing & video avatar renders are typically completed within 24 to 48 hours. Custom web development, full-fledged ERP systems, and studio workflow automation take between 1 to 3 weeks.",
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
    <section id="faq" className="relative py-32 px-4 sm:px-6 lg:px-12 bg-[#0A0A0A] border-t border-[#27272A] studio-noise-bg">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8 pb-8 border-b border-[#27272A]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#27272A] text-[11px] font-mono uppercase tracking-widest text-[#E2E8F0] mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Studio Knowledge Base
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#FAFAFA] tracking-tight leading-tight">
              Frequently Asked <br />
              <span className="text-silver-gradient font-light italic">Questions & Inquiries.</span>
            </h2>
          </div>
          <p className="text-[#A1A1AA] max-w-sm text-sm leading-relaxed">
            Everything you need to know about our dubbing workflows, AI avatars, security guarantees, and execution models.
          </p>
        </div>

        {/* Clean Editorial Line Accordion List */}
        <div className="divide-y divide-[#27272A] border-y border-[#27272A]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="group py-8 transition-colors cursor-pointer"
                onClick={() => toggleFAQ(idx)}
              >
                <div className="flex items-center justify-between gap-6 text-left">
                  <div className="flex items-center gap-6 flex-1">
                    <span className="font-mono text-xs text-[#A1A1AA]/60 font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${isOpen ? "text-[#E2E8F0]" : "text-[#FAFAFA] group-hover:text-[#FFFFFF]"}`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-[#FAFAFA] text-[#0A0A0A] rotate-45" : "bg-[#141414] text-[#A1A1AA] group-hover:text-[#FAFAFA]"}`}>
                    <Plus className="w-5 h-5 transition-transform" />
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pl-10 pr-6 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
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
