/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'via.placeholder.com', 'images.unsplash.com'],
    unoptimized: false,
  },
  // Remove output standalone for Vercel compatibility
  trailingSlash: false,
  eslint: {
    // Allow production builds to successfully complete even if ESLint errors exist
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;