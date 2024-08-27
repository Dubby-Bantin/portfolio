import React from "react";
import { FaReact, FaCss3Alt, FaHtml5, FaJs, FaGithub } from "react-icons/fa";
import { StarsBackground } from "./ui/star-background";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import javascript from "/tech/javascript.png";
import typescript from "/tech/typescript.png";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 bg-[url('/path-to-star-field-image.jpg')] bg-cover bg-no-repeat text-white"
    >
      <StarsBackground />
      <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
        <h2 className="md:tracking-wider mb-4  lg:text-3xl text-[#1c1e21] text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-t from-indigo-900 via-blue-500 to-neutral-200 bg-opacity-60">
          About Me
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Hi, I`m <strong>Nwobodo Chidubem Desmond</strong>, a passionate and
          dedicated front-end web developer with a focus on crafting clean,
          efficient, and user-friendly web applications. My journey into coding
          began in November 2023, and since then, I`ve honed my skills in a wide
          range of technologies, from
          <span className="text-blue-400">
            {" "}
            Html-Css-Javascript to React, Typescript, Nextjs, Git, and Tailwind
            CSS.
          </span>
        </p>
        <p className="mt-6 text-lg md:text-xl leading-relaxed">
          With a background in building responsive, dynamic websites and
          applications, I love taking on challenging projects that push the
          boundaries of creativity and technology. Currently, I’m working on a
          job board platform, applying my skills to solve real-world problems
          and deliver seamless user experiences.
        </p>
        <p className="mt-6 text-lg md:text-xl leading-relaxed">
          In addition to coding, I’m always learning and evolving as a
          developer. I enjoy exploring new frameworks, improving my designs, and
          sharing my knowledge with others through platforms like TipVault,
          where I contribute programming tips for the community.
        </p>
        <p className="mt-6 text-lg md:text-xl leading-relaxed">
          When I’m not coding, you’ll find me exploring the latest trends in
          technology, Playing Football, or working
          on exciting side projects.
        </p>
      </div>

      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full pointer-events-none">
        <FaReact className="text-4xl text-blue-400 floating-icon-react absolute top-1/4 left-10" />
        <FaJs className="text-4xl text-yellow-200 floating-icon absolute top-1/4 right-10" />
        <FaCss3Alt className="text-4xl text-blue-600 floating-icon absolute bottom-1/4 left-1/4" />
        <FaHtml5 className="text-4xl text-orange-600 floating-icon absolute bottom-1/4 right-1/4" />
        <RiNextjsFill className="text-4xl text-white floating-icon absolute bottom-1 right-[69%]" />
        <FaGithub  className="text-4xl text-white floating-icon absolute bottom-1 right-[49%]" />
        <SiTypescript className="text-4xl text-blue-400 floating-icon absolute bottom-1 right-[29%]" />
      </div>
    </section>
  );
};

export default AboutMe;
