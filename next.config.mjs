/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**", // Adjust this if you need more specific path matching
      },
    ],
  },
};

export default nextConfig;
