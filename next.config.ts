import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fashion-store",
  assetPrefix: "/fashion-store/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;