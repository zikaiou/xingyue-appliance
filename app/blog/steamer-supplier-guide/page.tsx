import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const sections = [
  {
    title: "1. Why a Dedicated Garment Steamer Supplier Matters",
    body: [
      "Garment steamers are a specialized category. Unlike general appliance suppliers who spread across dozens of product lines, a dedicated garment steamer supplier focuses its engineering, tooling and QC on steam technology. This specialization shows up in the details: steam output consistency, drip prevention, heat-up speed and panel durability.",
      "When you source from a specialist, you also get honest technical guidance. A dedicated supplier can tell you which of their platforms matches your market — handheld vs. vacuum, 1000W vs. 1800W — rather than pushing whatever they happen to stock.",
    ],
  },
  {
    title: "2. How to Compare Garment Steamer Supplier Quotations",
    body: [
      "Start with a structured shortlist of 5-8 candidates from Alibaba, Global Sources and trade directories. For each supplier, record: factory location, years in garment care manufacturing, product platform count, MOQ, and whether they are a manufacturer or trading company.",
      "Verify the factory claim. Ask for the business license, factory videos and a video call inside the workshop. Genuine garment steamer manufacturers — like XINGYUE with our 35,000 m² base in Huizhou — welcome this transparency. Trading companies usually cannot produce live production footage.",
    ],
  },
  {
    title: "3. Key Specifications to Compare in RFQs",
    body: [
      "When requesting quotations, standardize the specification sheet so quotes are comparable. Include: rated power (1000-1800W typical), water tank capacity (150-400ml), steam output in g/min, heat-up time, soleplate material (ceramic / stainless / non-stick), voltage configuration (110V or 220-240V) and plug type.",
      "Ask every supplier for the same format. Our handheld steamers, for example, range from the ST-815 (1600W, 340ml tank) to the 6617 (1800W, ceramic panel, 30+5g/min output). Transparent suppliers publish these numbers readily; vague ones are a red flag.",
    ],
  },
  {
    title: "4. Certifications: Non-Negotiable for Export",
    body: [
      "Garment steamers are electrical appliances and must meet market-specific certifications. CE and RoHS are mandatory for Europe, CB is internationally recognized, and ETL/UL is required for North America. Request current, model-specific certificates — not generic ones — during the quotation stage.",
      "A professional garment steamer supplier maintains an up-to-date certification library and shares it proactively. If a supplier cannot produce the certificate for the exact model you are buying, walk away.",
    ],
  },
  {
    title: "5. Sample Testing: The Real Test",
    body: [
      "Order samples of the exact model you intend to source, and test them against a fixed checklist: heat-up time, steam continuity, drip during use, cable quality, panel glide and packaging robustness. Order two or three units of the same model — consistency across units reveals true QC quality.",
      "Also test the supplier's responsiveness during the sampling phase. Fast, accurate communication during sampling predicts the partnership experience during production and shipping.",
    ],
  },
  {
    title: "6. The Emerging Opportunity: Vacuum Garment Steamers",
    body: [
      "While handheld steamers are a mature category, vacuum garment steamers remain a low-competition growth niche. These hybrids combine steam with suction to hold fabric taut — delivering professional pressing results without an ironing board.",
      "Forward-thinking suppliers now offer vacuum steamer platforms (like our 9002-9005 series with 1500W systems and 400ml detachable tanks). For importers, entering this category early means capturing search traffic and retail shelf space before competitors. Ask your shortlisted suppliers whether they manufacture vacuum steamers — the answer reveals how current their product line is.",
    ],
  },
];

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/blog/steamer-supplier-guide" },
  title: "Garment Steamer Supplier Evaluation Checklist | XINGYUE",
  description: "A practical garment steamer supplier evaluation checklist covering quotation comparison, samples, documentation, commercial terms, communication and order readiness.",
};

export default function SteamerSupplierGuide() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
          <ArrowLeft size={16} /> Back to Guide
        </Link>
      </div>

      <header className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
          <span>August 2026</span>
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Supplier Guide</span>
          <span>6 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Garment Steamer Supplier Evaluation Checklist
        </h1>
        <p className="mt-4 text-white/55">
          A practical checklist for comparing garment steamer suppliers after you receive quotations, samples and commercial documentation.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <p className="mb-8 text-sm text-white/55">For the primary garment steamer manufacturing range, visit <Link href="/products/garment-steamers" className="text-[#ff2f7d] hover:underline">our garment steamer range</Link>. For OEM and ODM manufacturing support, see <Link href="/oem" className="text-[#ff2f7d] hover:underline">OEM and ODM manufacturing</Link>.</p>
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
          <div className="aspect-square relative">
            <Image src="/images/products/ST-815.png" alt="Garment steamer supplier guide - choose professional steamer manufacturer XINGYUE" fill className="object-contain p-4" unoptimized />
          </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Once you have a shortlist, supplier evaluation becomes a comparison exercise rather than a broad manufacturer search. Put each quotation into the same format and check responsiveness, samples, model-specific documents, commercial terms and order communication. This guide is intentionally focused on supplier evaluation; factory due diligence and manufacturer selection are separate questions.
        </p>

        {sections.map((s, idx) => (
          <section key={idx} className="mb-10">
            <h2 className="text-xl font-bold mb-4">{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="text-white/65 leading-relaxed mb-4">{p}</p>
            ))}
          </section>
        ))}

        {/* Product Recommendations */}
        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-6">Our Garment Steamer Platforms</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { model: "ST-815", img: "/images/products/ST-815.png", desc: "1600W handheld, 340ml tank, dry & steam" },
              { model: "6617", img: "/images/products/6617.jpg", desc: "1800W ceramic panel, 30+5g/min steam" },
              { model: "9002", img: "/images/products/9002.jpg", desc: "1500W vacuum steamer, 400ml tank" },
              { model: "9003", img: "/images/products/9003.png", desc: "3-in-1 with dual-level steam & suction" },
            ].map((p) => (
              <Link key={p.model} href={`/products/${p.model.toLowerCase()}`} className="group flex items-center gap-4 bg-[#0d0d12] border border-white/8 rounded-xl p-4 hover:border-[#ff2f7d]/40 transition">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 relative">
                  <Image src={p.img} alt={`${p.model} garment steamer from XINGYUE supplier`} fill className="object-contain p-1" unoptimized />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm">{p.model}</p>
                  <p className="text-xs text-white/45 mt-1 line-clamp-2">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-[#ff2f7d] mt-2">
                    View Details <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-10">
          <h2 className="text-2xl font-bold">Source from a Dedicated Steamer Supplier</h2>
          <p className="mt-3 text-white/50 max-w-md mx-auto text-sm">
            Get factory pricing, samples and OEM consultation within 24 hours.
          </p>
          <Link href="/contact?product=Garment%20Steamer" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </section>
      </article>
    </div>
  );
}
