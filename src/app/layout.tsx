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
      <body>
        <div className='lg:w-3/6 md:w-5/6 p-2 m-auto'>
          {children}
        </div>
      </body>
    </html>
  );
}
