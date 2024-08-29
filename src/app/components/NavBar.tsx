"use client";

import Image from "next/image";
import { logo } from "../assets";
import { navLinks } from "../lib/constants";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RiCloseFill, RiMenu3Line } from "react-icons/ri";
const NavBar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const activateBlur = () => {
    window.addEventListener("scroll", () =>
      window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false)
    );
  };

  useEffect(() => {
    activateBlur();
  }, []);

  return (
    <header
      className={`top-0 z-[9999] sticky  flex justify-between items-center ${
        !isScroll ? "bg-black-100" : "backdrop-blur-lg"
      }  p-2 `}
    >
      <Image src={logo} alt="logo" height={50} className="rounded-full" />

      <ul className="sm:flex items-center gap-10 hidden text-white">
        {navLinks.map(({ id, title }) => (
          <Link key={id} href={""}>
            {title}
          </Link>
        ))}
      </ul>

      {/* mobile nav-menu-start */}

      <button
        onClick={() => setIsopen(!isOpen)}
        className="sm:hidden block transition-all duration-1000 text-white text-2xl"
      >
        {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
      </button>
      <div
        className={`sm:hidden mobile__nav justify-center bg-gradient-to-br from-[#040d26] via-[#2a3f6d] to-[#050112] items-center rounded-md flex flex-col h-[20rem] w-[13rem] top-20 right-0 shadow-lg absolute gap-5 z-[9999] ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-10 text-white items-center">
          {navLinks.map(({ id, title }) => (
            <Link onClick={() => setIsopen(false)} key={id} href={"href"}>
              {title}
            </Link>
          ))}
        </ul>
      </div>

      {/* mobile nav-menu-end */}
    </header>
  );
};

export default NavBar;
