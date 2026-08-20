import Link from "next/link";
import { ArrowRight, ShieldCheck, Leaf, Globe, BadgeCheck } from "lucide-react";

export const metadata = {
  title: "Certifications & Compliance | CE, RoHS, CB, ETL | XINGYUE",
  description:
    "XINGYUE products are certified CE, RoHS and CB for European markets, with ETL available for North America. Request current certificates for your target model.",
};

const certs = [
  {
    icon: BadgeCheck,
    name: "CE",
    region: "European Union",
    summary:
      "CE marking confirms the product meets EU safety, health and environmental protection requirements — the mandatory conformity mark for electrical appliances sold in the EU and EEA.",
    points: [
      "Required for EU/EEA market access",
      "Covers electrical safety, EMC and applicable directives",
      "Verified through testing by accredited laboratories",
    ],
  },
  {
    icon: Leaf,
    name: "RoHS",
    region: "European Union",
    summary:
      "RoHS restricts hazardous substances (lead, mercury, cadmium and more) in electrical and electronic equipment — a key compliance requirement for EU-bound shipments.",
    points: [
      "Limits hazardous substances in electronics",
      "Mandatory for EU imports of electrical products",
      "Certificate documents material compliance per model",
    ],
  },
  {
    icon: Globe,
    name: "CB",
    region: "International (IECEE)",
    summary:
      "The CB scheme is an international system for mutual recognition of test results across 50+ participating countries — it shortens time-to-market for multiple destinations.",
    points: [
      "IECEE mutual-recognition scheme",
      "Recognized in 50+ countries",
      "Reduces repeat testing for multi-market exports",
    ],
  },
  {
    icon: ShieldCheck,
    name: "ETL",
    region: "North America (USA / Canada)",
    summary:
      "ETL listing from Intertek demonstrates the product meets North American safety standards — available for XINGYUE models targeting the US and Canadian markets.",
    points: [
      "US/Canada safety certification",
      "Recognized by US and Canadian authorities",
      "Marked on compliant product models",
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do XINGYUE products have CE certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our products are certified with CE for European markets, together with RoHS and CB. Certificates are available per model on request.",
      },
    },
    {
      "@type": "Question",
      name: "Can you provide ETL certification for North America?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ETL certification is available for models targeting the USA and Canada. Please confirm the target model and destination with our team.",
      },
    },
    {
      "@type": "Question",
      name: "How can I receive a copy of the certificates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Send us your target model numbers and destination markets, and our export team will provide the current certificate copies for those models.",
      },
    },
  ],
};

export default function CertificationsPage() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="pt-32 pb-12 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">Certifications</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Compliance Built In</h1>
        <p className="mt-4 text-white/50 max-w-2xl mx-auto">
          Every XINGYUE model is engineered to meet the safety and compliance requirements of the markets where it ships — so your import process stays smooth.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16 space-y-6">
        {certs.map((c) => (
          <article key={c.name} className="bg-white/4 border border-white/8 rounded-2xl p-8 md:p-10 hover:border-[#ff2f7d]/40 transition">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-12 rounded-xl bg-[#ff2f7d]/15 flex items-center justify-center shrink-0">
                <c.icon size={22} className="text-[#ff2f7d]" />
              </span>
              <div>
                <h2 className="text-2xl font-black tracking-tight">{c.name}</h2>
                <p className="text-xs font-semibold text-white/45 mt-0.5">{c.region}</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">{c.summary}</p>
            <ul className="mt-4 space-y-2">
              {c.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-white/50">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff2f7d] shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}

        <div className="bg-[#0d0d12] border border-white/8 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold">Need Certificate Copies for Your Order?</h2>
          <p className="mt-3 text-sm text-white/55 leading-relaxed max-w-2xl">
            Certification requirements vary by model and destination market. Tell us which models you are sourcing and where they will ship — our export team will provide the current certificate copies and advise on any additional compliance your market requires.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            Request Certificates <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
