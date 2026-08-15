export default function ST718Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ST-718 Travel Iron",
    image: [
      "https://www.xingyue-appliance.com/images/products/st718/main.jpg",
      "https://www.xingyue-appliance.com/images/products/st718/detail1.jpg",
    ],
    description: "ST-718 compact travel iron with ceramic soleplate, 1000W power and 140ml water tank. Professional garment care by XINGYUE manufacturer.",
    brand: { "@type": "Brand", name: "XINGYUE" },
    manufacturer: { "@type": "Organization", name: "Huizhou Xingyue Technology Co., Ltd." },
    category: "Travel Iron",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {children}
    </>
  );
}
