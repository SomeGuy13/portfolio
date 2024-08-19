import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mechanized Viking",
  description: "Portfolio of things made by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
