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
    <footer className="relative bg-[#11100E] border-t border-[#34312B]/40 pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-[#A8A39A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#34312B]/40">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-9 h-9 rounded-full border border-[#34312B]/40 group-hover:border-[#C8A46B]/40 transition-colors overflow-hidden shrink-0 shadow-md">
                <Image
                  src="/IMG_3249.PNG"
                  alt="MotionVox Logo"
                  fill
                  className="object-cover filter brightness-110 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-[#F3F0E8] text-xl leading-none group-hover:text-[#C8A46B] transition-colors">
                  Motion<span>Vox</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#A8A39A] font-medium leading-none mt-1">
                  Creative Studio
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#A8A39A] max-w-sm leading-relaxed">
              Refined Media Solutions, Crafted with Expertise. Premium creative studio for neural dubbing, AI video avatars, and automated media production.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="flex h-2 w-2 rounded-full bg-[#C8A46B] animate-pulse" />
              <span className="text-[11px] font-mono text-[#A8A39A]">All Neural Rendering Clusters Operational</span>
            </div>
          </div>

          {/* Nav Column 1 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F3F0E8] font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-[#F3F0E8] transition-colors">
                  Professional Dubbing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F3F0E8] transition-colors">
                  AI Video Avatars
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F3F0E8] transition-colors">
                  Multimedia Production
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F3F0E8] transition-colors">
                  Influencer Network
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F3F0E8] transition-colors">
                  Custom Websites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F3F0E8] transition-colors">
                  Workflow Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F3F0E8] font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/blog" className="hover:text-[#F3F0E8] transition-colors text-[#C8A46B] font-medium">
                  Studio Journal (Blog)
                </Link>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#F3F0E8] transition-colors">
                  Why MotionVox
                </a>
              </li>
              <li>
                <a href="#featured-work" className="hover:text-[#F3F0E8] transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#F3F0E8] transition-colors">
                  Production Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#F3F0E8] transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F3F0E8] transition-colors">
                  Contact Studio
                </a>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#F3F0E8] transition-colors text-[#A8A39A]/70 font-mono text-[10px]">
                  Admin Console
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 3 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F3F0E8] font-semibold mb-4">
              Legal & Privacy
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="hover:text-[#F3F0E8] transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-[#F3F0E8] transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="hover:text-[#F3F0E8] transition-colors cursor-pointer">
                  Voice Rights & Licensing
                </span>
              </li>
              <li>
                <span className="hover:text-[#F3F0E8] transition-colors cursor-pointer">
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
              className="p-2 rounded-full bg-[#181715] border border-[#34312B]/40 text-[#A8A39A] hover:text-[#F3F0E8] transition-colors flex items-center gap-1"
              aria-label="X / Twitter"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>X</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#181715] border border-[#34312B]/40 text-[#A8A39A] hover:text-[#F3F0E8] transition-colors flex items-center gap-1"
              aria-label="LinkedIn"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#181715] border border-[#34312B]/40 text-[#A8A39A] hover:text-[#F3F0E8] transition-colors flex items-center gap-1"
              aria-label="YouTube"
            >
              <Video className="w-3.5 h-3.5" />
              <span>YouTube</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#201F1C] border border-[#34312B]/40 hover:bg-[#C8A46B] hover:text-[#11100E] text-[#F3F0E8] transition-all ml-2 cursor-pointer"
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
