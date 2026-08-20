import Link from "next/link";
import { ArrowRight, DollarSign, Truck, ShieldCheck, Ruler } from "lucide-react";

export const metadata = {
  title: "B2B Appliance Pricing Guide | Travel Iron & Steamer Costs | XINGYUE",
  description:
    "How wholesale pricing for travel irons and garment steamers is built: materials, certifications, packaging and logistics. Learn what affects factory-direct prices before you request a quote.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why don't manufacturers publish prices for travel irons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B2B pricing depends on model, configuration, quantity, certification and destination. Publishing a single price would be misleading — instead, manufacturers quote per specification and volume.",
      },
    },
    {
      "@type": "Question",
      name: "What information should I include when requesting a quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Target model (or product type), quantity, destination market, plug/voltage requirements, customization needs (logo, colors, packaging) and any certification requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How much does shipping add to the unit cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freight depends on volume, weight, destination and shipping mode — air express (3–5 days) costs more per unit than sea freight (18–25 days). Your quote can be provided FOB or CIF/CFR.",
      },
    },
    {
      "@type": "Question",
      name: "Why is a factory-direct quote lower than a trading company's?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trading companies add margins on top of the factory price. Buying factory-direct removes the middleman markup, which is why we provide itemized factory-direct quotations.",
      },
    },
  ],
};

const costDrivers = [
  {
    icon: Ruler,
    title: "Materials & Structure",
    text: "Soleplate material (ceramic, stainless, aluminum), water tank size, heating element power and body materials drive the base cost. Higher-power and multi-function models cost more to build.",
  },
  {
    icon: ShieldCheck,
    title: "Certifications",
    text: "CE, RoHS, CB and ETL testing and marking add compliance costs. Certified models are typically slightly more expensive but required for EU and North American markets.",
  },
  {
    icon: DollarSign,
    title: "Customization",
    text: "Custom colors, logo printing, bespoke packaging, multi-language manuals and special plug configurations add incremental costs compared to standard configurations.",
  },
  {
    icon: Truck,
    title: "Quantity & Logistics",
    text: "Larger orders unlock better per-unit pricing, and shipping mode (air vs sea) significantly affects landed cost. Quotes are usually FOB or CIF/CFR.",
  },
];

export default function PriceGuidePage() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="pt-32 pb-12 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">Sourcing Guide</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">How B2B Appliance Pricing Works</h1>
        <p className="mt-4 text-white/50 max-w-2xl mx-auto">
          What actually determines the price of a travel iron or garment steamer from a Chinese factory — so you can compare quotes with confidence.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-white/4 border border-white/8 rounded-2xl p-8 md:p-10 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-3">Why There Is No Public Price List</h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              B2B appliance pricing is specification-driven: the same model can vary in price depending on power
              configuration, plug type, certification, packaging and order quantity. Publishing one number would be
              misleading for every other configuration. That is why serious manufacturers quote per project — and why
              the quality of your brief determines the quality of the quote you receive.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">The Four Cost Drivers</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {costDrivers.map((d) => (
                <div key={d.title} className="bg-[#0d0d12] border border-white/8 rounded-xl p-5">
                  <d.icon size={20} className="text-[#ff2f7d] mb-3" />
                  <h3 className="font-bold text-sm mb-2">{d.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{d.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">How to Compare Quotes Fairly</h2>
            <ol className="space-y-3">
              {[
                "Compare like-for-like: same model, same power, same certification, same packaging spec.",
                "Confirm the incoterm — FOB vs CIF/CFR changes what is included in the unit price.",
                "Ask for the price ladder across quantities, not a single price point.",
                "Check what is excluded: customs duties, inland freight and bank fees often appear later.",
                "Verify the supplier is a factory, not a trading company — compare itemized factory-direct quotes.",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/60 leading-relaxed">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d] text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  {t}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Get an Itemized Factory-Direct Quote</h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-5">
              Send us your model, quantity, destination and customization needs — you&apos;ll receive an itemized
              quotation and, for OEM projects, a 3D mockup of your branding. No middleman margins, no hidden lines.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
                Request a Quote <ArrowRight size={15} />
              </Link>
              <Link href="/guides/moq-guide" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
                Read the MOQ Guide
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/guides/size-guide" className="inline-flex items-center gap-2 text-[#ff2f7d] text-sm font-semibold hover:underline">
            Next: Voltage & Size Selection Guide <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
