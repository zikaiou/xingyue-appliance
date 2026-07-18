import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Smart Steam Iron",
    text: "Powerful steam. Effortless results.",
    image: "/images/products/steam-iron-1.png",
  },
  {
    name: "Handheld Garment Steamer",
    text: "Compact design. Powerful performance.",
    image: "/images/products/steam-iron-2.png",
  },
  {
    name: "Mini Garment Steamer",
    text: "Lightweight and portable for everyday use.",
    image: "/images/products/steam-iron-3.png",
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-[#f3f3f5] text-black">
      <div className="container-shell section-pad">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-[760px]">
            <p className="eyebrow">Featured Products</p>
            <h2 className="mt-5 text-[clamp(2.7rem,5.2vw,5.25rem)] font-black leading-[.94] tracking-[-.055em]">
              Clothing care,
              <span className="block bg-gradient-to-r from-pink-600 to-rose-400 bg-clip-text text-transparent">
                designed around you.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/58">
              A focused range of portable steam products for home, travel and private-label programs.
            </p>
          </div>
          <Link href="/products" className="group mb-2 inline-flex items-center gap-3 font-extrabold">
            View all products
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-500 text-pink-600 transition group-hover:bg-pink-600 group-hover:text-white">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-[32px] bg-white shadow-[0_16px_50px_rgba(0,0,0,.05)]">
              <div className="relative aspect-[1.08/1] overflow-hidden bg-gradient-to-br from-white to-zinc-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-7 transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-end justify-between gap-5 p-7">
                <div>
                  <h3 className="text-2xl font-black">{product.name}</h3>
                  <p className="mt-2 leading-7 text-black/55">{product.text}</p>
                </div>
                <Link
                  href="/products"
                  aria-label={`View ${product.name}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-pink-500 text-pink-600 transition hover:bg-pink-600 hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
