import { log } from "console";
import BlogBanner from "./components/BlogBanner";
import BlogSwiper from "./components/BlogSwiper";
import LatestBlogs from "./components/LatestBlogs";
import BlogArchive from "./components/BlogArchive";

log("bantin");
const Blog = () => (
  <div>
    <BlogBanner />
    <BlogSwiper />
    <LatestBlogs />
    <BlogArchive />
  </div>
);

export default Blog;
