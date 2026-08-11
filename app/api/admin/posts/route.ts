import { NextResponse } from "next/server";
import { verifyAdminAuth } from "@/lib/admin-auth";
import { createPost, getAllPosts } from "@/lib/blogs";

export async function GET() {
  const isAuth = await verifyAdminAuth();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const posts = getAllPosts(true);
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const isAuth = await verifyAdminAuth();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    if (!body.title || !body.content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    const newPost = createPost(body);
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Failed creating post:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
