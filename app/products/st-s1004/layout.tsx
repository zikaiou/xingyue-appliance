import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ST-S1004 Steam Iron | Self-Clean System | XINGYUE",
  description: "ST-S1004 self-clean steam iron with 2800W power, 330ml tank and anti-calc system. Easy maintenance from XINGYUE.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/st-s1004" },
};

﻿export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ST-S1004 Steam Iron",
    image: ["https://www.xingyue-appliance.com/images/products/sts1004/main.jpg"],
    description: "ST-S1004 self-clean steam iron with 2800W power, 330ml water tank and anti-calc system. Professional garment care by XINGYUE manufacturer.",
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
      { "@type": "ListItem", position: 4, name: "ST-S1004", item: "https://www.xingyue-appliance.com/products/st-s1004" }
    ],
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
      {children}
    </>
  );
}