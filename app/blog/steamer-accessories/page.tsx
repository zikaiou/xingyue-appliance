import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Garment Steamer Accessories: Brushes, Nozzles & Attachments | XINGYUE",
  description:
    "Garment steamer accessories explained: fabric brushes, crease attachments, nozzles and hose mounts — which matter for buyers, and what to stock alongside steamers.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What accessories come with garment steamers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typical included accessories are fabric brushes, crease attachments, nozzles and measuring cups. Confirm the included set in the spec sheet — they differ by model.",
      },
    },
    {
      "@type": "Question",
      name: "Do accessories affect steamer price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Richer accessory sets justify higher price points and better perceived value, which is why they are a common differentiator between tiers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I order spare accessories for resale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can supply accessories as spare parts and add-on items alongside steamer orders for after-sales programs.",
      },
    },
  ],
};

const sections = [
  {
    title: "The Accessory Set Is Part of the Product",
    body: [
      "Garment steamers typically ship with a set of accessories: a fabric brush for lint and fibers, a crease attachment for sharper results, a narrow nozzle for targeted steaming, and often a measuring cup for the tank.",
      "The included set differs by model and price tier — and it is one of the first things buyers compare on spec sheets and listings.",
    ],
  },
  {
    title: "Which Accessories Matter Most",
    body: [
      "The fabric brush is the highest-value accessory — it protects fabrics and improves results, and users notice its absence. The crease attachment matters for buyers who press shirts and trousers. Nozzles and hose mounts matter more for panel/professional models.",
      "When positioning a model, the accessory set is a credible differentiator: richer sets justify higher price points without changing the core product.",
    ],
  },
  {
    title: "Accessories as Revenue",
    body: [
      "For wholesalers, accessories are an after-sales revenue stream: spare brushes, replacement cups and add-on nozzles sold alongside steamers. Asking suppliers for accessory SKUs is a standard way to raise basket value.",
      "We supply accessories as spares and add-on items, so your after-sales program has stock to sell.",
    ],
  },
  {
    title: "What to Check in the Spec",
    body: [
      "List the included accessories on your listings — it reduces buyer questions and returns. Confirm the exact set in writing when ordering, since \"accessories included\" varies by model and configuration.",
    ],
  },
];

export default function SteamerAccessories() {
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
          <span>5 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Garment Steamer Accessories: What to Know Before You Stock
        </h1>
        <p className="mt-4 text-white/55">
          Brushes, nozzles and attachments — which matter, what to confirm in the spec, and how accessories add revenue.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-815.png" alt="Garment steamer accessories brushes nozzles attachments - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          The accessories bundled with a garment steamer shape buyer perception as much as the steamer itself. Here is what matters — and how accessories become a revenue line.
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
          <h2 className="text-xl font-bold mb-3">Compare Accessory Sets Across Models</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Every XINGYUE steamer page lists its included accessories — compare before you spec your line.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Compare Steamers <ArrowRight size={15} />
            </Link>
            <Link href="/blog/garment-steamer-guide" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Steamer Buying Guide
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
