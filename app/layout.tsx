import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Cormorant_Unicase } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-outfit',          
})

const cormorantUnicase = Cormorant_Unicase({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant-unicase',
})

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://boluajibola.com"),
  title: {
    default: "Bolu Ajibola — Researcher, Creative & R&D Professional",
    template: "%s | Bolu Ajibola",
  },
  description:
    "Bolu Ajibola is a researcher, creative practitioner, and research & development professional working at the intersection of governance, democracy, impact, and public engagement.",
  keywords: [
    "Bolu Ajibola",
    "researcher",
    "research impact",
    "creative practitioner",
    "MC BSharp",
    "governance",
    "democracy",
    "public engagement",
    "spoken word",
    "research development",
  ],
  authors: [{ name: "Bolu Ajibola" }],
  creator: "Bolu Ajibola",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://boluajibola.com",
    siteName: "Bolu Ajibola",
    title: "Bolu Ajibola — Researcher, Creative & R&D Professional",
    description:
      "Researcher, creative practitioner, and R&D professional working at the intersection of governance, democracy, impact, and public engagement.",
    images: [
      {
        url: "/heroImage.jpg",
        width: 1200,
        height: 630,
        alt: "Bolu Ajibola — Researcher, Creative & R&D Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolu Ajibola — Researcher, Creative & R&D Professional",
    description:
      "Researcher, creative practitioner, and R&D professional working at the intersection of governance, democracy, impact, and public engagement.",
    creator: "@_boluajibola",
    images: ["/heroImage.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bolu Ajibola",
  alternateName: "MC BSharp",
  url: "https://boluajibola.com",
  image: "https://boluajibola.com/heroImage.jpg",
  jobTitle: "Researcher & R&D Professional",
  description:
    "Researcher, creative practitioner, and research & development professional working at the intersection of governance, democracy, impact, and public engagement.",
  sameAs: [
    "https://www.linkedin.com/in/boluajibola/",
    "https://x.com/_boluajibola",
    "https://www.instagram.com/_boluajibola/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorantUnicase.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#0C0C0C]`}
    >
      <body className="min-h-full bg-[#0C0C0C] flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

