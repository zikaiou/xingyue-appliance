import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.xingyue-appliance.com";
  const products = [
    "st-718","st-717","st-588","st-812",
    "st-815","6617","900a","6618",
  ];
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/factory`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/oem`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...products.map((p) => ({
      url: `${base}/products/${p}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
