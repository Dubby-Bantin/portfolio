"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ImSpinner2 } from "react-icons/im";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const AdminOtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateOtp = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/validate-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp }),
      });

      const data = await response.json();
      console.log(response);

      if (data.success) {
        setTimeout(() => {
          router.push("/admin");
        }, 2000); // Delay of 2 seconds
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      // Ensure the loader is hidden after the delay
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center fixed bg-black-100/85 min-h-screen w-full z-10"
    >
      <h1 className="text-gradient">Enter OTP to Verify</h1>
      <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
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
        {isLoading ? <ImSpinner2 className="animate-spin w-6" /> : "Verify OTP"}
      </button>

      {error && (
        <p className="text-red-500 font-text mt-4 text-[.9rem]">{error}</p>
      )}
    </motion.div>
  );
};

export default AdminOtpVerification;
