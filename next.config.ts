import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tesa-landing",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
