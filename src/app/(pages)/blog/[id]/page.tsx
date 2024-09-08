import Image from "next/image";
import Link from "next/link";
import { IoReturnDownBackOutline } from "react-icons/io5";
import profilePic from "@/app/assets/images/logo.jpeg";
import HandleSelect from "@/components/HandleSelect";
import {
  fetchBlogById,
  formatTimestampToReadableDate,
} from "@/app/lib/firebase/FetchBlogPosts";
import { BlogPost } from "@/types/types";
import GiscusComments from "../components/GiscusComments";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default async function BlogDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const blogData = await fetchBlogById(id);
  const blog: BlogPost | null = Array.isArray(blogData) ? null : blogData;

  if (!blog) {
    return <p>Blog not found</p>; // Handle case where blog doesn't exist
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Link href="/blog" className="flex items-center justify-between w-full">
        <button className="inline-flex items-center justify-center rounded-full border border-blue-500 h-[50px] w-[50px] mb-5 mt-5">
          <IoReturnDownBackOutline />
        </button>
        <span className="text-blue-500 flex items-end justify-center">
          <p>please make sure to leave a comment</p>{" "}
          <MdKeyboardDoubleArrowDown />
        </span>
      </Link>

      {/* Blog Header Image */}
      <div
        style={{
          objectFit: "contain",
          background: `linear-gradient(to top, rgba(0, 0, 0, .9), rgba(0, 0, 0, .9)), url(${
            blog.paragraphs[0]?.imageUrl || "/default-image.jpg"
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="object-cover h-64 sm:h-96 w-full flex items-center justify-center"
      >
        <h1 className="text-gradient text-center text-xl sm:text-3xl lg:text-5xl">
          {blog.title}
        </h1>
      </div>

      {/* Blog Content */}
      <div className="flex flex-col lg:flex-row items-start md:gap-10 py-10 lg:py-20">
        {/* Author Profile */}
        <div className="flex flex-col items-center gap-5 lg:sticky top-10">
          <Image
            src={profilePic}
            alt="Author's Profile"
            height={100}
            width={100}
            className="rounded-full"
          />
          <p className="font-bold text-xl sm:text-2xl lg:text-3xl font-heading">
            @Chidubem Desmond
          </p>
          <small className="text-center text-sm font-text">
            *{blog.introduction}
          </small>
        </div>

        {/* Main Content */}
        <div className="px-5">
          {/* Blog Date and Select Option */}
          <div className="flex bg-[#050112] justify-between items-center pb-10 pr-5 py-5 sticky top-0 z-10 gap-10">
            <p className="date">{formatTimestampToReadableDate(blog.date)}</p>
            <HandleSelect />
          </div>

          {/* Blog Paragraphs */}
          <div className="flex flex-col gap-10">
            {blog.paragraphs.map((paragraph, index) => (
              <div key={index} id={`${index}`}>
                <h1 className="font-bold font-heading text-lg sm:text-xl lg:text-2xl mb-2">
                  {paragraph.title}
                </h1>
                <p className="font-text mb-10 text-sm sm:text-base lg:text-lg">
                  {paragraph.text}
                </p>
                {/* Paragraph Image */}
                {paragraph.imageUrl && (
                  <Image
                    src={paragraph.imageUrl || "/default-image.jpg"}
                    alt={`Image for ${paragraph.title}`}
                    className="w-full object-cover h-48 sm:h-72 lg:h-96 rounded-sm"
                    width={500}
                    height={500}
                    quality={100}
                    objectFit="cover"
                    layout="responsive"
                  />
                )}
              </div>
            ))}

            {/* Blog Quote */}
            {blog.quote && (
              <div id="quote">
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="font-heading text-lg sm:text-xl lg:text-2xl">
                      Quote
                    </p>
                    <small className="font-text text-sm sm:text-base">
                      *{blog.quote}*
                    </small>
                  </div>
                </div>
              </div>
            )}

            {/* Blog Conclusion */}
            {blog.conclusion && (
              <div id="conclusion">
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="font-heading text-lg sm:text-xl lg:text-2xl">
                      Conclusion
                    </p>
                    <small className="font-text text-sm sm:text-base">
                      {blog.conclusion}
                    </small>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <GiscusComments />
    </div>
  );
}
