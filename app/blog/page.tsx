import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  {
    slug: "travel-iron-guide",
    title: "How to Choose a Travel Iron for Global Markets: A Manufacturer's Guide",
    excerpt: "Voltage compatibility, soleplate materials, tank capacity and what importers should check before placing a bulk order.",
    date: "August 3, 2026",
    category: "Sourcing Guide",
    readTime: "6 min read",
  },
  {
    slug: "oem-guide",
    title: "How OEM Garment Care Manufacturing Works: A Complete Guide for Brands",
    excerpt: "From concept to container — the six stages of OEM production, plus everything brands can customize to launch their own line.",
    date: "August 3, 2026",
    category: "OEM / ODM Guide",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <section className="pt-32 pb-12 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">Garment Care Guide</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Industry Insights for Global Buyers</h1>
        <p className="mt-4 text-white/50 max-w-xl mx-auto">
          Practical sourcing knowledge from a professional garment care manufacturer with 16+ years of export experience.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <article className="bg-white/4 border border-white/8 rounded-2xl p-8 hover:border-[#ff2f7d]/40 transition">
              <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} /> {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <User size={13} /> XINGYUE Team
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#ff2f7d]/15 text-[#ff2f7d]">{post.category}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold group-hover:text-[#ff2f7d] transition">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-white/55 leading-relaxed">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-white/35">{post.readTime}</span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff2f7d]">
                  Read Article <ArrowRight size={15} />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}
