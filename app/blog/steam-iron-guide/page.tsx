import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const sections = [
  {
    title: "1. Power: Matching Wattage to Your Market's Grid",
    body: [
      "Steam iron power ratings vary dramatically — from 1200W for compact models up to 2800-3000W for full-size professional units. Higher wattage means faster heat-up and stronger steam, but it also increases energy draw, which matters in markets with higher electricity costs or stricter efficiency expectations.",
      "Always confirm the voltage configuration for your target market. Europe, Asia and Australia use 220-240V grids where 2800W models shine; North America and Japan use 110-127V, requiring lower-wattage versions. Our ST-S1001 offers a 1200-2800W configuration range, while the ST-S1002 delivers up to 3000W for premium household positioning.",
    ],
  },
  {
    title: "2. Soleplate: The Surface That Meets the Fabric",
    body: [
      "The soleplate determines glide smoothness, heat distribution and long-term durability. Ceramic offers the smoothest glide and excellent scratch resistance — the premium choice for mid-to-high-end markets. Non-stick (Teflon-coated) plates are budget-friendly and easy to maintain, ideal for value-driven lines. Stainless steel sits between the two on both price and performance.",
      "Consider offering the same model with multiple soleplate options, as we do with the ST-S1001 (ceramic, non-stick or stainless steel). This lets you address different market tiers without developing separate SKUs.",
    ],
  },
  {
    title: "3. Water Tank: Runtime vs. Refill Frequency",
    body: [
      "Tank capacity directly affects how long the iron runs before a refill. Compact irons typically carry 120-200ml, while full-size household models range from 300-420ml. A larger tank suits markets where consumers iron multiple garments in one session; a smaller tank keeps the iron lighter and more maneuverable.",
      "Our ST-S1001 and ST-S1003 feature a 330ml tank — a balanced choice for most household use — while the ST-S1002 offers 420ml for heavy-duty sessions. If your target consumers iron infrequently, smaller tanks are perfectly adequate and reduce shipping weight.",
    ],
  },
  {
    title: "4. Steam Functions: What to Specify",
    body: [
      "Beyond basic steam, modern irons differentiate through function sets. Key functions to specify when sourcing: dry ironing (steam off), adjustable steam (fabric-matched output), burst of steam (stubborn creases), spray (moistening before ironing), vertical steam (hanging garments and curtains), self-clean (mineral scale removal), anti-calc (reduced limescale), anti-drip (no water stains on delicate fabrics) and auto shut-off (safety).",
      "Function selection should follow your market positioning. Premium European brands typically require the full set — anti-calc and anti-drip are near-mandatory for EU retail. Value lines can focus on the essentials to control cost. The ST-S1004, for example, adds a self-clean system as its headline differentiator.",
    ],
  },
  {
    title: "5. Certifications & Safety Compliance",
    body: [
      "Steam irons are electrical appliances, so certification compliance is non-negotiable. CE and RoHS are required for European markets, CB provides international recognition, and ETL/UL is needed for North America. Confirm your supplier holds current, model-specific certificates — not generic ones — before placing an order.",
      "Safety features like auto shut-off and overheat protection are increasingly expected by retailers and regulators. Ensure the models you source include them, and request the relevant certificates during quotation for your compliance team to review.",
    ],
  },
  {
    title: "6. Carton & Container Planning",
    body: [
      "Steam irons are bulky, so logistics planning matters. Review the carton dimensions and quantity per carton when comparing quotes — these directly affect your shipping cost per unit. For example, our ST-S1001 packs 10 pcs per carton (645×310×335mm), fitting approximately 4,100 pcs per 20GP container, 8,600 pcs per 40GP and 9,650 pcs per 40HQ.",
      "Ask suppliers for these container loading figures at the quotation stage. A transparent manufacturer provides exact carton sizes and loading calculations, helping you budget freight accurately from day one.",
    ],
  },
];

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/blog/steam-iron-guide" },
  title: "How to Choose a Steam Iron for Your Market | XINGYUE China",
  description: "Steam iron sourcing guide: power, soleplate, tank, steam functions and container planning. Source steam irons from XINGYUE, professional China manufacturer.",
};

export default function SteamIronGuide() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
          <ArrowLeft size={16} /> Back to Guide
        </Link>
      </div>

      <header className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
          <span>August 3, 2026</span>
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Sourcing Guide</span>
          <span>7 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          How to Choose a Steam Iron for Your Market
        </h1>
        <p className="mt-4 text-white/55">
          Power, soleplate, tank capacity, steam functions, certifications and container planning — the six numbers that define a winning steam iron line.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
          <div className="aspect-square relative">
            <Image src="/images/products/ST-S1001.jpg" alt="How to choose steam iron for your market - XINGYUE manufacturer guide" fill className="object-contain p-4" unoptimized />
          </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          The steam iron remains the backbone of garment care in most households — and a steady, high-volume category for importers. But with wattage ranging from 1200W to 3000W and function lists growing every year, choosing the right specification for your market takes careful comparison. This guide covers the six factors we review with every importer of steam irons.
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
          <h2 className="text-xl font-bold mb-6">Explore Our Steam Iron Range</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { model: "ST-S1001", img: "/images/products/ST-S1001.jpg", desc: "2800W, 330ml tank, ceramic/non-stick/steel options" },
              { model: "ST-S1002", img: "/images/products/ST-S1002.jpg", desc: "3000W premium, 420ml tank, auto shut-off" },
              { model: "ST-S1003", img: "/images/products/ST-S1003.jpg", desc: "2800W with ceramic & non-stick soleplate options" },
              { model: "ST-S1004", img: "/images/products/ST-S1004.jpg", desc: "2800W self-clean system with anti-calc" },
            ].map((p) => (
              <Link key={p.model} href={`/products/${p.model.toLowerCase()}`} className="group flex items-center gap-4 bg-[#0d0d12] border border-white/8 rounded-xl p-4 hover:border-[#ff2f7d]/40 transition">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 relative">
                  <Image src={p.img} alt={`${p.model} steam iron from XINGYUE manufacturer`} fill className="object-contain p-1" unoptimized />
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

        <p className="my-8 text-center text-sm text-white/55">See the current <Link href="/products/steam-irons" className="text-[#ff2f7d] hover:underline">steam iron product range</Link> or <Link href="/oem" className="text-[#ff2f7d] hover:underline">discuss an OEM steam iron program</Link> with XINGYUE.</p>

        {/* CTA */}
        <section className="text-center py-10">
          <h2 className="text-2xl font-bold">Ready to Source Steam Irons?</h2>
          <p className="mt-3 text-white/50 max-w-md mx-auto text-sm">
            Get factory pricing, samples and container loading plans within 24 hours.
          </p>
          <Link href="/contact?product=Steam%20Iron" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </section>
      </article>
    </div>
  );
}
