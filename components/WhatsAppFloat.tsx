"use client";

import { Mail, MessageCircle, ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact XING on WhatsApp"
        className="grid place-items-center rounded-full bg-[#25D366] p-4 shadow-xl transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`mailto:${siteConfig.email}`}
        aria-label="Email XING"
        className="grid place-items-center rounded-full bg-white p-4 text-black shadow-xl transition hover:scale-105"
      >
        <Mail className="h-6 w-6" />
      </a>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="grid place-items-center rounded-full border border-white/15 bg-black p-4 shadow-xl transition hover:scale-105"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
}
