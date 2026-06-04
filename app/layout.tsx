import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FACT SPECIALITY COFFEE Kuwait",
  description:
    "FACT SPECIALITY COFFEE is a cozy specialty coffee spot on 79 St, Kuwait, open daily with extended weekend hours.",
  keywords: [
    "FACT coffee Kuwait",
    "speciality coffee Kuwait",
    "coffee 79 St Kuwait",
    "FACT KWT",
    "cozy coffee Kuwait"
  ],
  metadataBase: new URL("https://instagram.com")
};

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark", displayFont.variable, bodyFont.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
