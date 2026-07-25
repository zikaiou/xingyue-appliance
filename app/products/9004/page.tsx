"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Download } from "lucide-react";

const images = [
  "/images/products/9004.jpg",
];

const features = [
  { title: "Rotatable Ironing Head", desc: "Versatile rotatable head for optimal angles during both flat and vertical ironing." },
  { title: "3-in-1 Functionality", desc: "Complete care solution with dry ironing, steam ironing, and vacuum suction." },
  { title: "1300W Powerful Heating", desc: "Efficient 1300W power system for rapid heating and strong steam preparation." },
  { title: "Vacuum Grip Tech", desc: "Automatic vacuum suction secures fabric to the plate for professional results." },
];

const specs = [
  ["Model", "9004"],
  ["Category", "Vacuum Garment Steamer"],
  ["Rated Power", "1300W"],
  ["Water Tank", "80ml"],
  ["Steam Output", "15 - 20 g/min"],
  ["Heat-Up Time", "25 Seconds"],
  ["Suction Power", "3 kPa"],
  ["Power Cord", "2.0m"],
  ["Functions", "Dry / Steam / Vacuum / Rotatable Head"],
  ["Vacuum Grip", "Automatic"],
];

const scenes = ["Home Use", "Business Travel", "Boutique Care", "Retail Shop"];
const oemItems = ["Logo Customization", "Color Options", "Packaging Design", "Mass Production Support"];

export default function P9004Page() {
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

      <section className="max-w-6xl mx-auto px-6 py-8 grid gap-10 lg:grid-cols-2 items-start">
        <div className="reveal is-visible">
          <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-3">Vacuum Garment Steamer</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">9004</h1>
          <h2 className="text-xl text-white/70 mt-2">3-in-1 Vacuum Steamer</h2>
          <p className="text-white/50 mt-2 text-sm">Rotatable Head & Vacuum Suction Tech</p>

          <div className="mt-6 flex gap-4">
            {[["1300W", "Power"], ["80ml", "Tank"], ["3kPa", "Suction"]].map(([val, label]) => (
              <div key={label} className="bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-center">
                <p className="text-lg font-bold">{val}</p>
                <p className="text-[10px] text-white/40 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact?product=9004" className="px-5 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Request Quote
            </Link>
            <Link href="#" className="px-5 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition inline-flex items-center gap-2">
              <Download size={15} /> Download Specification
            </Link>
          </div>
        </div>

        <div className="bg-[#0d0d12] rounded-2xl overflow-hidden border border-white/8 reveal is-visible">
          <div className="aspect-square relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <Image src={images[imgIdx]} alt="9004" fill className="object-contain p-4" unoptimized />
          </div>
        </div>
      </section>

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
        <Link href="/contact?product=9004" className="mt-8 inline-block px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">Request OEM Quote</Link>
      </section>

      <section className="border-t border-white/8 py-20 text-center px-6">
        <h2 className="text-3xl font-bold">Interested in 9004?</h2>
        <p className="mt-3 text-white/50 max-w-md mx-auto">Get factory pricing and customization options.</p>
        <Link href="/contact?product=9004" className="mt-8 inline-block px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
          Send Inquiry
        </Link>
      </section>
    </div>
  );
}
