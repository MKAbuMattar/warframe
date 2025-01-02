import nextPWAInit from 'next-pwa';
import runtimeCachingConfig from './runtime-caching.config.mjs';
import generateRobotsTxt from './src/scripts/generate-robots-txt.script.cjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, { isServer }) {
    if (isServer) {
      generateRobotsTxt()
    }
    return config
  },
};

const nextPWAConfig = nextPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching: runtimeCachingConfig,
  publicExcludes: [
    '!robots.txt',
    '!sitemap.xml',
    '!sitemap.*.xml',
    '!app-build-manifest.json',
  ],
  buildExcludes: ['app-build-manifest.json'],
});

export default nextPWAConfig(nextConfig);