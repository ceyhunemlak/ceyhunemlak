import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Vercel için statik HTML export
  trailingSlash: true,
  images: {
    unoptimized: true, // Statik export için gerekli
  },
};

export default nextConfig;
