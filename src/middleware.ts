import { NextRequest, NextResponse } from "next/server";
import { decryptKey } from "@/app/lib/utils"; // Adjust path as necessary

export const middleware = (req: NextRequest) => {
  // Get the access key from cookies
  const accessKey = req.cookies.get("accessKey")?.value;

  // Check if the access key exists
  if (!accessKey) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // Decrypt the access key and check if it matches the expected value
  const decryptedKey = decryptKey(accessKey);

  if (decryptedKey !== process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
};

export const config = {
  matcher: "/admin/:path*", // Protect all routes under /admin
};
