"use client";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" aria-label="XINGYUE home">
          <img src="/images/v72/xingyue-logo-magenta.webp" alt="XINGYUE" className="site-logo" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-[15px] font-medium text-white/85 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85 lg:inline-flex">
          Request a Quote
        </Link>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-white/10 bg-black transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[480px] border-t opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="container-shell flex flex-col gap-1 py-4" aria-label="Mobile navigation">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-white/85 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
              <ArrowRight size={15} className="text-white/30" />
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#ff2f7d] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#e6006f]"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
