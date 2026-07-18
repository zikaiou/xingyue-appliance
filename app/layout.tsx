import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "XINGYUE | Smart Clothing Care",
    template: "%s | XINGYUE",
  },
  description:
    "XING develops smart steam irons and clothing care appliances with OEM and ODM support for global brands.",
  metadataBase: new URL("https://www.xingyue-appliance.com"),
  openGraph: {
    title: "XINGYUE | Smart Clothing Care",
    description:
      "Smart steam technology and OEM manufacturing solutions for modern clothing care.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
