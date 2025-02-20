import localFont from 'next/font/local';

import type { Metadata } from 'next';

import './globals.css';
import { Navbar } from '@/components/navbar';
import Footer from '@/components/sections/footer';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zetarmold.com'),
  title: {
    default:
      'Zetar Mold - Professional Plastic Injection Mold Manufacturer Since 2005',
    template: '%s | Zetar Mold',
  },
  description:
    'ZetarMold is a top-end turnkey plastic injection mold & injection molding manufacturer. Focus on plastic injection mold & injection molding manufacturing since 2005.',
  keywords: [
    'Injection Mold',
    'Injection Molding',
    'Plastic Injection',
    'Mold Manufacturing',
    'Silicone Rubber Molded',
    'Rapid Prototyping',
    'Post Processing',
    'ISO 13485',
    'ISO 9001',
  ],
  authors: [{ name: 'Zetar Mold' }],
  creator: 'Zetar Mold',
  publisher: 'Zetar Industry Co.,Ltd',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'Zetar Mold - Professional Plastic Injection Mold Manufacturer',
    description:
      'ZetarMold is a top-end turnkey plastic injection mold & injection molding manufacturer. Focus on plastic injection mold & injection molding manufacturing since 2005.',
    siteName: 'Zetar Mold',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zetar Mold - Professional Plastic Injection Mold Manufacturer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zetar Mold - Professional Plastic Injection Mold Manufacturer',
    description:
      'ZetarMold is a top-end turnkey plastic injection mold & injection molding manufacturer. Focus on plastic injection mold & injection molding manufacturing since 2005.',
    images: ['/og-image.jpg'],
    creator: '@ZetarMold',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
