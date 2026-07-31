"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenDemo: () => void;
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Work", href: "#featured-work" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none"
    >
      <nav
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 rounded-full px-5 py-3 border border-white/10 ${
          scrolled
            ? "w-full max-w-5xl bg-black/80 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.9)] py-2.5 border-white/15"
            : "w-full max-w-6xl bg-white/[0.03] backdrop-blur-md"
        }`}
      >
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-full border border-white/20 group-hover:border-sky-400/70 transition-colors overflow-hidden shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <Image
              src="/IMG_3249.PNG"
              alt="MotionVox Logo"
              fill
              className="object-cover filter brightness-110 group-hover:scale-110 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-white text-lg leading-none group-hover:text-sky-300 transition-colors">
              Motion<span className="text-sky-400">Vox</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-medium leading-none mt-1">
              Creative Studio
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white rounded-full hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDemo}
            className="relative group overflow-hidden rounded-full p-[1px] font-medium text-xs focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full animate-pulse-glow opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/90 text-white group-hover:bg-black/70 transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin-slow" />
              <span>Book a Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
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
            className="pointer-events-auto fixed inset-x-4 top-20 z-40 p-6 rounded-3xl bg-zinc-950/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/5 rounded-2xl transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-black font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              >
                <Sparkles className="w-4 h-4 fill-black" />
                <span>Book a Demo</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
