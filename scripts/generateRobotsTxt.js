require('dotenv').config()
const fs = require('fs')
const Logger = require('../util/Logger')

const crawlableRobotsTxt = `Sitemap: https://warframe-info.vercel.app/api/pages-sitemap

# Block all crawlers for /accounts
User-agent: *
Disallow: /api/*

# Allow all crawlers
User-agent: *
Allow: /`

const uncrawlableRobotsTxt = `Sitemap: https://warframe-info.vercel.app/api/pages-sitemap

# Block all crawlers for /accounts
User-agent: *
Disallow: /api/*

# Allow all crawlers
User-agent: *
Allow: /`

function generateRobotsTxt() {
  // Create a non-crawlable robots.txt in non-production environments
  const robotsTxt =
    process.env.NODE_ENV === 'production' ? crawlableRobotsTxt : uncrawlableRobotsTxt

  // Create robots.txt file
  fs.writeFileSync('public/robots.txt', robotsTxt)

  Logger.info(
    `Generated a ${
      process.env.NODE_ENV === 'production' ? 'crawlable' : 'non-crawlable'
    } public/robots.txt`,
  )
}

module.exports = generateRobotsTxt
