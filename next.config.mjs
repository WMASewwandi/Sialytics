/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for Vercel deployment
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material']
  },
  // Ensure stable builds
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
