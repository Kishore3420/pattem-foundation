/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure proper static file handling
  images: {
    unoptimized: true,
  },
  // Add proper output configuration
  output: 'standalone',
};

export default nextConfig;
