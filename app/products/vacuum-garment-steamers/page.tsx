import type { Metadata } from "next";
import ProductCategoryPage, { type CategoryPageConfig } from "@/components/ProductCategoryPage";
import { productsInCategory } from "@/lib/product-catalog";

export const metadata: Metadata = {
  title: "Vacuum Garment Steamer Manufacturer | OEM Factory",
  description: "Vacuum garment steamer manufacturer for OEM and private label programs. XINGYUE supplies documented suction, steam and integrated garment-care models.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/vacuum-garment-steamers" },
};

const config: CategoryPageConfig = {
  category: "Vacuum Garment Steamer",
  eyebrow: "Vacuum garment care collection",
  title: "Vacuum Garment Steamer Manufacturer for OEM",
  intro: "XINGYUE is a vacuum garment steamer manufacturer and OEM supplier for appliance brands, hospitality buyers, garment-care retailers and private-label importers. The collection includes documented integrated dry, steam and suction models for buyers evaluating a garment steamer with vacuum support. Product detail pages keep the model information specific, while this category page provides the broader sourcing path: compare the range, confirm the target market and discuss samples, branding and packaging with the manufacturer.",
  capabilityTitle: "Integrated dry, steam and vacuum formats",
  capability: "The verified models cover 1500W vacuum-steam formats and 3-in-1 designs. For an OEM vacuum garment steamer program, buyers can compare the documented tank, display, soleplate, ironing-head and suction features before discussing logo, color, packaging, plug configuration and multilingual manuals. XINGYUE supports model selection, product engineering, sample confirmation, performance testing, quality control and mass-production planning. Final requirements are confirmed for the selected model rather than generalized across the whole range.",
  applicationsTitle: "Appliance brands, hospitality and garment-care channels",
  applications: "These products can support household-appliance brands, hospitality programs, professional garment-care ranges and retailers seeking a more integrated garment-care proposition.",
  customization: "OEM / ODM discussions can cover logo printing, custom colors, packaging design, plug types and multi-language user manuals. Model-specific requirements should be confirmed before samples or production planning.",
  whySource: "XINGYUE gives appliance brands and garment-care importers a documented range of integrated suction and steam products, supported by product engineering, sample confirmation and quality-control discussions. The company operates a 35,000 m² manufacturing base with 500+ workers and supports export programs across more than 100 markets. MOQ and lead time are confirmed by model, with standard OEM guidance of 500–1,000 pcs and 30–45 days after sample approval.",
  resourceLinks: [
    { href: "/blog/vacuum-steamer-guide", label: "Vacuum steamer guide" },
    { href: "/blog/vacuum-steamer-supplier", label: "Vacuum steamer supplier guide" },
    { href: "/oem", label: "Garment care OEM service" },
  ],
  faqs: [
    { question: "What does the 3-in-1 vacuum steamer function include?", answer: "The documented 9003 and 9004 models combine dry, steam and vacuum functions. Their individual product pages provide the model-specific details." },
    { question: "Which vacuum garment steamer models are listed?", answer: "The current collection lists 9002, 9003, 9004 and 9005, each with a crawlable link to its product detail page." },
    { question: "What is the MOQ for OEM vacuum garment steamers?", answer: "The standard MOQ guidance is typically 500–1,000 pcs, with the final minimum confirmed for the selected model and configuration." },
    { question: "What is the production lead time?", answer: "Standard production lead time is 30–45 days after sample approval, depending on the chosen model, quantity and customization requirements." },
    { question: "Can vacuum garment steamers be customized for a private label?", answer: "Yes. XINGYUE offers OEM / ODM support, including logo, color and packaging customization for selected products." },
  ],
};

export default function VacuumGarmentSteamersPage() {
  return <ProductCategoryPage config={config} products={productsInCategory("Vacuum Garment Steamer")} />;
}
