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
    <main className="relative flex flex-col flex-1 min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />

      {/* Header & Hero Image */}
      <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-10">
        {/* Navigation back */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-sky-400 transition-colors bg-neutral-900/60 border border-neutral-800 px-3.5 py-1.5 rounded-full backdrop-blur-md"
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
                className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 border border-sky-500/20 text-sky-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-neutral-300 font-light leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author & Meta Row */}
          <div className="pt-4 border-t border-b border-neutral-800/80 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border border-neutral-700 shadow-md"
              />
              <div>
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-neutral-400">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert prose-sky max-w-none space-y-6 text-neutral-300 leading-relaxed text-base">
          {post.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-10 mb-4 border-b border-neutral-800 pb-2"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-xl font-semibold text-sky-400 tracking-tight mt-8 mb-3"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("> ")) {
              return (
                <blockquote
                  key={idx}
                  className="my-6 border-l-4 border-sky-500 bg-neutral-900/40 p-6 rounded-r-2xl italic text-neutral-200 text-lg font-serif"
                >
                  {paragraph.replace("> ", "")}
                </blockquote>
              );
            }
            return (
              <p key={idx} className="text-neutral-300 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Article Footer & CTA */}
        <div className="mt-16 pt-10 border-t border-neutral-800 space-y-8">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs text-sky-400 font-mono">
              <Sparkles className="w-4 h-4" /> Ready to Automate Your Video Production?
            </div>
            <h3 className="text-2xl font-bold text-white">
              Scale Your Media Production with MotionVox
            </h3>
            <p className="text-sm text-neutral-400 max-w-xl mx-auto">
              Our neural dubbing and photorealistic video avatar workflows help industry leaders produce Studio-grade media content in any language.
            </p>
            <div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-medium text-sm shadow-xl shadow-sky-500/20 transition-all hover:scale-105"
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
