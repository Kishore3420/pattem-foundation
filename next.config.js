/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add proper CSS handling
  webpack: config => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });
    return config;
  },
  // Ensure proper static file handling
  images: {
    unoptimized: true,
  },
  // Add proper output configuration
  output: 'standalone',
};

export default nextConfig;
