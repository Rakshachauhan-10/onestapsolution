import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const monst = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "One Stop Solution",
  description: "Find the nearest Hospital, Clinic, or Pharmacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={
        cn([
          monst,
          'bg-[#151515]'
        ])
      }>{children}</body>
    </html>
  );
}
