"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog-card";
import { BlogPost } from "@/types/blog";
import { Search, Sparkles, Newspaper } from "lucide-react";
import { DemoModal } from "@/components/demo-modal";

export default function PublicBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      try {
        // Fetch published posts
        const res = await fetch("/api/posts");
        if (res.ok) {
          const data = await res.json();
          // Filter published only for public readers
          if (Array.isArray(data)) {
            setPosts(data.filter((p: BlogPost) => p.isPublished));
          }
        }
      } catch (err) {
        console.error("Failed to load blog posts:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const allTags = ["All", ...Array.from(new Set(posts.flatMap((p) => p.tags)))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <main className="relative flex flex-col flex-1 min-h-screen bg-[#050505] overflow-x-hidden text-white">
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* Hero Header Section */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="text-center space-y-4 max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Insights & Intelligence
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            MotionVox <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Journal</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Deep dives into AI neural dubbing, photorealistic avatars, luxury creative workflows, and video automation at enterprise scale.
          </p>
        </div>

        {/* Search & Tag Filter Controls */}
        <div className="mt-12 max-w-3xl mx-auto space-y-6">
          <div className="relative">
            <Search className="w-5 h-5 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles by keyword or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all backdrop-blur-xl shadow-xl"
            />
          </div>

          {/* Tags Pills */}
          {allTags.length > 1 && (
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    selectedTag === tag
                      ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                      : "bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-24 space-y-12">
        {loading ? (
          <div className="py-24 text-center space-y-4">
            <div className="w-10 h-10 border-2 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm text-neutral-400 font-mono">Curating journal articles...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="py-24 text-center rounded-3xl bg-neutral-900/40 border border-neutral-800/80 p-12">
            <Newspaper className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No journal articles found</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Try adjusting your search criteria or selecting a different category tag.
            </p>
          </div>
        ) : (
          <>
            {/* Featured Article */}
            {featuredPost && (
              <div className="space-y-4">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
                  Featured Lead Article
                </h2>
                <BlogCard post={featuredPost} featured={true} />
              </div>
            )}

            {/* Grid Articles */}
            {regularPosts.length > 0 && (
              <div className="space-y-4 pt-6">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
                  Latest Articles ({regularPosts.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {regularPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </main>
  );
}
