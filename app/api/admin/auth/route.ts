import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, generateAdminToken, verifyAdminAuth } from "@/lib/admin-auth";

export async function GET() {
  const isAuth = await verifyAdminAuth();
  return NextResponse.json({ authenticated: isAuth });
}

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    const token = generateAdminToken(password);
    if (!token) {
      return NextResponse.json({ error: "Invalid admin password" }, { status: 401 });
    }

    const cookieStore = await cookies();
    cookieStore.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return NextResponse.json({ success: true, message: "Logged in successfully" });
  } catch (err) {
    console.error("Auth error:", err);
    return NextResponse.json({ error: "Server error during login" }, { status: 500 });
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
  return NextResponse.json({ success: true, message: "Logged out" });
}
