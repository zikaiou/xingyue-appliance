import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Package, ShieldCheck, Truck } from "lucide-react";

export const metadata = {
  title: "Steam Iron Factory in China | High Power Steam Irons | XINGYUE",
  description:
    "Steam iron factory in China: 2800W professional steam irons, OEM/ODM customization and factory-direct supply. XINGYUE — 16+ years of appliance manufacturing.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which steam irons do you manufacture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We manufacture the ST-S1001 to ST-S1004 steam iron series — 2800W+ high-power models for home and professional use.",
      },
    },
    {
      "@type": "Question",
      name: "Can I private label steam irons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. OEM customization covers logo, colors, packaging and manuals on proven steam iron platforms.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MOQ for steam irons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our MOQ typically starts at 500–1,000 pieces per model, depending on configuration and customization.",
      },
    },
  ],
};

const products = [
  { model: "ST-S1001", img: "/images/products/ST-S1001.jpg", desc: "2800W professional steam iron", link: "/products/st-s1001" },
  { model: "ST-S1002", img: "/images/products/ST-S1002.jpg", desc: "High-power steam iron with large tank", link: "/products/st-s1002" },
  { model: "ST-S1003", img: "/images/products/ST-S1003.jpg", desc: "2800W steam iron for demanding use", link: "/products/st-s1003" },
  { model: "ST-S1004", img: "/images/products/ST-S1004.jpg", desc: "Professional steam iron platform", link: "/products/st-s1004" },
];

const strengths = [
  { icon: Factory, title: "Dedicated Production", text: "High-power steam iron lines in our 35,000 m² Huizhou factory." },
  { icon: Package, title: "OEM / ODM Ready", text: "Custom branding, packaging and configurations per program." },
  { icon: ShieldCheck, title: "Certified Exports", text: "CE, RoHS and CB for Europe; ETL for North America — per model." },
  { icon: Truck, title: "Stable Lead Times", text: "30–45 day standard production with scheduled global shipping." },
];

export default function SteamIronFactory() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="pt-32 pb-12 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">Direct Manufacturer</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Steam Iron Factory in China</h1>
        <p className="mt-4 text-white/50 max-w-2xl mx-auto">
          High-power steam irons from 2800W, manufactured on our own production lines — factory-direct, OEM-ready and certified for global markets.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Request Factory Pricing <ArrowRight size={16} />
          </Link>
          <Link href="/products" className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
            Browse the Range
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Link key={p.model} href={p.link} className="group bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-[#ff2f7d]/40 transition">
              <div className="aspect-square relative bg-[#0d0d12] rounded-xl overflow-hidden mb-4">
                <Image src={p.img} alt={`${p.model} steam iron manufactured by XINGYUE factory`} fill sizes="(max-width:768px) 50vw, 25vw" className="object-contain p-4" />
              </div>
              <p className="font-bold">{p.model}</p>
              <p className="text-xs text-white/45 mt-1">{p.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs text-[#ff2f7d] mt-3 group-hover:gap-2 transition-all">View Details <ArrowRight size={12} /></span>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s) => (
            <div key={s.title} className="bg-[#0d0d12] border border-white/8 rounded-2xl p-6">
              <s.icon size={22} className="text-[#ff2f7d] mb-3" />
              <h3 className="font-bold text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/4 border border-white/8 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold">Source Steam Irons from the Factory</h2>
          <p className="mt-3 text-sm text-white/55 leading-relaxed max-w-2xl">
            Share your target models and quantities — receive factory-direct pricing, MOQ confirmation and per-model certification files.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Request Pricing <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
