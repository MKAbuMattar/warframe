const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const generateRobotsTxt = require('./scripts/generateRobotsTxt')

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
  webpack(config, { isServer }) {
    if (isServer) {
      generateRobotsTxt()
    }
    return config
  },
})
