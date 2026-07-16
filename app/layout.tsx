import type { Metadata } from "next";
import { Urbanist, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piqual | AI-Powered B2B Lead Generation Platform",
  description:
    "Piqual is an AI-powered B2B lead generation platform that helps teams plan, execute, and optimize campaigns to generate high-quality B2B leads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${urbanist.variable} ${inter.variable}`}
    >
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
