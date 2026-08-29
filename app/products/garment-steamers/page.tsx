import type { Metadata } from "next";
import ProductCategoryPage, { type CategoryPageConfig } from "@/components/ProductCategoryPage";
import { productsInCategory } from "@/lib/product-catalog";

export const metadata: Metadata = {
  title: "Garment Steamer Manufacturer & OEM Supplier | XINGYUE",
  description: "XINGYUE supplies handheld garment steamers for global brands, importers and distributors, with OEM and ODM support for branded clothing-care products.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/garment-steamers" },
};

const config: CategoryPageConfig = {
  category: "Garment Steamer",
  eyebrow: "Handheld clothing care collection",
  title: "Garment Steamer Manufacturer & OEM Supplier",
  intro: "XINGYUE supplies handheld garment steamers for brands, importers and distributors seeking practical clothing-care products. The verified collection includes ceramic and stainless-steel panel models for different product programs.",
  capabilityTitle: "Handheld steamer models for branded assortments",
  capability: "The collection ranges from compact portable steamers to higher-power handheld formats. Product pages show the currently documented features so sourcing teams can compare tanks, steam modes, panels and controls before requesting samples.",
  applicationsTitle: "Home appliance, beauty and apparel programs",
  applications: "Garment steamers can support home-appliance ranges, apparel-care retail, hospitality use and D2C brands that need a compact alternative for everyday wrinkle care.",
  customization: "OEM / ODM options include logo printing, custom colors, packaging design, soleplate or panel options, plug types and multi-language user manuals. The selected model and market requirements determine the final specification.",
  faqs: [
    { question: "Can you customize a garment steamer for our brand?", answer: "Yes. XINGYUE offers OEM / ODM customization, including logo printing, custom colors and packaging design for selected models." },
    { question: "Which garment steamer features can we compare?", answer: "The collection identifies documented features such as power, water-tank capacity, panel material, steam levels and auto power off where available." },
    { question: "Can I request a sample before an OEM order?", answer: "Contact XINGYUE with the target model and market requirements to confirm sample arrangements and the next sourcing steps." },
  ],
};

export default function GarmentSteamersPage() {
  return <ProductCategoryPage config={config} products={productsInCategory("Garment Steamer")} />;
}
