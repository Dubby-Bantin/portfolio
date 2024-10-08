"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/app/assets/images/logo.jpeg";
import {
  fetchBlogDataRealTime,
  formatTimestampToReadableDate,
} from "@/app/lib/firebase/FetchBlogPosts";
import { BlogPost } from "@/types/types";

const BlogArchive = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const unsubscribe = fetchBlogDataRealTime((data) => {
      setBlogs(Array.isArray(data) ? data : []);
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <div className="px-4 md:px-10 w-full flex flex-col gap-5 items-start py-10">
      <p className="text-gradient font-semibold mb-6">Blogs</p>
      <div className="w-full flex flex-wrap justify-center items-start gap-6">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.id}`}
            className="w-full md:w-[25rem] group"
          >
            <div className="bg-gradient-to-r from-[#0C0E23] to-[#1A1B41] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <div className="rounded-t-lg h-52  overflow-clip w-full ">
                <Image
                  src={blog.paragraphs[0]?.imageUrl || "/default-image.jpg"}
                  alt="Blog Image"
                  className="w-full object-cover"
                  width={300}
                  height={100}
                  quality={100}
                  layout="responsive"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-white bg-gray-700 py-1 px-2 rounded w-fit mb-2 font-text">
                  {blog.category}
                </p>
                <h3 className="text-lg font-semibold font-text text-transparent bg-clip-text bg-gradient-to-t from-indigo-900 via-blue-500 to-neutral-200 mb-3">
                  {blog.title.slice(0, 35)}...
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={logo}
                    alt="Profile"
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                  <p className="text-sm font-text">Desmond</p>
                </div>
                <div className="text-gray-400 flex items-center justify-between">
                  <small>{formatTimestampToReadableDate(blog.date)}</small>
                  <small className="text-blue-500">read full article</small>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogArchive;
