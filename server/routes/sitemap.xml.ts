import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://docs.efu.me',
  })

  for (const doc of docs) {
    // no dir file
    if (doc._path.endsWith('/_dir')) {
      continue
    }
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: doc._updatedAt,
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
