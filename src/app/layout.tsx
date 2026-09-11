import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-website-three-gamma-95.vercel.app'),
  title: 'Prince | Professional Video Editor & Colorist (DaVinci Resolve)',
  description:
    'Portfolio of Prince, a passionate 16-year-old freelance Video Editor & Colorist specializing in DaVinci Resolve, Motion Graphics, Promotional Videos, and Color Grading.',
  keywords: [
    'Prince Video Editor',
    'DaVinci Resolve Colorist',
    'Freelance Video Editor',
    'Motion Graphics Editor',
    'Promotional Video Editor',
    'Color Grading Specialist',
  ],
  authors: [{ name: 'Prince' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Prince | Professional Video Editor & Colorist',
    description:
      'High-impact video editing, professional color grading, and motion graphics powered by DaVinci Resolve.',
    type: 'website',
    url: 'https://portfolio-website-three-gamma-95.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050507] text-[#e5e1e5] antialiased selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
