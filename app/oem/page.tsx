import Link from "next/link";

const services = [
  ["Product Customization", "Discuss color, logo and selected product details."],
  ["Private Label", "Build a consistent brand identity across product and packaging."],
  ["Packaging Support", "Retail-ready and export-oriented packaging options."],
  ["Quality Control", "Inspection checkpoints during production and before shipment."],
];

export default function OEMPage() {
  return (
    <>
      <section className="gradient-grid">
        <div className="container-shell py-28">
          <p className="eyebrow text-pink-300">OEM / ODM</p>
          <h1 className="section-title max-w-5xl text-white">
            Manufacturing solutions built around your brand.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
            XING supports distributors, retailers and e-commerce brands with product,
            branding, packaging and production services.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-black text-black">
            Start an OEM inquiry
          </Link>
        </div>
      </section>
      <section className="bg-white text-black">
        <div className="container-shell section-pad">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map(([title, text], index) => (
              <article key={title} className="rounded-3xl border border-black/10 p-8">
                <span className="text-sm font-black text-pink-600">0{index + 1}</span>
                <h2 className="mt-7 text-2xl font-black">{title}</h2>
                <p className="mt-3 leading-7 text-black/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
