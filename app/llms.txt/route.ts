import { siteConfig } from "@/lib/site";

// llms.txt — machine-readable site guide for AI engines (llmstxt.org convention).
// Kept in sync with the real site data (lib/site.ts + product catalog).

const SITE_URL = "https://www.xingyue-appliance.com";

type Product = { slug: string; model: string; desc: string; cat: string };

// Product catalog mirrors components/RelatedProducts.tsx (20 live models).
const PRODUCTS: Product[] = [
  { slug: "st-718", model: "ST-718", desc: "Portable steam iron", cat: "Travel Iron" },
  { slug: "st-717", model: "ST-717", desc: "Portable steam iron", cat: "Travel Iron" },
  { slug: "st-588", model: "ST-588", desc: "Portable steam iron", cat: "Travel Iron" },
  { slug: "st-812", model: "ST-812", desc: "Portable steam iron", cat: "Travel Iron" },
  { slug: "st-8807", model: "ST-8807", desc: "Professional travel iron", cat: "Travel Iron" },
  { slug: "st-8808", model: "ST-8808", desc: "Professional travel iron", cat: "Travel Iron" },
  { slug: "st-817", model: "ST-817", desc: "Professional travel iron", cat: "Travel Iron" },
  { slug: "st-200a", model: "ST-200A", desc: "Professional travel iron", cat: "Travel Iron" },
  { slug: "st-815", model: "ST-815", desc: "Powerful garment steamer", cat: "Garment Steamer" },
  { slug: "6617", model: "6617", desc: "Powerful garment steamer", cat: "Garment Steamer" },
  { slug: "900a", model: "900A", desc: "Compact garment steamer", cat: "Garment Steamer" },
  { slug: "6618", model: "6618", desc: "Compact garment steamer", cat: "Garment Steamer" },
  { slug: "st-s1001", model: "ST-S1001", desc: "Professional steam iron", cat: "Steam Iron" },
  { slug: "st-s1002", model: "ST-S1002", desc: "Ultra-powerful steam iron", cat: "Steam Iron" },
  { slug: "st-s1003", model: "ST-S1003", desc: "Versatile steam iron", cat: "Steam Iron" },
  { slug: "st-s1004", model: "ST-S1004", desc: "Self-clean steam iron", cat: "Steam Iron" },
  { slug: "9002", model: "9002", desc: "Professional vacuum steamer", cat: "Vacuum Garment Steamer" },
  { slug: "9003", model: "9003", desc: "3-in-1 vacuum steamer", cat: "Vacuum Garment Steamer" },
  { slug: "9004", model: "9004", desc: "3-in-1 vacuum steamer", cat: "Vacuum Garment Steamer" },
  { slug: "9005", model: "9005", desc: "Professional vacuum steamer", cat: "Vacuum Garment Steamer" },
];

const PRODUCT_CATS = ["Travel Iron", "Garment Steamer", "Steam Iron", "Vacuum Garment Steamer"];

const SERVICE_PAGES: { href: string; label: string; note: string }[] = [
  { href: "/", label: "Home", note: "Company overview, featured products and FAQ" },
  { href: "/products", label: "All Products", note: "Complete product lineup with specs" },
  { href: "/oem", label: "OEM / ODM Services", note: "Private label and custom manufacturing" },
  { href: "/factory", label: "Factory", note: "Manufacturing capabilities and quality control" },
  { href: "/certifications", label: "Certifications", note: "CE, FCC, RoHS and other compliance" },
  { href: "/case-studies", label: "Case Studies", note: "Client collaboration examples" },
  { href: "/about", label: "About Us", note: "Company profile and history" },
  { href: "/contact", label: "Contact", note: "Inquiry form and direct contacts" },
];

const BUYING_PAGES: { href: string; label: string }[] = [
  { href: "/wholesale-travel-irons", label: "Wholesale Travel Irons" },
  { href: "/garment-steamer-manufacturer", label: "Garment Steamer Manufacturer" },
  { href: "/steam-iron-factory", label: "Steam Iron Factory" },
  { href: "/vacuum-garment-steamer-supplier", label: "Vacuum Garment Steamer Supplier" },
  { href: "/guides/moq-guide", label: "MOQ Guide" },
  { href: "/guides/price-guide", label: "Price Guide" },
  { href: "/guides/size-guide", label: "Size Guide" },
];

const KEY_GUIDES: { href: string; label: string }[] = [
  { href: "/blog/travel-iron-guide", label: "Travel Iron Buying Guide" },
  { href: "/blog/garment-steamer-guide", label: "Garment Steamer Guide" },
  { href: "/blog/factory-verification-guide", label: "Factory Verification Guide" },
  { href: "/blog/steamer-vs-iron", label: "Steamer vs Iron" },
  { href: "/blog/travel-iron-moq", label: "Travel Iron MOQ" },
  { href: "/blog/garment-steamer-import-tariffs", label: "Garment Steamer Import Tariffs" },
  { href: "/blog/oem-partner-checklist", label: "OEM Partner Checklist" },
  { href: "/blog/private-label-guide", label: "Private Label Guide" },
];

export function GET() {
  const lines: string[] = [];

  // H1
  lines.push(
    `# ${siteConfig.company} — Travel Iron & Garment Steamer Manufacturer`
  );
  lines.push("");

  // Lead paragraph (plain text, no links)
  lines.push(
    `${siteConfig.company} (brand: ${siteConfig.brand}, tagline: "${siteConfig.tagline}") is a B2B manufacturer of travel irons, steam irons, garment steamers and vacuum garment steamers, based in Huizhou, China. We serve wholesalers, retailers, hotel groups and D2C brands worldwide with OEM/ODM, private label and wholesale programs. MOQ 500-1000 units, lead time 30-45 days.`
  );
  lines.push("");

  // Metadata block
  lines.push("> Contact: amy@xingyue.store | WhatsApp: +86 159 1388 1634 | Website: https://www.xingyue-appliance.com");
  lines.push("> Product catalog: 20 models across 4 categories | Services: OEM / ODM / Wholesale / Private Label");
  lines.push("");

  // Company & services
  lines.push("## Company & Services");
  lines.push("");
  for (const p of SERVICE_PAGES) {
    lines.push(`- [${p.label}](${SITE_URL}${p.href}) — ${p.note}`);
  }
  lines.push("");

  // Products by category
  for (const cat of PRODUCT_CATS) {
    lines.push(`## ${cat}s`);
    lines.push("");
    const items = PRODUCTS.filter((p) => p.cat === cat);
    for (const p of items) {
      lines.push(`- [${p.model} ${p.desc}](${SITE_URL}/products/${p.slug})`);
    }
    lines.push("");
  }

  // Buying guides / landing pages
  lines.push("## Buying Guides & Wholesale Pages");
  lines.push("");
  for (const p of BUYING_PAGES) {
    lines.push(`- [${p.label}](${SITE_URL}${p.href})`);
  }
  lines.push("");

  // Knowledge center
  lines.push("## Knowledge Center (Selected Guides)");
  lines.push("");
  for (const p of KEY_GUIDES) {
    lines.push(`- [${p.label}](${SITE_URL}${p.href})`);
  }
  lines.push(`- [All Articles](${SITE_URL}/blog)`);
  lines.push("");

  // Contact
  lines.push("## Contact");
  lines.push("");
  lines.push(`- Email: ${siteConfig.email}`);
  lines.push(`- WhatsApp: ${siteConfig.whatsappDisplay}`);
  lines.push(`- Inquiry form: ${SITE_URL}/contact`);

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
