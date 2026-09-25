import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/portfolio',
  images: { unoptimized: true },
};

export default nextConfig;
