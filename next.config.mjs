import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}
