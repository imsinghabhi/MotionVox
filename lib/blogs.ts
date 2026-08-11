import { createClient } from "@supabase/supabase-js";
import { BlogPost, BlogPostInput } from "@/types/blog";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://yhlgkzxbizoxbjxnqvin.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_SZCZgcG3edN1p6wzTrIzJA_Cq8YWYiV";
const supabase = createClient(supabaseUrl, supabaseKey);

function mapFromSupabase(row: any): BlogPost {
  let authorObj = row.author;
  if (typeof authorObj === "string") {
    try { authorObj = JSON.parse(authorObj); } catch { authorObj = null; }
  }

  let tagsArr = row.tags;
  if (typeof tagsArr === "string") {
    try { tagsArr = JSON.parse(tagsArr); } catch { tagsArr = []; }
  }

  return {
    id: String(row.id),
    title: row.title || "",
    slug: row.slug || "",
    excerpt: row.excerpt || "",
    content: row.content || "",
    coverImage: row.cover_image || row.coverImage || "",
    author: authorObj || {
      name: "Abhishek Singh",
      role: "Founder & Creative Lead",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    publishedAt: row.published_at || row.publishedAt || new Date().toISOString().split("T")[0],
    isPublished: row.is_published ?? row.isPublished ?? true,
    readTime: row.read_time || row.readTime || "3 min read",
    tags: Array.isArray(tagsArr) ? tagsArr : [],
  };
}

function mapToSupabase(post: BlogPost): any {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    cover_image: post.coverImage,
    author: post.author,
    published_at: post.publishedAt,
    is_published: post.isPublished,
    read_time: post.readTime,
    tags: post.tags,
  };
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export async function getAllPosts(includeDrafts = false): Promise<BlogPost[]> {
  try {
    let query = supabase.from("blogs").select("*").order("created_at", { ascending: false });
    
    if (!includeDrafts) {
      query = query.eq("is_published", true);
    }

    const { data, error } = await query;
    if (error) {
      console.error("Error fetching posts from Supabase:", error);
      return [];
    }

    return (data || []).map(mapFromSupabase);
  } catch (err) {
    console.error("Supabase query error:", err);
    return [];
  }
}

export async function getPostBySlug(slug: string, includeDrafts = false): Promise<BlogPost | null> {
  try {
    let query = supabase.from("blogs").select("*").eq("slug", slug);
    if (!includeDrafts) {
      query = query.eq("is_published", true);
    }

    const { data, error } = await query.single();
    if (error || !data) return null;

    return mapFromSupabase(data);
  } catch (err) {
    console.error("Supabase query error:", err);
    return null;
  }
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase.from("blogs").select("*").eq("id", id).single();
    if (error || !data) return null;

    return mapFromSupabase(data);
  } catch (err) {
    console.error("Supabase query error:", err);
    return null;
  }
}

export async function createPost(input: BlogPostInput): Promise<BlogPost> {
  const posts = await getAllPosts(true);

  let baseSlug = input.slug ? slugify(input.slug) : slugify(input.title);
  if (!baseSlug) baseSlug = "post-" + Date.now();

  let uniqueSlug = baseSlug;
  let counter = 1;
  while (posts.some((p) => p.slug === uniqueSlug)) {
    uniqueSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  const newPost: BlogPost = {
    ...input,
    id: "post_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
    slug: uniqueSlug,
    publishedAt: input.publishedAt || new Date().toISOString().split("T")[0],
    isPublished: input.isPublished ?? true,
    readTime: input.readTime || `${Math.max(1, Math.ceil((input.content || "").split(" ").length / 200))} min read`,
  };

  const payload = mapToSupabase(newPost);
  const { error } = await supabase.from("blogs").insert([payload]);
  
  if (error) {
    console.error("Supabase insert error:", error);
  }

  return newPost;
}

export async function updatePost(id: string, input: Partial<BlogPostInput>): Promise<BlogPost | null> {
  const existing = await getPostById(id);
  if (!existing) return null;

  let newSlug = existing.slug;
  if (input.slug && input.slug !== existing.slug) {
    newSlug = slugify(input.slug);
    const posts = await getAllPosts(true);
    let counter = 1;
    while (posts.some((p) => p.slug === newSlug && p.id !== id)) {
      newSlug = `${slugify(input.slug)}-${counter}`;
      counter++;
    }
  }

  const updated: BlogPost = {
    ...existing,
    ...input,
    slug: newSlug,
    readTime: input.content
      ? `${Math.max(1, Math.ceil(input.content.split(" ").length / 200))} min read`
      : existing.readTime,
  };

  const payload = mapToSupabase(updated);
  const { error } = await supabase.from("blogs").update(payload).eq("id", id);
  if (error) {
    console.error("Supabase update error:", error);
  }

  return updated;
}

export async function deletePost(id: string): Promise<boolean> {
  const { error } = await supabase.from("blogs").delete().eq("id", id);
  if (error) {
    console.error("Supabase delete error:", error);
    return false;
  }
  return true;
}
