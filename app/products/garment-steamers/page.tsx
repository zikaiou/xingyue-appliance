import type { Metadata } from "next";
import ProductCategoryPage, { type CategoryPageConfig } from "@/components/ProductCategoryPage";
import { productsInCategory } from "@/lib/product-catalog";

export const metadata: Metadata = {
  title: "Garment Steamer Manufacturer | OEM/ODM Factory",
  description: "Garment steamer manufacturer for OEM, ODM, private label and wholesale programs. XINGYUE supports handheld models, branding, packaging and market configurations.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/garment-steamers" },
};

const config: CategoryPageConfig = {
  category: "Garment Steamer",
  eyebrow: "Handheld clothing care collection",
  title: "Garment Steamer Manufacturer for OEM & ODM",
  intro: "XINGYUE is a garment steamer manufacturer and OEM/ODM supplier for home-appliance brands, apparel-care retailers, hospitality buyers and private-label distributors. The verified collection includes handheld garment steamers for portable clothing care, with model pages that let sourcing teams compare documented tanks, panels, steam modes and controls. Buyers can use the range as a starting point for a branded garment steamer line, then confirm the target market, plug configuration, packaging and sample requirements with the factory team.",
  capabilityTitle: "Handheld steamer models for branded assortments",
  capability: "The collection ranges from compact portable steamers to higher-power handheld formats. For an OEM garment steamer program, buyers can compare the existing models first and then discuss logo printing, custom colors, packaging design, panel options, plug types and multilingual manuals. XINGYUE supports product selection, prototype or sample confirmation, testing, quality control and mass production planning. The final specification remains tied to the selected model and the buyer's target market, avoiding unsupported one-size-fits-all claims.",
  applicationsTitle: "Home appliance, beauty and apparel programs",
  applications: "Garment steamers can support home-appliance ranges, apparel-care retail, hospitality use and D2C brands that need a compact alternative for everyday wrinkle care.",
  customization: "OEM / ODM options include logo printing, custom colors, packaging design, soleplate or panel options, plug types and multi-language user manuals. The selected model and market requirements determine the final specification.",
  whySource: "XINGYUE supports handheld garment steamer sourcing from a verified product range through sampling, branding and production planning. Its 35,000 m² manufacturing base and 500+ workers support programs for home-appliance, apparel and private-label buyers. MOQ typically starts at 500–1,000 pcs, and standard production lead time is 30–45 days after sample approval, subject to the selected configuration.",
  resourceLinks: [
    { href: "/blog/garment-steamer-guide", label: "Garment steamer sourcing guide" },
    { href: "/blog/garment-steamer-lead-time", label: "Production lead-time guide" },
    { href: "/oem", label: "Garment care OEM service" },
  ],
  faqs: [
    { question: "Can you customize a garment steamer for our brand?", answer: "Yes. XINGYUE offers OEM / ODM customization, including logo printing, custom colors and packaging design for selected models." },
    { question: "Which garment steamer features can we compare?", answer: "The collection identifies documented features such as power, water-tank capacity, panel material, steam levels and auto power off where available." },
    { question: "What is the MOQ for OEM garment steamers?", answer: "The standard MOQ typically starts at 500–1,000 pcs. Confirm the exact minimum for the selected model and market configuration." },
    { question: "What is the garment steamer production lead time?", answer: "Standard production lead time is 30–45 days after sample approval, depending on order quantity and customization requirements." },
    { question: "Can I request a sample before an OEM order?", answer: "Contact XINGYUE with the target model and market requirements to confirm sample arrangements and the next sourcing steps." },
  ],
};

export default function GarmentSteamersPage() {
  return <ProductCategoryPage config={config} products={productsInCategory("Garment Steamer")} />;
}
