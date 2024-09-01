// /src/app/lib/seoConfig.ts

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  siteUrl: string;
  openGraph: {
    type: string;
    locale: string;
    url: string;
    title: string;
    description: string;
    images: [
      {
        url: string;
        width: number;
        height: number;
        alt: string;
      }
    ];
  };
}

const seoConfig: SEOConfig = {
  title: "dubbystack.net-portfolio",
  description: "Showcasing my work and projects as a web developer.",
  keywords: "portfolio, web development, projects, coding",
  siteUrl: "https://portfolio-ivory-seven-71.vercel.app/",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-ivory-seven-71.vercel.app/",
    title: "My Portfolio",
    description: "Showcasing my work and projects as a web developer.",
    images: [
      {
        url: "https://portfolio-ivory-seven-71.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio.289102d4.png&w=640&q=75",
        width: 1200,
        height: 630,
        alt: "My Portfolio Image",
      },
    ],
  },
};

export default seoConfig;
