import { MetadataRoute } from 'next'

const baseUrl = 'https://km-designs.pl';

const staticPaths = [
  '',
  '/websites',
  '/case-studies',
  '/contact',
  '/privacy-policy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
