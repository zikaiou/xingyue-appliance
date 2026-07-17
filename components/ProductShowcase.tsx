import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Smart Portable Steam Iron",
    text: "Intelligent controls, powerful steam and a compact foldable body.",
    image: "/images/products/steam-iron-1.png",
  },
  {
    name: "2-in-1 Garment Care",
    text: "Horizontal ironing and vertical steaming for everyday garments.",
    image: "/images/products/steam-iron-2.png",
  },
  {
    name: "Travel Steam Solution",
    text: "Lightweight clothing care designed for business and leisure travel.",
    image: "/images/products/steam-iron-3.png",
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-[#f3f3f5] text-black">
      <div className="container-shell section-pad">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Featured Products</p>
            <h2 className="section-title">One platform for modern clothing care.</h2>
          </div>
          <Link href="/products" className="text-sm font-bold underline underline-offset-8">
            View all products
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-[32px] bg-white">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white to-zinc-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-7 transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">{product.name}</h3>
                <p className="mt-3 leading-7 text-black/60">{product.text}</p>
                <Link href="/products" className="mt-6 inline-flex font-bold text-pink-600">
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
