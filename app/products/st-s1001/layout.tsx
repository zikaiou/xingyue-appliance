import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ST-S1001 Steam Iron | 2800W Powerful | XINGYUE",
  description: "ST-S1001 powerful steam iron with up to 2800W, 330ml water tank and adjustable steam. Professional household ironing from XINGYUE.",
};

﻿export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ST-S1001 Steam Iron",
    image: ["https://www.xingyue-appliance.com/images/products/sts1001/main.jpg"],
    description: "ST-S1001 powerful steam iron with up to 2800W power, 330ml water tank and adjustable steam. Professional household ironing by XINGYUE manufacturer.",
    brand: { "@type": "Brand", name: "XINGYUE" },
    manufacturer: { "@type": "Organization", name: "Huizhou Xingyue Technology Co., Ltd." },
    review: [{
      "@type": "Review",
      author: { "@type": "Person", "name": "Sergio Lopes" },
      reviewBody: "I thought it was sensationalist advertising, but it's not.",
      reviewRating: { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }],
    category: "Steam Iron",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.xingyue-appliance.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.xingyue-appliance.com/products" },
      { "@type": "ListItem", position: 3, name: "ST-S1001", item: "https://www.xingyue-appliance.com/products/st-s1001" }
    ],
  };
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "ST-S1001 Product Demo Video",
    description: "ST-S1001 Steam Iron product demonstration by XINGYUE manufacturer.",
    thumbnailUrl: ["https://www.xingyue-appliance.com/images/products/st-s1001/main.jpg"],
    contentUrl: "https://www.xingyue-appliance.com/videos/sts1001.mp4",
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