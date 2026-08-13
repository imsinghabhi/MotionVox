"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProgressiveLogoProps {
  alt?: string;
  size?: number;
  className?: string;
}

export function ProgressiveLogo({
  alt = "MotionVox Logo",
  size = 32,
  className = "object-cover object-center filter brightness-110 group-hover:scale-110 transition-transform duration-300",
}: ProgressiveLogoProps) {
  const lowResSrc = "/IMG_3249.PNG";
  const highResSrc = "/IMG_3249_hd.PNG";

  const [currentSrc, setCurrentSrc] = useState(lowResSrc);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload full high-resolution logo image silently in background
    const img = new window.Image();
    img.src = highResSrc;
    img.onload = () => {
      setCurrentSrc(highResSrc);
      setIsLoaded(true);
    };
  }, []);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      priority
      unoptimized
      className={`${className} transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-95"
      }`}
    />
  );
}
