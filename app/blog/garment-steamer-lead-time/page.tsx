import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/blog/garment-steamer-lead-time" },
  title: "Garment Steamer Lead Times: How Long Does OEM Production Take? | XINGYUE",
  description:
    "OEM garment steamer production timeline explained: samples, tooling, mass production and shipping. XINGYUE standard lead time is 30–45 days after sample approval.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does OEM garment steamer production take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard production lead time is 30–45 days after sample approval, depending on order quantity. Existing models with standard configuration are at the faster end.",
      },
    },
    {
      "@type": "Question",
      name: "How long do samples take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pre-production samples typically take 3–5 business days for existing models. Custom branding samples may take longer depending on the packaging and printing process.",
      },
    },
    {
      "@type": "Question",
      name: "When should I place orders for seasonal retail windows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plan 2–3 months ahead: production (30–45 days) plus shipping time to your market. For pre-holiday retail windows, place orders earlier to leave buffer for inspection and customs.",
      },
    },
  ],
};

const sections = [
  {
    title: "The OEM Timeline, Stage by Stage",
    body: [
      "A typical OEM garment steamer program runs through four stages: specification and quotation, sample development, mass production, and shipping. Understanding where time goes helps you plan orders that arrive on schedule.",
      "For existing XINGYUE models, the fastest path is: confirm specification (a few days), receive pre-production samples (3–5 business days), approve samples, then production starts.",
    ],
  },
  {
    title: "Samples: 3–5 Business Days for Existing Models",
    body: [
      "Existing models with standard configuration produce samples quickly — typically 3–5 business days. Custom branding (logo printing, packaging design, color changes) adds time depending on the printing and packaging process.",
      "Order samples of every model you shortlist before committing. Sample costs are credited against your bulk order, so the risk is minimal.",
    ],
  },
  {
    title: "Mass Production: 30–45 Days Is Standard",
    body: [
      "After sample approval, standard production lead time is 30–45 days depending on order quantity. Larger orders and heavily customized configurations sit at the upper end; existing models in standard setup move faster.",
      "XINGYUE's 500+ skilled workers and production scheduling support this standard lead-time window. Confirm the current production schedule against your selected model, order quantity and customization requirements.",
    ],
  },
  {
    title: "Shipping Time Comes on Top",
    body: [
      "Production is only half the timeline. Sea freight to Europe or North America typically takes 18–25 days plus customs clearance; air express is 3–5 days at higher cost.",
      "Rule of thumb for seasonal retail: place orders 2–3 months ahead of your target in-stock date. That buffer covers production, inspection, shipping and any customs delay.",
    ],
  },
  {
    title: "How to Protect Your Timeline",
    body: [
      "Finalize specifications before production starts — changes mid-production extend lead time and add cost. Confirm packaging artwork early, since printing lead time runs in parallel with production.",
      "Agree on inspection points in the contract: pre-shipment inspection, sample retention and defect tolerance. A clear quality framework prevents rework delays at the end of the line.",
    ],
  },
];

export default function GarmentSteamerLeadTime() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">OEM Guide</span>
          <span>5 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Garment Steamer Lead Times: How Long Does OEM Production Take?
        </h1>
        <p className="mt-4 text-white/55">
          From sample to container — the real timeline for OEM garment steamer production, and how to plan it into your inventory cycle.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/6617.jpg" alt="Garment steamer OEM production lead time - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          &quot;When will my order arrive?&quot; is the question every importer needs answered before signing. Here is exactly how OEM garment steamer lead time breaks down.
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
          <h2 className="text-xl font-bold mb-3">Plan Your Garment Steamer Program</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Share your target quantities and in-stock date — our team will work back from your deadline to confirm samples, production and shipping timing.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Plan My Order <ArrowRight size={15} />
            </Link>
            <Link href="/blog/oem-guide" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              The Full OEM Process
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
