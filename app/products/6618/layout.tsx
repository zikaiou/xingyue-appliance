export default function Layout({ children }: { children: React.ReactNode }) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "6618 Garment Steamer",
    image: ["https://www.xingyue-appliance.com/images/products/6618/main.jpg"],
    description: "6618 foldable garment steamer with stainless steel panel, 150ml water tank and 3 steam modes. Travel friendly design by XINGYUE manufacturer.",
    brand: { "@type": "Brand", name: "XINGYUE" },
    manufacturer: { "@type": "Organization", name: "Huizhou Xingyue Technology Co., Ltd." },
    review: [{
      "@type": "Review",
      author: { "@type": "Person", "name": "Enguerran TOFFA" },
      reviewBody: "The cable is long enough, the steam is powerful. I am satisfied.",
      reviewRating: { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }],
    category: "Garment Steamer",
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