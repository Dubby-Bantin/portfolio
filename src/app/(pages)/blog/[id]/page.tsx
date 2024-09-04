import React from "react";
import Image from "next/image";
import blog1 from "@/app/assets/images/blogImages/pexels-anete-lusina-5240544.jpg";
import blog2 from "@/app/assets/images/blogImages/pexels-technobulka-10816120.jpg";
import blog3 from "@/app/assets/images/blogImages/pexels-antonio-batinic-2573434-4164418.jpg";
import profilePic from "@/app/assets/images/logo.jpeg";
import HandleSelect from "@/components/HandleSelect";
import { log } from "console";

const FullBlog = ({ params }: { params: { id: string } }) => {
  log("next dev");
  return (
    <div>
      <div
        style={{
          objectFit: "contain",
          background: `linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, .4)), url(${blog1.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="object-cover h-96 w-full flex items-center justify-center"
      >
        <h1 className="text-gradient">Best React Animation Libraries</h1>
      </div>

      <div className="flex items-start py-20">
        <div className="flex flex-col items-center gap-5 sticky top-10">
          <Image
            src={profilePic}
            alt="alt"
            height={100}
            width={100}
            className="rounded-full"
          />
          <p className="font-bold text-3xl font-heading">@Chidubem Desmond</p>
          <small className="text-center text-sm font-text w-1/2">
            *Animations can significantly enhance the user experience by making
            interactions more engaging and visually appealing. In React, several
            libraries provide powerful and easy-to-use tools for adding
            animations to your applications. This article explores some of the
            best React animation libraries, their features, and how they can be
            used to create dynamic user interfaces.*
          </small>
        </div>

        <div className="px-5">
          <div className="flex bg-[#050112] justify-between items-center pb-10 pr-5 py-5 sticky top-0">
            <p className="date">Jun 10 2024</p>
            <HandleSelect />
          </div>

          <div className="flex flex-col gap-10">
            {/* Content sections with matching IDs */}
            <div id="1">
              <h1 className="font-bold font-heading text-xl mb-2">
                Why Use Animation Libraries in React?
              </h1>
              <p className="font-text mb-10">
                Animations play a crucial role in modern web design by improving
                user interaction, guiding users through tasks, and adding a
                layer of polish to the user interface. While CSS animations can
                handle simple transitions, React animation libraries offer more
                complex and interactive animations. These libraries provide
                pre-built components, utilities, and hooks that make it easier
                to integrate animations seamlessly into your React projects.
              </p>
              <Image
                src={blog2}
                alt="alt"
                className="w-full object-cover h-96 rounded-sm"
              />
            </div>

            <div id="2">
              <h1 className="font-bold font-heading text-xl mb-2">
                Framer Motion
              </h1>
              <p className="font-text mb-10">
                Framer Motion is one of the most popular animation libraries for
                React. It offers an intuitive API and is highly flexible,
                allowing developers to create both simple and complex animations
                with ease. Framer Motion supports keyframes, spring animations,
                and gestures like dragging and hovering. Its declarative syntax
                integrates smoothly with React components, making it a go-to
                choice for developers looking to add sophisticated animations to
                their applications.
              </p>
              <Image
                src={blog3}
                alt="alt"
                className="w-full object-cover h-96 rounded-sm"
              />
            </div>

            <div id="3">
              <h1 className="font-bold font-heading text-xl mb-2">
                React Spring
              </h1>
              <p className="font-text mb-10">
                React Spring is another powerful library that focuses on
                physics-based animations. It offers a range of hooks that make
                it easy to create fluid, natural-looking animations. React
                Spring’s emphasis on real-world physics (like tension, friction,
                and mass) makes the animations feel more realistic. This library
                is particularly well-suited for interactive UI elements, such as
                draggable components and scroll animations.
              </p>
              <Image
                src={blog3}
                alt="alt"
                className="w-full object-cover h-96 rounded-sm"
              />
            </div>

            <div id="4">
              <h1 className="font-bold font-heading text-xl mb-2">
                GSAP (GreenSock Animation Platform)
              </h1>
              <p className="font-text mb-10">
                GSAP is a robust and performance-focused animation library that
                has been a staple in the web animation community for years.
                While not React-specific, GSAP’s React integration allows
                developers to use its powerful timeline and tweening
                capabilities within React components. GSAP is known for its high
                performance and ability to handle complex sequences and
                intricate animations, making it ideal for projects that require
                advanced animation control.
              </p>
              <Image
                src={blog3}
                alt="alt"
                className="w-full object-cover h-96 rounded-sm"
              />
            </div>

            <div id="5">
              <h1 className="font-bold font-heading text-xl mb-2">
                React Reveal
              </h1>
              <p className="font-text mb-10">
                React Reveal is a simple yet effective library for adding reveal
                animations to your React components. It offers a variety of
                animations, such as fade, slide, zoom, and bounce, which trigger
                when elements enter the viewport. React Reveal is particularly
                useful for adding scroll-triggered animations, enhancing the
                visual flow of your application as users navigate through
                content. Its ease of use and variety of pre-built animations
                make it a great choice for adding subtle yet impactful effects.
              </p>
              <Image
                src={blog3}
                alt="alt"
                className="w-full object-cover h-96 rounded-sm"
              />
            </div>

            <div id="quote">
              <div className="flex flex-col gap-10">
                <div>
                  <p className="font-heading">Quote*</p>
                  <small className="font-text">
                    *Animations are the bridge between design and interaction,
                    bringing life and fluidity to user interfaces.*
                  </small>
                </div>
              </div>
            </div>

            <div id="conclusion">
              <div className="flex flex-col gap-10">
                <div>
                  <p className="font-heading">Conclusion*</p>
                  <small className="font-text">
                    Choosing the right animation library for your React project
                    depends on your specific needs, whether it’s simple
                    transitions, physics-based interactions, or complex
                    sequences. Framer Motion, React Spring, GSAP, and React
                    Reveal each offer unique features that can help elevate your
                    user interfaces, making them more engaging and dynamic. By
                    leveraging these tools, developers can create applications
                    that are not only functional but also visually captivating.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
