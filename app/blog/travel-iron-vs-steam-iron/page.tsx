import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/blog/travel-iron-vs-steam-iron" },
  title: "Travel Iron vs Steam Iron: Which Product Line Should You Source? | XINGYUE",
  description:
    "Travel irons vs full-size steam irons for wholesalers: category size, margins, competition and product mix strategy — with XINGYUE models for each line.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I stock travel irons or full-size steam irons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They serve different buyers. Travel irons suit compact, high-turnover retail; steam irons target home and professional users with higher unit value. Many wholesalers stock both.",
      },
    },
    {
      "@type": "Question",
      name: "Which category has less competition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Travel irons have lower barriers for new importers but steady competition; full-size steam irons compete on power and features. Product mix across both spreads risk.",
      },
    },
    {
      "@type": "Question",
      name: "Can I mix both categories in one container?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mixed-model orders across categories are common — it lets you test demand on multiple lines while optimizing container space.",
      },
    },
  ],
};

const sections = [
  {
    title: "Two Categories, Two Buyer Profiles",
    body: [
      "Travel irons sell to travelers, hotels and corporate gifting — compact, carry-on friendly, high turnover. Full-size steam irons target home users and professionals who want power and features — higher unit value, higher unit price.",
      "They are not competitors; they are adjacent categories that often share a wholesale line.",
    ],
  },
  {
    title: "Travel Irons: Volume and Turnover",
    body: [
      "Travel irons are compact and container-efficient, which keeps landed cost per unit low and turns inventory fast. The ST-718 (1000W, 140ml tank, ceramic soleplate) is a standard volume model; the ST-8807 (1300W) covers the premium tier in 220–240V markets.",
      "Downside: competition is steady and differentiation is harder — packaging and brand matter.",
    ],
  },
  {
    title: "Steam Irons: Power and Margin",
    body: [
      "Full-size steam irons command higher prices and margins. High-power models like the ST-S1001 (2800W) and ST-S1003 (2800W) deliver the steam output home and professional users expect.",
      "The trade-off: heavier units, bigger cartons, more container space per unit — and buyers who compare features carefully.",
    ],
  },
  {
    title: "The Wholesale Strategy: Stock Both",
    body: [
      "The strongest importers run both lines: travel irons for volume and cash flow, steam irons for margin and premium positioning. A container can mix 8–10 SKUs across categories to test demand and optimize space.",
      "Our range covers both — same factory, same quality system, one supply relationship.",
    ],
  },
];

export default function TravelIronVsSteamIron() {
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
          Travel Iron vs Steam Iron: Which Product Line Should You Source?
        </h1>
        <p className="mt-4 text-white/55">
          Category size, margins and competition — and why the best wholesalers often stock both.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-S1001.jpg" alt="Travel iron vs steam iron product line sourcing - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          If you are building an iron category, the first decision is scope: travel irons, full-size steam irons, or both. This guide compares the two lines for wholesalers and importers.
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
          <h2 className="text-xl font-bold mb-3">Source Both Lines from One Factory</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Travel irons and steam irons from the same manufacturer — one quality system, one supply relationship, mixed containers.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Browse Both Lines <ArrowRight size={15} />
            </Link>
            <Link href="/blog/steamer-vs-iron" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Steamer vs Iron, Too
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
