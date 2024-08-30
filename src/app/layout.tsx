import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "next-themes";
import seoConfig from "./lib/seoConfig";
import HeadComponent from "./components/HeadComponent";

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
      <HeadComponent />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
