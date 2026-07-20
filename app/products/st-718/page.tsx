"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const images = [
  "/images/products/st718/main.jpg",
  "/images/products/st718/detail1.jpg",
  "/images/products/st718/detail2.jpg",
  "/images/products/st718/detail3.jpg",
  "/images/products/st718/detail4.jpg",
  "/images/products/st718/detail5.jpg",
  "/images/products/st718/detail6.jpg",
];

const features = [
  { title: "Compact Travel Design", desc: "Lightweight at only 650g, designed for effortless packing and portability." },
  { title: "Ceramic Soleplate", desc: "Smooth glide with even heat distribution for professional ironing results." },
  { title: "Powerful Steam Output", desc: "From 14g to 20g/min steam output, removing wrinkles efficiently." },
  { title: "Fast Heating", desc: "Ready to use in seconds with 1000W power, saving time on every use." },
];

const specs = [
  ["Category", "Travel Iron"],
  ["Material", "Ceramic Base Plate"],
  ["Product Size", "232 x 79 x 98 mm"],
  ["Panel Size", "131 x 78 mm"],
  ["Net Weight", "650g"],
  ["Rated Power", "1000W"],
  ["Cable Length", "1.8m"],
  ["Plug", "EU Plug"],
  ["Tank Capacity", "140ml"],
  ["Steam Output", "1st 14g / 2nd 15g / 3rd 17g / 4th 20g"],
];

export default function ST718Page() {
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

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-3">Travel Iron</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">ST-718</h1>
          <h2 className="text-xl text-white/60 mt-2">Compact Travel Iron</h2>
          <p className="mt-6 text-white/70 leading-relaxed max-w-lg">
            A lightweight, portable ironing solution designed for travel and everyday use. 
            Compact yet powerful, delivering professional results wherever you go.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/contact?product=ST-718" className="px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Request Quote
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Gallery */}
        <div className="relative bg-[#0d0d12] rounded-2xl overflow-hidden border border-white/8">
          <div className="aspect-square relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <Image src={images[imgIdx]} alt="ST-718" fill className="object-contain p-4" unoptimized />
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition">
              <ArrowLeft size={18} />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition">
              <ArrowRight size={18} />
            </button>
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

      {/* Video */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">Experience ST-718</h2>
        <div className="rounded-2xl overflow-hidden border border-white/8 bg-black">
          <video controls className="w-full" poster="/images/products/st718/main.jpg" preload="metadata">
            <source src="/videos/st718.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Features */}
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

      {/* Specs */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Technical Specifications</h2>
        <div className="max-w-2xl mx-auto bg-white/4 border border-white/8 rounded-2xl overflow-hidden">
          {specs.map(([label, value], i) => (
            <div key={label} className={`flex justify-between px-6 py-4 ${i < specs.length - 1 ? "border-b border-white/6" : ""}`}>
              <span className="text-white/50 text-sm">{label}</span>
              <span className="text-white font-medium text-sm text-right">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* OEM */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold">OEM & ODM Service</h2>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">
          Custom branding, packaging, and specification tailored to your market needs. 
          Professional B2B manufacturing with flexible order quantities.
        </p>
        <Link href="/contact?product=ST-718" className="mt-8 inline-block px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
          Inquire Now
        </Link>
      </section>
    </div>
  );
}
