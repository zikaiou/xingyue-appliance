import Link from "next/link";

export default function Page() {
  return (
    <section className="min-h-[70vh] bg-white text-black">
      <div className="container-shell section-pad">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink-600">Insights</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black sm:text-6xl">Clothing-care guides and OEM knowledge.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">Helpful content for consumers, distributors, retailers and private-label brands.</p>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-black px-7 py-4 font-semibold text-white">
          Contact XING
        </Link>
      </div>
    </section>
  );
}
