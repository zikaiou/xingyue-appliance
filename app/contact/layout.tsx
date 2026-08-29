import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/contact" },
  title: "Contact Us | XINGYUE Garment Care Manufacturer",
  description: "Contact XINGYUE for factory pricing, samples and OEM consultation. Email amy@xingyue.store or WhatsApp +86 159 1388 1634. Response within 24 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
