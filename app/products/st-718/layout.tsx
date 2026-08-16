import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ST-718 Travel Iron | Compact Ceramic Soleplate | XINGYUE",
  description: "ST-718 compact travel iron with ceramic soleplate, 1000W power and 140ml water tank. Professional garment care from XINGYUE manufacturer.",
};

﻿export default function ST718Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ST-718 Travel Iron",
    image: [
      "https://www.xingyue-appliance.com/images/products/st718/main.jpg",
      "https://www.xingyue-appliance.com/images/products/st718/detail1.jpg",
    ],
    description: "ST-718 compact travel iron with ceramic soleplate, 1000W power and 140ml water tank. Professional garment care by XINGYUE manufacturer.",
    brand: { "@type": "Brand", name: "XINGYUE" },
    manufacturer: { "@type": "Organization", name: "Huizhou Xingyue Technology Co., Ltd." },
    review: [{
      "@type": "Review",
      author: { "@type": "Person", "name": "Sergio Lopes" },
      reviewBody: "I thought it was sensationalist advertising, but it's not.",
      reviewRating: { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }],
    category: "Travel Iron",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.xingyue-appliance.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.xingyue-appliance.com/products" },
      { "@type": "ListItem", position: 3, name: "ST-718", item: "https://www.xingyue-appliance.com/products/st-718" }
    ],
  };
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "ST-718 Product Demo Video",
    description: "ST-718 Travel Iron product demonstration by XINGYUE manufacturer.",
    thumbnailUrl: ["https://www.xingyue-appliance.com/images/products/st-718/main.jpg"],
    contentUrl: "https://www.xingyue-appliance.com/videos/st718.mp4",
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
