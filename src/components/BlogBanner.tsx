import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const BlogBanner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <video
        width="100%"
        height="100%"
        autoPlay
        loop
        src="/videos/video.mp4"
        className="w-full h-auto md:h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
      />
      <div className="py-10 sm:py-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-center items-center text-center p-4 md:p-8 transition-opacity duration-500">
          <h1 className="text-gradient text-xl mt-5">
            Discover Amazing Insights
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white mt-2 md:mt-4 font-text">
            Dive into our latest blog posts and stay updated with the best tips
            and trends in the industry.
          </p>
          <a
            href="#latest-posts"
            className="mt-4 bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg font-semibold transition-transform transform hover:scale-105"
          >
            <MagicButton title="Explore now" icon={<FaLocationArrow />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
