import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const sections = [
  {
    title: "1. Understand Wholesale Pricing Structure",
    body: [
      "Travel iron wholesale pricing depends on specification, order volume and customization. As a general benchmark, compact travel irons with ceramic soleplates range from $8-15 FOB for quantities of 1,000+ units, while premium models with advanced steam systems sit higher. The key is requesting a clear tiered price list: 1,000 / 5,000 / 10,000 units.",
      "Always confirm what the FOB price includes: product, standard packaging, carton and export documentation. Some suppliers quote ex-factory and surprise you with packaging costs later. A transparent wholesale supplier — like XINGYUE — states the full cost structure upfront.",
    ],
  },
  {
    title: "2. Choose the Right Product Mix for Your Market",
    body: [
      "Wholesalers succeed by matching product mix to market demand. European buyers favor compact dual-function travel irons with ceramic soleplates; North American importers prioritize 110V configurations; emerging markets often lead with value-priced non-stick models.",
      "Our travel iron range covers all tiers: the ST-718 and ST-717 for core volume, the ST-588 with dry & steam function, the ST-812 and ST-8807 for premium positioning, and the ST-817 with digital display for the tech-driven segment. A wholesale order can mix models to spread risk and test demand.",
    ],
  },
  {
    title: "3. Verify MOQ and Production Flexibility",
    body: [
      "Minimum order quantities (MOQ) vary by model and customization level. Standard MOQs typically start at 500-1,000 units per model, but mixed-model orders and blank (non-branded) units often allow lower entry points. Ask about combined MOQs — many suppliers accept a total order spread across models.",
      "Also clarify production lead time: 30-45 days after sample approval is typical. Factor this into your seasonal planning — if you target the pre-holiday retail window, place orders 2-3 months ahead.",
    ],
  },
  {
    title: "4. Logistics and Container Planning",
    body: [
      "Travel irons are compact, so container efficiency matters for landed cost. Confirm carton dimensions, quantity per carton and container loading figures when comparing quotes. As an example, many of our travel iron models fit approximately 4,000-9,000 pcs per 40HQ container depending on carton size.",
      "Choose your incoterm: FOB works well with a trusted freight forwarder; CIF or DDP suits importers who prefer a one-stop solution. Ask your supplier for the loading calculation sheet to budget freight accurately.",
    ],
  },
  {
    title: "5. Quality Consistency Across Batches",
    body: [
      "The greatest risk in wholesale sourcing is batch-to-batch inconsistency. Establish your QC expectations in the contract: pre-shipment inspection, sample retention, and defect tolerance. Work with suppliers who maintain strict multi-stage checks — material inspection, assembly testing, steam performance test and final audit.",
      "Our production process is organized around documented specifications, sample approval and multi-stage quality checks. Ask any supplier for current quality and delivery documentation before committing.",
    ],
  },
  {
    title: "6. Build a Long-Term Wholesale Partnership",
    body: [
      "The best wholesale relationships are partnerships, not transactions. A dedicated supplier offers stable pricing for repeat orders, early access to new models and honest supply-chain advice. Over time, you can negotiate better terms as volumes grow.",
      "At XINGYUE, wholesale buyers can discuss factory-direct supply, OEM upgrade paths and private-label customization. Start with a focused product line, then expand the range as your commercial requirements develop.",
    ],
  },
];

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/blog/travel-iron-wholesale" },
  title: "How to Import Travel Irons Wholesale from China | Travel Iron Wholesale Supplier XINGYUE",
  description: "Travel iron wholesale guide: pricing structure, MOQ, product mix, container planning and batch quality. Source travel irons wholesale factory-direct from XINGYUE China.",
};

export default function TravelIronWholesale() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Wholesale Guide</span>
          <span>7 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          How to Import Travel Irons Wholesale from China
        </h1>
        <p className="mt-4 text-white/55">
          Pricing, MOQ, product mix, container planning and batch quality — the complete wholesale sourcing playbook.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
          <div className="aspect-square relative">
            <Image src="/images/products/ST-718.jpg" alt="Import travel irons wholesale from China - travel iron wholesale supplier XINGYUE" fill className="object-contain p-6" unoptimized />
          </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Travel irons are a steady wholesale category: compact, high-turnover and demanded year-round by travelers. But profitable wholesale importing depends on getting pricing, product mix and logistics right. This guide walks importers through the six decisions that separate successful travel iron wholesalers from one-time buyers.
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
          <h2 className="text-xl font-bold mb-6">Our Wholesale Travel Iron Range</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { model: "ST-718", img: "/images/products/ST-718.jpg", desc: "Core volume model, 650g, ceramic soleplate" },
              { model: "ST-8807", img: "/images/products/ST-8807.jpg", desc: "Premium 1300W powerful steam model" },
              { model: "ST-817", img: "/images/products/ST-817.png", desc: "Digital display for the tech-driven segment" },
              { model: "ST-812", img: "/images/products/ST-812.png", desc: "Lightweight with 160ml tank" },
            ].map((p) => (
              <Link key={p.model} href={`/products/${p.model.toLowerCase()}`} className="group flex items-center gap-4 bg-[#0d0d12] border border-white/8 rounded-xl p-4 hover:border-[#ff2f7d]/40 transition">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 relative">
                  <Image src={p.img} alt={`${p.model} travel iron wholesale from XINGYUE`} fill className="object-contain p-1" unoptimized />
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
          <h2 className="text-2xl font-bold">Request Wholesale Pricing</h2>
          <p className="mt-3 text-white/50 max-w-md mx-auto text-sm">
            Get tiered wholesale prices, MOQ details and container loading plans within 24 hours.
          </p>
          <Link href="/contact?product=Travel%20Iron" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </section>
      </article>
    </div>
  );
}
