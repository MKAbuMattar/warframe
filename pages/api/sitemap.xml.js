import { SitemapStream, streamToPromise } from 'sitemap'

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    })

    // List of pages
    const pages = [
      {
        slug: 'warframe',
      },
      {
        slug: 'weapons/primary',
      },
      {
        slug: 'weapons/secondary',
      },
      {
        slug: 'weapons/melee',
      },
      {
        slug: 'companion/pet',
      },
      {
        slug: 'companion/sentinel',
      },
      {
        slug: 'companion/sentinel/weapon',
      },
      {
        slug: 'archwing',
      },
      {
        slug: 'archwing/weapon/arch-gun',
      },
      {
        slug: 'archwing/weapon/arch-melee',
      },
      {
        slug: 'warframe/necramech',
      },
      {
        slug: 'warframe/mod',
      },
      {
        slug: 'warframe/arcane',
      },
      {
        slug: 'quest',
      },
      {
        slug: 'enemy',
      },
      {
        slug: 'miscellaneous',
      },
      {
        slug: 'resource',
      },
      {
        slug: 'gear',
      },
      {
        slug: 'glyph',
      },
      {
        slug: 'warframe-api',
      },
    ]

    // Create each URL row
    pages.map((page) => {
      smStream.write({
        url: `/${page.slug}`,
        changefreq: 'daily',
        priority: 0.9,
      })
    })

    // End sitemap stream
    smStream.end()

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString()

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    // Display output to user
    res.end(sitemapOutput)
  } catch (error) {
    res.send(JSON.stringify(error))
  }
}
