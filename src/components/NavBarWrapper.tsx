"use client"; // Mark this component as a client component

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

const NavbarWrapper = () => {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/blog") {
    return <NavBar />;
  }
  return null;
};

export default NavbarWrapper;
