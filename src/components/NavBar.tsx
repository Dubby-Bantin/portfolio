"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { RiCloseFill, RiMenu3Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { logo } from "@/app/assets";
import { navLinks } from "@/app/lib/constants";
import SearchBar from "./search/Search";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const path = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`top-0 z-[9999] sticky px-5 flex justify-between items-center p-2 ${
        isScrolled ? "backdrop-blur-lg" : "bg-black-100"
      }`}
    >
      <Link href="/">
        <Image src={logo} alt="logo" height={50} className="rounded-full" />
      </Link>
      <SearchBar />

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center gap-10 text-white">
        {navLinks.map(({ id, title }, i) => {
          const shouldRenderLink =
            (path === "/" && i < 4) || (path === "/blog" && i === 4);
          return (
            shouldRenderLink && (
              <Link key={id} href={`#${id}`}>
                {title}
              </Link>
            )
          );
        })}
      </nav>

      {/* Mobile Navigation */}
      <button
        onClick={toggleMenu}
        className="sm:hidden block transition-all duration-1000 text-white text-2xl"
      >
        {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
      </button>
      {isOpen && (
        <div className="sm:hidden mobile__nav bg-gradient-to-br from-[#0C0E23] to-[#050112] rounded-md flex flex-col h-[20rem] w-[13rem] top-20 right-0 shadow-lg absolute z-[9999] gap-5">
          <ul className="flex flex-col gap-10 text-white items-center relative">
            <div className="blue__gradient w-full h-full z-0 absolute" />
            {navLinks.map(({ id, title }) => (
              <Link key={id} href={`#${id}`} onClick={toggleMenu}>
                {title}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
