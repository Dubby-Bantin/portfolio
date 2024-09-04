import BlogBanner from "@/components/BlogBanner";
import BlogSwiper from "@/components/BlogSwiper";
import LatestBlogs from "@/components/LatestBlogs";
import { log } from "console";

log("bantin");
const Blog = () => (
  <div>
    <BlogBanner />
    <BlogSwiper />
    <LatestBlogs />
  </div>
);

export default Blog;
