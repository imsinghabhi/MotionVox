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
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-zinc-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-sky-400/50 transition-colors overflow-hidden">
                <Image
                  src="/IMG_3249.PNG"
                  alt="MotionVox Logo"
                  width={28}
                  height={28}
                  className="object-contain filter brightness-125"
                />
              </div>
              <span className="font-bold tracking-tight text-white text-xl">
                Motion<span className="text-sky-400">Vox</span>
              </span>
            </Link>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Refined Media Solutions, Crafted with Expertise. Premium creative studio for neural dubbing, AI video avatars, and automated media production.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-zinc-400">All Neural Rendering Clusters Operational</span>
            </div>
          </div>

          {/* Nav Column 1 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Professional Dubbing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AI Video Avatars
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Multimedia Production
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Influencer Network
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Websites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Workflow Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why MotionVox
                </a>
              </li>
              <li>
                <a href="#featured-work" className="hover:text-white transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Production Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 3 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Legal & Privacy
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Voice Rights & Licensing
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Security Architecture
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} MotionVox Studio. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
              aria-label="X / Twitter"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>X</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
              aria-label="LinkedIn"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
              aria-label="YouTube"
            >
              <Video className="w-3.5 h-3.5" />
              <span>YouTube</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-sky-500 hover:text-black text-white transition-all ml-2"
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
