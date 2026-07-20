import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const manufacturing = [
  { title: "Product Development", desc: "From concept to prototype with experienced engineering team" },
  { title: "Production Line", desc: "Organized assembly lines ensuring consistent output quality" },
  { title: "Quality Control", desc: "Multi-stage inspection from raw material to finished product" },
];

const gallery = ["Assembly Line", "Production Workshop", "Quality Inspection", "Warehouse"];

const oemFeatures = [
  "Logo Customization",
  "Color Customization",
  "Packaging Design",
  "Product Development",
];

export default function FactoryPage() {
  return (
    <div className="bg-[#050507] text-white min-h-screen">
      {/* 1. Factory Hero */}
      <section className="pt-32 pb-20 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">Our Factory</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl mx-auto">
          Advanced Manufacturing For Professional Garment Care Solutions
        </h1>
        <p className="mt-6 text-white/50 max-w-xl mx-auto">
          35,000 m² manufacturing base with 16+ years of industry experience.
        </p>
      </section>

      {/* 2. Factory Data */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["35,000 m²", "Factory Area"],
            ["16+", "Years Experience"],
            ["500+", "Employees"],
            ["100+", "Countries Exported"],
          ].map(([val, label]) => (
            <div key={label} className="bg-white/4 border border-white/8 rounded-2xl p-6 text-center">
              <p className="text-2xl md:text-3xl font-black">{val}</p>
              <p className="text-xs text-white/40 mt-2 uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Manufacturing Capability */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Manufacturing Capability</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {manufacturing.map((m) => (
            <div key={m.title} className="bg-white/4 border border-white/8 rounded-2xl p-6">
              <h3 className="text-lg font-bold">{m.title}</h3>
              <p className="mt-3 text-sm text-white/55 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Factory Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Factory Gallery</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((g) => (
            <div key={g} className="bg-white/4 border border-white/8 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <span className="text-white/15 text-sm">{g}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-white/25 text-xs mt-4">
          Real factory images to be provided by XINGYUE
        </p>
      </section>

      {/* 5. Quality Control */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Quality Control</h2>
        <div className="max-w-3xl mx-auto bg-white/4 border border-white/8 rounded-2xl p-8 grid gap-6 sm:grid-cols-2">
          {[
            ["Raw Material Inspection", "All materials checked before production begins"],
            ["In-Process Testing", "Continuous monitoring during manufacturing"],
            ["Final Product Audit", "Every unit inspected before packaging"],
            ["Batch Sampling", "Random quality sampling per production batch"],
          ].map(([t, d]) => (
            <div key={t} className="flex gap-3">
              <Check size={18} className="text-[#ff2f7d] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold">{t}</h3>
                <p className="text-xs text-white/45 mt-1">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. OEM / ODM Service */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold">Your Reliable OEM / ODM Partner</h2>
        <p className="mt-3 text-white/50 max-w-lg mx-auto text-sm">
          Custom manufacturing solutions tailored to your brand requirements.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {oemFeatures.map((f) => (
            <div key={f} className="bg-white/4 border border-white/8 rounded-xl p-5 flex items-center gap-3">
              <Check size={16} className="text-[#ff2f7d] shrink-0" />
              <span className="text-sm font-medium">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Certificates */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Certificates</h2>
        <div className="flex justify-center flex-wrap gap-6">
          {["CE", "RoHS", "CB", "ISO 9001"].map((cert) => (
            <div key={cert} className="bg-white/4 border border-white/8 rounded-xl px-8 py-6 text-center min-w-[120px]">
              <p className="text-xl font-black">{cert}</p>
              <p className="text-xs text-white/30 mt-1">Certified</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Contact CTA */}
      <section className="border-t border-white/8 py-20 text-center px-6">
        <h2 className="text-3xl font-bold">Start Your OEM Project</h2>
        <p className="mt-3 text-white/50 max-w-md mx-auto">
          Contact us for factory visit, sample request, or partnership inquiry.
        </p>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
          Contact Our Team <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
