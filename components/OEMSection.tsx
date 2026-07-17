import Link from "next/link";

const steps = ["Design", "Prototype", "Production", "Quality Control", "Shipping"];

export default function OEMSection() {
  return (
    <section className="bg-zinc-950">
      <div className="container-shell section-pad">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink-300">
              OEM / ODM
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              From concept to global market.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              Flexible product customization, private labeling, packaging support
              and quality-controlled production for international brands.
            </p>
            <Link
              href="/oem"
              className="mt-8 inline-flex rounded-full bg-pink-600 px-7 py-4 font-semibold transition hover:bg-pink-500"
            >
              Explore OEM Service
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="text-sm text-pink-300">0{index + 1}</span>
                <p className="mt-5 font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
