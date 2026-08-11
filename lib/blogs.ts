import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";
import { BlogPost, BlogPostInput } from "@/types/blog";

const blogsFilePath = path.join(process.cwd(), "data", "blogs.json");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://yhlgkzxbizoxbjxnqvin.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_SZCZgcG3edN1p6wzTrIzJA_Cq8YWYiV";
const supabase = createClient(supabaseUrl, supabaseKey);

let memoryStore: BlogPost[] | null = null;

function ensureDataFile(): void {
  const dirPath = path.dirname(blogsFilePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  if (!fs.existsSync(blogsFilePath)) {
    fs.writeFileSync(blogsFilePath, JSON.stringify([], null, 2), "utf-8");
  }
}

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

export async function getAllPosts(includeDrafts = false): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && Array.isArray(data) && data.length > 0) {
      const posts = data.map(mapFromSupabase);
      memoryStore = posts;
      return includeDrafts ? posts : posts.filter((p) => p.isPublished);
    }
  } catch (err) {
    console.warn("Supabase fetch failed, using local file fallback:", err);
  }

  // Fallback to local JSON file
  try {
    ensureDataFile();
    const fileData = fs.readFileSync(blogsFilePath, "utf-8");
    const posts: BlogPost[] = JSON.parse(fileData || "[]");
    memoryStore = posts;
    return includeDrafts ? posts : posts.filter((p) => p.isPublished);
  } catch (error) {
    console.error("Error reading blogs file:", error);
    if (memoryStore) {
      return includeDrafts ? memoryStore : memoryStore.filter((p) => p.isPublished);
    }
    return [];
  }
}

export async function getPostBySlug(slug: string, includeDrafts = false): Promise<BlogPost | null> {
  const posts = await getAllPosts(includeDrafts);
  return posts.find((p) => p.slug === slug) || null;
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const posts = await getAllPosts(true);
  return posts.find((p) => p.id === id) || null;
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

export function savePosts(posts: BlogPost[]): void {
  memoryStore = posts;
  try {
    ensureDataFile();
    fs.writeFileSync(blogsFilePath, JSON.stringify(posts, null, 2), "utf-8");
  } catch (error) {
    console.error("Failed writing posts to file, updated memory store:", error);
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

  try {
    const supabasePayload = mapToSupabase(newPost);
    await supabase.from("blogs").insert([supabasePayload]);
  } catch (err) {
    console.warn("Supabase insert failed, saving locally:", err);
  }

  posts.unshift(newPost);
  savePosts(posts);
  return newPost;
}

export async function updatePost(id: string, input: Partial<BlogPostInput>): Promise<BlogPost | null> {
  const posts = await getAllPosts(true);
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const existing = posts[index];
  let newSlug = existing.slug;
  if (input.slug && input.slug !== existing.slug) {
    newSlug = slugify(input.slug);
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

  try {
    const supabasePayload = mapToSupabase(updated);
    await supabase.from("blogs").update(supabasePayload).eq("id", id);
  } catch (err) {
    console.warn("Supabase update failed, updating locally:", err);
  }

  posts[index] = updated;
  savePosts(posts);
  return updated;
}

export async function deletePost(id: string): Promise<boolean> {
  const posts = await getAllPosts(true);
  const filtered = posts.filter((p) => p.id !== id);
  if (filtered.length === posts.length) return false;

  try {
    await supabase.from("blogs").delete().eq("id", id);
  } catch (err) {
    console.warn("Supabase delete failed, deleting locally:", err);
  }

  savePosts(filtered);
  return true;
}
