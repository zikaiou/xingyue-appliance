import type { Metadata } from "next";
import ProductCategoryPage, { type CategoryPageConfig } from "@/components/ProductCategoryPage";
import { productsInCategory } from "@/lib/product-catalog";

export const metadata: Metadata = {
  title: "Steam Iron Manufacturer | OEM & Wholesale Supplier",
  description: "Steam iron manufacturer for OEM, private label and wholesale sourcing. XINGYUE provides documented models for household-appliance and retail programs.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/steam-irons" },
};

const config: CategoryPageConfig = {
  category: "Steam Iron",
  eyebrow: "Electric steam iron collection",
  title: "Steam Iron Manufacturer & OEM Supplier",
  intro: "XINGYUE is a steam iron manufacturer and OEM supplier for household-appliance brands, importers, retailers and private-label teams. This collection brings together the documented ST-S1001 to ST-S1004 models so buyers can compare power, water-tank capacity, soleplate and self-clean features before selecting a product platform. The range supports steam iron wholesale and custom manufacturing discussions without turning each model into a separate generic manufacturer page. Buyers can move from the product range to OEM consultation, sample confirmation and market-specific configuration.",
  capabilityTitle: "A documented range for steam iron sourcing",
  capability: "The four verified models provide different combinations of power and user features, from 2800W and 330ml formats to the 3000W ST-S1002 with a 420ml tank. For OEM steam iron and private-label programs, sourcing teams can compare the model pages, then discuss logo, color, packaging, soleplate options, plug types and multilingual manuals. XINGYUE supports product engineering, sample confirmation, quality control and mass production planning based on the selected model and target market.",
  applicationsTitle: "Household appliance and private-label programs",
  applications: "The range is suited to importers, household-appliance brands, retailers and e-commerce teams planning electric ironing products for home and garment-care channels.",
  customization: "XINGYUE can discuss logo printing, custom colors, packaging, soleplate options, plug types and multi-language manuals for OEM / ODM projects, based on the selected model and target market.",
  whySource: "The ST-S1001 to ST-S1004 range gives importers and private-label appliance brands a documented starting point for product comparison. XINGYUE combines model selection with sample confirmation, packaging and branding discussions, quality control and mass production. MOQ typically starts at 500–1,000 pcs, and standard production lead time is 30–45 days after sample approval.",
  resourceLinks: [
    { href: "/blog/steam-iron-guide", label: "Steam iron sourcing guide" },
    { href: "/blog/steam-iron-features", label: "Steam iron feature guide" },
    { href: "/oem", label: "OEM / ODM manufacturing" },
  ],
  faqs: [
    { question: "What steam iron models are currently listed?", answer: "The current collection lists ST-S1001, ST-S1002, ST-S1003 and ST-S1004. Each model links to its own product detail page." },
    { question: "Do the steam irons have the same power and tank capacity?", answer: "No. The documented range includes different combinations, including 2800W and 3000W models and tank capacities of 330ml and 420ml. See each product page for details." },
    { question: "What is the MOQ for OEM steam irons?", answer: "The standard MOQ typically starts at 500–1,000 pcs, with the exact minimum confirmed for the selected model and specification." },
    { question: "What is the steam iron production lead time?", answer: "Standard production lead time is 30–45 days after sample approval, depending on order quantity and customization requirements." },
    { question: "Can the soleplate or packaging be discussed for OEM?", answer: "Yes. Soleplate options and packaging design are listed OEM / ODM customization topics; final availability is confirmed for the selected model." },
  ],
};

export default function SteamIronsPage() {
  return <ProductCategoryPage config={config} products={productsInCategory("Steam Iron")} />;
}
