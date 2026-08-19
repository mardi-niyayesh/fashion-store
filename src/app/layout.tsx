import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/Components/layout/Heder";
import Footer from "@/Components/layout/Footer";

export const metadata: Metadata = {
  title: "Fashion Store",
  description: "A modern fashion store",
};

const iranSans = localFont({
  src: [
    {
      path: "../fonts/IRANSansX-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/IRANSansX-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/IRANSansX-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iran-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${iranSans.variable} h-full antialiased`}
    >
      <body
        className={`${iranSans.className} min-h-screen flex flex-col`}
      >
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}