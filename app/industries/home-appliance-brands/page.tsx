import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Private Label Home Appliance Manufacturer | OEM for Appliance Brands | XINGYUE",
  description:
    "OEM/ODM partner for home appliance brands: travel irons, garment steamers, steam irons and vacuum steamers built under your brand. From concept to container.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can XINGYUE build appliances under my brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer full OEM/ODM customization: logo printing, custom colors, packaging, plug types and multi-language manuals across our four product lines.",
      },
    },
    {
      "@type": "Question",
      name: "What is the MOQ for a private label appliance program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our MOQ typically starts at 500–1,000 pieces per model, depending on configuration and customization level.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with certifications for my market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide CE, RoHS and CB documentation for European markets and ETL for North America, matched to the models you source.",
      },
    },
  ],
};

const products = [
  { model: "ST-S1001", img: "/images/products/ST-S1001.jpg", desc: "2800W professional steam iron — a strong private-label platform for steam iron programs.", link: "/products/st-s1001" },
  { model: "6617", img: "/images/products/6617.jpg", desc: "1800W handheld steamer with ceramic steam panel — the core of many private-label steamer lines.", link: "/products/6617" },
];

const tips = [
  "Start from an existing model in standard configuration, then add branding as volumes grow.",
  "Confirm certification per model — certificates are model-specific, not range-wide.",
  "Plan packaging artwork early; printing lead time runs in parallel with production.",
];

export default function HomeApplianceBrands() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
          <ArrowLeft size={16} /> Back to Guides
        </Link>
      </div>

      <header className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">OEM / Private Label</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Private Label Home Appliances, Built Under Your Brand
        </h1>
        <p className="mt-4 text-white/55">
          Launch a garment care line without a production line — XINGYUE builds travel irons, steamers and irons for appliance brands worldwide.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-S1001.jpg" alt="Private label home appliance manufacturer - XINGYUE OEM partner" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Building a production line is not the only way to launch an appliance brand. Many of today&apos;s garment care lines start with a proven manufacturer platform: an existing design, your brand, your packaging — and a partner who handles the factory.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Four Product Lines, One OEM Partner</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            XINGYUE manufactures four appliance lines under one roof: travel irons, garment steamers, steam irons and vacuum garment steamers. A private label program can launch on one model, then expand across the range as the brand grows.
          </p>
          <p className="text-white/65 leading-relaxed">
            Customization covers logo printing, custom colors, packaging design, plug types and multi-language user manuals — everything that makes a product feel like yours.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Popular Private Label Platforms</h2>
          <div className="space-y-4">
            {products.map((p) => (
              <Link key={p.model} href={p.link} className="group flex items-center gap-4 bg-[#0d0d12] border border-white/8 rounded-xl p-4 hover:border-[#ff2f7d]/40 transition">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 relative">
                  <Image src={p.img} alt={`${p.model} private label platform - XINGYUE`} fill sizes="64px" className="object-contain p-1" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm">{p.model}</p>
                  <p className="text-xs text-white/45 mt-1 line-clamp-2">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-[#ff2f7d] mt-2">View Details <ArrowRight size={12} /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">The Platform Model: From Concept to Container</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Brand programs typically follow the platform path: choose an existing design, customize branding and packaging, approve samples, and reach a container-ready product in about 4 months — compared to 12+ months developing from scratch.
          </p>
          <p className="text-white/65 leading-relaxed">
            Certification is handled per model: CE, RoHS and CB for European markets, ETL for North America — so your market access is built in from the start.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Sourcing Tips for Appliance Brands</h2>
          <ul className="space-y-3">
            {tips.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm md:text-base text-white/60 leading-relaxed">
                <Check size={16} className="text-[#ff2f7d] mt-1 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-3">Launch Your Brand with XINGYUE</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Tell us your target product and market — we&apos;ll recommend a platform model, customization options and a launch timeline.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/oem" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">Explore OEM Capabilities <ArrowRight size={15} /></Link>
            <Link href="/industries/d2c-ecommerce-brands" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">D2C E-commerce Brands</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
