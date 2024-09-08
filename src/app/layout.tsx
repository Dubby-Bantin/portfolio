import "./globals.css";
import { ThemeProvider } from "next-themes";
import HeadComponent from "../components/HeadComponent";
import NavbarWrapper from "@/components/NavBarWrapper";
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
