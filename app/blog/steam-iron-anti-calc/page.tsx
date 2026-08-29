import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/blog/steam-iron-anti-calc" },
  title: "Steam Iron Anti-Calc Systems: Why They Matter | XINGYUE",
  description:
    "Anti-calc and self-clean systems in steam irons: what they do, why they reduce complaints, and how to position them in your product line.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does an anti-calc system do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anti-calc systems reduce scale buildup in hard-water areas, keeping steam vents clear and maintaining steam output over the iron's life.",
      },
    },
    {
      "@type": "Question",
      name: "Is anti-calc worth paying more for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In hard-water markets, yes — scale buildup is a top cause of reduced steam output and complaints. Anti-calc and self-clean systems measurably reduce those issues.",
      },
    },
    {
      "@type": "Question",
      name: "Do all XINGYUE steam irons have anti-calc?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check the spec sheet per model — anti-calc and self-clean features vary by model and price tier, which is why they are listed explicitly on each product page.",
      },
    },
  ],
};

const sections = [
  {
    title: "What Scale Does to a Steam Iron",
    body: [
      "In hard-water areas, minerals in tap water build up inside the boiler and steam vents as scale. Over time, scale blocks steam channels, reduces output, and eventually damages the heating element — a top cause of steam iron complaints and returns.",
      "Anti-calc systems slow this buildup; self-clean functions flush it out. Together they extend usable life and keep steam output consistent.",
    ],
  },
  {
    title: "Why It Matters for Wholesalers",
    body: [
      "Scale-related complaints are common in hard-water markets — and they come back to the buyer, not the factory. Stocking models with effective anti-calc and self-clean systems reduces after-sales friction.",
      "It is also a legitimate price differentiator: in hard-water regions, buyers actively look for these features.",
    ],
  },
  {
    title: "Positioning in Your Product Line",
    body: [
      "Entry models can omit anti-calc to hit price points; mid and professional tiers should include it — especially if your market has hard water. List the feature explicitly: 'anti-calc system' and 'self-clean function' convert better than generic claims.",
      "Confirm the exact system on the spec sheet when ordering — implementations vary between models.",
    ],
  },
];

export default function SteamIronAntiCalc() {
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
          Steam Iron Anti-Calc Systems: Why They Matter
        </h1>
        <p className="mt-4 text-white/55">
          Scale is the silent killer of steam irons — and the feature that prevents it is worth more than its price premium.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-S1003.jpg" alt="Steam iron anti-calc self-clean system explained - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          If your market has hard water, anti-calc is not a premium extra — it is the feature that keeps customers happy. Here is why it matters and how to position it.
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
          <h2 className="text-xl font-bold mb-3">Compare Anti-Calc Features Per Model</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Each XINGYUE steam iron page lists its anti-calc and self-clean specification — compare before you build your line.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Compare Steam Irons <ArrowRight size={15} />
            </Link>
            <Link href="/blog/steam-iron-guide" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Steam Iron Buying Guide
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
