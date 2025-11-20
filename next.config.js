/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'via.placeholder.com', 'images.unsplash.com'],
    unoptimized: false,
  },
  // Optimize for deployment
  output: 'standalone',
  // Handle static file serving
  trailingSlash: false,
};

module.exports = nextConfig;