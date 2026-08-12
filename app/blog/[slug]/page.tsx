import React from "react";
import Metadata from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blogs";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Clock, ArrowLeft, Calendar, Share2, Sparkles, Tag } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found — MotionVox Studio",
    };
  }

  return {
    title: `${post.title} — MotionVox Studio`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.isPublished) {
    notFound();
  }

  return (
    <main className="relative flex flex-col flex-1 min-h-screen bg-[#11100E] text-[#F3F0E8] overflow-x-hidden">
      <Navbar />

      {/* Header & Hero Image */}
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-10">
        {/* Navigation back */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#A8A39A] hover:text-[#F3F0E8] transition-colors bg-[#181715] border border-[#34312B] px-3.5 py-1.5 rounded-full"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Articles
          </Link>
        </div>

        {/* Title & Metadata */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#C8A46B]/10 border border-[#C8A46B]/30 text-[#C8A46B]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F3F0E8] leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-[#A8A39A] font-light leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author & Meta Row */}
          <div className="pt-4 border-t border-b border-[#34312B] py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border border-[#34312B] shadow-md"
              />
              <div>
                <p className="text-sm font-semibold text-[#F3F0E8]">{post.author.name}</p>
                <p className="text-xs text-[#A8A39A]">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#A8A39A]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C8A46B]" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C8A46B]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-[#34312B] shadow-2xl bg-[#181715]">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none space-y-6 text-[#A8A39A] leading-relaxed text-base">
          {post.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="text-2xl sm:text-3xl font-bold text-[#F3F0E8] tracking-tight mt-10 mb-4 border-b border-[#34312B] pb-2"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-xl font-semibold text-[#C8A46B] tracking-tight mt-8 mb-3"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("> ")) {
              return (
                <blockquote
                  key={idx}
                  className="my-6 border-l-4 border-[#C8A46B] bg-[#181715] p-6 rounded-r-2xl italic text-[#F3F0E8] text-lg font-serif"
                >
                  {paragraph.replace("> ", "")}
                </blockquote>
              );
            }
            return (
              <p key={idx} className="text-[#A8A39A] leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Article Footer & CTA */}
        <div className="mt-16 pt-10 border-t border-[#34312B] space-y-8">
          <div className="p-8 rounded-3xl bg-[#181715] border border-[#34312B] text-center space-y-4 shadow-xl">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#C8A46B] font-mono">
              <Sparkles className="w-4 h-4" /> Ready to Automate Your Video Production?
            </div>
            <h3 className="text-2xl font-bold text-[#F3F0E8]">
              Scale Your Media Production with MotionVox
            </h3>
            <p className="text-sm text-[#A8A39A] max-w-xl mx-auto">
              Our neural dubbing and photorealistic video avatar workflows help industry leaders produce Studio-grade media content in any language.
            </p>
            <div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C8A46B] hover:bg-[#D8B982] text-[#11100E] font-medium text-sm transition-all hover:scale-105 shadow-md"
              >
                Book a Demo Call
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
