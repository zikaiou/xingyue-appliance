import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "How to Get a Lower MOQ from a Chinese Appliance Factory | XINGYUE",
  description:
    "Six practical ways to reduce your minimum order quantity with a Chinese appliance factory: existing models, standard configurations, mixed orders, trial runs and more.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I negotiate a lower MOQ with a Chinese factory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, within reason. Choosing existing models, standard configurations and mixed-model orders are the most effective ways to lower the effective minimum.",
      },
    },
    {
      "@type": "Question",
      name: "What is a mixed-model order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A mixed-model order spreads a total quantity across several product models, letting you test multiple SKUs while reaching the factory's volume threshold.",
      },
    },
    {
      "@type": "Question",
      name: "Do samples count toward the MOQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pre-production sample costs are typically credited against your bulk order, so ordering samples first is effectively risk-free.",
      },
    },
  ],
};

const sections = [
  {
    title: "Understand Why the MOQ Exists",
    body: [
      "A factory's MOQ covers fixed costs: component procurement, production line setup, quality inspection and packaging runs. These costs are nearly the same for a small batch as a large one, which is why factories set minimums.",
      "The good news: there are legitimate, supplier-friendly ways to lower your effective minimum — none of them involve demanding a favor.",
    ],
  },
  {
    title: "1. Choose Existing, In-Production Models",
    body: [
      "Models already in production have proven tooling and established supply chains, so their minimums are the lowest. At XINGYUE, existing models with standard configuration sit at the lower end of our 500–1,000 pc range.",
      "New structures require mold investment — that is what pushes minimums up. Start with what exists.",
    ],
  },
  {
    title: "2. Keep Configuration Standard",
    body: [
      "Standard colors, standard packaging and standard plug types keep the minimum at base level. Custom colors, bespoke packaging and special accessories add setup cost — and raise the minimum.",
      "Plan customization for later: validate the standard product first, then add branding as volumes grow.",
    ],
  },
  {
    title: "3. Use Mixed-Model Orders",
    body: [
      "Many factories accept a total quantity spread across models. Instead of 1,000 of one model, order 500 + 500 of two — you test demand on multiple SKUs while meeting the volume threshold.",
      "This is the most effective strategy for first-time importers building a range.",
    ],
  },
  {
    title: "4. Start with a Trial Order, Then Scale",
    body: [
      "A trial order at or slightly above the minimum validates quality, packaging and market response. Once sell-through is proven, repeat orders — which carry lower risk for the factory — often unlock better terms.",
      "Relationship matters: suppliers price more flexibly for buyers who grow with them.",
    ],
  },
  {
    title: "5. Order Samples First",
    body: [
      "Pre-production samples (3–5 business days for existing models) verify quality before you commit. Sample costs are typically credited against the bulk order, so the risk is minimal.",
      "Always test the exact model and configuration you plan to order — samples of a different spec prove nothing.",
    ],
  },
];

export default function LowerMoqChinaFactory() {
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
          <span>6 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          How to Get a Lower MOQ from a Chinese Appliance Factory
        </h1>
        <p className="mt-4 text-white/55">
          Six supplier-friendly strategies that reduce your effective minimum order quantity — no favors required.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-717.jpg" alt="How to get a lower MOQ from a Chinese appliance factory - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          A high MOQ is often the first barrier for new importers. The good news: most minimums are negotiable within a framework both sides benefit from. Here is how.
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
          <h2 className="text-xl font-bold mb-3">Find Your Entry-Point Models</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Browse our range and ask which models carry the lowest minimums — our team will recommend entry-point configurations for first orders.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Browse Products <ArrowRight size={15} />
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
