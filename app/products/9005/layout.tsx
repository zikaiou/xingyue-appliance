export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "9005 Vacuum Garment Steamer",
    image: ["https://www.xingyue-appliance.com/images/products/9005.jpg"],
    description: "9005 vacuum garment steamer with 1500W power, 400ml detachable water tank, LED display and ceramic soleplate. Professional garment care by XINGYUE manufacturer.",
    brand: { "@type": "Brand", name: "XINGYUE" },
    manufacturer: { "@type": "Organization", name: "Huizhou Xingyue Technology Co., Ltd." },
    review: [{
      "@type": "Review",
      author: { "@type": "Person", "name": "Enguerran TOFFA" },
      reviewBody: "The cable is long enough, the steam is powerful. I am satisfied.",
      reviewRating: { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }],
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