import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Cloudflare Pages serves these files directly; no Next.js image server exists.
  images: { unoptimized: true },
};

export default nextConfig;
