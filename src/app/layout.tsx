import "./globals.css";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "next-themes";
import HeadComponent from "../components/HeadComponent";
import { usePathname } from "next/navigation";
import NavbarWrapper from "@/components/NavBarWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <HeadComponent />
      <body className="bg-white dark:bg-[#050112] text-black dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarWrapper />
          <ToastContainer theme="dark" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
