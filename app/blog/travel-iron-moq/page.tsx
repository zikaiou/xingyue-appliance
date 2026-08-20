import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Travel Iron MOQ Explained | Minimum Order Quantities for Importers | XINGYUE",
  description:
    "What is the minimum order quantity for travel irons? Why factories set MOQs, what affects them, and how to plan your first import order. XINGYUE MOQs typically start at 500–1,000 pcs.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the MOQ for travel irons from XINGYUE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our travel iron MOQ typically starts at 500–1,000 pieces per model, depending on configuration and customization level. Existing models with standard setup sit at the lower end.",
      },
    },
    {
      "@type": "Question",
      name: "Can I combine different travel iron models to reach the MOQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mixed-model orders are common — many buyers spread a total quantity across several models to test demand before scaling individual SKUs.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get samples before placing a bulk travel iron order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Pre-production samples are available (typically 3–5 business days) and sample costs are credited against your bulk order.",
      },
    },
  ],
};

const sections = [
  {
    title: "Why Travel Irons Have MOQs",
    body: [
      "A minimum order quantity (MOQ) is the smallest production batch a factory will accept. Travel irons have MOQs for the same reason any appliance does: fixed costs — component procurement, production line setup, quality inspection, packaging runs and certification marking — only become efficient at a certain volume.",
      "For a factory, a 200-piece order is nearly as expensive to set up as a 2,000-piece order, which is why serious manufacturers set clear minimums rather than accept any quantity.",
    ],
  },
  {
    title: "What Determines Your Travel Iron MOQ",
    body: [
      "First, the model itself: existing in-production designs with proven tooling allow the lowest minimums, while new structures require mold investment that is amortized across a larger first order.",
      "Second, customization: standard colors, standard packaging and standard plug types keep the MOQ at the base level. Custom colors, bespoke packaging or special accessories typically raise the minimum.",
      "Third, your market's voltage: ordering 110V vs 220V configurations can affect batch planning, so confirm your destination market when requesting quantities.",
    ],
  },
  {
    title: "XINGYUE Travel Iron MOQs at a Glance",
    body: [
      "For standard OEM travel iron orders, our MOQ typically starts at 500–1,000 pieces per model. Core models like the ST-718 and ST-717 sit at the lower end; premium or heavily customized models move higher. We always confirm the exact minimum for your chosen configuration before quoting.",
      "Mixed-model orders let you spread a total quantity across the range — for example, 500 ST-718 plus 500 ST-588 — which is how many importers test multiple SKUs in their first container.",
    ],
  },
  {
    title: "How to Plan Your First Travel Iron Order",
    body: [
      "Start with samples. Order 2–3 pre-production samples of the models you shortlist, verify quality and steam performance, and confirm your packaging design before committing.",
      "Plan a trial order at or slightly above the MOQ, validate sell-through in your market, then scale with repeat orders — this is the lowest-risk path to a successful travel iron line.",
      "Combine several models in one container to spread freight costs and test demand across price points. Your supplier's loading calculation sheet will tell you exactly how many cartons fit a 20ft or 40HQ container.",
    ],
  },
];

export default function TravelIronMoq() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Sourcing Guide</span>
          <span>5 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Travel Iron MOQ Explained
        </h1>
        <p className="mt-4 text-white/55">
          Minimum order quantities for travel irons — why they exist, what affects yours, and how to plan your first import.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-718.jpg" alt="Travel iron MOQ explained for importers - XINGYUE manufacturer" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          If you are importing travel irons for the first time, the MOQ is usually the first number that matters. This guide explains what drives it, what XINGYUE&apos;s minimums are, and how to plan quantities that work for your business.
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
          <h2 className="text-xl font-bold mb-3">Plan Your Order with XINGYUE</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Tell us your target models, quantities and destination market — we&apos;ll confirm the exact MOQ, price ladder and lead time for your configuration.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Get a Quote <ArrowRight size={15} />
            </Link>
            <Link href="/guides/moq-guide" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Full MOQ Guide
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
