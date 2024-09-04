import { NextRequest, NextResponse } from "next/server";
import { decryptKey } from "@/app/lib/utils"; // Adjust path as necessary

export function middleware(req: NextRequest) {
  // Getting the access key from cookies
  const accessKey = req.cookies.get("accessKey")?.value;

  // If there is no access key, allow access to /auth/admin-otp
  if (!accessKey) {
    if (req.nextUrl.pathname === "/auth/admin-otp") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // Decrypting the access key and check if it matches the expected value
  const decryptedKey = decryptKey(accessKey);

  if (decryptedKey !== process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // Redirect to /admin if authenticated user tries to access /auth/admin-otp
  if (
    req.nextUrl.pathname === "/auth/admin-otp" &&
    decryptedKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY
  ) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // Allow the request to proceed if none of the above conditions are met
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/auth/admin-otp"], // Protect all routes under /admin and handle /auth/admin-otp
};
