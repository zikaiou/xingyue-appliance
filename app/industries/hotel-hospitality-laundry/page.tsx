import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/industries/hotel-hospitality-laundry" },
  title: "Hotel Garment Steamer Supplier | Hospitality Laundry Solutions | XINGYUE",
  description:
    "Garment steamers and steam irons for hotels, hospitality and laundry services. XINGYUE supplies 1800W handheld steamers and high-power irons configured for guest rooms and housekeeping.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which garment steamer do hotels usually stock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hotels typically stock 1800W handheld steamers like the 6617 for guest rooms and full-size steam irons for housekeeping and laundry areas — a mix that covers quick touch-ups and crisp formal wear.",
      },
    },
    {
      "@type": "Question",
      name: "Can hotel appliances be customized with our branding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We customize logo printing, colors and packaging for hospitality programs, and configure voltage and plugs for your property's market.",
      },
    },
    {
      "@type": "Question",
      name: "How do hotel buyers purchase in volume?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most hotel programs order via mixed-model orders across properties, or through distributors who consolidate demand. Contact us with your room count for a volume quotation.",
      },
    },
  ],
};

const products = [
  { model: "6617", img: "/images/products/6617.jpg", desc: "1800W handheld steamer with ceramic steam panel — fast, gentle touch-ups for guest rooms.", link: "/products/6617" },
  { model: "ST-815", img: "/images/products/ST-815.png", desc: "Professional handheld garment steamer for housekeeping and high-frequency use.", link: "/products/st-815" },
];

const tips = [
  "Stock both: a compact steamer for guest rooms and a full-size steam iron for the laundry area.",
  "Confirm durability and after-sales support — hotel appliances cycle far more than home units.",
  "Configure voltage and plugs for each property's market, and plan spare-part availability.",
];

export default function HotelHospitalityLaundry() {
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
          <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">Hotel &amp; Hospitality</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
          Hotel Garment Care: Steamers &amp; Irons for Hospitality
        </h1>
        <p className="mt-4 text-white/55">
          Guest rooms, housekeeping and laundry — garment care equipment that keeps every department running.
        </p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-12">
        <div className="max-w-md mx-auto mb-10">
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl overflow-hidden">
            <div className="aspect-square relative">
              <Image src="/images/products/6617.jpg" alt="Hotel garment steamer supplier - XINGYUE handheld steamer for hospitality" fill sizes="(max-width:1023px) 100vw, 50vw" className="object-contain p-6" />
            </div>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">
          Hotels face three garment-care needs at once: quick touch-ups for leisure guests, crisp formal wear for business travelers, and high-volume pressing in the laundry area. One appliance type cannot serve all three — which is why hospitality programs typically stock a mix.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">The Hospitality Problem</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Business travelers need sharply pressed shirts and suits — a steam iron&apos;s job. Leisure guests mostly need fast wrinkle removal on slightly crumpled clothes — a garment steamer does this in seconds without an ironing board. Housekeeping refreshes linens and uniforms on tight schedules.
          </p>
          <p className="text-white/65 leading-relaxed">
            Our recommended hotel mix: a compact handheld steamer in guest rooms, a full-size steam iron in housekeeping stations, and professional steamers for the laundry team.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Recommended Models for Hotels</h2>
          <div className="space-y-4">
            {products.map((p) => (
              <Link key={p.model} href={p.link} className="group flex items-center gap-4 bg-[#0d0d12] border border-white/8 rounded-xl p-4 hover:border-[#ff2f7d]/40 transition">
                <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-white/5 relative">
                  <Image src={p.img} alt={`${p.model} for hotel use - XINGYUE`} fill sizes="64px" className="object-contain p-1" />
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
          <h2 className="text-xl font-bold mb-4">Customization for Hospitality Programs</h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Hotels and hospitality suppliers can customize logos, colors and packaging across the range. Voltage and plug configuration follow each property&apos;s market, and multi-language user manuals can be prepared for international staff.
          </p>
          <p className="text-white/65 leading-relaxed">
            For larger programs, mixed-model orders across properties and distributors keep pricing efficient — tell us your room count and we&apos;ll build the right mix.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Sourcing Tips for Hotel Buyers</h2>
          <ul className="space-y-3">
            {tips.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm md:text-base text-white/60 leading-relaxed">
                <Check size={16} className="text-[#ff2f7d] mt-1 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white/4 border border-white/8 rounded-2xl p-8 my-10">
          <h2 className="text-xl font-bold mb-3">Build Your Hotel Appliance Program</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Share your room count and guest profile — we&apos;ll recommend the steamer/iron mix and configurations for your properties.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">Talk to Our Team <ArrowRight size={15} /></Link>
            <Link href="/industries/dry-cleaning-services" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">Dry Cleaning Solutions</Link>
          </div>
        </section>
      </article>
    </div>
  );
}
