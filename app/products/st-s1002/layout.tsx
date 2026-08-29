import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ST-S1002 Steam Iron | 3000W Ultra Power | XINGYUE",
  description: "ST-S1002 ultra powerful 3000W steam iron with 420ml large water tank and auto shut-off. Premium garment care from XINGYUE.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/st-s1002" },
};

﻿export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ST-S1002 Steam Iron",
    image: ["https://www.xingyue-appliance.com/images/products/sts1002/main.jpg"],
    description: "ST-S1002 ultra powerful 3000W steam iron with 420ml large water tank and auto shut-off. Premium garment care by XINGYUE manufacturer.",
    brand: { "@type": "Brand", name: "XINGYUE" },
    manufacturer: { "@type": "Organization", name: "Huizhou Xingyue Technology Co., Ltd." },
    category: "Steam Iron",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.xingyue-appliance.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.xingyue-appliance.com/products" },
      { "@type": "ListItem", position: 3, name: "Steam Irons", item: "https://www.xingyue-appliance.com/products/steam-irons" },
      { "@type": "ListItem", position: 4, name: "ST-S1002", item: "https://www.xingyue-appliance.com/products/st-s1002" }
    ],
  };
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "ST-S1002 Product Demo Video",
    description: "ST-S1002 Steam Iron product demonstration by XINGYUE manufacturer.",
    thumbnailUrl: ["https://www.xingyue-appliance.com/images/products/st-s1002/main.jpg"],
    contentUrl: "https://www.xingyue-appliance.com/videos/sts1002.mp4",
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