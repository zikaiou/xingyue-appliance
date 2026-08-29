import type { Metadata } from "next";
import ProductCategoryPage, { type CategoryPageConfig } from "@/components/ProductCategoryPage";
import { productsInCategory } from "@/lib/product-catalog";

export const metadata: Metadata = {
  title: "Vacuum Garment Steamer Manufacturer | OEM Supplier | XINGYUE",
  description: "XINGYUE manufactures vacuum garment steamers for global brands, with documented 3-in-1 dry, steam and vacuum models for OEM and private-label programs.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/vacuum-garment-steamers" },
};

const config: CategoryPageConfig = {
  category: "Vacuum Garment Steamer",
  eyebrow: "Vacuum garment care collection",
  title: "Vacuum Garment Steamer Manufacturer",
  intro: "XINGYUE manufactures vacuum garment steamers for brands and importers looking for integrated garment-care appliances. The collection includes documented 3-in-1 dry, steam and vacuum functions alongside dedicated vacuum-steam models.",
  capabilityTitle: "Integrated dry, steam and vacuum formats",
  capability: "The verified models cover 1500W vacuum-steam formats and 3-in-1 designs. Product information includes documented tank, display, soleplate, ironing-head and suction features to support a more precise OEM conversation.",
  applicationsTitle: "Appliance brands, hospitality and garment-care channels",
  applications: "These products can support household-appliance brands, hospitality programs, professional garment-care ranges and retailers seeking a more integrated garment-care proposition.",
  customization: "OEM / ODM discussions can cover logo printing, custom colors, packaging design, plug types and multi-language user manuals. Model-specific requirements should be confirmed before samples or production planning.",
  faqs: [
    { question: "What does the 3-in-1 vacuum steamer function include?", answer: "The documented 9003 and 9004 models combine dry, steam and vacuum functions. Their individual product pages provide the model-specific details." },
    { question: "Which vacuum garment steamer models are listed?", answer: "The current collection lists 9002, 9003, 9004 and 9005, each with a crawlable link to its product detail page." },
    { question: "Can vacuum garment steamers be customized for a private label?", answer: "Yes. XINGYUE offers OEM / ODM support, including logo, color and packaging customization for selected products." },
  ],
};

export default function VacuumGarmentSteamersPage() {
  return <ProductCategoryPage config={config} products={productsInCategory("Vacuum Garment Steamer")} />;
}
