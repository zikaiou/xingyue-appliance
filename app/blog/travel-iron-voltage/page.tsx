import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Travel Iron Voltage Guide | 110V vs 220V vs Dual Voltage | XINGYUE",
  description:
    "How to choose the right voltage and plug configuration for travel irons: 110–120V for North America, 220–240V for Europe and Asia. Plan separate SKUs per market.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What voltage should my travel iron use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Match the voltage to the destination market: 110–120V for North America and Japan, 220–240V for Europe, Asia and most other regions.",
      },
    },
    {
      "@type": "Question",
      name: "Can one travel iron work in both the US and Europe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dual-voltage capability is not available on every model. If you target multiple regions, the reliable approach is separate SKUs per voltage rather than assuming a single model works everywhere.",
      },
    },
    {
      "@type": "Question",
      name: "What plug types should I order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Order the plug standard of your destination market: Type A/B for North America, Type C/F for Europe, Type G for UK/Ireland, Type I for Australia/China, Type A for Japan.",
      },
    },
  ],
};

const sections = [
  {
    title: "Why Voltage Is the First Decision",
    body: [
      "Voltage determines whether an iron performs correctly — and safely — in its destination market. A 220V iron plugged into a 110V outlet will heat slowly or not at all; a 110V iron on a 220V circuit risks damage. The rule is simple: match the product to the grid.",
      "Market standards are well established: 110–120V for North America and Japan, 220–240V for Europe, most of Asia, Africa, Oceania and South America.",
    ],
  },
  {
    title: "Standard Configurations by Market",
    body: [
      "North America and Japan typically use 110–120V appliances with Type A/B plugs. European and most Asian markets use 220–240V with Type C/F plugs, while the UK and Ireland use Type G. Australia and China use Type I.",
      "When you order from XINGYUE, confirm the destination market and we configure the correct voltage and plug for that region — it is part of standard order specification.",
    ],
  },
  {
    title: "What About Dual Voltage?",
    body: [
      "Some travel irons advertise dual-voltage capability, but it is not available on every model, and relying on it across regions creates compatibility risk. For distributors and brands, the reliable approach is separate SKUs per voltage — one 110V configuration for North American buyers, one 220V configuration for European buyers.",
      "This also simplifies certification, packaging and user manuals, since each market's compliance is addressed in its own SKU.",
    ],
  },
  {
    title: "Power and Voltage Work Together",
    body: [
      "A travel iron's power rating depends on the supply voltage: standard compact models are 1000W, and higher-power models (like the 1300W ST-8807) suit 220–240V markets where faster heat-up matters.",
      "If you are building a multi-region range, our size guide maps power and tank capacity to use cases — and our team will recommend the right configuration for each market you target.",
    ],
  },
];

export default function TravelIronVoltage() {
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
          Travel Iron Voltage Guide
        </h1>
        <p className="mt-4 text-white/55">
          110V vs 220V vs dual voltage — how to configure your travel iron range for every market you sell into.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-8807.jpg" alt="Travel iron voltage guide 110V vs 220V - XINGYUE manufacturer" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Voltage is the most common specification mistake in travel iron importing — and the most expensive to fix. Here is how to get it right from the start.
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
          <h2 className="text-xl font-bold mb-3">Configure Your Range Correctly</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Tell us your target markets — we&apos;ll recommend models, voltage and plug configurations for each region, and confirm certification requirements.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Ask for Guidance <ArrowRight size={15} />
            </Link>
            <Link href="/guides/size-guide" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Size &amp; Power Guide
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
