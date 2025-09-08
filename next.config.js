/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
