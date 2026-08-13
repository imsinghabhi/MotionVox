"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { useDemoModal } from "@/components/providers/demo-provider";

import { ProgressiveLogo } from "@/components/progressive-logo";

interface NavbarProps {
  onOpenDemo?: () => void;
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const { openDemo } = useDemoModal();

  const handleOpenDemo = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      openDemo();
    }
  };
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let prevScrolled = false;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== prevScrolled) {
        prevScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Work", href: "/#featured-work" },
    { name: "Process", href: "/#process" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none"
    >
      <nav
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 rounded-full px-5 py-3 border ${
          scrolled
            ? "w-full max-w-5xl bg-[#141414]/95 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.9)] py-2.5 border-[#27272A]"
            : "w-full max-w-6xl bg-[#141414]/60 border-[#27272A] backdrop-blur-md"
        }`}
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-full border border-[#27272A] group-hover:border-[#E2E8F0] transition-colors overflow-hidden shrink-0 shadow-md flex items-center justify-center bg-black">
            <ProgressiveLogo />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-[#FAFAFA] text-lg leading-none group-hover:text-[#FFFFFF] transition-colors">
              Motion<span className="text-[#E2E8F0]">Vox</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#A1A1AA] font-medium leading-none mt-1">
              Creative Studio
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1 rounded-full bg-[#1C1C1C]/80 border border-[#27272A]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-[#A1A1AA] hover:text-[#FFFFFF] rounded-full hover:bg-[#27272A] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleOpenDemo}
            className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-[#FAFAFA] hover:bg-[#FFFFFF] text-[#0A0A0A] font-semibold text-xs transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer group"
          >
            <Sparkles className="w-3.5 h-3.5 fill-[#0A0A0A]" />
            <span>Book a Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#1C1C1C] border border-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto fixed inset-x-4 top-20 z-40 p-6 rounded-3xl bg-[#141414] border border-[#27272A] shadow-2xl flex flex-col gap-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#1C1C1C] rounded-2xl transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A1A1AA]" />
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-[#27272A] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenDemo();
                }}
                className="w-full py-3.5 rounded-2xl bg-[#FAFAFA] hover:bg-[#FFFFFF] text-[#0A0A0A] font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4 fill-[#0A0A0A]" />
                <span>Book a Demo</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}
