import type { Metadata } from "next";

import "./globals.css";
import Header from "@/app/header/page";
import Footer from "@/app/products/footer/page";

export const metadata: Metadata = {
  title: "E-ecommer Website",
  description: "Du an tot nghiep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
