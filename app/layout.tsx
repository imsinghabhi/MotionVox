import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { MouseSpotlight } from "@/components/ui/mouse-spotlight";
import { SEOSchema } from "@/components/seo-schema";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://motionvox.in"),
  title: "MotionVox — Refined Media Solutions, Crafted with Expertise",
  description:
    "MotionVox is a luxury creative studio helping startups, SaaS companies, D2C brands, and creators scale media production through professional neural dubbing, AI video avatars, and workflow automation.",
  keywords: [
    "MotionVox",
    "Neural Dubbing",
    "AI Video Avatars",
    "Media Production",
    "Workflow Automation",
    "Multilingual Dubbing",
    "Influencer Marketing",
    "Next.js Creative Studio",
  ],
  authors: [{ name: "MotionVox Creative Studio", url: "https://motionvox.in" }],
  creator: "MotionVox",
  publisher: "MotionVox",
  icons: {
    icon: "/IMG_3249.PNG",
    shortcut: "/IMG_3249.PNG",
    apple: "/IMG_3249.PNG",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://motionvox.in",
    title: "MotionVox — Refined Media Solutions, Crafted with Expertise",
    description:
      "Scale media production through expert creatives, AI video avatars, professional dubbing, and studio-grade workflow automation.",
    siteName: "MotionVox Studio",
    images: [
      {
        url: "/IMG_3249.PNG",
        width: 1200,
        height: 630,
        alt: "MotionVox Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MotionVox — Refined Media Solutions, Crafted with Expertise",
    description:
      "Scale media production through expert creatives, AI video avatars, professional dubbing, and studio-grade workflow automation.",
    images: ["/IMG_3249.PNG"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#11100E] text-[#F3F0E8] selection:bg-[#C8A46B] selection:text-[#11100E] bg-noise"
      >
        <SEOSchema />
        <SmoothScrollProvider>
          <MouseSpotlight />
          <div className="flex-1 flex flex-col">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
