import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Garment Care Sourcing Guides & Industry Insights | XINGYUE",
  description: "Practical sourcing guides and industry insights for buyers of travel irons, garment steamers, steam irons and vacuum garment steamers.",
  alternates: { canonical: "https://www.xingyue-appliance.com/blog" },
};

const posts = [
  {
    slug: "how-to-choose-garment-steamer-manufacturer",
    title: "How to Choose a Garment Steamer Manufacturer: A B2B Buyer's Guide",
    excerpt: "How importers and private-label buyers can evaluate garment steamer ranges, OEM capability, samples, quality control, MOQ and lead time.",
    date: "August 31, 2026",
    category: "Garment Steamer Sourcing",
    readTime: "10 min read",
  },
  {
    slug: "how-to-choose-travel-iron-manufacturer",
    title: "How to Choose a Travel Iron Manufacturer for OEM & Private Label",
    excerpt: "A practical sourcing guide covering voltage, steam, portability, samples, branding, MOQ, quality control and packaging.",
    date: "August 31, 2026",
    category: "Travel Iron Sourcing",
    readTime: "9 min read",
  },
  {
    slug: "garment-steamer-oem-process",
    title: "Garment Steamer OEM Process: From Product Selection to Mass Production",
    excerpt: "A step-by-step guide to garment steamer OEM requirements, customization, samples, compliance, production, QC and shipment.",
    date: "August 31, 2026",
    category: "Garment Steamer OEM",
    readTime: "9 min read",
  },
  {
    slug: "vacuum-garment-steamer-manufacturer-guide",
    title: "Vacuum Garment Steamer Manufacturer: B2B Sourcing Guide",
    excerpt: "How B2B buyers should evaluate steam, suction, water handling, safety, testing and OEM capability.",
    date: "August 31, 2026",
    category: "Vacuum Garment Steamer Sourcing",
    readTime: "8 min read",
  },
  {
    slug: "steamer-accessories",
    title: "Garment Steamer Accessories: Brushes, Nozzles & Attachments",
    excerpt: "Which accessories matter, what to confirm in the spec, and how accessories add revenue.",
    date: "August 2026",
    category: "Buyer Guide",
    readTime: "5 min read",
  },
  {
    slug: "factory-vs-trading-company",
    title: "China Factory vs Trading Company for Steam Irons: How to Tell",
    excerpt: "Four signals that separate a genuine appliance manufacturer from a middleman.",
    date: "August 2026",
    category: "Supplier Guide",
    readTime: "6 min read",
  },
  {
    slug: "travel-iron-packaging",
    title: "Travel Iron Packaging & Retail Display Options for Brands",
    excerpt: "Retail boxes, hang tags, gift sets and carton planning — how brands turn a travel iron into a shelf-ready product.",
    date: "August 2026",
    category: "Brand Guide",
    readTime: "5 min read",
  },
  {
    slug: "steam-iron-anti-calc",
    title: "Steam Iron Anti-Calc Systems: Why They Matter",
    excerpt: "Scale is the silent killer of steam irons — and the feature that prevents it is worth its premium.",
    date: "August 2026",
    category: "Buyer Guide",
    readTime: "5 min read",
  },
  {
    slug: "garment-care-market-trends",
    title: "2026 Garment Care Market Trends for Wholesalers",
    excerpt: "Vacuum steamers, travel-first demand, private label growth and multi-market SKU planning.",
    date: "August 2026",
    category: "Industry Insight",
    readTime: "6 min read",
  },
  {
    slug: "travel-iron-vs-steam-iron",
    title: "Travel Iron vs Steam Iron: Which Product Line Should You Source?",
    excerpt: "Category size, margins and competition — and why the best wholesalers often stock both.",
    date: "August 2026",
    category: "Buyer Guide",
    readTime: "6 min read",
  },
  {
    slug: "garment-steamer-wattage",
    title: "Garment Steamer Wattage Guide: What Power Do You Need?",
    excerpt: "How much power a garment steamer really needs — and how to match it to your market.",
    date: "August 2026",
    category: "Sourcing Guide",
    readTime: "5 min read",
  },
  {
    slug: "oem-partner-checklist",
    title: "How to Choose an OEM Partner for Travel Irons (Checklist)",
    excerpt: "The eight-point checklist that separates a reliable factory partner from a costly mistake.",
    date: "August 2026",
    category: "OEM Guide",
    readTime: "6 min read",
  },
  {
    slug: "travel-iron-tank-capacity",
    title: "Travel Iron Water Tank Capacity: How Much Is Enough?",
    excerpt: "The trade-off between refill frequency, weight and price — and what to check in the spec sheet.",
    date: "August 2026",
    category: "Sourcing Guide",
    readTime: "5 min read",
  },
  {
    slug: "steam-iron-features",
    title: "Steam Iron Features That Actually Matter for Wholesale Buyers",
    excerpt: "The five features wholesale buyers compare — and how to read a spec sheet like a pro.",
    date: "August 2026",
    category: "Buyer Guide",
    readTime: "6 min read",
  },
  {
    slug: "travel-iron-certifications",
    title: "Travel Iron Certifications: CE, RoHS, CB, ETL for Buyers",
    excerpt: "Which certificates your travel iron needs, market by market — and how to verify them with any supplier.",
    date: "August 2026",
    category: "Compliance Guide",
    readTime: "6 min read",
  },
  {
    slug: "garment-steamer-lead-time",
    title: "Garment Steamer Lead Times: How Long Does OEM Production Take?",
    excerpt: "From sample to container — the real OEM production timeline, and how to plan it into your inventory cycle.",
    date: "August 2026",
    category: "OEM Guide",
    readTime: "5 min read",
  },
  {
    slug: "travel-iron-soleplate",
    title: "Travel Iron Soleplate Guide: Ceramic vs Stainless vs Titanium",
    excerpt: "The material under the iron decides glide, heat and price — how to choose for your market.",
    date: "August 2026",
    category: "Buyer Guide",
    readTime: "5 min read",
  },
  {
    slug: "lower-moq-china-factory",
    title: "How to Get a Lower MOQ from a Chinese Appliance Factory",
    excerpt: "Six supplier-friendly strategies that reduce your effective minimum order quantity.",
    date: "August 2026",
    category: "Sourcing Guide",
    readTime: "6 min read",
  },
  {
    slug: "vacuum-steamer-wholesale",
    title: "Vacuum Garment Steamer Wholesale: Market Outlook for Importers",
    excerpt: "An emerging category with early-mover advantages — what to check before stocking vacuum steamers.",
    date: "August 2026",
    category: "Industry Insight",
    readTime: "6 min read",
  },
  {
    slug: "travel-iron-moq",
    title: "Travel Iron MOQ Explained: Minimum Order Quantities for Importers",
    excerpt: "Why factories set MOQs, what affects yours, and how to plan your first travel iron import order.",
    date: "August 2026",
    category: "Sourcing Guide",
    readTime: "5 min read",
  },
  {
    slug: "travel-iron-cost",
    title: "How Much Does a Travel Iron Cost? Wholesale Price Breakdown",
    excerpt: "Materials, certifications, customization, quantity and logistics — the cost structure behind every wholesale quote.",
    date: "August 2026",
    category: "Buyer Guide",
    readTime: "6 min read",
  },
  {
    slug: "travel-iron-voltage",
    title: "Travel Iron Voltage Guide: 110V vs 220V vs Dual Voltage",
    excerpt: "How to configure voltage and plugs for every market — and why separate SKUs beat relying on dual voltage.",
    date: "August 2026",
    category: "Sourcing Guide",
    readTime: "5 min read",
  },
  {
    slug: "hotel-steamer-vs-iron",
    title: "Garment Steamer vs Steam Iron for Hotels: Which to Stock",
    excerpt: "Hospitality buyers: how steamers and irons complement each other across guest rooms, housekeeping and laundry.",
    date: "August 2026",
    category: "Buyer Guide",
    readTime: "6 min read",
  },
  {
    slug: "garment-steamer-import-tariffs",
    title: "How to Import Garment Steamers from China: Duties & Tariffs",
    excerpt: "HS codes, customs duties, VAT and incoterms — the clearance side of garment steamer importing.",
    date: "August 2026",
    category: "Import Guide",
    readTime: "7 min read",
  },
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
  {
    slug: "garment-steamer-guide",
    title: "How to Choose a Garment Steamer for Your Market",
    excerpt: "Steam iron vs steamer, power, tank capacity, panel materials and why vacuum garment steamers are the category worth watching.",
    date: "August 3, 2026",
    category: "Sourcing Guide",
    readTime: "7 min read",
  },
  {
    slug: "vacuum-steamer-guide",
    title: "Vacuum Garment Steamer: The Next Big Category in Garment Care",
    excerpt: "How suction technology is changing garment care — and why early entrants will own the market in 2026.",
    date: "August 3, 2026",
    category: "Industry Insight",
    readTime: "7 min read",
  },
  {
    slug: "factory-verification-guide",
    title: "How to Verify a Garment Care Factory in China: A Buyer's Checklist",
    excerpt: "Six practical checks that separate genuine manufacturers from trading companies — before you commit to an order.",
    date: "August 3, 2026",
    category: "Sourcing Guide",
    readTime: "6 min read",
  },
  {
    slug: "steam-iron-guide",
    title: "How to Choose a Steam Iron for Your Market",
    excerpt: "Power, soleplate, tank capacity, steam functions, certifications and container planning — the six numbers that define a winning steam iron line.",
    date: "August 3, 2026",
    category: "Sourcing Guide",
    readTime: "7 min read",
  },
  {
    slug: "steamer-supplier-guide",
    title: "How to Choose a Garment Steamer Supplier",
    excerpt: "A practical guide to shortlisting, verifying and working with professional garment steamer manufacturers in China.",
    date: "August 2026",
    category: "Supplier Guide",
    readTime: "6 min read",
  },
  {
    slug: "travel-iron-wholesale",
    title: "How to Import Travel Irons Wholesale from China",
    excerpt: "Pricing, MOQ, product mix, container planning and batch quality — the complete wholesale sourcing playbook.",
    date: "August 2026",
    category: "Wholesale Guide",
    readTime: "7 min read",
  },
  {
    slug: "vacuum-steamer-supplier",
    title: "Vacuum Garment Steamer Suppliers: 5 Questions to Ask",
    excerpt: "Vacuum steamers are a new category — the five questions that separate real manufacturers from traders.",
    date: "August 2026",
    category: "Supplier Guide",
    readTime: "5 min read",
  },
  {
    slug: "steamer-vs-iron",
    title: "Steam Iron vs Garment Steamer: Which Should You Source?",
    excerpt: "A side-by-side comparison for wholesalers — and why the best strategy may be stocking both categories.",
    date: "August 2026",
    category: "Buyer Guide",
    readTime: "6 min read",
  },
  {
    slug: "private-label-guide",
    title: "How to Start a Private Label Appliance Brand",
    excerpt: "From niche selection to scaling — the complete playbook for launching your own garment care brand with an OEM partner.",
    date: "August 2026",
    category: "Brand Guide",
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
