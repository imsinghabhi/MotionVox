"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { FeaturedWork } from "@/components/featured-work";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <main className="relative flex flex-col flex-1 min-h-screen bg-[#050505] overflow-x-hidden">
      {/* 1. Floating Apple Glass Navbar */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* 2. Hero Section */}
      <Hero onOpenDemo={handleOpenDemo} />

      {/* 3. Trusted By Marquee */}
      <TrustedBy />

      {/* 4. Services Grid & Specs Modal */}
      <Services />

      {/* 5. Why MotionVox Storytelling */}
      <WhyUs />

      {/* 6. Featured Work Showcase */}
      <FeaturedWork />

      {/* 7. Process Timeline */}
      <Process />

      {/* 8. Client Testimonials */}
      <Testimonials />

      {/* 9. FAQ Accordion */}
      <FAQ />

      {/* 10. Contact & Proposal Request Section */}
      <ContactSection onOpenDemo={handleOpenDemo} />

      {/* 11. Luxury Dark Footer */}
      <Footer />

      {/* Interactive VIP Book Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </main>
  );
}
