import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Steam Iron for Apparel Brands | Garment Care for Textile Companies | XINGYUE",
  description:
    "Steam irons and garment care equipment for apparel and textile brands, showrooms and production facilities. XINGYUE supplies high-power steam irons for professional use.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What steam iron do apparel brands use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apparel brands and showrooms typically use high-power steam irons like the ST-S1003 (2800W) for professional pressing, plus steamers for quick touch-ups on delicate fabrics.",
      },
    },
    {
      "@type": "Question",
      name: "Can apparel brands private label steam irons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support private label programs with logo, color and packaging customization across the steam iron range.",
      },
    },
    {
      "@type": "Question",
      name: "Do you supply production facilities in volume?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We supply multi-unit orders for production facilities and equipment distributors with consistent batch quality.",
      },
    },
  ],
};

const products = [
  { model: "ST-S1003", img: "/images/products/ST-S1003.jpg", desc: "2800W professional steam iron — built for frequent, demanding pressing.", link: "/products/st-s1003" },
  { model: "9005", img: "/images/products/9005.jpg", desc: "Vacuum garment steamer for fabric handling without an ironing board.", link: "/products/9005" },
];

const tips = [
  "Match iron power to your pressing frequency — professional models carry the daily load.",
  "For delicate fabrics, pair irons with steamers rather than relying on soleplate contact alone.",
  "Private label programs: start from an existing model, add branding, then scale volumes.",
];

export default function ApparelTextile() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Apparel &amp; Textile</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Garment Care for Apparel &amp; Textile Companies
        </h1>
        <p className="mt-4 text-white/55">
          Professional pressing for showrooms, production and finishing — plus private label opportunities for apparel brands.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-S1003.jpg" alt="Steam iron for apparel and textile brands - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Apparel brands, showrooms and production facilities share one need: fabric that looks right. Whether it is pressing a sample line, finishing garments for photoshoots or equipping a retail floor, the right garment care equipment makes the difference.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Professional Pressing, Every Day</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            High-power steam irons — like the ST-S1003 at 2800W — deliver the heat and steam output that frequent pressing demands. For delicate fabrics, garment steamers handle wrinkle removal without soleplate contact, protecting silk, wool and synthetics.
          </p>
          <p className="text-white/65 leading-relaxed">
            Vacuum steamers add a third capability: fabric held flat by suction while steaming, giving professional results without an ironing board.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Recommended Equipment for Apparel</h2>
          <div className="space-y-4">
            {products.map((p) => (
              <Link key={p.model} href={p.link} className="group flex items-center gap-4 bg-[#0d0d12] border border-white/8 rounded-xl p-4 hover:border-[#ff2f7d]/40 transition">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 relative">
                  <Image src={p.img} alt={`${p.model} apparel industry equipment - XINGYUE`} fill sizes="64px" className="object-contain p-1" />
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
          <h2 className="text-xl font-bold mb-4">Private Label for Apparel Brands</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Apparel brands launching adjacent product lines can private label steam irons and steamers under their own name — logo, colors, packaging and manuals customized, with certification handled per model.
          </p>
          <p className="text-white/65 leading-relaxed">
            This turns garment care from a utility purchase into a brand extension with retail presence.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Sourcing Tips for Apparel Companies</h2>
          <ul className="space-y-3">
            {tips.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm md:text-base text-white/60 leading-relaxed">
                <Check size={16} className="text-[#ff2f7d] mt-1 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-3">Equip Your Apparel Operation</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Tell us your pressing volume and fabric mix — we&apos;ll recommend equipment, configurations and supply for your facility or program.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">Talk to Our Team <ArrowRight size={15} /></Link>
            <Link href="/industries/dry-cleaning-services" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">Dry Cleaning Solutions</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
