"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MagicButton from "@/components/MagicButton";
import { CiCalendar } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import logo from "@/app/assets/images/logo.jpeg";
import CategoryFilters from "@/components/CategoryFilters";
import { BlogPost } from "@/types/types";
import {
  fetchBlogDataRealTime,
  formatTimestampToReadableDate,
} from "@/app/lib/firebase/FetchBlogPosts";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = fetchBlogDataRealTime((data) => {
      if (Array.isArray(data)) {
        setBlogs(data);
        console.log(data);
      }
    });

    setLoading(false);
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div id="latest-posts" className="px-4 md:px-10 w-full flex flex-col gap-5">
      <h1 className="text-gradient text-center md:text-left">Latest Posts</h1>

      <div className="w-full flex flex-col-reverse md:flex-row md:items-start gap-5">
        <div className="flex flex-col gap-10 max-w-full md:max-w-[50rem] mx-auto">
          {blogs.slice(2, 5).map((blog) => (
            <Link
              href={`/blog/${blog.id}`}
              key={blog.id}
              className="bg-gradient-to-r from-[#0C0E23] rounded-lg p-4 md:p-6 text-white shadow-lg flex flex-col gap-10"
            >
              <div className="rounded-lg h-52 md:h-80 bg-blue-700 overflow-clip w-full mb-6 md:mb-10">
                {blog.paragraphs[0]?.imageUrl ? (
                  <img
                    src={blog.paragraphs[0]?.imageUrl || "/default-image.jpg"} // Use a default image if none is available
                    alt="Blog Image"
                    className="object-cover h-[20rem] w-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    width={200}
                    // priority // If the image is important and should load first
                    height={300}
                    // quality={100} // Adjust image quality (0 to 100)
                    // layout="responsive"
                  />
                ) : (
                  <Skeleton height={208} width="100%" borderRadius="0.5rem" />
                )}
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-gradient text-lg md:text-[1.5rem]">
                  {blog.title}
                </h1>
                <div className="flex md:flex-row flex-col items-center gap-3 md:gap-6 mb-4 md:mb-5 font-text">
                  <div className="flex items-center gap-3">
                    <Image
                      src={logo}
                      alt="Profile"
                      height={30}
                      width={30}
                      className="rounded-full"
                    />
                    Desmond
                  </div>
                  <div className="flex items-center gap-3">
                    <CiCalendar />
                    {formatTimestampToReadableDate(blog.date)}
                  </div>
                </div>
                <p className="text-center font-text text-sm md:text-base mb-5">
                  {blog.introduction}
                </p>
                <MagicButton
                  title="Continue Reading"
                  icon={<FaArrowTrendUp />}
                />
              </div>
            </Link>
          ))}
        </div>

        <CategoryFilters />
      </div>
    </div>
  );
};

export default LatestBlogs;
