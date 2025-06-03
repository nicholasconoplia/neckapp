import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: [], // Add any image domains you need to use
  },
};

export default nextConfig;
