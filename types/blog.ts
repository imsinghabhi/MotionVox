export interface BlogAuthor {
  name: string;
  avatar: string;
  role: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: BlogAuthor;
  publishedAt: string;
  isPublished: boolean;
  readTime: string;
  tags: string[];
}

export type BlogPostInput = Omit<BlogPost, "id" | "publishedAt"> & {
  publishedAt?: string;
};
