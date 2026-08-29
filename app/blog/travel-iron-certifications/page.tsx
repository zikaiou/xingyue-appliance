import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/blog/travel-iron-certifications" },
  title: "Travel Iron Certifications: CE, RoHS, CB, ETL for Buyers | XINGYUE",
  description:
    "Which certifications do travel irons need for EU, US and other markets? CE, RoHS, CB and ETL explained for importers — and why certified models matter.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What certifications do travel irons need for the EU?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CE marking is mandatory for electrical appliances sold in the EU/EEA, alongside RoHS compliance for hazardous substances. CB certification supports multi-market recognition.",
      },
    },
    {
      "@type": "Question",
      name: "What certification do travel irons need for North America?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "North American markets require a recognized safety listing such as ETL or UL. ETL is available on XINGYUE models targeting the USA and Canada.",
      },
    },
    {
      "@type": "Question",
      name: "Can I receive certificate copies for my travel iron order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Send your target models and destination markets, and our export team will provide the current certificate copies for those models.",
      },
    },
  ],
};

const sections = [
  {
    title: "Why Certifications Decide Market Access",
    body: [
      "Certifications are not marketing badges — they are legal entry requirements. An EU-bound shipment without CE marking can be held at customs; a US retailer will not stock appliances without a recognized safety listing. For importers, the certification question comes before the price question.",
      "The four certifications that matter most for travel irons and garment care appliances: CE, RoHS, CB and ETL.",
    ],
  },
  {
    title: "CE — Mandatory for Europe",
    body: [
      "CE marking confirms a product meets EU safety, health and environmental protection requirements. It is the mandatory conformity mark for electrical appliances sold in the EU and EEA, covering electrical safety, EMC and applicable directives.",
      "Check that the certificate corresponds to your exact model and configuration — certificates are model-specific, not range-wide.",
    ],
  },
  {
    title: "RoHS and CB — Europe and Beyond",
    body: [
      "RoHS restricts hazardous substances (lead, mercury, cadmium and more) in electrical and electronic equipment, and is mandatory for EU imports. The CB scheme, meanwhile, is an international mutual-recognition system across 50+ countries — useful if you ship to multiple destinations and want to avoid repeat testing.",
    ],
  },
  {
    title: "ETL — North America",
    body: [
      "ETL listing from Intertek demonstrates compliance with North American safety standards and is recognized in the USA and Canada. It is available on XINGYUE models targeting those markets.",
      "If you plan a North American line, confirm ETL (or equivalent) in your specification early — retrofitting certification after production is expensive.",
    ],
  },
  {
    title: "How to Verify a Supplier's Certifications",
    body: [
      "Ask for the certificate copies matched to your exact model numbers, and check the issuing laboratory and validity dates. Genuine factories provide certificates freely — it is part of the sales file, not a secret.",
      "At XINGYUE, certificates for CE, RoHS and CB are available per model for European markets, with ETL for North America. Request the current copies with your quotation.",
    ],
  },
];

export default function TravelIronCertifications() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
          <ArrowLeft size={16} /> Back to Guide
        </Link>
      </div>

      <header className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
          <span>August 2026</span>
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Compliance Guide</span>
          <span>6 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Travel Iron Certifications: What Buyers Need to Know
        </h1>
        <p className="mt-4 text-white/55">
          CE, RoHS, CB and ETL — which certificates your travel iron needs, market by market, and how to verify them.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-718.jpg" alt="Travel iron certifications CE RoHS CB ETL for buyers - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Before comparing prices, compare certificates. This guide explains the four key certifications for travel irons and how to verify them with any supplier.
        </p>

        {sections.map((s, idx) => (
          <section key={idx} className="mb-10">
            <h2 className="text-xl font-bold mb-4">{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="text-white/65 leading-relaxed mb-4">{p}</p>
            ))}
          </section>
        ))}

        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-3">Request Certificates with Your Quote</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Tell us your target models and destination markets — we&apos;ll provide the current CE, RoHS, CB or ETL certificate copies alongside your quotation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Request Certificates <ArrowRight size={15} />
            </Link>
            <Link href="/certifications" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Our Certifications Page
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
