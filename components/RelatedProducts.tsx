"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

type RelatedItem = { model: string; img: string; desc: string };
type CatalogItem = RelatedItem & { slug: string; cat: string };

const CATALOG: CatalogItem[] = [
  { slug: "st-718", model: "ST-718", img: "/images/products/st718/main.jpg", desc: "Portable steam iron", cat: "Travel Iron" },
  { slug: "st-717", model: "ST-717", img: "/images/products/st717/main.jpg", desc: "Portable steam iron", cat: "Travel Iron" },
  { slug: "st-588", model: "ST-588", img: "/images/products/st588/main.jpg", desc: "Portable steam iron", cat: "Travel Iron" },
  { slug: "st-812", model: "ST-812", img: "/images/products/st812/main.jpg", desc: "Portable steam iron", cat: "Travel Iron" },
  { slug: "st-8807", model: "ST-8807", img: "/images/products/st8807/main.jpg", desc: "Professional travel iron", cat: "Travel Iron" },
  { slug: "st-8808", model: "ST-8808", img: "/images/products/st8808/main.jpg", desc: "Professional travel iron", cat: "Travel Iron" },
  { slug: "st-817", model: "ST-817", img: "/images/products/st817/main.png", desc: "Professional travel iron", cat: "Travel Iron" },
  { slug: "st-200a", model: "ST-200A", img: "/images/products/st200a/main.jpg", desc: "Professional travel iron", cat: "Travel Iron" },
  { slug: "st-815", model: "ST-815", img: "/images/products/st815/main.jpg", desc: "Powerful garment steamer", cat: "Garment Steamer" },
  { slug: "6617", model: "6617", img: "/images/products/6617/main.jpg", desc: "Powerful garment steamer", cat: "Garment Steamer" },
  { slug: "900a", model: "900A", img: "/images/products/900a/main.jpg", desc: "Compact garment steamer", cat: "Garment Steamer" },
  { slug: "6618", model: "6618", img: "/images/products/6618/main.jpg", desc: "Compact garment steamer", cat: "Garment Steamer" },
  { slug: "st-s1001", model: "ST-S1001", img: "/images/products/sts1001/main.jpg", desc: "Professional steam iron", cat: "Steam Iron" },
  { slug: "st-s1002", model: "ST-S1002", img: "/images/products/sts1002/main.jpg", desc: "Ultra-powerful steam iron", cat: "Steam Iron" },
  { slug: "st-s1003", model: "ST-S1003", img: "/images/products/sts1003/main.jpg", desc: "Versatile steam iron", cat: "Steam Iron" },
  { slug: "st-s1004", model: "ST-S1004", img: "/images/products/sts1004/main.jpg", desc: "Self-clean steam iron", cat: "Steam Iron" },
  { slug: "9002", model: "9002", img: "/images/products/9002.jpg", desc: "Professional vacuum steamer", cat: "Vacuum Garment Steamer" },
  { slug: "9003", model: "9003", img: "/images/products/9003.png", desc: "3-in-1 vacuum steamer", cat: "Vacuum Garment Steamer" },
  { slug: "9004", model: "9004", img: "/images/products/9004.jpg", desc: "3-in-1 vacuum steamer", cat: "Vacuum Garment Steamer" },
  { slug: "9005", model: "9005", img: "/images/products/9005.jpg", desc: "Professional vacuum steamer", cat: "Vacuum Garment Steamer" },
];

function pickRelated(currentSlug: string): RelatedItem[] {
  const current = CATALOG.find((c) => c.slug === currentSlug);
  if (!current) return CATALOG.slice(0, 4).map(({ slug: _s, cat: _c, ...rest }) => rest);
  const sameCat = CATALOG.filter((c) => c.slug !== currentSlug && c.cat === current.cat);
  const others = CATALOG.filter((c) => c.slug !== currentSlug && c.cat !== current.cat);
  return [...sameCat, ...others].slice(0, 4).map(({ slug: _s, cat: _c, ...rest }) => rest);
}

export default function RelatedProducts({
  title = "Related Products",
  products,
}: {
  title?: string;
  products?: RelatedItem[];
}) {
  const pathname = usePathname();
  const currentSlug = pathname?.split("/").pop() ?? "";
  const items = products && products.length > 0 ? products : pickRelated(currentSlug);
  if (items.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-center mb-10">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
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
