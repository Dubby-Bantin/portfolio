import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "next-themes";
import { StarsBackground } from "./components/ui/star-background";
import HeadComponent from "./components/HeadComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "portfolio",
    template: "%s | Bantin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <HeadComponent />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
