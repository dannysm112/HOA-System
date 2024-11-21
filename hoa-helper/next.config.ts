import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disable eslint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
