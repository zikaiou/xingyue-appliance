"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Download } from "lucide-react";

const images = [
  "/images/products/st815/main.jpg",
  "/images/products/st815/detail1.jpg",
  "/images/products/st815/detail2.jpg",
  "/images/products/st815/detail3.jpg",
  "/images/products/st815/detail4.jpg",
  "/images/products/st815/detail5.jpg",
];

const features = [
  { title: "Powerful Steam", desc: "1600W high-performance steam for professional results" },
  { title: "Large Water Tank", desc: "340ml capacity for extended steaming without refill" },
  { title: "Fast Heating", desc: "First steam in just 20 seconds" },
  { title: "Dry & Steam Modes", desc: "1 dry iron mode plus 4 steam adjustments for all fabrics" },
];

const specs = [
  ["Model", "ST-815"],
  ["Category", "Garment Steamer"],
  ["Rated Power", "1600W"],
  ["Voltage", "AC 100-120V / 220-240V"],
  ["Water Tank", "340ml"],
  ["Product Size", "257 x 72 x 109 mm"],
  ["Soleplate Size", "130 x 77 mm"],
  ["Plug", "US / EU / BS Plug"],
  ["Cable", "1.8m"],
  ["Modes", "1 Dry Iron + 4 Steam Adjustments"],
  ["First Steam Time", "20 seconds"],
  ["Working Time", "15 minutes"],
];

const scenes = ["Business Travel", "Hotel", "Home Use", "Daily Garment Care"];
const oemItems = ["Logo Customization", "Color Options", "Packaging Design", "Mass Production Support"];

export default function ST815Page() {
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
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-4">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-8 grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-3">Garment Steamer</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">ST-815</h1>
          <h2 className="text-xl text-white/70 mt-2">Powerful Garment Steamer</h2>
          <p className="text-white/50 mt-2 text-sm">Professional Steam For Modern Care</p>
          <div className="mt-6 flex gap-4">
            {[["1600W", "Power"], ["340ml", "Tank"], ["20s", "Heat-Up"]].map(([val, label]) => (
              <div key={label} className="bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-center">
                <p className="text-lg font-bold">{val}</p>
                <p className="text-[10px] text-white/40 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?product=ST-815" className="px-5 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Request Quote
            </Link>
            <Link href="#" className="px-5 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition inline-flex items-center gap-2">
              <Download size={15} /> Download Specification
            </Link>
          </div>
        </div>

        <div className="bg-[#0d0d12] rounded-2xl overflow-hidden border border-white/8">
          <div className="aspect-square relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <Image src={images[imgIdx]} alt="ST-815" fill className="object-contain p-4" unoptimized />
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

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center">Experience ST-815</h2>
        <p className="text-center text-white/40 text-sm mt-2 mb-8">Powerful Steam For Modern Garment Care</p>
        <div className="rounded-2xl overflow-hidden border border-white/8 bg-black max-w-2xl mx-auto">
          <video controls className="w-full aspect-video" poster="/images/products/st815/main.jpg" preload="metadata">
            <source src="/videos/st815.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="bg-white/4 border border-white/8 rounded-xl p-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Check size={18} className="text-[#ff2f7d] shrink-0" /> {f.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

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

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Perfect For</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scenes.map((s) => (<div key={s} className="bg-white/4 border border-white/8 rounded-xl p-6 text-center"><p className="font-semibold">{s}</p></div>))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold">Customize Your Garment Care Products</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {oemItems.map((item) => (
            <div key={item} className="bg-white/4 border border-white/8 rounded-xl p-5 flex items-center gap-3">
              <Check size={16} className="text-[#ff2f7d] shrink-0" /><span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
        <Link href="/contact?product=ST-815" className="mt-8 inline-block px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">Request OEM Quote</Link>
      </section>

      <section className="border-t border-white/8 py-20 text-center px-6">
        <h2 className="text-3xl font-bold">Interested in ST-815?</h2>
        <p className="mt-3 text-white/50 max-w-md mx-auto">Get factory pricing and customization options.</p>
        <Link href="/contact?product=ST-815" className="mt-8 inline-block px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">Send Inquiry</Link>
      </section>
    </div>
  );
}
