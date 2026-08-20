import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "How to Choose an OEM Partner for Travel Irons (Checklist) | XINGYUE",
  description:
    "A practical checklist for selecting an OEM partner for travel irons and steamers: factory verification, samples, certifications, quality system and communication.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I check before choosing an OEM partner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verify factory status (video tour, license), request samples, confirm certifications per model, review quality processes and test communication responsiveness.",
      },
    },
    {
      "@type": "Question",
      name: "How do I verify a factory is not a trading company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask for a live video tour of the production line, request tooling and production photos, and cross-check the company's registration and export history.",
      },
    },
    {
      "@type": "Question",
      name: "What should the first order include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A small trial order at or slightly above the MOQ, with pre-production samples approved first — to validate quality, packaging and communication before scaling.",
      },
    },
  ],
};

const checklist = [
  "Factory verification: video tour of production lines, business license, export history.",
  "Product range: does the partner make your exact category, or is it a generalist?",
  "Sample program: request pre-production samples of the exact models you plan to order.",
  "Certifications: confirm CE/RoHS/CB or ETL per model, not per brand.",
  "Quality process: ask about incoming inspection, in-line QC and pre-shipment inspection.",
  "Lead time: verify production and shipping timing against your retail calendar.",
  "Communication: test response speed and clarity during quoting — it predicts the relationship.",
  "Scalability: confirm capacity for your projected volumes and future line extensions.",
];

export default function OemPartnerChecklist() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">OEM Guide</span>
          <span>6 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          How to Choose an OEM Partner for Travel Irons
        </h1>
        <p className="mt-4 text-white/55">
          The eight-point checklist that separates a reliable factory partner from a costly mistake.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/ST-718.jpg" alt="How to choose an OEM partner for travel irons checklist - XINGYUE" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Your OEM partner determines your product quality, your margins and your reputation. Use this checklist to evaluate candidates — including us — before committing.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">The Eight-Point Checklist</h2>
          <ul className="space-y-3">
            {checklist.map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/65 leading-relaxed bg-[#0d0d12] border border-white/8 rounded-xl p-4">
                <Check size={16} className="text-[#ff2f7d] mt-1 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">How the First Order Should Look</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            A reliable partner suggests a low-risk path: pre-production samples first, then a trial order at or slightly above the MOQ, with inspection points agreed before production starts.
          </p>
          <p className="text-white/65 leading-relaxed">
            If a supplier pushes for a large first order before samples and inspections, treat it as a red flag.
          </p>
        </section>

        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-3">Evaluate Us Against the Checklist</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            We welcome the same scrutiny: factory video tours, sample programs, per-model certificates and a trial-order path.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/factory" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              See Our Factory <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Start the Checklist
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
