import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nikola Dinevski",
  description: "Software Engineer",
  category: "portfolio",
  creator: "Nikola Dinevski",
  keywords: [
    "Nikola Dinevski",
    "Dinevski",
    "Nikola",
    "Portfolio",
    "Developer",
    "Software Developer",
    "Software Engineer",
    "Full-Stack Developer",
  ],
  openGraph: {
    title: "Nikola Dinevski",
    description: "Software Engineer",
    images: "ndinevskiThumbnail.png",
    type: "website",
    siteName: "Nikola Dinevski",
    url: "ndinevski.com",
  },
  twitter: {
    title: "Nikola Dinevski",
    description: "Software Engineer",
    images: "ndinevskiThumbnail.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="w-full h-full" lang="en">
      <meta property="og:image:height" content="270" />
      <meta property="og:image:width" content="470" />
      <body
        className={`w-full h-full ${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Analytics />
        <SpeedInsights />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
