import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Travel Iron Water Tank Capacity: How Much Is Enough? | XINGYUE",
  description:
    "Water tank capacity in travel irons explained: 140ml compact models, refill frequency and how tank size affects weight, price and user experience.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How big should a travel iron water tank be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compact travel irons typically use around 140ml tanks — enough for a shirt or two of steaming while keeping the iron light and carry-on friendly.",
      },
    },
    {
      "@type": "Question",
      name: "Does a bigger tank mean a heavier iron?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tank size directly affects weight and footprint — the trade-off is fewer refills versus lighter carry-on weight.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see the water level?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most quality travel irons include a transparent water level window so users can see when a refill is needed. Confirm it's on the spec sheet.",
      },
    },
  ],
};

const sections = [
  {
    title: "The Tank-Size Trade-off",
    body: [
      "Water tank capacity decides how long an iron steams before refilling — and it is a direct trade with weight and size. A larger tank means fewer interruptions but a heavier, bulkier iron; a smaller tank keeps things carry-on friendly.",
      "For compact travel irons, around 140ml is the practical standard: enough for a shirt or two of steaming while keeping the unit light.",
    ],
  },
  {
    title: "Capacity by Product Type",
    body: [
      "Travel irons: 140ml-class tanks, optimized for portability — the ST-718 is a reference configuration. Handheld steamers and full-size irons: larger tanks (200ml+) support longer continuous sessions for home and professional use.",
      "When building a range, tank size becomes a positioning lever: smaller for travel/entry, larger for home/professional tiers.",
    ],
  },
  {
    title: "What Buyers Should Check in the Spec",
    body: [
      "Beyond the millilitre number, check for a water level window (users want to see remaining water), easy refill access, and whether the tank is removable for cleaning — all of which show up in reviews.",
      "Include tank capacity on your spec sheets and listings: it is one of the first specs experienced buyers compare.",
    ],
  },
];

export default function TravelIronTankCapacity() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Sourcing Guide</span>
          <span>5 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Travel Iron Water Tank Capacity: How Much Is Enough?
        </h1>
        <p className="mt-4 text-white/55">
          The trade-off between refill frequency, weight and price — and what to check in the spec sheet.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-718.jpg" alt="Travel iron water tank capacity 140ml explained - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Tank capacity is the spec buyers notice first in use — every refill is an interruption. Here is how to get the balance right for each product type in your range.
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
          <h2 className="text-xl font-bold mb-3">Compare Tank Capacities Across the Range</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Every XINGYUE product page lists the exact tank capacity — compare models before you spec your line.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Browse Products <ArrowRight size={15} />
            </Link>
            <Link href="/guides/size-guide" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Size &amp; Power Guide
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
