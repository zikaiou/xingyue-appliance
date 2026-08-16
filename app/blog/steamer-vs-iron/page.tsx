import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const comparisons = [
  {
    title: "Steam Iron vs. Garment Steamer: The Core Difference",
    body: [
      "A steam iron presses fabric flat against a board using heat and pressure — delivering crisp, sharp creases ideal for shirts and formal wear. A garment steamer relaxes wrinkles with hot steam while the garment hangs, requiring no ironing board and touching fabric more gently.",
      "For wholesalers, the practical question is: which does your market buy? Steam irons remain the household staple with the largest installed base. Garment steamers are growing faster, favored by apartment dwellers, travelers, and boutique retailers who value convenience over razor-sharp creases.",
    ],
  },
  {
    title: "Comparison: Key Factors at a Glance",
    body: [
      "Heat-up time: a good steam iron warms up in 20-60 seconds; a handheld steamer in 20-30 seconds. Wrinkle removal: irons produce sharper results on heavy fabrics; steamers handle delicate materials safely. Fabric safety: steamers are gentler — they rarely scorch silk or synthetics. Ease of use: steamers work upright on hangers; irons need a board. Storage: both are compact, but steamers are often more travel-friendly.",
      "Cost is also a factor: entry-level travel irons and handheld steamers sit in a similar price band, but premium steam irons (2800-3000W) command higher retail prices, while vacuum steamers represent the premium end of the steamer category.",
    ],
  },
  {
    title: "When Your Market Should Choose a Steam Iron",
    body: [
      "Choose a steam iron line if your target customers are traditional households, hotels with ironing services, or regions where formal dress culture is strong. Steam irons dominate when crisp creases matter — business shirts, cotton uniforms and table linens.",
      "Our steam iron range (ST-S1001 to ST-S1004) covers 2800-3000W with ceramic or non-stick soleplates, 330-420ml tanks and features like self-clean and anti-drip. These are proven sellers for household and hotel channels.",
    ],
  },
  {
    title: "When a Garment Steamer Wins",
    body: [
      "Choose a garment steamer line if your market skews toward young urban consumers, travelers, or clothing retailers. Steamers win on convenience: no board, no setup, quick touch-ups before work or after unpacking a suitcase.",
      "Our handheld steamers (ST-815, 6617, 900A, 6618) range from 1500-1800W with ceramic or stainless panels and 150-340ml tanks. For a differentiating premium tier, the vacuum steamer line (9002-9005) combines steam with suction for professional results — a category with minimal competition.",
    ],
  },
  {
    title: "The Wholesaler's Strategy: Stock Both",
    body: [
      "The most successful wholesalers carry both categories and position them differently: steam irons as the volume household staple, garment steamers as the growth category for modern consumers. This spreads risk and captures demand across demographics.",
      "When sourcing, ask your supplier for a combined-quantity discount across categories. At XINGYUE, mixed orders of travel irons and garment steamers share the same production line flexibility, letting you test both markets with a single purchase.",
    ],
  },
  {
    title: "Next-Generation Choice: The Vacuum Garment Steamer",
    body: [
      "For buyers looking past the iron-vs-steamer binary, the vacuum garment steamer offers the best of both: steam to relax fibers plus suction to hold fabric taut for pressing-table results — without a board. It appeals to boutique owners and premium consumers who want professional quality at home.",
      "This is a young category, which means early entrants capture search traffic and shelf space before the market saturates. Our 9002-9005 vacuum platforms are ready for OEM customization today.",
    ],
  },
];

export const metadata = {
  title: "Steam Iron vs Garment Steamer: Which to Source? | XINGYUE",
  description: "Steam iron vs garment steamer comparison for wholesalers: heat-up, wrinkle removal, fabric safety, cost and market strategy. Source both from XINGYUE China manufacturer.",
};

export default function SteamerVsIron() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
          <ArrowLeft size={16} /> Back to Guide
        </Link>
      </div>

      <header className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
          <span>August 2026</span>
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Buyer Guide</span>
          <span>6 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Steam Iron vs Garment Steamer: Which Should You Source?
        </h1>
        <p className="mt-4 text-white/55">
          A side-by-side comparison for wholesalers deciding between the household staple and the growth category — and why the best strategy may be both.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden mb-10">
          <div className="aspect-[16/9] relative">
            <Image src="/images/products/ST-815.png" alt="Steam iron vs garment steamer comparison - XINGYUE manufacturer" fill className="object-contain p-4" unoptimized />
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Steam iron or garment steamer? It is one of the most common questions we hear from importers — and the answer shapes their entire product line. This comparison breaks down the differences, when each wins, and why forward-thinking wholesalers stock both.
        </p>

        {comparisons.map((s, idx) => (
          <section key={idx} className="mb-10">
            <h2 className="text-xl font-bold mb-4">{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="text-white/65 leading-relaxed mb-4">{p}</p>
            ))}
          </section>
        ))}

        {/* Product Recommendations */}
        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-6">Source Both Categories from XINGYUE</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { model: "ST-S1001", img: "/images/products/ST-S1001.jpg", desc: "2800W steam iron, 330ml tank" },
              { model: "ST-815", img: "/images/products/ST-815.png", desc: "1600W handheld steamer" },
              { model: "9002", img: "/images/products/9002.jpg", desc: "1500W vacuum steamer" },
              { model: "ST-718", img: "/images/products/ST-718.jpg", desc: "Compact travel iron" },
            ].map((p) => (
              <Link key={p.model} href={`/products/${p.model.toLowerCase()}`} className="group flex items-center gap-4 bg-[#0d0d12] border border-white/8 rounded-xl p-4 hover:border-[#ff2f7d]/40 transition">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 relative">
                  <Image src={p.img} alt={`${p.model} from XINGYUE manufacturer`} fill className="object-contain p-1" unoptimized />
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
          <h2 className="text-2xl font-bold">Build Your Mixed Product Line</h2>
          <p className="mt-3 text-white/50 max-w-md mx-auto text-sm">
            Get combined-quantity pricing across irons and steamers within 24 hours.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </section>
      </article>
    </div>
  );
}
