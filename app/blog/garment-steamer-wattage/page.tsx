import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Garment Steamer Wattage Guide: What Power Do You Need? | XINGYUE",
  description:
    "How much wattage a garment steamer needs: 1000W travel models, 1800W handheld professional steamers, and 2800W full-size irons — with XINGYUE model examples.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What wattage should a garment steamer be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Handheld garment steamers around 1800W balance fast heat-up with portability — suitable for home and professional use. Compact travel models sit around 1000W.",
      },
    },
    {
      "@type": "Question",
      name: "Is higher wattage always better?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Higher wattage means faster heat-up and stronger steam, but also higher energy draw — match wattage to your market's voltage and your use case rather than always maximizing.",
      },
    },
    {
      "@type": "Question",
      name: "What wattage do professional steamers use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional handheld steamers like the 6617 use 1800W; high-power steam irons reach 2800–3000W for frequent, demanding use.",
      },
    },
  ],
};

const sections = [
  {
    title: "Wattage Is the Engine Size",
    body: [
      "A garment steamer's wattage determines two things buyers feel: how fast it heats up and how strong the steam is. Higher wattage delivers both — but it also draws more power, so the right choice depends on the market's voltage and the user's needs.",
      "For 220–240V markets, 1800W is the professional sweet spot for handheld steamers. Compact travel models sit lower, around 1000W, to keep weight and footprint down.",
    ],
  },
  {
    title: "The Power Tiers at a Glance",
    body: [
      "1000W: compact travel irons and mini steamers — lightweight, carry-on friendly, slower heat-up. 1800W: handheld garment steamers like the 6617 with ceramic steam panels — the standard for home and hospitality. 2800W+: full-size steam irons like the ST-S1001 — fast, powerful and built for frequent use.",
      "Each tier serves a different buyer, which is why wholesale lines typically span all three.",
    ],
  },
  {
    title: "Match Wattage to Your Market",
    body: [
      "Voltage and wattage are linked: a 1000W model is a standard 110–120V configuration, while 1800W+ models assume 220–240V supply. When building SKUs per market, confirm the wattage matches the grid — it is part of the specification, not an optional extra.",
      "Our team configures wattage and plugs per destination region on every order.",
    ],
  },
  {
    title: "What Buyers Should Compare Beyond Watts",
    body: [
      "Wattage is one number. Steam output, heat-up time, tank capacity and soleplate/panel material matter as much to the user experience. Compare the full spec sheet — not just the headline wattage — when evaluating quotes.",
    ],
  },
];

export default function GarmentSteamerWattage() {
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
          Garment Steamer Wattage Guide
        </h1>
        <p className="mt-4 text-white/55">
          How much power a garment steamer really needs — and how to match it to your market and buyers.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/6617.jpg" alt="Garment steamer wattage guide - XINGYUE 1800W handheld steamer" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          &quot;How many watts?&quot; is the first spec buyers ask about a garment steamer. Here is what wattage actually means — and how to choose the right tier for your market.
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
          <h2 className="text-xl font-bold mb-3">Build a Full Power-Tier Range</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            From 1000W travel steamers to 2800W professional irons — one factory covers every tier.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Browse the Range <ArrowRight size={15} />
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
