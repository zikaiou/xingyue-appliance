import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/blog/travel-iron-cost" },
  title: "How Much Does a Travel Iron Cost? Wholesale Price Breakdown | XINGYUE",
  description:
    "What determines travel iron wholesale prices: materials, certifications, customization, quantity and logistics. Learn the cost structure so you can compare factory quotes confidently.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why don't travel iron manufacturers publish prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B2B pricing depends on model, configuration, quantity, certification and destination. Suppliers quote per specification so the price reflects exactly what you order.",
      },
    },
    {
      "@type": "Question",
      name: "What should I include in a travel iron price request?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Target model or product type, quantity, destination market, voltage/plug requirement, customization needs (logo, colors, packaging) and any certification requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Why is factory-direct cheaper than a trading company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trading companies add margins on top of the factory price. Factory-direct sourcing removes the middleman markup, which is why XINGYUE provides itemized factory-direct quotations.",
      },
    },
  ],
};

const sections = [
  {
    title: "The Cost Structure Behind Every Travel Iron",
    body: [
      "A travel iron's factory price is built from four main blocks: materials and structure (soleplate, water tank, heating element, body), certification and compliance, customization, and quantity-driven production efficiency. Each block moves the final number independently.",
      "The soleplate is the most visible cost driver — ceramic, stainless steel and aluminum differ in material cost and performance. Power configuration matters too: a standard 1000W travel iron and a higher-power model carry different component costs.",
    ],
  },
  {
    title: "Certification Adds Compliance Cost",
    body: [
      "CE, RoHS and CB marking for European markets, and ETL for North America, add testing and marking costs. Certified models are typically slightly more expensive but are required for EU and US market access — so they are not optional savings.",
      "When comparing quotes, always confirm which certifications are included. A lower price that excludes required certification will cost more by the time you add it.",
    ],
  },
  {
    title: "Customization Moves the Price",
    body: [
      "Custom colors, logo printing, bespoke packaging, multi-language manuals and special plug configurations all add incremental cost compared to standard configurations. OEM buyers should expect a modest premium over blank or standard-branded units.",
      "The most cost-efficient path: start with an existing model in standard configuration, validate it in your market, then add customization as volumes grow.",
    ],
  },
  {
    title: "Quantity and Logistics Determine Landed Cost",
    body: [
      "Larger orders unlock better per-unit pricing through production efficiency — this is the price ladder every serious supplier quotes across quantities like 1,000 / 5,000 / 10,000 units.",
      "Shipping mode affects landed cost significantly: air express (3–5 days) costs more per unit than sea freight (18–25 days). Quotes are usually FOB or CIF/CFR — confirm the incoterm so you compare like-for-like.",
      "Travel irons are compact, so container planning matters: carton size and quantity per carton directly affect freight per unit. Ask your supplier for the loading calculation sheet.",
    ],
  },
  {
    title: "How to Request a Price You Can Trust",
    body: [
      "Send a complete brief: model, quantity, destination market, voltage and plug, customization needs and certification requirements. The more complete the brief, the more accurate the quote.",
      "Request the price ladder across quantities, not a single number, and confirm what is included (product, standard packaging, export documentation) and what is excluded (customs duties, inland freight).",
      "Read our price guide for the full comparison framework — it explains how to evaluate factory-direct quotes fairly.",
    ],
  },
];

export default function TravelIronCost() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Buyer Guide</span>
          <span>6 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          How Much Does a Travel Iron Cost?
        </h1>
        <p className="mt-4 text-white/55">
          The wholesale price breakdown: materials, certifications, customization, quantity and logistics — and how to compare quotes fairly.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-8807.jpg" alt="Travel iron wholesale price breakdown - XINGYUE manufacturer" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          &quot;How much is a travel iron?&quot; is the first question every importer asks — and the answer is never a single number. This guide explains what actually drives the price so you can compare quotes with confidence.
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
          <h2 className="text-xl font-bold mb-3">Get an Itemized Factory-Direct Quote</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Send your model, quantity and destination — receive an itemized quotation with the price ladder across volumes, plus a 3D mockup for OEM branding.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Request a Quote <ArrowRight size={15} />
            </Link>
            <Link href="/guides/price-guide" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Read the Price Guide
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
