import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About XINGYUE | Travel Iron & Garment Steamer Manufacturer",
  description:
    "Xingyue Technology Co., Ltd. develops modern steam-care appliances for global markets. Learn about the XINGYUE manufacturer behind travel irons and garment steamers.",
  alternates: { canonical: "https://www.xingyue-appliance.com/about" },
};

export default function Page() {
  return (
    <section className="min-h-[70vh] bg-white text-black">
      <div className="container-shell section-pad">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink-600">About XING</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black sm:text-6xl">Professional garment care, built for global brands.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">Xingyue Technology Co., Ltd. develops modern steam-care appliances for global markets.</p>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-black px-7 py-4 font-semibold text-white">
          Contact XING
        </Link>
      </div>
    </section>
  );
}
