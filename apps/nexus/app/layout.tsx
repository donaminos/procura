import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Procura Web App",
  description: "AI Driven Procurement Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full bg-gray-900">
      <body className="antialiased h-full">{children}</body>
    </html>
  );
}
