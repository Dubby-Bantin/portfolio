import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "next-themes";
import seoConfig from "./lib/seoConfig";

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
      <title>{seoConfig.title}</title>
      <meta name="description" content={seoConfig.description} />
      <meta name="keywords" content={seoConfig.keywords} />
      <meta property="og:type" content={seoConfig.openGraph.type} />
      <meta property="og:locale" content={seoConfig.openGraph.locale} />
      <meta property="og:url" content={seoConfig.openGraph.url} />
      <meta property="og:title" content={seoConfig.openGraph.title} />
      <meta
        property="og:description"
        content={seoConfig.openGraph.description}
      />
      <meta property="og:image" content={seoConfig.openGraph.images[0].url} />
      <meta
        property="og:image:width"
        content={String(seoConfig.openGraph.images[0].width)}
      />
      <meta
        property="og:image:height"
        content={String(seoConfig.openGraph.images[0].height)}
      />
      <meta
        property="og:image:alt"
        content={seoConfig.openGraph.images[0].alt}
      />
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
