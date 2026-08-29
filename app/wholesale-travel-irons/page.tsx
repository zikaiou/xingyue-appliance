import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Package, ShieldCheck, Truck } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/wholesale-travel-irons" },
  title: "Travel Irons Wholesale from China | Factory Direct Prices | XINGYUE",
  description:
    "Wholesale travel irons directly from the XINGYUE factory: 1000W compact models, OEM customization, MOQ from 500 pcs, CE/RoHS/CB/ETL certified. Factory-direct pricing.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I buy travel irons wholesale from XINGYUE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We supply travel irons wholesale directly from our factory with MOQs typically starting at 500–1,000 pieces, and support mixed-model orders.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price for wholesale travel irons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on model, quantity, configuration and destination. Request a quote with your quantity range for the price ladder — FOB or DDP available.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customize travel irons with my brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. OEM customization covers logo, colors, packaging and manuals, with per-model certification handled for your market.",
      },
    },
  ],
};

const products = [
  { model: "ST-718", img: "/images/products/ST-718.jpg", desc: "1000W · 140ml tank · ceramic soleplate", link: "/products/st-718" },
  { model: "ST-717", img: "/images/products/ST-717.jpg", desc: "Compact steam iron for entry-tier programs", link: "/products/st-717" },
  { model: "ST-588", img: "/images/products/ST-588.png", desc: "Dry & steam function travel iron", link: "/products/st-588" },
  { model: "ST-8807", img: "/images/products/ST-8807.jpg", desc: "1300W · stronger steam for 220–240V markets", link: "/products/st-8807" },
];

const strengths = [
  { icon: Factory, title: "Direct Factory", text: "35,000 m² production base in Huizhou — you buy from the manufacturer, not a middleman." },
  { icon: Package, title: "OEM Customization", text: "Logo, colors, packaging and manuals — launch your own brand on proven platforms." },
  { icon: ShieldCheck, title: "Certified Exports", text: "CE, RoHS and CB for Europe; ETL available for North America, per model." },
  { icon: Truck, title: "Worldwide Shipping", text: "FOB, CIF or DDP — freight and clearance arranged through experienced partners." },
];

export default function WholesaleTravelIrons() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="pt-32 pb-12 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">Wholesale Sourcing</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Travel Irons Wholesale, Factory Direct</h1>
        <p className="mt-4 text-white/50 max-w-2xl mx-auto">
          Compact 1000W travel irons, OEM-ready and certified for global markets — sourced directly from the manufacturer with 16+ years of export experience.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Request Wholesale Pricing <ArrowRight size={16} />
          </Link>
          <Link href="/blog/travel-iron-wholesale" className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
            Wholesale Import Guide
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Link key={p.model} href={p.link} className="group bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-[#ff2f7d]/40 transition">
              <div className="aspect-square relative bg-[#0d0d12] rounded-xl overflow-hidden mb-4">
                <Image src={p.img} alt={`${p.model} wholesale travel iron - XINGYUE`} fill sizes="(max-width:768px) 50vw, 25vw" className="object-contain p-4" />
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
          <h2 className="text-2xl font-bold">Start Your Travel Iron Wholesale Program</h2>
          <p className="mt-3 text-sm text-white/55 leading-relaxed max-w-2xl">
            Tell us your target models and quantities — receive the price ladder, MOQ confirmation, lead time and shipping options for your market.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Get Wholesale Pricing <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
