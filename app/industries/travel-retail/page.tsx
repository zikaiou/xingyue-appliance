import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/industries/travel-retail" },
  title: "Travel Iron for Travel Retail | Duty-Free & Travel Retail Programs | XINGYUE",
  description:
    "Compact travel irons for travel retail and duty-free programs. XINGYUE supplies 1000W carry-on-friendly irons with voltage configured for every destination market.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes a travel iron suitable for travel retail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compact size, carry-on-friendly weight and reliable performance. Configurations like the ST-718 (1000W, 140ml tank) are the standard for travel retail programs.",
      },
    },
    {
      "@type": "Question",
      name: "Can travel retail programs get branded packaging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Travel retail buyers commonly order custom retail packaging, hang tags and multi-language user manuals for their programs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support duty-free program volumes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support travel retail programs with scheduled multi-unit orders, consistent quality and flexible production timing.",
      },
    },
  ],
};

const products = [
  { model: "ST-718", img: "/images/products/ST-718.jpg", desc: "1000W compact travel iron with 140ml tank and ceramic soleplate — the travel retail standard.", link: "/products/st-718" },
  { model: "ST-8807", img: "/images/products/ST-8807.jpg", desc: "1300W powerful steam model for 220–240V markets and premium positioning.", link: "/products/st-8807" },
];

const tips = [
  "Confirm voltage per destination region — travel retail spans many markets, so plan SKUs by region.",
  "Order retail packaging and hang tags with your program branding for shelf appeal.",
  "Align delivery timing with seasonal travel peaks — order 2–3 months ahead of peak season.",
];

export default function TravelRetail() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Travel Retail</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Compact Travel Irons for Travel Retail &amp; Duty-Free
        </h1>
        <p className="mt-4 text-white/55">
          Carry-on-friendly irons, branded packaging and region-configured SKUs for travel retail programs.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-718.jpg" alt="Travel iron for travel retail and duty free programs - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Travel retail shoppers buy what fits in a carry-on and works reliably anywhere. Compact travel irons tick both boxes — making them a consistent category for duty-free and airport retail programs.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">What Travel Retail Needs</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            The travel retail travel iron is compact, lightweight and dependable — the ST-718 (1000W, 140ml tank, ceramic soleplate) is the standard configuration. For 220–240V markets, the 1300W ST-8807 offers faster heat-up and a premium position.
          </p>
          <p className="text-white/65 leading-relaxed">
            Shelf appeal comes from packaging: custom retail boxes, hang tags and multi-language manuals turn a commodity iron into a travel-retail product.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Recommended Travel Retail Models</h2>
          <div className="space-y-4">
            {products.map((p) => (
              <Link key={p.model} href={p.link} className="group flex items-center gap-4 bg-[#0d0d12] border border-white/8 rounded-xl p-4 hover:border-[#ff2f7d]/40 transition">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 relative">
                  <Image src={p.img} alt={`${p.model} for travel retail - XINGYUE`} fill sizes="64px" className="object-contain p-1" />
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
          <h2 className="text-xl font-bold mb-4">Program Support for Travel Retail</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Travel retail buyers run scheduled programs rather than one-off orders. We support them with multi-unit scheduling, consistent batch quality and flexible production timing around seasonal travel peaks.
          </p>
          <p className="text-white/65 leading-relaxed">
            Voltage and plug configuration follow each destination region, and retail packaging can carry your program&apos;s branding end to end.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Sourcing Tips for Travel Retail Buyers</h2>
          <ul className="space-y-3">
            {tips.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm md:text-base text-white/60 leading-relaxed">
                <Check size={16} className="text-[#ff2f7d] mt-1 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-3">Plan Your Travel Retail Program</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Share your target regions and program volumes — we&apos;ll configure SKUs, packaging and delivery timing for your retail channels.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">Start a Program <ArrowRight size={15} /></Link>
            <Link href="/industries/home-appliance-brands" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">Home Appliance Brands</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
