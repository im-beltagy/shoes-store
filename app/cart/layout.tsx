import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart | Shoes Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
