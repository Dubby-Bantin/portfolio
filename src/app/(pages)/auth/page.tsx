"use client";
import { FC, useState } from "react";
import { useRouter } from "next/navigation"; // Adjusted for Next.js 13 routing
import { FaGithub, FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";
import { ImSpinner2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { encryptKey } from "@/utils/utils";
import { signInWithGitHub, signInWithGoogle } from "@/app/lib/firebase";

const AuthForm: FC = () => {
  const [displayOtp, setDisplayOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const validateOtp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const encryptedKey = encryptKey(otp);
    localStorage.setItem("accessKey", encryptedKey);
    if (otp === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      setIsLoading(true);
      setTimeout(() => {
        router.push("/admin");
        setDisplayOtp(false);
      }, 5000);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setError("Inavlid passkey. pls try again.");
      }, 3000);
    }
  };

  const otpValue =
    typeof window !== "undefined"
      ? window.localStorage.getItem("accessKey")
      : null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050112]">
      <div className="w-full max-w-md p-8 py-10 space-y-6 bg-[#0a0a23] text-white rounded-lg shadow-lg relative">
        <h2 className="text-2xl font-bold text-center text-gradient">
          Create an account
        </h2>
        <p className="text-center text-gray-400 ">
          Enter your email below to create your account
        </p>

        <div className="flex justify-between mt-6">
          <button
            onClick={signInWithGitHub}
            className="flex items-center justify-center w-full px-4 py-2 mr-2 text-sm font-medium text-white border rounded-md hover:bg-gray-700 transition-all duration-700"
          >
            <FaGithub className="mr-2" />
            GitHub
          </button>
          <button
            onClick={signInWithGoogle}
            className="flex items-center justify-center w-full px-4 py-2 ml-2 text-sm font-medium text-white border rounded-md hover:bg-gray-700 transition-all duration-700"
          >
            <FcGoogle className="mr-2" />
            Google
          </button>
        </div>

        <div className="flex items-center justify-center mt-4 text-gray-500">
          <span className="w-1/5 border-b border-gray-600"></span>
          <span className="px-2 text-sm">OR CONTINUE WITH</span>
          <span className="w-1/5 border-b border-gray-600"></span>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full px-4 py-[.3rem] text-black bg-transparent placeholder-gray-500 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-white"
              placeholder="m@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full px-4 py-[.3rem] text-black placeholder-gray-500 bg-transparent border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-white"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full py-[.3rem] text-black bg-white border border-transparent rounded-sm hover:opacity-90 focus:outline-none"
          >
            Create account
          </button>
        </form>
        <button
          onClick={() =>
            otpValue ? router.push("/admin") : setDisplayOtp(true)
          }
          className="text-text text-[.8rem] text-blue-400 absolute bottom-2 right-2"
        >
          admin
        </button>
      </div>

      {displayOtp && (
        <motion.div
          transition={{ duration: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center fixed bg-black-100/85 min-h-screen w-full z-10"
        >
          <h1 className="text-gradient">Enter OTP to verify</h1>
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <button
            onClick={validateOtp}
            className="mt-4 text-white bg-blue-500 px-4 py-2 rounded-md"
          >
            {isLoading ? (
              <ImSpinner2 className="animate-spin w-20" />
            ) : (
              "Verify OTP"
            )}
          </button>

          {error && (
            <p className="text-red-500 font-text mt-4 text-[.9rem]">{error}*</p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default AuthForm;
