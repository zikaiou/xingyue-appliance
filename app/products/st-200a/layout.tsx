import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ST-200A Travel Iron | Rotating Handle Iron | XINGYUE",
  description: "ST-200A portable garment iron with 180-degree rotating handle, 190ml tank and ceramic soleplate. Multi-angle steaming from XINGYUE.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/st-200a" },
};

﻿export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ST-200A Travel Iron",
    image: ["https://www.xingyue-appliance.com/images/products/st200a/main.jpg"],
    description: "ST-200A portable garment iron with 180 degree rotating handle, 190ml water tank and ceramic soleplate. Professional garment care by XINGYUE manufacturer.",
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
      { "@type": "ListItem", position: 4, name: "ST-200A", item: "https://www.xingyue-appliance.com/products/st-200a" }
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