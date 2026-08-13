import React from "react";
import Metadata from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blogs";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogDemoCTA } from "@/components/blog-demo-cta";
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
    <main className="relative flex flex-col flex-1 min-h-screen bg-[#0A0A0A] text-[#FAFAFA] overflow-x-hidden">
      <Navbar />

      {/* Header & Hero Image */}
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-10">
        {/* Navigation back */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors bg-[#141414] border border-[#27272A] px-3.5 py-1.5 rounded-full"
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
                className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#1C1C1C] border border-[#27272A] text-[#E2E8F0]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAFAFA] leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-[#A1A1AA] font-light leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author & Meta Row */}
          <div className="pt-4 border-t border-b border-[#27272A] py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border border-[#27272A] shadow-md"
              />
              <div>
                <p className="text-sm font-semibold text-[#FAFAFA]">{post.author.name}</p>
                <p className="text-xs text-[#A1A1AA]">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-[#A1A1AA]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#E2E8F0]" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#E2E8F0]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-[#27272A] shadow-2xl bg-[#141414]">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none space-y-6 text-[#A1A1AA] leading-relaxed text-base">
          {post.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] tracking-tight mt-10 mb-4 border-b border-[#27272A] pb-2"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-xl font-semibold text-[#E2E8F0] tracking-tight mt-8 mb-3"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("> ")) {
              return (
                <blockquote
                  key={idx}
                  className="my-6 border-l-4 border-[#E2E8F0] bg-[#141414] p-6 rounded-r-2xl italic text-[#FAFAFA] text-lg font-serif border border-r-0 border-t-0 border-b-0 border-[#27272A]"
                >
                  {paragraph.replace("> ", "")}
                </blockquote>
              );
            }
            return (
              <p key={idx} className="text-[#A1A1AA] leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Article Footer & CTA */}
        <div className="mt-16 pt-10 border-t border-[#27272A] space-y-8">
          <BlogDemoCTA />
        </div>
      </article>

      <Footer />
    </main>
  );

}
