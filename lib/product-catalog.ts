export type ProductCategory = "Travel Iron" | "Garment Steamer" | "Steam Iron" | "Vacuum Garment Steamer";

export type CatalogProduct = {
  slug: string;
  model: string;
  name: string;
  category: ProductCategory;
  image: string;
  features: string[];
};

/** Shared, verified product catalog used by the SEO category pages. */
export const productCatalog: CatalogProduct[] = [
  { slug: "st-718", model: "ST-718", name: "Portable Travel Steam Iron", category: "Travel Iron", image: "/images/products/ST-718.jpg", features: ["1000W power", "140ml water tank", "Ceramic soleplate"] },
  { slug: "st-717", model: "ST-717", name: "Portable Travel Steam Iron", category: "Travel Iron", image: "/images/products/ST-717.jpg", features: ["1200W power", "Ceramic soleplate", "Portable design"] },
  { slug: "st-588", model: "ST-588", name: "Portable Travel Steam Iron", category: "Travel Iron", image: "/images/products/ST-588.png", features: ["Compact structure", "Easy-carry design", "Travel use"] },
  { slug: "st-812", model: "ST-812", name: "Portable Travel Steam Iron", category: "Travel Iron", image: "/images/products/ST-812.png", features: ["Lightweight design", "Quick wrinkle removal", "Portable garment care"] },
  { slug: "st-8807", model: "ST-8807", name: "Professional Travel Iron", category: "Travel Iron", image: "/images/products/ST-8807.jpg", features: ["Advanced steam system", "High-efficiency heating", "Professional results"] },
  { slug: "st-8808", model: "ST-8808", name: "Professional Travel Iron", category: "Travel Iron", image: "/images/products/ST-8808.png", features: ["Compact power design", "Steady steam flow", "Versatile ironing"] },
  { slug: "st-817", model: "ST-817", name: "Professional Travel Iron", category: "Travel Iron", image: "/images/products/ST-817.png", features: ["Digital control interface", "Enhanced steam output", "Premium fabric care"] },
  { slug: "st-200a", model: "ST-200A", name: "Professional Travel Iron", category: "Travel Iron", image: "/images/products/ST-200A.jpg", features: ["Ergonomic handle", "Multi-angle steaming", "Travel safety build"] },
  { slug: "st-815", model: "ST-815", name: "Handheld Garment Steamer", category: "Garment Steamer", image: "/images/products/ST-815.png", features: ["1800W power", "260ml water tank", "Vertical and horizontal steaming"] },
  { slug: "6617", model: "6617", name: "Handheld Garment Steamer", category: "Garment Steamer", image: "/images/products/6617.jpg", features: ["Ceramic steam panel", "3 steam levels", "Auto power off"] },
  { slug: "900a", model: "900A", name: "Compact Garment Steamer", category: "Garment Steamer", image: "/images/products/900A.png", features: ["Stainless steel panel", "20±5g/min continuous steam", "Compact portable design"] },
  { slug: "6618", model: "6618", name: "Compact Garment Steamer", category: "Garment Steamer", image: "/images/products/6618.jpg", features: ["Stainless steel panel", "3 steam modes", "Travel-friendly design"] },
  { slug: "st-s1001", model: "ST-S1001", name: "Steam Iron", category: "Steam Iron", image: "/images/products/ST-S1001.jpg", features: ["2800W power", "330ml water tank", "Auto shut-off"] },
  { slug: "st-s1002", model: "ST-S1002", name: "Steam Iron", category: "Steam Iron", image: "/images/products/ST-S1002.jpg", features: ["3000W power", "420ml water tank", "Auto shut-off"] },
  { slug: "st-s1003", model: "ST-S1003", name: "Steam Iron", category: "Steam Iron", image: "/images/products/ST-S1003.jpg", features: ["2800W power", "330ml water tank", "Ceramic / non-stick soleplate"] },
  { slug: "st-s1004", model: "ST-S1004", name: "Steam Iron", category: "Steam Iron", image: "/images/products/ST-S1004.jpg", features: ["2800W power", "330ml water tank", "Self-clean system"] },
  { slug: "9002", model: "9002", name: "Vacuum Garment Steamer", category: "Vacuum Garment Steamer", image: "/images/products/9002.jpg", features: ["1500W power", "400ml detachable tank", "LED display"] },
  { slug: "9003", model: "9003", name: "3-in-1 Vacuum Garment Steamer", category: "Vacuum Garment Steamer", image: "/images/products/9003.png", features: ["Dry, steam and vacuum", "1500W power", "Dual-level steam and suction"] },
  { slug: "9004", model: "9004", name: "3-in-1 Vacuum Garment Steamer", category: "Vacuum Garment Steamer", image: "/images/products/9004.jpg", features: ["Dry, steam and vacuum", "Rotatable ironing head", "1300W power"] },
  { slug: "9005", model: "9005", name: "Vacuum Garment Steamer", category: "Vacuum Garment Steamer", image: "/images/products/9005.jpg", features: ["1500W power", "400ml detachable tank", "LED display and ceramic soleplate"] },
];

export function productsInCategory(category: ProductCategory) {
  return productCatalog.filter((product) => product.category === category);
}
