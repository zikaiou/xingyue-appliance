import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "China Factory vs Trading Company for Steam Irons: How to Tell | XINGYUE",
  description:
    "How to tell a genuine Chinese appliance factory from a trading company: price, verification, samples and production evidence — a practical buyer's checklist.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I tell if a supplier is a real factory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask for a live video tour of the production line, request tooling and production photos, and cross-check the company's registration and export history.",
      },
    },
    {
      "@type": "Question",
      name: "Why does it matter if my supplier is a trading company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trading companies add margins on top of factory prices and have less control over quality and lead time — which shows up in higher costs and more variability.",
      },
    },
    {
      "@type": "Question",
      name: "Can trading companies be good partners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some are excellent — but for repeat volume, OEM customization and quality control, a direct factory relationship is almost always stronger.",
      },
    },
  ],
};

const signs = [
  "Factory: shows live production video and accepts scheduled factory audits.",
  "Trading company: shows only office photos or warehouse footage.",
  "Factory: discusses tooling, production lines and QC checkpoints in detail.",
  "Trading company: talks mainly about price, samples and 'other factories'.",
  "Factory: certificate names and model numbers match across documents.",
  "Trading company: certificates are often generic or brand-level, not model-level.",
  "Factory: stable lead times with a production schedule you can verify.",
  "Trading company: lead times that shift when 'the factory' changes.",
];

export default function FactoryVsTradingCompany() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
          <ArrowLeft size={16} /> Back to Guide
        </Link>
      </div>

      <header className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
          <span>August 2026</span>
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Supplier Guide</span>
          <span>6 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          China Factory vs Trading Company: How to Tell the Difference
        </h1>
        <p className="mt-4 text-white/55">
          Four signals that separate a genuine appliance manufacturer from a middleman — and why it matters to your cost and quality.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/6617.jpg" alt="China factory vs trading company how to tell - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Not every supplier who claims to be a factory is one. The difference shows up in price, quality control and lead time — here is how to tell them apart before you commit.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Why the Difference Matters</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Trading companies add margins on top of factory prices, and they have less control over production quality and schedule — the factory you never meet decides what you receive.
          </p>
          <p className="text-white/65 leading-relaxed">
            For trial orders, a good trading company can work. For repeat volume, OEM customization and consistent quality, a direct factory relationship is almost always stronger.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Eight Signals to Check</h2>
          <ul className="space-y-3">
            {signs.map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/65 leading-relaxed bg-[#0d0d12] border border-white/8 rounded-xl p-4">
                <Check size={16} className="text-[#ff2f7d] mt-1 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-3">Run the Full Verification Checklist</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Our factory verification guide covers the complete due-diligence process — including how we invite the same scrutiny.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/factory-verification-guide" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Read the Verification Guide <ArrowRight size={15} />
            </Link>
            <Link href="/factory" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              See Our Factory
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
