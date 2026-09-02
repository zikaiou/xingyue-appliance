import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const steps = [
  {
    title: "Step 1: Share Your Concept",
    body: [
      "Every OEM project starts with a conversation. Tell us your target market, product category (travel iron, garment steamer, steam iron or vacuum steamer), budget range and any specific features you have in mind. The more context you provide, the faster we can propose the right solution.",
    ],
  },
  {
    title: "Step 2: Industrial Design & Engineering",
    body: [
      "Our in-house design and engineering team transforms your requirements into a manufacturable product. This includes structural design, material selection and safety compliance planning. We maintain a library of proven base models — from compact travel irons like the ST-718 to high-power steam irons — that can be customized faster and more cost-effectively than starting from zero.",
    ],
  },
  {
    title: "Step 3: Prototype & Sampling",
    body: [
      "Before mass production, we build prototypes so you can evaluate the actual look, feel and performance. Sample iterations cover logo placement, color matching, packaging design and user manual content. This is the stage where your brand identity takes physical form.",
    ],
  },
  {
    title: "Step 4: Testing & Certification",
    body: [
      "Every sample undergoes our five-stage quality process: material inspection, assembly testing, steam performance test, safety inspection and final audit. Depending on your target markets, we also prepare the required certifications — CE, RoHS and CB for Europe, ETL for North America — so your products clear customs without surprises.",
    ],
  },
  {
    title: "Step 5: Mass Production & QC",
    body: [
      "Once the sample is approved, production begins on our 35,000m² factory floor with 500+ skilled workers. Dedicated QC inspectors monitor every batch against the approved sample, and our production scheduling keeps your delivery date on track.",
    ],
  },
  {
    title: "Step 6: Packaging & Global Shipping",
    body: [
      "We handle professional packaging design, carton labeling and export documentation. With logistics partners covering over 100 countries, your order moves from our warehouse to your port — or directly to your customers' doors.",
    ],
  },
];

const customizations = [
  { title: "Logo Customization", desc: "Embossed, printed or sticker logo on body and packaging" },
  { title: "Color Customization", desc: "Tailored colorways to match your brand identity" },
  { title: "Packaging Design", desc: "Bespoke boxes with your artwork and specifications" },
  { title: "Soleplate Options", desc: "Ceramic, non-stick or stainless steel per market preference" },
  { title: "Plug & Cable", desc: "EU, US, BS or AU plugs with custom cable length" },
  { title: "User Manual", desc: "Multi-language manuals prepared for your markets" },
];

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/blog/oem-guide" },
  title: "Garment Care OEM Manufacturing Process | XINGYUE",
  description: "A broad garment care OEM process overview for brands: requirements, platform selection, customization, sampling, production, quality control and export coordination.",
};

export default function OEMGuide() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
          <ArrowLeft size={16} /> Back to Guide
        </Link>
      </div>

      <header className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
          <span>August 3, 2026</span>
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">OEM / ODM Guide</span>
          <span>7 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Garment Care OEM Manufacturing Process: A Broad Overview for Brands
        </h1>
        <p className="mt-4 text-white/55">
          A broad overview of how brands move from a product brief to a documented OEM program across garment-care categories.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <p className="mb-8 text-sm text-white/55">The <Link href="/oem" className="text-[#ff2f7d] hover:underline">garment care OEM manufacturing</Link> page is the commercial pillar. This article supports that page with a cross-category process overview.</p>
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
          <div className="aspect-square relative">
            <Image src="/images/factory/gallery1.jpg" alt="OEM garment care manufacturing process at XINGYUE factory" fill className="object-contain p-6" unoptimized />
          </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          A garment care OEM program can cover travel irons, garment steamers, steam irons or vacuum garment steamers. This broad overview explains the commercial sequence—brief, platform selection, customization, sampling, compliance, production, quality control and export coordination. For the detailed garment steamer production workflow, see the dedicated OEM process guide; for private-label launch planning, see the private-label guide.
        </p>

        {steps.map((s, idx) => (
          <section key={idx} className="mb-10">
            <h2 className="text-xl font-bold mb-4">{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="text-white/65 leading-relaxed mb-4">{p}</p>
            ))}
          </section>
        ))}

        {/* Customization Options */}
        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-6">What We Can Customize for Your Brand</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {customizations.map((c) => (
              <div key={c.title} className="flex gap-3">
                <Check size={16} className="text-[#ff2f7d] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">{c.title}</p>
                  <p className="text-xs text-white/45 mt-1">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className="my-8 text-center text-sm text-white/55">For the detailed product workflow, read the <Link href="/blog/garment-steamer-oem-process" className="text-[#ff2f7d] hover:underline">garment steamer OEM process guide</Link>, review the <Link href="/blog/private-label-guide" className="text-[#ff2f7d] hover:underline">private-label launch guide</Link>, then use <Link href="/oem" className="text-[#ff2f7d] hover:underline">OEM and ODM manufacturing support</Link> before requesting a quote.</p>

        {/* CTA */}
        <section className="text-center py-10">
          <h2 className="text-2xl font-bold">Start Your OEM Project</h2>
          <p className="mt-3 text-white/50 max-w-md mx-auto text-sm">
            Tell us your requirements and get a professional manufacturing solution within 24 hours.
          </p>
          <Link href="/oem#inquiry" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Submit Your Inquiry <ArrowRight size={16} />
          </Link>
        </section>
      </article>
    </div>
  );
}
