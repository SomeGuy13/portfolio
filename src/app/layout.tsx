import type { Metadata } from "next";
import Link from 'next/link';
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
        <div className='lg:w-7/12 md:w-5/6 p-2 m-auto'>
          <div className='flex justify-end w-full'>
            <Link href='/'><p className='p-4 sm:m-5'>About</p></Link>
            <Link href='/blog'><p className='p-4 sm:m-5'>Blog</p></Link>
            <Link href='/projects'><p className='p-4 sm:m-5'>Project Gallery</p></Link>
          </div>
          {children}
          <div className='h-12 sm:h-32'></div>
        </div>
      </body>
    </html>
  );
}
