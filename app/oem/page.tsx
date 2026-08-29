"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";

const stats = [
  ["16+", "Years Experience"],
  ["35,000 m²", "Factory"],
  ["100+", "Export Markets"],
];

const categories = [
  { image: "/images/oem/travel-iron.jpg", name: "Travel Iron", desc: "Portable Travel Iron Solutions", badge: "OEM / ODM Available" },
  { image: "/images/oem/garment-steamer.jpg", name: "Garment Steamer", desc: "Handheld Steam Solutions", badge: "OEM / ODM Available" },
  { image: "/images/products/ST-S1001.jpg", name: "Steam Iron", desc: "Professional Steam Iron Solutions", badge: "OEM / ODM Available" },
  { image: "/images/products/9002.jpg", name: "Vacuum Garment Steamer", desc: "Vacuum Garment Care Solutions", badge: "OEM / ODM Available" },
];

const process = ["Idea", "Design", "Prototype", "Testing", "Mass Production", "Shipping"];

const customizations = [
  { title: "Logo Customization", desc: "Custom branding on product body and packaging" },
  { title: "Color Customization", desc: "Tailored color options to match your brand" },
  { title: "Packaging Design", desc: "Custom box design with your brand identity" },
  { title: "Product Modification", desc: "Specification adjustments for your market" },
];

const whyUs = [
  { title: "Professional Manufacturing", desc: "16+ years dedicated to garment care products" },
  { title: "Complete Production", desc: "From design to delivery, all in-house capability" },
  { title: "Quality Assurance", desc: "Multi-stage inspection and international certifications" },
  { title: "Global Support", desc: "Dedicated account management and logistics worldwide" },
];

export default function OEMPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ 
    company: "", 
    name: "", 
    email: "", 
    country: "", 
    whatsapp: "", 
    website: "", 
    product: "", 
    quantity: "", 
    message: "" 
  });

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("https://formspree.io/f/mjgnlkdj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ company: "", name: "", email: "", country: "", whatsapp: "", website: "", product: "", quantity: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      {/* 1. Hero */}
      <section className="pt-32 pb-12 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">OEM / ODM Service</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl mx-auto">
          YOUR RELIABLE OEM / ODM PARTNER
        </h1>
        <p className="mt-6 text-white/50 max-w-xl mx-auto">
          From product concept to mass production, XINGYUE provides complete garment care solutions for global brands.
        </p>
        <div className="mt-10 flex justify-center flex-wrap gap-4">
          {stats.map(([v, l]) => (
            <div key={l} className="bg-white/4 border border-white/8 rounded-2xl px-6 py-4 text-center min-w-[120px]">
              <p className="text-xl font-black">{v}</p>
              <p className="text-[10px] text-white/40 uppercase tracking-wide mt-1">{l}</p>
            </div>
          ))}
        </div>
        <Link href="#inquiry" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
          Start Your Project <ArrowRight size={16} />
        </Link>
      </section>

      {/* 2. OEM Process */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10 text-[#ff2f7d]">OEM PROCESS</h2>
        <div className="flex flex-wrap justify-center items-center gap-2">
          {process.map((step, i) => (
            <span key={step} className="flex items-center">
              <span className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-3 pr-5 py-3">
                <span className="w-7 h-7 rounded-full bg-[#ff2f7d] flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
                <span className="text-sm font-semibold whitespace-nowrap">{step}</span>
              </span>
              {i < process.length - 1 && <ArrowRight size={16} className="mx-1 text-[#ff2f7d] shrink-0 opacity-40" />}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Why Choose XINGYUE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10 text-[#ff2f7d]">WHY CHOOSE XINGYUE</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {whyUs.map((w) => (
            <div key={w.title} className="bg-white/4 border border-white/8 rounded-2xl p-6 flex gap-4">
              <Check size={20} className="text-[#ff2f7d] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold">{w.title}</h3>
                <p className="text-sm text-white/50 mt-2">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OEM Product Capability */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10 text-[#ff2f7d]">OEM PRODUCT CAPABILITY</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.name} className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden hover:border-[#ff2f7d]/40 transition">
              <div className="aspect-square bg-[#0d0d12] relative">
                <Image src={c.image} alt={`${c.name} OEM and ODM manufacturing capability at XINGYUE factory`} fill className="object-contain p-6" unoptimized />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-sm">{c.name}</h3>
                <span className="inline-block mt-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">{c.badge}</span>
                <p className="text-xs text-white/45 mt-2">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Customization Service */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10 text-[#ff2f7d]">CUSTOMIZATION SERVICE</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {customizations.map((s) => (
            <div key={s.title} className="bg-white/4 border border-white/8 rounded-2xl p-6">
              <Check size={20} className="text-[#ff2f7d] mb-3" />
              <h3 className="font-bold text-sm">{s.title}</h3>
              <p className="text-xs text-white/45 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. OEM Inquiry Form */}
      <section id="inquiry" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center">START YOUR OEM PROJECT</h2>
        <p className="text-center text-white/40 text-sm mt-2 mb-10">
          Tell us your requirements. Our team will provide professional manufacturing solutions.
        </p>
        <div className="max-w-2xl mx-auto bg-white/4 border border-white/8 rounded-2xl p-8 shadow-2xl shadow-black/50">
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            {[
              { k: "company", label: "Company Name *", ph: "Your company name", required: true },
              { k: "name", label: "Contact Name *", ph: "Your full name", required: true },
              { k: "country", label: "Country / Region *", ph: "Your country", required: true },
              { k: "email", label: "Email *", ph: "your@email.com", required: true, type: "email" },
              { k: "whatsapp", label: "WhatsApp", ph: "+86 159 1388 1634" },
              { k: "website", label: "Website", ph: "www.yourcompany.com" },
            ].map((f) => (
              <div key={f.k}>
                <label className="text-xs text-white/50 mb-1.5 block">{f.label}</label>
                <input
                  required={f.required}
                  type={f.type || "text"}
                  className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#ff2f7d] focus:outline-none transition"
                  placeholder={f.ph}
                  value={(form as any)[f.k]}
                  onChange={(e) => update(f.k, e.target.value)}
                />
              </div>
            ))}
            <div>
              <label className="text-xs text-white/50 mb-1.5 block">Interested Product</label>
              <select
                className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ff2f7d] focus:outline-none transition appearance-none"
                value={form.product}
                onChange={(e) => update("product", e.target.value)}
              >
                <option value="" className="bg-[#1a1a1e]">Select product</option>
                <option value="Travel Iron" className="bg-[#1a1a1e]">Travel Iron</option>
                <option value="Garment Steamer" className="bg-[#1a1a1e]">Garment Steamer</option>
                <option value="Steam Iron" className="bg-[#1a1a1e]">Steam Iron</option>
                <option value="Vacuum Garment Steamer" className="bg-[#1a1a1e]">Vacuum Garment Steamer</option>
                <option value="Other" className="bg-[#1a1a1e]">Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-white/50 mb-1.5 block">Estimated Quantity</label>
              <select
                className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ff2f7d] focus:outline-none transition appearance-none"
                value={form.quantity}
                onChange={(e) => update("quantity", e.target.value)}
              >
                <option value="" className="bg-[#1a1a1e]">Select quantity</option>
                <option value="1,000-5,000 pcs" className="bg-[#1a1a1e]">1,000-5,000 pcs</option>
                <option value="5,000-20,000 pcs" className="bg-[#1a1a1e]">5,000-20,000 pcs</option>
                <option value="20,000+ pcs" className="bg-[#1a1a1e]">20,000+ pcs</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-white/50 mb-1.5 block">Message</label>
              <textarea
                className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#ff2f7d] focus:outline-none transition h-28 resize-none"
                placeholder="Tell us about your OEM requirements..."
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <button 
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition flex items-center justify-center gap-2 ${
                  status === "success" 
                  ? "bg-green-600 text-white cursor-default" 
                  : "bg-[#ff2f7d] text-white hover:bg-[#e6006f] active:scale-[0.98]"
                }`}
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent Successfully!" : "Submit Inquiry"}
              </button>
              {status === "error" && <p className="text-red-500 text-xs text-center mt-3">Failed to send. Please check your network or email us directly.</p>}
            </div>
          </form>
          
          <div className="mt-8 pt-8 border-t border-white/8 flex flex-wrap justify-center gap-6 text-xs text-white/40">
            <a href="mailto:amy@xingyue.store" className="flex items-center gap-1.5 hover:text-white/70 transition">
              <span className="text-[#ff2f7d] font-bold">Email:</span> amy@xingyue.store
            </a>
            <a href="https://wa.me/8615913881634" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white/70 transition">
              <span className="text-[#ff2f7d] font-bold">WhatsApp:</span> +86 159 1388 1634
            </a>
            <span className="flex items-center gap-1.5">
              <span className="text-[#ff2f7d] font-bold">Response Time:</span> Within 24 hours
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
