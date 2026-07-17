import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeatureGrid from "@/components/FeatureGrid";
import ProductShowcase from "@/components/ProductShowcase";
import TechnologySection from "@/components/TechnologySection";
import OEMSection from "@/components/OEMSection";
import FactorySection from "@/components/FactorySection";
import FAQSection from "@/components/FAQSection";
import ContactBand from "@/components/ContactBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeatureGrid />
      <ProductShowcase />
      <TechnologySection />
      <OEMSection />
      <FactorySection />
      <FAQSection />
      <ContactBand />
    </>
  );
}
