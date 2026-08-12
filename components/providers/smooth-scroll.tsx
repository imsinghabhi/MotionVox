"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      syncTouch: false,
      autoResize: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    // Enable lag smoothing to prevent stutter on frame dips
    gsap.ticker.lagSmoothing(500, 33);

    // Watch for DOM scroll height changes (async data loading, blog posts, dynamic sections)
    let lastHeight = document.body ? document.body.scrollHeight : 0;
    const checkHeightAndResize = () => {
      if (document.body) {
        const currentHeight = document.body.scrollHeight;
        if (currentHeight !== lastHeight) {
          lastHeight = currentHeight;
          lenis.resize();
        }
      }
    };

    const mutationObserver = new MutationObserver(checkHeightAndResize);
    if (document.body) {
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    const handleWindowResize = () => {
      lenis.resize();
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      mutationObserver.disconnect();
      window.removeEventListener("resize", handleWindowResize);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  // Recalculate scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}

