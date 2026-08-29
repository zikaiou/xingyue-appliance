import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileCTABar from "@/components/MobileCTABar";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xingyue-appliance.com"),
  alternates: { canonical: "https://www.xingyue-appliance.com/" },
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
    images: [
      {
        url: "/images/og-share.jpg",
        width: 1200,
        height: 675,
        alt: "XINGYUE - Travel Iron & Garment Steamer Manufacturer",
      },
    ],
  },
  verification: {
    google: "Z5MW366T8lGi0vls4B81ys4ZtbOJPW09xSk0eeKGLPk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/v72/hero-product-720.webp"
          media="(max-width: 760px)"
        />
        <link
          rel="preload"
          as="image"
          href="/images/v72/hero-product-1200.webp"
          media="(min-width: 761px)"
        />
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
            }),
          }}
        />
      </head>
      <body>
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
            <Script id="ga4-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileCTABar />
      </body>
    </html>
  );
}
