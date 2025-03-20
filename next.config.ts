import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  matcher: ["/"], // "/" のアクセス時のみ middleware を適用
};

module.exports = nextConfig;


export default nextConfig;
