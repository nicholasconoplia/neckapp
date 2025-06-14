import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeckCare - Your Daily Neck Pain Relief Companion",
  description: "Evidence-based exercises and guidance for neck pain relief, backed by scientific research.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
