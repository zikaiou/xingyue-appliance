import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xingyue-appliance.com"),
  title: {
    default: "XINGYUE | Travel Iron & Garment Steamer Manufacturer | OEM/ODM Factory",
    template: "%s | XINGYUE",
  },
  description:
    "XINGYUE is a professional travel iron manufacturer and garment steamer supplier. OEM garment care products factory with 16+ years experience. 35,000m² production base.",
  keywords: [
    "travel iron manufacturer",
    "garment steamer manufacturer",
    "OEM garment care manufacturer",
    "travel iron factory",
    "garment care products supplier",
  ],
  openGraph: {
    title: "XINGYUE | Travel Iron & Garment Steamer Manufacturer",
    description:
      "Professional OEM garment care manufacturer. Travel iron and garment steamer factory with 16+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "XINGYUE",
              url: "https://www.xingyue-appliance.com",
              description: "Professional travel iron and garment steamer manufacturer providing OEM/ODM services for global brands.",
              foundingDate: "2010",
              areaServed: "Worldwide",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Product Categories",
                itemListElement: [
                  { "@type":"Offer","itemOffered":{ "@type":"Product","name":"Travel Iron" } },
                  { "@type":"Offer","itemOffered":{ "@type":"Product","name":"Garment Steamer" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
