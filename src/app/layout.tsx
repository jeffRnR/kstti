// src/app/layout.tsx

import type { Metadata } from "next";
import {
  Cinzel,
  Satisfy,
  DM_Sans,
  Libre_Baskerville,
  Bodoni_Moda,
} from "next/font/google";
import "./globals.css";
import IntakePopup from "@/components/home/IntakePopup";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-baskerville",
  weight: ["400", "700"],
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["600", "700"],
  display: "swap",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  variable: "--font-satisfy",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kirinyaga Seniors Technical Training Institute",
    template: "%s | KSTTI",
  },
  description:
    "Kirinyaga Seniors Technical Training Institute provides quality technical education through practical training and personalized student support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${libreBaskerville.variable} ${bodoniModa.variable} ${cinzel.variable} ${satisfy.variable}`}
      >
        {children}
        <IntakePopup />
      </body>
    </html>
  );
}