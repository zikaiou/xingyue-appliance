import V7Home from "@/components/V7Home";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are you a factory or a trading company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "XINGYUE is a direct manufacturer with a 35,000 m² production base in Huizhou, China. We specialize in travel irons, garment steamers, steam irons and vacuum garment steamers with 16+ years of export experience.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum order quantity (MOQ) for OEM orders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our MOQ varies by model, typically starting from 500-1,000 pieces for standard OEM orders. Please contact us with your target model and quantity for a tailored quotation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you customize the logo, color and packaging for our brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer full OEM/ODM customization including logo printing, custom colors, bespoke packaging design, soleplate options, plug types and multi-language user manuals.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical production lead time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard production lead time is 30-45 days after sample approval, depending on order quantity. Our production scheduling and 500+ skilled workers ensure on-time delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Do your products have certifications for export?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our products are certified with CE, RoHS and CB for European markets, with ETL available for North America. We provide current certificates for the specific models you source.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <V7Home />
    </>
  );
}
