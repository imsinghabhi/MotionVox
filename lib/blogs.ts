import fs from "fs";
import path from "path";
import { BlogPost, BlogPostInput } from "@/types/blog";

const blogsFilePath = path.join(process.cwd(), "data", "blogs.json");

// Memory store fallback if running on read-only serverless filesystems
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

export function getAllPosts(includeDrafts = false): BlogPost[] {
  try {
    ensureDataFile();
    const data = fs.readFileSync(blogsFilePath, "utf-8");
    const posts: BlogPost[] = JSON.parse(data || "[]");
    memoryStore = posts;
    if (includeDrafts) return posts;
    return posts.filter((p) => p.isPublished);
  } catch (error) {
    console.error("Error reading blogs file:", error);
    if (memoryStore) {
      return includeDrafts ? memoryStore : memoryStore.filter((p) => p.isPublished);
    }
    return [];
  }
}

export function getPostBySlug(slug: string, includeDrafts = false): BlogPost | null {
  const posts = getAllPosts(includeDrafts);
  return posts.find((p) => p.slug === slug) || null;
}

export function getPostById(id: string): BlogPost | null {
  const posts = getAllPosts(true);
  return posts.find((p) => p.id === id) || null;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
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

export function createPost(input: BlogPostInput): BlogPost {
  const posts = getAllPosts(true);
  
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

  posts.unshift(newPost);
  savePosts(posts);
  return newPost;
}

export function updatePost(id: string, input: Partial<BlogPostInput>): BlogPost | null {
  const posts = getAllPosts(true);
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
  } else if (input.title && input.title !== existing.title && !input.slug) {
    // Keep existing slug unless explicitly changed
  }

  const updated: BlogPost = {
    ...existing,
    ...input,
    slug: newSlug,
    readTime: input.content
      ? `${Math.max(1, Math.ceil(input.content.split(" ").length / 200))} min read`
      : existing.readTime,
  };

  posts[index] = updated;
  savePosts(posts);
  return updated;
}

export function deletePost(id: string): boolean {
  const posts = getAllPosts(true);
  const filtered = posts.filter((p) => p.id !== id);
  if (filtered.length === posts.length) return false;
  savePosts(filtered);
  return true;
}
