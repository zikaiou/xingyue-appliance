import Image from "next/image";
import Link from "next/link";

const products = [
  ["/images/products/steam-iron-1.png", "Smart Portable Steam Iron", "Powerful steam, touch control and compact storage."],
  ["/images/products/steam-iron-2.png", "2-in-1 Steam Iron", "Horizontal ironing and vertical steaming in one device."],
  ["/images/products/steam-iron-3.png", "Travel Clothing Care", "Lightweight steam care for business and leisure travel."],
];

export default function ProductsPage() {
  return (
    <section className="bg-[#f3f3f5] text-black">
      <div className="container-shell section-pad">
        <p className="eyebrow">Products</p>
        <h1 className="section-title">Smart steam care for everyday life.</h1>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {products.map(([image, name, text]) => (
            <article key={name} className="overflow-hidden rounded-[32px] bg-white">
              <div className="relative aspect-square">
                <Image src={image} alt={name} fill className="object-contain p-8" />
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-black">{name}</h2>
                <p className="mt-3 leading-7 text-black/60">{text}</p>
                <Link href="/contact" className="mt-6 inline-flex font-bold text-pink-600">
                  Request product details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
