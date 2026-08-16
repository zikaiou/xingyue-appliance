import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const questions = [
  {
    q: "Question 1: Do you actually manufacture vacuum steamers?",
    a: "Many suppliers list vacuum steamers on their catalog but outsource production or simply trade them. Ask for factory video of the vacuum steamer assembly line specifically. A genuine vacuum steamer manufacturer — like XINGYUE with our 9002-9005 platform — can show you the pump integration, tank assembly and testing stations in their own facility.",
  },
  {
    q: "Question 2: What suction pressure does the vacuum system deliver?",
    a: "Vacuum performance is measured in kilopascals (kPa), and this number defines real pressing capability. Entry-level units deliver 2.5-3.0 kPa — enough for shirts and blouses. Advanced models reach 5 kPa with dual-level adjustment for heavier fabrics. If a supplier cannot state the kPa figure, they likely do not understand the technology.",
  },
  {
    q: "Question 3: Is the vacuum system integrated or an add-on?",
    a: "The best vacuum steamers integrate the suction system into the product design — internal pump, sealed channels and a soleplate with suction holes engineered together. Some cheaper products bolt on a cosmetic 'vacuum' feature with minimal real suction. Ask for a demo video showing fabric being pulled taut against the panel.",
  },
  {
    q: "Question 4: What is your vacuum steamer MOQ and platform range?",
    a: "Because vacuum steamers are a newer category, MOQs differ from mature steam iron lines. Ask how many platform designs the supplier offers and whether mixed-model orders are accepted. At XINGYUE, our four vacuum steamer platforms (9002-9005) cover retail, professional and portable segments, with OEM customization available.",
  },
  {
    q: "Question 5: Do you provide vacuum steamer certifications?",
    a: "Vacuum steamers are electrical appliances combining heating and suction — certification requirements match steam irons: CE, RoHS, CB for Europe, ETL for North America. Confirm the supplier holds current, model-specific certificates. Early category entrants sometimes lack proper certification; a professional supplier maintains it from day one.",
  },
];

export const metadata = {
  title: "Vacuum Garment Steamer Suppliers: 5 Questions to Ask | XINGYUE",
  description: "Vacuum garment steamer supplier guide: suction pressure, integrated systems, MOQ, platform range and certifications. Partner with a professional vacuum steamer manufacturer XINGYUE.",
};

export default function VacuumSteamerSupplier() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Supplier Guide</span>
          <span>5 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Vacuum Garment Steamer Suppliers: 5 Questions to Ask
        </h1>
        <p className="mt-4 text-white/55">
          Vacuum steamers are a new category — so verifying suppliers matters more than ever. Here are the five questions that separate real manufacturers from traders.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden mb-10">
          <div className="aspect-[16/9] relative">
            <Image src="/images/products/9003.png" alt="Vacuum garment steamer supplier questions - professional vacuum steamer manufacturer XINGYUE" fill className="object-contain p-4" unoptimized />
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          The vacuum garment steamer is one of the fastest-growing niches in garment care — and precisely because it is new, the supply chain is less mature than for steam irons. Some sellers list vacuum steamers without manufacturing them, and quality varies widely. Here are the five questions we recommend every buyer ask a potential vacuum garment steamer supplier.
        </p>

        {questions.map((q, idx) => (
          <section key={idx} className="mb-10">
            <h2 className="text-xl font-bold mb-4">{q.q}</h2>
            <p className="text-white/65 leading-relaxed">{q.a}</p>
          </section>
        ))}

        {/* Product Recommendations */}
        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-6">Our Vacuum Steamer Platform</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { model: "9002", img: "/images/products/9002.jpg", desc: "1500W, 400ml tank, LED display" },
              { model: "9003", img: "/images/products/9003.png", desc: "3-in-1, dual-level suction up to 5kPa" },
              { model: "9004", img: "/images/products/9004.jpg", desc: "Rotatable head, compact 1300W" },
              { model: "9005", img: "/images/products/9005.jpg", desc: "1500W with LED display & ceramic plate" },
            ].map((p) => (
              <Link key={p.model} href={`/products/${p.model.toLowerCase()}`} className="group flex items-center gap-4 bg-[#0d0d12] border border-white/8 rounded-xl p-4 hover:border-[#ff2f7d]/40 transition">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 relative">
                  <Image src={p.img} alt={`${p.model} vacuum garment steamer from XINGYUE supplier`} fill className="object-contain p-1" unoptimized />
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
          <h2 className="text-2xl font-bold">Explore the Vacuum Steamer Category</h2>
          <p className="mt-3 text-white/50 max-w-md mx-auto text-sm">
            Request demo videos, specifications and OEM options from a professional manufacturer.
          </p>
          <Link href="/contact?product=Vacuum%20Garment%20Steamer" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </section>
      </article>
    </div>
  );
}
