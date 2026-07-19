"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    name: "Travel Iron",
    products: [
      { model: "ST-718", name: "Travel Iron ST-718", image: "/images/products/ST-718.jpg", features: "Travel size design" },
      { model: "ST-717", name: "Travel Iron ST-717", image: "/images/products/ST-717.jpg", features: "Travel size design" },
      { model: "ST-588", name: "Travel Iron ST-588", image: "/images/products/ST-588.png", features: "Travel size design" },
      { model: "ST-812", name: "Travel Iron ST-812", image: "/images/products/ST-812.png", features: "Travel size design" },
    ],
  },
  {
    name: "Garment Steamer",
    products: [
      { model: "ST-815", name: "Garment Steamer ST-815", image: "/images/products/ST-815.png",
        features: "1800W / 260ml tank / 3 steam adjustments" },
      { model: "6617", name: "Garment Steamer 6617", image: "/images/products/6617.jpg",
        features: "1800W / Ceramic base plate / 260ml tank" },
      { model: "6618", name: "Garment Steamer 6618", image: "/images/products/6618.jpg",
        features: "150ml tank / Stainless steel panel / Foldable" },
      { model: "900A", name: "Garment Steamer 900A", image: "/images/products/900A.png",
        features: "Garment Steamer" },
    ],
  },
  {
    name: "Steam Iron",
    products: [],
    status: "Coming Soon",
  },
  {
    name: "Vacuum Steamer",
    products: [],
    status: "Coming Soon",
  },
];

const bottomModules = [
  { title: "Reliable Quality", desc: "Every product undergoes strict inspection before shipment." },
  { title: "OEM / ODM Support", desc: "Custom branding, packaging and specification for your market." },
  { title: "Strong Production", desc: "35,000 m² factory with 500+ skilled workers." },
  { title: "Global Shipping", desc: "Reliable logistics to over 100 countries worldwide." },
];

export default function ProductsPage() {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-[#050507] text-white min-h-screen">
      <section className="pt-28 pb-12 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
          Our Products
        </h1>
        <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
          Professional garment care solutions built for global brands.
        </p>
      </section>

      <div className="flex justify-center gap-1 px-4 pb-2 overflow-x-auto">
        {categories.map((cat, i) => (
          <button
            key={cat.name}
            onClick={() => setActive(i)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition ${
              i === active
                ? "bg-[#ff2f7d] text-white"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <section className="max-w-6xl mx-auto px-6 py-12">
        {categories[active].products.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories[active].products.map((p) => (
              <div
                key={p.model}
                className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden hover:border-[#ff2f7d]/40 transition group"
              >
                <div className="aspect-square bg-[#0d0d12] flex items-center justify-center p-6">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={300}
                    height={300}
                    className="object-contain w-full h-full"
                    unoptimized
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold">{p.model}</h3>
                  <p className="text-xs text-white/50 mt-1">{p.features}</p>
                  <Link
                    href={`/products/${p.model.toLowerCase()}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#ff2f7d] hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-5xl mb-4">🚀</p>
            <h2 className="text-2xl font-bold text-white/70">Coming Soon</h2>
            <p className="text-white/45 mt-2">
              New {categories[active].name} products are in development.
            </p>
          </div>
        )}
      </section>

      <section className="border-t border-white/8 bg-[#0a0a0e]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bottomModules.map((m) => (
            <div key={m.title}>
              <h3 className="text-base font-bold">{m.title}</h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
