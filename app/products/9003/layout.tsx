import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "9003 Vacuum Garment Steamer | 3-in-1 Technology | XINGYUE",
  description: "9003 3-in-1 vacuum garment steamer with dry, steam and vacuum functions, dual-level suction up to 5kPa. Professional care from XINGYUE.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/9003" },
};

﻿export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "9003 Vacuum Garment Steamer",
    image: ["https://www.xingyue-appliance.com/images/products/9003.png"],
    description: "9003 3-in-1 vacuum garment steamer with dry, steam and vacuum functions, dual-level steam and suction up to 5kPa. Professional garment care by XINGYUE manufacturer.",
    brand: { "@type": "Brand", name: "XINGYUE" },
    manufacturer: { "@type": "Organization", name: "Huizhou Xingyue Technology Co., Ltd." },
    category: "Vacuum Garment Steamer",
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.xingyue-appliance.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.xingyue-appliance.com/products" },
      { "@type": "ListItem", position: 3, name: "Vacuum Garment Steamers", item: "https://www.xingyue-appliance.com/products/vacuum-garment-steamers" },
      { "@type": "ListItem", position: 4, name: "9003", item: "https://www.xingyue-appliance.com/products/9003" }
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