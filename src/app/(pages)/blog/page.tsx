import BlogBanner from "@/components/BlogBanner";
import BlogSwiper from "@/components/BlogSwiper";
import LatestBlogs from "@/components/LatestBlogs";
import SelectScrollable from "@/components/Select";
import { log } from "console";

log("bantin");
const Blog = () => (
  <div>
    <BlogBanner />
    <BlogSwiper />
    <LatestBlogs />
    <SelectScrollable />
  </div>
);

export default Blog;
