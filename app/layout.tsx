import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { ClientChrome } from './components/ClientChrome';
import './globals.css';

// The one and only typeface — JetBrains Mono, multiple weights for hierarchy.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sheltoncui.com'),
  title: 'Shelton Cui — Full-stack Engineer',
  description:
    'Full-stack engineer based in Melbourne. Next.js, React, Node.js, AWS, applied AI.',
  openGraph: {
    title: 'Shelton Cui — Full-stack Engineer',
    description: 'Full-stack engineer based in Melbourne.',
    type: 'website',
    locale: 'en_AU',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        <ClientChrome />
        <div className="stage">{children}</div>
      </body>
    </html>
  );
}
