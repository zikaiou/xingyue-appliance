import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "6618 Garment Steamer | Foldable 3-Mode Steamer | XINGYUE",
  description: "6618 foldable garment steamer with stainless steel panel, 150ml tank and 3 steam modes. Travel friendly design from XINGYUE.",
};

﻿export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "6618 Garment Steamer",
    image: ["https://www.xingyue-appliance.com/images/products/6618/main.jpg"],
    description: "6618 foldable garment steamer with stainless steel panel, 150ml water tank and 3 steam modes. Travel friendly design by XINGYUE manufacturer.",
    brand: { "@type": "Brand", name: "XINGYUE" },
    manufacturer: { "@type": "Organization", name: "Huizhou Xingyue Technology Co., Ltd." },
    review: [{
      "@type": "Review",
      author: { "@type": "Person", "name": "Enguerran TOFFA" },
      reviewBody: "The cable is long enough, the steam is powerful. I am satisfied.",
      reviewRating: { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }],
    category: "Garment Steamer",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.xingyue-appliance.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.xingyue-appliance.com/products" },
      { "@type": "ListItem", position: 3, name: "6618", item: "https://www.xingyue-appliance.com/products/6618" }
    ],
  };
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "6618 Product Demo Video",
    description: "6618 Garment Steamer product demonstration by XINGYUE manufacturer.",
    thumbnailUrl: ["https://www.xingyue-appliance.com/images/products/6618/main.jpg"],
    contentUrl: "https://www.xingyue-appliance.com/videos/6618.mp4",
    uploadDate: "2026-07-01",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      {children}
    </>
  );
}