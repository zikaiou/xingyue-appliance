import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.xingyue-appliance.com";
  const products = [
    "st-718","st-717","st-588","st-812","st-8807","st-8808","st-817","st-200a",
    "st-815","6617","900a","6618",
    "st-s1001","st-s1002","st-s1003","st-s1004",
    "9002","9003","9004","9005",
  ];
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/factory`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/oem`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/travel-iron-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/oem-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/garment-steamer-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/vacuum-steamer-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/factory-verification-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/steam-iron-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/steamer-supplier-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/travel-iron-wholesale`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/vacuum-steamer-supplier`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...products.map((p) => ({
      url: `${base}/products/${p}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
