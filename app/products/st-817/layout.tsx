import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ST-817 Travel Iron | LCD Display & Sterilization | XINGYUE",
  description: "ST-817 travel iron with digital LCD display, 4-range fabric control and steam sterilization. Premium fabric care from XINGYUE.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/st-817" },
};

﻿export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ST-817 Travel Iron",
    image: ["https://www.xingyue-appliance.com/images/products/st817/main.png"],
    description: "ST-817 travel iron with digital LCD display, 4-range fabric control and steam sterilization. Professional garment care by XINGYUE manufacturer.",
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
      { "@type": "ListItem", position: 3, name: "ST-817", item: "https://www.xingyue-appliance.com/products/st-817" }
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