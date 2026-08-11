"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BlogPost } from "@/types/blog";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  LogOut,
  Sparkles,
  FileText,
  Search,
  CheckCircle,
  Clock,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "published" | "draft">("all");
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const router = useRouter();

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/posts");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      if (Array.isArray(data)) {
        setPosts(data);
      }
    } catch (err) {
      console.error("Failed loading admin posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  };

  const handleTogglePublish = async (post: BlogPost) => {
    setActionLoading(post.id);
    try {
      const res = await fetch(`/api/admin/posts/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isPublished: !post.isPublished }),
      });
      if (res.ok) {
        setPosts((prev) =>
          prev.map((p) => (p.id === post.id ? { ...p, isPublished: !p.isPublished } : p))
        );
      }
    } catch (err) {
      console.error("Error updating status:", err);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    setActionLoading(id);
    try {
      const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      }
    } catch (err) {
      console.error("Error deleting post:", err);
    } finally {
      setActionLoading(null);
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (filterStatus === "published") return matchesSearch && post.isPublished;
    if (filterStatus === "draft") return matchesSearch && !post.isPublished;
    return matchesSearch;
  });

  const publishedCount = posts.filter((p) => p.isPublished).length;
  const draftCount = posts.filter((p) => !p.isPublished).length;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans">
      {/* Top Admin Header */}
      <header className="border-b border-neutral-800/80 bg-black/60 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-sky-400 transition-colors">
                MotionVox
              </span>
            </Link>
            <span className="text-xs px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono font-medium">
              Blog Manager
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              target="_blank"
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors px-3 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-900"
            >
              <span>View Public Blog</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleLogout}
              className="text-xs text-neutral-400 hover:text-red-400 flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg border border-neutral-800 hover:border-red-900/50 hover:bg-red-950/20 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
        {/* Welcome & Stats Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-800/80">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              Studio Blog Posts
              <Sparkles className="w-6 h-6 text-sky-400" />
            </h1>
            <p className="text-sm text-neutral-400 mt-1">
              Create, edit, and publish blogs to showcase MotionVox innovations.
            </p>
          </div>

          <Link
            href="/admin/posts/new"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-medium text-sm shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Post</span>
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Total Articles</p>
              <p className="text-2xl font-bold text-white mt-1">{posts.length}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <FileText className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Published</p>
              <p className="text-2xl font-bold text-emerald-400 mt-1">{publishedCount}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Drafts</p>
              <p className="text-2xl font-bold text-amber-400 mt-1">{draftCount}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Clock className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Filters & Search Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search posts or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-sky-500 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {(["all", "published", "draft"] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-xl text-xs font-medium capitalize transition-all cursor-pointer ${
                  filterStatus === status
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                    : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
                }`}
              >
                {status}
              </button>
            ))}
            <button
              onClick={fetchPosts}
              title="Refresh posts"
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {/* Table / List View */}
        {loading ? (
          <div className="py-20 text-center">
            <div className="w-8 h-8 border-2 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm text-neutral-400">Loading blog posts...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-neutral-900/30 border border-neutral-800">
            <FileText className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white">No articles found</h3>
            <p className="text-sm text-neutral-400 mt-1 max-w-md mx-auto">
              {searchQuery
                ? `No posts matched "${searchQuery}". Try clearing your search.`
                : "Get started by publishing your first MotionVox blog post!"}
            </p>
            <div className="mt-6">
              <Link
                href="/admin/posts/new"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-medium transition-all"
              >
                <Plus className="w-4 h-4" /> Create First Article
              </Link>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-300">
                <thead className="text-xs font-semibold uppercase tracking-wider text-neutral-400 bg-black/40 border-b border-neutral-800">
                  <tr>
                    <th className="px-6 py-4">Title & Details</th>
                    <th className="px-6 py-4">Author</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60">
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-neutral-800/40 transition-colors">
                      <td className="px-6 py-4 max-w-md">
                        <div className="font-semibold text-white truncate hover:text-sky-400 transition-colors">
                          <Link href={`/blog/${post.slug}`} target="_blank">
                            {post.title}
                          </Link>
                        </div>
                        <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-7 h-7 rounded-full object-cover border border-neutral-700"
                          />
                          <div>
                            <p className="text-xs font-medium text-white">{post.author.name}</p>
                            <p className="text-[10px] text-neutral-500">{post.author.role}</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleTogglePublish(post)}
                          disabled={actionLoading === post.id}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                            post.isPublished
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
                              : "bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              post.isPublished ? "bg-emerald-400" : "bg-amber-400"
                            }`}
                          />
                          {post.isPublished ? "Published" : "Draft"}
                        </button>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-xs text-neutral-400">
                        {post.publishedAt}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          title="Preview"
                          className="inline-flex p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-sky-400 hover:bg-neutral-700 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>

                        <Link
                          href={`/admin/posts/edit/${post.id}`}
                          title="Edit Post"
                          className="inline-flex p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-amber-400 hover:bg-neutral-700 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>

                        <button
                          onClick={() => handleDelete(post.id, post.title)}
                          disabled={actionLoading === post.id}
                          title="Delete Post"
                          className="inline-flex p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-red-400 hover:bg-neutral-700 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
