import Link from "next/link";

export default function Page() {
  return (
    <section className="min-h-[70vh] bg-white text-black">
      <div className="container-shell section-pad">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink-600">Factory</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black sm:text-6xl">Reliable manufacturing capability.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">A dedicated production workflow for assembly, inspection, packaging and international delivery.</p>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-black px-7 py-4 font-semibold text-white">
          Contact XING
        </Link>
      </div>
    </section>
  );
}
