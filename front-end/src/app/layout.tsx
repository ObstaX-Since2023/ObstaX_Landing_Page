import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ObstaX",
  url: siteUrl,
  logo: `${siteUrl}/images/og/obstax-home.png`,
  sameAs: [
    "https://www.linkedin.com/company/obstax",
  ],
};

// SEO Metadata
export const metadata: Metadata = {
  title: "ObstaX. AI Navigation for the Visually Impaired",
  description: "Assistive Navigation Device for the Blind and Visually Impaired in Singapore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-w-[375px] bg-primary-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
