import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/blog/garment-steamer-import-tariffs" },
  title: "How to Import Garment Steamers from China: Duties & Tariffs | XINGYUE",
  description:
    "Importing garment steamers from China: HS codes, customs duties, VAT and incoterms explained for importers — and how to plan landed costs before you order.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the HS code for garment steamers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Garment steamers typically fall under the household electro-thermic appliance HS heading (8516) alongside irons. Your customs broker should confirm the exact 8-10 digit code for your destination market.",
      },
    },
    {
      "@type": "Question",
      name: "How are garment steamer duties calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Duties are calculated on the customs value of the goods using the rate that applies to the HS code in your destination country. VAT or sales tax is then applied on top in most markets.",
      },
    },
    {
      "@type": "Question",
      name: "Can the supplier help with customs clearance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suppliers can ship DDP (delivered duty paid) through their freight partners so customs clearance is handled before delivery — ask for a DDP quotation if you prefer a one-stop solution.",
      },
    },
  ],
};

const sections = [
  {
    title: "Start with the Right HS Classification",
    body: [
      "Every import begins with the HS (Harmonized System) code, which determines your duty rate and any compliance checks. Garment steamers and irons generally fall under the household electro-thermic appliance heading (8516 in the international system).",
      "The exact 8–10 digit code varies by destination country, and classification differences can change your duty rate. Confirm the code with a licensed customs broker before shipping — it is a small fee that prevents costly surprises.",
    ],
  },
  {
    title: "Duties, VAT and Other Charges",
    body: [
      "Customs duty is calculated on the customs value of the goods at the rate applicable to your HS code. Most countries then apply VAT or sales tax on top, and some markets add anti-dumping or regulatory levies for specific appliance categories.",
      "Rates change over time and differ by country, so always verify current figures with your broker or the destination customs authority rather than relying on older published numbers.",
    ],
  },
  {
    title: "Choose the Incoterm That Fits Your Setup",
    body: [
      "FOB (Free On Board) keeps logistics in your hands: you arrange freight and clearance with your own forwarder, which suits importers with established supply chains.",
      "CIF or CFR add freight and insurance to the supplier's quote. DDP (Delivered Duty Paid) is the full-service option — the supplier's freight partner handles shipping and customs clearance, and the price covers everything up to your door.",
      "Your choice changes the unit cost comparison, so always compare quotes on the same incoterm.",
    ],
  },
  {
    title: "Compliance Documents to Prepare",
    body: [
      "Standard export documentation includes the commercial invoice, packing list and bill of lading. Destination markets also require compliance evidence: CE for the EU, UL/ETL for the US, and market-specific labels and user manuals in local languages.",
      "Working with a certified factory simplifies this — XINGYUE provides CE, RoHS and CB documentation for European markets and ETL for North America, so your clearance file is complete before shipment.",
    ],
  },
  {
    title: "Plan Landed Cost Before You Order",
    body: [
      "A simple landed-cost formula: unit price + freight per unit + insurance + duties + VAT + inland logistics. Requesting a DDP quote from the supplier gives you the full number in one line.",
      "Then compare against your wholesale or retail price to confirm margin — this is the discipline that separates profitable garment steamer importers from the rest.",
    ],
  },
];

export default function GarmentSteamerImportTariffs() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Import Guide</span>
          <span>7 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          How to Import Garment Steamers from China: Duties &amp; Tariffs
        </h1>
        <p className="mt-4 text-white/55">
          HS codes, customs duties, VAT and incoterms — the clearance side of garment steamer importing, explained in plain terms.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-815.jpg" alt="Import garment steamers from China duties and tariffs - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          The factory price is only part of your landed cost. This guide walks through the customs side of importing garment steamers from China — so your first container clears smoothly and your margin holds.
        </p>

        {sections.map((s, idx) => (
          <section key={idx} className="mb-10">
            <h2 className="text-xl font-bold mb-4">{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="text-white/65 leading-relaxed mb-4">{p}</p>
            ))}
          </section>
        ))}

        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-3">Get a DDP Quote and Skip the Guesswork</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Ask for a delivered-duty-paid quotation — our export team coordinates freight and clearance through experienced partners so you know your full landed cost up front.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Request a DDP Quote <ArrowRight size={15} />
            </Link>
            <Link href="/blog/factory-verification-guide" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Verify Your Factory First
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
