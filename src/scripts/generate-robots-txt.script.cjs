const fs = require('fs');
const Logger = require('../util/Logger');

const {NEXT_PUBLIC_NODE_ENV} = process.env;

const {NEXT_PUBLIC_HOST} = process.env;

const NODE_ENV = NEXT_PUBLIC_NODE_ENV;
const HOST = NEXT_PUBLIC_HOST;

const crawlableRobotsTxt = `Sitemap: ${HOST}/api/sitemap.xml

# Block all crawlers for /api
User-agent: *
Disallow: /api/*

# Allow all crawlers
User-agent: *
Allow: /`;

const uncrawlableRobotsTxt = `# Block all crawlers for /api
User-agent: *
Disallow: /*`;

function generateRobotsTxt() {
  // Create a non-crawlable robots.txt in non-production environments
  const robotsTxt =
    NODE_ENV === 'production' ? crawlableRobotsTxt : uncrawlableRobotsTxt;

  // Create robots.txt file
  fs.writeFileSync('public/robots.txt', robotsTxt);

  Logger.info(
    `Generated a ${NODE_ENV === 'production' ? 'crawlable' : 'non-crawlable'} public/robots.txt`,
  );
}

module.exports = generateRobotsTxt;
