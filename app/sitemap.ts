import type { MetadataRoute } from "next";

const siteUrl = "https://asahi-kurosu-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/works/mykitchen`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/works/mogumogu`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
