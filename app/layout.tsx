import "@/styles/globals.css";

import type { Metadata } from "next";
import { inter } from "@/assets/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${inter.className}`}>{children}</body>
    </html>
  );
}
