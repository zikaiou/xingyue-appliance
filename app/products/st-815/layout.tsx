import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ST-815 Garment Steamer | 1600W Handheld Steamer | XINGYUE",
  description: "ST-815 handheld garment steamer with 1600W powerful steam, 340ml tank and dry/steam modes. Professional garment care from XINGYUE.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/st-815" },
};

﻿export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ST-815 Garment Steamer",
    image: ["https://www.xingyue-appliance.com/images/products/st815/main.jpg"],
    description: "ST-815 handheld garment steamer with 1600W powerful steam, 340ml water tank and dry and steam modes. Professional garment care by XINGYUE manufacturer.",
    brand: { "@type": "Brand", name: "XINGYUE" },
    manufacturer: { "@type": "Organization", name: "Huizhou Xingyue Technology Co., Ltd." },
    category: "Garment Steamer",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.xingyue-appliance.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.xingyue-appliance.com/products" },
      { "@type": "ListItem", position: 3, name: "ST-815", item: "https://www.xingyue-appliance.com/products/st-815" }
    ],
  };
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "ST-815 Product Demo Video",
    description: "ST-815 Garment Steamer product demonstration by XINGYUE manufacturer.",
    thumbnailUrl: ["https://www.xingyue-appliance.com/images/products/st-815/main.jpg"],
    contentUrl: "https://www.xingyue-appliance.com/videos/st815.mp4",
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