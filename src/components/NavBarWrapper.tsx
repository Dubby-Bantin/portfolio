"use client"; // Mark this component as a client component

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

const NavbarWrapper = () => {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/blog" || pathname === "/blog/:id") {
    return <NavBar />;
  }
  return null;
};

export default NavbarWrapper;
