import Link from "next/link";
import { ArrowRight, Zap, Droplets, Plug, Scale } from "lucide-react";

export const metadata = {
  title: "Travel Iron Size & Voltage Guide | Power, Capacity, Plug Types | XINGYUE",
  description:
    "How to select power, water tank capacity and voltage configuration for travel irons and garment steamers — with real XINGYUE model examples for each use case.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What voltage should I order for my market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Match the voltage to your destination market: 110–120V for North America and Japan, 220–240V for Europe, Asia and most other regions. Confirm the required voltage and plug type when ordering.",
      },
    },
    {
      "@type": "Question",
      name: "How much power do I need in a travel iron?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For compact travel irons, 1000W is the standard configuration. Higher power (1200W+) heats up faster but is suited to markets with 220–240V supply.",
      },
    },
    {
      "@type": "Question",
      name: "What water tank capacity is right for a garment steamer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Larger tanks (200ml+) support longer continuous steaming without refilling — better for professional and high-frequency use. Compact travel models use smaller tanks to stay lightweight.",
      },
    },
    {
      "@type": "Question",
      name: "Do XINGYUE products support multiple voltages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Models are configured for the target market's voltage. Confirm your market's voltage and plug standard with our team so we ship the correct configuration.",
      },
    },
  ],
};

const examples = [
  {
    icon: Scale,
    model: "ST-718 Travel Iron",
    specs: ["1000W power", "140ml water tank", "Ceramic soleplate"],
    use: "Compact, carry-on friendly — the standard choice for travel retail and airline-friendly programs.",
    link: "/products/st-718",
  },
  {
    icon: Zap,
    model: "ST-8807 Travel Iron",
    specs: ["1300W power", "Strong steam output"],
    use: "Higher power for faster heat-up when 220–240V supply is available.",
    link: "/products/st-8807",
  },
  {
    icon: Droplets,
    model: "6617 Garment Steamer",
    specs: ["1800W power", "Ceramic steam panel"],
    use: "A handheld steamer with panel ironing capability — suited to hotels, dry cleaners and home use.",
    link: "/products/6617",
  },
  {
    icon: Zap,
    model: "ST-S1001 Steam Iron",
    specs: ["2800W power", "Continuous steam for professional use"],
    use: "High-power steam iron for demanding, frequent ironing at home or in laundry settings.",
    link: "/products/st-s1001",
  },
];

export default function SizeGuidePage() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="pt-32 pb-12 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">Sourcing Guide</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Power, Capacity & Voltage: A Quick Selection Guide</h1>
        <p className="mt-4 text-white/50 max-w-2xl mx-auto">
          The three numbers that matter when selecting travel irons and steamers — and how to match them to your market.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-[#0d0d12] border border-[#ff2f7d]/30 rounded-2xl p-6 mb-6">
          <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
          <p className="text-sm md:text-base text-white/75 leading-relaxed">
            Match voltage to the destination market (<span className="text-white font-semibold">110–120V</span> for North America and Japan, <span className="text-white font-semibold">220–240V</span> for Europe and Asia), choose wattage by use case (<span className="text-white font-semibold">1000W</span> compact travel irons, <span className="text-white font-semibold">1800W</span> handheld steamers, <span className="text-white font-semibold">2800W+</span> full-size irons), and pick tank size by session length (around 140ml for travel, larger for home and professional use).
          </p>
        </div>
        <div className="bg-white/4 border border-white/8 rounded-2xl p-8 md:p-10 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-3"><Plug size={20} className="inline text-[#ff2f7d] mr-2" />Voltage & Plug Configuration</h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              Voltage is the first decision: <span className="text-white font-semibold">110–120V</span> for North
              America and Japan, <span className="text-white font-semibold">220–240V</span> for Europe, Asia and most
              other markets. XINGYUE configures each order for the destination market&apos;s voltage and plug standard —
              confirm both when placing your order. If you are targeting multiple regions, plan separate SKUs per
              voltage rather than relying on dual-voltage capability, which not every model supports.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3"><Zap size={20} className="inline text-[#ff2f7d] mr-2" />Power (Watts)</h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              Higher wattage means faster heat-up and stronger, more consistent steam. Compact travel irons are
              typically <span className="text-white font-semibold">1000W</span>; full-size steam irons reach{" "}
              <span className="text-white font-semibold">2800–3000W</span> for professional-grade performance.
              Handheld steamers sit in between, balancing power with lightweight portability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3"><Droplets size={20} className="inline text-[#ff2f7d] mr-2" />Water Tank Capacity (ml)</h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              Larger tanks mean longer continuous steaming before refilling. Compact travel models use smaller tanks
              (around 140ml) to stay carry-on friendly; professional steamers and irons pair larger tanks with higher
              power for sustained output. Match tank size to your end user&apos;s typical session length.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Real Model Examples</h2>
            <div className="space-y-4">
              {examples.map((e) => (
                <div key={e.model} className="bg-[#0d0d12] border border-white/8 rounded-xl p-5">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <h3 className="font-bold">{e.model}</h3>
                    <Link href={e.link} className="text-[#ff2f7d] text-xs font-semibold hover:underline inline-flex items-center gap-1">
                      View Product <ArrowRight size={13} />
                    </Link>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.specs.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/60 border border-white/10">{s}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-white/50 leading-relaxed">{e.use}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Ready to Select Your Line?</h2>
            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-5">
              Tell us your target markets and use cases — we&apos;ll recommend the right models, configurations and plug
              standards for your range.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
                Browse All Products <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
                Ask for Guidance
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/guides/price-guide" className="inline-flex items-center gap-2 text-[#ff2f7d] text-sm font-semibold hover:underline">
            Read: How B2B Pricing Works <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
