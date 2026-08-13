"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { ProgressiveLogo } from "@/components/progressive-logo";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.error || "Invalid passcode");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] flex items-center justify-center relative overflow-hidden px-4">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo / Header */}
        <div className="text-center mb-8 flex flex-col items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-2xl font-bold tracking-tight text-[#FAFAFA] hover:opacity-90 transition-opacity mb-2"
          >
            <div className="relative w-9 h-9 rounded-full border border-[#27272A] overflow-hidden shrink-0 shadow-md flex items-center justify-center bg-black">
              <ProgressiveLogo />
            </div>
            <span>
              Motion<span className="text-[#E2E8F0]">Vox</span>
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#141414] border border-[#27272A] text-[#E2E8F0] font-mono">
              Admin Console
            </span>
          </Link>
          <p className="text-sm text-[#A1A1AA] mt-2">
            Enter your admin secret passcode to manage blogs & studio updates.
          </p>
        </div>

        {/* Card */}
        <div className="p-8 rounded-2xl bg-[#141414] border border-[#27272A] shadow-2xl relative">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] mb-2 font-mono">
                Admin Passcode
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin passcode"
                  required
                  className="w-full px-4 py-3 pl-11 rounded-xl bg-[#1C1C1C] border border-[#27272A] text-[#FAFAFA] placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#E2E8F0] transition-all font-mono text-sm"
                />
                <Lock className="w-5 h-5 text-[#A1A1AA]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3.5 px-6 rounded-xl bg-[#FAFAFA] hover:bg-[#FFFFFF] text-[#0A0A0A] font-semibold shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full animate-spin" />
              ) : (
                <>
                  <span>Unlock Admin Console</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[#27272A] flex items-center justify-between text-xs text-[#A1A1AA]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E2E8F0]" /> Secure Encryption
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#E2E8F0]" /> Default: <code className="text-[#FAFAFA] bg-[#1C1C1C] px-1 py-0.5 rounded border border-[#27272A]">motionvox2026</code>
            </span>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-xs text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
          >
            ← Return to MotionVox Main Website
          </Link>
        </div>
      </div>
    </div>
  );

}
