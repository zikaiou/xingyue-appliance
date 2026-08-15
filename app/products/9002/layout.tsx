export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "9002 Vacuum Garment Steamer",
    image: ["https://www.xingyue-appliance.com/images/products/9002.jpg"],
    description: "9002 vacuum garment steamer with 1500W power, 400ml detachable water tank and LED display. Professional vacuum steam care by XINGYUE manufacturer.",
    brand: { "@type": "Brand", name: "XINGYUE" },
    manufacturer: { "@type": "Organization", name: "Huizhou Xingyue Technology Co., Ltd." },
    category: "Vacuum Garment Steamer",
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