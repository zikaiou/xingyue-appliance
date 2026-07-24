"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Download } from "lucide-react";

const images = [
  "/images/products/9002/main.jpg",
  "/images/products/9002/side.png",
  "/images/products/9002/holding.jpg",
  "/images/products/9002/action.jpg",
  "/images/products/9002/bed.jpg",
  "/images/products/9002/dual.jpg",
];

const features = [
  { title: "30-Second Fast Heat-Up", desc: "Ready to use in less than 30 seconds." },
  { title: "Dual Steam Levels", desc: "High: 25\u00b15g/min\nLow: 15\u00b15g/min" },
  { title: "Dual Vacuum Levels", desc: "Vacuum Pressure\n2.5\u20133.0kPa" },
  { title: "400ml Detachable Water Tank", desc: "Easy refilling and longer ironing sessions." },
];

const specs = [
  ["Model", "9002"],
  ["Category", "Vacuum Garment Steamer"],
  ["Rated Voltage", "220V~,50Hz,1500W"],
  ["US Version", "120V~,1200W"],
  ["Housing Material", "ABS + PP"],
  ["Soleplate", "Ceramic Soleplate"],
  ["Water Tank Capacity", "400ml"],
  ["Product Dimensions", "160 \u00d7 105 \u00d7 260 mm"],
  ["Heat-Up Time", "\u226430 Seconds"],
  ["Steam Levels", "2 Levels"],
  ["Steam Output", "Level I: 15\u00b15g/min\nLevel II: 25\u00b15g/min"],
  ["Vacuum Levels", "2 Levels"],
  ["Vacuum Pressure", "2.5\u20133.0kPa"],
  ["Water Tank", "Detachable"],
  ["Display", "LED Display"],
  ["Safety Protection", "\u2022 Water Shortage Protection\n\u2022 Overheat Protection\n\u2022 Automatic Shut-Off"],
  ["Power Cord", "18AWG 2-Core, 1.9m, Black"],
  ["Accessories", "None"],
];

const functions = [
  "Vacuum Ironing",
  "Dry Ironing",
  "Ceramic Soleplate",
  "LED Display",
  "Dual Steam Adjustment",
  "Dual Vacuum Adjustment",
  "Automatic Shut-Off",
  "Water Shortage Protection",
  "Overheat Protection",
];

const relatedProducts = [
  { model: "9003", name: "9003 Vacuum Steamer", image: "/images/products/steam-iron-2.png" },
  { model: "9004", name: "9004 Vacuum Steamer", image: "/images/products/steam-iron-3.png" },
  { model: "9005", name: "9005 Vacuum Steamer", image: "/images/products/steam-iron-4.png" },
];

const oemItems = ["Logo Customization", "Color Options", "Packaging Design", "Mass Production Support"];

export default function P9002Page() {
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
    <div className="bg-[#050507] text-white min-h-screen">
      {/* Back */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-4">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>

      {/* 1. Hero */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-3">Vacuum Garment Steamer</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">9002</h1>
          <h2 className="text-xl text-white/70 mt-2">9002 Vacuum Garment Steamer</h2>
          <p className="text-white/50 mt-2 text-sm">Vacuum Steam Technology<br/>Professional Garment Care</p>

          <p className="mt-6 text-white/60 leading-relaxed max-w-lg">
            Model 9002 combines powerful steam and vacuum technology for professional garment care. 
            Featuring a ceramic soleplate, dual steam levels, dual vacuum levels, LED display and a detachable 400ml water tank, 
            it delivers efficient and convenient ironing performance for both home and OEM applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?product=9002" className="px-5 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Request A Quote
            </Link>
            <Link href="/contact" className="px-5 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition inline-flex items-center gap-2">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-[#0d0d12] rounded-2xl overflow-hidden border border-white/8">
          <div className="aspect-square relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <Image src={images[imgIdx]} alt="9002 Vacuum Garment Steamer Black" fill className="object-contain p-4" unoptimized />
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition">
              <ArrowLeft size={18} />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition">
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="flex gap-2 p-3 overflow-x-auto">
            {images.map((src, i) => (
              <button key={i} onClick={() => setImgIdx(i)} className={\`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition \u0024{i === imgIdx ? "border-[#ff2f7d]" : "border-transparent"}\`}>
                <Image src={src} alt="" width={64} height={64} className="object-cover w-full h-full" unoptimized />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Video */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center">Experience 9002</h2>
        <p className="text-center text-white/40 text-sm mt-2 mb-8">Vacuum Steam Technology In Action</p>
        <div className="rounded-2xl overflow-hidden border border-white/8 bg-black max-w-2xl mx-auto">
          <video controls className="w-full aspect-video" poster="/images/products/9002/main.jpg" preload="metadata">
            <source src="/videos/9002.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* 3. Key Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="bg-white/4 border border-white/8 rounded-xl p-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Check size={18} className="text-[#ff2f7d] shrink-0" /> {f.title}
              </h3>
              <p className="mt-2 text-sm text-white/60 whitespace-pre-line">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Functions List */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-white/2 rounded-[40px]">
        <h2 className="text-2xl font-bold text-center mb-10">Functions</h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {functions.map((item) => (
            <div key={item} className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-xl border border-white/5">
              <div className="w-2 h-2 rounded-full bg-[#ff2f7d]" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Technical Specifications */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Technical Specifications</h2>
        <div className="max-w-2xl mx-auto bg-white/4 border border-white/8 rounded-2xl overflow-hidden">
          {specs.map(([label, value], i) => (
            <div key={label} className={\`flex justify-between px-6 py-4 \u0024{i < specs.length - 1 ? "border-b border-white/6" : ""}\`}>
              <span className="text-white/50 text-sm">{label}</span>
              <span className="text-white font-medium text-sm text-right max-w-[55%] whitespace-pre-line">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. OEM / ODM */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold">Customize Your Garment Care Products</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {oemItems.map((item) => (
            <div key={item} className="bg-white/4 border border-white/8 rounded-xl p-5 flex items-center gap-3">
              <Check size={16} className="text-[#ff2f7d] shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
        <Link href="/contact?product=9002" className="mt-8 inline-block px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
          Request OEM Quote
        </Link>
      </section>

      {/* 7. Related Products */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/8">
        <h2 className="text-2xl font-bold mb-10">Related Products</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {relatedProducts.map((p) => (
            <div key={p.model} className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden opacity-60">
              <div className="aspect-square bg-[#0d0d12] flex items-center justify-center p-8">
                <Image src={p.image} alt={p.name} width={200} height={200} className="object-contain" unoptimized />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">{p.model}</h3>
                <p className="text-sm text-white/40 mt-1">{p.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="border-t border-white/8 py-20 text-center px-6">
        <h2 className="text-3xl font-bold">Interested in 9002?</h2>
        <p className="mt-3 text-white/50 max-w-md mx-auto">Get factory pricing and customization options.</p>
        <Link href="/contact?product=9002" className="mt-8 inline-block px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
          Send Inquiry
        </Link>
      </section>
    </div>
  );
}
