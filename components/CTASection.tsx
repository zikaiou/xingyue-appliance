import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-pink-600 text-white">
      <div className="container-shell flex flex-col items-start justify-between gap-8 py-20 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/70">
            Start Your Project
          </p>
          <h2 className="mt-3 text-4xl font-black">Build your next steam-care product with XING.</h2>
        </div>
        <Link
          href="/contact"
          className="rounded-full bg-white px-7 py-4 font-bold text-black"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
