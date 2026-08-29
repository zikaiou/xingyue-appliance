import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ST-S1003 Steam Iron | Ceramic Soleplate | XINGYUE",
  description: "ST-S1003 steam iron with 2800W power, 330ml tank and ceramic/non-stick soleplate options. Professional ironing from XINGYUE.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/st-s1003" },
};

﻿export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ST-S1003 Steam Iron",
    image: ["https://www.xingyue-appliance.com/images/products/sts1003/main.jpg"],
    description: "ST-S1003 steam iron with 2800W power, 330ml water tank and ceramic non-stick soleplate options. Professional garment care by XINGYUE manufacturer.",
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
      { "@type": "ListItem", position: 4, name: "ST-S1003", item: "https://www.xingyue-appliance.com/products/st-s1003" }
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