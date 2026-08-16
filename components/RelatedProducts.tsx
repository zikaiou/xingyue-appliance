"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type RelatedItem = { model: string; img: string; desc: string };

export default function RelatedProducts({ title, products }: { title: string; products: RelatedItem[] }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-center mb-10">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <Link key={p.model} href={`/products/${p.model.toLowerCase()}`} className="group bg-white/4 border border-white/8 rounded-2xl overflow-hidden hover:border-[#ff2f7d]/40 transition">
            <div className="aspect-square bg-[#0d0d12] relative">
              <Image src={p.img} alt={`${p.model} from XINGYUE manufacturer`} fill className="object-contain p-4" unoptimized loading="lazy" />
            </div>
            <div className="p-5">
              <h3 className="font-bold">{p.model}</h3>
              <p className="text-xs text-white/45 mt-1 line-clamp-2">{p.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#ff2f7d] mt-3">
                View Details <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
