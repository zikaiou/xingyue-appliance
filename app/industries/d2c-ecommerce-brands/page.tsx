import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/industries/d2c-ecommerce-brands" },
  title: "Garment Steamer for D2C E-commerce Brands | Low MOQ Private Label | XINGYUE",
  description:
    "Garment steamers and travel irons for D2C e-commerce brands. Launch your own product line with low-MOQ private label and e-commerce-ready packaging.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the MOQ for a D2C brand launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our MOQ typically starts at 500–1,000 pieces per model. Mixed-model orders let you test several SKUs in one launch.",
      },
    },
    {
      "@type": "Question",
      name: "Can you provide e-commerce-ready packaging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We prepare retail packaging, cartons and product photography support designed for online selling, including shelf-ready box design.",
      },
    },
    {
      "@type": "Question",
      name: "Can I test the market with a small first order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Trial orders at or slightly above the minimum, plus pre-production samples, let you validate quality and demand before scaling.",
      },
    },
  ],
};

const products = [
  { model: "ST-588", img: "/images/products/ST-588.png", desc: "Compact travel iron with dry & steam function — a versatile entry SKU for e-commerce.", link: "/products/st-588" },
  { model: "ST-717", img: "/images/products/ST-717.jpg", desc: "Lightweight travel iron, ideal as a high-conversion entry-priced listing.", link: "/products/st-717" },
];

const tips = [
  "Start with mixed-model trial orders to test demand across price points.",
  "Invest in e-commerce packaging and strong product photography — they drive conversion.",
  "Plan fulfillment: confirm carton sizes and master carton quantities for your warehouse.",
];

export default function D2CEcommerceBrands() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
          <ArrowLeft size={16} /> Back to Guides
        </Link>
      </div>

      <header className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">D2C E-commerce</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Garment Care Products for D2C E-commerce Brands
        </h1>
        <p className="mt-4 text-white/55">
          Launch a private label product line with low MOQs, e-commerce-ready packaging and products built to convert online.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-588.png" alt="Garment steamer for D2C e-commerce brands - XINGYUE private label" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          D2C brands win with differentiated products and fast launches. Garment care appliances are proven sellers — and with the right factory partner, you can launch your own line without building a production line.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Low-MOQ Entry, Then Scale</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Our MOQ typically starts at 500–1,000 pieces per model, and mixed-model orders let you test several SKUs in one launch. Trial orders validate quality and demand before you commit to larger volume.
          </p>
          <p className="text-white/65 leading-relaxed">
            Pre-production samples (3–5 business days for existing models) confirm quality before the first PO — and sample costs are credited against the bulk order.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Recommended E-commerce Entry SKUs</h2>
          <div className="space-y-4">
            {products.map((p) => (
              <Link key={p.model} href={p.link} className="group flex items-center gap-4 bg-[#0d0d12] border border-white/8 rounded-xl p-4 hover:border-[#ff2f7d]/40 transition">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 relative">
                  <Image src={p.img} alt={`${p.model} D2C e-commerce SKU - XINGYUE`} fill sizes="64px" className="object-contain p-1" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm">{p.model}</p>
                  <p className="text-xs text-white/45 mt-1 line-clamp-2">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-[#ff2f7d] mt-2">View Details <ArrowRight size={12} /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">E-commerce-Ready Everything</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            From retail packaging and carton design to product photography support, we prepare the assets online selling depends on. Multi-language manuals and compliant labeling (CE/RoHS/CB, ETL available) keep your listings market-ready.
          </p>
          <p className="text-white/65 leading-relaxed">
            Custom branding — logo, colors, unboxing experience — turns a commodity product into a brand experience customers post about.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Sourcing Tips for D2C Brands</h2>
          <ul className="space-y-3">
            {tips.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm md:text-base text-white/60 leading-relaxed">
                <Check size={16} className="text-[#ff2f7d] mt-1 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-3">Launch Your D2C Product Line</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Tell us your niche and target market — we&apos;ll recommend entry SKUs, packaging and a launch schedule that fits your runway.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">Start Your Launch <ArrowRight size={15} /></Link>
            <Link href="/industries/home-appliance-brands" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">Home Appliance Brands</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
