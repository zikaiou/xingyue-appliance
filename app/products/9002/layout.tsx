import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "9002 Vacuum Garment Steamer | Ceramic Soleplate | XINGYUE",
  description: "9002 Vacuum Garment Steamer with 1500W power, 400ml detachable water tank, dual steam adjustment, dual vacuum technology, LED display and ceramic soleplate. OEM & ODM available.",
  alternates: {
    canonical: "/products/9002",
  },
};

export default function P9002Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
