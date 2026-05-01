import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'UN1QUE | Premium Marketing & SMM',
  description: 'Premium darajadagi raqamli marketing xizmatlari. Zamonaviy strategiyalar va aniq natijalar.',
  openGraph: {
    title: 'UN1QUE | Premium Marketing',
    description: 'Biznesingiz uchun premium darajadagi raqamli marketing xizmatlari.',
    type: 'website',
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased font-sans">{children}</body>
    </html>
  );
}
