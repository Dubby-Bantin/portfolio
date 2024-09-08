"use client";
import { FC } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signInWithGitHub, signInWithGoogle } from "@/app/lib/firebase/auth";

const AuthForm: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
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
      </div>
    </div>
  );
};

export default AuthForm;
