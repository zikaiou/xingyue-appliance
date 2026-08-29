import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Package, ShieldCheck, Truck } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/vacuum-garment-steamer-supplier" },
  title: "Vacuum Garment Steamer Supplier | Early Category Advantage | XINGYUE",
  description:
    "Vacuum garment steamer supplier with dedicated manufacturing: 9002–9005 series, OEM customization and early-mover advantage for importers in an emerging category.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you manufacture vacuum garment steamers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We manufacture the 9002–9005 vacuum garment steamer series with dedicated tooling in our Huizhou factory.",
      },
    },
    {
      "@type": "Question",
      name: "Is the vacuum steamer category worth entering now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vacuum steamers are an emerging category with limited competition in most markets — early entrants typically capture keyword and shelf advantages before mainstream competition arrives.",
      },
    },
    {
      "@type": "Question",
      name: "Can I private label a vacuum steamer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. OEM customization covers branding, colors and packaging on the 9002–9005 platforms, with certification per model.",
      },
    },
  ],
};

const products = [
  { model: "9002", img: "/images/products/9002.png", desc: "1300W vacuum steamer with LED display", link: "/products/9002" },
  { model: "9003", img: "/images/products/9003.png", desc: "Vacuum garment steamer platform", link: "/products/9003" },
  { model: "9004", img: "/images/products/9004.jpg", desc: "Foldable vacuum steamer for home use", link: "/products/9004" },
  { model: "9005", img: "/images/products/9005.jpg", desc: "Vacuum steamer with enhanced suction", link: "/products/9005" },
];

const strengths = [
  { icon: Factory, title: "Dedicated Tooling", text: "Vacuum steamer production with dedicated molds and production lines — genuine manufacturer, not a trader." },
  { icon: Package, title: "OEM / ODM Ready", text: "Branding, colors and packaging customized on the 9002–9005 platforms." },
  { icon: ShieldCheck, title: "Certified Exports", text: "Certification per model for your destination market — handled from the start." },
  { icon: Truck, title: "Early-Mover Supply", text: "Stable supply for the first movers building the category in their regions." },
];

export default function VacuumGarmentSteamerSupplier() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="pt-32 pb-12 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">Emerging Category</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Vacuum Garment Steamer Supplier</h1>
        <p className="mt-4 text-white/50 max-w-2xl mx-auto">
          Dedicated vacuum steamer manufacturing with dedicated tooling — the supply partner for importers building this emerging category.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Request Supplier Information <ArrowRight size={16} />
          </Link>
          <Link href="/blog/vacuum-steamer-wholesale" className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
            Market Outlook Guide
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Link key={p.model} href={p.link} className="group bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-[#ff2f7d]/40 transition">
              <div className="aspect-square relative bg-[#0d0d12] rounded-xl overflow-hidden mb-4">
                <Image src={p.img} alt={`${p.model} vacuum garment steamer from XINGYUE supplier`} fill sizes="(max-width:768px) 50vw, 25vw" className="object-contain p-4" />
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
          <h2 className="text-2xl font-bold">Be an Early Mover in Vacuum Steamers</h2>
          <p className="mt-3 text-sm text-white/55 leading-relaxed max-w-2xl">
            Share your target market and volumes — we&apos;ll confirm model specs, MOQ and certification for your region.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Contact the Supplier <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
