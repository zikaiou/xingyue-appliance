"use client";

import Link from "next/link";
import { MessageCircle, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function MobileCTABar() {
  return (
    <div className="mobile-cta-bar" role="complementary" aria-label="Quick actions">
      <Link href="/contact" className="cta-quote">
        <FileText size={17} /> Request Quote
      </Link>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="cta-whatsapp"
      >
        <MessageCircle size={17} /> WhatsApp
      </a>
    </div>
  );
}
