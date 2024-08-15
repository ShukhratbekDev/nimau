import type { MetadataRoute } from 'next';

import { docs } from '@/app/source';
import { baseUrl } from '@/utils/metadata';

const url = (path: string): string => new URL(path, baseUrl).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url('/'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: url('/docs'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...docs.getPages().map<MetadataRoute.Sitemap[number]>((page) => ({
      url: url(page.url),
      lastModified: page.data.exports.lastModified ? new Date(page.data.exports.lastModified) : undefined,
      changeFrequency: 'weekly',
      priority: 0.5,
    })),
  ];
}
