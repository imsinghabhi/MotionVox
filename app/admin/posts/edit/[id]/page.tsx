"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Eye,
  FileEdit,
  Sparkles,
  Image as ImageIcon,
  Tag,
  User,
  Globe,
} from "lucide-react";

export default function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [postId, setPostId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    authorName: "",
    authorRole: "",
    authorAvatar: "",
    tags: "",
    isPublished: true,
  });

  useEffect(() => {
    params.then((unwrapped) => {
      setPostId(unwrapped.id);
    });
  }, [params]);

  useEffect(() => {
    if (!postId) return;

    async function fetchPost() {
      try {
        const res = await fetch(`/api/admin/posts/${postId}`);
        if (res.status === 401) {
          router.push("/admin/login");
          return;
        }
        if (!res.ok) {
          alert("Post not found");
          router.push("/admin");
          return;
        }
        const post = await res.json();
        setFormData({
          title: post.title || "",
          slug: post.slug || "",
          excerpt: post.excerpt || "",
          content: post.content || "",
          coverImage: post.coverImage || "",
          authorName: post.author?.name || "",
          authorRole: post.author?.role || "",
          authorAvatar: post.author?.avatar || "",
          tags: Array.isArray(post.tags) ? post.tags.join(", ") : "",
          isPublished: post.isPublished ?? true,
        });
      } catch (err) {
        console.error("Failed loading post:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [postId, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!postId) return;
    if (!formData.title || !formData.content) {
      alert("Title and Content are required.");
      return;
    }

    setSaving(true);

    const postPayload = {
      title: formData.title,
      slug: formData.slug,
      excerpt: formData.excerpt,
      content: formData.content,
      coverImage: formData.coverImage,
      author: {
        name: formData.authorName,
        role: formData.authorRole,
        avatar: formData.authorAvatar,
      },
      tags: formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      isPublished: formData.isPublished,
    };

    try {
      const res = await fetch(`/api/admin/posts/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postPayload),
      });

      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Failed to update post");
      }
    } catch (err) {
      console.error("Failed updating post:", err);
      alert("An unexpected error occurred while saving.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#11100E] text-[#F3F0E8] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-2 border-[#C8A46B] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-[#A8A39A]">Loading article editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#11100E] text-[#F3F0E8] flex flex-col font-sans">
      {/* Top Bar */}
      <header className="border-b border-[#34312B] bg-[#181715] sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/admin"
            className="flex items-center gap-2 text-xs font-medium text-[#A8A39A] hover:text-[#F3F0E8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-xs text-[#F3F0E8] cursor-pointer bg-[#201F1C] border border-[#34312B] px-3 py-1.5 rounded-lg">
              <input
                type="checkbox"
                checked={formData.isPublished}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, isPublished: e.target.checked }))
                }
                className="accent-[#C8A46B] rounded cursor-pointer"
              />
              <span>{formData.isPublished ? "Published" : "Draft"}</span>
            </label>

            <button
              onClick={handleSubmit}
              disabled={saving}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#C8A46B] hover:bg-[#D8B982] text-[#11100E] font-semibold text-xs shadow-md transition-all cursor-pointer disabled:opacity-50"
            >
              {saving ? (
                <div className="w-4 h-4 border-2 border-[#11100E]/30 border-t-[#11100E] rounded-full animate-spin" />
              ) : (
                <>
                  <Save className="w-4 h-4" /> Update Changes
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Form Container */}
      <main className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-[#F3F0E8] flex items-center gap-2">
            Edit Article
            <Sparkles className="w-5 h-5 text-[#C8A46B]" />
          </h1>
          <p className="text-xs text-[#A8A39A] mt-1">
            Updating post ID: <code className="font-mono text-[#C8A46B]">{postId}</code>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Editor Column (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8A39A] mb-2 font-mono">
                Article Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                required
                className="w-full px-4 py-3 rounded-xl bg-[#201F1C] border border-[#34312B] text-lg font-semibold text-[#F3F0E8] placeholder-[#A8A39A]/50 focus:outline-none focus:border-[#C8A46B] transition-all"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8A39A] mb-2 font-mono flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#A8A39A]" /> URL Slug
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, slug: e.target.value }))
                }
                required
                className="w-full px-4 py-2.5 rounded-xl bg-[#201F1C] border border-[#34312B] text-xs font-mono text-[#F3F0E8] focus:outline-none focus:border-[#C8A46B] transition-all"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8A39A] mb-2 font-mono">
                Short Excerpt / Abstract
              </label>
              <textarea
                rows={2}
                value={formData.excerpt}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, excerpt: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl bg-[#201F1C] border border-[#34312B] text-xs text-[#F3F0E8] focus:outline-none focus:border-[#C8A46B] transition-all"
              />
            </div>

            {/* Content Editor Tabs (Write / Preview) */}
            <div className="rounded-2xl border border-[#34312B] bg-[#201F1C] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-[#181715] border-b border-[#34312B]">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("write")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                      activeTab === "write"
                        ? "bg-[#C8A46B] text-[#11100E] font-semibold"
                        : "text-[#A8A39A] hover:text-[#F3F0E8]"
                    }`}
                  >
                    <FileEdit className="w-3.5 h-3.5" /> Editor
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("preview")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                      activeTab === "preview"
                        ? "bg-[#C8A46B] text-[#11100E] font-semibold"
                        : "text-[#A8A39A] hover:text-[#F3F0E8]"
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" /> Live Preview
                  </button>
                </div>
              </div>

              {activeTab === "write" ? (
                <textarea
                  rows={16}
                  value={formData.content}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, content: e.target.value }))
                  }
                  required
                  className="w-full p-4 bg-transparent text-sm font-mono text-[#F3F0E8] placeholder-[#A8A39A]/40 focus:outline-none resize-y min-h-[350px]"
                />
              ) : (
                <div className="p-6 text-sm text-[#A8A39A] min-h-[350px] space-y-4">
                  {formData.content ? (
                    formData.content.split("\n\n").map((paragraph, idx) => {
                      if (paragraph.startsWith("## ")) {
                        return (
                          <h2 key={idx} className="text-xl font-bold text-[#F3F0E8] mt-4 mb-2">
                            {paragraph.replace("## ", "")}
                          </h2>
                        );
                      }
                      if (paragraph.startsWith("### ")) {
                        return (
                          <h3 key={idx} className="text-lg font-semibold text-[#C8A46B] mt-3 mb-1">
                            {paragraph.replace("### ", "")}
                          </h3>
                        );
                      }
                      if (paragraph.startsWith("> ")) {
                        return (
                          <blockquote
                            key={idx}
                            className="border-l-2 border-[#C8A46B] pl-4 italic text-[#A8A39A] my-4"
                          >
                            {paragraph.replace("> ", "")}
                          </blockquote>
                        );
                      }
                      return <p key={idx} className="text-[#A8A39A] leading-relaxed">{paragraph}</p>;
                    })
                  ) : (
                    <p className="text-xs text-[#A8A39A]/60 italic">No content to preview.</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Meta Column (1 col) */}
          <div className="space-y-6">
            {/* Cover Image URL */}
            <div className="p-5 rounded-2xl bg-[#201F1C] border border-[#34312B] space-y-4 shadow-md">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8A39A] font-mono flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-[#C8A46B]" /> Cover Image URL
              </label>
              <input
                type="url"
                value={formData.coverImage}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, coverImage: e.target.value }))
                }
                className="w-full px-3 py-2 rounded-xl bg-[#181715] border border-[#34312B] text-xs text-[#F3F0E8] focus:outline-none focus:border-[#C8A46B]"
              />
              {formData.coverImage && (
                <div className="mt-2 rounded-xl overflow-hidden border border-[#34312B] aspect-video relative">
                  <img
                    src={formData.coverImage}
                    alt="Cover preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Author Settings */}
            <div className="p-5 rounded-2xl bg-[#201F1C] border border-[#34312B] space-y-4 shadow-md">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8A39A] font-mono flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#C8A46B]" /> Author Profile
              </label>
              <div>
                <label className="block text-[10px] text-[#A8A39A] mb-1 font-mono">Author Name</label>
                <input
                  type="text"
                  value={formData.authorName}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, authorName: e.target.value }))
                  }
                  className="w-full px-3 py-2 rounded-xl bg-[#181715] border border-[#34312B] text-xs text-[#F3F0E8] focus:outline-none focus:border-[#C8A46B]"
                />
              </div>
              <div>
                <label className="block text-[10px] text-[#A8A39A] mb-1 font-mono">Author Role</label>
                <input
                  type="text"
                  value={formData.authorRole}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, authorRole: e.target.value }))
                  }
                  className="w-full px-3 py-2 rounded-xl bg-[#181715] border border-[#34312B] text-xs text-[#F3F0E8] focus:outline-none focus:border-[#C8A46B]"
                />
              </div>
              <div>
                <label className="block text-[10px] text-[#A8A39A] mb-1 font-mono">Avatar Image URL</label>
                <input
                  type="url"
                  value={formData.authorAvatar}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, authorAvatar: e.target.value }))
                  }
                  className="w-full px-3 py-2 rounded-xl bg-[#181715] border border-[#34312B] text-xs text-[#F3F0E8] focus:outline-none focus:border-[#C8A46B]"
                />
              </div>
            </div>

            {/* Tags */}
            <div className="p-5 rounded-2xl bg-[#201F1C] border border-[#34312B] space-y-3 shadow-md">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8A39A] font-mono flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#C8A46B]" /> Categories / Tags
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, tags: e.target.value }))
                }
                className="w-full px-3 py-2 rounded-xl bg-[#181715] border border-[#34312B] text-xs text-[#F3F0E8] focus:outline-none focus:border-[#C8A46B]"
              />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
