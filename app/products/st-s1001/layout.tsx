export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ST-S1001 Steam Iron",
    image: ["https://www.xingyue-appliance.com/images/products/sts1001/main.jpg"],
    description: "ST-S1001 powerful steam iron with up to 2800W power, 330ml water tank and adjustable steam. Professional household ironing by XINGYUE manufacturer.",
    brand: { "@type": "Brand", name: "XINGYUE" },
    manufacturer: { "@type": "Organization", name: "Huizhou Xingyue Technology Co., Ltd." },
    category: "Steam Iron",
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