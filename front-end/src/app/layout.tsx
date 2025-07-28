import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

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
        <h1 className="scroll-m-20 text-4xl font-bold lg:text-6xl text-center mt-40">Footer</h1>
      </body>
    </html>
  );
}