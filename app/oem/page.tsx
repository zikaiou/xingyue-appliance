import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const whyUs = [
  { title: "16+ Years", desc: "Manufacturing Experience" },
  { title: "Complete OEM", desc: "Solution Provider" },
  { title: "Advanced", desc: "Production Capability" },
  { title: "Global", desc: "Export Experience" },
];

const process = ["Concept", "Industrial Design", "Prototype", "Testing", "Mass Production"];

const services = [
  { title: "Logo Customization", desc: "Custom branding on product body and packaging" },
  { title: "Color Customization", desc: "Tailored color options to match your brand" },
  { title: "Packaging Design", desc: "Custom box design with your brand identity" },
  { title: "Product Modification", desc: "Specification adjustments for your market" },
];

const manufacture = [
  "Material Inspection",
  "Assembly",
  "Product Testing",
  "Final Inspection",
  "Shipping",
];

export default function OEMPage() {
  return (
    <div className="bg-[#050507] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">OEM / ODM Service</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl mx-auto">
          YOUR RELIABLE OEM / ODM PARTNER
        </h1>
        <p className="mt-6 text-white/50 max-w-xl mx-auto">
          From product concept to mass production, XINGYUE provides complete garment care solutions for global brands.
        </p>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
          Start Your Project <ArrowRight size={16} />
        </Link>
      </section>

      {/* Why Choose XINGYUE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">WHY CHOOSE XINGYUE</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w) => (
            <div key={w.title} className="bg-white/4 border border-white/8 rounded-2xl p-6 text-center">
              <p className="text-2xl font-black">{w.title}</p>
              <p className="text-xs text-white/40 mt-2">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* From Idea to Product */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">FROM IDEA TO PRODUCT</h2>
        <div className="flex flex-wrap justify-center items-center gap-3">
          {process.map((step, i) => (
            <span key={step}>
              <span className="bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm font-semibold whitespace-nowrap">{step}</span>
              {i < process.length - 1 && <ArrowRight size={16} className="inline mx-2 text-[#ff2f7d]" />}
            </span>
          ))}
        </div>
      </section>

      {/* Customization Service */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">CUSTOMIZATION SERVICE</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="bg-white/4 border border-white/8 rounded-2xl p-6">
              <Check size={20} className="text-[#ff2f7d] mb-3" />
              <h3 className="font-bold text-sm">{s.title}</h3>
              <p className="text-xs text-white/45 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">MANUFACTURING PROCESS</h2>
        <div className="flex flex-wrap justify-center items-center gap-3">
          {manufacture.map((step, i) => (
            <span key={step}>
              <span className="bg-[#ff2f7d]/10 border border-[#ff2f7d]/30 rounded-full px-5 py-3 text-sm font-semibold whitespace-nowrap text-[#ff2f7d]">{step}</span>
              {i < manufacture.length - 1 && <ArrowRight size={16} className="inline mx-2 text-white/30" />}
            </span>
          ))}
        </div>
      </section>

      {/* Global Delivery Support */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">GLOBAL DELIVERY SUPPORT</h2>
        <div className="max-w-3xl mx-auto bg-white/4 border border-white/8 rounded-2xl p-8 grid gap-6 sm:grid-cols-2">
          {[
            ["Worldwide Shipping", "Reliable logistics to 100+ countries"],
            ["Flexible Orders", "Small batch to large volume supported"],
            ["On-Time Delivery", "Efficient production scheduling"],
            ["Dedicated Support", "Personal account manager for every client"],
          ].map(([t, d]) => (
            <div key={t} className="flex gap-3">
              <Check size={16} className="text-[#ff2f7d] shrink-0 mt-0.5" />
              <div><h3 className="text-sm font-bold">{t}</h3><p className="text-xs text-white/45 mt-1">{d}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* OEM Inquiry CTA */}
      <section className="pb-20 pt-12 text-center px-6">
        <div className="max-w-2xl mx-auto bg-white/4 border border-white/8 rounded-2xl p-10">
          <h2 className="text-3xl font-bold">START YOUR OEM PROJECT</h2>
          <p className="mt-3 text-white/50 text-sm max-w-md mx-auto">
            Tell us your requirements and get a custom solution within 24 hours.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-10 py-4 bg-[#ff2f7d] text-white font-bold rounded-full text-sm hover:bg-[#e6006f] transition">
            Request OEM Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
