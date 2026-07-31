import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Institutional site is mostly static; images are local brand assets.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
