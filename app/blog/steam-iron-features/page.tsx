import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Steam Iron Features That Actually Matter for Wholesale Buyers | XINGYUE",
  description:
    "Which steam iron features drive sales: power, soleplate, continuous steam, anti-calc, self-clean and safety. A buyer's guide to spec sheets that matter.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What steam iron features matter most to buyers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Power and steam output, soleplate quality, continuous steam rate, anti-calc/self-clean systems and safety features like auto shut-off are the features buyers compare most.",
      },
    },
    {
      "@type": "Question",
      name: "Is continuous steam important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Continuous steam rate (grams per minute) defines the ironing experience — higher rates smooth wrinkles faster with fewer passes.",
      },
    },
    {
      "@type": "Question",
      name: "What safety features should steam irons have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Auto shut-off, heat-resistant housing and compliant power cords are the safety essentials wholesale buyers should confirm on every model.",
      },
    },
  ],
};

const sections = [
  {
    title: "Separate Selling Features from Noise",
    body: [
      "Steam iron spec sheets list dozens of features, but buyers actually compare a handful: power, steam output, soleplate, anti-calc and safety. Everything else is noise until the basics are right.",
      "When you stock a model, make sure your listings lead with the features buyers compare — it converts better and reduces returns from unmet expectations.",
    ],
  },
  {
    title: "The Features That Drive Sales",
    body: [
      "Power and steam output: high wattage (2800W+) and strong continuous steam define the professional tier. Soleplate quality: ceramic and premium finishes glide better and justify higher price points.",
      "Anti-calc and self-clean systems: they extend product life and reduce complaints — increasingly a purchase factor. Safety: auto shut-off and compliant cords are non-negotiable for retail compliance.",
    ],
  },
  {
    title: "How to Read a Spec Sheet Like a Buyer",
    body: [
      "Compare like-for-like numbers: wattage, grams-per-minute steam rate, tank capacity and soleplate material. Then check the practical details — cord length, weight, water level window and self-clean access — which show up in reviews as much as headline specs.",
      "Ask the supplier to confirm every number in writing. Ambiguous specs (\"up to\", \"approx\") should raise questions, not pass them.",
    ],
  },
  {
    title: "Building a Competitive Steam Iron Line",
    body: [
      "A balanced line spans three tiers: entry (reliable, affordable, standard soleplate), mid (ceramic soleplate, stronger steam, anti-calc), and professional (2800W+, premium features). Our ST-S1001 to ST-S1004 series maps exactly to this structure.",
      "Stock the tiers your market's price points demand, and let the spec sheet do the selling.",
    ],
  },
];

export default function SteamIronFeatures() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Buyer Guide</span>
          <span>6 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Steam Iron Features That Actually Matter
        </h1>
        <p className="mt-4 text-white/55">
          The five features wholesale buyers compare — and how to read a spec sheet like a pro.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-S1001.jpg" alt="Steam iron features that matter for wholesale buyers - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Not every feature on a spec sheet sells product. This guide separates the features that drive sales from the noise — and how to build a line buyers understand.
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
          <h2 className="text-xl font-bold mb-3">Compare the ST-S Series Steam Irons</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Entry to professional tiers — compare power, soleplate and steam output on real spec sheets.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Compare Models <ArrowRight size={15} />
            </Link>
            <Link href="/blog/steam-iron-guide" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Steam Iron Buying Guide
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
