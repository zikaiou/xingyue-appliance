import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Travel Iron Packaging & Retail Display Options for Brands | XINGYUE",
  description:
    "Travel iron packaging and retail display options: retail boxes, hang tags, gift sets and carton planning — how brands turn a travel iron into a shelf-ready product.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What packaging options are available for travel irons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Retail boxes, hang tags, gift sets, multi-language manuals and shelf-ready carton design — all customizable with your branding.",
      },
    },
    {
      "@type": "Question",
      name: "Does packaging affect shipping cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Carton size and quantity per carton directly affect freight per unit. Retail packaging is designed to balance shelf appeal with container efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get packaging samples first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Packaging mockups and samples are produced before mass production so you can approve the design and print quality.",
      },
    },
  ],
};

const options = [
  "Retail box with your branding, product visuals and spec highlights.",
  "Hang tags and shelf-ready carton design for retail distribution.",
  "Gift set assembly combining the iron with accessories in premium packaging.",
  "Multi-language user manuals and compliant labeling for export markets.",
  "Carton planning: inner boxes, master cartons and quantity-per-carton optimization.",
];

export default function TravelIronPackaging() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Brand Guide</span>
          <span>5 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Travel Iron Packaging &amp; Retail Display for Brands
        </h1>
        <p className="mt-4 text-white/55">
          Packaging turns a commodity travel iron into a branded product — here are the options and how to plan them into your order.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-8807.jpg" alt="Travel iron packaging and retail display options for brands - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          In travel retail and e-commerce, the packaging is the brand. The same travel iron sells differently with premium retail packaging than in a plain export carton — here is how brands approach it.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Packaging Options That Build a Brand</h2>
          <ul className="space-y-3">
            {options.map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/65 leading-relaxed bg-[#0d0d12] border border-white/8 rounded-xl p-4">
                <Check size={16} className="text-[#ff2f7d] mt-1 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Packaging and Container Economics</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Packaging design directly affects freight: larger retail boxes mean fewer units per carton and higher freight per unit. Professional packaging balances shelf appeal with container efficiency.
          </p>
          <p className="text-white/65 leading-relaxed">
            Ask for the carton plan alongside the packaging design — inner box size, master carton quantity and per-container loading — so the commercial decision is made with real numbers.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">The Approval Workflow</h2>
          <p className="text-white/65 leading-relaxed">
            Packaging follows a standard approval path: design mockup, print sample, then mass production. Packaging printing runs in parallel with product production, so starting artwork early protects your timeline.
          </p>
        </section>

        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-3">Design Your Retail-Ready Packaging</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Share your brand guidelines — we&apos;ll produce packaging mockups and a carton plan for your program.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Start Packaging Design <ArrowRight size={15} />
            </Link>
            <Link href="/blog/private-label-guide" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Private Label Guide
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
