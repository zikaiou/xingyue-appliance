import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Package, ShieldCheck, Truck } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/garment-steamer-manufacturer" },
  title: "Garment Steamer Manufacturer in China | Factory Direct | XINGYUE",
  description:
    "Garment steamer manufacturer in China: handheld and professional steamers, OEM/ODM customization, MOQ from 500 pcs. Factory-direct supply with CE/RoHS/CB/ETL certification.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are you a garment steamer manufacturer or a trading company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are a direct manufacturer with a 35,000 m² production base in Huizhou, China, specializing in garment steamers, travel irons, steam irons and vacuum steamers.",
      },
    },
    {
      "@type": "Question",
      name: "What steamer models do you manufacture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We manufacture handheld steamers like the 6617 (1800W) and ST-815, professional models like the 900A, and vacuum garment steamers in the 9002–9005 series.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build steamers under my brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Full OEM/ODM customization is available: logo, colors, packaging and manuals, with per-model certification for your market.",
      },
    },
  ],
};

const products = [
  { model: "6617", img: "/images/products/6617.jpg", desc: "1800W handheld steamer with ceramic steam panel", link: "/products/6617" },
  { model: "ST-815", img: "/images/products/ST-815.png", desc: "Professional handheld garment steamer", link: "/products/st-815" },
  { model: "900A", img: "/images/products/900A.png", desc: "Steamer with panel steaming for professional use", link: "/products/900a" },
  { model: "ST-588", img: "/images/products/ST-588.png", desc: "Compact steamer-iron hybrid for travel programs", link: "/products/st-588" },
];

const strengths = [
  { icon: Factory, title: "Direct Manufacturer", text: "35,000 m² factory in Huizhou — production lines, tooling and QC in-house." },
  { icon: Package, title: "OEM / ODM Ready", text: "Custom branding, packaging and configurations on proven steamer platforms." },
  { icon: ShieldCheck, title: "Certified Exports", text: "CE, RoHS and CB for Europe; ETL for North America — per model." },
  { icon: Truck, title: "Reliable Supply", text: "30–45 day standard lead times with scheduled production and global shipping." },
];

export default function GarmentSteamerManufacturer() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="pt-32 pb-12 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">Direct Manufacturer</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Garment Steamer Manufacturer in China</h1>
        <p className="mt-4 text-white/50 max-w-2xl mx-auto">
          Handheld and professional garment steamers, made in our own 35,000 m² factory — factory-direct, OEM-ready and certified for global markets.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Contact the Factory <ArrowRight size={16} />
          </Link>
          <Link href="/factory" className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
            Tour Our Factory
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Link key={p.model} href={p.link} className="group bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-[#ff2f7d]/40 transition">
              <div className="aspect-square relative bg-[#0d0d12] rounded-xl overflow-hidden mb-4">
                <Image src={p.img} alt={`${p.model} garment steamer manufactured by XINGYUE`} fill sizes="(max-width:768px) 50vw, 25vw" className="object-contain p-4" />
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
          <h2 className="text-2xl font-bold">Source Steamers Direct from the Factory</h2>
          <p className="mt-3 text-sm text-white/55 leading-relaxed max-w-2xl">
            Request models, quantities and your market details — receive itemized factory-direct pricing, MOQ confirmation and certification files.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Request Pricing <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
