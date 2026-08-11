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
        className="group relative rounded-3xl overflow-hidden bg-neutral-900/60 border border-neutral-800 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-6 hover:border-sky-500/50 transition-all duration-500 shadow-2xl"
      >
        <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-950/90" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/90 text-white shadow-lg backdrop-blur-md">
              Featured Article
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 p-6 lg:p-10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-neutral-400">
              <span>{post.publishedAt}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors leading-snug">
              {post.title}
            </h2>

            <p className="text-sm text-neutral-300 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover border border-neutral-700"
              />
              <div>
                <p className="text-xs font-medium text-white">{post.author.name}</p>
                <p className="text-[10px] text-neutral-400">{post.author.role}</p>
              </div>
            </div>

            <span className="w-10 h-10 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all">
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
      className="group relative rounded-2xl overflow-hidden bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-md flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-black/60 backdrop-blur-md border border-neutral-700/60 text-sky-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] text-neutral-400">
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-sky-400" /> {post.readTime}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>

          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-neutral-800/60 flex items-center justify-between bg-black/20">
        <div className="flex items-center gap-2.5">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-7 h-7 rounded-full object-cover border border-neutral-700"
          />
          <span className="text-xs text-neutral-300 font-medium">{post.author.name}</span>
        </div>

        <span className="text-xs text-sky-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 font-medium">
          Read article <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}
