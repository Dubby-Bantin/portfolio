"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import myCard from "@/app/assets/images/logo.jpeg";
import { StaticBlogPostsSlider } from "@/app/lib/constants";

const BlogSwiper = () => {
  return (
    <div className="relative w-full py-32 px-10">
      <h1 className="text-center text-gradient mb-8">Some Blog Topics</h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay
        className="h-[21rem] items-center"
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        loop
        pagination={{ type: "bullets", dynamicBullets: true, clickable: true }}
        breakpoints={{
          300: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {StaticBlogPostsSlider.map(({ image, title }, i) => (
          <SwiperSlide key={i} className="py-10">
            <div className="relative rounded-lg">
              <Image
                src={image}
                alt={title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center p-4">
                <h3 className="text-lg font-bold max-w-xs">{title}</h3>
              </div>
              <div className="absolute bottom-5 left-5 flex items-center gap-3">
                <Image
                  src={myCard}
                  alt="Author"
                  height={50}
                  width={50}
                  className="rounded-full"
                />
                <span>Chidubem Desmond</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Styling for Pagination */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 0px !important; /* Adjust this value as needed */
        }
        .swiper-pagination-bullets {
          display: flex;
          align-items: center;
          width: 10px;
          height: 10px;
        }

        .swiper-pagination-bullet {
          background-color: white;
        }
        .swiper-pagination-bullet-active {
          background-color: #60a5fa;
        }
      `}</style>
    </div>
  );
};

export default BlogSwiper;
