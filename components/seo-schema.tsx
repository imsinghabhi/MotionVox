"use client";

import React from "react";

export function SEOSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MotionVox",
    url: "https://motionvox.in",
    logo: "https://motionvox.in/IMG_3249.PNG",
    description: "Refined Media Solutions, Crafted with Expertise. Premium studio specializing in AI video avatars, professional neural dubbing, multimedia production, and workflow automation.",
    slogan: "Refined Media Solutions, Crafted with Expertise.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@motionvox.in",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Spanish", "Japanese"],
    },
    sameAs: [
      "https://twitter.com/motionvox",
      "https://linkedin.com/company/motionvox",
      "https://youtube.com/@motionvox",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Media Production & AI Automation Studio",
    provider: {
      "@type": "Organization",
      name: "MotionVox",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "MotionVox Core Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Neural Dubbing",
            description: "Multi-language audio dubbing in 130+ languages with emotional vocal preservation and AI lip-sync.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Video Avatars",
            description: "4K photorealistic digital twin avatars for automated executive and presenter video generation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Multimedia Production",
            description: "Cinematic post-production, 3D motion graphics, color grading, and sound architecture.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Workflow Automation",
            description: "End-to-end autonomous AI media rendering pipelines and API integrations.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes MotionVox different from traditional agencies or pure AI tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MotionVox operates a hybrid model combining proprietary neural AI engines with veteran creative directors, audio engineers, and native voice directors.",
        },
      },
      {
        "@type": "Question",
        name: "How natural is your multi-language dubbing and lip-sync accuracy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our neural models match original voice pitch, emotional timbre, and cadence across 130+ languages with AI lip-sync refinement.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
