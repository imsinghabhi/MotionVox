import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blogs";

export async function GET() {
  try {
    // Return only published posts for public readers (no admin auth required)
    const posts = getAllPosts(false);
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Failed fetching public posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
