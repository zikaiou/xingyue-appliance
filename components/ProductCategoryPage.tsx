import Image from "next/image";
import Link from "next/link";
import type { CatalogProduct, ProductCategory } from "@/lib/product-catalog";

export type CategoryPageConfig = {
  category: ProductCategory;
  eyebrow: string;
  title: string;
  intro: string;
  capabilityTitle: string;
  capability: string;
  applicationsTitle: string;
  applications: string;
  customization: string;
  faqs: { question: string; answer: string }[];
};

const SITE_URL = "https://www.xingyue-appliance.com";

export default function ProductCategoryPage({ config, products }: { config: CategoryPageConfig; products: CatalogProduct[] }) {
  const categorySlug = config.category === "Travel Iron"
    ? "travel-irons"
    : config.category === "Garment Steamer"
      ? "garment-steamers"
      : config.category === "Steam Iron"
        ? "steam-irons"
        : "vacuum-garment-steamers";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: config.title, item: `${SITE_URL}/products/${categorySlug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-6 pt-8 text-sm text-white/45">
        <Link href="/" className="hover:text-white">Home</Link><span className="mx-2">/</span>
        <Link href="/products" className="hover:text-white">Products</Link><span className="mx-2">/</span>
        <span className="text-white/70">{config.category}s</span>
      </nav>

      <header className="mx-auto max-w-4xl px-6 pb-14 pt-16 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff2f7d]">{config.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{config.title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">{config.intro}</p>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16" aria-labelledby="collection-heading">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Verified product collection</p>
            <h2 id="collection-heading" className="mt-2 text-2xl font-bold">{config.category} Models</h2>
          </div>
          <Link href="/contact" className="hidden rounded-full bg-[#ff2f7d] px-5 py-3 text-sm font-semibold text-white sm:inline-flex">Request a Quote</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.slug} className="group overflow-hidden rounded-2xl border border-white/8 bg-white/4 transition hover:border-[#ff2f7d]/40">
              <Link href={`/products/${product.slug}`} className="block" aria-label={`View ${product.model} ${product.name}`}>
                <div className="aspect-square bg-[#0d0d12] p-6">
                  <Image src={product.image} alt={`${product.model} ${product.name.toLowerCase()}`} width={300} height={300} className="h-full w-full object-contain" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold">{product.model}</h3>
                  <p className="mt-1 text-xs text-white/45">{product.name}</p>
                  <ul className="mt-3 space-y-1">
                    {product.features.map((feature) => <li key={feature} className="text-xs text-white/60">{feature}</li>)}
                  </ul>
                  <span className="mt-4 inline-flex text-xs font-semibold text-[#ff2f7d]">View Product</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0a0a0e]" aria-labelledby="capability-heading">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff2f7d]">OEM / ODM Capability</p>
            <h2 id="capability-heading" className="mt-3 text-2xl font-bold">{config.capabilityTitle}</h2>
            <p className="mt-4 leading-7 text-white/60">{config.capability}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff2f7d]">Customization Options</p>
            <p className="mt-3 leading-7 text-white/60">{config.customization}</p>
            <Link href="/oem" className="mt-5 inline-flex rounded-full border border-[#ff2f7d]/50 px-5 py-3 text-sm font-semibold text-[#ff2f7d]">Explore OEM / ODM</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16" aria-labelledby="applications-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff2f7d]">Buyer Applications</p>
        <h2 id="applications-heading" className="mt-3 text-2xl font-bold">Built for practical garment care programs</h2>
        <p className="mt-4 max-w-3xl leading-7 text-white/60">{config.applicationsTitle}: {config.applications}</p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16" aria-labelledby="faq-heading">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#ff2f7d]">Buyer FAQ</p>
        <h2 id="faq-heading" className="mt-3 text-center text-2xl font-bold">Questions from sourcing teams</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/8">
          {config.faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="cursor-pointer list-none font-semibold">{faq.question}</summary>
              <p className="mt-3 leading-7 text-white/60">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#0a0a0e] px-6 py-14 text-center">
        <h2 className="text-2xl font-bold">Discuss your {config.category.toLowerCase()} program</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/55">Share your target market, model interests and customization requirements with the XINGYUE team.</p>
        <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[#ff2f7d] px-7 py-4 font-semibold text-white">Request a Quote</Link>
      </section>
    </main>
  );
}
