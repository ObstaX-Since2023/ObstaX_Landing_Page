import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

const routes = [
  '',
  '/about',
  '/product',
  '/product/pre-order',
  '/support',
  '/terms',
  '/privacy',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }))
}
