import type { Metadata } from "next";
import "./globals.css";
import { Courier_Prime } from 'next/font/google';

export const metadata: Metadata = {
  title: "Mechanized Viking",
  description: "Portfolio of things made by me",
};

const courierPrime = Courier_Prime({ subsets: ['latin'], weight: '400'});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={courierPrime.className}>
        {children}
      </body>
    </html>
  );
}
