"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Sparkles, Share2, Globe, Video, ExternalLink } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#27272A] pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#27272A]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-9 h-9 rounded-full border border-[#27272A] group-hover:border-[#E2E8F0] transition-colors overflow-hidden shrink-0 shadow-md flex items-center justify-center bg-black">
                <Image
                  src="/IMG_3249.PNG"
                  alt="MotionVox Logo"
                  fill
                  className="object-cover object-center filter brightness-110 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-[#FAFAFA] text-xl leading-none group-hover:text-[#FFFFFF] transition-colors">
                  Motion<span className="text-[#E2E8F0]">Vox</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#A1A1AA] font-medium leading-none mt-1">
                  Creative Studio
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#A1A1AA] max-w-sm leading-relaxed">
              Refined Media Solutions, Crafted with Expertise. Premium creative studio for neural dubbing, AI video avatars, and automated media production.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="flex h-2 w-2 rounded-full bg-[#FAFAFA] animate-pulse" />
              <span className="text-[11px] font-mono text-[#A1A1AA]">All Neural Rendering Clusters Operational</span>
            </div>
          </div>

          {/* Nav Column 1 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAFAFA] font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-[#FFFFFF] transition-colors">
                  Professional Dubbing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFFFFF] transition-colors">
                  AI Video Avatars
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFFFFF] transition-colors">
                  Multimedia Production
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFFFFF] transition-colors">
                  Influencer Network
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFFFFF] transition-colors">
                  Custom Websites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFFFFF] transition-colors">
                  Workflow Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAFAFA] font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/blog" className="hover:text-[#FFFFFF] transition-colors text-[#E2E8F0] font-medium">
                  Studio Journal (Blog)
                </Link>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#FFFFFF] transition-colors">
                  Why MotionVox
                </a>
              </li>
              <li>
                <a href="#featured-work" className="hover:text-[#FFFFFF] transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#FFFFFF] transition-colors">
                  Production Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#FFFFFF] transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FFFFFF] transition-colors">
                  Contact Studio
                </a>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#FFFFFF] transition-colors text-[#A1A1AA]/70 font-mono text-[10px]">
                  Admin Console
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 3 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAFAFA] font-semibold mb-4">
              Legal & Privacy
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="hover:text-[#FFFFFF] transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-[#FFFFFF] transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="hover:text-[#FFFFFF] transition-colors cursor-pointer">
                  Voice Rights & Licensing
                </span>
              </li>
              <li>
                <span className="hover:text-[#FFFFFF] transition-colors cursor-pointer">
                  Security Architecture
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant Outlined Watermark Text */}
        <div className="mt-12 pt-8 border-t border-[#27272A] text-center overflow-hidden">
          <span className="text-[12vw] font-black uppercase tracking-tighter text-outline select-none leading-none block opacity-30 pointer-events-none">
            MOTIONVOX
          </span>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} MotionVox Studio. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#141414] border border-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors flex items-center gap-1"
              aria-label="X / Twitter"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>X</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#141414] border border-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors flex items-center gap-1"
              aria-label="LinkedIn"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#141414] border border-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors flex items-center gap-1"
              aria-label="YouTube"
            >
              <Video className="w-3.5 h-3.5" />
              <span>YouTube</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#1C1C1C] border border-[#27272A] hover:bg-[#FAFAFA] hover:text-[#0A0A0A] text-[#FAFAFA] transition-all ml-2 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );

}
