export default function Layout({ children }: { children: React.ReactNode }) {
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