import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, ArrowDown } from "lucide-react";

const qcSteps = [
  "Material Inspection",
  "Assembly Testing",
  "Steam Performance Test",
  "Safety Inspection",
  "Final Quality Check",
];

const oemSteps = [
  { title: "Product Design", desc: "Custom concept development for your brand" },
  { title: "Prototype Development", desc: "Rapid sampling with engineering support" },
  { title: "Mass Production", desc: "Scalable manufacturing with quality control" },
  { title: "Global Shipping", desc: "Reliable logistics to 100+ countries" },
];

export default function FactoryPage() {
  return (
    <div className="bg-[#050507] text-white min-h-screen">
      {/* 1. Factory Hero */}
      <section className="relative pt-32 pb-20 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/factory/gallery1.jpg" alt=""
            fill className="object-cover" unoptimized />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/90 via-[#050507]/70 to-[#050507]" />
        <div className="relative z-10">
          <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">OUR FACTORY</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl mx-auto">
            Advanced Manufacturing For Professional Garment Care Solutions
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#capability" className="px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition inline-flex items-center gap-2">
              Explore Production <ArrowDown size={15} />
            </a>
            <Link href="/contact" className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Request OEM Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Factory Video */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center">OUR FACTORY VIDEO</h2>
        <p className="text-center text-white/40 text-sm mt-2 mb-8">See XINGYUE Manufacturing Capability</p>
        <div className="rounded-2xl overflow-hidden border border-white/8 bg-black max-w-2xl mx-auto">
          <video controls className="w-full aspect-video" poster="/images/factory/video-poster.jpg" preload="metadata">
            <source src="/videos/factory.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* 3. Factory Data */}
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

      {/* 4. Manufacturing Capability */}
      <section id="capability" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">MANUFACTURING CAPABILITY</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { img: "/images/factory/gallery3.jpg", title: "Product Development",
              items: ["Industrial Design", "Engineering Support", "Prototype Development"] },
            { img: "/images/factory/gallery1.jpg", title: "Assembly Production",
              items: ["Advanced Assembly Lines", "Efficient Manufacturing Process", "Large Scale Production"] },
            { img: "/images/factory/gallery3.jpg", title: "Quality Control",
              items: ["Incoming Inspection", "Production Testing", "Final Inspection"] },
            { img: "/images/factory/gallery4.jpg", title: "Packaging & Shipping",
              items: ["Professional Packaging", "Warehouse Management", "Global Delivery"] },
          ].map((m) => (
            <div key={m.title} className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden group">
              <div className="aspect-[4/3] relative">
                <Image src={m.img} alt={m.title} fill className="object-cover" unoptimized />
              </div>
              <div className="p-5">
                <h3 className="font-bold">{m.title}</h3>
                <ul className="mt-2 space-y-1">
                  {m.items.map((t) => (<li key={t} className="text-xs text-white/50 flex items-center gap-1.5"><Check size={12} className="text-[#ff2f7d] shrink-0" />{t}</li>))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Quality Control Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">QUALITY CONTROL PROCESS</h2>
        <div className="max-w-3xl mx-auto">
          {qcSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ff2f7d] flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
              <div className="bg-white/4 border border-white/8 rounded-xl px-5 py-4 flex-1">
                <p className="font-semibold text-sm">{step}</p>
              </div>
              {i < qcSteps.length - 1 && (
                <div className="hidden sm:flex items-center text-[#ff2f7d]">
                  <ArrowDown size={20} className="rotate-[-90deg]" />
                </div>
              )}
            </div>
          ))}
          {/* Mobile arrows */}
          <div className="sm:hidden flex flex-col items-center gap-0">
            {qcSteps.slice(0, -1).map((_, i) => (
              <ArrowDown key={i} size={16} className="text-[#ff2f7d] my-1" />
            ))}
          </div>
        </div>
      </section>

      {/* 6. OEM / ODM */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold">YOUR RELIABLE OEM / ODM PARTNER</h2>
        <p className="mt-3 text-white/50 max-w-lg mx-auto text-sm">
          From product concept to mass production, XINGYUE provides complete customization solutions for global brands.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {oemSteps.map((o, i) => (
            <div key={o.title} className="bg-white/4 border border-white/8 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#ff2f7d]/15 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#ff2f7d] font-bold">{i + 1}</span>
              </div>
              <h3 className="font-bold text-sm">{o.title}</h3>
              <p className="text-xs text-white/45 mt-2">{o.desc}</p>
            </div>
          ))}
        </div>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
          Start Your OEM Project <ArrowRight size={16} />
        </Link>
      </section>

      {/* 7. Certifications */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">CERTIFICATIONS</h2>
        <div className="flex justify-center flex-wrap gap-6">
          {["CE", "CB", "RoHS", "GS", "ETL"].map((cert) => (
            <div key={cert} className="bg-white/4 border border-white/8 rounded-xl px-8 py-6 text-center min-w-[110px]">
              <p className="text-xl font-black">{cert}</p>
              <p className="text-xs text-white/30 mt-1">Certified</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="border-t border-white/8 py-20 text-center px-6">
        <h2 className="text-3xl font-bold">Looking For A Reliable<br />Garment Care Manufacturer?</h2>
        <p className="mt-3 text-white/50 max-w-md mx-auto text-sm">
          Partner with XINGYUE for professional OEM/ODM garment care solutions.
        </p>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
          Request OEM Quote <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
