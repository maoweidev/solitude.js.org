import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://solitude.js.org',
  })

  for (const doc of docs) {
    // no dir file
    if (doc._path.endsWith('/_dir')) {
      continue
    }
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly',
      priority: 0.8,
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
