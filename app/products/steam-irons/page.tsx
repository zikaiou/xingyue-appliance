import type { Metadata } from "next";
import ProductCategoryPage, { type CategoryPageConfig } from "@/components/ProductCategoryPage";
import { productsInCategory } from "@/lib/product-catalog";

export const metadata: Metadata = {
  title: "Steam Iron Manufacturer & OEM Supplier | XINGYUE",
  description: "XINGYUE develops electric steam irons for global brands and importers, with documented power, tank and soleplate options for OEM and ODM programs.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/steam-irons" },
};

const config: CategoryPageConfig = {
  category: "Steam Iron",
  eyebrow: "Electric steam iron collection",
  title: "Steam Iron Manufacturer & OEM Supplier",
  intro: "XINGYUE develops electric steam irons for global brands and importers. This collection brings together the documented ST-S1001 to ST-S1004 models so buyers can compare power, water-tank capacity, soleplate and self-clean features.",
  capabilityTitle: "A documented range for steam iron sourcing",
  capability: "The four verified models provide different combinations of power and user features, from 2800W and 330ml formats to the 3000W ST-S1002 with a 420ml tank. Each product page provides the available model information for a more focused OEM discussion.",
  applicationsTitle: "Household appliance and private-label programs",
  applications: "The range is suited to importers, household-appliance brands, retailers and e-commerce teams planning electric ironing products for home and garment-care channels.",
  customization: "XINGYUE can discuss logo printing, custom colors, packaging, soleplate options, plug types and multi-language manuals for OEM / ODM projects, based on the selected model and target market.",
  faqs: [
    { question: "What steam iron models are currently listed?", answer: "The current collection lists ST-S1001, ST-S1002, ST-S1003 and ST-S1004. Each model links to its own product detail page." },
    { question: "Do the steam irons have the same power and tank capacity?", answer: "No. The documented range includes different combinations, including 2800W and 3000W models and tank capacities of 330ml and 420ml. See each product page for details." },
    { question: "Can the soleplate or packaging be discussed for OEM?", answer: "Yes. Soleplate options and packaging design are listed OEM / ODM customization topics; final availability is confirmed for the selected model." },
  ],
};

export default function SteamIronsPage() {
  return <ProductCategoryPage config={config} products={productsInCategory("Steam Iron")} />;
}
