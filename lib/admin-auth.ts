import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "mv_admin_session";
// Default passcode if ADMIN_PASSWORD is not explicitly configured in env
export const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "motionvox2026";

export async function verifyAdminAuth(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    if (!token) return false;

    // Simple hash verification or token match
    return token === Buffer.from(DEFAULT_ADMIN_PASSWORD).toString("base64");
  } catch {
    return false;
  }
}

export function generateAdminToken(password: string): string | null {
  if (password === DEFAULT_ADMIN_PASSWORD) {
    return Buffer.from(password).toString("base64");
  }
  return null;
}
