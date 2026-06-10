import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-9db0b9151825419fbf84b8bffe1adbf4.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "https://zuvara-api.webxnepal.com/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
