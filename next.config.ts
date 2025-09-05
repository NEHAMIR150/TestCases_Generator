// next.config.ts

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  reactStrictMode: true,  // Enable strict mode (optional but recommended)
};

export default nextConfig;
