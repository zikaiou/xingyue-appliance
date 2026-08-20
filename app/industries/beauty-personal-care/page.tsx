import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Travel Iron for Beauty Brands | Beauty & Personal Care Gifts | XINGYUE",
  description:
    "Compact travel irons and steamers for beauty and personal care brands — co-branded sets, gift packaging and retail-ready SKUs from XINGYUE.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can beauty brands co-brand travel irons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support co-branding with your logo and colors, and can assemble sets combining appliances with beauty accessories.",
      },
    },
    {
      "@type": "Question",
      name: "What travel iron suits beauty brand gifting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compact, travel-friendly models with premium finishes — like the ST-8808 and ST-812 — suit co-branded gift programs.",
      },
    },
    {
      "@type": "Question",
      name: "Can you provide gift-ready packaging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Custom gift boxes, inserts and branding materials are produced to match your brand identity.",
      },
    },
  ],
};

const products = [
  { model: "ST-8808", img: "/images/products/ST-8808.png", desc: "Premium compact travel iron with a refined finish — a natural fit for beauty co-branding.", link: "/products/st-8808" },
  { model: "ST-812", img: "/images/products/ST-812.png", desc: "Lightweight travel iron with 160ml tank — an elegant, giftable format.", link: "/products/st-812" },
];

const tips = [
  "Choose models with premium finishes — the unboxing experience matters in beauty retail.",
  "Plan co-branded sets early; combined appliance + accessory kits need longer lead time.",
  "Confirm gift packaging design and sample before mass production.",
];

export default function BeautyPersonalCare() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Beauty &amp; Personal Care</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Travel Irons &amp; Steamers for Beauty Brands
        </h1>
        <p className="mt-4 text-white/55">
          Co-branded sets, premium finishes and gift-ready packaging for beauty and personal care brands.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-8808.png" alt="Travel iron for beauty brands - XINGYUE co-branded sets" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Beauty and personal care brands sell rituals, not just products. A compact travel iron with your brand&apos;s aesthetic — in a gift box that matches your identity — extends that ritual into garment care.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">The Beauty Brand Opportunity</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Beauty brands are expanding into travel-adjacent lifestyle products, and garment care fits naturally — travelers, stylists and wellness audiences all iron or steam clothing. Co-branded appliances differentiate loyalty programs, holiday sets and retail drops.
          </p>
          <p className="text-white/65 leading-relaxed">
            Compact models with premium finishes — like the ST-8808 and ST-812 — carry co-branding elegantly and fit the unboxing-focused presentation beauty retail expects.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Recommended Co-Branding Platforms</h2>
          <div className="space-y-4">
            {products.map((p) => (
              <Link key={p.model} href={p.link} className="group flex items-center gap-4 bg-[#0d0d12] border border-white/8 rounded-xl p-4 hover:border-[#ff2f7d]/40 transition">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 relative">
                  <Image src={p.img} alt={`${p.model} beauty co-brand platform - XINGYUE`} fill sizes="64px" className="object-contain p-1" />
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
          <h2 className="text-xl font-bold mb-4">Co-Branding &amp; Set Assembly</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Logo printing and color customization match the product to your brand palette. For gift programs, we assemble co-branded sets — appliance plus beauty accessories — in custom gift boxes with inserts and branding materials.
          </p>
          <p className="text-white/65 leading-relaxed">
            Every configuration is certified for the destination market and documented for retail compliance.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Sourcing Tips for Beauty Brands</h2>
          <ul className="space-y-3">
            {tips.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm md:text-base text-white/60 leading-relaxed">
                <Check size={16} className="text-[#ff2f7d] mt-1 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-3">Create Your Co-Branded Set</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Share your brand direction and program size — we&apos;ll propose platforms, finishes and packaging matched to your identity.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">Start Co-Branding <ArrowRight size={15} /></Link>
            <Link href="/industries/corporate-gifting" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">Corporate Gifting</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
