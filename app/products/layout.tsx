import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Travel Iron, Garment Steamer & Steam Iron Manufacturer",
  description: "Explore XINGYUE's product range: professional travel iron, garment steamer, steam iron and vacuum garment steamer. OEM/ODM customization available from a 35,000 m² manufacturer.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
