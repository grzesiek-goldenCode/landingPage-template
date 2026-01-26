import { MetadataRoute } from "next";

import { cities, services } from "@/content/pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://domena.pl";

  const urls = [];

  for (const city in cities) {
    for (const service in services) {
      urls.push({
        url: `${baseUrl}/${city}/${service}`,
        lastModified: new Date(),
      });
    }
  }
  return urls;
}
