import type { Metadata } from 'next';
import { Inter, Syne, Space_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
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
  openGraph: {
    title: 'Prince | Professional Video Editor & Colorist',
    description:
      'High-impact video editing, professional color grading, and motion graphics powered by DaVinci Resolve.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${spaceMono.variable} scroll-smooth`}>
      <body className="bg-[#07070c] text-gray-100 antialiased selection:bg-accent-violet selection:text-white">
        {children}
      </body>
    </html>
  );
}
