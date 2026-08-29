import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "900A Garment Steamer | Stainless Steel Panel | XINGYUE",
  description: "900A compact garment steamer with stainless steel panel, 200ml tank and 3 steam gears. Portable steam care from XINGYUE.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/900a" },
};

﻿export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "900A Garment Steamer",
    image: ["https://www.xingyue-appliance.com/images/products/900a/main.jpg"],
    description: "900A compact garment steamer with stainless steel panel, 200ml water tank and 3 steam gears. Professional garment care by XINGYUE manufacturer.",
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
      { "@type": "ListItem", position: 3, name: "900A", item: "https://www.xingyue-appliance.com/products/900a" }
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