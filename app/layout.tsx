import type { Metadata } from 'next';
import { Fraunces, Newsreader, JetBrains_Mono } from 'next/font/google';
import { ClientChrome } from './components/ClientChrome';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
  adjustFontFallback: false,
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
  adjustFontFallback: false,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sheltoncui.com'),
  title: 'Shelton Cui — Full-stack & AI Developer',
  description:
    'Full-stack and AI application developer based in Melbourne. React, Next.js, Node.js, AWS, LangGraph.',
  openGraph: {
    title: 'Shelton Cui — Full-stack & AI Developer',
    description:
      'Full-stack and AI application developer based in Melbourne.',
    type: 'website',
    locale: 'en_AU',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ClientChrome />
        <div className="stage">{children}</div>
      </body>
    </html>
  );
}
