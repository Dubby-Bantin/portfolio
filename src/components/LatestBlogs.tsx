import Image from "next/image";
import React from "react";
import blog1 from "@/app/assets/images/blogImages/pexels-anete-lusina-5240544.jpg";
import blog2 from "@/app/assets/images/blogImages/pexels-technobulka-10816120.jpg";
import blog3 from "@/app/assets/images/blogImages/pexels-sora-shimazaki-5935787.jpg";

import MagicButton from "./MagicButton";
import { CiCalendar } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import logo from "@/app/assets/images/logo.jpeg";
import CategoryFilters from "./CategoryFilters";

const LatestBlogs = () => {
  return (
    <div id="latest-posts" className="px-4 md:px-10 w-full flex flex-col gap-5">
      <h1 className="text-gradient text-center md:text-left">Latest Posts</h1>

      <div className="w-full flex flex-col-reverse md:flex-row md:items-start gap-5">
        <div className="flex flex-col gap-10 max-w-full md:max-w-[50rem] mx-auto">
          {[blog1, blog2, blog3].map((image, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-[#0C0E23] rounded-lg p-4 md:p-6 text-white shadow-lg flex flex-col gap-10"
            >
              <div className="rounded-lg h-52 md:h-80 bg-blue-700 overflow-clip w-full mb-6 md:mb-10">
                <Image
                  src={image}
                  alt="alt"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-gradient text-lg md:text-[1.5rem]">
                  Best React Animation Libraries
                </h1>
                <div className="flex items-center gap-3 md:gap-6 mb-4 md:mb-5 font-text">
                  <div className="flex items-center gap-3">
                    <Image
                      src={logo}
                      alt="alt"
                      height={30}
                      width={30}
                      className="rounded-full"
                    />
                    Dubby Bantin
                  </div>
                  <div className="flex items-center gap-3">
                    <CiCalendar />
                    Oct 11, 2021
                  </div>
                </div>
                <p className="text-center font-text text-sm md:text-base mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore nesciunt suscipit veniam necessitatibus non
                  obcaecati animi laudantium ipsa repellat rem laborum ea ipsam,
                  velit voluptatum voluptatibus, quos unde, facere quisquam?
                </p>
                <MagicButton
                  title="Continue Reading"
                  icon={<FaArrowTrendUp />}
                />
              </div>
            </div>
          ))}
        </div>

        <CategoryFilters />
      </div>
    </div>
  );
};

export default LatestBlogs;
