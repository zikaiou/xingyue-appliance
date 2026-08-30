import Link from "next/link";
import { ArrowRight, TrendingUp, Globe, Factory } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    region: "Travel Iron OEM",
    title: "Travel Iron OEM / ODM Project Solution",
    summary: "A manufacturing solution for brands developing a portable travel iron line with an existing product platform and documented product options.",
    metrics: [
      ["Volume Production", "Travel iron manufacturing"],
      ["Cost-Optimized Solution", "Platform-based development"],
      ["Performance Verified", "Testing and quality control"],
    ],
    story: [
      "XINGYUE supports travel iron programs from product selection and engineering through prototype development, testing and mass production. Brands can build on an existing model and discuss logo, color and packaging customization.",
      "The manufacturing workflow keeps the project focused on documented product requirements, sample approval and production readiness. Available configurations include portable designs, ceramic soleplates and model-specific water-tank options.",
    ],
  },
  {
    icon: Globe,
    region: "Vacuum Garment Steamer OEM",
    title: "Vacuum Garment Steamer Manufacturing Solution",
    summary: "A product development solution for brands evaluating integrated dry, steam and vacuum garment-care models.",
    metrics: [
      ["Product Development Solution", "3-in-1 model options"],
      ["OEM Support", "Custom colors and packaging"],
      ["Export Support", "Market-specific configuration"],
    ],
    story: [
      "XINGYUE develops vacuum garment steamer solutions for brands and importers evaluating integrated garment-care products. The documented range includes models combining dry, steam and vacuum functions.",
      "OEM discussions can cover model selection, product engineering, logo customization, colors, packaging and plug configuration. Prototype development, performance testing and quality control remain part of the project workflow.",
    ],
  },
  {
    icon: Factory,
    region: "Garment Steamer OEM",
    title: "Garment Steamer Factory-Direct OEM Solution",
    summary: "A manufacturing solution for importers and brands sourcing handheld garment steamers with direct OEM / ODM support.",
    metrics: [
      ["Cost-Optimized Solution", "Factory-direct sourcing model"],
      ["Reliable Production & Delivery", "Production planning support"],
      ["Performance Verified", "Quality control and testing"],
    ],
    story: [
      "XINGYUE supports factory-direct garment steamer programs for importers, distributors and private-label brands. The workflow connects product selection with engineering, prototype development, testing and mass production.",
      "Buyers can discuss handheld steamer models, logo and color customization, packaging, plug configuration and export support. Production and delivery planning are reviewed against the selected model and confirmed project requirements.",
    ],
  },
];

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/case-studies" },
  title: "OEM / ODM Project Solutions | XINGYUE Garment Care Manufacturer",
  description: "Manufacturing solution examples from XINGYUE: travel iron OEM, vacuum garment steamer development and factory-direct garment steamer sourcing support.",
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <section className="pt-32 pb-12 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">OEM / ODM Project Solutions</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Manufacturing Solutions with XINGYUE</h1>
        <p className="mt-4 text-white/50 max-w-xl mx-auto">
          Practical manufacturing solution examples — from OEM product development to factory-direct garment care sourcing.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 space-y-8">
        {cases.map((c, idx) => (
          <article key={idx} className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden hover:border-[#ff2f7d]/40 transition">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#ff2f7d]/15 flex items-center justify-center">
                  <c.icon size={20} className="text-[#ff2f7d]" />
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-white/60">{c.region}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold leading-snug">{c.title}</h2>
              <p className="mt-3 text-white/55 leading-relaxed">{c.summary}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {c.metrics.map(([v, l]) => (
                  <div key={l} className="bg-[#0d0d12] border border-white/8 rounded-xl p-4 text-center">
                    <p className="text-lg font-black text-[#ff2f7d]">{v}</p>
                    <p className="text-xs text-white/45 mt-1">{l}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {c.story.map((p, i) => (
                  <p key={i} className="text-sm text-white/60 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </article>
        ))}

        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold">Build Your OEM / ODM Solution</h2>
          <p className="mt-3 text-white/50 max-w-md mx-auto text-sm">
            Discuss your product development, customization and manufacturing requirements with XINGYUE.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
