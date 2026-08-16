import Link from "next/link";
import { ArrowRight, TrendingUp, Globe, Factory } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    region: "Europe",
    title: "From Zero to 50,000 Units: A European Brand's Travel Iron Line",
    summary: "How a mid-size EU appliance brand launched a complete travel iron range with a proven manufacturer platform, cutting development time from 12 months to 4.",
    metrics: [
      ["4 months", "From concept to container"],
      ["50,000 pcs", "Annual volume after 2 years"],
      ["4.7★", "Verified Alibaba store rating"],
    ],
    story: [
      "A European importer wanted to launch its own travel iron brand but had no product development team. Instead of starting from zero, they chose a proven platform model: selecting an existing XINGYUE design and customizing logo, colors and packaging.",
      "Within 4 months they had a container-ready product — a process that would typically take 12+ months from scratch. The ceramic soleplate and 140ml tank configuration matched their market's preference for compact travel designs.",
    ],
  },
  {
    icon: Globe,
    region: "North America",
    title: "The Vacuum Steamer Early Mover: Winning a New Category",
    summary: "A US retailer positioned itself ahead of the curve by entering the vacuum garment steamer category before mainstream competitors.",
    metrics: [
      ["6 months", "Shelf-to-order cycle"],
      ["New category", "Zero existing competition"],
      ["OEM support", "Custom colors & packaging"],
    ],
    story: [
      "Vacuum garment steamers were a blank space in the North American market. One forward-thinking retailer saw the potential and partnered with XINGYUE to bring a customized 3-in-1 model to market.",
      "With OEM support for custom colors, packaging and plug configuration, they launched a differentiated SKU in a category with almost no competition — capturing early search traffic and retail shelf space.",
    ],
  },
  {
    icon: Factory,
    region: "Latin America",
    title: "Scaling a Garment Steamer Business with Factory-Direct Supply",
    summary: "A regional distributor consolidated its supply chain by sourcing handheld steamers directly from the factory, improving margins and delivery reliability.",
    metrics: [
      ["-18%", "Unit cost vs. trading company"],
      ["93.9%", "On-time delivery rate"],
      ["100+", "Countries served by XINGYUE"],
    ],
    story: [
      "A Latin American distributor previously sourced through trading companies, paying markups and facing unpredictable delivery. They switched to factory-direct supply from XINGYUE for their handheld garment steamer line.",
      "Direct sourcing cut unit costs by 18%, while the factory's 93.9% on-time delivery rate stabilized their inventory planning. Quality scores of 4.9 on product performance gave their retail partners confidence.",
    ],
  },
];

export const metadata = {
  title: "Case Studies | XINGYUE Garment Care Manufacturer",
  description: "Real-world OEM and wholesale success stories with XINGYUE: travel iron lines, vacuum steamer early entries and factory-direct garment steamer sourcing.",
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <section className="pt-32 pb-12 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">Case Studies</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">How Brands Grow with XINGYUE</h1>
        <p className="mt-4 text-white/50 max-w-xl mx-auto">
          Real sourcing models our partners use — from OEM launches to new-category first movers.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 space-y-8">
        {cases.map((c, idx) => (
          <article key={idx} className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden hover:border-[#ff2f7d]/40 transition">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#ff2f7d]/15 flex items-center justify-center">
                  <c.icon size={20} className="text-[#ff2f7d]" />
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-white/60">{c.region}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold leading-snug">{c.title}</h2>
              <p className="mt-3 text-white/55 leading-relaxed">{c.summary}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {c.metrics.map(([v, l]) => (
                  <div key={l} className="bg-[#0d0d12] border border-white/8 rounded-xl p-4 text-center">
                    <p className="text-lg font-black text-[#ff2f7d]">{v}</p>
                    <p className="text-xs text-white/45 mt-1">{l}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {c.story.map((p, i) => (
                  <p key={i} className="text-sm text-white/60 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </article>
        ))}

        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold">Your Success Story Could Be Next</h2>
          <p className="mt-3 text-white/50 max-w-md mx-auto text-sm">
            Start your OEM or wholesale project with a proven manufacturer.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
