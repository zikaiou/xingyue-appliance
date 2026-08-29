import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/industries/dry-cleaning-services" },
  title: "Garment Steamer for Dry Cleaners | Professional Steam Equipment | XINGYUE",
  description:
    "Garment steamers and finishing equipment for dry cleaning services. XINGYUE professional steamers deliver consistent steam output for daily high-volume use.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What steamer do dry cleaners need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dry cleaners need professional steamers with strong, consistent output for daily high-volume use. Models like the 900A with panel steaming suit finishing workstations.",
      },
    },
    {
      "@type": "Question",
      name: "Can dry cleaning equipment be supplied in volume?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We supply multi-unit orders for dry cleaning chains and equipment distributors, with consistent batch quality and spare-parts support.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide warranties for professional use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Warranty terms are confirmed per order based on the model and usage intensity — discuss your expected daily cycles with our team.",
      },
    },
  ],
};

const products = [
  { model: "900A", img: "/images/products/900A.png", desc: "Professional garment steamer with panel steaming — strong output for finishing stations.", link: "/products/900a" },
  { model: "ST-815", img: "/images/products/ST-815.png", desc: "Handheld steamer built for high-frequency professional use and consistent steam.", link: "/products/st-815" },
];

const tips = [
  "Choose steamers with strong, consistent output — daily volume, not occasional use, is the design target.",
  "Confirm spare parts and warranty before ordering; professional equipment must stay running.",
  "Plan voltage and plug configuration for your region, and stock interchangeable accessories.",
];

export default function DryCleaningServices() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Dry Cleaning</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Professional Steaming for Dry Cleaning Services
        </h1>
        <p className="mt-4 text-white/55">
          Consistent steam output, built for daily professional volume — equipment that keeps finishing workstations moving.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/900A.png" alt="Garment steamer for dry cleaners - XINGYUE professional equipment" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Dry cleaning and laundry services finish dozens of garments a day. The equipment has to deliver strong, consistent steam from the first rack to the last — with no drop-off mid-shift.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Built for Daily Professional Volume</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Home steamers are not designed for this duty cycle. Professional models — like the 900A with panel steaming — hold consistent output through repeated use, which is what finishing workstations depend on.
          </p>
          <p className="text-white/65 leading-relaxed">
            When sourcing for a shop or a chain, match equipment to your daily garment volume and confirm the model&apos;s continuous-use capability with the supplier.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Recommended Professional Models</h2>
          <div className="space-y-4">
            {products.map((p) => (
              <Link key={p.model} href={p.link} className="group flex items-center gap-4 bg-[#0d0d12] border border-white/8 rounded-xl p-4 hover:border-[#ff2f7d]/40 transition">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 relative">
                  <Image src={p.img} alt={`${p.model} for dry cleaning - XINGYUE`} fill sizes="64px" className="object-contain p-1" />
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
          <h2 className="text-xl font-bold mb-4">Volume Supply for Chains &amp; Distributors</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Dry cleaning chains and equipment distributors buy multi-unit orders. We support them with consistent batch quality, spare parts and stable lead times — the operational backbone a chain relies on.
          </p>
          <p className="text-white/65 leading-relaxed">
            Share your shop count or annual volume, and we&apos;ll build a supply schedule that matches your rollout.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Sourcing Tips for Professional Buyers</h2>
          <ul className="space-y-3">
            {tips.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm md:text-base text-white/60 leading-relaxed">
                <Check size={16} className="text-[#ff2f7d] mt-1 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-3">Plan Your Professional Equipment Supply</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Tell us your daily volume and shop count — we&apos;ll recommend models and a supply schedule for your operation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">Talk to Our Team <ArrowRight size={15} /></Link>
            <Link href="/industries/hotel-hospitality-laundry" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">Hotel Solutions</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
