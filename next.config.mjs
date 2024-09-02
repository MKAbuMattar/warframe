import PWANextInit from 'next-pwa';
import runtimeCachingConfig from './runtime-caching.config.mjs';
import generateRobotsTxt from './src/scripts/generate-robots-txt.script.cjs';


/** @type {import('next').NextConfig} */
const NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
    compiler: {
    styledComponents: true,
  },
  webpack(config, { isServer }) {
    if (isServer) {
      generateRobotsTxt()
    }
    return config
  },
};


const PWANextConfig = PWANextInit({
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

export default PWANextConfig(NextConfig);