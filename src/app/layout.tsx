import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar, WhatsAppFloat, CustomCursor, MobileBottomNav } from "@/components/Chrome";
import { CartDrawer } from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "The Homespun Gifts — Personalized Luxury Gifts & Hampers",
  description:
    "Handcrafted, personalized gifts for every moment — birthday hampers, anniversary scrapbooks, baby welcome baskets, wedding keepsakes and more. Made with love in India.",
  keywords: [
    "personalized gifts",
    "gift hampers",
    "birthday gifts",
    "anniversary gifts",
    "customized gifts",
    "baby welcome gifts",
    "scrapbooks",
    "snack bouquets",
    "luxury gifts",
    "personalized gift hampers",
  ],
  openGraph: {
    title: "The Homespun Gifts",
    description: "Gifts made with love, memories made forever.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FFF8F0] text-[#332B32] antialiased">
        <Navbar />
        <CartDrawer />
        {children}
        <WhatsAppFloat />
        <CustomCursor />
        <MobileBottomNav />
      </body>
    </html>
  );
}
