import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const sections = [
  {
    title: "1. Verify the Factory, Not Just the Website",
    body: [
      "The first rule of sourcing from China: a polished website proves nothing. Trading companies and agents routinely present themselves as factories, marking up prices and adding lead-time risk. Your first verification step should be to confirm you are actually dealing with the manufacturer.",
      "Ask for the factory's business license (营业执照) and cross-check the registered name against their Alibaba store and website domain. Confirm the registered address matches the production site shown in their videos. A genuine manufacturer can provide these documents without hesitation.",
    ],
  },
  {
    title: "2. Demand a Video Tour of the Production Line",
    body: [
      "Photos can be staged and reused from other factories. A live video tour — or better, a video call inside the workshop — is far harder to fake. Ask to see the specific production stages relevant to your product: assembly lines, quality inspection stations, and the warehouse where your goods will be packed.",
      "Reputable manufacturers welcome this transparency. At XINGYUE, our [factory page](https://www.xingyue-appliance.com/factory) includes real footage of our 35,000m² base, assembly lines and quality testing — because we know verifiable production is the foundation of long-term partnerships.",
    ],
  },
  {
    title: "3. Check Production Capacity Honestly",
    body: [
      "Many suppliers inflate their capacity figures. Ask pointed questions: How many units per month for my product category? How many production lines are dedicated to it? What is your current order backlog? Cross-check the answers against their factory size and workforce.",
      "A factory with real capacity will discuss delivery schedules in specific terms — lead times, production slots, and ramp-up plans for large orders. A trading company will usually give vague answers or immediately promise impossibly fast delivery.",
    ],
  },
  {
    title: "4. Verify Certifications Are Real and Current",
    body: [
      "Certifications like CE, RoHS, CB and ETL are essential for export, but not all certificates are genuine. Ask for the certificate number and the certifying body, then verify it online. Check that the certificate lists the correct factory name and covers the specific model you are sourcing.",
      "Be wary of suppliers who show one generic certificate for all products. Genuine certification is model-specific and renewed periodically. At XINGYUE, we maintain current CE, RoHS, CB and other certifications for our active product range — and we share them with buyers during the quotation stage.",
    ],
  },
  {
    title: "5. Request Samples and Test Them Properly",
    body: [
      "The sample is the ultimate test of a factory's capability. Order samples of the exact model you intend to source, and test them against your own criteria — not just what the salesperson claims. Check heat-up time, steam output, tank seal, cable quality and packaging robustness.",
      "Pay attention to consistency: request two or three samples of the same model and compare them. A real factory produces consistent units; inconsistent samples suggest either poor QC or that samples were specially prepared while production quality differs.",
    ],
  },
  {
    title: "6. Test Communication and Responsiveness",
    body: [
      "Your supplier's communication during sourcing predicts the partnership experience. Do they respond within 24 hours? Do they answer technical questions accurately, or deflect with vague promises? Do they provide honest lead times and flag potential issues proactively?",
      "A professional manufacturer assigns a dedicated account manager who understands your market and communicates in clear English. If communication is already difficult during the sales phase, it will only get harder during production and shipping.",
    ],
  },
];

export const metadata = {
  title: "How to Verify a Garment Care Factory in China | XINGYUE",
  description: "Buyer's checklist to verify Chinese garment care factories: licenses, video tours, capacity, certifications and samples. Trust a verified travel iron factory - XINGYUE.",
};

export default function FactoryVerificationGuide() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
          <ArrowLeft size={16} /> Back to Guide
        </Link>
      </div>

      <header className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
          <span>August 3, 2026</span>
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Sourcing Guide</span>
          <span>6 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          How to Verify a Garment Care Factory in China: A Buyer's Checklist
        </h1>
        <p className="mt-4 text-white/55">
          Six practical checks that separate genuine manufacturers from trading companies — before you commit to an order.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
          <div className="aspect-square relative">
            <Image src="/images/factory/gallery2.jpg" alt="Verify garment care factory in China - XINGYUE manufacturing base tour" fill className="object-contain p-6" unoptimized />
          </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Sourcing garment care products from China can be highly profitable — but only if you partner with a genuine manufacturer. The market includes trading companies, agents and shell operations that mark up prices and add risk. This checklist shares the six verification steps we recommend every buyer complete, drawn from 16 years of manufacturing for importers in over 100 countries.
        </p>

        {sections.map((s, idx) => (
          <section key={idx} className="mb-10">
            <h2 className="text-xl font-bold mb-4">{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="text-white/65 leading-relaxed mb-4">{p}</p>
            ))}
          </section>
        ))}

        {/* Factory CTA */}
        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-4">Transparent by Design</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            At XINGYUE, we welcome verification. Our 35,000m² factory, production lines, quality control process and certifications are all documented for buyers to review.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/factory" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
              Visit Our Factory Page <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
              Request a Video Tour
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-10">
          <h2 className="text-2xl font-bold">Ready to Verify Us in Person?</h2>
          <p className="mt-3 text-white/50 max-w-md mx-auto text-sm">
            Schedule a factory visit or video call — we welcome genuine buyers to see production first-hand.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Contact Our Team <ArrowRight size={16} />
          </Link>
        </section>
      </article>
    </div>
  );
}
