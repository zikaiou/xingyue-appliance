import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OEM/ODM Service | Custom Garment Care Manufacturing",
  description: "Partner with XINGYUE for professional OEM/ODM garment care manufacturing: custom logo, colors, packaging and specifications. From concept to mass production for global brands.",
};

export default function OEMLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
