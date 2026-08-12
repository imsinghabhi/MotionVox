"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenDemo?: () => void;
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const handleOpenDemo = () => {
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      window.location.href = "/#contact";
    }
  };
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
            ? "w-full max-w-5xl bg-[#181715]/95 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.9)] py-2.5 border-[#34312B]"
            : "w-full max-w-6xl bg-[#181715]/60 border-[#34312B]/80 backdrop-blur-md"
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
          <div className="relative w-8 h-8 rounded-full border border-[#34312B] group-hover:border-[#C8A46B] transition-colors overflow-hidden shrink-0 shadow-md">
            <Image
              src="/IMG_3249.PNG"
              alt="MotionVox Logo"
              fill
              className="object-cover filter brightness-110 group-hover:scale-110 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-[#F3F0E8] text-lg leading-none group-hover:text-[#C8A46B] transition-colors">
              Motion<span className="">Vox</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#A8A39A] font-medium leading-none mt-1">
              Creative Studio
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1 rounded-full bg-[#201F1C]/80 border border-[#34312B]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-[#A8A39A] hover:text-[#F3F0E8] rounded-full hover:bg-[#34312B]/50 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleOpenDemo}
            className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-[#C8A46B] hover:bg-[#D8B982] text-[#11100E] font-semibold text-xs transition-all shadow-md cursor-pointer group"
          >
            <Sparkles className="w-3.5 h-3.5 fill-[#11100E]" />
            <span>Book a Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#201F1C] border border-[#34312B] text-[#A8A39A] hover:text-[#F3F0E8] focus:outline-none"
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
            className="pointer-events-auto fixed inset-x-4 top-20 z-40 p-6 rounded-3xl bg-[#181715] border border-[#34312B] shadow-2xl flex flex-col gap-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-[#A8A39A] hover:text-[#F3F0E8] hover:bg-[#201F1C] rounded-2xl transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A8A39A]" />
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-[#34312B] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenDemo();
                }}
                className="w-full py-3.5 rounded-2xl bg-[#C8A46B] hover:bg-[#D8B982] text-[#11100E] font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4 fill-[#11100E]" />
                <span>Book a Demo</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
