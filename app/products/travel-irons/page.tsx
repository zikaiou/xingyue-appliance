import type { Metadata } from "next";
import ProductCategoryPage, { type CategoryPageConfig } from "@/components/ProductCategoryPage";
import { productsInCategory } from "@/lib/product-catalog";

export const metadata: Metadata = {
  title: "Travel Iron Manufacturer | OEM & Private Label",
  description: "Travel iron manufacturer for OEM, private label and wholesale programs. XINGYUE supports portable models, branding, packaging and market-specific configurations.",
  alternates: { canonical: "https://www.xingyue-appliance.com/products/travel-irons" },
};

const config: CategoryPageConfig = {
  category: "Travel Iron",
  eyebrow: "Portable garment care collection",
  title: "Travel Iron Manufacturer for OEM & Private Label",
  intro: "XINGYUE is a travel iron manufacturer and OEM supplier for brands, importers, distributors and private-label retailers. The range covers portable travel steam irons for travel retail, hospitality, corporate gifting and direct-to-consumer programs. Buyers can compare documented models, select a suitable platform and then confirm the target market, voltage, plug and packaging requirements with the team. OEM and ODM support covers branding, color and packaging customization, while the existing product platform helps sourcing teams move from model selection to samples and production planning without creating a thin, one-off product page.",
  capabilityTitle: "Portable formats for OEM travel iron programs",
  capability: "Our travel iron range includes compact and professional models with different heating, steam and handling profiles. For an OEM travel iron or private-label program, buyers can review the verified models below, identify the product type that fits their market, and discuss logo printing, color options, packaging design, plug configuration and user-manual requirements. XINGYUE can support the path from product selection and prototype confirmation through testing, quality control and mass production. Requirements are confirmed model by model before sampling so the final configuration remains tied to the selected product and market.",
  applicationsTitle: "Travel retail, hospitality and D2C brands",
  applications: "These models are suitable for buyers building portable garment-care assortments, hotel amenity programs, travel product ranges and branded e-commerce collections.",
  customization: "XINGYUE supports logo printing, custom colors, packaging design, plug types and multi-language user manuals as part of its OEM / ODM service. Requirements are confirmed model by model before sampling.",
  whySource: "XINGYUE combines a 35,000 m² manufacturing base with 500+ workers and more than 16 years of garment-care manufacturing experience. For B2B buyers, the workflow connects model selection, sample confirmation, branding, packaging and mass production. MOQ typically starts at 500–1,000 pcs, while standard production lead time is 30–45 days after sample approval, subject to the selected model and requirements.",
  resourceLinks: [
    { href: "/blog/travel-iron-wholesale", label: "Travel iron wholesale guide" },
    { href: "/blog/travel-iron-guide", label: "Travel iron sourcing guide" },
    { href: "/oem", label: "OEM / ODM manufacturing" },
  ],
  faqs: [
    { question: "Do you provide OEM and ODM travel irons?", answer: "Yes. XINGYUE provides OEM / ODM customization for its garment-care product range, including travel iron programs." },
    { question: "Can the travel iron logo and packaging be customized?", answer: "Yes. Logo printing, custom colors and packaging design are listed customization options. Final requirements are confirmed for the selected model." },
    { question: "What is the typical MOQ for OEM travel irons?", answer: "The standard MOQ typically starts at 500–1,000 pcs, with the exact minimum confirmed for the selected model and configuration." },
    { question: "What is the travel iron production lead time?", answer: "Standard production lead time is 30–45 days after sample approval, depending on the model, order quantity and customization requirements." },
    { question: "How do I select a travel iron model?", answer: "Compare the verified model features on this page, then contact XINGYUE with your target market, quantity and customization requirements for model guidance." },
  ],
};

export default function TravelIronsPage() {
  return <ProductCategoryPage config={config} products={productsInCategory("Travel Iron")} />;
}
