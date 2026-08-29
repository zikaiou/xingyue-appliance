import type { Metadata } from "next";
import ProductCategoryPage, { type CategoryPageConfig } from "@/components/ProductCategoryPage";
import { productsInCategory } from "@/lib/product-catalog";

export const metadata: Metadata = {
  title: "Travel Iron Manufacturer & OEM Supplier | XINGYUE",
  description: "XINGYUE manufactures portable travel irons for global brands, importers and distributors, with OEM and ODM support for product, logo, color and packaging customization.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/travel-irons" },
};

const config: CategoryPageConfig = {
  category: "Travel Iron",
  eyebrow: "Portable garment care collection",
  title: "Travel Iron Manufacturer & OEM Supplier",
  intro: "XINGYUE manufactures portable travel irons for global brands, importers and distributors. The collection covers compact steam ironing solutions for travel retail, hospitality programs and private-label garment care lines.",
  capabilityTitle: "Portable formats for OEM travel iron programs",
  capability: "Our travel iron range includes compact and professional models with different heating, steam and handling profiles. Buyers can review the verified models below, then discuss logo, color and packaging requirements with the OEM / ODM team.",
  applicationsTitle: "Travel retail, hospitality and D2C brands",
  applications: "These models are suitable for buyers building portable garment-care assortments, hotel amenity programs, travel product ranges and branded e-commerce collections.",
  customization: "XINGYUE supports logo printing, custom colors, packaging design, plug types and multi-language user manuals as part of its OEM / ODM service. Requirements are confirmed model by model before sampling.",
  faqs: [
    { question: "Do you provide OEM and ODM travel irons?", answer: "Yes. XINGYUE provides OEM / ODM customization for its garment-care product range, including travel iron programs." },
    { question: "Can the travel iron logo and packaging be customized?", answer: "Yes. Logo printing, custom colors and packaging design are listed customization options. Final requirements are confirmed for the selected model." },
    { question: "How do I select a travel iron model?", answer: "Compare the verified model features on this page, then contact XINGYUE with your target market, quantity and customization requirements for model guidance." },
  ],
};

export default function TravelIronsPage() {
  return <ProductCategoryPage config={config} products={productsInCategory("Travel Iron")} />;
}
