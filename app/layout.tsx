import type { Metadata } from "next";
import { Inter, Leckerli_One, Kavoon } from "next/font/google";
import "./globals.css";
import Header from "./common/header";
import Footer from "./common/footer";

// Default Font
const inter = Inter({ subsets: ["latin"], display: "swap" });
// Special Font
const leckerliOne = Leckerli_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--special-font",
  display: "swap",
});
// The Font Used In Brand
const kavoon = Kavoon({
  subsets: ["latin"],
  weight: "400",
  variable: "--brand-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shoes Store",
  description: "Ecommerce website using Next.Js, TypeScript & TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${leckerliOne.variable} ${kavoon.variable} grid min-h-svh text-natural`}
        style={{ gridTemplateRows: "auto 1fr auto" }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
