import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { StarsBackground } from "./ui/star-background";
import profileImage from "@/app/assets/images/WhatsApp Image 2024-11-13 at 08.34.32_ae3ec740.jpg";
const Banner = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center font-heading antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#ffffff"
      />
      <StarsBackground />
      <div className="text-center gap-5 flex flex-col p-4 max-w-7xl  mx-auto relative z-10  w-full pt-52 md:pt-0">
        <p>Dynamic Web Magic with Next.js</p>
        <Image
          src={profileImage}
          alt="alt"
          width={200}
          height={200}
          className="rounded-full relative top-10 right-10"
        />
        <TextGenerateEffect words="Transforming Concepts into Seamless User Experiences" />
        <p className=" md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-[#1c1e21 ]">
          Hi! I&apos;m Chidubem Desmond, a Next.js Developer.
        </p>
        <a href="#projects">
          <MagicButton title="Show my work" icon={<FaLocationArrow />} />
        </a>
      </div>
    </div>
  );
};

export default Banner;
