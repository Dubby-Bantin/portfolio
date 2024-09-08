"use client"; // Mark this component as a client component

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

const NavbarWrapper = () => {
  const pathname = usePathname();

  // Adjust this list of paths as needed
  if (
    pathname === "/" ||
    pathname === "/blog" ||
    pathname === "/admin" ||
    pathname.startsWith("/admin/")
  ) {
    return <NavBar />;
  }
  return null;
};

export default NavbarWrapper;
