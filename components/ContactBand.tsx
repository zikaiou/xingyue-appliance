import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function ContactBand() {
  return (
    <section className="bg-pink-600">
      <div className="container-shell grid gap-8 py-20 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/70">
            Talk to XING
          </p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black sm:text-5xl">
            Ready to develop your next steam-care product?
          </h2>
          <p className="mt-5 text-white/75">
            {siteConfig.company} · {siteConfig.email} · {siteConfig.whatsappDisplay}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-7 py-4 font-black text-black"
          >
            WhatsApp
          </a>
          <Link href="/contact" className="rounded-full border border-white/40 px-7 py-4 font-black">
            Request Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
