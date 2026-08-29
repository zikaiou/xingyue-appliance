import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/industries/corporate-gifting" },
  title: "Steam Iron Corporate Gifts | Logo Branded Appliances | XINGYUE",
  description:
    "Corporate gifting programs with logo-branded steam irons and travel irons. Custom engraving, gift packaging and volume scheduling from XINGYUE.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you add our company logo to steam irons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer logo printing and engraving on the product body, plus custom gift packaging for corporate programs.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical order size for corporate gifts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Corporate gift programs vary widely. Share your volume and timeline — we'll recommend a configuration and schedule that fits your program.",
      },
    },
    {
      "@type": "Question",
      name: "Can gifts include custom packaging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We produce custom gift boxes, inserts and branding materials to make each unit feel like a premium corporate gift.",
      },
    },
  ],
};

const products = [
  { model: "ST-S1001", img: "/images/products/ST-S1001.jpg", desc: "2800W professional steam iron — a premium, practical corporate gift.", link: "/products/st-s1001" },
  { model: "ST-718", img: "/images/products/ST-718.jpg", desc: "Compact travel iron — the classic executive gift that travels well.", link: "/products/st-718" },
];

const tips = [
  "Confirm logo placement and printing method early — engraving vs printing changes lead time.",
  "Order gift packaging with your brand to elevate the unboxing experience.",
  "Schedule delivery around your program date; confirm lead time 2–3 months ahead.",
];

export default function CorporateGifting() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Corporate Gifting</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Logo-Branded Steam Irons for Corporate Gifting
        </h1>
        <p className="mt-4 text-white/55">
          Practical, premium and personalized — appliance gifts that carry your brand into homes and travel bags.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-S1001.jpg" alt="Steam iron corporate gifts with logo branding - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          The best corporate gifts are used often. Steam irons and travel irons are practical daily tools — and with your logo and premium packaging, they become a brand presence that lasts.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Why Appliances Work as Corporate Gifts</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Unlike one-time branded merchandise, a quality appliance sits on the desk or in the travel bag for years. Each use reinforces the brand. For hotels, banks, airlines and large enterprises, branded irons and steamers deliver ongoing visibility.
          </p>
          <p className="text-white/65 leading-relaxed">
            Program sizes range from hundreds to tens of thousands of units — we schedule production to match your event or season.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Popular Gift Platforms</h2>
          <div className="space-y-4">
            {products.map((p) => (
              <Link key={p.model} href={p.link} className="group flex items-center gap-4 bg-[#0d0d12] border border-white/8 rounded-xl p-4 hover:border-[#ff2f7d]/40 transition">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 relative">
                  <Image src={p.img} alt={`${p.model} corporate gift - XINGYUE`} fill sizes="64px" className="object-contain p-1" />
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
          <h2 className="text-xl font-bold mb-4">Branding &amp; Packaging Options</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Logo options include screen printing and engraving on the product body, plus custom colors. Packaging can carry your brand end to end: gift box, insert, tissue, seal and a personalized card slot.
          </p>
          <p className="text-white/65 leading-relaxed">
            Multi-language manuals and market-specific voltage configurations make the gift ready for international recipients.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Sourcing Tips for Gift Programs</h2>
          <ul className="space-y-3">
            {tips.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm md:text-base text-white/60 leading-relaxed">
                <Check size={16} className="text-[#ff2f7d] mt-1 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-3">Plan Your Gift Program</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Share your volume, branding needs and delivery date — we&apos;ll prepare a program quote with samples.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">Plan My Program <ArrowRight size={15} /></Link>
            <Link href="/industries/beauty-personal-care" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">Beauty &amp; Personal Care</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
