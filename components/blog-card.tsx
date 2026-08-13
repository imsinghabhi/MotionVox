"use client";

import React from "react";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { Clock, ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group relative rounded-3xl overflow-hidden bg-[#141414] border border-[#27272A] grid grid-cols-1 lg:grid-cols-12 gap-8 hover:border-[#E2E8F0] transition-all duration-400 studio-noise-bg p-8 shadow-2xl"
      >
        <div className="lg:col-span-7 relative h-72 lg:h-[380px] overflow-hidden rounded-2xl border border-[#27272A]">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-[#FAFAFA] text-[#0A0A0A]">
              FEATURED ANALYSIS
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono text-[#A1A1AA]">
              <span>{post.publishedAt}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#E2E8F0]">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[#FAFAFA] group-hover:text-[#FFFFFF] transition-colors leading-tight">
              {post.title}
            </h2>

            <p className="text-sm text-[#A1A1AA] line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="pt-6 border-t border-[#27272A] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover border border-[#27272A]"
              />
              <div>
                <p className="text-xs font-bold text-[#FAFAFA]">{post.author.name}</p>
                <p className="text-[10px] font-mono text-[#A1A1AA]">{post.author.role}</p>
              </div>
            </div>

            <span className="w-10 h-10 rounded-full bg-[#1C1C1C] border border-[#27272A] text-[#FAFAFA] flex items-center justify-center group-hover:bg-[#FAFAFA] group-hover:text-[#0A0A0A] transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative py-8 border-b border-[#27272A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:bg-[#141414]/40 transition-colors px-4 rounded-xl"
    >
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-3 text-xs font-mono text-[#A1A1AA]">
          <span className="px-2.5 py-0.5 rounded-full bg-[#1C1C1C] text-[#E2E8F0] border border-[#27272A] text-[10px]">
            {post.tags[0] || "STUDIO"}
          </span>
          <span>{post.publishedAt}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#E2E8F0]" /> {post.readTime}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#FAFAFA] group-hover:text-[#FFFFFF] transition-colors leading-snug">
          {post.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#A1A1AA] line-clamp-2 leading-relaxed max-w-2xl">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <div className="text-right hidden sm:block">
          <span className="text-xs font-bold text-[#FAFAFA] block">{post.author.name}</span>
          <span className="text-[10px] font-mono text-[#A1A1AA]">{post.author.role}</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#27272A] flex items-center justify-center text-[#A1A1AA] group-hover:text-[#0A0A0A] group-hover:bg-[#FAFAFA] transition-all">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );

}
