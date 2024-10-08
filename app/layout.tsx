import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/app/components/NavBar';
import './globals.css';
import SideBar from '@/app/components/SideBar';

export const metadata: Metadata = {
  title: 'SheltOn',
  description: 'My personal website!',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg font-sans`}>
        <NavBar />
        <SideBar />
        <div className="mx-auto max-w-[1600px] md:px-[150px] sm:px-[100px] px-[50px]">
          {children}
        </div>
      </body>
    </html>
  );
}
