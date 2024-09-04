import { NextRequest, NextResponse } from "next/server";
import { decryptKey } from "@/app/lib/utils"; // Adjust path as necessary

export const middleware = (req: NextRequest) => {
  // Getting the access key from cookies
  const accessKey = req.cookies.get("accessKey")?.value;

  // Checking if the access key exists
  if (!accessKey) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // Decrypting the access key and check if it matches the expected value
  const decryptedKey = decryptKey(accessKey);

  if (decryptedKey !== process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  if (
    req.nextUrl.pathname === "/auth/admin-otp" &&
    decryptedKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY
  ) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/admin/:path*", "/auth/admin-otp"], // Protect all routes under /admin
};
