"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Sparkles, CheckCircle2, User, Mail, Building2 } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    date: "2026-08-05",
    time: "10:00 AM EST",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  const handleReset = () => {
    setStep("form");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#11100E]/90 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg rounded-3xl bg-[#181715] border border-[#34312B] shadow-2xl overflow-hidden my-auto max-h-[85vh] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-30 p-2 rounded-full bg-[#201F1C] text-[#A8A39A] hover:text-[#F3F0E8] hover:bg-[#34312B] transition-colors border border-[#34312B]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div
              data-lenis-prevent="true"
              className="w-full h-full overflow-y-auto p-6 sm:p-8 pr-5 sm:pr-7 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#34312B] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-[#C8A46B]"
            >
              {/* Ambient Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8A46B]/5 rounded-full blur-3xl pointer-events-none" />

            {step === "form" ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A46B]/10 border border-[#C8A46B]/30 text-[#C8A46B] text-xs font-mono w-fit">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>VIP Live Session</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#F3F0E8]">Book a Live Product Demo</h3>
                  <p className="text-xs text-[#A8A39A] mt-1">
                    Experience custom neural dubbing, AI avatars, and media automation built live for your brand.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-[11px] font-mono text-[#A8A39A] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#A8A39A]/60 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#201F1C] border border-[#34312B] text-[#F3F0E8] placeholder-[#A8A39A]/50 focus:outline-none focus:border-[#C8A46B] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#A8A39A] uppercase tracking-wider mb-1.5">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#A8A39A]/60 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#201F1C] border border-[#34312B] text-[#F3F0E8] placeholder-[#A8A39A]/50 focus:outline-none focus:border-[#C8A46B] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#A8A39A] uppercase tracking-wider mb-1.5">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-[#A8A39A]/60 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        placeholder="Acme Studios"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#201F1C] border border-[#34312B] text-[#F3F0E8] placeholder-[#A8A39A]/50 focus:outline-none focus:border-[#C8A46B] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-[#A8A39A] uppercase tracking-wider mb-1.5">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-[#A8A39A]/60 absolute left-3.5 top-3.5" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#201F1C] border border-[#34312B] text-[#F3F0E8] focus:outline-none focus:border-[#C8A46B] text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#A8A39A] uppercase tracking-wider mb-1.5">
                        Time Slot
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-[#A8A39A]/60 absolute left-3.5 top-3.5" />
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#201F1C] border border-[#34312B] text-[#F3F0E8] focus:outline-none focus:border-[#C8A46B] text-xs"
                        >
                          <option value="10:00 AM EST">10:00 AM EST</option>
                          <option value="02:00 PM EST">02:00 PM EST</option>
                          <option value="06:00 PM IST">06:00 PM IST</option>
                          <option value="09:00 PM IST">09:00 PM IST</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#C8A46B] hover:bg-[#D8B982] text-[#11100E] font-semibold text-xs text-center flex items-center justify-center gap-2 cursor-pointer mt-4 transition-colors shadow-md"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirm Demo Booking</span>
                </button>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C8A46B]/15 border border-[#C8A46B] text-[#C8A46B] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#F3F0E8]">Demo Confirmed!</h3>
                <p className="text-xs text-[#A8A39A] max-w-sm mx-auto leading-relaxed">
                  We have scheduled your 1-on-1 session for <span className="text-[#C8A46B] font-semibold">{formData.date} at {formData.time}</span>. Calendar invite and Google Meet link have been sent to <span className="text-[#F3F0E8] font-semibold">{formData.email}</span>.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#C8A46B] hover:bg-[#D8B982] text-[#11100E] text-xs font-semibold cursor-pointer transition-colors shadow-md"
                >
                  Done
                </button>
              </div>
            )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
