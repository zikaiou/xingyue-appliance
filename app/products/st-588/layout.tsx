import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ST-588 Travel Iron | Dry & Steam Function | XINGYUE",
  description: "ST-588 compact travel iron with dry and steam function, 1200W power and 140ml water tank. Daily travel solution from XINGYUE.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/st-588" },
};

﻿export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ST-588 Travel Iron",
    image: ["https://www.xingyue-appliance.com/images/products/st588/main.jpg"],
    description: "ST-588 travel iron with dry and steam function, ceramic soleplate and 140ml water tank. Compact design by XINGYUE manufacturer.",
    brand: { "@type": "Brand", name: "XINGYUE" },
    manufacturer: { "@type": "Organization", name: "Huizhou Xingyue Technology Co., Ltd." },
    category: "Travel Iron",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.xingyue-appliance.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.xingyue-appliance.com/products" },
      { "@type": "ListItem", position: 3, name: "Travel Irons", item: "https://www.xingyue-appliance.com/products/travel-irons" },
      { "@type": "ListItem", position: 4, name: "ST-588", item: "https://www.xingyue-appliance.com/products/st-588" }
    ],
  };
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "ST-588 Product Demo Video",
    description: "ST-588 Travel Iron product demonstration by XINGYUE manufacturer.",
    thumbnailUrl: ["https://www.xingyue-appliance.com/images/products/st-588/main.jpg"],
    contentUrl: "https://www.xingyue-appliance.com/videos/st588.mp4",
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