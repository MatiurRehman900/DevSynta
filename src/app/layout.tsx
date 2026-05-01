import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devsynta | Building Scalable Digital Solutions",
  description: "Devsynta is a full-service IT company providing web development, mobile apps, DevOps, cybersecurity, SEO, and digital marketing services.",
  keywords: "IT services, web development, mobile apps, DevOps, cybersecurity, SEO, digital marketing",
  authors: [{ name: "Devsynta" }],
  openGraph: {
    title: "Devsynta | Building Scalable Digital Solutions",
    description: "Devsynta is a full-service IT company providing web development, mobile apps, DevOps, cybersecurity, SEO, and digital marketing services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
