import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ST-812 Travel Iron | Lightweight Portable Iron | XINGYUE",
  description: "ST-812 lightweight travel iron with 160ml tank and powerful steam. Quick wrinkle removal for global travelers from XINGYUE.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/st-812" },
};

﻿export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ST-812 Travel Iron",
    image: ["https://www.xingyue-appliance.com/images/products/st812/main.jpg"],
    description: "ST-812 lightweight travel iron with ceramic soleplate, 160ml water tank and powerful steam. Portable garment care by XINGYUE manufacturer.",
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
      { "@type": "ListItem", position: 3, name: "ST-812", item: "https://www.xingyue-appliance.com/products/st-812" }
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