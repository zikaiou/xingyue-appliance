import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.xingyue-appliance.com/factory" },
  title: "Factory | XINGYUE 35,000 m² Manufacturing Base",
  description: "Tour XINGYUE's 35,000 m² garment care factory: advanced production lines, strict 5-stage quality control and OEM manufacturing capability with 16+ years of experience.",
};

export default function FactoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
