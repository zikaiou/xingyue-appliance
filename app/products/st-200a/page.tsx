"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Download } from "lucide-react";

const images = [
  "/images/products/st200a/main.jpg",
  "/images/products/st200a/detail1.jpg",
  "/images/products/st200a/detail2.jpg",
  "/images/products/st200a/detail3.jpg",
  "/images/products/st200a/detail4.jpg",
  "/images/products/st200a/detail5.jpg",
  "/images/products/st200a/detail6.jpg",
];

const features = [
  { title: "Ceramic Base Plate", desc: "Large visual panel with durable ceramic glaze for smoother ironing." },
  { title: "Booster Steam Tech", desc: "Strong pulse pressurized steam for quick wrinkle removal in seconds." },
  { title: "180° Rotating Handle", desc: "Supports both flat and hanging ironing in one compact machine." },
  { title: "5-Speed Adjustment", desc: "Visual large screen panel with five adjustable modes for every fabric." },
];

const specs = [
  ["Model", "ST-200A"],
  ["Category", "Travel Iron"],
  ["Material", "Ceramic Base Plate"],
  ["Product Size", "16.8 x 8.1 x 11.8 cm"],
  ["Panel Size", "16.6 x 7.8 cm"],
  ["Net Weight", "650g"],
  ["Packing Weight", "850g"],
  ["Rated Power", "1200W"],
  ["Frequency", "50/60Hz"],
  ["Rated Voltage", "AC 220-240V"],
  ["Plug", "EU Plug"],
  ["Cable Length", "1.8m"],
  ["Tank Capacity", "190ml"],
  ["First Steam", "20 Seconds"],
  ["Steam Output", "14g / 15g / 17g / 20g"],
  ["Working Time", "8 Minutes"],
  ["Functions", "Dry / Steam"],
];

const scenes = ["Business Travel", "Hotel", "Home Use", "Daily Garment Care"];
const oemItems = ["Logo Customization", "Color Options", "Packaging Design", "Mass Production Support"];

export default function ST200APage() {
  const [imgIdx, setImgIdx] = useState(0);
  const touchX = useRef(0);
  const prev = () => setImgIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setImgIdx((i) => (i === images.length - 1 ? 0 : i + 1));
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
  };

  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-4">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>

      {/* 1. Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid gap-10 lg:grid-cols-2 items-start">
        <div className="reveal is-visible">
          <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-3">Travel Iron</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">ST-200A</h1>
          <h2 className="text-xl text-white/70 mt-2">Professional Travel Iron</h2>
          <p className="text-white/50 mt-2 text-sm">Engineered for Global Performance</p>

          {/* Data Highlights */}
          <div className="mt-6 flex gap-4">
            {[["650g", "Lightweight"], ["1200W", "Heating"], ["190ml", "Tank"]].map(([val, label]) => (
              <div key={label} className="bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-center">
                <p className="text-lg font-bold">{val}</p>
                <p className="text-[10px] text-white/40 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?product=ST-200A" className="px-5 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Request Quote
            </Link>
            <Link href="#" className="px-5 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition inline-flex items-center gap-2">
              <Download size={15} /> Download Specification
            </Link>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-[#0d0d12] rounded-2xl overflow-hidden border border-white/8 reveal is-visible">
          <div className="aspect-square relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <Image src={images[imgIdx]} alt="ST-200A" fill className="object-contain p-4" unoptimized />
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition"><ArrowLeft size={18} /></button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition"><ArrowRight size={18} /></button>
          </div>
          <div className="flex gap-2 p-3 overflow-x-auto">
            {images.map((src, i) => (
              <button key={i} onClick={() => setImgIdx(i)} className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${i === imgIdx ? "border-[#ff2f7d]" : "border-transparent"}`}>
                <Image src={src} alt="" width={64} height={64} className="object-cover w-full h-full" unoptimized />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Key Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="bg-white/4 border border-white/8 rounded-xl p-6 text-left">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Check size={18} className="text-[#ff2f7d] shrink-0" /> {f.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Technical Specifications */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Technical Specifications</h2>
        <div className="max-w-2xl mx-auto bg-white/4 border border-white/8 rounded-2xl overflow-hidden">
          {specs.map(([label, value], i) => (
            <div key={label} className={`flex justify-between px-6 py-4 ${i < specs.length - 1 ? "border-b border-white/6" : ""}`}>
              <span className="text-white/50 text-sm">{label}</span>
              <span className="text-white font-medium text-sm text-right max-w-[55%]">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Perfect For */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Perfect For</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scenes.map((s) => (
            <div key={s} className="bg-white/4 border border-white/8 rounded-xl p-6 text-center">
              <p className="font-semibold">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. OEM / ODM Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold">Customize Your Garment Care Products</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {oemItems.map((item) => (
            <div key={item} className="bg-white/4 border border-white/8 rounded-xl p-5 flex items-center gap-3 text-left">
              <Check size={16} className="text-[#ff2f7d] shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
        <Link href="/contact?product=ST-200A" className="mt-8 inline-block px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
          Request OEM Quote
        </Link>
      </section>

      {/* 6. Final CTA Section */}
      <section className="border-t border-white/8 py-20 text-center px-6">
        <h2 className="text-3xl font-bold">Interested in ST-200A?</h2>
        <p className="mt-3 text-white/50 max-w-md mx-auto">Get factory pricing and customization options.</p>
        <Link href="/contact?product=ST-200A" className="mt-8 inline-block px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
          Send Inquiry
        </Link>
      </section>
    </div>
  );
}
