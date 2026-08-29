import Link from "next/link";
import { ArrowRight, Boxes, Package, Layers, FileCheck } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/guides/moq-guide" },
  title: "MOQ Guide for Travel Irons & Garment Steamers | XINGYUE",
  description:
    "What is a MOQ, why Chinese appliance factories set them, and how to plan quantities for travel irons, garment steamers and steam irons. XINGYUE MOQs typically start at 500–1,000 pcs.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum order quantity (MOQ) for XINGYUE OEM orders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our MOQ varies by model, typically starting from 500–1,000 pieces for standard OEM orders. Contact us with your target model and quantity for a tailored quotation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I order below the MOQ for a sample or trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we provide pre-production samples (typically 3–5 business days) so you can verify quality before committing to a bulk order. Sample costs are credited against bulk orders.",
      },
    },
    {
      "@type": "Question",
      name: "How can I reduce the MOQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose an existing model with standard colors, packaging and plug configuration; combine multiple models into one order; or place a trial order first and scale with repeat orders.",
      },
    },
    {
      "@type": "Question",
      name: "Do lower MOQs mean higher unit prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally yes — smaller runs spread fixed costs (materials, tooling, setup) over fewer units. Our price guide explains the cost structure so you can plan quantities effectively.",
      },
    },
  ],
};

const factors = [
  {
    icon: Boxes,
    title: "Model & Tooling",
    text: "Existing models with proven tooling allow lower MOQs. Brand-new structures require mold investment, which is amortized across larger first orders.",
  },
  {
    icon: Package,
    title: "Customization Level",
    text: "Standard colors, packaging and plug types keep MOQs at the base level. Fully custom colors, packaging or accessories typically raise the minimum.",
  },
  {
    icon: Layers,
    title: "Materials & Components",
    text: "Soleplate materials, water tanks, heating elements and certifications are procured in batches — component lead times influence the practical minimum batch size.",
  },
  {
    icon: FileCheck,
    title: "Certifications",
    text: "Certified models (CE, RoHS, CB, ETL) carry testing and marking costs that are more efficient at larger volumes.",
  },
];

export default function MoqGuidePage() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="pt-32 pb-12 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">Sourcing Guide</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">MOQ Guide: Travel Irons & Garment Steamers</h1>
        <p className="mt-4 text-white/50 max-w-2xl mx-auto">
          Minimum order quantities explained for first-time importers — what drives them, what XINGYUE&apos;s are, and how to plan your first order.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-[#0d0d12] border border-[#ff2f7d]/30 rounded-2xl p-6 mb-6">
          <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
          <p className="text-sm md:text-base text-white/75 leading-relaxed">
            A MOQ (minimum order quantity) is the smallest batch a factory will accept for a production run. XINGYUE&apos;s MOQ for travel irons and garment steamers typically starts at <span className="text-white font-semibold">500–1,000 pieces per model</span>. Choose existing models with standard configuration to get the lowest minimums.
          </p>
        </div>
        <div className="bg-white/4 border border-white/8 rounded-2xl p-8 md:p-10 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-3">Why Suppliers Set a MOQ</h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              A MOQ is the smallest order a factory will accept for a production run. It exists because manufacturing has fixed costs — raw material purchasing, production line setup, quality inspection, packaging and logistics — that only become efficient at a certain batch size. Below that size, the factory cannot offer consistent pricing or reliable delivery.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">What Affects the MOQ</h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6">
              The minimum varies by product structure and customization level. These are the four factors that matter most:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {factors.map((f) => (
                <div key={f.title} className="bg-[#0d0d12] border border-white/8 rounded-xl p-5">
                  <f.icon size={20} className="text-[#ff2f7d] mb-3" />
                  <h3 className="font-bold text-sm mb-2">{f.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">XINGYUE MOQs at a Glance</h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              For standard OEM orders, our MOQ typically starts at{" "}
              <span className="text-white font-semibold">500–1,000 pieces</span>, depending on the model. Existing,
              proven designs with standard configuration sit at the lower end; custom colors, packaging or new
              structures move toward the higher end. We always confirm the exact minimum for your chosen model before
              quoting.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
                Browse Products <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
                Get a Quote
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">5 Practical Ways to Lower Your MOQ</h2>
            <ol className="space-y-3">
              {[
                "Choose an existing, in-production model — no new tooling means the lowest minimum.",
                "Use standard colors, standard packaging and standard plug types for your market.",
                "Combine several models into one container to reach volume across your whole range.",
                "Start with a trial order, validate sell-through, then scale with repeat orders.",
                "Order pre-production samples first — sample costs are credited against your bulk order.",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/60 leading-relaxed">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d] text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  {t}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">MOQ vs. Unit Price</h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              MOQ and unit price move together: smaller runs spread fixed costs over fewer units, so unit prices are
              higher; larger runs unlock better pricing. When you request a quotation, include your target quantity
              range — our team will show you the price ladder so you can find the sweet spot between inventory risk and
              unit cost. See our{" "}
              <Link href="/guides/price-guide" className="text-[#ff2f7d] hover:underline">
                price guide
              </Link>{" "}
              for the full cost structure.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/guides/price-guide" className="inline-flex items-center gap-2 text-[#ff2f7d] text-sm font-semibold hover:underline">
            Next: How B2B Appliance Pricing Works <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
