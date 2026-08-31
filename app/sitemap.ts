import type { MetadataRoute } from "next";
import { productCatalog } from "@/lib/product-catalog";

const base = "https://www.xingyue-appliance.com";
const page = (path: string, changeFrequency: "weekly" | "monthly", priority: number): MetadataRoute.Sitemap[number] => ({
  url: `${base}${path}`,
  lastModified: new Date(),
  changeFrequency,
  priority,
});

const blogSlugs = [
  "how-to-choose-garment-steamer-manufacturer", "how-to-choose-travel-iron-manufacturer", "garment-steamer-oem-process", "vacuum-garment-steamer-manufacturer-guide",
  "travel-iron-guide", "oem-guide", "garment-steamer-guide", "vacuum-steamer-guide", "factory-verification-guide", "steam-iron-guide", "steamer-supplier-guide", "travel-iron-wholesale", "vacuum-steamer-supplier", "steamer-vs-iron", "private-label-guide", "travel-iron-moq", "travel-iron-cost", "travel-iron-voltage", "hotel-steamer-vs-iron", "garment-steamer-import-tariffs", "travel-iron-certifications", "garment-steamer-lead-time", "travel-iron-soleplate", "lower-moq-china-factory", "vacuum-steamer-wholesale", "travel-iron-vs-steam-iron", "garment-steamer-wattage", "oem-partner-checklist", "travel-iron-tank-capacity", "steam-iron-features", "steamer-accessories", "factory-vs-trading-company", "travel-iron-packaging", "steam-iron-anti-calc", "garment-care-market-trends",
];

const industrySlugs = [
  "hotel-hospitality-laundry", "dry-cleaning-services", "travel-retail", "home-appliance-brands", "d2c-ecommerce-brands", "corporate-gifting", "beauty-personal-care", "apparel-textile",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    page("/", "weekly", 1),
    page("/products", "weekly", 0.9),
    page("/products/travel-irons", "monthly", 0.85),
    page("/products/garment-steamers", "monthly", 0.85),
    page("/products/steam-irons", "monthly", 0.85),
    page("/products/vacuum-garment-steamers", "monthly", 0.85),
    page("/factory", "monthly", 0.8),
    page("/oem", "monthly", 0.8),
    page("/about", "monthly", 0.7),
    page("/contact", "monthly", 0.7),
    page("/blog", "weekly", 0.8),
    page("/case-studies", "monthly", 0.7),
    page("/certifications", "monthly", 0.7),
    page("/wholesale-travel-irons", "monthly", 0.8),
    page("/garment-steamer-manufacturer", "monthly", 0.8),
    page("/steam-iron-factory", "monthly", 0.8),
    page("/vacuum-garment-steamer-supplier", "monthly", 0.8),
    page("/guides/moq-guide", "monthly", 0.7),
    page("/guides/price-guide", "monthly", 0.7),
    page("/guides/size-guide", "monthly", 0.7),
    ...blogSlugs.map((slug) => page(`/blog/${slug}`, "monthly", 0.7)),
    ...industrySlugs.map((slug) => page(`/industries/${slug}`, "monthly", 0.7)),
    ...productCatalog.map((product) => page(`/products/${product.slug}`, "monthly", 0.7)),
  ];
}
