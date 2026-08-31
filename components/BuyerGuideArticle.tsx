import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export type BuyerGuideSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BuyerGuideTable = {
  title: string;
  headers: [string, string];
  rows: [string, string][];
};

export type BuyerGuideArticleProps = {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  published: string;
  publishedLabel: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  primaryKeyword: string;
  lead: string;
  sections: BuyerGuideSection[];
  table?: BuyerGuideTable;
  internalLinks: { href: string; label: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaHref: string;
};

const SITE_URL = "https://www.xingyue-appliance.com";

export default function BuyerGuideArticle({
  slug,
  title,
  eyebrow,
  excerpt,
  published,
  publishedLabel,
  category,
  readTime,
  image,
  imageAlt,
  primaryKeyword,
  lead,
  sections,
  table,
  internalLinks,
  ctaTitle,
  ctaText,
  ctaHref,
}: BuyerGuideArticleProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    datePublished: published,
    dateModified: published,
    author: { "@type": "Organization", name: "XINGYUE Team", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Xingyue Technology Co., Ltd.",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/v72/xingyue-logo-magenta.webp` },
    },
    image: [`${SITE_URL}${image}`],
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
    articleSection: category,
    keywords: primaryKeyword,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: `${SITE_URL}/blog/${slug}` },
    ],
  };

  return (
    <article className="min-h-screen bg-[#050507] text-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="mx-auto max-w-4xl px-6 pt-24">
        <nav aria-label="Breadcrumb" className="text-sm text-white/45">
          <Link href="/" className="hover:text-white">Home</Link><span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white">Blog</Link><span className="mx-2">/</span>
          <span className="text-white/70">{category}</span>
        </nav>
      </div>
      <header className="mx-auto max-w-4xl px-6 py-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff2f7d]">{eyebrow}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/40">
          <span>{publishedLabel}</span><span>•</span><span>{category}</span><span>•</span><span>{readTime}</span>
        </div>
        <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">{excerpt}</p>
      </header>
      <div className="mx-auto max-w-3xl px-6 pb-20">
        <div className="mx-auto mb-10 max-w-md overflow-hidden rounded-2xl border border-white/8 bg-[#0d0d12]">
          <div className="relative aspect-square"><Image src={image} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 448px" className="object-contain p-8" /></div>
        </div>
        <p className="mb-10 text-white/70 leading-8">{lead}</p>
        {table && <section className="mb-10 overflow-hidden rounded-2xl border border-white/8 bg-white/4" aria-labelledby="evaluation-table-title">
          <h2 id="evaluation-table-title" className="px-6 pt-6 text-xl font-bold">{table.title}</h2>
          <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[560px] border-collapse text-left text-sm"><thead><tr className="border-y border-white/10 bg-white/5"><th className="px-6 py-3 font-semibold text-white">{table.headers[0]}</th><th className="px-6 py-3 font-semibold text-white">{table.headers[1]}</th></tr></thead><tbody>{table.rows.map(([check, reason]) => <tr key={check} className="border-b border-white/8 last:border-b-0"><td className="px-6 py-4 align-top font-medium text-white/85">{check}</td><td className="px-6 py-4 align-top leading-6 text-white/60">{reason}</td></tr>)}</tbody></table></div>
        </section>}
        {sections.map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">{section.title}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mb-4 leading-8 text-white/65">{paragraph}</p>)}
            {section.bullets && <ul className="mt-5 space-y-3 rounded-2xl border border-white/8 bg-white/4 p-6">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-white/65"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#ff2f7d]" />{bullet}</li>)}</ul>}
          </section>
        ))}
        <section className="my-12 rounded-2xl border border-white/8 bg-white/4 p-7">
          <h2 className="text-xl font-bold">Continue your sourcing research</h2>
          <div className="mt-5 flex flex-wrap gap-3">{internalLinks.map((link) => <Link key={link.href} href={link.href} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 hover:border-[#ff2f7d]/60 hover:text-white">{link.label}</Link>)}</div>
        </section>
        <section className="rounded-2xl border border-[#ff2f7d]/30 bg-[#ff2f7d]/8 p-8 text-center">
          <h2 className="text-2xl font-bold">{ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-white/60">{ctaText}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href={ctaHref} className="inline-flex items-center gap-2 rounded-full bg-[#ff2f7d] px-7 py-3 font-semibold text-white">{ctaTitle} <ArrowRight size={16} /></Link>
            <a href="https://wa.me/8615913881634" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-white/20 px-7 py-3 font-semibold text-white hover:border-white/50">Contact on WhatsApp</a>
          </div>
        </section>
      </div>
    </article>
  );
}
