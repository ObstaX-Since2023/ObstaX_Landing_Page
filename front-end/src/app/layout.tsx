import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// SEO Metadata
export const metadata: Metadata = {
  title: "ObstaX",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}