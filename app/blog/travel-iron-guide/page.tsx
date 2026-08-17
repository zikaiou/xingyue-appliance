import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const sections = [
  {
    title: "1. Voltage Compatibility: The #1 Mistake Importers Make",
    body: [
      "Travel irons are sold across markets with fundamentally different power grids. Europe, Asia and Australia run on 220-240V, while North America and Japan use 110-127V. An iron designed only for 220V will either fail to heat properly or burn out immediately in the US.",
      "Before placing a bulk order, confirm with your supplier which voltage configuration you need. Many professional factories, including XINGYUE, manufacture both 220-240V and 110-127V versions of the same model. Dual configurations must be clearly specified in your purchase contract, along with the plug type — EU, US, BS or AU.",
    ],
  },
  {
    title: "2. Soleplate Materials: Ceramic vs. Non-Stick vs. Stainless Steel",
    body: [
      "The soleplate is the heart of any iron — it directly touches the garment and determines smoothness, heat distribution and durability.",
      "Ceramic soleplates offer the smoothest glide and excellent scratch resistance, making them the premium choice. Non-stick (Teflon-coated) plates are budget-friendly and easy to clean, ideal for high-volume promotional lines. Stainless steel delivers durability at a mid-range price point.",
      "Your target market's buying preference should drive the specification. For example, European brands often emphasize ceramic for perceived quality, while price-sensitive emerging markets frequently favor non-stick options.",
    ],
  },
  {
    title: "3. Water Tank Capacity: Balancing Weight and Convenience",
    body: [
      "Tank size is a classic trade-off. A larger tank (190-400ml) means fewer refills during long ironing sessions, which retail consumers appreciate. However, it adds weight and bulk — a critical consideration for travel-focused products.",
      "Look at your product positioning: a compact travel iron typically carries a 120-190ml tank, while full-size household steam irons often feature 300-420ml tanks. Our ST-812 travel iron, for example, balances portability with a 160ml tank, while the ST-S1002 household model offers a generous 420ml capacity.",
    ],
  },
  {
    title: "4. Steam Performance: What the Specifications Really Mean",
    body: [
      "Steam output is measured in grams per minute (g/min), and this figure directly affects wrinkle-removal performance. A travel iron delivering 14-20g/min is adequate for touch-ups, while household steam irons in the 25-40g/min range handle heavy creases and thicker fabrics.",
      "Also check: heat-up time (how quickly the iron is ready), burst-of-steam function for stubborn wrinkles, vertical steaming for hanging garments, and anti-drip protection to prevent water stains on delicate fabrics.",
    ],
  },
  {
    title: "5. Certifications: The Compliance Checklist for Export",
    body: [
      "Every export market has its own mandatory certifications. CE and RoHS are required for Europe, CB is recognized internationally, and ETL/UL are needed for North America. A reputable manufacturer should provide the relevant certificates for your target markets.",
      "Ask your supplier for up-to-date certification copies during the quotation stage — not after the order is placed. This avoids costly compliance surprises at customs.",
    ],
  },
  {
    title: "6. OEM / ODM: Building Your Own Brand Line",
    body: [
      "Most buyers sourcing travel irons from China are not selling under a global brand — they are building one. A full-service OEM partner handles logo printing, custom colors, bespoke packaging design and even specification adjustments.",
      "At XINGYUE, our OEM process covers concept, industrial design, prototype, testing and mass production. Whether you need 1,000 or 100,000 units, our 35,000m² factory with 500+ workers ensures consistent quality and on-time delivery to over 100 countries.",
    ],
  },
];

export const metadata = {
  title: "How to Choose a Travel Iron for Global Markets | Travel Iron Manufacturer XINGYUE",
  description: "Travel iron manufacturer guide: voltage compatibility, ceramic soleplate, tank capacity and OEM options. Source professional travel irons factory-direct from XINGYUE China.",
};

export default function TravelIronGuide() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      {/* Back */}
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
          <ArrowLeft size={16} /> Back to Guide
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
          <span>August 3, 2026</span>
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Sourcing Guide</span>
          <span>6 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          How to Choose a Travel Iron for Global Markets: A Manufacturer's Guide
        </h1>
        <p className="mt-4 text-white/55">
          Written by the XINGYUE team — professional travel iron & garment steamer manufacturer with 16+ years of export experience.
        </p>
      </header>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-718.jpg" alt="How to choose travel iron for global markets - XINGYUE manufacturer guide" fill className="object-contain p-6" unoptimized />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Sourcing a travel iron for your market is more than comparing prices. Voltage systems, soleplate materials, tank capacities and certifications all determine whether your product succeeds — or comes back as a wave of returns. This guide walks importers through the six factors we consider essential, based on 16 years of manufacturing for buyers in over 100 countries.
        </p>

        {sections.map((s, idx) => (
          <section key={idx} className="mb-10">
            <h2 className="text-xl font-bold mb-4">{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="text-white/65 leading-relaxed mb-4">{p}</p>
            ))}
          </section>
        ))}

        {/* Product Recommendations */}
        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-6">Explore Our Travel Iron Range</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { model: "ST-718", img: "/images/products/ST-718.jpg", desc: "650g compact travel iron with ceramic soleplate" },
              { model: "ST-812", img: "/images/products/ST-812.png", desc: "160ml tank, 1300W, portable garment care" },
              { model: "ST-8807", img: "/images/products/ST-8807.jpg", desc: "1300W powerful steam for global travelers" },
              { model: "ST-817", img: "/images/products/ST-817.png", desc: "LCD display with 4-range fabric control" },
            ].map((p) => (
              <Link key={p.model} href={`/products/${p.model.toLowerCase()}`} className="group flex items-center gap-4 bg-[#0d0d12] border border-white/8 rounded-xl p-4 hover:border-[#ff2f7d]/40 transition">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 relative">
                  <Image src={p.img} alt={`${p.model} travel iron from XINGYUE manufacturer`} fill className="object-contain p-1" unoptimized />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm">{p.model}</p>
                  <p className="text-xs text-white/45 mt-1 line-clamp-2">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-[#ff2f7d] mt-2">
                    View Details <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-10">
          <h2 className="text-2xl font-bold">Ready to Source with a Reliable Partner?</h2>
          <p className="mt-3 text-white/50 max-w-md mx-auto text-sm">
            Get factory pricing, samples and OEM consultation within 24 hours.
          </p>
          <Link href="/contact?product=Travel%20Iron" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </section>
      </article>
    </div>
  );
}
