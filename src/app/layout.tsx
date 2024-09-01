import "./globals.css";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "next-themes";
import HeadComponent from "../components/HeadComponent";

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
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
