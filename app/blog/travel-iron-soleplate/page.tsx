import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Travel Iron Soleplate Guide: Ceramic vs Stainless vs Titanium | XINGYUE",
  description:
    "Ceramic, stainless steel or titanium soleplates — which is right for your travel iron? Compare glide, durability, heat distribution and cost for importers.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which soleplate is best for a travel iron?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ceramic soleplates offer the smoothest glide and even heat distribution, making them the most common choice for travel irons. Stainless steel is durable and affordable; titanium is lightest but less common.",
      },
    },
    {
      "@type": "Question",
      name: "Are ceramic soleplates fragile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern ceramic coatings are bonded to a metal base and withstand normal ironing use well. They should be handled with care, like any soleplate — avoid metallic zippers and rough surfaces.",
      },
    },
    {
      "@type": "Question",
      name: "Does soleplate material affect price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Soleplate is a major cost driver — ceramic and titanium models typically cost more than basic stainless or aluminum versions.",
      },
    },
  ],
};

const sections = [
  {
    title: "Why the Soleplate Matters",
    body: [
      "The soleplate is the part of the iron that touches fabric — its material determines glide smoothness, heat distribution, durability and, ultimately, the ironing experience your customers feel. It is also one of the biggest single cost drivers in a travel iron.",
      "Three materials dominate the market: ceramic, stainless steel and titanium (plus budget aluminum/non-stick variants).",
    ],
  },
  {
    title: "Ceramic: The Smoothest Glide",
    body: [
      "Ceramic soleplates slide effortlessly across fabric and distribute heat evenly, which reduces the risk of scorching. The XINGYUE ST-718 uses a ceramic soleplate — the most common choice for compact travel irons — because the glide matters most in a small, lightweight device.",
      "Ceramic coatings are bonded to a metal base, so they are durable in normal use. They are the premium standard in the travel iron segment.",
    ],
  },
  {
    title: "Stainless Steel: Durable and Affordable",
    body: [
      "Stainless steel soleplates are tough, scratch-resistant and affordable to produce. They heat reliably and work well for budget-to-mid travel iron lines, though glide is slightly less smooth than ceramic.",
      "If you target value-conscious markets, stainless steel models keep your price point competitive without compromising durability.",
    ],
  },
  {
    title: "Titanium: Light but Niche",
    body: [
      "Titanium soleplates are lightweight and corrosion-resistant, but they are less common in travel irons — the material cost is higher and the practical advantage over ceramic is marginal for compact models.",
      "When suppliers offer titanium, verify it is genuine: some &quot;titanium&quot; models use a titanium-colored coating over another base.",
    ],
  },
  {
    title: "How to Choose for Your Market",
    body: [
      "Match the soleplate to your price positioning: ceramic for premium/mid lines where glide quality is a selling point, stainless steel for value lines, and budget non-stick variants for entry-level markets.",
      "Ask your supplier for the soleplate specification in writing (material, coating, base metal) — it affects both price and the customer experience, and it is one of the first things experienced buyers check.",
    ],
  },
];

export default function TravelIronSoleplate() {
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
          <span>5 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Travel Iron Soleplate Guide: Ceramic vs Stainless vs Titanium
        </h1>
        <p className="mt-4 text-white/55">
          The material under the iron decides glide, heat and price — here is how to choose for your market.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-718.jpg" alt="Travel iron soleplate ceramic vs stainless vs titanium - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          When buyers compare travel irons, the soleplate is where quality and price meet. Here is how the three main materials compare — and which to stock for your customers.
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
          <h2 className="text-xl font-bold mb-3">Explore Ceramic-Soleplate Travel Irons</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Browse our travel iron range — every model lists its soleplate material so you can match the right spec to your market.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Browse Travel Irons <ArrowRight size={15} />
            </Link>
            <Link href="/guides/size-guide" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Power &amp; Size Guide
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
