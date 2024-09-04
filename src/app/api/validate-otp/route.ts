import { NextResponse } from "next/server";
import { encryptKey } from "@/app/lib/utils";

export async function POST(request: Request) {
  const { otp } = await request.json();

  // Validate OTP
  if (otp === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
    const encryptedKey = encryptKey(otp);

    // Set cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set('accessKey', encryptedKey, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    return response;
  } else {
    return NextResponse.json({ success: false, message: 'Invalid passkey. Please try again.' });
  }
}
